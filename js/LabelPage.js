(function () {
  var OriginTitle = document.title;
  var titleTime;
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      document.title = '╭(°A°`)╮ 我见青山多妩媚';
      clearTimeout(titleTime);
    } else {
      document.title = '(ฅ>ω<*ฅ)  料青山见我应如是';
      titleTime = setTimeout(function () {
        document.title = OriginTitle;
      }, 2000);
    }
  });
})();
