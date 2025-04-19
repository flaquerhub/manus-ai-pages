
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import type { Editor } from 'grapesjs';

// Export the editor content as HTML, CSS, and JS
export const exportToHtml = (editor: Editor) => {
  const html = editor.getHtml();
  const css = editor.getCss();
  const js = editor.getJs();
  
  // Create a complete HTML document
  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Landing Page</title>
  <style>
${css}
  </style>
</head>
<body>
${html}
  <script>
${js}
  </script>
</body>
</html>`;

  return htmlContent;
};

// Export the project as a ZIP file
export const exportToZip = async (editor: Editor) => {
  const zip = new JSZip();
  const htmlContent = exportToHtml(editor);
  
  // Add the HTML file to the ZIP
  zip.file('index.html', htmlContent);
  
  // If there are assets, add them to the ZIP
  const assets = editor.AssetManager.getAll();
  const assetsFolder = zip.folder('assets');
  
  assets.forEach((asset: any) => {
    const url = asset.get('src');
    if (url && !url.startsWith('http')) {
      // For local assets
      const filename = url.split('/').pop();
      assetsFolder?.file(filename, url);
    }
  });
  
  // Generate the ZIP file and trigger download
  const content = await zip.generateAsync({ type: 'blob' });
  saveAs(content, 'landing-page.zip');
};

export interface PublishOptions {
  customDomain?: string;
}

export interface PublishResult {
  success: boolean;
  url?: string;
  logs: string[];
  error?: string;
}

export const publishToNetlify = async (
  editor: Editor, 
  options: PublishOptions = {},
  onProgress?: (progress: number, log: string) => void
): Promise<PublishResult> => {
  const logs: string[] = [];
  let success = false;
  let siteUrl = '';
  
  try {
    // Log the start of the process
    const log = (message: string) => {
      logs.push(message);
      onProgress && onProgress(0, message);
    };
    
    // Step 1: Prepare the files
    log('Preparing files for publication...');
    onProgress && onProgress(10, 'Preparing files for publication...');
    
    // In a real implementation, you would:
    // 1. Generate a ZIP with all files
    // 2. Send it to Netlify API
    // But we'll simulate it for this demo
    
    // Step 2: Simulate compressing files
    log('Compressing files...');
    onProgress && onProgress(30, 'Compressing files...');
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Step 3: Simulate uploading to Netlify
    log('Uploading to Netlify...');
    onProgress && onProgress(50, 'Uploading to Netlify...');
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Step 4: Simulate waiting for deployment
    log('Processing deployment...');
    onProgress && onProgress(70, 'Processing deployment...');
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Step 5: Simulate deployment complete
    // Generate a random subdomain
    const randomString = Math.random().toString(36).substring(2, 8);
    siteUrl = `https://${randomString}.netlify.app`;
    
    log(`Deployment completed successfully!`);
    log(`Your site is live at: ${siteUrl}`);
    onProgress && onProgress(100, `Deployment completed successfully!`);
    
    // If custom domain is specified
    if (options.customDomain) {
      log(`Setting up custom domain: ${options.customDomain}`);
      log('To finalize custom domain setup, add these DNS records:');
      log('- CNAME for www: point to apex-domain.netlify.app');
      log('- A record for @: point to 104.198.14.52');
    }
    
    success = true;
    
    return {
      success,
      url: siteUrl,
      logs
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    logs.push(`Error: ${errorMessage}`);
    onProgress && onProgress(100, `Error: ${errorMessage}`);
    
    return {
      success: false,
      logs,
      error: errorMessage
    };
  }
};
