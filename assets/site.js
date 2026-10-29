(function () {
  var body = document.body;
  var L = body.getAttribute('data-lang') === 'as' ? 'as' : 'en';
  var root = body.getAttribute('data-root') || '';
  var alt = body.getAttribute('data-alt') || '';
  var isHome = body.hasAttribute('data-home');
  var H = isHome ? '' : 'index.html';

  var D = {
    en: {
      home: 'Digital Corner home', services: 'Services', how: 'How it works', studio: 'Photo studio', find: 'Find us',
      quick: 'Quick help', theme: 'Switch between light and dark theme',
      langLabel: 'অসমীয়া', langAria: 'Read this site in Assamese', langCode: 'as',
      tagline: 'A tech-enabled citizen services and digital kiosk built for speed, accuracy and trust.',
      operated: 'Operated under', eco: 'Pixara ecosystem',
      eco1: 'Web & Software Desk', eco2: 'Studio & Custom Framing', eco3: 'GST & Tax Information',
      visit: 'Visit and contact',
      address: 'Laluk Bus Stand, Laluk, North Lakhimpur, Assam', maps: 'Open Google Maps',
      copy: '&copy; 2026 Digital Corner. All rights reserved. Built under Pixara Solutions.',
      fab: 'Chat on WhatsApp'
    },
    as: {
      home: 'Digital Corner ঘৰ', services: 'সেৱাসমূহ', how: 'কেনেকৈ কাম কৰে', studio: 'ফটো ষ্টুডিঅ\'', find: 'আমাৰ ঠিকনা',
      quick: 'দ্ৰুত সহায়', theme: 'পোহৰ আৰু আন্ধাৰ থীম সলনি কৰক',
      langLabel: 'English', langAria: 'Read this site in English', langCode: 'en',
      tagline: 'গতি, নিখুঁততা আৰু বিশ্বাসৰ বাবে নিৰ্মিত এটা প্ৰযুক্তি-সমৰ্থিত নাগৰিক সেৱা আৰু ডিজিটেল কিঅ\'স্ক।',
      operated: 'পৰিচালনা কৰে', eco: 'Pixara ইকোছিষ্টেম',
      eco1: 'ৱেব আৰু ছফ্টৱেৰ ডেস্ক', eco2: 'ষ্টুডিঅ\' আৰু কাষ্টম ফ্ৰেমিং', eco3: 'জিএছটি আৰু কৰ তথ্য',
      visit: 'আমাৰ ঠিকনা আৰু যোগাযোগ',
      address: 'লালুক বাছ ষ্টেণ্ড, লালুক, উত্তৰ লখিমপুৰ, অসম', maps: 'গুগল মেপত খোলক',
      copy: '&copy; 2026 Digital Corner। সকলো অধিকাৰ সংৰক্ষিত। Pixara Solutionsৰ অধীনত নিৰ্মিত।',
      fab: 'হোৱাটছএপত চেট কৰক'
    }
  };
  var t = D[L];

  var header =
    '<div class="gamosa" aria-hidden="true"></div>' +
    '<header class="site-header"><div class="wrap">' +
      '<a href="' + H + '#top" class="brand" aria-label="' + t.home + '">' +
        '<span class="brand-mark"><img src="' + root + 'assets/logo-mark.png" alt="" width="36" height="36"></span>' +
        '<span class="brand-name">Digital Corner</span>' +
      '</a>' +
      '<nav class="nav" aria-label="Main">' +
        '<a href="' + H + '#services">' + t.services + '</a>' +
        '<a href="' + H + '#how">' + t.how + '</a>' +
        '<a href="' + H + '#studio">' + t.studio + '</a>' +
        '<a href="#contact">' + t.find + '</a>' +
      '</nav>' +
      '<div class="head-actions">' +
        (alt ? '<a class="lang-btn" href="' + alt + '" lang="' + t.langCode + '" hreflang="' + t.langCode + '" aria-label="' + t.langAria + '">' + t.langLabel + '</a>' : '') +
        '<button class="icon-btn" id="themeToggle" type="button" aria-label="' + t.theme + '">' +
          '<i class="fa-solid fa-moon i-moon"></i><i class="fa-solid fa-sun i-sun"></i>' +
        '</button>' +
        '<a href="https://wa.me/918811008135" class="btn btn-red btn-sm" target="_blank" rel="noopener">' +
          '<i class="fa-brands fa-whatsapp"></i><span>' + t.quick + '</span>' +
        '</a>' +
      '</div>' +
    '</div></header>';

  var footer =
    '<footer class="site-footer" id="contact">' +
      '<div class="gamosa" aria-hidden="true"></div>' +
      '<div class="wrap">' +
        '<div class="foot-grid">' +
          '<div class="foot-brand">' +
            '<h2>Digital Corner</h2>' +
            '<p>' + t.tagline + '</p>' +
            '<p class="by">' + t.operated + ' <b>Pixara Solutions</b></p>' +
          '</div>' +
          '<div>' +
            '<h3 class="foot-sub">' + t.eco + '</h3>' +
            '<div class="eco">' +
              '<a href="https://pixara.in" target="_blank" rel="noopener"><span><strong>' + t.eco1 + '</strong><small>pixara.in</small></span><i class="fa-solid fa-arrow-up-right-from-square"></i></a>' +
              '<a href="https://studio.pixara.in" target="_blank" rel="noopener"><span><strong>' + t.eco2 + '</strong><small>studio.pixara.in</small></span><i class="fa-solid fa-arrow-up-right-from-square"></i></a>' +
              '<a href="https://return.pixara.in" target="_blank" rel="noopener"><span><strong>' + t.eco3 + '</strong><small>return.pixara.in</small></span><i class="fa-solid fa-arrow-up-right-from-square"></i></a>' +
            '</div>' +
          '</div>' +
          '<div>' +
            '<h3 class="foot-sub">' + t.visit + '</h3>' +
            '<ul class="contact">' +
              '<li><i class="fa-solid fa-location-dot"></i><a href="https://maps.app.goo.gl/5X8sw66zPpcqffRy9" target="_blank" rel="noopener">' + t.address + '</a></li>' +
              '<li><i class="fa-solid fa-phone"></i><a href="tel:+918811008135">+91 8811008135</a></li>' +
              '<li><i class="fa-solid fa-envelope"></i><a href="mailto:digitalcornerlaluk@gmail.com">digitalcornerlaluk@gmail.com</a></li>' +
              '<li><i class="fa-solid fa-map-location-dot"></i><a href="https://maps.app.goo.gl/5X8sw66zPpcqffRy9" target="_blank" rel="noopener">' + t.maps + '</a></li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
        '<div class="foot-bottom">' + t.copy + '</div>' +
      '</div>' +
    '</footer>';

  var fab = '<a class="fab" href="https://wa.me/918811008135" target="_blank" rel="noopener" aria-label="' + t.fab + '"><i class="fa-brands fa-whatsapp"></i></a>';

  function mount(id, html) {
    var el = document.getElementById(id);
    if (el) el.outerHTML = html;
  }
  mount('site-header', header);
  mount('site-footer', footer);
  body.insertAdjacentHTML('beforeend', fab);

  var rootEl = document.documentElement;
  var btn = document.getElementById('themeToggle');
  if (btn) btn.addEventListener('click', function () {
    var next = rootEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    rootEl.setAttribute('data-theme', next);
    try { localStorage.setItem('dc-theme', next); } catch (e) {}
  });
})();
