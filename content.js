// Color palette for account divs
const colors = [
  '#f0f9ff', // Light blue
  '#fefce8', // Light yellow
  '#f0fdf4', // Light green
  '#fdf2f8', // Light pink
  '#f5f3ff', // Light purple
  '#fff7ed', // Light orange
  '#ecfdf5', // Light teal
  '#fef3c7'  // Light amber
];

let observer = null;

function applyAccountColors() {
  // Find all account card divs
  const accountDivs = document.querySelectorAll('div[data-gtm-card].account.card');
  
  if (accountDivs.length === 0) {
    return;
  }
  
  accountDivs.forEach((div, index) => {
    // Remove any existing color classes
    div.classList.remove(...colors.map((_, i) => `gtm-account-color-${i}`));
    
    // Apply new color class
    const colorIndex = index % colors.length;
    div.classList.add(`gtm-account-color-${colorIndex}`);
  });
}

function startObserver() {
  // Stop existing observer if running
  if (observer) {
    observer.disconnect();
  }
  
  // Create a new observer to watch for DOM changes
  observer = new MutationObserver((mutations) => {
    let shouldUpdate = false;
    
    mutations.forEach((mutation) => {
      // Check if account divs were added or removed
      if (mutation.type === 'childList') {
        const hasAccountNodes = Array.from(mutation.addedNodes).some(node => 
          node.nodeType === 1 && (
            node.matches?.('div[data-gtm-card].account.card') ||
            node.querySelector?.('div[data-gtm-card].account.card')
          )
        );
        
        if (hasAccountNodes) {
          shouldUpdate = true;
        }
      }
    });
    
    if (shouldUpdate) {
      // Small delay to ensure DOM is fully updated
      setTimeout(applyAccountColors, 100);
    }
  });
  
  // Start observing
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

// Initialize when page loads
function initialize() {
  // Apply colors immediately if elements exist
  applyAccountColors();
  
  // Start observing for changes
  startObserver();
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialize);
} else {
  initialize();
}

// Also run when page becomes visible (for SPA navigation)
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    setTimeout(applyAccountColors, 500);
  }
});

// Handle potential SPA navigation
let currentUrl = location.href;
const urlObserver = new MutationObserver(() => {
  if (location.href !== currentUrl) {
    currentUrl = location.href;
    setTimeout(initialize, 1000); // Delay for SPA to load content
  }
});

urlObserver.observe(document, { subtree: true, childList: true });