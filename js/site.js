const Main = (function () {
  // cache DOM
  const yearSpan = document.querySelector('#year');
  const arrowDown = document.querySelector('.arrow-down');
  const oMeniDiv = document.querySelector('.o-meni');

  // connect listeners
  arrowDown.addEventListener('click', scrollDown);
  window.addEventListener('scroll', toggleArrow);

  // init
  new Rellax('.rellax', { center: true });
  yearSpan.innerText = new Date().getFullYear();

  // f(x)
  function scrollDown() {
    let scrollOffset;

    if (oMeniDiv.offsetHeight < window.innerHeight) {
      // scroll to middle of section
      scrollOffset = Math.floor(oMeniDiv.offsetTop - (window.innerHeight - oMeniDiv.offsetHeight) / 2);
    } else {
      // scroll to top of section
      scrollOffset = oMeniDiv.offsetTop;
    }

    scroll2(scrollOffset, 1600, 'easeInOutCubic');
  }

  let arrowVisible = true;

  function toggleArrow() {
    if (arrowVisible && window.scrollY > 0) {
      // hide arrow
      arrowDown.classList.add('transparent');
      arrowVisible = false;
    } else if (!arrowVisible && window.scrollY <= 0) {
      // show arrow
      arrowDown.classList.remove('transparent');
      arrowVisible = true;
    }
  }
})();
