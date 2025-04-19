
import type { Editor } from 'grapesjs';

// Register custom component types
export const registerComponents = (editor: Editor) => {
  const comps = editor.DomComponents;
  const defaultType = comps.getType("default");
  const defaultModel = defaultType.model;

  // Hero Section Component
  comps.addType("hero-section", {
    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,
        name: "Hero Section",
        draggable: true,
        droppable: true,
        editable: true
      }
    }),
    view: defaultType.view.extend({
      render: function() {
        defaultType.view.prototype.render.apply(this, arguments);
        this.el.innerHTML = `
          <section class="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary to-primary-dark text-white py-20">
            <div class="container mx-auto px-4">
              <div class="max-w-4xl mx-auto text-center">
                <h1 class="font-display text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                  CREATE PROFESSIONAL SALES PAGES THAT TRULY CONVERT IN MINUTES
                </h1>
                <p class="text-xl md:text-2xl mb-8 text-gray-200">
                  Finally, you have access to the same 15-step structure that generated BILLIONS of dollars in the US, Brazil and the rest of the world - now automated by an AI agent that does ALL THE WORK FOR YOU
                </p>
                <div class="bg-black/20 rounded-lg p-4 mb-8 aspect-video flex items-center justify-center cursor-pointer hover:bg-black/30 transition-colors">
                  <svg class="w-16 h-16" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                </div>
                <button class="bg-accent hover:bg-accent-dark text-primary-dark text-lg py-6 px-8 rounded-md">
                  👉 I WANT TO CREATE CONVERTING PAGES NOW 👈
                </button>
              </div>
            </div>
          </section>
        `;
        return this;
      }
    })
  });

  // Problem Section Component
  comps.addType("problem-section", {
    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,
        name: "Problem Section",
        draggable: true,
        droppable: true,
        editable: true
      }
    }),
    view: defaultType.view.extend({
      render: function() {
        defaultType.view.prototype.render.apply(this, arguments);
        this.el.innerHTML = `
          <section class="py-20 bg-gray-50">
            <div class="container mx-auto px-4">
              <div class="max-w-4xl mx-auto border border-gray-200 rounded-lg bg-white shadow-sm">
                <div class="p-6">
                  <h2 class="text-3xl font-display text-center text-primary mb-6">
                    The truth nobody has the courage to tell you:
                  </h2>
                  <div class="space-y-6">
                    <div class="flex items-start gap-4">
                      <svg class="w-6 h-6 text-accent flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
                      <p class="text-lg">
                        In 2025, only professionals who master the use of autonomous intelligent agents will survive in digital marketing.
                      </p>
                    </div>
                    <div class="space-y-4 text-lg">
                      <p>While you continue dragging yourself with obsolete tools...</p>
                      <p>While you keep struggling trying to create sales pages by filling in awkward templates...</p>
                      <p>While you waste precious hours vomiting generic texts in site builders that don't convert in your niche...</p>
                      <p>Your competitors are already revolutionizing their businesses with cutting-edge technology that works FOR THEM.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        `;
        return this;
      }
    })
  });

  // Story Section Component
  comps.addType("story-section", {
    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,
        name: "Story Section",
        draggable: true,
        droppable: true,
        editable: true
      }
    }),
    view: defaultType.view.extend({
      render: function() {
        defaultType.view.prototype.render.apply(this, arguments);
        this.el.innerHTML = `
          <section class="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div class="container mx-auto px-4">
              <div class="max-w-4xl mx-auto border border-gray-200 rounded-lg bg-white shadow-sm">
                <div class="p-6">
                  <div class="flex items-center gap-4 mb-6">
                    <div class="bg-primary rounded-full p-3">
                      <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                    <h2 class="text-3xl font-display text-primary">Who am I to talk about this?</h2>
                  </div>
                  <div class="grid md:grid-cols-2 gap-8 items-center">
                    <div class="relative aspect-square rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                        alt="Fabio Rocha"
                        class="object-cover w-full h-full"
                      />
                    </div>
                    <div class="space-y-4">
                      <p class="text-lg">Hello, my name is Fabio Rocha.</p>
                      <p>My story is not conventional. I studied law, philosophy and theology.</p>
                      <p>I lived almost a decade as a volunteer sleeping on the streets of São Paulo and Rio's favelas to rescue people in need.</p>
                      <p>Until I became the owner of a million-dollar printing industry with 25 employees.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        `;
        return this;
      }
    })
  });

  // Solution Section Component
  comps.addType("solution-section", {
    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,
        name: "Solution Section",
        draggable: true,
        droppable: true,
        editable: true
      }
    }),
    view: defaultType.view.extend({
      render: function() {
        defaultType.view.prototype.render.apply(this, arguments);
        this.el.innerHTML = `
          <section class="py-20 bg-gradient-to-b from-primary-dark to-primary text-white">
            <div class="container mx-auto px-4">
              <div class="max-w-4xl mx-auto text-center">
                <svg class="w-12 h-12 mx-auto mb-6 text-accent animate-pulse" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"/><path d="M12 6v6l4 2"/></svg>
                <h2 class="text-3xl md:text-4xl font-display mb-8">The game changer nobody saw coming</h2>
                <div class="grid md:grid-cols-2 gap-8 mb-12">
                  <div class="relative aspect-video rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
                      alt="Advanced AI Technology"
                      class="object-cover w-full h-full"
                    />
                  </div>
                  <div class="text-left space-y-4">
                    <p class="text-lg">I discovered the power of truly autonomous intelligent agents.</p>
                    <p>Specifically, Manus.ai - the biggest revolution in AI since the arrival of ChatGPT.</p>
                    <div class="space-y-3 mt-6">
                      <div class="flex items-center gap-2">
                        <svg class="w-5 h-5 text-accent" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                        <span>Book translation flows with SUPERIOR quality</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <svg class="w-5 h-5 text-accent" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                        <span>Professional audiobook generation</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <svg class="w-5 h-5 text-accent" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                        <span>Automatic layout</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        `;
        return this;
      }
    })
  });

  // Testimonials Section Component
  comps.addType("testimonials-section", {
    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,
        name: "Testimonials Section",
        draggable: true,
        droppable: true
      }
    }),
    view: defaultType.view.extend({
      render: function() {
        defaultType.view.prototype.render.apply(this, arguments);
        this.el.innerHTML = `
          <section class="py-20 bg-gradient-to-b from-white to-gray-50">
            <div class="container mx-auto px-4">
              <h2 class="text-3xl md:text-4xl font-display text-center text-primary mb-12">
                What others are saying:
              </h2>
              <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
                  <div class="flex items-center gap-4">
                    <svg class="w-8 h-8 text-accent" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    <div>
                      <h3 class="font-semibold">Ronald Crawford</h3>
                    </div>
                  </div>
                  <p class="text-gray-700">
                    "I just had my first experience with Manus for web design and I'm really impressed! The agent created a complete HTML/CSS landing page with a custom logo that really looked professional."
                  </p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
                  <div class="flex items-center gap-4">
                    <svg class="w-8 h-8 text-accent" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    <div>
                      <h3 class="font-semibold">Julian Goldie</h3>
                    </div>
                  </div>
                  <p class="text-gray-700">
                    "The difference is striking: Humans need detailed instructions, ask clarifying questions, get stuck on technical issues. Manus figures out what to do from vague instructions, solves its own problems."
                  </p>
                </div>
              </div>
            </div>
          </section>
        `;
        return this;
      }
    })
  });

  // Offer Section Component
  comps.addType("offer-section", {
    model: defaultModel.extend({
      defaults: { 
        ...defaultModel.prototype.defaults,
        name: "Offer Section",
        draggable: true,
        droppable: true
      }
    }),
    view: defaultType.view.extend({
      render: function() {
        defaultType.view.prototype.render.apply(this, arguments);
        this.el.innerHTML = `
          <section class="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div class="container mx-auto px-4">
              <div class="max-w-4xl mx-auto">
                <div class="text-center mb-10">
                  <h2 class="text-3xl md:text-4xl font-display text-primary mb-4">
                    Special Offer
                  </h2>
                  <p class="text-xl text-gray-700">Get access to our premium services at an unbeatable price</p>
                </div>
                
                <div class="bg-white rounded-lg border-2 border-accent shadow-xl overflow-hidden">
                  <div class="bg-accent text-white p-6 text-center">
                    <h3 class="text-2xl font-bold">Premium Package</h3>
                    <p class="text-white/90 mt-1">Everything you need to succeed</p>
                  </div>
                  
                  <div class="p-8">
                    <div class="flex justify-center items-center mb-6">
                      <span class="text-4xl font-bold text-primary">$97</span>
                      <span class="ml-2 text-gray-500 line-through">$297</span>
                      <span class="ml-2 bg-red-500 text-white text-sm px-2 py-1 rounded-full">67% OFF</span>
                    </div>
                    
                    <div class="space-y-4 mb-8">
                      <div class="flex items-center">
                        <svg class="w-5 h-5 text-accent mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                        <span>Full landing page editor access</span>
                      </div>
                      <div class="flex items-center">
                        <svg class="w-5 h-5 text-accent mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                        <span>100+ pre-designed templates</span>
                      </div>
                      <div class="flex items-center">
                        <svg class="w-5 h-5 text-accent mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                        <span>Unlimited exports</span>
                      </div>
                      <div class="flex items-center">
                        <svg class="w-5 h-5 text-accent mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                        <span>Priority support</span>
                      </div>
                    </div>
                    
                    <button class="w-full bg-accent hover:bg-accent-dark text-white text-xl py-4 rounded-md transition-colors">
                      Get Started Now
                    </button>
                    
                    <p class="text-sm text-center text-gray-500 mt-4">
                      30-day money-back guarantee. No questions asked.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        `;
        return this;
      }
    })
  });

  // Guarantee Section Component
  comps.addType("guarantee-section", {
    model: defaultModel.extend({
      defaults: { 
        ...defaultModel.prototype.defaults,
        name: "Guarantee Section",
        draggable: true,
        droppable: true
      }
    }),
    view: defaultType.view.extend({
      render: function() {
        defaultType.view.prototype.render.apply(this, arguments);
        this.el.innerHTML = `
          <section class="py-20 bg-white">
            <div class="container mx-auto px-4">
              <div class="max-w-4xl mx-auto text-center">
                <div class="inline-block p-3 bg-accent rounded-full mb-6">
                  <svg class="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                
                <h2 class="text-3xl md:text-4xl font-display text-primary mb-6">
                  Our Ironclad 30-Day Guarantee
                </h2>
                
                <p class="text-xl text-gray-700 mb-8">
                  Try our product risk-free for 30 days. If you're not completely satisfied with the results, simply let us know and we'll refund every penny. No questions asked, no hassle.
                </p>
                
                <div class="bg-gray-50 border border-gray-200 rounded-lg p-8 mb-8">
                  <div class="flex flex-col md:flex-row items-center gap-6">
                    <div class="shrink-0">
                      <div class="w-32 h-32 rounded-full overflow-hidden border-4 border-accent">
                        <img 
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" 
                          alt="CEO" 
                          class="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div class="text-left">
                      <blockquote class="text-lg italic text-gray-700 mb-4">
                        "We stand behind our product 100%. If you don't get the results you expected, I personally guarantee we'll refund your investment in full."
                      </blockquote>
                      <div class="font-semibold text-primary">John Smith</div>
                      <div class="text-sm text-gray-500">Founder & CEO</div>
                    </div>
                  </div>
                </div>
                
                <button class="bg-accent hover:bg-accent-dark text-white text-lg py-4 px-8 rounded-md">
                  Get Started Risk-Free Today
                </button>
              </div>
            </div>
          </section>
        `;
        return this;
      }
    })
  });

  // FAQ Section Component
  comps.addType("faq-section", {
    model: defaultModel.extend({
      defaults: { 
        ...defaultModel.prototype.defaults,
        name: "FAQ Section",
        draggable: true,
        droppable: true
      }
    }),
    view: defaultType.view.extend({
      render: function() {
        defaultType.view.prototype.render.apply(this, arguments);
        this.el.innerHTML = `
          <section class="py-20 bg-gray-50">
            <div class="container mx-auto px-4">
              <div class="max-w-4xl mx-auto">
                <h2 class="text-3xl md:text-4xl font-display text-center text-primary mb-12">
                  Frequently Asked Questions
                </h2>
                
                <div class="space-y-6">
                  <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div class="p-6">
                      <h3 class="text-xl font-semibold text-primary">
                        How does your landing page editor work?
                      </h3>
                      <div class="mt-3 text-gray-700">
                        Our landing page editor uses a visual drag-and-drop interface that allows you to customize every element without coding. You can edit text, images, colors, and layouts in real-time with instant preview of your changes.
                      </div>
                    </div>
                  </div>
                  
                  <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div class="p-6">
                      <h3 class="text-xl font-semibold text-primary">
                        Do I need technical skills to use this tool?
                      </h3>
                      <div class="mt-3 text-gray-700">
                        Not at all! Our editor is designed for all skill levels. Whether you're a marketing professional, small business owner, or someone with no technical background, you can create beautiful landing pages in minutes.
                      </div>
                    </div>
                  </div>
                  
                  <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div class="p-6">
                      <h3 class="text-xl font-semibold text-primary">
                        Can I publish my landing pages directly from the editor?
                      </h3>
                      <div class="mt-3 text-gray-700">
                        Yes! You can publish your landing pages directly to Netlify with just one click. You can also download the HTML files to host them on your own server if you prefer.
                      </div>
                    </div>
                  </div>
                  
                  <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div class="p-6">
                      <h3 class="text-xl font-semibold text-primary">
                        What happens if I need help?
                      </h3>
                      <div class="mt-3 text-gray-700">
                        We offer comprehensive documentation and tutorials to help you get started. If you need further assistance, our support team is available to answer any questions you might have.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        `;
        return this;
      }
    })
  });

  // Call to Action Section Component
  comps.addType("call-to-action-section", {
    model: defaultModel.extend({
      defaults: { 
        ...defaultModel.prototype.defaults,
        name: "CTA Section",
        draggable: true,
        droppable: true
      }
    }),
    view: defaultType.view.extend({
      render: function() {
        defaultType.view.prototype.render.apply(this, arguments);
        this.el.innerHTML = `
          <section class="py-20 bg-gradient-to-b from-primary to-primary-dark text-white">
            <div class="container mx-auto px-4">
              <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-3xl md:text-5xl font-display font-bold mb-6">
                  Ready to Create Landing Pages That Convert?
                </h2>
                
                <p class="text-xl md:text-2xl mb-8 text-gray-200">
                  Join thousands of marketers and business owners who are already using our editor to create high-converting landing pages.
                </p>
                
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                  <button class="bg-accent hover:bg-accent-dark text-primary-dark text-lg py-4 px-8 rounded-md">
                    Get Started Now
                  </button>
                  
                  <button class="bg-transparent hover:bg-white/10 border-2 border-white text-white text-lg py-4 px-8 rounded-md transition-colors">
                    Watch Demo
                  </button>
                </div>
                
                <p class="mt-6 text-gray-300">
                  No credit card required. Start your 14-day free trial today.
                </p>
              </div>
            </div>
          </section>
        `;
        return this;
      }
    })
  });
  
  return comps;
};

// Set up editor commands for undo/redo functionality
export const setupEditorCommands = (editor: Editor) => {
  // Add device switching commands
  editor.Commands.add("set-device-desktop", {
    run: (editor) => editor.setDevice("Desktop")
  });
  
  editor.Commands.add("set-device-tablet", {
    run: (editor) => editor.setDevice("Tablet")
  });
  
  editor.Commands.add("set-device-mobile", {
    run: (editor) => editor.setDevice("Mobile")
  });

  // Set up keyboard shortcuts for undo/redo
  const undoManager = editor.UndoManager;
  
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "z") {
      if (e.shiftKey) {
        undoManager.redo();
      } else {
        undoManager.undo();
      }
      e.preventDefault();
    } else if ((e.ctrlKey || e.metaKey) && e.key === "y") {
      undoManager.redo();
      e.preventDefault();
    }
  });
};

// Set up initial content for the editor
export const setupInitialContent = (editor: Editor) => {
  editor.on("load", () => {
    const wrapper = editor.DomComponents.getWrapper();
    
    if (wrapper) {
      editor.addComponents(`
        <div class="min-h-screen bg-white font-sans">
          <div data-gjs-type="hero-section"></div>
          <div data-gjs-type="problem-section"></div>
          <div data-gjs-type="story-section"></div>
          <div data-gjs-type="solution-section"></div>
          <div data-gjs-type="testimonials-section"></div>
        </div>
      `);
    }
  });
};
