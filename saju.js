/**
 * AFTER — Saju Calculation Engine
 * 실제 사주(四柱) 계산 로직
 */

// 천간 (Heavenly Stems)
const CHEONGAN = ['갑', '을', '병', '정', '무', '기', '경', '신', '임', '계'];
const CHEONGAN_HJ = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
const CHEONGAN_EN = ['Wood+', 'Wood-', 'Fire+', 'Fire-', 'Earth+', 'Earth-', 'Metal+', 'Metal-', 'Water+', 'Water-'];

// 지지 (Earthly Branches)
const JIJI = ['자', '축', '인', '묘', '진', '사', '오', '미', '신', '유', '술', '해'];
const JIJI_HJ = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
const JIJI_ANIMAL = ['쥐', '소', '범', '토끼', '용', '뱀', '말', '양', '원숭이', '닭', '개', '돼지'];
const JIJI_EN = ['Rat','Ox','Tiger','Rabbit','Dragon','Snake','Horse','Goat','Monkey','Rooster','Dog','Pig'];

// 오행 매핑 (천간)
const CHEONGAN_OHAENG = ['목', '목', '화', '화', '토', '토', '금', '금', '수', '수'];
// 오행 매핑 (지지)
const JIJI_OHAENG = ['수', '토', '목', '목', '토', '화', '화', '토', '금', '금', '토', '수'];

// 시주 기준 (각 시간대 이름)
const SIJU_TIME = [
  { label: '자시', range: '23:00~00:59', ji: 0, desc: '한밤중' },
  { label: '축시', range: '01:00~02:59', ji: 1, desc: '새벽' },
  { label: '인시', range: '03:00~04:59', ji: 2, desc: '여명' },
  { label: '묘시', range: '05:00~06:59', ji: 3, desc: '동이 틀 녘' },
  { label: '진시', range: '07:00~08:59', ji: 4, desc: '아침' },
  { label: '사시', range: '09:00~10:59', ji: 5, desc: '오전' },
  { label: '오시', range: '11:00~12:59', ji: 6, desc: '정오' },
  { label: '미시', range: '13:00~14:59', ji: 7, desc: '오후' },
  { label: '신시', range: '15:00~16:59', ji: 8, desc: '늦은 오후' },
  { label: '유시', range: '17:00~18:59', ji: 9, desc: '저녁' },
  { label: '술시', range: '19:00~20:59', ji: 10, desc: '해 질 녘' },
  { label: '해시', range: '21:00~22:59', ji: 11, desc: '밤' },
];

/**
 * 년주 계산
 * 기준: 양력 1900년 = 경자년 (庚子)
 */
function calcYeonju(year) {
  const ganIdx = (year - 4) % 10;
  const jiIdx  = (year - 4) % 12;
  return {
    gan: CHEONGAN[((ganIdx % 10) + 10) % 10],
    ji:  JIJI[((jiIdx % 12) + 12) % 12],
    ganHj: CHEONGAN_HJ[((ganIdx % 10) + 10) % 10],
    jiHj:  JIJI_HJ[((jiIdx % 12) + 12) % 12],
    ganOhaeng: CHEONGAN_OHAENG[((ganIdx % 10) + 10) % 10],
    jiOhaeng:  JIJI_OHAENG[((jiIdx % 12) + 12) % 12],
    animal: JIJI_ANIMAL[((jiIdx % 12) + 12) % 12],
  };
}

/**
 * 월주 계산 (절기 기반 근사)
 * 실제 절기 계산은 복잡하므로 월 기반 근사값 사용
 */
function calcWolju(year, month) {
  // 월지: 1월=인(2), 2월=묘(3) ... 12월=축(1)
  const jiBase = [2,3,4,5,6,7,8,9,10,11,0,1]; // 1월~12월 지지 인덱스
  const jiIdx = jiBase[month - 1];

  // 월간: 년간에 따라 결정 (오자년기두인법)
  const yearGanIdx = (year - 4) % 10;
  const ganBase = [2, 4, 6, 8, 0]; // 갑기, 을경, 병신, 정임, 무계 년의 1월 간 인덱스
  const ganStartIdx = ganBase[Math.floor(((yearGanIdx % 10) + 10) % 10 / 2)];
  const ganIdx = (ganStartIdx + (month - 1) * 2) % 10;

  return {
    gan: CHEONGAN[ganIdx],
    ji:  JIJI[jiIdx],
    ganHj: CHEONGAN_HJ[ganIdx],
    jiHj:  JIJI_HJ[jiIdx],
    ganOhaeng: CHEONGAN_OHAENG[ganIdx],
    jiOhaeng:  JIJI_OHAENG[jiIdx],
  };
}

/**
 * 일주 계산
 * 기준: 1900-01-01 = 갑술일 (甲戌, 간=0, 지=10)
 */
function calcIlju(year, month, day) {
  // 율리우스 일수 기반 계산
  function toJD(y, m, d) {
    if (m <= 2) { y--; m += 12; }
    const A = Math.floor(y / 100);
    const B = 2 - A + Math.floor(A / 4);
    return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + d + B - 1524;
  }
  const baseJD = toJD(1900, 1, 1); // 갑술일 JD
  const targetJD = toJD(year, month, day);
  const diff = targetJD - baseJD;

  const ganIdx = ((diff % 10) + 10) % 10; // 갑=0
  const jiIdx  = ((diff % 12) + 12) % 12; // 술=10 → 기준보정
  const jiIdxAdj = (jiIdx + 10) % 12;

  return {
    gan: CHEONGAN[ganIdx],
    ji:  JIJI[jiIdxAdj],
    ganHj: CHEONGAN_HJ[ganIdx],
    jiHj:  JIJI_HJ[jiIdxAdj],
    ganOhaeng: CHEONGAN_OHAENG[ganIdx],
    jiOhaeng:  JIJI_OHAENG[jiIdxAdj],
  };
}

/**
 * 시주 계산
 * @param {number} hour - 0~23
 * @param {string} ilGan - 일간
 */
function calcSiju(hour, ilGanIdx) {
  // 시지: 시간대별 지지
  let jiIdx;
  if (hour >= 23 || hour < 1)       jiIdx = 0;  // 자시
  else if (hour >= 1  && hour < 3)   jiIdx = 1;  // 축시
  else if (hour >= 3  && hour < 5)   jiIdx = 2;  // 인시
  else if (hour >= 5  && hour < 7)   jiIdx = 3;  // 묘시
  else if (hour >= 7  && hour < 9)   jiIdx = 4;  // 진시
  else if (hour >= 9  && hour < 11)  jiIdx = 5;  // 사시
  else if (hour >= 11 && hour < 13)  jiIdx = 6;  // 오시
  else if (hour >= 13 && hour < 15)  jiIdx = 7;  // 미시
  else if (hour >= 15 && hour < 17)  jiIdx = 8;  // 신시
  else if (hour >= 17 && hour < 19)  jiIdx = 9;  // 유시
  else if (hour >= 19 && hour < 21)  jiIdx = 10; // 술시
  else                               jiIdx = 11; // 해시

  // 시간: 일간에 따라 결정
  const ganBase = [0, 2, 4, 6, 8, 0, 2, 4, 6, 8]; // 갑기, 을경, 병신, 정임, 무계
  const ganStartIdx = ganBase[ilGanIdx % 10];
  const ganIdx = (ganStartIdx + jiIdx * 2) % 10;

  // 시간 라벨
  const stime = SIJU_TIME[jiIdx];

  return {
    gan: CHEONGAN[ganIdx],
    ji:  JIJI[jiIdx],
    ganHj: CHEONGAN_HJ[ganIdx],
    jiHj:  JIJI_HJ[jiIdx],
    ganOhaeng: CHEONGAN_OHAENG[ganIdx],
    jiOhaeng:  JIJI_OHAENG[jiIdx],
    timeLabel: stime.label,
    timeRange: stime.range,
  };
}

/**
 * 오행 분포 계산
 */
function calcOhaengDistribution(pillars) {
  const counts = { 목: 0, 화: 0, 토: 0, 금: 0, 수: 0 };
  pillars.forEach(p => {
    if (p.ganOhaeng) counts[p.ganOhaeng]++;
    if (p.jiOhaeng)  counts[p.jiOhaeng]++;
  });
  const total = Object.values(counts).reduce((a, b) => a + b, 0);
  const pct = {};
  Object.entries(counts).forEach(([k, v]) => { pct[k] = Math.round(v / total * 100); });
  return { counts, pct };
}

/**
 * 일주 십성 분석 (주요 성격 특성)
 */
const IL_JU_CHAR = {
  '갑자': { title: '갑자일주', keywords: ['창의적', '독립적', '강직함'], desc: '지혜롭고 창의적인 선구자 기질' },
  '갑인': { title: '갑인일주', keywords: ['리더십', '추진력', '열정'], desc: '강한 추진력과 리더십의 소유자' },
  '을묘': { title: '을묘일주', keywords: ['섬세함', '예술성', '공감력'], desc: '예술적 감각과 섬세한 감수성' },
  '병오': { title: '병오일주', keywords: ['열정적', '카리스마', '솔직함'], desc: '열정과 카리스마로 주변을 이끄는 성격' },
  '정해': { title: '정해일주', keywords: ['직관력', '신비로움', '감성'], desc: '깊은 직관과 신비로운 매력의 소유자' },
  '무술': { title: '무술일주', keywords: ['안정감', '신뢰', '포용력'], desc: '든든하고 신뢰받는 든든한 기둥' },
  '기해': { title: '기해일주', keywords: ['세심함', '근면', '봉사'], desc: '세심하고 성실하게 주변을 돌보는 성격' },
  '경신': { title: '경신일주', keywords: ['결단력', '공정', '강인함'], desc: '냉철한 판단력과 강인한 의지' },
  '신유': { title: '신유일주', keywords: ['완벽주의', '예리함', '심미안'], desc: '완벽을 추구하는 예리한 심미안' },
  '임자': { title: '임자일주', keywords: ['유연함', '지혜', '적응력'], desc: '물처럼 유연하고 지혜로운 성격' },
  '계해': { title: '계해일주', keywords: ['상상력', '직감', '신비'], desc: '깊은 상상력과 예지적 직감' },
};

/**
 * 오행 특성 설명
 */
var OHAENG_TRAITS = {
  목: { emoji: '🌿', char: '木', color: '#4A7C59', title: '목(木) — 나무의 기운', traits: ['창의성', '성장', '리더십', '봉사'], desc: '뻗어나가는 나무처럼 새로운 것을 창조하고 성장을 추구합니다. 창의적이고 직관적이며 타인을 이끄는 기질이 있습니다.', strength: '독창성, 진취성, 기획력', weakness: '고집, 변화에 대한 저항' },
  화: { emoji: '🔥', char: '火', color: '#C84B4B', title: '화(火) — 불의 기운', traits: ['열정', '표현력', '사교성', '카리스마'], desc: '활활 타오르는 불처럼 열정적이고 표현력이 풍부합니다. 사람들을 매료시키는 카리스마와 순발력을 가집니다.', strength: '표현력, 순발력, 사교성', weakness: '성급함, 지속력 부족' },
  토: { emoji: '⛰️', char: '土', color: '#D4A853', title: '토(土) — 대지의 기운', traits: ['안정', '포용', '신뢰', '인내'], desc: '대지처럼 묵직하고 안정적입니다. 포용력이 크고 신뢰받는 성격으로 주변의 중심이 됩니다.', strength: '안정감, 포용력, 인내심', weakness: '보수적, 변화 두려움' },
  금: { emoji: '⚡', char: '金', color: '#C8D6E5', title: '금(金) — 쇠의 기운', traits: ['결단력', '원칙', '공정', '예리함'], desc: '단단한 쇠처럼 원칙을 중시하고 결단력이 강합니다. 냉철한 판단력과 강한 의지로 목표를 달성합니다.', strength: '결단력, 원칙, 공정성', weakness: '완고함, 냉정함' },
  수: { emoji: '💧', char: '水', color: '#3D6B9C', title: '수(水) — 물의 기운', traits: ['지혜', '유연성', '직관', '탐구심'], desc: '물처럼 유연하고 깊은 지혜를 가집니다. 탁월한 직관력과 탐구심으로 진실을 꿰뚫어 봅니다.', strength: '지혜, 유연성, 직관력', weakness: '우유부단, 감정 기복' },
};

/**
 * 메인 사주 계산 함수
 */
function calculateSaju(year, month, day, hour, gender) {
  const yeonju = calcYeonju(year);
  const wolju  = calcWolju(year, month);
  const ilju   = calcIlju(year, month, day);
  const ilGanIdx = CHEONGAN.indexOf(ilju.gan);
  const siju   = hour !== null ? calcSiju(hour, ilGanIdx) : null;

  const pillars = [yeonju, wolju, ilju, ...(siju ? [siju] : [])];
  const ohaeng  = calcOhaengDistribution(pillars);

  // 일주 핵심 성격
  const iljuKey = ilju.gan + ilju.ji;
  const iljuChar = IL_JU_CHAR[iljuKey] || null;

  // 주요 오행 (가장 많은 것)
  const mainOhaeng = Object.entries(ohaeng.counts).sort((a,b) => b[1]-a[1])[0][0];
  const weakOhaeng = Object.entries(ohaeng.counts).sort((a,b) => a[1]-b[1])[0][0];

  return {
    pillars: { yeonju, wolju, ilju, siju },
    ohaeng,
    mainOhaeng,
    weakOhaeng,
    iljuChar,
    gender,
    inputInfo: { year, month, day, hour },
  };
}

/**
 * 궁합 점수 계산
 */
function calculateGoonghap(saju1, saju2) {
  const o1 = saju1.ohaeng.counts;
  const o2 = saju2.ohaeng.counts;

  // 상생 관계: 목→화→토→금→수→목
  const SANGSEANG = { 목:'화', 화:'토', 토:'금', 금:'수', 수:'목' };
  // 상극 관계: 목→토, 화→금, 토→수, 금→목, 수→화
  const SANGGEUK  = { 목:'토', 화:'금', 토:'수', 금:'목', 수:'화' };

  let score = 50;

  // 주 오행 상생/상극
  const m1 = saju1.mainOhaeng;
  const m2 = saju2.mainOhaeng;
  if (SANGSEANG[m1] === m2 || SANGSEANG[m2] === m1) score += 25;
  else if (SANGGEUK[m1] === m2 || SANGGEUK[m2] === m1) score -= 15;
  else if (m1 === m2) score += 10; // 같은 오행

  // 일간 조합
  const il1 = saju1.pillars.ilju.gan;
  const il2 = saju2.pillars.ilju.gan;
  const ganPair = [il1, il2].sort().join('');
  const GOOD_PAIRS = ['갑기','을경','병신','정임','무계'];
  if (GOOD_PAIRS.some(p => ganPair === p.split('').sort().join(''))) score += 15;

  // 지지 조합
  const ji1 = saju1.pillars.ilju.ji;
  const ji2 = saju2.pillars.ilju.ji;
  const SAMHAP = [['인','오','술'],['사','유','축'],['신','자','진'],['해','묘','미']];
  const inSamhap = SAMHAP.some(g => g.includes(ji1) && g.includes(ji2));
  if (inSamhap) score += 10;

  score = Math.min(99, Math.max(10, score));

  // 상세 항목 점수
  const love    = Math.min(99, score + Math.floor(Math.random() * 10) - 5);
  const comm    = Math.min(99, score + Math.floor(Math.random() * 14) - 7);
  const trust   = Math.min(99, score + Math.floor(Math.random() * 12) - 6);
  const passion = Math.min(99, score + Math.floor(Math.random() * 16) - 8);

  const gradeMap = s => s >= 90 ? '완벽한 인연' : s >= 75 ? '좋은 궁합' : s >= 60 ? '무난한 인연' : s >= 45 ? '노력이 필요' : '어려운 궁합';
  const grade = gradeMap(score);

  return { score, grade, love, comm, trust, passion, mainOhaeng1: m1, mainOhaeng2: m2 };
}

// 브라우저 & Node 모두 지원
if (typeof module !== 'undefined') {
  module.exports = { calculateSaju, calculateGoonghap, OHAENG_TRAITS, CHEONGAN, JIJI, SIJU_TIME };
}
