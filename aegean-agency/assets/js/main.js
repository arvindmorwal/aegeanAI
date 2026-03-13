/* ============================================================
   AEGEAN AGENCY — main.js
   Behaviors: mobile nav toggle, active nav link, card renderer
   Depends on: packages.js loaded before this file
   Zero external dependencies — plain ES5-compatible JS
   ============================================================ */

(function () {
  'use strict';

  /* ─────────────────────────────────────────────────────────────
     MOBILE NAV TOGGLE
     Opens / closes the .nav__mobile drawer. Locks body scroll
     while open. Closes on: link click, Escape key, outside click.
  ───────────────────────────────────────────────────────────── */
  function initMobileNav() {
    var hamburger  = document.querySelector('.nav__hamburger');
    var mobileMenu = document.querySelector('.nav__mobile');

    if (!hamburger || !mobileMenu) return;

    function openMenu() {
      mobileMenu.classList.add('is-open');
      hamburger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      mobileMenu.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    function isOpen() {
      return mobileMenu.classList.contains('is-open');
    }

    hamburger.addEventListener('click', function () {
      isOpen() ? closeMenu() : openMenu();
    });

    // Close when any nav link inside the drawer is clicked
    var mobileLinks = mobileMenu.querySelectorAll('a');
    for (var i = 0; i < mobileLinks.length; i++) {
      mobileLinks[i].addEventListener('click', closeMenu);
    }

    // Close on Escape key, return focus to hamburger
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen()) {
        closeMenu();
        hamburger.focus();
      }
    });

    // Close when clicking outside the menu and hamburger
    document.addEventListener('click', function (e) {
      if (isOpen() &&
          !mobileMenu.contains(e.target) &&
          !hamburger.contains(e.target)) {
        closeMenu();
      }
    });
  }

  /* ─────────────────────────────────────────────────────────────
     ACTIVE NAV LINK
     Matches the current filename against desktop and mobile nav
     hrefs. Sets aria-current="page" on exact matches.
     The .nav__cta pill (Browse Packages → services.html) is
     excluded from active-state marking so it never appears
     highlighted as a "current page" link.
  ───────────────────────────────────────────────────────────── */
  function setActiveNavLink() {
    var path        = window.location.pathname;
    var currentFile = path.split('/').pop() || 'index.html';

    // Treat bare "/" or "" as index.html
    if (currentFile === '') currentFile = 'index.html';

    // Collect all nav links except the CTA pill
    var allLinks = document.querySelectorAll(
      '.nav__links a:not(.nav__cta), .nav__mobile a:not(.nav__cta-mobile)'
    );

    for (var i = 0; i < allLinks.length; i++) {
      var link     = allLinks[i];
      var href     = link.getAttribute('href') || '';
      var linkFile = href.split('/').pop();

      var isHome = (currentFile === 'index.html') &&
                   (linkFile === '' || linkFile === 'index.html');
      var isMatch = linkFile !== '' && linkFile === currentFile;

      if (isHome || isMatch) {
        link.setAttribute('aria-current', 'page');
      }
    }
  }

  /* ─────────────────────────────────────────────────────────────
     HTML ESCAPE
     Prevents XSS when injecting package data into innerHTML.
  ───────────────────────────────────────────────────────────── */
  function esc(str) {
    return String(str)
      .replace(/&/g,  '&amp;')
      .replace(/</g,  '&lt;')
      .replace(/>/g,  '&gt;')
      .replace(/"/g,  '&quot;')
      .replace(/'/g,  '&#039;');
  }

  /* ─────────────────────────────────────────────────────────────
     PACKAGE CARD BUILDER
     Produces the spec-required HTML structure for one package.
     Button href falls back to '#' when stripeLink is a placeholder.
  ───────────────────────────────────────────────────────────── */
  function buildCard(pkg) {
    var href = (pkg.stripeLink && pkg.stripeLink !== 'PASTE_STRIPE_LINK_HERE')
      ? pkg.stripeLink
      : '#';

    var btnTarget = href !== '#' ? ' target="_blank" rel="noopener"' : '';

    return (
      '<div class="package-card">' +
        '<div class="package-card__header">' +
          '<h3 class="package-card__name">'    + esc(pkg.name)    + '</h3>' +
          '<p class="package-card__tagline">'  + esc(pkg.tagline) + '</p>' +
        '</div>' +
        '<div class="package-card__meta">' +
          '<span class="badge badge--price">$' + esc(String(pkg.price))    + '</span>' +
          '<span class="badge badge--delivery">'  + esc(pkg.delivery) + '</span>' +
        '</div>' +
        '<p class="package-card__description">' + esc(pkg.description) + '</p>' +
        '<a href="' + href + '"' + btnTarget + ' class="btn btn--primary">Order This Package</a>' +
      '</div>'
    );
  }

  /* ─────────────────────────────────────────────────────────────
     RENDER FEATURED PACKAGES  (index.html — #featured-packages)
     Filters packages where launchPackage === true.
  ───────────────────────────────────────────────────────────── */
  function renderFeatured() {
    var container = document.getElementById('featured-packages');
    if (!container) return;

    if (typeof packages === 'undefined') {
      container.innerHTML = '<p class="text-muted">Packages unavailable — check packages.js.</p>';
      return;
    }

    var featured = [];
    for (var i = 0; i < packages.length; i++) {
      if (packages[i].launchPackage === true) featured.push(packages[i]);
    }

    if (featured.length === 0) {
      container.innerHTML = '<p class="text-muted">No featured packages configured.</p>';
      return;
    }

    var html = '<div class="cards-grid">';
    for (var j = 0; j < featured.length; j++) {
      html += buildCard(featured[j]);
    }
    html += '</div>';

    container.innerHTML = html;
  }

  /* ─────────────────────────────────────────────────────────────
     RENDER FULL CATALOG  (services.html — #catalog)
     Groups packages by tier in the order: starter, entry, mid, pro.
     Renders a tier header section then a grid of cards per tier.
  ───────────────────────────────────────────────────────────── */
  function renderCatalog() {
    var container = document.getElementById('catalog');
    if (!container) return;

    if (typeof packages === 'undefined' || typeof tiers === 'undefined') {
      container.innerHTML = '<p class="text-muted">Catalog unavailable — check packages.js.</p>';
      return;
    }

    var tierOrder = ['starter', 'entry', 'mid', 'pro'];
    var html = '';

    for (var t = 0; t < tierOrder.length; t++) {
      var key      = tierOrder[t];
      var meta     = tiers[key];
      if (!meta) continue;

      var tierPkgs = [];
      for (var p = 0; p < packages.length; p++) {
        if (packages[p].tier === key) tierPkgs.push(packages[p]);
      }
      if (tierPkgs.length === 0) continue;

      html +=
        '<section class="catalog-tier" aria-labelledby="tier-heading-' + esc(key) + '">' +
          '<div class="catalog-tier__header">' +
            '<h2 class="catalog-tier__label" id="tier-heading-' + esc(key) + '">' +
              esc(meta.label) +
            '</h2>' +
            '<span class="catalog-tier__price">' + esc(meta.priceRange) + '</span>' +
            '<p class="catalog-tier__description">' + esc(meta.description) + '</p>' +
          '</div>' +
          '<div class="catalog-tier__grid">';

      for (var c = 0; c < tierPkgs.length; c++) {
        html += buildCard(tierPkgs[c]);
      }

      html += '</div></section>';
    }

    if (html === '') {
      container.innerHTML = '<p class="text-muted">No packages found in catalog.</p>';
      return;
    }

    container.innerHTML = html;
  }

  /* ─────────────────────────────────────────────────────────────
     INIT — runs after DOM is ready
  ───────────────────────────────────────────────────────────── */
  function init() {
    initMobileNav();
    setActiveNavLink();
    renderFeatured();
    renderCatalog();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // DOMContentLoaded already fired (script is deferred or at bottom of body)
    init();
  }

}());
