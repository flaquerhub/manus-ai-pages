
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Edit, FileText, Upload, Download, Globe, Play } from "lucide-react";

const LandingPageApp: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-primary/10">
      {/* Header */}
      <header className="bg-primary text-white shadow-md">
        <div className="container mx-auto py-5 px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Edit className="h-6 w-6" />
              <h1 className="text-xl font-bold">Landing Page Builder</h1>
            </div>
            <Link to="/editor">
              <Button variant="secondary" size="sm">
                Open Editor
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Create High-Converting Landing Pages Without Code
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A powerful, offline-capable landing page editor that helps you build and publish beautiful pages in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/editor">
                <Button size="lg" className="gap-2">
                  <Edit className="h-5 w-5" />
                  Start Building Now
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="gap-2">
                <Play className="h-5 w-5" />
                Watch Tutorial
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            All The Features You Need
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-primary/5 p-6 rounded-lg">
              <div className="bg-primary text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">WYSIWYG Text Editing</h3>
              <p className="text-gray-600">
                Click on any text to edit it directly on the page. Change fonts, sizes, colors, and styles instantly.
              </p>
            </div>
            
            <div className="bg-primary/5 p-6 rounded-lg">
              <div className="bg-primary text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Upload className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Easy Image Handling</h3>
              <p className="text-gray-600">
                Replace, resize, rotate, and reposition images with simple drag-and-drop controls.
              </p>
            </div>
            
            <div className="bg-primary/5 p-6 rounded-lg">
              <div className="bg-primary text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Download className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Export & Download</h3>
              <p className="text-gray-600">
                Export your landing page as HTML, ready to be hosted anywhere, or download all assets as a ZIP file.
              </p>
            </div>
            
            <div className="bg-primary/5 p-6 rounded-lg">
              <div className="bg-primary text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">One-Click Publishing</h3>
              <p className="text-gray-600">
                Publish your landing page directly to Netlify with a single click, no account required.
              </p>
            </div>
            
            <div className="bg-primary/5 p-6 rounded-lg">
              <div className="bg-primary text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Responsive Design</h3>
              <p className="text-gray-600">
                Preview and adjust your landing page for desktop, tablet, and mobile devices.
              </p>
            </div>
            
            <div className="bg-primary/5 p-6 rounded-lg">
              <div className="bg-primary text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Autosave & History</h3>
              <p className="text-gray-600">
                Never lose your work with automatic saving to local storage and full undo/redo capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Create Your Landing Page?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start building your landing page today with our easy-to-use editor — no coding skills required.
          </p>
          <Link to="/editor">
            <Button variant="secondary" size="lg">
              Get Started for Free
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2025 Landing Page Builder. All rights reserved.</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary-light">Terms</a>
              <a href="#" className="hover:text-primary-light">Privacy</a>
              <a href="#" className="hover:text-primary-light">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPageApp;
