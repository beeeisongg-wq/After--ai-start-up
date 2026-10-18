/**
 * AFTER — Pages (Home, Saju, Goonghap, Tarot)
 */

// ─── HOME PAGE ────────────────────────────────────
function renderHome() {
  return `
    <section class="hero">
      <div class="hero-bg">
        <img src="images/hero_bg.png" alt="AFTER 신비로운 배경" onerror="this.style.display='none'">
        <canvas id="particles-canvas"></canvas>
      </div>
      <div class="hero-content animate-fadeUp">
        <div class="hero-eyebrow">✦ AI 기반 자기이해 & 관계 분석 ✦</div>
        <h1 class="hero-title">
          <span class="text-gradient">나를 알고 싶은 순간</span><br>
          <span style="color:var(--text-primary);">우리가 궁금한 순간</span>
        </h1>
        <p class="hero-slogan">
          사주·오행·타로로 나를 깊이 이해하고<br>
          소중한 관계를 더 잘 알아가는 프리미엄 AI 서비스
        </p>
        <div class="hero-actions">
          <button class="btn btn-primary btn-lg" onclick="Router.navigate('saju')">
            ✦ 나의 사주는?
          </button>
          <button class="btn btn-outline btn-lg" onclick="Router.navigate('tarot')">
            🔮 타로 뽑기
          </button>
        </div>
      </div>
      <div class="hero-scroll">
        <div class="hero-scroll-line"></div>
        SCROLL
      </div>
    </section>

    <!-- Stats -->
    <section class="section" style="padding-top:var(--space-12);">
      <div class="container">
        <div class="stats-bar animate-fadeUp">
          <div class="stat-item">
            <div class="stat-number text-gradient">12만+</div>
            <div class="stat-label">사주 분석 완료</div>
          </div>
          <div class="stat-item">
            <div class="stat-number text-gradient">4.9★</div>
            <div class="stat-label">평균 만족도</div>
          </div>
          <div class="stat-item">
            <div class="stat-number text-gradient">8만+</div>
            <div class="stat-label">가입 회원</div>
          </div>
          <div class="stat-item">
            <div class="stat-number text-gradient">95%</div>
            <div class="stat-label">재구매율</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Cards -->
    <section class="section">
      <div class="container">
        <div class="section-title animate-fadeUp">
          <span class="badge badge-new">AFTER 핵심 서비스</span>
          <h2 style="margin-top:var(--space-3);">나를 이해하는 <span class="text-gradient">세 가지 방법</span></h2>
        </div>
        <p class="section-subtitle animate-fadeUp animate-fadeUp-delay-1">동양 철학의 지혜와 AI 분석이 만나 당신만을 위한 통찰을 선사합니다</p>
        <div class="service-grid gap-6 animate-fadeUp animate-fadeUp-delay-2">
          <div class="service-card" onclick="Router.navigate('saju')">
            <div class="service-icon" style="background:linear-gradient(135deg,rgba(155,142,196,0.2),rgba(107,95,160,0.2));">🔯</div>
            <div class="service-card-title">사주 & 오행 분석</div>
            <p class="service-card-desc">생년월일과 출생시간으로 당신의 사주팔자를 계산하고, 오행 분포로 타고난 기질과 성격을 분석합니다.</p>
            <div class="service-card-tags">
              <span class="service-tag">천간지지</span><span class="service-tag">오행분포</span>
              <span class="service-tag">성격분석</span><span class="service-tag">AI해석</span>
            </div>
            <button class="btn btn-outline btn-sm" style="margin-top:var(--space-5);width:100%;">시작하기 →</button>
          </div>
          <div class="service-card" onclick="Router.navigate('goonghap')">
            <div class="service-icon" style="background:linear-gradient(135deg,rgba(200,75,75,0.2),rgba(212,168,83,0.15));">💑</div>
            <div class="service-card-title">궁합 분석</div>
            <p class="service-card-desc">두 사람의 사주를 비교하여 오행 상생·상극 관계를 분석합니다. 연인, 친구, 비즈니스 파트너까지.</p>
            <div class="service-card-tags">
              <span class="service-tag">오행궁합</span><span class="service-tag">천간합</span>
              <span class="service-tag">관계분석</span><span class="service-tag">연애운</span>
            </div>
            <button class="btn btn-outline btn-sm" style="margin-top:var(--space-5);width:100%;">시작하기 →</button>
          </div>
          <div class="service-card" onclick="Router.navigate('tarot')">
            <div class="service-icon" style="background:linear-gradient(135deg,rgba(61,107,156,0.2),rgba(155,142,196,0.15));">🔮</div>
            <div class="service-card-title">타로 카드</div>
            <p class="service-card-desc">22장의 메이저 아르카나로 현재 상황을 통찰합니다. 연애, 직업, 인간관계 등 고민별 맞춤 스프레드.</p>
            <div class="service-card-tags">
              <span class="service-tag">연애타로</span><span class="service-tag">직업타로</span>
              <span class="service-tag">3카드스프레드</span><span class="service-tag">AI해석</span>
            </div>
            <button class="btn btn-outline btn-sm" style="margin-top:var(--space-5);width:100%;">시작하기 →</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Ohaeng Demo -->
    <section class="section" style="background:linear-gradient(to bottom,transparent,rgba(155,142,196,0.04),transparent);">
      <div class="container">
        <div class="section-title animate-fadeUp">
          <h2>나의 <span class="text-gradient">오행(五行)</span>은 무엇일까?</h2>
        </div>
        <p class="section-subtitle animate-fadeUp animate-fadeUp-delay-1">목(木)·화(火)·토(土)·금(金)·수(水) — 다섯 가지 에너지로 당신의 기질을 발견하세요</p>
        <div class="ohaeng-demo animate-fadeUp animate-fadeUp-delay-2">
          <div class="ohaeng-demo-inner">
            <div>
              <div style="font-size:0.85rem;color:var(--text-muted);margin-bottom:var(--space-4);text-align:center;">오행을 클릭해 특성을 확인해보세요</div>
              <div class="ohaeng-symbols" id="ohaeng-symbols">
                <div class="ohaeng-symbol bg-ohaeng-wood" style="grid-column:2;grid-row:1;" onclick="selectOhaeng('목')" data-o="목">
                  <div class="ohaeng-symbol-char ohaeng-wood">木</div>
                  <div class="ohaeng-symbol-name">목</div>
                </div>
                <div class="ohaeng-symbol bg-ohaeng-fire" style="grid-column:3;grid-row:1;" onclick="selectOhaeng('화')" data-o="화">
                  <div class="ohaeng-symbol-char ohaeng-fire">火</div>
                  <div class="ohaeng-symbol-name">화</div>
                </div>
                <div class="ohaeng-symbol bg-ohaeng-earth" style="grid-column:2;grid-row:2;" onclick="selectOhaeng('토')" data-o="토">
                  <div class="ohaeng-symbol-char ohaeng-earth">土</div>
                  <div class="ohaeng-symbol-name">토</div>
                </div>
                <div class="ohaeng-symbol bg-ohaeng-metal" style="grid-column:1;grid-row:2;" onclick="selectOhaeng('금')" data-o="금">
                  <div class="ohaeng-symbol-char ohaeng-metal">金</div>
                  <div class="ohaeng-symbol-name">금</div>
                </div>
                <div class="ohaeng-symbol bg-ohaeng-water" style="grid-column:3;grid-row:2;" onclick="selectOhaeng('수')" data-o="수">
                  <div class="ohaeng-symbol-char ohaeng-water">水</div>
                  <div class="ohaeng-symbol-name">수</div>
                </div>
              </div>
            </div>
            <div class="ohaeng-result" id="ohaeng-result">
              <div style="text-align:center;color:var(--text-muted);padding:var(--space-8);">
                <div style="font-size:2.5rem;margin-bottom:var(--space-3);">☯️</div>
                <div>오행을 선택하면 특성이 표시됩니다</div>
              </div>
            </div>
          </div>
        </div>
        <div style="text-align:center;margin-top:var(--space-8);">
          <button class="btn btn-primary btn-lg" onclick="Router.navigate('saju')">✦ 내 오행 정확히 분석하기</button>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section class="section">
      <div class="container">
        <div class="section-title animate-fadeUp">
          <h2>합리적인 <span class="text-gradient">가격 플랜</span></h2>
        </div>
        <p class="section-subtitle animate-fadeUp animate-fadeUp-delay-1">기본 분석은 무료로 제공됩니다. 더 깊은 통찰이 필요하다면 리포트를 업그레이드하세요.</p>
        <div class="pricing-grid animate-fadeUp animate-fadeUp-delay-2">
          <div class="pricing-card">
            <div class="pricing-tier">FREE</div>
            <div class="pricing-price"><span class="pricing-amount">0</span><span class="pricing-unit">원</span></div>
            <div class="pricing-desc">기본 사주와 오행 분포를 무료로 확인하세요</div>
            <ul class="pricing-features">
              <li class="pricing-feature"><span class="pricing-check">✓</span>사주팔자 기본 계산</li>
              <li class="pricing-feature"><span class="pricing-check">✓</span>오행 분포 확인</li>
              <li class="pricing-feature"><span class="pricing-check">✓</span>타로 1회 무료</li>
              <li class="pricing-feature"><span class="pricing-check">✓</span>기본 궁합 점수</li>
            </ul>
            <button class="btn btn-outline" style="width:100%;" onclick="Router.navigate('saju')">무료로 시작</button>
          </div>
          <div class="pricing-card">
            <div class="pricing-tier">STANDARD</div>
            <div class="pricing-price"><span class="pricing-amount">4,900</span><span class="pricing-unit">원/회</span></div>
            <div class="pricing-desc">단일 분석 심화 리포트로 더 깊은 통찰</div>
            <ul class="pricing-features">
              <li class="pricing-feature"><span class="pricing-check">✓</span>기본 플랜 전체 포함</li>
              <li class="pricing-feature"><span class="pricing-check">✓</span>AI 심화 성격 분석</li>
              <li class="pricing-feature"><span class="pricing-check">✓</span>연애운 & 직업운</li>
              <li class="pricing-feature"><span class="pricing-check">✓</span>PDF 리포트 다운로드</li>
            </ul>
            <button class="btn btn-outline" style="width:100%;" onclick="Router.navigate('saju')">리포트 구매</button>
          </div>
          <div class="pricing-card featured">
            <div class="pricing-badge"><span class="badge badge-premium">🌟 인기</span></div>
            <div class="pricing-tier" style="color:var(--lavender-light);">PREMIUM</div>
            <div class="pricing-price"><span class="pricing-amount text-gradient">19,900</span><span class="pricing-unit">원/회</span></div>
            <div class="pricing-desc">프리미엄 심층 분석으로 자신을 완전히 이해</div>
            <ul class="pricing-features">
              <li class="pricing-feature"><span class="pricing-check">✓</span>스탠다드 전체 포함</li>
              <li class="pricing-feature"><span class="pricing-check">✓</span>대운·세운 흐름 분석</li>
              <li class="pricing-feature"><span class="pricing-check">✓</span>관계 맞춤 조언</li>
              <li class="pricing-feature"><span class="pricing-check">✓</span>오행 맞춤 상품 추천</li>
              <li class="pricing-feature"><span class="pricing-check">✓</span>1:1 채팅 상담 포함</li>
            </ul>
            <button class="btn btn-primary" style="width:100%;" onclick="Router.navigate('saju')">프리미엄 시작</button>
          </div>
          <div class="pricing-card">
            <div class="pricing-tier" style="color:var(--gold);">TOTAL</div>
            <div class="pricing-price"><span class="pricing-amount text-gold">49,900</span><span class="pricing-unit">원/회</span></div>
            <div class="pricing-desc">사주·궁합·타로 종합 분석 + 맞춤 상품</div>
            <ul class="pricing-features">
              <li class="pricing-feature"><span class="pricing-check">✓</span>프리미엄 전체 포함</li>
              <li class="pricing-feature"><span class="pricing-check">✓</span>궁합 심층 분석</li>
              <li class="pricing-feature"><span class="pricing-check">✓</span>타로 3세트 포함</li>
              <li class="pricing-feature"><span class="pricing-check">✓</span>오행 팔찌 10% 할인</li>
              <li class="pricing-feature"><span class="pricing-check">✓</span>6개월 결과 보관</li>
            </ul>
            <button class="btn btn-outline" style="width:100%;border-color:rgba(212,168,83,0.4);color:var(--gold);" onclick="Router.navigate('saju')">종합 분석 시작</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Reviews -->
    <section class="section" style="background:linear-gradient(to bottom,transparent,rgba(155,142,196,0.03),transparent);">
      <div class="container">
        <div class="section-title animate-fadeUp">
          <h2>사용자 <span class="text-gradient">후기</span></h2>
        </div>
        <div class="reviews-grid animate-fadeUp animate-fadeUp-delay-1">
          ${[
            { name:'김민지', age:26, stars:5, text:'사주 분석이 정말 정확해서 깜짝 놀랐어요. 제 성격을 이렇게 잘 설명해줄 수 있다니... 오행 팔찌도 너무 예쁘고 의미 있어서 선물로 샀어요!', type:'사주분석', init:'M' },
            { name:'박준호', age:31, stars:5, text:'남자친구랑 궁합 분석해봤는데 73점 나왔어요. AI 해석이 우리 관계를 되게 잘 표현해줬고, 더 노력해야 할 부분도 알게 됐어요. 진짜 유용합니다!', type:'궁합분석', init:'J' },
            { name:'이서연', age:23, stars:5, text:'타로가 이렇게 구체적으로 해석되는 줄 몰랐어요. 취업 고민으로 뽑았는데 카드 내용이 제 상황이랑 너무 맞아서 소름... 매달 뽑아보고 있어요.', type:'타로', init:'S' },
          ].map(r => `
            <div class="review-card animate-fadeUp">
              <div class="review-stars">${'⭐'.repeat(r.stars)}</div>
              <p class="review-text">"${r.text}"</p>
              <div class="review-author">
                <div class="review-avatar">${r.init}</div>
                <div>
                  <div class="review-name">${r.name} (${r.age}세)</div>
                  <div class="review-meta">${r.type} 이용</div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="section">
      <div class="container">
        <div class="cta-banner animate-fadeUp">
          <span class="badge badge-premium" style="margin-bottom:var(--space-4);">✦ AFTER와 함께</span>
          <h2>오늘, 진짜 <span class="text-gradient">나를 만나보세요</span></h2>
          <p style="max-width:400px;margin:var(--space-4) auto 0;">사주로 타고난 기질을, 타로로 현재 상황을,<br>궁합으로 소중한 인연을 이해합니다.</p>
          <div class="cta-actions" style="margin-top:var(--space-8);">
            <button class="btn btn-primary btn-lg" onclick="Router.navigate('saju')">✦ 사주 분석 시작 — 무료</button>
            <button class="btn btn-outline btn-lg" onclick="Router.navigate('tarot')">🔮 타로 뽑기</button>
          </div>
        </div>
      </div>
    </section>
  `;
}

function initHomePage() {
  // Particles on hero
  setTimeout(() => initParticles('particles-canvas'), 100);
}

// 오행 선택 데모
function selectOhaeng(o) {
  document.querySelectorAll('.ohaeng-symbol').forEach(el => el.classList.remove('selected'));
  document.querySelector(`[data-o="${o}"]`)?.classList.add('selected');

  const t = OHAENG_TRAITS[o];
  if (!t) return;
  const result = document.getElementById('ohaeng-result');
  if (!result) return;
  result.innerHTML = `
    <div style="text-align:center;margin-bottom:var(--space-5);">
      <div style="font-size:2.5rem;margin-bottom:var(--space-3);">${t.emoji}</div>
      <div style="font-family:var(--font-serif);font-size:1.2rem;color:${t.color};font-weight:700;">${t.title}</div>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:var(--space-2);margin-bottom:var(--space-4);">
      ${t.traits.map(tr => `<span class="badge" style="background:${t.color}22;color:${t.color};border:1px solid ${t.color}44;">${tr}</span>`).join('')}
    </div>
    <p style="font-size:0.88rem;color:var(--text-secondary);line-height:1.8;margin-bottom:var(--space-4);">${t.desc}</p>
    <div style="background:rgba(255,255,255,0.03);border-radius:var(--radius-md);padding:var(--space-4);">
      <div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:var(--space-1);">강점</div>
      <div style="font-size:0.85rem;color:var(--text-secondary);">${t.strength}</div>
    </div>
    <button class="btn btn-primary" style="width:100%;margin-top:var(--space-5);" onclick="Router.navigate('saju')">내 오행 정확히 알아보기</button>
  `;
}

// ─── SAJU PAGE ────────────────────────────────────
function renderSaju() {
  const hours = Array.from({length:24},(_,i)=>i);
  return `
    <div class="page-header">
      <div class="page-header-badge"><span class="badge badge-new">🔯 사주 분석</span></div>
      <h1>나의 <span class="text-gradient">사주팔자</span>를 알아보세요</h1>
      <p>생년월일과 출생 시간으로 천간지지를 계산하고 AI가 오행을 분석합니다</p>
    </div>

    <div class="container">
      <div class="saju-layout">
        <!-- Form -->
        <div class="saju-form-card animate-fadeUp">
          <div class="saju-form-title">🔯 정보 입력</div>

          <div class="steps" style="margin-bottom:var(--space-6);">
            <div class="step active"><div class="step-num">1</div><span>정보입력</span></div>
            <div class="step-line"></div>
            <div class="step" id="step2"><div class="step-num">2</div><span>분석중</span></div>
            <div class="step-line"></div>
            <div class="step" id="step3"><div class="step-num">3</div><span>결과확인</span></div>
          </div>

          <div class="saju-form-grid">
            <div class="form-group full">
              <label class="form-label">이름 (선택)</label>
              <input class="form-input" id="saju-name" type="text" placeholder="홍길동">
            </div>
            <div class="form-group">
              <label class="form-label">성별 *</label>
              <select class="form-select" id="saju-gender">
                <option value="">선택</option>
                <option value="M">남성</option>
                <option value="F">여성</option>
              </select>
              <span class="form-error" id="saju-gender-error"></span>
            </div>
            <div class="form-group">
              <label class="form-label">양력/음력</label>
              <select class="form-select" id="saju-calendar">
                <option value="solar">양력</option>
                <option value="lunar">음력 (근사계산)</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">생년 *</label>
              <input class="form-input" id="saju-year" type="number" placeholder="예: 1995" min="1900" max="2024">
              <span class="form-error" id="saju-year-error"></span>
            </div>
            <div class="form-group">
              <label class="form-label">생월 *</label>
              <select class="form-select" id="saju-month">
                <option value="">월 선택</option>
                ${Array.from({length:12},(_,i)=>`<option value="${i+1}">${i+1}월</option>`).join('')}
              </select>
              <span class="form-error" id="saju-month-error"></span>
            </div>
            <div class="form-group">
              <label class="form-label">생일 *</label>
              <select class="form-select" id="saju-day">
                <option value="">일 선택</option>
                ${Array.from({length:31},(_,i)=>`<option value="${i+1}">${i+1}일</option>`).join('')}
              </select>
              <span class="form-error" id="saju-day-error"></span>
            </div>
            <div class="form-group full">
              <label class="form-label">출생 시간 <span style="color:var(--text-muted);font-weight:400;">(모르면 생략 가능)</span></label>
              <select class="form-select" id="saju-hour">
                <option value="">모름 (시주 제외)</option>
                ${hours.map(h=>`<option value="${h}">${String(h).padStart(2,'0')}:00 ~ ${String(h).padStart(2,'0')}:59</option>`).join('')}
              </select>
              <span class="form-hint">시간을 알면 더 정확한 사주 계산이 가능합니다</span>
            </div>
          </div>

          <div style="margin-bottom:var(--space-6);">
            <div style="font-size:0.85rem;font-weight:600;color:var(--silver);margin-bottom:var(--space-3);">⏰ 출생 시각 빠른 선택</div>
            <div class="saju-time-grid" id="saju-time-grid">
              ${SIJU_TIME.map((t,i)=>`
                <button class="saju-time-btn" onclick="selectSijuTime(${i},${t.ji})" data-ji="${t.ji}">
                  <div>${t.label}</div>
                  <div style="font-size:0.65rem;opacity:0.7;">${t.range}</div>
                </button>
              `).join('')}
            </div>
          </div>

          <div class="privacy-notice" style="margin-bottom:var(--space-6);">
            <strong>🔒 개인정보 안내</strong> — 입력하신 정보는 사주 계산에만 사용되며 서버에 저장되지 않습니다. 이름은 선택사항입니다.
          </div>

          <button class="btn btn-primary btn-lg" style="width:100%;" id="saju-analyze-btn" onclick="analyzeSaju()">
            ✦ 사주 분석 시작
          </button>
        </div>

        <!-- Result -->
        <div class="saju-result-card animate-fadeUp animate-fadeUp-delay-2" id="saju-result-area">
          <div class="saju-result-placeholder">
            <div class="saju-result-icon">🔯</div>
            <div style="font-family:var(--font-serif);font-size:1.1rem;margin-bottom:var(--space-3);">분석 결과가 여기에 표시됩니다</div>
            <p>정보를 입력하고 분석을 시작해주세요</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function initSajuPage() {
  // nothing extra needed
}

function selectSijuTime(timeIdx, jiIdx) {
  // 해당 시간대의 대표 시각 설정
  const timeToHour = [23, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
  const hourEl = document.getElementById('saju-hour');
  if (hourEl) hourEl.value = String(timeToHour[timeIdx]);

  document.querySelectorAll('.saju-time-btn').forEach((b,i) => {
    b.classList.toggle('selected', i === timeIdx);
  });
}

function analyzeSaju() {
  const year   = parseInt(document.getElementById('saju-year')?.value);
  const month  = parseInt(document.getElementById('saju-month')?.value);
  const day    = parseInt(document.getElementById('saju-day')?.value);
  const gender = document.getElementById('saju-gender')?.value;
  const hourVal = document.getElementById('saju-hour')?.value;
  const hour   = hourVal ? parseInt(hourVal) : null;
  const name   = document.getElementById('saju-name')?.value.trim() || '회원';

  // Validation
  let valid = true;
  [['saju-year','생년'],['saju-month','생월'],['saju-day','생일'],['saju-gender','성별']].forEach(([id,label])=>{
    const el = document.getElementById(id);
    const err = document.getElementById(`${id}-error`);
    if (!el?.value) {
      if(err) err.textContent = `${label}을(를) 선택해주세요.`;
      el.style.borderColor = 'var(--fire)';
      valid = false;
    } else {
      if(err) err.textContent = '';
      el.style.borderColor = '';
    }
  });
  if (year < 1900 || year > 2024) {
    document.getElementById('saju-year-error').textContent = '1900~2024년 사이로 입력해주세요.';
    valid = false;
  }
  if (!valid) { showToast('필수 항목을 모두 입력해주세요.', 'error'); return; }

  // Progress
  document.getElementById('step2')?.classList.add('active');
  showLoading('사주 분석 중... 🔯');

  setTimeout(() => {
    try {
      const result = calculateSaju(year, month, day, hour, gender);
      AppState.currentSaju = result;
      AppState.analysisHistory.unshift({ type:'사주', title:`${name}의 사주분석`, date: new Date().toLocaleDateString('ko-KR'), preview: `일주: ${result.pillars.ilju.gan}${result.pillars.ilju.ji}일, 주 오행: ${result.mainOhaeng}`, data: result });
      AppState.save();
      hideLoading();
      document.getElementById('step3')?.classList.add('active');
      renderSajuResult(result, name);
    } catch(e) {
      hideLoading();
      showToast('분석 중 오류가 발생했습니다.', 'error');
      console.error(e);
    }
  }, 2200);
}

function renderSajuResult(r, name) {
  const o = r.ohaeng;
  const ohaengOrder = ['목','화','토','금','수'];
  const ohaengColors = { 목:'#4A7C59', 화:'#C84B4B', 토:'#D4A853', 금:'#C8D6E5', 수:'#3D6B9C' };
  const ohaengEmoji  = { 목:'🌿', 화:'🔥', 토:'⛰️', 금:'⚡', 수:'💧' };
  const pillarNames = ['년주(年柱)','월주(月柱)','일주(日柱)','시주(時柱)'];
  const pillarData  = [r.pillars.yeonju, r.pillars.wolju, r.pillars.ilju, r.pillars.siju].filter(Boolean);

  const mainT = OHAENG_TRAITS[r.mainOhaeng];
  const iljuChar = r.iljuChar;

  const html = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--space-5);">
      <div>
        <div style="font-size:0.75rem;color:var(--lavender-light);font-weight:700;letter-spacing:0.1em;margin-bottom:4px;">사주 분석 완료</div>
        <div style="font-family:var(--font-serif);font-size:1.3rem;font-weight:700;">${name}의 사주팔자</div>
        <div style="font-size:0.8rem;color:var(--text-muted);">${r.inputInfo.year}년 ${r.inputInfo.month}월 ${r.inputInfo.day}일 ${r.pillars.yeonju.animal}띠</div>
      </div>
      <div style="text-align:center;">
        <div style="font-size:2rem;">${mainT?.emoji || '☯️'}</div>
        <div style="font-size:0.72rem;color:${ohaengColors[r.mainOhaeng]};font-weight:700;">${r.mainOhaeng}(${{'목':'木','화':'火','토':'土','금':'金','수':'水'}[r.mainOhaeng]})</div>
      </div>
    </div>

    <!-- Pillars -->
    <div class="pillar-grid" style="margin-bottom:var(--space-6);">
      ${pillarData.map((p,i)=>`
        <div class="pillar-card">
          <div class="pillar-label">${pillarNames[i]}</div>
          <div class="pillar-gan" style="color:${ohaengColors[p.ganOhaeng] || 'var(--text-primary)'};">${p.ganHj}</div>
          <div class="pillar-ji" style="color:${ohaengColors[p.jiOhaeng] || 'var(--text-secondary)'};">${p.jiHj}</div>
          <div class="pillar-sub">${p.gan}${p.ji}</div>
        </div>
      `).join('')}
    </div>

    <!-- Ohaeng Distribution -->
    <div style="margin-bottom:var(--space-5);">
      <div style="font-size:0.85rem;font-weight:700;color:var(--silver);margin-bottom:var(--space-3);">⚖️ 오행 분포</div>
      <div class="ohaeng-bar-wrapper" id="ohaeng-bars">
        ${ohaengOrder.map(o2=>`
          <div class="ohaeng-bar-item">
            <div class="ohaeng-bar-label" style="color:${ohaengColors[o2]};">${{'목':'木','화':'火','토':'土','금':'金','수':'水'}[o2]}</div>
            <div class="ohaeng-bar-track">
              <div class="ohaeng-bar-fill" style="background:${ohaengColors[o2]};width:0%" data-pct="${o.pct[o2]||0}"></div>
            </div>
            <div class="ohaeng-bar-pct">0%</div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- AI 해석 -->
    <div class="saju-ai-section">
      <div class="saju-ai-title">✨ AI 기질 분석 (기본)</div>
      <div class="saju-ai-text">
        ${mainT ? `<strong style="color:${ohaengColors[r.mainOhaeng]};">${mainT.title}</strong>의 기운이 강한 분이시네요.<br><br>${mainT.desc}<br><br>강점은 <strong>${mainT.strength}</strong>이며, 주의해야 할 점은 <strong>${mainT.weakness}</strong>입니다.` : ''}
        ${iljuChar ? `<br><br><strong style="color:var(--lavender-light);">일주(${iljuChar.title})</strong>: ${iljuChar.desc}. 핵심 키워드는 ${iljuChar.keywords.join(', ')}입니다.` : ''}
        <br><br><span style="color:var(--text-muted);font-size:0.8rem;">※ 더 자세한 AI 해석은 프리미엄 리포트에서 확인하세요</span>
      </div>
    </div>

    <!-- Upgrade -->
    <div class="saju-upgrade-banner" style="margin-top:var(--space-5);">
      <div style="position:relative;z-index:1;">
        <div style="font-size:0.82rem;color:var(--gold);font-weight:700;margin-bottom:var(--space-2);">🌟 더 깊은 통찰이 필요하다면</div>
        <div style="font-size:0.88rem;color:var(--text-secondary);margin-bottom:var(--space-4);">대운·세운 분석, 연애운·직업운, 오행 맞춤 상품 추천까지</div>
        <div style="display:flex;gap:var(--space-3);justify-content:center;flex-wrap:wrap;">
          <button class="btn btn-outline btn-sm" onclick="Router.navigate('report',{type:'standard'})">리포트 4,900원</button>
          <button class="btn btn-gold btn-sm" onclick="Router.navigate('report',{type:'premium'})">프리미엄 19,900원</button>
        </div>
      </div>
    </div>

    <div style="display:flex;gap:var(--space-3);margin-top:var(--space-5);">
      <button class="btn btn-outline btn-sm" style="flex:1;" onclick="Router.navigate('goonghap')">궁합 분석하기</button>
      <button class="btn btn-outline btn-sm" style="flex:1;" onclick="Router.navigate('tarot')">타로 뽑기</button>
    </div>
  `;

  const area = document.getElementById('saju-result-area');
  if (area) {
    area.innerHTML = html;
    // Animate bars
    setTimeout(() => {
      document.querySelectorAll('.ohaeng-bar-fill').forEach(bar => {
        const pct = bar.dataset.pct;
        bar.style.width = pct + '%';
        const pctEl = bar.closest('.ohaeng-bar-item')?.querySelector('.ohaeng-bar-pct');
        if (pctEl) pctEl.textContent = pct + '%';
      });
    }, 400);
  }
}

// ─── GOONGHAP PAGE ────────────────────────────────
function renderGoonghap() {
  function personForm(id, label, color, emoji) {
    return `
      <div class="person-card animate-fadeUp">
        <div class="person-card-header">
          <div class="person-avatar" style="background:${color}33;">${emoji}</div>
          <div>
            <div class="person-label">${label}</div>
            <div class="person-sublabel">생년월일 정보 입력</div>
          </div>
        </div>
        <div class="saju-form-grid" style="gap:var(--space-3);">
          <div class="form-group">
            <label class="form-label">이름 (선택)</label>
            <input class="form-input" id="${id}-name" type="text" placeholder="이름">
          </div>
          <div class="form-group">
            <label class="form-label">성별</label>
            <select class="form-select" id="${id}-gender">
              <option value="M">남성</option>
              <option value="F">여성</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">생년 *</label>
            <input class="form-input" id="${id}-year" type="number" placeholder="1995" min="1900" max="2024">
            <span class="form-error" id="${id}-year-error"></span>
          </div>
          <div class="form-group">
            <label class="form-label">생월 *</label>
            <select class="form-select" id="${id}-month">
              <option value="">선택</option>
              ${Array.from({length:12},(_,i)=>`<option value="${i+1}">${i+1}월</option>`).join('')}
            </select>
            <span class="form-error" id="${id}-month-error"></span>
          </div>
          <div class="form-group full">
            <label class="form-label">생일 *</label>
            <select class="form-select" id="${id}-day">
              <option value="">선택</option>
              ${Array.from({length:31},(_,i)=>`<option value="${i+1}">${i+1}일</option>`).join('')}
            </select>
            <span class="form-error" id="${id}-day-error"></span>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="page-header">
      <div class="page-header-badge"><span class="badge badge-new">💑 궁합 분석</span></div>
      <h1>두 사람의 <span class="text-gradient">궁합</span>을 알아보세요</h1>
      <p>오행 상생·상극 관계로 두 사람의 기질과 관계를 분석합니다</p>
    </div>
    <div class="container">
      <div class="goonghap-inputs">
        ${personForm('p1','첫 번째 사람','#9B8EC4','🌙')}
        <div class="goonghap-vs">VS</div>
        ${personForm('p2','두 번째 사람','#C84B4B','🌟')}
      </div>

      <div style="text-align:center;margin-bottom:var(--space-10);">
        <div class="privacy-notice" style="max-width:560px;margin:0 auto var(--space-6);">
          <strong>🔒 개인정보 안내</strong> — 입력 정보는 궁합 계산에만 사용되며 저장하지 않습니다.
        </div>
        <button class="btn btn-primary btn-lg" onclick="analyzeGoonghap()">💑 궁합 분석 시작</button>
      </div>

      <div id="goonghap-result" style="display:none;">
        <!-- Result rendered here -->
      </div>
    </div>
  `;
}

function initGoonghapPage() {}

function getPersonSaju(prefix) {
  const year   = parseInt(document.getElementById(`${prefix}-year`)?.value);
  const month  = parseInt(document.getElementById(`${prefix}-month`)?.value);
  const day    = parseInt(document.getElementById(`${prefix}-day`)?.value);
  const gender = document.getElementById(`${prefix}-gender`)?.value || 'M';
  const name   = document.getElementById(`${prefix}-name`)?.value.trim() || '상대방';

  if (!year || !month || !day) return null;
  return { saju: calculateSaju(year, month, day, null, gender), name };
}

function analyzeGoonghap() {
  ['p1','p2'].forEach(p => {
    ['year','month','day'].forEach(f => {
      const el = document.getElementById(`${p}-${f}`);
      const err = document.getElementById(`${p}-${f}-error`);
      if (!el?.value) { if(err) err.textContent = '필수 항목입니다.'; el.style.borderColor='var(--fire)'; }
      else { if(err) err.textContent=''; el.style.borderColor=''; }
    });
  });

  const p1 = getPersonSaju('p1');
  const p2 = getPersonSaju('p2');
  if (!p1 || !p2) { showToast('두 사람의 정보를 모두 입력해주세요.', 'error'); return; }

  showLoading('궁합 분석 중... 💑');
  setTimeout(() => {
    const result = calculateGoonghap(p1.saju, p2.saju);
    AppState.currentGoonghap = { result, p1, p2 };
    hideLoading();

    const ohaengColors = { 목:'#4A7C59', 화:'#C84B4B', 토:'#D4A853', 금:'#C8D6E5', 수:'#3D6B9C' };
    const ohaengEmoji  = { 목:'🌿', 화:'🔥', 토:'⛰️', 금:'⚡', 수:'💧' };
    const aspectData = [
      { icon:'💕', title:'감정 공명', score: result.love },
      { icon:'💬', title:'소통 지수', score: result.comm },
      { icon:'🤝', title:'신뢰 점수', score: result.trust },
      { icon:'⚡', title:'열정 에너지', score: result.passion },
      { icon:'🌱', title:'성장 시너지', score: Math.round((result.score + result.comm)/2) },
      { icon:'🏠', title:'생활 호환성', score: Math.round((result.trust + result.love)/2) },
    ];
    const scoreColor = result.score >= 75 ? '#4A7C59' : result.score >= 50 ? '#D4A853' : '#C84B4B';

    const resultEl = document.getElementById('goonghap-result');
    resultEl.style.display = 'block';
    resultEl.innerHTML = `
      <div class="goonghap-score-section animate-fadeUp">
        <div class="goonghap-score-circle">
          <div class="goonghap-score-num text-gradient" style="color:${scoreColor};">${result.score}</div>
          <div class="goonghap-score-label">궁합 점수</div>
        </div>
        <div style="font-family:var(--font-serif);font-size:1.4rem;margin-bottom:var(--space-3);">${result.grade}</div>
        <p style="max-width:480px;margin:0 auto;font-size:0.88rem;">
          ${p1.name} <span style="color:${ohaengColors[result.mainOhaeng1]};">${ohaengEmoji[result.mainOhaeng1]}${result.mainOhaeng1}</span>의 기운과 ${p2.name} <span style="color:${ohaengColors[result.mainOhaeng2]};">${ohaengEmoji[result.mainOhaeng2]}${result.mainOhaeng2}</span>의 기운이 만났습니다.
        </p>
      </div>

      <div class="goonghap-aspects animate-fadeUp animate-fadeUp-delay-1">
        ${aspectData.map(a => {
          const color = a.score >= 75 ? '#4A7C59' : a.score >= 50 ? '#D4A853' : '#C84B4B';
          return `
            <div class="aspect-card">
              <div class="aspect-icon">${a.icon}</div>
              <div class="aspect-title">${a.title}</div>
              <div class="aspect-score" style="color:${color};">${a.score}</div>
              <div class="aspect-score-bar"><div class="aspect-score-fill" style="width:${a.score}%;background:${color};"></div></div>
            </div>
          `;
        }).join('')}
      </div>

      <div class="saju-ai-section animate-fadeUp animate-fadeUp-delay-2" style="margin-top:var(--space-6);">
        <div class="saju-ai-title">✨ AI 관계 분석 (기본)</div>
        <div class="saju-ai-text">
          ${result.score >= 75 ? `두 분의 오행 기운이 서로 잘 어울립니다. ${p1.name}의 ${result.mainOhaeng1}(${ohaengEmoji[result.mainOhaeng1]}) 기운과 ${p2.name}의 ${result.mainOhaeng2}(${ohaengEmoji[result.mainOhaeng2]}) 기운이 상생하여 서로에게 긍정적인 에너지를 줍니다.` :
           result.score >= 50 ? `두 분의 오행이 조화를 이룰 수 있는 관계입니다. 서로의 다른 점을 이해하고 노력한다면 좋은 관계를 유지할 수 있습니다.` :
           `두 분의 오행 기운 사이에 상극 관계가 있습니다. 하지만 이는 절대적인 것이 아니며, 서로에 대한 이해와 노력이 더 중요합니다.`}
          <br><br><span style="color:var(--text-muted);font-size:0.8rem;">※ 본 분석은 참고 목적이며 실제 관계를 확정적으로 판단하지 않습니다</span>
        </div>
      </div>

      <div style="text-align:center;margin-top:var(--space-8);">
        <button class="btn btn-gold btn-lg" onclick="Router.navigate('report',{type:'goonghap'})">💑 궁합 심층 리포트 보기</button>
      </div>
    `;
    resultEl.scrollIntoView({ behavior:'smooth', block:'start' });
  }, 2000);
}

// ─── TAROT PAGE ───────────────────────────────────
function renderTarot() {
  return `
    <div class="page-header">
      <div class="page-header-badge"><span class="badge badge-new">🔮 타로 카드</span></div>
      <h1><span class="text-gradient">타로</span>에게 물어보세요</h1>
      <p>22장의 메이저 아르카나가 지금의 당신에게 메시지를 전합니다</p>
    </div>

    <div class="container">
      <!-- Step 1: 고민 선택 -->
      <div id="tarot-step1">
        <h3 style="text-align:center;margin-bottom:var(--space-4);">어떤 부분이 궁금하신가요?</h3>
        <div class="tarot-concern-grid animate-fadeUp">
          ${TAROT_CONCERNS.map(c => `
            <div class="tarot-concern-btn" id="concern-${c.id}" onclick="selectConcern('${c.id}')">
              <div class="tarot-concern-icon">${c.emoji}</div>
              <div class="tarot-concern-name">${c.name}</div>
              <div style="font-size:0.75rem;color:var(--text-muted);margin-top:4px;">${c.desc}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Step 2: 카드 뽑기 -->
      <div id="tarot-step2" style="display:none;text-align:center;">
        <h3 style="margin-bottom:var(--space-3);">마음을 가다듬고 카드를 골라보세요</h3>
        <p style="color:var(--text-muted);margin-bottom:var(--space-8);">덱을 클릭하면 카드가 한 장씩 선택됩니다</p>

        <div class="tarot-spread" id="tarot-spread">
          <!-- Spread slots rendered by JS -->
        </div>

        <div class="tarot-deck-area" style="margin-top:var(--space-8);">
          <div class="tarot-deck-stack" id="tarot-deck" onclick="drawNextCard()">
            <div class="tarot-deck-card"><img src="images/tarot_back.png" alt="타로 덱" onerror="this.parentElement.style.background='linear-gradient(135deg,#1A2035,#0E1228)'"></div>
            <div class="tarot-deck-card"><img src="images/tarot_back.png" alt="타로 덱" onerror="this.parentElement.style.background='linear-gradient(135deg,#1A2035,#0E1228)'"></div>
            <div class="tarot-deck-card"><img src="images/tarot_back.png" alt="타로 덱" onerror="this.parentElement.style.background='linear-gradient(135deg,#1A2035,#0E1228)'"></div>
          </div>
          <div style="font-size:0.85rem;color:var(--text-muted);" id="deck-hint">덱을 클릭해 카드를 선택하세요</div>
        </div>
      </div>

      <!-- Step 3: 결과 -->
      <div id="tarot-step3" style="display:none;">
        <div class="tarot-reading" id="tarot-reading-area"></div>
        <div style="text-align:center;margin-top:var(--space-8);">
          <button class="btn btn-outline" onclick="resetTarot()" style="margin-right:var(--space-3);">다시 뽑기</button>
          <button class="btn btn-gold" onclick="Router.navigate('report',{type:'tarot'})">🔮 타로 심층 해석 리포트</button>
        </div>
      </div>
    </div>
  `;
}

let currentConcern = null;
let currentSpread = [];
let drawnCards = [];

function initTarotPage() {
  currentConcern = null;
  currentSpread = [];
  drawnCards = [];
}

function selectConcern(concernId) {
  document.querySelectorAll('.tarot-concern-btn').forEach(b => b.classList.remove('selected'));
  document.getElementById(`concern-${concernId}`)?.classList.add('selected');
  currentConcern = TAROT_CONCERNS.find(c => c.id === concernId);
  if (!currentConcern) return;

  setTimeout(() => {
    document.getElementById('tarot-step1').style.display = 'none';
    document.getElementById('tarot-step2').style.display = 'block';

    // Render spread slots
    const spread = document.getElementById('tarot-spread');
    drawnCards = [];
    spread.innerHTML = currentConcern.positions.map((pos, i) => `
      <div class="tarot-slot" id="tarot-slot-${i}">
        <div class="tarot-scene">
          <div class="tarot-card-unselected" id="tarot-card-${i}">
            <div style="color:var(--text-muted);font-size:0.75rem;text-align:center;">${i+1}<br>번째</div>
          </div>
        </div>
        <div class="tarot-slot-label">${pos}</div>
      </div>
    `).join('');
  }, 300);
}

function drawNextCard() {
  if (!currentConcern) return;
  const idx = drawnCards.length;
  if (idx >= currentConcern.spread) return;

  const available = TAROT_CARDS.filter(c => !drawnCards.find(d => d.id === c.id));
  const card = available[Math.floor(Math.random() * available.length)];
  const reversed = Math.random() > 0.6;
  drawnCards.push({ ...card, reversed });

  const slot = document.getElementById(`tarot-card-${idx}`);
  if (!slot) return;

  const ohaengEmoji = ['🌿','🔥','⭐','💧','⚡'];
  const color = `hsl(${card.id * 16}, 60%, 35%)`;

  // Animate: shrink old → replace → flip in
  slot.style.transition = 'transform 0.3s ease';
  slot.style.transform = 'scale(0.8)';
  setTimeout(() => {
    slot.outerHTML = `
      <div class="tarot-scene" id="slot-scene-${idx}">
        <div class="tarot-card-container" id="tarot-flip-${idx}">
          <div class="tarot-back">
            <img src="images/tarot_back.png" alt="타로 뒷면" onerror="this.parentElement.style.background='linear-gradient(135deg,#1A2035,#0E1228)'">
          </div>
          <div class="tarot-face">
            <div class="tarot-face-inner">
              <div class="tarot-face-symbol">${card.emoji}</div>
              <div class="tarot-face-name">${card.symbol}<br>${card.name}</div>
              ${reversed ? '<div style="font-size:0.65rem;color:var(--fire);margin-top:2px;">역방향</div>' : ''}
            </div>
          </div>
        </div>
      </div>
    `;
    setTimeout(() => {
      document.getElementById(`tarot-flip-${idx}`)?.classList.add('flipped');
    }, 200);

    document.getElementById(`tarot-card-${idx}`)?.classList.remove('tarot-card-unselected');
  }, 300);

  const remaining = currentConcern.spread - drawnCards.length;
  const hint = document.getElementById('deck-hint');
  if (hint) hint.textContent = remaining > 0 ? `${remaining}장 더 선택하세요` : '모든 카드가 선택됐습니다!';

  if (drawnCards.length === currentConcern.spread) {
    setTimeout(() => showTarotReading(), 1200);
  }
}

function showTarotReading() {
  document.getElementById('tarot-step2').style.display = 'none';
  document.getElementById('tarot-step3').style.display = 'block';

  const readings = generateTarotReading(drawnCards, currentConcern?.id);
  AppState.currentTarot = { concern: currentConcern, readings };
  AppState.analysisHistory.unshift({ type:'타로', title:`${currentConcern?.name} 타로`, date: new Date().toLocaleDateString('ko-KR'), preview: readings[0]?.card.name + ' 외', data: { readings } });
  AppState.save();

  const html = `
    <div style="text-align:center;margin-bottom:var(--space-8);">
      <span class="badge badge-new" style="margin-bottom:var(--space-3);">🔮 ${currentConcern?.name} 타로 결과</span>
      <h2>카드가 전하는 <span class="text-gradient">메시지</span></h2>
    </div>
    ${readings.map((r, i) => `
      <div class="tarot-reading-card animate-fadeUp" style="animation-delay:${i*0.15}s;">
        <div class="tarot-reading-img">${r.card.emoji}</div>
        <div>
          <div class="tarot-reading-pos">${r.position} · ${r.card.reversed ? '역방향' : '정방향'}</div>
          <div class="tarot-reading-name">${r.card.symbol} ${r.card.name} <span style="color:var(--text-muted);font-size:0.8rem;">(${r.card.nameEn})</span></div>
          <div style="display:flex;flex-wrap:wrap;gap:var(--space-2);margin-bottom:var(--space-3);">
            ${r.card.keywords.map(k=>`<span class="badge badge-new">${k}</span>`).join('')}
          </div>
          <p class="tarot-reading-text">${r.interpretation}</p>
        </div>
      </div>
    `).join('')}
    <div class="saju-ai-section" style="margin-top:var(--space-6);">
      <div class="saju-ai-title">✨ 종합 메시지</div>
      <div class="saju-ai-text">
        ${readings.length === 1 ? `지금 이 순간, <strong style="color:var(--lavender-light);">${readings[0].card.name}</strong> 카드가 당신에게 말을 건넵니다. ${readings[0].interpretation}` :
          readings.length === 2 ? `<strong style="color:var(--lavender-light);">${readings[0].card.name}</strong>과 <strong style="color:var(--lavender-light);">${readings[1].card.name}</strong>의 흐름이 보입니다. 현재 상황을 직시하고 내면의 지혜를 믿으세요.` :
          `<strong style="color:var(--lavender-light);">${readings[0].card.name}</strong>, <strong style="color:var(--lavender-light);">${readings[1].card.name}</strong>, <strong style="color:var(--lavender-light);">${readings[2].card.name}</strong>의 흐름이 보입니다. 과거의 경험을 바탕으로 현재를 헤쳐나가며, 미래에는 긍정적인 변화가 기다리고 있습니다.`
        }
        <br><br><span style="color:var(--text-muted);font-size:0.8rem;">※ 타로는 자기성찰의 도구이며 미래를 확정적으로 예측하지 않습니다</span>
      </div>
    </div>
  `;
  document.getElementById('tarot-reading-area').innerHTML = html;
  document.getElementById('tarot-step3').scrollIntoView({ behavior:'smooth' });
}

function resetTarot() {
  currentConcern = null;
  currentSpread = [];
  drawnCards = [];
  document.getElementById('tarot-step1').style.display = 'block';
  document.getElementById('tarot-step2').style.display = 'none';
  document.getElementById('tarot-step3').style.display = 'none';
  document.querySelectorAll('.tarot-concern-btn').forEach(b => b.classList.remove('selected'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
