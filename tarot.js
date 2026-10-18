/**
 * AFTER — Tarot Data & Engine
 * 타로 카드 데이터 및 해석 엔진
 */

const TAROT_CARDS = [
  { id: 0,  name: '바보',         nameEn: 'The Fool',          emoji: '🎭', symbol: '0',   keywords: ['시작', '자유', '순수함'], upright: '새로운 시작, 무한한 가능성, 순수한 열정으로 새 길을 나서세요. 두려움 없이 한 걸음을 내딛을 때입니다.', reversed: '무모함, 준비 부족, 경솔한 결정을 경계하세요. 한 발짝 물러서서 신중하게 계획을 세워보세요.' },
  { id: 1,  name: '마법사',       nameEn: 'The Magician',      emoji: '✨', symbol: 'I',   keywords: ['능력', '의지력', '실현'], upright: '당신 안의 모든 자원과 능력을 활용할 때입니다. 의지와 집중력으로 원하는 것을 현실로 만들 수 있습니다.', reversed: '재능 낭비, 자기 의심. 내면의 능력을 믿고 현실적인 계획을 세워보세요.' },
  { id: 2,  name: '여사제',       nameEn: 'High Priestess',    emoji: '🌙', symbol: 'II',  keywords: ['직관', '내면의 지혜', '신비'], upright: '내면의 목소리에 귀 기울이세요. 직관과 내면의 지혜가 정답을 알고 있습니다. 조용히 성찰하는 시간을 가져보세요.', reversed: '내면의 소리를 무시하고 있습니다. 외부 소음에서 벗어나 자신과의 대화가 필요합니다.' },
  { id: 3,  name: '여황제',       nameEn: 'The Empress',       emoji: '🌸', symbol: 'III', keywords: ['풍요', '창의성', '모성'], upright: '풍요롭고 창의적인 에너지가 가득한 시기입니다. 사랑, 아름다움, 자기 돌봄에 집중하세요. 자연스럽게 번성할 것입니다.', reversed: '자기 방치, 창의성 차단. 자신을 먼저 돌보는 것이 필요합니다.' },
  { id: 4,  name: '황제',         nameEn: 'The Emperor',       emoji: '👑', symbol: 'IV',  keywords: ['권위', '안정', '구조'], upright: '강한 리더십과 구조적인 접근이 필요합니다. 권위 있는 인물의 도움을 받거나, 당신이 그 역할을 할 때입니다.', reversed: '지나친 통제, 경직성. 유연함과 다른 관점을 받아들이는 것이 도움이 됩니다.' },
  { id: 5,  name: '교황',         nameEn: 'The Hierophant',    emoji: '⛪', symbol: 'V',   keywords: ['전통', '지혜', '조언'], upright: '전통적인 방법과 검증된 조언을 따르세요. 신뢰할 수 있는 멘토나 시스템 안에서 안정을 찾을 것입니다.', reversed: '규칙에 대한 반발, 독자적 사고. 규범을 넘어 자신만의 길을 찾아도 좋습니다.' },
  { id: 6,  name: '연인',         nameEn: 'The Lovers',        emoji: '💑', symbol: 'VI',  keywords: ['선택', '사랑', '조화'], upright: '중요한 선택의 기로에 있습니다. 진정한 사랑과 조화를 추구하세요. 마음에서 우러나오는 선택이 옳습니다.', reversed: '불균형한 관계, 잘못된 선택. 진정으로 원하는 것이 무엇인지 다시 생각해보세요.' },
  { id: 7,  name: '전차',         nameEn: 'The Chariot',       emoji: '🚀', symbol: 'VII', keywords: ['의지력', '승리', '통제'], upright: '강한 의지와 집중력으로 장애물을 극복할 수 있습니다. 방향을 정하고 힘차게 앞으로 나아가세요. 승리가 기다립니다.', reversed: '방향 상실, 통제력 부재. 잠시 멈추고 나아갈 방향을 재정립하세요.' },
  { id: 8,  name: '힘',           nameEn: 'Strength',          emoji: '🦁', symbol: 'VIII',keywords: ['내면의 힘', '인내', '용기'], upright: '내면의 깊은 힘이 당신 안에 있습니다. 부드러움과 인내로 어려움을 극복하세요. 진정한 용기는 내면에서 옵니다.', reversed: '자기 의심, 두려움. 자신의 강점을 믿고 작은 것부터 시작해보세요.' },
  { id: 9,  name: '은둔자',       nameEn: 'The Hermit',        emoji: '🕯️', symbol: 'IX',  keywords: ['성찰', '내면 탐구', '지혜'], upright: '혼자만의 시간이 필요한 시기입니다. 내면을 깊이 탐구하고 자신만의 진리를 찾으세요. 고독 속에서 빛이 보입니다.', reversed: '과도한 고립, 타인 거부. 적절한 연결과 도움을 받아들이세요.' },
  { id: 10, name: '운명의 수레바퀴', nameEn: 'Wheel of Fortune', emoji: '🎡', symbol: 'X',  keywords: ['변화', '행운', '순환'], upright: '인생의 흐름이 좋은 방향으로 변화하고 있습니다. 기회를 놓치지 마세요. 행운이 당신에게 미소 짓고 있습니다.', reversed: '불운, 예상치 못한 변화. 역경도 성장의 기회임을 기억하세요.' },
  { id: 11, name: '정의',         nameEn: 'Justice',           emoji: '⚖️', symbol: 'XI',  keywords: ['공정', '진실', '균형'], upright: '진실과 공정한 판단이 필요합니다. 균형 잡힌 시각으로 상황을 바라보세요. 정직함이 최선의 결과를 가져옵니다.', reversed: '불공정, 책임 회피. 솔직하게 자신을 직면하고 책임을 인정하세요.' },
  { id: 12, name: '매달린 사람',  nameEn: 'The Hanged Man',    emoji: '🔮', symbol: 'XII', keywords: ['관점 전환', '희생', '기다림'], upright: '다른 각도로 상황을 바라보는 시간이 필요합니다. 잠시 멈추고 새로운 관점을 가지면 해결책이 보입니다.', reversed: '결단력 부족, 시간 낭비. 필요한 희생을 받아들이고 앞으로 나아가세요.' },
  { id: 13, name: '죽음',         nameEn: 'Death',             emoji: '🌑', symbol: 'XIII',keywords: ['변환', '종료', '새 시작'], upright: '한 시기가 끝나고 새로운 시작이 옵니다. 과거를 놓아주면 더 나은 것이 찾아올 것입니다. 변화를 두려워하지 마세요.', reversed: '변화에 대한 저항. 과거를 붙잡는 것이 성장을 막고 있습니다.' },
  { id: 14, name: '절제',         nameEn: 'Temperance',        emoji: '🌈', symbol: 'XIV', keywords: ['균형', '인내', '조화'], upright: '균형과 절제가 최선의 길입니다. 서두르지 말고 인내하세요. 조화로운 접근이 아름다운 결과를 만듭니다.', reversed: '불균형, 과잉. 극단적인 행동을 피하고 중용의 도를 찾으세요.' },
  { id: 15, name: '악마',         nameEn: 'The Devil',         emoji: '🔗', symbol: 'XV',  keywords: ['속박', '집착', '그림자'], upright: '무언가에 과도하게 집착하고 있지 않은가요? 자신을 묶고 있는 것을 인식하는 것이 자유의 첫 걸음입니다.', reversed: '속박에서의 해방. 두려움을 극복하고 부정적인 패턴에서 벗어날 준비가 되었습니다.' },
  { id: 16, name: '탑',           nameEn: 'The Tower',         emoji: '⚡', symbol: 'XVI', keywords: ['갑작스런 변화', '혼돈', '깨달음'], upright: '예상치 못한 변화나 충격이 있을 수 있습니다. 하지만 이 혼돈이 더 나은 것을 위한 필요한 과정임을 기억하세요.', reversed: '변화에 대한 저항, 피할 수 없는 것을 피하려 함. 변화를 받아들이면 더 빨리 회복됩니다.' },
  { id: 17, name: '별',           nameEn: 'The Star',          emoji: '⭐', symbol: 'XVII',keywords: ['희망', '영감', '치유'], upright: '희망과 영감이 넘치는 시기입니다. 상처가 치유되고 새로운 꿈을 향해 나아갈 에너지가 차오릅니다. 믿으세요.', reversed: '희망 상실, 자기 회의. 작은 것에서 희망을 찾고 한 걸음씩 나아가세요.' },
  { id: 18, name: '달',           nameEn: 'The Moon',          emoji: '🌙', symbol: 'XVIII',keywords: ['환상', '불안', '무의식'], upright: '감춰진 진실이 있습니다. 두려움이나 불안에 사로잡히지 말고, 직관을 믿고 진실을 들여다보세요.', reversed: '혼란 해소, 진실 드러남. 오해가 풀리고 상황이 명확해지기 시작합니다.' },
  { id: 19, name: '태양',         nameEn: 'The Sun',           emoji: '☀️', symbol: 'XIX', keywords: ['성공', '기쁨', '활력'], upright: '밝고 긍정적인 에너지가 넘칩니다. 성공과 행복이 함께하는 시기입니다. 자신감을 갖고 기쁨을 만끽하세요.', reversed: '과도한 낙관, 일시적 좌절. 현실적으로 바라보되 긍정적인 마음을 잃지 마세요.' },
  { id: 20, name: '심판',         nameEn: 'Judgement',         emoji: '🎺', symbol: 'XX',  keywords: ['부활', '각성', '결정'], upright: '중요한 결정과 변화의 시기입니다. 과거를 용서하고 새로운 차원으로 도약하세요. 각성의 순간이 찾아왔습니다.', reversed: '자기 의심, 결정 회피. 스스로를 심판하지 말고 앞으로 나아가세요.' },
  { id: 21, name: '세계',         nameEn: 'The World',         emoji: '🌍', symbol: 'XXI', keywords: ['완성', '성취', '통합'], upright: '하나의 중요한 주기가 완성되고 있습니다. 성취감과 통합을 경험하는 시기입니다. 당신은 해냈습니다.', reversed: '미완성, 마지막 단계 부족. 조금만 더 노력하면 완성의 기쁨을 맛볼 수 있습니다.' },
];

// 고민 카테고리별 타로 스프레드 설정
const TAROT_CONCERNS = [
  { id: 'love',     name: '연애/관계', emoji: '💕', desc: '사랑과 관계에 대한 통찰', spread: 3, positions: ['현재 상황', '상대방의 마음', '앞으로의 방향'] },
  { id: 'career',   name: '직업/진로', emoji: '💼', desc: '일과 커리어에 대한 안내', spread: 3, positions: ['현재 상황', '장애물', '조언'] },
  { id: 'health',   name: '건강/에너지', emoji: '🌿', desc: '몸과 마음의 균형', spread: 2, positions: ['몸의 상태', '마음의 상태'] },
  { id: 'relation', name: '인간관계', emoji: '🤝', desc: '주변 사람들과의 관계', spread: 3, positions: ['나의 태도', '상대방의 입장', '해결 방향'] },
  { id: 'money',    name: '재물/돈', emoji: '💰', desc: '재정과 경제적 상황', spread: 2, positions: ['현재 상황', '앞으로의 흐름'] },
  { id: 'general',  name: '전반적 운세', emoji: '🌟', desc: '오늘의 전반적인 에너지', spread: 1, positions: ['오늘의 메시지'] },
  { id: 'decision', name: '선택/결정', emoji: '🔮', desc: '중요한 결정 앞에 선 당신에게', spread: 3, positions: ['선택지 A', '선택지 B', '핵심 메시지'] },
  { id: 'growth',   name: '자기성장', emoji: '🌱', desc: '내면의 성장과 잠재력', spread: 2, positions: ['현재의 나', '가능성'] },
];

/**
 * 타로 카드 무작위 선택
 */
function drawTarotCards(count) {
  const shuffled = [...TAROT_CARDS].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map(card => ({
    ...card,
    reversed: Math.random() > 0.6, // 40% 확률로 역방향
  }));
}

/**
 * AI 해석 생성 (템플릿 기반 — 5단계에서 실제 AI로 교체)
 */
function generateTarotReading(cards, concern) {
  const concernData = TAROT_CONCERNS.find(c => c.id === concern);
  const readings = cards.map((card, idx) => ({
    card,
    position: concernData ? concernData.positions[idx] : `카드 ${idx + 1}`,
    interpretation: card.reversed ? card.reversed : card.upright,
  }));
  return readings;
}

if (typeof module !== 'undefined') {
  module.exports = { TAROT_CARDS, TAROT_CONCERNS, drawTarotCards, generateTarotReading };
}
