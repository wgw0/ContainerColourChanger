// content.js
const colors = [
  '#f0f9ff', 
  '#fefce8', 
  '#f0fdf4', 
  '#fdf2f8', 
  '#f5f3ff', 
  '#fff7ed', 
  '#ecfdf5', 
  '#fef3c7'  
];

let observer = null;

function applyAccountColors() {
  const accountDivs = document.querySelectorAll('div[data-gtm-card].account.card');
  
  if (accountDivs.length === 0) {
    return;
  }
  
  accountDivs.forEach((div, index) => {
    div.classList.remove(...colors.map((_, i) => `gtm-account-color-${i}`));
    
    const colorIndex = index % colors.length;
    div.classList.add(`gtm-account-color-${colorIndex}`);
  });
}

function startObserver() {
  if (observer) {
    observer.disconnect();
  }
  
  observer = new MutationObserver((mutations) => {
    let shouldUpdate = false;
    
    mutations.forEach((mutation) => {
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
      setTimeout(applyAccountColors, 100);
    }
  });
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

function initialize() {
  applyAccountColors();
  startObserver();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialize);
} else {
  initialize();
}

document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    setTimeout(applyAccountColors, 500);
  }
});

let currentUrl = location.href;
const urlObserver = new MutationObserver(() => {
  if (location.href !== currentUrl) {
    currentUrl = location.href;
    setTimeout(initialize, 1000);
  }
});

urlObserver.observe(document, { subtree: true, childList: true });