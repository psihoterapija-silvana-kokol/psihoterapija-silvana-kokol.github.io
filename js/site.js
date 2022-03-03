const Main = (function () {
  // cache DOM
  const yearSpan = document.querySelector('#year');
  const arrowDown = document.querySelector('.arrow-down');
  let oMeniDiv = document.querySelector('.o-meni');

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

  function toggleArrow() {
    if (window.scrollY > 0) arrowDown.classList.add('transparent');
    else arrowDown.classList.remove('transparent');
  }
})();

// TODO: fonti so lahko skriti, ko se nalozijo, se pocasi pojavijo (animacija)
// ali: preload fonts
