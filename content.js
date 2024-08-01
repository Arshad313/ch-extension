function hideShorts() {
    const shortsElements = document.querySelectorAll('ytd-rich-grid-media[is-shorts], ytd-grid-video-renderer[is-shorts], ytd-rich-item-renderer[is-shorts]');
    
    shortsElements.forEach(element => {
      element.style.display = 'none';
    });
  }
  
  const observer = new MutationObserver(hideShorts);
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  
  hideShorts();
  