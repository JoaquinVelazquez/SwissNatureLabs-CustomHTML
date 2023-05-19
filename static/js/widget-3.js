(function() {
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://iili.io/hisKSs.png';
    document.getElementsByTagName('head')[0].appendChild(link);
  })();
  function faviconIn(){
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';link.rel = 'shortcut icon';
    link.href = 'https://iili.io/hisKSs.png';
    document.getElementsByTagName('head')[0].appendChild(link)
  };
  
  setTimeout(faviconIn,1000);