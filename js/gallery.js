window.$ = window.$ || ((sel) => document.querySelector(sel));
window.$$ = window.$$ || ((sel) => document.querySelectorAll(sel));

const Gallery = (function () {
  return {
    init(selector) {
      // create display
      $(selector).classList.add('gallery');
      $(selector).insertAdjacentHTML('beforeend', `<div id="display"></div><div id="thumbnails"></div>`);

      const images = [...$$(selector + ' img')];
      images.forEach((img) => {
        const url = img.src;
        const contain = img.hasAttribute('data-contain') ? 'data-contain' : '';

        // $('#gallery #display').insertAdjacentHTML('beforeend', `<img src="${url}" ${contain} />`);
        $(selector + ' #thumbnails').insertAdjacentHTML('beforeend', `<img src="${url}" ${contain} />`);
      });

      // select first
      $(selector + ' #display').innerHTML = $('#thumbnails img').outerHTML;
      $(selector + ' #thumbnails img').dataset.selected = '';

      // click event
      $(selector + ' #thumbnails').onclick = (e) => {
        if (e.target.matches('img')) {
          $(selector + ' #display').innerHTML = e.target.outerHTML;

          delete $(selector + ' #thumbnails img[data-selected]')?.dataset.selected;
          e.target.dataset.selected = '';
        }
      };
    },
  };
})();

Gallery.init('#gallery-1');
Gallery.init('#gallery-2');
