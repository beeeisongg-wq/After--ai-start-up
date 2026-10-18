/**
 * AFTER — App Core
 * 상태관리, 라우팅, 공통 컴포넌트
 */

// ─── State Management ────────────────────────────
const AppState = {
  currentPage: 'home',
  user: null, // { name, email, birth, ohaeng }
  cart: [],
  wishlist: [],
  analysisHistory: [],
  currentSaju: null,
  currentGoonghap: null,
  currentTarot: null,
  isLoading: false,

  // localStorage persistence
  save() {
    localStorage.setItem('after_state', JSON.stringify({
      user: this.user,
      cart: this.cart,
      wishlist: this.wishlist,
      analysisHistory: this.analysisHistory,
    }));
  },
  load() {
    const data = localStorage.getItem('after_state');
    if (data) {
      const parsed = JSON.parse(data);
      this.user = parsed.user || null;
      this.cart = parsed.cart || [];
      this.wishlist = parsed.wishlist || [];
      this.analysisHistory = parsed.analysisHistory || [];
    }
  },
};

// ─── Router ──────────────────────────────────────
const Router = {
  pages: {},
  register(id, renderFn) { this.pages[id] = renderFn; },
  navigate(pageId, params = {}) {
    AppState.currentPage = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const main = document.getElementById('main-content');
    if (!main) return;

    // Fade out
    main.style.opacity = '0';
    main.style.transform = 'translateY(10px)';
    setTimeout(() => {
      const renderFn = this.pages[pageId];
      if (renderFn) {
        main.innerHTML = renderFn(params);
        attachEventListeners(pageId, params);
      }
      main.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
      main.style.opacity = '1';
      main.style.transform = 'translateY(0)';
      updateNavActive(pageId);
    }, 180);
  },
};

function updateNavActive(pageId) {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === pageId);
  });
  document.querySelectorAll('.mypage-nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.section === pageId);
  });
}

// ─── Particles ───────────────────────────────────
function initParticles(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  const particles = Array.from({ length: 80 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.8 + 0.3,
    dx: (Math.random() - 0.5) * 0.3,
    dy: (Math.random() - 0.5) * 0.3,
    opacity: Math.random() * 0.7 + 0.2,
    twinkle: Math.random() * Math.PI * 2,
  }));

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.dx; p.y += p.dy; p.twinkle += 0.02;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
      const alpha = p.opacity * (0.6 + 0.4 * Math.sin(p.twinkle));
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200, 214, 229, ${alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener('resize', () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  });
}

// ─── Loading ──────────────────────────────────────
function showLoading(text = '분석 중...') {
  const existing = document.getElementById('loading-overlay');
  if (existing) existing.remove();

  const el = document.createElement('div');
  el.id = 'loading-overlay';
  el.className = 'loading-overlay';
  el.innerHTML = `
    <div class="loading-orb"></div>
    <div class="loading-text">${text}</div>
    <div style="font-size:0.75rem;color:var(--text-muted);margin-top:4px;">잠시만 기다려주세요</div>
  `;
  document.body.appendChild(el);
}

function hideLoading() {
  const el = document.getElementById('loading-overlay');
  if (el) {
    el.style.animation = 'fadeIn 0.3s ease reverse';
    setTimeout(() => el.remove(), 300);
  }
}

// ─── Toast ────────────────────────────────────────
function showToast(msg, type = 'info', duration = 3000) {
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => {
    el.style.animation = 'toastIn 0.3s ease reverse';
    setTimeout(() => el.remove(), 300);
  }, duration);
}

// ─── Modal ────────────────────────────────────────
function openModal(html, { onClose } = {}) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.id = 'modal-overlay';
  overlay.innerHTML = `<div class="modal" style="position:relative;">${html}</div>`;
  document.body.appendChild(overlay);
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal();
  });
  if (onClose) overlay._onClose = onClose;
  // Trap focus
  const firstInput = overlay.querySelector('input, button, select, textarea');
  if (firstInput) firstInput.focus();
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  if (overlay) {
    if (overlay._onClose) overlay._onClose();
    overlay.remove();
  }
}

// ─── Form Validation ──────────────────────────────
function validateRequired(fields) {
  let valid = true;
  fields.forEach(({ id, label }) => {
    const el = document.getElementById(id);
    const errEl = document.getElementById(`${id}-error`);
    if (!el) return;
    const val = el.value.trim();
    if (!val) {
      if (errEl) errEl.textContent = `${label}을(를) 입력해주세요.`;
      el.style.borderColor = 'var(--fire)';
      valid = false;
    } else {
      if (errEl) errEl.textContent = '';
      el.style.borderColor = '';
    }
  });
  return valid;
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ─── Cart ─────────────────────────────────────────
function addToCart(product) {
  const exists = AppState.cart.find(i => i.id === product.id);
  if (exists) {
    exists.qty = (exists.qty || 1) + 1;
  } else {
    AppState.cart.push({ ...product, qty: 1 });
  }
  AppState.save();
  updateCartBadge();
  showToast(`🛍️ ${product.name}이 장바구니에 담겼습니다.`, 'success');
}

function removeFromCart(productId) {
  AppState.cart = AppState.cart.filter(i => i.id !== productId);
  AppState.save();
  updateCartBadge();
}

function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  const count = AppState.cart.reduce((a, b) => a + (b.qty || 1), 0);
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
}

function toggleWishlist(productId) {
  const idx = AppState.wishlist.indexOf(productId);
  if (idx === -1) {
    AppState.wishlist.push(productId);
    showToast('❤️ 찜 목록에 추가됐습니다.', 'success');
  } else {
    AppState.wishlist.splice(idx, 1);
    showToast('찜 목록에서 제거됐습니다.', 'info');
  }
  AppState.save();
}

// ─── Intersection Observer (scroll animations) ────
function initScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.animate-fadeUp').forEach(el => observer.observe(el));
}

// ─── Ohaeng Bar Animation ─────────────────────────
function animateOhaengBars(data, containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  const bars = container.querySelectorAll('.ohaeng-bar-fill');
  const pcts = container.querySelectorAll('.ohaeng-bar-pct');
  setTimeout(() => {
    bars.forEach((bar, i) => {
      const pct = data[i] || 0;
      bar.style.width = `${pct}%`;
      if (pcts[i]) pcts[i].textContent = `${pct}%`;
    });
  }, 300);
}

// ─── Navbar HTML ──────────────────────────────────
function renderNav() {
  return `
    <nav class="nav">
      <div class="nav-inner">
        <a class="nav-logo" href="#" data-page="home" onclick="Router.navigate('home');return false;">AFTER</a>
        <div class="nav-links">
          <a class="nav-link" data-page="saju" href="#" onclick="Router.navigate('saju');return false;">사주분석</a>
          <a class="nav-link" data-page="goonghap" href="#" onclick="Router.navigate('goonghap');return false;">궁합분석</a>
          <a class="nav-link" data-page="tarot" href="#" onclick="Router.navigate('tarot');return false;">타로</a>
          <a class="nav-link" data-page="store" href="#" onclick="Router.navigate('store');return false;">스토어</a>
        </div>
        <div class="nav-actions">
          <button class="btn btn-ghost btn-sm" onclick="toggleCart()" style="position:relative;">
            🛍️ 장바구니
            <span id="cart-badge" style="display:none;position:absolute;top:-4px;right:-4px;width:18px;height:18px;background:var(--fire);border-radius:50%;font-size:0.7rem;align-items:center;justify-content:center;color:white;">0</span>
          </button>
          <button class="btn btn-outline btn-sm" onclick="toggleAuthModal()" id="auth-btn">
            ${AppState.user ? '마이페이지' : '로그인'}
          </button>
        </div>
        <button class="nav-hamburger btn" onclick="toggleMobileNav()" aria-label="메뉴">☰</button>
      </div>
    </nav>
    <div class="nav-mobile" id="nav-mobile">
      <a class="nav-link" data-page="saju" href="#" onclick="Router.navigate('saju');toggleMobileNav();return false;">사주분석</a>
      <a class="nav-link" data-page="goonghap" href="#" onclick="Router.navigate('goonghap');toggleMobileNav();return false;">궁합분석</a>
      <a class="nav-link" data-page="tarot" href="#" onclick="Router.navigate('tarot');toggleMobileNav();return false;">타로</a>
      <a class="nav-link" data-page="store" href="#" onclick="Router.navigate('store');toggleMobileNav();return false;">스토어</a>
      <a class="nav-link" data-page="mypage" href="#" onclick="Router.navigate('mypage');toggleMobileNav();return false;">${AppState.user ? '마이페이지' : '로그인/회원가입'}</a>
    </div>
  `;
}

function toggleMobileNav() {
  document.getElementById('nav-mobile').classList.toggle('open');
}

function renderFooter() {
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <div class="footer-brand-name">AFTER</div>
            <p class="footer-desc">나를 알고 싶은 순간,<br>우리가 궁금한 순간.<br>사주·오행·타로를 활용한<br>AI 기반 자기이해 서비스</p>
          </div>
          <div>
            <div class="footer-col-title">서비스</div>
            <a class="footer-col-link" href="#" onclick="Router.navigate('saju');return false;">사주분석</a>
            <a class="footer-col-link" href="#" onclick="Router.navigate('goonghap');return false;">궁합분석</a>
            <a class="footer-col-link" href="#" onclick="Router.navigate('tarot');return false;">타로</a>
            <a class="footer-col-link" href="#" onclick="Router.navigate('store');return false;">스토어</a>
          </div>
          <div>
            <div class="footer-col-title">이용안내</div>
            <a class="footer-col-link" href="#">이용약관</a>
            <a class="footer-col-link" href="#">개인정보처리방침</a>
            <a class="footer-col-link" href="#">환불정책</a>
            <a class="footer-col-link" href="#">고객센터</a>
          </div>
          <div>
            <div class="footer-col-title">AFTER</div>
            <a class="footer-col-link" href="#">인스타그램</a>
            <a class="footer-col-link" href="#">카카오채널</a>
            <a class="footer-col-link" href="#">공지사항</a>
          </div>
        </div>
        <div class="footer-bottom">
          <p class="footer-copy">© 2024 AFTER. All rights reserved.</p>
          <p class="footer-disclaimer">본 서비스의 사주·타로 콘텐츠는 참고 및 자기성찰 목적으로만 제공되며, 실제 미래를 확정적으로 예측하지 않습니다.</p>
        </div>
      </div>
    </footer>
  `;
}

// ─── Auth Modal ───────────────────────────────────
function toggleAuthModal() {
  if (AppState.user) {
    Router.navigate('mypage');
  } else {
    openModal(renderLoginModal());
    setupLoginModal();
  }
}

function renderLoginModal() {
  return `
    <button class="modal-close" onclick="closeModal()">✕</button>
    <div class="auth-logo text-gradient" style="font-family:var(--font-serif);font-size:1.6rem;font-weight:700;text-align:center;margin-bottom:var(--space-2);">AFTER</div>
    <div style="text-align:center;color:var(--text-secondary);font-size:0.88rem;margin-bottom:var(--space-6);">나를 알고, 우리를 이해하는 공간</div>
    
    <div class="tabs" style="margin-bottom:var(--space-6);">
      <button class="tab-btn active" id="tab-login" onclick="switchAuthTab('login')">로그인</button>
      <button class="tab-btn" id="tab-signup" onclick="switchAuthTab('signup')">회원가입</button>
    </div>

    <div id="auth-login-form">
      <div class="auth-form">
        <div class="form-group">
          <label class="form-label">이메일</label>
          <input class="form-input" id="login-email" type="email" placeholder="example@email.com">
          <span class="form-error" id="login-email-error"></span>
        </div>
        <div class="form-group">
          <label class="form-label">비밀번호</label>
          <input class="form-input" id="login-pw" type="password" placeholder="비밀번호 입력">
          <span class="form-error" id="login-pw-error"></span>
        </div>
        <button class="btn btn-primary" style="width:100%;margin-top:var(--space-2);" onclick="handleLogin()">로그인</button>
        <div class="divider-label">또는 소셜 로그인</div>
        <button class="btn btn-outline" style="width:100%;" onclick="handleSocialLogin('kakao')">🟡 카카오로 시작하기</button>
        <button class="btn btn-outline" style="width:100%;margin-top:var(--space-2);" onclick="handleSocialLogin('google')">🔵 구글로 시작하기</button>
      </div>
    </div>

    <div id="auth-signup-form" style="display:none;">
      <div class="auth-form">
        <div class="form-group">
          <label class="form-label">이름</label>
          <input class="form-input" id="signup-name" type="text" placeholder="이름 입력">
          <span class="form-error" id="signup-name-error"></span>
        </div>
        <div class="form-group">
          <label class="form-label">이메일</label>
          <input class="form-input" id="signup-email" type="email" placeholder="example@email.com">
          <span class="form-error" id="signup-email-error"></span>
        </div>
        <div class="form-group">
          <label class="form-label">비밀번호</label>
          <input class="form-input" id="signup-pw" type="password" placeholder="8자 이상">
          <span class="form-error" id="signup-pw-error"></span>
        </div>
        <div class="privacy-notice">
          <strong>개인정보 처리 안내</strong><br>
          필요한 최소한의 정보만 수집합니다. 얼굴 사진은 선택사항이며 기본적으로 저장하지 않습니다.
          <a href="#" style="color:var(--lavender-light);">개인정보처리방침 보기</a>
        </div>
        <div style="display:flex;align-items:center;gap:var(--space-3);">
          <input type="checkbox" id="agree-terms" style="accent-color:var(--lavender);">
          <label for="agree-terms" style="font-size:0.82rem;color:var(--text-secondary);">이용약관 및 개인정보처리방침에 동의합니다</label>
        </div>
        <button class="btn btn-primary" style="width:100%;margin-top:var(--space-2);" onclick="handleSignup()">회원가입</button>
      </div>
    </div>
  `;
}

function switchAuthTab(tab) {
  document.getElementById('tab-login').classList.toggle('active', tab === 'login');
  document.getElementById('tab-signup').classList.toggle('active', tab === 'signup');
  document.getElementById('auth-login-form').style.display = tab === 'login' ? 'block' : 'none';
  document.getElementById('auth-signup-form').style.display = tab === 'signup' ? 'block' : 'none';
}

function setupLoginModal() {}

function handleLogin() {
  const email = document.getElementById('login-email').value.trim();
  const pw    = document.getElementById('login-pw').value;
  let valid = true;
  if (!validateEmail(email)) {
    document.getElementById('login-email-error').textContent = '올바른 이메일 형식을 입력해주세요.';
    valid = false;
  }
  if (!pw) {
    document.getElementById('login-pw-error').textContent = '비밀번호를 입력해주세요.';
    valid = false;
  }
  if (!valid) return;

  showLoading('로그인 중...');
  setTimeout(() => {
    hideLoading();
    AppState.user = { name: '회원', email, ohaeng: null };
    AppState.save();
    document.getElementById('auth-btn').textContent = '마이페이지';
    closeModal();
    showToast('✨ 환영합니다!', 'success');
  }, 1200);
}

function handleSignup() {
  const name  = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const pw    = document.getElementById('signup-pw').value;
  const agreed = document.getElementById('agree-terms').checked;
  let valid = true;

  if (!name) { document.getElementById('signup-name-error').textContent = '이름을 입력해주세요.'; valid = false; }
  if (!validateEmail(email)) { document.getElementById('signup-email-error').textContent = '올바른 이메일을 입력해주세요.'; valid = false; }
  if (pw.length < 8) { document.getElementById('signup-pw-error').textContent = '비밀번호는 8자 이상이어야 합니다.'; valid = false; }
  if (!agreed) { showToast('이용약관에 동의해주세요.', 'error'); valid = false; }
  if (!valid) return;

  showLoading('가입 처리 중...');
  setTimeout(() => {
    hideLoading();
    AppState.user = { name, email, ohaeng: null };
    AppState.save();
    document.getElementById('auth-btn').textContent = '마이페이지';
    closeModal();
    showToast(`🌟 ${name}님, AFTER에 오신 걸 환영합니다!`, 'success');
  }, 1500);
}

function handleSocialLogin(provider) {
  showLoading(`${provider === 'kakao' ? '카카오' : '구글'}로 로그인 중...`);
  setTimeout(() => {
    hideLoading();
    AppState.user = { name: '소셜회원', email: `user@${provider}.com`, ohaeng: null };
    AppState.save();
    document.getElementById('auth-btn').textContent = '마이페이지';
    closeModal();
    showToast('✨ 환영합니다!', 'success');
  }, 1200);
}

// ─── Cart Sidebar ─────────────────────────────────
function toggleCart() {
  let sidebar = document.getElementById('cart-sidebar');
  if (!sidebar) {
    sidebar = document.createElement('div');
    sidebar.id = 'cart-sidebar';
    sidebar.className = 'cart-sidebar';
    sidebar.innerHTML = renderCartSidebar();
    document.body.appendChild(sidebar);
    setTimeout(() => sidebar.classList.add('open'), 10);
  } else {
    sidebar.classList.toggle('open');
  }
  refreshCartUI();
}

function renderCartSidebar() {
  const total = AppState.cart.reduce((sum, i) => sum + (i.price || 0) * (i.qty || 1), 0);
  return `
    <div class="cart-header">
      <div class="cart-title">🛍️ 장바구니 (${AppState.cart.length})</div>
      <button class="btn btn-ghost btn-sm" onclick="toggleCart()">✕</button>
    </div>
    <div class="cart-items" id="cart-items-list">
      ${AppState.cart.length === 0
        ? '<div style="text-align:center;padding:var(--space-12);color:var(--text-muted);"><div style="font-size:2rem;margin-bottom:var(--space-3);">🛍️</div><div>장바구니가 비어있습니다</div></div>'
        : AppState.cart.map(item => `
          <div class="cart-item" id="cart-item-${item.id}">
            <div class="cart-item-img"><img src="images/${item.img || 'product_bracelet.png'}" alt="${item.name}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22%3E%3Crect width=%2260%22 height=%2260%22 fill=%22%231A2035%22/%3E%3C/svg%3E'"></div>
            <div style="flex:1;">
              <div class="cart-item-name">${item.name}</div>
              <div class="cart-item-ohaeng">${item.ohaeng || ''} 오행 콘셉트</div>
              <div class="cart-item-price">${(item.price || 0).toLocaleString()}원 × ${item.qty || 1}</div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart('${item.id}');refreshCartUI();">✕</button>
          </div>
        `).join('')
      }
    </div>
    <div class="cart-footer">
      <div class="cart-total">
        <span class="cart-total-label">합계</span>
        <span class="cart-total-price" id="cart-total-price">${total.toLocaleString()}원</span>
      </div>
      <button class="btn btn-gold" style="width:100%;" onclick="handleCheckout()">결제하기</button>
    </div>
  `;
}

function refreshCartUI() {
  const sidebar = document.getElementById('cart-sidebar');
  if (sidebar) sidebar.innerHTML = renderCartSidebar();
  updateCartBadge();
}

function handleCheckout() {
  if (AppState.cart.length === 0) { showToast('장바구니가 비어있습니다.', 'error'); return; }
  if (!AppState.user) {
    toggleCart();
    showToast('결제하려면 로그인이 필요합니다.', 'error');
    setTimeout(() => toggleAuthModal(), 500);
    return;
  }
  Router.navigate('checkout');
}

// ─── Attach Event Listeners ───────────────────────
function attachEventListeners(pageId, params) {
  initScrollAnimations();
  updateCartBadge();

  switch (pageId) {
    case 'home': initHomePage(); break;
    case 'saju': initSajuPage(); break;
    case 'goonghap': initGoonghapPage(); break;
    case 'tarot': initTarotPage(); break;
    case 'store': initStorePage(); break;
    case 'mypage': initMypagePage(); break;
    case 'report': initReportPage(params); break;
    case 'checkout': initCheckoutPage(); break;
  }
}
