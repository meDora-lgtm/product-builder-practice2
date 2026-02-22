/**
 * i18n Translations
 */
const translations = {
  ko: {
    app_title: "QS 세계 대학 랭킹 2025 익스플로러",
    app_desc: "QS World University Rankings 2025 최신 데이터를 기반으로 명문대 정보를 탐색하세요.",
    btn_reload: "데이터 동기화",
    btn_reset: "필터 초기화",
    btn_apply: "조회하기",
    filter_title: "조회 조건",
    shortcut_enter: "Enter 조회",
    shortcut_search: "검색 포커스",
    data_notice: "QS World University Rankings 2025 공식 데이터를 기반으로 제공됩니다.",
    label_search: "검색",
    label_search_hint: "학교명/국가",
    label_year: "연도",
    label_year_hint: "데이터 연도",
    label_country: "국가",
    label_country_hint: "선택",
    label_sort: "정렬",
    label_sort_hint: "기본: 세계랭킹",
    label_page: "표시 개수",
    label_page_hint: "페이지 당",
    label_current: "현재 조건",
    label_current_hint: "자동 요약",
    msg_loading: "최신 랭킹 로드 중…",
    msg_wait: "잠시만 기다려 주세요",
    source_credit: "데이터 출처: QS World University Rankings 2025",
    result_title: "조회 결과",
    meta_year: "연도",
    meta_shown: "표시됨",
    meta_total: "전체",
    th_rank: "세계랭킹",
    th_uni: "대학교",
    th_country: "국가",
    th_score: "점수",
    msg_empty: "조건에 맞는 결과가 없어요.",
    btn_prev: "이전",
    btn_next: "다음",
    page_label: "페이지",
    tip_prefix: "Tip:",
    tip_suffix: "로 검색창 포커스",
    footer_note: "* 본 사이트는 QS 공식 데이터를 기반으로 시각화된 대시보드입니다.",
    opt_all: "전체",
    sort_rank_asc: "세계랭킹 ↑",
    sort_rank_desc: "세계랭킹 ↓",
    sort_score_desc: "점수 ↓",
    sort_name_asc: "학교명 A→Z",
    msg_data_ready: "랭킹 데이터 준비 완료",
    msg_render: "데이터 시각화 중…",
    national_rank: "국가 순위",
    label_partnership: "제휴 문의",
    label_partnership_hint: "Formspree",
    placeholder_name: "성함 / 기업명",
    placeholder_email: "이메일 주소",
    placeholder_message: "문의 내용을 입력해주세요",
    btn_send: "문의하기",
    comments_title: "커뮤니티 댓글",
    label_ads: "광고",
    // 승인 최적화 문구 (고급화)
    about_title: "세계 명문대 조회 및 학술 정보 가이드",
    about_desc: "본 플랫폼은 전 세계 유명 대학교들의 학문적 성과와 글로벌 위상을 한눈에 파악하고, 교육 정보 조회를 수월하게 돕기 위해 구축된 전문 탐색 도구입니다. QS 데이터를 바탕으로 공신력 있는 랭킹 정보를 제공하며, 미래를 준비하는 학생들과 연구자들에게 최적화된 데이터 분석 환경을 제공합니다.",
    policy_privacy: "개인정보처리방침",
    policy_terms: "이용약관",
    privacy_content: "본 사이트는 사용자의 개인정보를 직접 수집하지 않습니다. 다만 광고 및 통계 분석을 위해 Google AdSense 및 Disqus의 쿠키가 사용될 수 있습니다.",
    terms_content: "제공되는 모든 순위 데이터는 참고용이며, 최신 정보는 각 교육 기관의 공식 발표를 기준으로 합니다.",
    copyright: "© 2026 World Uni Explorer. Empowering Global Education.",
    btn_close: "닫기",
    podium_title: "TOP 3 명문대 명예의 전당",
    rising_stars_title: "급상승 라이징 스타 (최근 3년)",
    rank_up: "단계 상승"
  },
  en: {
    app_title: "QS World University Rankings 2025 Explorer",
    app_desc: "Explore top universities worldwide based on the latest QS 2025 data.",
    btn_reload: "Sync Data",
    btn_reset: "Reset",
    btn_apply: "Search",
    filter_title: "Filters",
    shortcut_enter: "Press Enter",
    shortcut_search: "Focus search",
    data_notice: "Based on official QS World University Rankings 2025 data.",
    label_search: "Search",
    label_search_hint: "Name/Country",
    label_year: "Year",
    label_year_hint: "Data Year",
    label_country: "Country",
    label_country_hint: "Select",
    label_sort: "Sort",
    label_sort_hint: "Default: World Rank",
    label_page: "Show",
    label_page_hint: "Per Page",
    label_current: "Conditions",
    label_current_hint: "Summary",
    msg_loading: "Loading rankings...",
    msg_wait: "Please wait a moment",
    source_credit: "Source: QS World University Rankings 2025",
    result_title: "Results",
    meta_year: "Year",
    meta_shown: "Shown",
    meta_total: "Total",
    th_rank: "World Rank",
    th_uni: "University",
    th_country: "Country",
    th_score: "Score",
    msg_empty: "No results found.",
    btn_prev: "Prev",
    btn_next: "Next",
    page_label: "Page",
    tip_prefix: "Tip:",
    tip_suffix: "to focus search",
    footer_note: "* Visualized dashboard based on official QS data.",
    opt_all: "All",
    sort_rank_asc: "Rank Asc",
    sort_rank_desc: "Rank Desc",
    sort_score_desc: "Score Desc",
    sort_name_asc: "Name A-Z",
    msg_data_ready: "Rankings Ready",
    msg_render: "Visualizing...",
    national_rank: "National rank",
    label_partnership: "Partnership",
    label_partnership_hint: "Formspree",
    placeholder_name: "Name / Company",
    placeholder_email: "Email Address",
    placeholder_message: "Enter your message",
    btn_send: "Send",
    comments_title: "Community",
    label_ads: "AD",
    about_title: "World University Insights Hub",
    about_desc: "Dedicated to facilitate exploration of global higher education. We provide intuitive data tools to help users access academic rankings and institutional performance worldwide.",
    policy_privacy: "Privacy Policy",
    policy_terms: "Terms of Service",
    privacy_content: "We do not collect personal data. Cookies from third parties like Google AdSense are used for ad personalization.",
    terms_content: "Data provided is for informational purposes only. While we strive for accuracy, please verify with official sources for definitively up-to-date information.",
    copyright: "© 2026 World Uni Explorer. Empowering Global Education.",
    btn_close: "Close",
    podium_title: "Hall of Fame: Top 3",
    rising_stars_title: "Rising Stars (Last 3 Years)",
    rank_up: "ranks up"
  },
  ja: {
    app_title: "QS 世界大学ランキング 2025 エクスプローラー",
    app_desc: "最新の QS 2025 データに基づいて、世界中の大学ランキングを探索します。",
    btn_reload: "更新",
    btn_reset: "リセット",
    btn_apply: "検索",
    filter_title: "照会条件",
    shortcut_enter: "Enter",
    shortcut_search: "検索フォーカス",
    data_notice: "公式 QS World University Rankings 2025 データに基づいています。",
    label_search: "検索",
    label_search_hint: "大学名/国名",
    label_year: "年度",
    label_year_hint: "データ年度",
    label_country: "国",
    label_country_hint: "選択",
    label_sort: "並び替え",
    label_sort_hint: "デフォルト: 世界順位",
    label_page: "表示件数",
    label_page_hint: "ページあたり",
    label_current: "条件",
    label_current_hint: "要約",
    msg_loading: "ロード中...",
    msg_wait: "お待ちください",
    source_credit: "出典: QS World University Rankings 2025",
    result_title: "結果",
    meta_year: "年度",
    meta_shown: "表示中",
    meta_total: "全体",
    th_rank: "世界順位",
    th_uni: "大学",
    th_country: "国",
    th_score: "スコア",
    msg_empty: "該当する結果がありません。",
    btn_prev: "前へ",
    btn_next: "次へ",
    page_label: "ページ",
    tip_prefix: "Tip:",
    tip_suffix: "で検索窓にフォーカス",
    footer_note: "* 公式 QS データに基づいた可視化ダッシュボードです。",
    opt_all: "すべて",
    sort_rank_asc: "世界順位 ↑",
    sort_rank_desc: "世界順位 ↓",
    sort_score_desc: "スコア ↓",
    sort_name_asc: "大学名 A→Z",
    msg_data_ready: "準備完了",
    msg_render: "可視化中...",
    national_rank: "国内順位",
    label_partnership: "提携お問い合わせ",
    label_partnership_hint: "Formspree",
    placeholder_name: "お名前 / 企業名",
    placeholder_email: "メールアドレス",
    placeholder_message: "お問い合わせ内容を入力してください",
    btn_send: "送信",
    comments_title: "コメント",
    label_ads: "広告",
    about_title: "世界名門大学紹介および照会ハブ",
    about_desc: "世界中の有名な大学の紹介と照会をより円滑にするために構築されました。QSのデータを基に、アカデミックトレンドや競争力を分析できる環境を提供します。",
    policy_privacy: "プライバシーポリシー",
    policy_terms: "利用規約",
    privacy_content: "当サイトはユーザーの個人情報を直接収集しません。広告パーソナライズのためにクッキーが使用される場合があります。",
    terms_content: "提供される全てのデータは参照用です。最新の公式情報を必ず確認してください。",
    copyright: "© 2026 World Uni Explorer. Empowering Global Education.",
    btn_close: "閉じる",
    podium_title: "栄誉の殿堂: TOP 3",
    rising_stars_title: "라이징스타 (直近3年)",
    rank_up: "ランクアップ"
  }
};

const $ = (s) => document.querySelector(s);

function setLanguage(lang) {
  const dict = translations[lang] || translations.en;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });
  localStorage.setItem("lang", lang);
  $("#langSelect").value = lang;
}

$("#langSelect").addEventListener("change", (e) => {
  setLanguage(e.target.value);
  buildCountries();
  render();
  renderRisingStars();
});

const QS_DATA_2025 = [
  {rank:1, name:"Massachusetts Institute of Technology (MIT)", country:"United States", score:100, year:2025},
  {rank:2, name:"Imperial College London", country:"United Kingdom", score:98.5, year:2025},
  {rank:3, name:"University of Oxford", country:"United Kingdom", score:96.9, year:2025},
  {rank:4, name:"Harvard University", country:"United States", score:96.8, year:2025},
  {rank:5, name:"University of Cambridge", country:"United Kingdom", score:96.7, year:2025},
  {rank:6, name:"Stanford University", country:"United States", score:96.1, year:2025},
  {rank:7, name:"ETH Zurich", country:"Switzerland", score:93.9, year:2025},
  {rank:8, name:"National University of Singapore (NUS)", country:"Singapore", score:93.7, year:2025},
  {rank:9, name:"UCL", country:"United Kingdom", score:91.6, year:2025},
  {rank:10, name:"California Institute of Technology (Caltech)", country:"United States", score:90.9, year:2025},
  {rank:11, name:"University of Pennsylvania", country:"United States", score:90.3, year:2025},
  {rank:12, name:"University of California, Berkeley (UCB)", country:"United States", score:90.1, year:2025},
  {rank:13, name:"University of Melbourne", country:"Australia", score:88.9, year:2025},
  {rank:14, name:"Peking University", country:"China", score:88.5, year:2025},
  {rank:15, name:"Nanyang Technological University (NTU)", country:"Singapore", score:88.4, year:2025},
  {rank:16, name:"Cornell University", country:"United States", score:87.9, year:2025},
  {rank:17, name:"The University of Hong Kong (HKU)", country:"Hong Kong", score:87.6, year:2025},
  {rank:18, name:"The University of Sydney", country:"Australia", score:87.3, year:2025},
  {rank:19, name:"The University of New South Wales (UNSW)", country:"Australia", score:87.1, year:2025},
  {rank:20, name:"Tsinghua University", country:"China", score:86.5, year:2025},
  {rank:31, name:"Seoul National University (SNU)", country:"South Korea", score:82.4, year:2025},
  {rank:53, name:"KAIST", country:"South Korea", score:75.1, year:2025},
  {rank:67, name:"Yonsei University", country:"South Korea", score:70.2, year:2025},
  {rank:102, name:"Korea University", country:"South Korea", score:62.1, year:2025},
  {rank:32, name:"University of Tokyo", country:"Japan", score:82.1, year:2025},
  {rank:45, name:"Kyoto University", country:"Japan", score:78.4, year:2025},
  {rank:84, name:"Osaka University", country:"Japan", score:66.5, year:2025}
];

const state = {
  raw: QS_DATA_2025,
  year: 2025,
  q: "",
  country: "__ALL__",
  sort: "rank_asc",
  page: 1,
  pageSize: 50
};

function setSourceStatus(loaded, msg){
  const box = $("#sourceBox");
  const lang = localStorage.getItem("lang") || "ko";
  const dict = translations[lang];
  box.innerHTML = loaded
    ? `<div class="dot" style="animation:none; opacity:1;"></div>
       <div>
         <div style="color:var(--text); opacity:0.9; font-size:13px; font-weight:650;">${dict.msg_data_ready}</div>
         <div style="font-size:12px;">${msg}</div>
       </div>`
    : `<div class="dot"></div>
       <div>
         <div style="color:var(--text); opacity:0.86; font-size:13px; font-weight:650;">${dict.msg_loading}</div>
         <div style="font-size:12px;">${msg || dict.msg_wait}</div>
       </div>`;
}

function normalize(s){ return (s || "").toLowerCase().trim(); }
function uniq(arr){ return [...new Set(arr)]; }

function buildYears(){
  const sel = $("#year");
  sel.innerHTML = `<option value="2025">2025</option>`;
  state.year = 2025;
}

function buildCountries(){
  const list = state.raw.map(x => x.country).filter(Boolean);
  const countries = uniq(list).sort((a,b)=>a.localeCompare(b));
  const sel = $("#country");
  const lang = localStorage.getItem("lang") || "ko";
  const allText = translations[lang].opt_all;
  sel.innerHTML = `<option value="__ALL__">${allText}</option>`;
  countries.forEach(c=>{
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    sel.appendChild(opt);
  });
}

function updateSummary(){
  const chips = $("#summaryChips");
  const lang = localStorage.getItem("lang") || "ko";
  const dict = translations[lang];
  const parts = [];
  if (state.year) parts.push({k:dict.label_year, v:String(state.year)});
  if (state.country !== "__ALL__") parts.push({k:dict.label_country, v:state.country});
  if (state.q) parts.push({k:dict.label_search, v:state.q});
  parts.push({k:dict.label_sort, v: $("#sort").selectedOptions[0].textContent});
  chips.innerHTML = "";
  parts.forEach(p=>{
    const d = document.createElement("div");
    d.className = "chip";
    d.textContent = `${p.k}: ${p.v}`;
    chips.appendChild(d);
  });
}

function applyFilters(){
  const q = normalize(state.q);
  let list = [...state.raw];
  if (state.country !== "__ALL__") list = list.filter(x => x.country === state.country);
  if (q) list = list.filter(x => normalize(`${x.name} ${x.country}`).includes(q));
  if (state.sort === "rank_asc") list.sort((a,b)=>a.rank - b.rank);
  else if (state.sort === "rank_desc") list.sort((a,b)=>b.rank - a.rank);
  else if (state.sort === "score_desc") list.sort((a,b)=>(b.score ?? -1) - (a.score ?? -1));
  else if (state.sort === "name_asc") list.sort((a,b)=>String(a.name).localeCompare(String(b.name)));
  return list;
}

function renderPodium() {
  const podium = $("#podium");
  if (!podium) return;
  const top3 = [...QS_DATA_2025].sort((a,b)=>a.rank - b.rank).slice(0,3);
  const order = [1, 0, 2]; // 2nd, 1st, 3rd visually
  const characters = {
    1: { emoji: "🎓🤖", color: "linear-gradient(135deg, #A31F34, #000)", title: "MIT" },
    2: { emoji: "🛡️🔬", color: "linear-gradient(135deg, #003D71, #000)", title: "Imperial" },
    3: { emoji: "📖📘", color: "linear-gradient(135deg, #002147, #000)", title: "Oxford" }
  };
  podium.innerHTML = order.map(idx => {
    const uni = top3[idx];
    const char = characters[uni.rank];
    return `
      <div class="podium-step step-${uni.rank}">
        <div class="uni-char" style="background: ${char.color};" title="${uni.name}">
          <span class="emoji">${char.emoji}</span>
        </div>
        <div class="step-block">
          <span class="podium-rank">${uni.rank}</span>
        </div>
        <div class="uni-label">${uni.name.split('(')[0]}</div>
      </div>
    `;
  }).join('');
}

function renderRisingStars() {
  const container = $("#risingStars");
  if (!container) return;
  const lang = localStorage.getItem("lang") || "ko";
  const dict = translations[lang];
  const stars = [
    { name: "University of Melbourne", gain: 20, from: 33, to: 13, year: "2023-2025" },
    { name: "KAIST", gain: 18, from: 71, to: 53, year: "2023-2025" },
    { name: "Nanyang Technological University (NTU)", gain: 11, from: 26, to: 15, year: "2023-2025" }
  ];
  container.innerHTML = stars.map(s => `
    <div class="star-card">
      <div class="star-info">
        <strong>${s.name}</strong>
        <div style="font-size:12px; color:var(--muted2); margin-top:4px;">${s.year}</div>
      </div>
      <div class="star-gain">
        <span class="gain-badge">+${s.gain} ${dict.rank_up}</span>
        <div style="font-size:11px; margin-top:4px;">Rank ${s.from} → ${s.to}</div>
      </div>
    </div>
  `).join('');
}

function render(){
  const lang = localStorage.getItem("lang") || "ko";
  const dict = translations[lang];
  $("#loadingArea").style.display = "block";
  $("#empty").style.display = "none";
  $("#tbody").innerHTML = "";
  const list = applyFilters();
  const total = list.length;
  const maxPage = Math.max(1, Math.ceil(total / state.pageSize));
  state.page = Math.min(state.page, maxPage);
  const start = (state.page - 1) * state.pageSize;
  const pageItems = list.slice(start, state.page * state.pageSize);
  $("#pageNow").textContent = String(state.page);
  $("#pageMax").textContent = String(maxPage);
  $("#metaYear").textContent = "2025";
  $("#metaTotal").textContent = String(total);
  $("#metaShown").textContent = String(pageItems.length);
  $("#metaCount").textContent = `${dict.result_title} ${total.toLocaleString()}`;
  $("#resultTitle").textContent = `QS World Rankings 2025`;
  if (!pageItems.length){
    $("#loadingArea").style.display = "none";
    $("#empty").style.display = "block";
    return;
  }
  const tbody = $("#tbody");
  pageItems.forEach(it => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><span class="rank">#${it.rank}</span></td>
      <td><div style="font-weight:650; color:var(--text);">${escapeHTML(it.name)}</div></td>
      <td><span class="pill"><b>${escapeHTML(it.country)}</b></span></td>
      <td><span class="pill"><b>${it.score}</b></span></td>
    `;
    tbody.appendChild(tr);
  });
  $("#loadingArea").style.display = "none";
  updateSummary();
  renderPodium();
}

function escapeHTML(s){ return String(s ?? "").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;"); }

async function loadData(){
  buildYears();
  buildCountries();
  setSourceStatus(true, `QS 2025 데이터 동기화 완료`);
  render();
  renderRisingStars();
}

$("#btnApply").addEventListener("click", ()=>{ state.page = 1; render(); });
$("#btnReset").addEventListener("click", ()=>{
  state.q = ""; state.country = "__ALL__"; state.sort = "rank_asc"; state.page = 1;
  $("#q").value = ""; $("#country").value = "__ALL__"; $("#sort").value = "rank_asc";
  render();
});
$("#btnReload").addEventListener("click", loadData);
$("#q").addEventListener("input", (e)=>{ state.q = e.target.value; });
$("#q").addEventListener("keydown", (e)=>{ if (e.key === "Enter") { state.page = 1; render(); } });
$("#country").addEventListener("change", (e)=>{ state.country = e.target.value; state.page = 1; render(); });
$("#sort").addEventListener("change", (e)=>{ state.sort = e.target.value; state.page = 1; render(); });
$("#prev").addEventListener("click", ()=>{ state.page = Math.max(1, state.page - 1); render(); });
$("#next").addEventListener("click", ()=>{ state.page++; render(); });

window.addEventListener("keydown", (e)=>{
  if (e.key === "/" && document.activeElement?.tagName !== "INPUT"){
    e.preventDefault(); $("#q").focus();
  }
});

const themeToggle = $("#themeToggle");
const themeIcon = $("#themeIcon");
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  themeIcon.textContent = theme === "dark" ? "🌙" : "☀️";
}
themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
  setTheme(currentTheme === "dark" ? "light" : "dark");
});

setTheme(localStorage.getItem("theme") || "dark");
setLanguage(localStorage.getItem("lang") || "ko");
loadData();

/** Modal Logic */
function openModal(type) {
  const dict = translations[localStorage.getItem("lang") || "ko"];
  $("#modalTitle").textContent = type === "privacy" ? dict.policy_privacy : dict.policy_terms;
  $("#modalBody").textContent = type === "privacy" ? dict.privacy_content : dict.terms_content;
  $("#modalOverlay").classList.add("active");
  $("#modalContent").classList.add("active");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  $("#modalOverlay").classList.remove("active");
  $("#modalContent").classList.remove("active");
  document.body.style.overflow = "";
}
$("#openPrivacy").addEventListener("click", () => openModal("privacy"));
$("#openTerms").addEventListener("click", () => openModal("terms"));
$("#closeModal").addEventListener("click", closeModal);
$("#modalOverlay").addEventListener("click", closeModal);
$("#btnModalClose").addEventListener("click", closeModal);
