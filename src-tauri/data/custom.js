(function() {
  // 🔧 基础自适应逻辑
  const meta = document.createElement('meta');
  meta.name = "viewport";
  meta.content = "width=device-width, initial-scale=1";
  document.head.appendChild(meta);

  function resizeBody() {
    document.body.style.width = window.innerWidth + 'px';
    document.body.style.height = window.innerHeight + 'px';
  }

  window.addEventListener('resize', resizeBody);
  resizeBody();

  // 增加的日志信息
  console.log(
    '%cbuild from PakePlus： https://github.com/Sjj1024/PakePlus',
    'color:orangered;font-weight:bolder'
  )

  // 非常重要的 hook，处理所有点击跳转逻辑
  // very important, if you don't know what it is, don't touch it
  // 非常重要，不懂代码不要动，这里可以解决80%的问题，也可以生产1000+的bug
  const hookClick = (e) => {
    const origin = e.target.closest('a');
    const isBaseTargetBlank = document.querySelector(
      'head base[target="_blank"]'
    );
    console.log('origin', origin, isBaseTargetBlank);
    if (
      (origin && origin.href && origin.target === '_blank') ||
      (origin && origin.href && isBaseTargetBlank)
    ) {
      e.preventDefault();
      console.log('handle origin', origin);
      location.href = origin.href;
    } else {
      console.log('not handle origin', origin);
    }
  }

  document.addEventListener('click', hookClick, { capture: true });
})();
