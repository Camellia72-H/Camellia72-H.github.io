(function () {
  var webBg = document.querySelector('#web_bg');
  var banner = document.querySelector('#banner') || document.querySelector('.banner');
  if (!webBg || !banner) return;

  var bg = banner.style.background || window.getComputedStyle(banner).backgroundImage;
  var image = '';
  if (bg) {
    var match = bg.match(/url\((['"]?)(.*?)\1\)/);
    if (match && match[2]) image = match[2];
  }
  if (!image) return;

  webBg.setAttribute(
    'style',
    'background-image: url(' + image + ');position: fixed;width: 100%;height: 100%;z-index: -1;background-size: cover;background-position: center;background-repeat: no-repeat;'
  );
  banner.setAttribute('style', 'background-image: url()');
  var mask = document.querySelector('#banner .mask') || document.querySelector('.banner .mask');
  if (mask) mask.setAttribute('style', 'background-color:rgba(0,0,0,0)');
})();
