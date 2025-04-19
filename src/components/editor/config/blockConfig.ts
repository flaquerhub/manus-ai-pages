
export const BlockConfig = {
  appendTo: '.blocks-container',
  blocks: [
    {
      id: "hero-section",
      label: "Hero Section",
      category: "Sections",
      content: '<div data-gjs-type="hero-section"></div>',
      media: '<svg viewBox="0 0 24 24"><path d="M3 3h18v18H3z"></path></svg>'
    },
    {
      id: "problem-section",
      label: "Problem Section",
      category: "Sections",
      content: '<div data-gjs-type="problem-section"></div>',
      media: '<svg viewBox="0 0 24 24"><path d="M3 3h18v18H3z"></path></svg>'
    },
    {
      id: "story-section",
      label: "Story Section",
      category: "Sections",
      content: '<div data-gjs-type="story-section"></div>',
      media: '<svg viewBox="0 0 24 24"><path d="M3 3h18v18H3z"></path></svg>'
    },
    {
      id: "solution-section",
      label: "Solution Section",
      category: "Sections",
      content: '<div data-gjs-type="solution-section"></div>',
      media: '<svg viewBox="0 0 24 24"><path d="M3 3h18v18H3z"></path></svg>'
    },
    {
      id: "testimonials-section",
      label: "Testimonials Section",
      category: "Sections",
      content: '<div data-gjs-type="testimonials-section"></div>',
      media: '<svg viewBox="0 0 24 24"><path d="M3 3h18v18H3z"></path></svg>'
    },
    {
      id: "offer-section",
      label: "Offer Section",
      category: "Sections",
      content: '<div data-gjs-type="offer-section"></div>',
      media: '<svg viewBox="0 0 24 24"><path d="M3 3h18v18H3z"></path></svg>'
    },
    {
      id: "guarantee-section",
      label: "Guarantee Section",
      category: "Sections",
      content: '<div data-gjs-type="guarantee-section"></div>',
      media: '<svg viewBox="0 0 24 24"><path d="M3 3h18v18H3z"></path></svg>'
    },
    {
      id: "faq-section",
      label: "FAQ Section",
      category: "Sections",
      content: '<div data-gjs-type="faq-section"></div>',
      media: '<svg viewBox="0 0 24 24"><path d="M3 3h18v18H3z"></path></svg>'
    },
    {
      id: "call-to-action-section",
      label: "CTA Section",
      category: "Sections",
      content: '<div data-gjs-type="call-to-action-section"></div>',
      media: '<svg viewBox="0 0 24 24"><path d="M3 3h18v18H3z"></path></svg>'
    },
    {
      id: "button",
      label: "Button",
      category: "Basic",
      content: '<button class="button">Click Here</button>',
      media: '<svg viewBox="0 0 24 24"><path d="M20 20.5H4a1.5 1.5 0 0 1-1.5-1.5v-3A1.5 1.5 0 0 1 4 14.5h16a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5z"></path></svg>'
    },
    {
      id: "image",
      label: "Image",
      category: "Basic",
      media: '<svg viewBox="0 0 24 24"><path d="M8.5 13.5l2.5 3 3.5-4.5 4.5 6H5m16 1V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2z"></path></svg>',
      content: {
        type: "image",
        style: {
          padding: "10px"
        },
        activeOnRender: true
      }
    },
    {
      id: "video",
      label: "Video",
      category: "Basic",
      media: '<svg viewBox="0 0 24 24"><path d="M15 8v8H5V8h10m1-2H4a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V7a1 1 0 00-1-1z"></path><path d="M20 6l-4 4v4l4 4V6z"></path></svg>',
      content: {
        type: "video",
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        style: {
          height: "350px",
          width: "100%"
        }
      }
    }
  ]
};
