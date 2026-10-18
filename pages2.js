/**
 * AFTER — Pages (Report, Store, MyPage, Checkout)
 */

// ─── Product Data ─────────────────────────────────
const PRODUCTS = [
  { id:'p1', name:'목(木) 에너지 팔찌', category:'팔찌', ohaeng:'목', price:28000, img:'product_bracelet.png', desc:'창의성과 성장의 나무 기운을 담은 녹색·에메랄드 천연석 팔찌', tags:['천연석','수제','녹색'] },
  { id:'p2', name:'화(火) 열정 팔찌', category:'팔찌', ohaeng:'화', price:28000, img:'product_bracelet.png', desc:'열정과 카리스마의 불 기운을 담은 붉은 계열 팔찌', tags:['천연석','수제','레드'] },
  { id:'p3', name:'수(水) 직관 목걸이', category:'목걸이', ohaeng:'수', price:42000, img:'product_necklace.png', desc:'지혜와 직관의 물 기운을 담은 블루 사파이어 펜던트', tags:['사파이어','은925','블루'] },
  { id:'p4', name:'금(金) 결단 목걸이', category:'목걸이', ohaeng:'금', price:52000, img:'product_necklace.png', desc:'결단력과 공정함의 쇠 기운을 담은 실버 크리스탈 목걸이', tags:['크리스탈','실버','클리어'] },
  { id:'p5', name:'오행 키링 세트', category:'키링', ohaeng:'토', price:18000, img:'product_keyring.png', desc:'목·화·토·금·수 다섯 오행 심볼 미니 키링 세트', tags:['세트','선물','키링'] },
  { id:'p6', name:'달 & 별 키링', category:'키링', ohaeng:'수', price:15000, img:'product_keyring.png', desc:'달과 별 모티프의 은색 크리스탈 키링, AFTER 로고 각인', tags:['달','별','실버'] },
  { id:'p7', name:'토(土) 안정 팔찌', category:'팔찌', ohaeng:'토', price:28000, img:'product_bracelet.png', desc:'안정과 포용의 대지 기운을 담은 황토·황수정 팔찌', tags:['황수정','수제','골드'] },
  { id:'p8', name:'별자리 목걸이', category:'목걸이', ohaeng:'금', price:38000, img:'product_necklace.png', desc:'황도 12궁 별자리를 모티프로 한 섬세한 금속 목걸이', tags:['별자리','골드','섬세함'] },
  { id:'p9', name:'사주 맞춤 팔찌', category:'팔찌', ohaeng:'커스텀', price:48000, img:'product_bracelet.png', desc:'사주 분석 결과에 맞춰 오행 비율로 제작하는 나만의 커스텀 팔찌', tags:['커스텀','맞춤제작','프리미엄'], isNew:true },
];

// ─── REPORT PAGE ─────────────────────────────────
function renderReport(params = {}) {
  const type = params.type || 'standard';
  const saju = AppState.currentSaju;
  const typeLabel = { standard:'스탠다드', premium:'프리미엄', total:'종합', goonghap:'궁합', tarot:'타로' }[type] || '기본';
  const price = { standard:4900, premium:19900, total:49900, goonghap:19900, tarot:9900 }[type] || 4900;

  const name = saju ? (AppState.currentSaju?.inputInfo?.name || '회원') : '회원';

  return `
    <div class="page-header">
      <div class="page-header-badge"><span class="badge badge-premium">📋 분석 리포트</span></div>
      <h1><span class="text-gradient">나만의</span> 분석 리포트</h1>
      <p>AI가 분석한 맞춤형 결과를 확인하세요</p>
    </div>

    <div class="container">
      <div class="report-header-card animate-fadeUp">
        <div class="report-type-badge"><span class="badge badge-premium">${typeLabel} 리포트</span></div>
        <div class="report-person-name text-gradient">${name}의 ${typeLabel} 분석</div>
        <div class="report-person-meta">${saju ? `${saju.inputInfo.year}년 ${saju.inputInfo.month}월 ${saju.inputInfo.day}일 • 주 오행: ${saju.mainOhaeng}` : '사주 정보를 먼저 입력해주세요'}</div>
        <div class="report-generated">생성일: ${new Date().toLocaleDateString('ko-KR')}</div>
      </div>

      <div class="report-sections">
        <!-- Section 1: 기본 분석 (무료) -->
        <div class="report-section animate-fadeUp">
          <div class="report-section-header">
            <div class="report-section-title">
              <div class="report-section-icon" style="background:rgba(155,142,196,0.15);">🔯</div>
              사주 기본 분석
            </div>
            <span class="badge badge-free">무료</span>
          </div>
          ${saju ? `
            <p class="report-text">
              <strong style="color:var(--silver);">일주(日柱)</strong>: ${saju.pillars.ilju.ganHj}${saju.pillars.ilju.jiHj} (${saju.pillars.ilju.gan}${saju.pillars.ilju.ji}일)<br><br>
              당신의 사주에서 가장 중요한 것은 일주입니다. <strong style="color:var(--lavender-light);">${saju.pillars.ilju.ganHj}${saju.pillars.ilju.jiHj}일</strong>은 
              ${OHAENG_TRAITS[saju.mainOhaeng]?.desc || '독특한 기질'}을 가진 분입니다.<br><br>
              오행 분포를 보면 <strong style="color:var(--lavender-light);">${saju.mainOhaeng}</strong>의 기운이 가장 강하게 나타나며,
              ${saju.weakOhaeng ? `<strong style="color:var(--text-secondary);">${saju.weakOhaeng}</strong>의 기운이 상대적으로 약합니다.` : ''}
              이 균형을 이해하면 자신의 강점을 더 잘 활용할 수 있습니다.
            </p>
          ` : '<p class="report-text">사주 분석을 먼저 진행해주세요. <a href="#" onclick="Router.navigate(\'saju\')" style="color:var(--lavender-light);">사주 분석 시작하기</a></p>'}
        </div>

        <!-- Section 2: 성격 분석 (잠금) -->
        ${type === 'standard' || type === 'premium' || type === 'total' ? `
          <div class="report-section animate-fadeUp animate-fadeUp-delay-1">
            <div class="report-section-header">
              <div class="report-section-title">
                <div class="report-section-icon" style="background:rgba(212,168,83,0.15);">🧠</div>
                심층 성격 & 기질 분석
              </div>
              <span class="badge badge-premium">스탠다드+</span>
            </div>
            <p class="report-text" style="display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;filter:blur(4px);user-select:none;">
              당신은 천부적인 창의성과 강한 직관력을 가진 분입니다. 남들이 보지 못하는 것을 먼저 발견하는 선구자적 기질이 있으며, 새로운 프로젝트나 아이디어를 시작하는 데 탁월한 능력을 보입니다. 하지만 마무리보다는 시작에 에너지를 쏟는 경향이 있어, 함께 일하는 파트너와의 역할 분담이 중요합니다. 감정이 풍부하고 공감 능력이 뛰어나 주변 사람들의 신뢰를 받습니다.
            </p>
            <div class="report-locked-overlay" style="position:relative;padding:var(--space-5);background:linear-gradient(to top,var(--bg-card),rgba(20,24,48,0.6));border-radius:var(--radius-lg);text-align:center;margin-top:var(--space-3);">
              <div style="font-size:1.5rem;margin-bottom:var(--space-2);">🔒</div>
              <div style="font-family:var(--font-serif);font-size:1rem;margin-bottom:var(--space-2);">스탠다드 리포트에서 확인하세요</div>
              <div style="font-size:0.82rem;color:var(--text-muted);margin-bottom:var(--space-4);">심층 성격 분석, 연애운, 직업운 포함</div>
              <button class="btn btn-gold btn-sm" onclick="handlePurchase('standard', 4900)">4,900원에 잠금 해제</button>
            </div>
          </div>
        ` : ''}

        <!-- Section 3: 연애/직업운 (잠금) -->
        <div class="report-section animate-fadeUp animate-fadeUp-delay-2">
          <div class="report-section-header">
            <div class="report-section-title">
              <div class="report-section-icon" style="background:rgba(200,75,75,0.15);">💕</div>
              연애운 & 이상형 분석
            </div>
            <span class="badge badge-premium">스탠다드+</span>
          </div>
          <div style="position:relative;">
            <p class="report-text" style="filter:blur(5px);user-select:none;pointer-events:none;">
              당신의 이상형은 당신의 부족한 오행을 채워줄 수 있는 분입니다. 수(水)의 기운이 강한 파트너와 잘 어울리며, 깊은 대화와 지적 교류를 즐기는 연인을 원합니다. 현재 연애운은 새로운 만남의 기회가 있는 시기이며...
            </p>
            <div style="text-align:center;padding:var(--space-4);">
              <button class="btn btn-outline btn-sm" onclick="handlePurchase('standard', 4900)">🔒 잠금 해제 4,900원</button>
            </div>
          </div>
        </div>

        <!-- Section 4: 대운 분석 (프리미엄) -->
        <div class="report-section animate-fadeUp animate-fadeUp-delay-3">
          <div class="report-section-header">
            <div class="report-section-title">
              <div class="report-section-icon" style="background:rgba(155,142,196,0.15);">🌊</div>
              대운(大運) · 세운(歲運) 흐름
            </div>
            <span class="badge badge-premium">프리미엄+</span>
          </div>
          <div style="text-align:center;padding:var(--space-6);">
            <div style="font-size:2rem;margin-bottom:var(--space-3);">🔒</div>
            <div style="font-family:var(--font-serif);margin-bottom:var(--space-3);">프리미엄 리포트에서 확인하세요</div>
            <p style="font-size:0.85rem;max-width:400px;margin:0 auto var(--space-4);">10년 단위 대운과 올해·내년 세운 흐름 분석. 언제 어떤 시기가 올지 미리 준비하세요.</p>
            <button class="btn btn-primary btn-sm" onclick="handlePurchase('premium', 19900)">프리미엄 19,900원</button>
          </div>
        </div>

        <!-- Upgrade Banner -->
        <div class="cta-banner animate-fadeUp">
          <h2>더 깊은 통찰로 <span class="text-gradient">나를 완성하세요</span></h2>
          <p style="margin:var(--space-4) 0;">사주·궁합·타로 종합 분석 + 오행 맞춤 팔찌 할인</p>
          <div class="cta-actions">
            <button class="btn btn-primary btn-lg" onclick="handlePurchase('standard', 4900)">스탠다드 4,900원</button>
            <button class="btn btn-gold btn-lg" onclick="handlePurchase('premium', 19900)">프리미엄 19,900원</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function initReportPage(params) {}

function handlePurchase(type, price) {
  if (!AppState.user) {
    showToast('구매하려면 로그인이 필요합니다.', 'error');
    setTimeout(() => toggleAuthModal(), 500);
    return;
  }
  openModal(`
    <button class="modal-close" onclick="closeModal()">✕</button>
    <h3 style="font-family:var(--font-serif);margin-bottom:var(--space-3);">리포트 구매</h3>
    <div style="background:rgba(255,255,255,0.03);border-radius:var(--radius-md);padding:var(--space-5);margin-bottom:var(--space-5);">
      <div style="display:flex;justify-content:space-between;margin-bottom:var(--space-2);">
        <span style="color:var(--text-secondary);">상품</span>
        <span>AFTER ${{'standard':'스탠다드','premium':'프리미엄','total':'종합','goonghap':'궁합','tarot':'타로'}[type]} 리포트</span>
      </div>
      <div style="display:flex;justify-content:space-between;">
        <span style="color:var(--text-secondary);">금액</span>
        <span style="color:var(--gold);font-weight:700;">${price.toLocaleString()}원</span>
      </div>
    </div>
    <div style="display:flex;flex-direction:column;gap:var(--space-3);">
      <button class="btn btn-primary" style="width:100%;" onclick="processPurchase('${type}',${price},'card')">💳 카드 결제</button>
      <button class="btn btn-outline" style="width:100%;border-color:rgba(255,193,7,0.5);color:#FFC107;" onclick="processPurchase('${type}',${price},'kakaopay')">🟡 카카오페이</button>
      <button class="btn btn-outline" style="width:100%;" onclick="processPurchase('${type}',${price},'tosspay')">💙 토스페이</button>
    </div>
    <p style="font-size:0.78rem;color:var(--text-muted);text-align:center;margin-top:var(--space-4);">결제는 안전하게 처리됩니다 🔒</p>
  `);
}

function processPurchase(type, price, method) {
  closeModal();
  showLoading('결제 처리 중...');
  setTimeout(() => {
    hideLoading();
    showToast(`✅ 결제가 완료됐습니다! ${price.toLocaleString()}원`, 'success');
  }, 2000);
}

// ─── STORE PAGE ───────────────────────────────────
function renderStore() {
  return `
    <div class="page-header">
      <div class="page-header-badge"><span class="badge badge-new">✨ 오행 스토어</span></div>
      <h1>오행 <span class="text-gradient">맞춤 상품</span></h1>
      <p>당신의 오행에 맞는 에너지를 담은 프리미엄 액세서리</p>
    </div>

    <div class="container">
      <div class="store-filters animate-fadeUp" id="store-filters">
        <button class="store-filter-btn active" onclick="filterProducts('all',this)">전체</button>
        <button class="store-filter-btn" onclick="filterProducts('팔찌',this)">팔찌</button>
        <button class="store-filter-btn" onclick="filterProducts('목걸이',this)">목걸이</button>
        <button class="store-filter-btn" onclick="filterProducts('키링',this)">키링</button>
        <button class="store-filter-btn" style="color:var(--wood);border-color:rgba(74,124,89,0.3);" onclick="filterProducts('목',this)">🌿 목(木)</button>
        <button class="store-filter-btn" style="color:var(--fire);border-color:rgba(200,75,75,0.3);" onclick="filterProducts('화',this)">🔥 화(火)</button>
        <button class="store-filter-btn" style="color:var(--earth);border-color:rgba(212,168,83,0.3);" onclick="filterProducts('토',this)">⛰️ 토(土)</button>
        <button class="store-filter-btn" style="color:var(--metal);border-color:rgba(200,214,229,0.3);" onclick="filterProducts('금',this)">⚡ 금(金)</button>
        <button class="store-filter-btn" style="color:var(--water);border-color:rgba(61,107,156,0.3);" onclick="filterProducts('수',this)">💧 수(水)</button>
      </div>

      <div class="product-grid animate-fadeUp animate-fadeUp-delay-1" id="product-grid">
        ${renderProductGrid(PRODUCTS)}
      </div>

      ${AppState.currentSaju ? `
        <div class="cta-banner" style="margin-top:var(--space-10);">
          <span class="badge badge-premium" style="margin-bottom:var(--space-3);">내 오행에 맞는 추천</span>
          <h2>당신의 오행은 <span class="text-gradient">${AppState.currentSaju.mainOhaeng}(${{'목':'木','화':'火','토':'土','금':'金','수':'水'}[AppState.currentSaju.mainOhaeng]})</span></h2>
          <p style="margin:var(--space-3) 0;">오행 분석 결과를 바탕으로 당신에게 가장 잘 맞는 상품을 추천합니다</p>
          <div class="cta-actions" style="margin-top:var(--space-6);">
            <button class="btn btn-primary" onclick="filterProducts('${AppState.currentSaju.mainOhaeng}', document.querySelector('.store-filter-btn'))">내 오행 상품 보기</button>
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

function renderProductGrid(products) {
  const ohaengColors = { 목:'#4A7C59', 화:'#C84B4B', 토:'#D4A853', 금:'#C8D6E5', 수:'#3D6B9C', 커스텀:'#9B8EC4' };
  const ohaengEmoji  = { 목:'🌿', 화:'🔥', 토:'⛰️', 금:'⚡', 수:'💧', 커스텀:'✦' };

  return products.map(p => `
    <div class="product-card" id="product-${p.id}">
      <div class="product-img">
        <img src="images/${p.img}" alt="${p.name}" loading="lazy" onerror="this.style.display='none';this.parentElement.style.fontSize='3rem';this.parentElement.style.display='flex';this.parentElement.style.alignItems='center';this.parentElement.style.justifyContent='center';this.parentElement.innerHTML='${ohaengEmoji[p.ohaeng] || '✦'}'">
        <div class="product-ohaeng-tag ${`bg-ohaeng-${p.ohaeng === '커스텀' ? 'water' : p.ohaeng}`}"
             style="color:${ohaengColors[p.ohaeng]}">
          ${ohaengEmoji[p.ohaeng]}${p.ohaeng}
        </div>
        <button class="product-wishlist ${AppState.wishlist.includes(p.id) ? 'active' : ''}"
                id="wishlist-${p.id}"
                onclick="toggleWishlist('${p.id}');this.classList.toggle('active');"
                aria-label="찜하기">
          ${AppState.wishlist.includes(p.id) ? '❤️' : '🤍'}
        </button>
        ${p.isNew ? '<div style="position:absolute;bottom:8px;left:8px;"><span class="badge badge-new">NEW</span></div>' : ''}
      </div>
      <div class="product-info">
        <div class="product-category">${p.category}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:var(--space-3);">
          ${p.tags.map(t=>`<span style="font-size:0.7rem;padding:2px 8px;border-radius:var(--radius-full);background:rgba(255,255,255,0.04);color:var(--text-muted);">#${t}</span>`).join('')}
        </div>
        <div class="product-footer">
          <div class="product-price text-gradient">${p.price.toLocaleString()}원</div>
          <button class="product-cart-btn" onclick="addToCart({id:'${p.id}',name:'${p.name}',price:${p.price},img:'${p.img}',ohaeng:'${p.ohaeng}'})" aria-label="장바구니 추가">🛍️</button>
        </div>
      </div>
    </div>
  `).join('');
}

function initStorePage() {}

function filterProducts(filter, btn) {
  document.querySelectorAll('.store-filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const filtered = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter || p.ohaeng === filter);
  const grid = document.getElementById('product-grid');
  if (grid) {
    grid.style.opacity = '0';
    setTimeout(() => {
      grid.innerHTML = renderProductGrid(filtered);
      grid.style.opacity = '1';
      grid.style.transition = 'opacity 0.3s ease';
    }, 200);
  }
}

// ─── MYPAGE ───────────────────────────────────────
function renderMypage() {
  if (!AppState.user) {
    return `
      <div class="page-header">
        <h1>마이페이지</h1>
      </div>
      <div class="container" style="text-align:center;padding:var(--space-12) 0;">
        <div style="font-size:3rem;margin-bottom:var(--space-4);">🔐</div>
        <h2 style="margin-bottom:var(--space-4);">로그인이 필요합니다</h2>
        <p style="margin-bottom:var(--space-8);">마이페이지를 이용하려면 로그인해주세요</p>
        <button class="btn btn-primary btn-lg" onclick="toggleAuthModal()">로그인 / 회원가입</button>
      </div>
    `;
  }

  const user = AppState.user;
  const ohaengEmoji = { 목:'🌿', 화:'🔥', 토:'⛰️', 금:'⚡', 수:'💧' };

  return `
    <div class="page-header">
      <div class="page-header-badge"><span class="badge badge-new">👤 마이페이지</span></div>
      <h1>안녕하세요, <span class="text-gradient">${user.name}</span>님</h1>
    </div>

    <div class="container">
      <div class="mypage-layout">
        <!-- Sidebar -->
        <div class="mypage-sidebar animate-fadeUp">
          <div class="mypage-profile">
            <div class="mypage-avatar">✨</div>
            <div class="mypage-name">${user.name}</div>
            <div class="mypage-email">${user.email}</div>
            ${AppState.currentSaju ? `<div style="margin-top:var(--space-3);"><span class="badge bg-ohaeng-${AppState.currentSaju.mainOhaeng}" style="color:${({목:'#4A7C59',화:'#C84B4B',토:'#D4A853',금:'#C8D6E5',수:'#3D6B9C'})[AppState.currentSaju.mainOhaeng]};">${ohaengEmoji[AppState.currentSaju.mainOhaeng]}${AppState.currentSaju.mainOhaeng} 기운</span></div>` : ''}
          </div>
          <nav class="mypage-nav">
            <div class="mypage-nav-item active" data-section="overview" onclick="switchMypageSection('overview', this)">
              <span class="mypage-nav-icon">📊</span> 분석 기록
            </div>
            <div class="mypage-nav-item" data-section="orders" onclick="switchMypageSection('orders', this)">
              <span class="mypage-nav-icon">🛍️</span> 주문 내역
            </div>
            <div class="mypage-nav-item" data-section="wishlist" onclick="switchMypageSection('wishlist', this)">
              <span class="mypage-nav-icon">❤️</span> 찜 목록
            </div>
            <div class="mypage-nav-item" data-section="profile" onclick="switchMypageSection('profile', this)">
              <span class="mypage-nav-icon">⚙️</span> 개인정보 관리
            </div>
            <div class="mypage-nav-item" style="margin-top:var(--space-4);" onclick="handleLogout()">
              <span class="mypage-nav-icon">🚪</span> 로그아웃
            </div>
          </nav>
        </div>

        <!-- Content -->
        <div class="mypage-content animate-fadeUp animate-fadeUp-delay-1" id="mypage-content">
          ${renderMypageSection('overview')}
        </div>
      </div>
    </div>
  `;
}

function renderMypageSection(section) {
  switch (section) {
    case 'overview': return renderMypageOverview();
    case 'orders':   return renderMypageOrders();
    case 'wishlist': return renderMypageWishlist();
    case 'profile':  return renderMypageProfile();
    default:         return renderMypageOverview();
  }
}

function renderMypageOverview() {
  const history = AppState.analysisHistory;
  return `
    <div>
      <div class="mypage-section-title">📊 분석 기록</div>
      ${history.length === 0 ? `
        <div style="text-align:center;padding:var(--space-12);background:var(--bg-card);border-radius:var(--radius-xl);border:1px solid var(--border);">
          <div style="font-size:3rem;margin-bottom:var(--space-4);">🔯</div>
          <div style="font-family:var(--font-serif);font-size:1.1rem;margin-bottom:var(--space-3);">아직 분석 기록이 없습니다</div>
          <p style="margin-bottom:var(--space-6);">사주, 궁합, 타로 분석을 시작해보세요</p>
          <div style="display:flex;gap:var(--space-3);justify-content:center;flex-wrap:wrap;">
            <button class="btn btn-primary btn-sm" onclick="Router.navigate('saju')">사주 분석</button>
            <button class="btn btn-outline btn-sm" onclick="Router.navigate('tarot')">타로 뽑기</button>
          </div>
        </div>
      ` : `
        <div class="analysis-history-grid">
          ${history.slice(0,6).map(h => `
            <div class="analysis-history-card" onclick="Router.navigate('report',{type:'standard'})">
              <div class="analysis-history-type">${{사주:'🔯 사주분석',궁합:'💑 궁합분석',타로:'🔮 타로'}[h.type] || h.type}</div>
              <div class="analysis-history-title">${h.title}</div>
              <div class="analysis-history-date">${h.date}</div>
              <div class="analysis-history-preview">${h.preview}</div>
            </div>
          `).join('')}
        </div>
        ${history.length > 6 ? `<div style="text-align:center;margin-top:var(--space-5);"><button class="btn btn-outline btn-sm">더 보기 (${history.length - 6}개)</button></div>` : ''}
      `}
    </div>
  `;
}

function renderMypageOrders() {
  const mockOrders = [
    { id:'ORD001', date:'2024.10.15', product:'목(木) 에너지 팔찌', amount:28000, status:'delivered' },
    { id:'ORD002', date:'2024.10.12', product:'사주 프리미엄 리포트', amount:19900, status:'delivered' },
    { id:'ORD003', date:'2024.10.10', product:'수(水) 직관 목걸이', amount:42000, status:'shipping' },
  ];
  return `
    <div>
      <div class="mypage-section-title">🛍️ 주문 내역</div>
      ${AppState.cart.length === 0 && mockOrders.length === 0 ? `
        <div style="text-align:center;padding:var(--space-12);background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-xl);">
          <div style="font-size:3rem;margin-bottom:var(--space-3);">🛍️</div>
          <div>아직 주문 내역이 없습니다</div>
        </div>
      ` : `
        <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-xl);overflow:hidden;">
          <table class="order-table">
            <thead>
              <tr>
                <th>주문번호</th>
                <th>날짜</th>
                <th>상품</th>
                <th>금액</th>
                <th>상태</th>
              </tr>
            </thead>
            <tbody>
              ${mockOrders.map(o => `
                <tr>
                  <td style="color:var(--lavender-light);">${o.id}</td>
                  <td>${o.date}</td>
                  <td>${o.product}</td>
                  <td>${o.amount.toLocaleString()}원</td>
                  <td><span class="order-status ${o.status}">${{delivered:'배송완료',shipping:'배송중',processing:'처리중'}[o.status]}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `}
    </div>
  `;
}

function renderMypageWishlist() {
  const wishlisted = PRODUCTS.filter(p => AppState.wishlist.includes(p.id));
  return `
    <div>
      <div class="mypage-section-title">❤️ 찜 목록 (${wishlisted.length})</div>
      ${wishlisted.length === 0 ? `
        <div style="text-align:center;padding:var(--space-12);background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-xl);">
          <div style="font-size:3rem;margin-bottom:var(--space-3);">🤍</div>
          <div style="margin-bottom:var(--space-5);">찜한 상품이 없습니다</div>
          <button class="btn btn-outline btn-sm" onclick="Router.navigate('store')">스토어 보기</button>
        </div>
      ` : `<div class="product-grid">${renderProductGrid(wishlisted)}</div>`}
    </div>
  `;
}

function renderMypageProfile() {
  const user = AppState.user;
  return `
    <div>
      <div class="mypage-section-title">⚙️ 개인정보 관리</div>
      <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-xl);padding:var(--space-7);">
        <div class="auth-form">
          <div class="form-group">
            <label class="form-label">이름</label>
            <input class="form-input" id="profile-name" type="text" value="${user.name}">
          </div>
          <div class="form-group">
            <label class="form-label">이메일</label>
            <input class="form-input" type="email" value="${user.email}" disabled style="opacity:0.6;">
            <span class="form-hint">이메일은 변경할 수 없습니다</span>
          </div>
          <div class="form-group">
            <label class="form-label">새 비밀번호 (변경 시 입력)</label>
            <input class="form-input" id="profile-pw" type="password" placeholder="새 비밀번호">
          </div>
          <button class="btn btn-primary" onclick="saveProfile()">저장하기</button>

          <div class="divider"></div>

          <div class="privacy-notice">
            <strong>개인정보 처리 안내</strong><br>
            수집된 개인정보는 서비스 제공 목적으로만 사용됩니다. 언제든지 삭제 요청이 가능합니다.
          </div>

          <button class="btn btn-ghost" style="color:var(--fire);font-size:0.85rem;" onclick="handleDeleteAccount()">
            계정 삭제 요청
          </button>
        </div>
      </div>
    </div>
  `;
}

function switchMypageSection(section, el) {
  document.querySelectorAll('.mypage-nav-item').forEach(i => i.classList.remove('active'));
  el.classList.add('active');
  const content = document.getElementById('mypage-content');
  if (content) {
    content.style.opacity = '0';
    setTimeout(() => {
      content.innerHTML = renderMypageSection(section);
      content.style.opacity = '1';
      content.style.transition = 'opacity 0.3s ease';
    }, 150);
  }
}

function saveProfile() {
  const name = document.getElementById('profile-name')?.value.trim();
  if (!name) { showToast('이름을 입력해주세요.', 'error'); return; }
  AppState.user.name = name;
  AppState.save();
  showToast('✅ 프로필이 저장됐습니다.', 'success');
}

function handleLogout() {
  openModal(`
    <button class="modal-close" onclick="closeModal()">✕</button>
    <h3 style="font-family:var(--font-serif);margin-bottom:var(--space-3);">로그아웃</h3>
    <p style="color:var(--text-secondary);margin-bottom:var(--space-6);">정말 로그아웃 하시겠습니까?</p>
    <div style="display:flex;gap:var(--space-3);">
      <button class="btn btn-outline" style="flex:1;" onclick="closeModal()">취소</button>
      <button class="btn btn-primary" style="flex:1;" onclick="confirmLogout()">로그아웃</button>
    </div>
  `);
}

function confirmLogout() {
  AppState.user = null;
  AppState.save();
  closeModal();
  document.getElementById('auth-btn').textContent = '로그인';
  Router.navigate('home');
  showToast('로그아웃 됐습니다.', 'info');
}

function handleDeleteAccount() {
  openModal(`
    <button class="modal-close" onclick="closeModal()">✕</button>
    <h3 style="font-family:var(--font-serif);margin-bottom:var(--space-3);color:var(--fire);">계정 삭제</h3>
    <div class="privacy-notice" style="margin-bottom:var(--space-5);">
      <strong>삭제 시 처리 내용:</strong><br>
      • 모든 분석 기록이 영구 삭제됩니다<br>
      • 구매한 디지털 리포트는 환불되지 않습니다<br>
      • 개인정보는 즉시 삭제됩니다
    </div>
    <div style="display:flex;gap:var(--space-3);">
      <button class="btn btn-outline" style="flex:1;" onclick="closeModal()">취소</button>
      <button class="btn" style="flex:1;background:var(--fire);color:white;" onclick="processDeleteAccount()">삭제 요청</button>
    </div>
  `);
}

function processDeleteAccount() {
  closeModal();
  showLoading('계정 삭제 처리 중...');
  setTimeout(() => {
    AppState.user = null;
    AppState.cart = [];
    AppState.analysisHistory = [];
    AppState.save();
    hideLoading();
    document.getElementById('auth-btn').textContent = '로그인';
    Router.navigate('home');
    showToast('계정이 삭제됐습니다.', 'info');
  }, 1500);
}

function initMypagePage() {}

// ─── CHECKOUT PAGE ────────────────────────────────
function renderCheckout() {
  const total = AppState.cart.reduce((sum, i) => sum + (i.price || 0) * (i.qty || 1), 0);
  return `
    <div class="page-header">
      <h1>주문 <span class="text-gradient">결제</span></h1>
    </div>
    <div class="container" style="max-width:680px;">
      <div style="display:flex;flex-direction:column;gap:var(--space-6);">
        <!-- 주문 상품 -->
        <div class="card">
          <h3 style="font-family:var(--font-serif);margin-bottom:var(--space-5);">주문 상품</h3>
          ${AppState.cart.map(item => `
            <div style="display:flex;align-items:center;gap:var(--space-4);padding:var(--space-3) 0;border-bottom:1px solid var(--border);">
              <div style="font-size:1.5rem;">${{목:'🌿',화:'🔥',토:'⛰️',금:'⚡',수:'💧',커스텀:'✦'}[item.ohaeng] || '✦'}</div>
              <div style="flex:1;">
                <div style="font-size:0.9rem;font-weight:600;">${item.name}</div>
                <div style="font-size:0.8rem;color:var(--text-muted);">수량 ${item.qty || 1}개</div>
              </div>
              <div style="font-family:var(--font-serif);font-weight:700;">${((item.price || 0) * (item.qty || 1)).toLocaleString()}원</div>
            </div>
          `).join('')}
          <div style="display:flex;justify-content:space-between;margin-top:var(--space-4);font-family:var(--font-serif);font-size:1.1rem;font-weight:700;">
            <span>합계</span>
            <span class="text-gold">${total.toLocaleString()}원</span>
          </div>
        </div>

        <!-- 배송지 -->
        <div class="card">
          <h3 style="font-family:var(--font-serif);margin-bottom:var(--space-5);">배송 정보</h3>
          <div class="auth-form">
            <div class="form-group">
              <label class="form-label">받는 분</label>
              <input class="form-input" id="ship-name" type="text" placeholder="수령인 이름" value="${AppState.user?.name || ''}">
            </div>
            <div class="form-group">
              <label class="form-label">연락처</label>
              <input class="form-input" id="ship-phone" type="tel" placeholder="010-0000-0000">
            </div>
            <div class="form-group">
              <label class="form-label">주소</label>
              <input class="form-input" id="ship-addr" type="text" placeholder="기본 주소">
            </div>
            <div class="form-group">
              <input class="form-input" id="ship-addr2" type="text" placeholder="상세 주소">
            </div>
            <div class="form-group">
              <label class="form-label">배송 메모</label>
              <input class="form-input" id="ship-memo" type="text" placeholder="문 앞에 놓아주세요">
            </div>
          </div>
        </div>

        <!-- 결제 수단 -->
        <div class="card">
          <h3 style="font-family:var(--font-serif);margin-bottom:var(--space-5);">결제 수단</h3>
          <div style="display:flex;flex-direction:column;gap:var(--space-3);">
            <button class="btn btn-primary btn-lg" style="width:100%;" onclick="processOrder('card')">💳 카드 결제</button>
            <button class="btn btn-outline btn-lg" style="width:100%;border-color:rgba(255,193,7,0.5);color:#FFC107;" onclick="processOrder('kakaopay')">🟡 카카오페이</button>
            <button class="btn btn-outline btn-lg" style="width:100%;" onclick="processOrder('tosspay')">💙 토스페이</button>
          </div>
          <p style="font-size:0.78rem;color:var(--text-muted);text-align:center;margin-top:var(--space-4);">결제는 SSL 보안으로 안전하게 처리됩니다 🔒</p>
        </div>
      </div>
    </div>
  `;
}

function initCheckoutPage() {}

function processOrder(method) {
  const name = document.getElementById('ship-name')?.value;
  const addr = document.getElementById('ship-addr')?.value;
  if (!name || !addr) { showToast('배송 정보를 모두 입력해주세요.', 'error'); return; }

  showLoading('결제 처리 중...');
  setTimeout(() => {
    hideLoading();
    AppState.cart = [];
    AppState.save();
    updateCartBadge();
    const sidebar = document.getElementById('cart-sidebar');
    if (sidebar) sidebar.innerHTML = renderCartSidebar();
    Router.navigate('home');
    showToast('🎉 주문이 완료됐습니다! 빠르게 배송해드릴게요.', 'success');
  }, 2500);
}
