var Util = {
  killBrowser: function () {
    var index = navigator.userAgent.indexOf('MSIE ')
    if (index > -1) {
      if (parseInt(navigator.userAgent.substr(index + 5).split(';')[0]) < 9) {
        document.body.innerHTML = '<div>为了让浏览器能更好的发展，您能拥有更好的体验，让我们放弃使用那些过时的、不安全的浏览器吧！</div><br>' +
          '<ul>' +
          '<li><a href="http://www.google.com/chrome" target="_blank" rel="noopener">谷歌浏览器</a></li>' +
          '<li><a href="http://www.mozilla.com/" target="_blank" rel="noopener">火狐</a></li>' +
          '<li><a href="http://se.360.cn/" target="_blank" rel="noopener">360</a>或者<a href="https://www.baidu.com/s?wd=%E6%B5%8F%E8%A7%88%E5%99%A8" target="_blank" rel="noopener">其它浏览器</a></li>' +
          '</ul>'
      }
    }
  }
}