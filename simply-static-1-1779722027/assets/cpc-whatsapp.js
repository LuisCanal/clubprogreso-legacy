(function () {
  'use strict';

  var WA_URL = 'https://wa.me/5493454156669';

  function isWhatsAppLink(href) {
    return (
      href &&
      (href.indexOf('whatsapp.com') !== -1 || href.indexOf('wa.me') !== -1)
    );
  }

  function patchLinks(root) {
    root.querySelectorAll('a[href]').forEach(function (anchor) {
      if (isWhatsAppLink(anchor.href)) {
        anchor.href = WA_URL;
        anchor.target = '_blank';
        anchor.rel = 'noopener noreferrer';
      }
    });
  }

  function handleClick(event) {
    var target = event.target.closest('.qlwapp a, .qlwapp button');
    if (!target || !event.target.closest('.qlwapp')) {
      return;
    }

    if (target.tagName === 'A' && isWhatsAppLink(target.href)) {
      return;
    }

    event.preventDefault();
    event.stopImmediatePropagation();
    window.open(WA_URL, '_blank', 'noopener,noreferrer');
  }

  function init() {
    var root = document.querySelector('.qlwapp');
    if (!root) {
      return;
    }

    patchLinks(root);
    new MutationObserver(function () {
      patchLinks(root);
    }).observe(root, { childList: true, subtree: true, attributes: true, attributeFilter: ['href'] });

    document.addEventListener('click', handleClick, true);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
