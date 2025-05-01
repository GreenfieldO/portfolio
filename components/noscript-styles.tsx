export default function NoScriptStyles() {
  return (
    <noscript>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* Hide elements that require JavaScript */
        .js-only {
          display: none !important;
        }
        
        /* Show no-js alternatives */
        .no-js {
          display: block !important;
        }
        
        /* Ensure all sections are visible without animations */
        .animate-in, 
        [data-motion="hidden"] {
          opacity: 1 !important;
          transform: none !important;
        }
        
        /* Ensure the header is visible */
        .sticky-header {
          position: sticky;
          top: 0;
          background-color: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          z-index: 50;
        }
        
        /* Dark mode adjustments */
        .dark .sticky-header {
          background-color: rgba(0, 0, 0, 0.8);
        }
        
        /* Ensure mobile menu is accessible */
        .md\\:hidden {
          display: block !important;
          height: auto !important;
        }
        
        /* Hide animated background */
        .animated-background {
          display: none;
        }
      `,
        }}
      />
    </noscript>
  )
}
