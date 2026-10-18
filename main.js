/**
 * AFTER — App Entry Point
 * 라우터 등록 및 초기화
 */

// ─── Register Pages ───────────────────────────────
Router.register('home',      renderHome);
Router.register('saju',      renderSaju);
Router.register('goonghap',  renderGoonghap);
Router.register('tarot',     renderTarot);
Router.register('store',     renderStore);
Router.register('mypage',    renderMypage);
Router.register('report',    renderReport);
Router.register('checkout',  renderCheckout);

// ─── Boot ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Load persisted state
  AppState.load();

  // Render nav & footer (static wrappers)
  const navWrapper = document.getElementById('nav-wrapper');
  if (navWrapper) navWrapper.innerHTML = renderNav();
  const footerWrapper = document.getElementById('footer-wrapper');
  if (footerWrapper) footerWrapper.innerHTML = renderFooter();

  // Auth button state
  const authBtn = document.getElementById('auth-btn');
  if (authBtn) authBtn.textContent = AppState.user ? '마이페이지' : '로그인';

  // Update cart badge
  updateCartBadge();

  // Scroll listener — nav shrink effect
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
  });

  // Handle browser back/forward (hash-based)
  const hash = window.location.hash.replace('#/', '');
  const validPages = ['home', 'saju', 'goonghap', 'tarot', 'store', 'mypage', 'report'];
  const startPage = validPages.includes(hash) ? hash : 'home';
  Router.navigate(startPage);
});

// Close cart sidebar when clicking outside
document.addEventListener('click', (e) => {
  const sidebar = document.getElementById('cart-sidebar');
  if (sidebar && sidebar.classList.contains('open') && !sidebar.contains(e.target)) {
    const cartBtn = e.target.closest('[onclick="toggleCart()"]');
    if (!cartBtn) sidebar.classList.remove('open');
  }
});

// Global keyboard handler
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    const sidebar = document.getElementById('cart-sidebar');
    if (sidebar) sidebar.classList.remove('open');
    const mobileNav = document.getElementById('nav-mobile');
    if (mobileNav) mobileNav.classList.remove('open');
  }
});
