/**
 * Translations & Content Data
 */
const translations = {
  ko: {
    app_title: "World University Explorer 2025",
    app_desc: "전 세계 상위 1000개 명문 대학교의 최신 순위와 성과 데이터를 심층 분석합니다.",
    nav_home: "홈",
    nav_insights: "유학 인사이트",
    nav_dashboard: "내 보관함",
    filter_title: "데이터 분석 조건",
    label_search: "대학교 검색",
    podium_title: "TOP 3 명예의 전당",
    result_title: "조회 결과",
    btn_compare: "비교하기",
    dash_compare: "비교 보관함",
    dash_deadline: "마감일 일정",
    btn_match_me: "AI 대학 매칭",
    policy_privacy: "개인정보처리방침",
    policy_terms: "서비스 이용약관",
    about_title: "사이트 소개",
    msg_empty: "저장된 항목이 없습니다.",
    btn_run_match: "분석 시작",
    match_title: "AI 대학 추천",
    label_interest: "관심분야",
    th_rank: "순위",
    th_uni: "대학교",
    th_country: "국가",
    th_score: "점수",
    opt_all: "전체 국가",
    btn_back: "뒤로가기",
    detail_history: "학교 역사 및 주요 특징",
    detail_career: "졸업 후 진로 및 평판",
    btn_compare_all: "선택 대학 비교 분석",
    msg_added_compare: "비교함에 추가되었습니다.",
    msg_removed_compare: "비교함에서 제거되었습니다.",
    msg_compare_limit: "최대 4개 대학까지 비교 가능합니다.",
    msg_saved_deadline: "마감일이 내 보관함에 저장되었습니다.",
    privacy_content: "World Uni Explorer는 사용자의 개인정보를 소중히 다룹니다. 본 사이트는 쿠키를 통해 서비스를 개선하며, 상세 내용은 구글의 정책을 따릅니다.",
    terms_content: "본 서비스의 데이터는 참고용이며, 정확한 정보는 각 대학의 공식 발표를 확인하시기 바랍니다.",
    about_content: "World University Explorer는 전 세계 학생들과 연구자들에게 공신력 있는 대학 데이터를 제공하기 위해 설립되었습니다. 우리는 단순한 순위를 넘어, 실질적인 유학 전략과 학교별 심층 정보를 제공함으로써 최선의 교육적 선택을 돕고자 합니다.",
    btn_save_deadline: "마감일 저장",
    share_text: "나에게 딱 맞는 대학을 찾았어요!",
    msg_shared: "공유 링크가 클립보드에 복사되었습니다.",
    match_result_title: "당신을 위한 추천 대학",
    dday_prefix: "지원 마감까지",
    sort_rank_asc: "순위 높은 순 ↑",
    sort_name_asc: "이름 순 A-Z",
    label_year: "연도",
    label_sort: "정렬",
    label_page: "표시 수량"
  },
  en: {
    app_title: "World University Explorer 2025",
    app_desc: "Global university data analysis and admissions insights platform.",
    nav_home: "Home",
    nav_insights: "Study Insights",
    nav_dashboard: "My Dashboard",
    filter_title: "Data Filters",
    label_search: "Search Universities",
    podium_title: "Hall of Fame: Top 3",
    result_title: "Results",
    btn_compare: "Compare",
    dash_compare: "Comparison Box",
    dash_deadline: "Application Deadlines",
    btn_match_me: "AI Matching",
    policy_privacy: "Privacy Policy",
    policy_terms: "Terms of Service",
    about_title: "About Us",
    msg_empty: "No items saved yet.",
    btn_run_match: "Start Analysis",
    match_title: "AI Recommendation",
    label_interest: "Interest",
    th_rank: "Rank",
    th_uni: "University",
    th_country: "Country",
    th_score: "Score",
    opt_all: "All Countries",
    btn_back: "Back",
    detail_history: "History & Features",
    detail_career: "Career & Reputation",
    btn_compare_all: "Compare Selected",
    msg_added_compare: "Added to comparison.",
    msg_removed_compare: "Removed from comparison.",
    msg_compare_limit: "You can compare up to 4 universities.",
    msg_saved_deadline: "Deadline saved to your dashboard.",
    privacy_content: "Your privacy is important to us. We use cookies to improve your experience.",
    terms_content: "Data provided is for informational purposes only. Please verify with official sources.",
    about_content: "World University Explorer provides reliable university data to students and researchers worldwide.",
    btn_save_deadline: "Save Deadline",
    share_text: "I found my perfect university match!",
    msg_shared: "Link copied to clipboard.",
    match_result_title: "Recommended for You",
    dday_prefix: "Days left:",
    sort_rank_asc: "Rank Asc ↑",
    sort_name_asc: "Name A-Z",
    label_year: "Year",
    label_sort: "Sort",
    label_page: "Per Page"
  }
};

const ARTICLES = [
  {
    id: "toefl-90-schools",
    title: "토플 90점으로 지원 가능한 해외 명문대 리스트",
    excerpt: "고득점 토플 성적이 없어도 도전할 수 있는 세계 100위권 명문 대학교들을 소개합니다.",
    content: `
      <p>많은 학생들이 해외 명문대 진학을 꿈꾸지만, 토플 100점 이상의 고득점 장벽에 부딪히곤 합니다. 하지만 전략적으로 접근한다면 90점 수준의 점수로도 충분히 세계적인 교육을 제공하는 대학에 합격할 수 있습니다.</p>
      <h3>1. 호주 멜버른 대학교 (University of Melbourne)</h3>
      <p>호주 최고의 명문대로 꼽히는 멜버른 대학은 일부 전공의 경우 토플 79~90점 사이의 점수를 요구합니다. 특히 연구 중심의 학풍과 높은 취업률로 유명합니다.</p>
      <h3>2. 영국 버밍엄 대학교 (University of Birmingham)</h3>
      <p>러셀 그룹의 일원인 버밍엄 대학은 탄탄한 교육 커리큘럼을 자랑하며, 국제 학생들에게 비교적 유연한 영어 성적 기준을 제시합니다.</p>
      <h3>3. 미국 주립 대학교들</h3>
      <p>퍼듀 대학교, 위스콘신 대학교 등 상위권 주립대 중 상당수가 80~90점대의 점수로도 지원이 가능하며, 입학 후 영어 집중 과정을 통해 보완할 수 있는 기회를 제공합니다.</p>
    `,
    author: "World Uni Insights",
    date: "2026-02-24"
  },
  {
    id: "scholarship-guide",
    title: "미국 대학 장학금 100% 받는 방법 (Need-Blind vs Need-Aware)",
    excerpt: "경제적 부담 없이 유학을 떠날 수 있는 재정 보조(Financial Aid) 시스템 완벽 가이드.",
    content: `
      <p>미국 대학의 학비는 전 세계에서 가장 비싼 편에 속하지만, 그만큼 장학금 제도도 매우 발달해 있습니다. 유학생도 받을 수 있는 재정 보조 시스템을 이해하는 것이 첫걸음입니다.</p>
      <h3>Need-Blind 정책이란?</h3>
      <p>학생의 재정 상태를 입학 심사에 전혀 반영하지 않는 정책입니다. 하버드, 예일, MIT 등 최상위권 대학들이 이 정책을 고수하며, 합격만 한다면 가족의 소득 수준에 따라 학비 전액을 지원받을 수 있습니다.</p>
      <h3>CSS Profile 준비하기</h3>
      <p>미국 대학 장학금을 신청하기 위해서는 연방 정부의 FAFSA 외에도 사립대들이 주로 사용하는 CSS Profile을 꼼꼼히 작성해야 합니다. 부모님의 자산과 소득을 입증하는 과정이 필수적입니다.</p>
    `,
    author: "Edu Finance Expert",
    date: "2026-02-20"
  }
];

const RANKING_HISTORY = {
  "Massachusetts Institute of Technology (MIT)": [1, 1, 1, 1, 1],
  "Harvard University": [3, 5, 5, 4, 4],
  "University of Oxford": [5, 2, 4, 3, 3],
  "Stanford University": [2, 3, 3, 5, 6],
  "University of Melbourne": [41, 37, 33, 33, 13],
  "Imperial College London": [8, 7, 6, 6, 2],
  "Seoul National University (SNU)": [37, 36, 29, 41, 31],
  "University of Tokyo": [24, 23, 23, 28, 32]
};

/**
 * Data Generation: 1000 Universities
 */
function generateUniversityData() {
  const baseData = [
    {rank:1, name:"Massachusetts Institute of Technology (MIT)", country:"United States", score:100, tuition: 57986, acceptance: "4%", students: 11934, deadline: "2026-01-01", toefl: 100, focus: "sci"},
    {rank:2, name:"Imperial College London", country:"United Kingdom", score:98.5, tuition: 41750, acceptance: "14%", students: 19965, deadline: "2026-01-15", toefl: 100, focus: "sci"},
    {rank:3, name:"University of Oxford", country:"United Kingdom", score:96.9, tuition: 39010, acceptance: "17%", students: 24515, deadline: "2025-10-15", toefl: 110, focus: "hum"},
    {rank:4, name:"Harvard University", country:"United States", score:96.8, tuition: 54002, acceptance: "3.4%", students: 22947, deadline: "2026-01-01", toefl: 105, focus: "hum"},
    {rank:5, name:"University of Cambridge", country:"United Kingdom", score:96.7, tuition: 43000, acceptance: "21%", students: 23247, deadline: "2025-10-15", toefl: 110, focus: "sci"},
    {rank:6, name:"Stanford University", country:"United States", score:96.1, tuition: 56169, acceptance: "3.9%", students: 16914, deadline: "2026-01-05", toefl: 100, focus: "sci"},
    {rank:7, name:"ETH Zurich", country:"Switzerland", score:93.9, tuition: 1600, acceptance: "27%", students: 22200, deadline: "2026-04-30", toefl: 100, focus: "sci"},
    {rank:8, name:"National University of Singapore (NUS)", country:"Singapore", score:93.7, tuition: 30000, acceptance: "5%", students: 30000, deadline: "2026-02-28", toefl: 95, focus: "sci"},
    {rank:9, name:"UCL", country:"United Kingdom", score:91.6, tuition: 35000, acceptance: "30%", students: 42000, deadline: "2026-01-26", toefl: 100, focus: "hum"},
    {rank:10, name:"California Institute of Technology (Caltech)", country:"United States", score:90.9, tuition: 58680, acceptance: "6.4%", students: 2233, deadline: "2026-01-03", toefl: 100, focus: "sci"},
    {rank:13, name:"University of Melbourne", country:"Australia", score:88.9, tuition: 32000, acceptance: "70%", students: 52000, deadline: "2026-06-30", toefl: 80, focus: "hum"},
    {rank:31, name:"Seoul National University (SNU)", country:"South Korea", score:82.4, tuition: 6000, acceptance: "15%", students: 28000, deadline: "2025-09-10", toefl: 85, focus: "sci"},
    {rank:32, name:"University of Tokyo", country:"Japan", score:82.1, tuition: 5000, acceptance: "34%", students: 27000, deadline: "2026-01-20", toefl: 80, focus: "sci"}
  ];

  const countries = ["United States", "United Kingdom", "South Korea", "Japan", "Germany", "France", "Canada", "Australia", "China", "Singapore", "Switzerland"];
  const focuses = ["sci", "hum", "bus"];
  const suffixes = ["University", "Institute of Technology", "College", "State University", "National University"];
  
  const fullData = [...baseData];
  const existingRanks = new Set(baseData.map(u => u.rank));

  for (let i = 1; i <= 1000; i++) {
    if (existingRanks.has(i)) continue;
    
    const country = countries[Math.floor(Math.random() * countries.length)];
    const focus = focuses[Math.floor(Math.random() * focuses.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    const name = `Regional ${country} ${suffix} #${i}`;
    
    fullData.push({
      rank: i,
      name: name,
      country: country,
      score: (100 - (i * 0.08)).toFixed(1),
      year: 2025,
      tuition: Math.floor(Math.random() * 40000) + 5000,
      acceptance: (Math.random() * 40 + 5).toFixed(1) + "%",
      students: Math.floor(Math.random() * 30000) + 5000,
      deadline: `2026-0${Math.floor(Math.random()*5)+1}-01`,
      toefl: Math.floor(Math.random() * 20) + 80,
      focus: focus
    });
  }
  
  return fullData.sort((a,b) => a.rank - b.rank);
}

const $ = (s) => document.querySelector(s);
let currentChart = null;

const state = {
  raw: generateUniversityData(),
  lang: localStorage.getItem("lang") || "ko",
  compareList: JSON.parse(localStorage.getItem("compareList") || "[]"),
  savedDeadlines: JSON.parse(localStorage.getItem("savedDeadlines") || "[]"),
  filters: { q: "", country: "__ALL__", sort: "rank_asc", page: 1, pageSize: 50 }
};

function saveState() {
  localStorage.setItem("compareList", JSON.stringify(state.compareList));
  localStorage.setItem("savedDeadlines", JSON.stringify(state.savedDeadlines));
}

function handleRoute() {
  const hash = window.location.hash.replace("#", "");
  const views = document.querySelectorAll(".view");
  const navItems = document.querySelectorAll(".nav-item");
  views.forEach(v => v.classList.remove("active"));
  navItems.forEach(n => n.classList.remove("active"));

  if (!hash || hash === "" || hash === "home") {
    $("#homeView").classList.add("active");
    $(`.nav-item[data-view="home"]`)?.classList.add("active");
    renderHome();
  } else if (hash.startsWith("uni/")) {
    const uniName = decodeURIComponent(hash.split("/")[1]);
    $("#detailView").classList.add("active");
    renderDetail(uniName);
  } else if (hash === "insights") {
    $("#insightsView").classList.add("active");
    $(`.nav-item[data-view="insights"]`)?.classList.add("active");
    renderInsights();
  } else if (hash.startsWith("article/")) {
    const articleId = hash.split("/")[1];
    $("#articleDetailView").classList.add("active");
    renderArticle(articleId);
  } else if (hash === "dashboard") {
    $("#dashboardView").classList.add("active");
    $(`.nav-item[data-view="dashboard"]`)?.classList.add("active");
    renderDashboard();
  } else if (hash === "privacy" || hash === "terms" || hash === "about") {
    $(`#${hash}View`)?.classList.add("active");
    renderPolicies(hash);
  }
}

function renderHome() {
  const list = applyFilters();
  const tbody = $("#tbody");
  tbody.innerHTML = "";
  const start = (state.filters.page - 1) * state.filters.pageSize;
  const items = list.slice(start, start + state.filters.pageSize);

  items.forEach(it => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><span class="rank">#${it.rank}</span></td>
      <td><a href="#uni/${encodeURIComponent(it.name)}" style="font-weight:700; color:var(--primary);">${it.name}</a></td>
      <td>${it.country}</td>
      <td>
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <b>${it.score}</b>
          <button class="icon-btn" onclick="toggleCompare('${it.name.replace(/'/g, "\\'")}')">${state.compareList.includes(it.name) ? '✅' : '➕'}</button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });

  $("#pageNow").textContent = state.filters.page;
  const maxPage = Math.ceil(list.length / state.filters.pageSize) || 1;
  $("#pageMax").textContent = maxPage;
  $("#compareCount").textContent = state.compareList.length;
  $("#btnCompare").style.display = state.compareList.length > 0 ? "block" : "none";
  renderPodium();
}

function renderDetail(name) {
  const uni = state.raw.find(u => u.name === name);
  if (!uni) return;
  $("#uniPageName").textContent = uni.name;
  $("#uniPageRank").textContent = `#${uni.rank}`;
  $("#uniPageCountry").textContent = uni.country;
  $("#uniPageTuition").textContent = `$${(uni.tuition || 0).toLocaleString()}`;
  $("#uniPageAcceptance").textContent = uni.acceptance || "-";
  $("#uniPageStudents").textContent = (uni.students || 0).toLocaleString();
  $("#uniPageToefl").textContent = uni.toefl || "80+";
  renderChart(uni.name);
}

function renderInsights() {
  const container = $("#articleList");
  container.innerHTML = ARTICLES.map(a => `
    <div class="article-card" onclick="location.hash='article/${a.id}'">
      <h3>${a.title}</h3>
      <p>${a.excerpt}</p>
    </div>
  `).join("");
}

function renderArticle(id) {
  const art = ARTICLES.find(a => a.id === id);
  if (!art) return;
  $("#articleTitle").textContent = art.title;
  $("#articleContent").innerHTML = art.content;
}

function renderDashboard() {
  const compList = $("#dashCompareList");
  const dict = translations[state.lang];
  compList.innerHTML = state.compareList.length === 0 ? `<p>${dict.msg_empty}</p>` : "";
  state.compareList.forEach(name => {
    const div = document.createElement("div");
    div.className = "list-item";
    div.innerHTML = `<span>${name}</span> <button class="btn sm" onclick="toggleCompare('${name.replace(/'/g, "\\'")}')">Remove</button>`;
    compList.appendChild(div);
  });

  const deadList = $("#dashDeadlineList");
  deadList.innerHTML = state.savedDeadlines.length === 0 ? `<p>${dict.msg_empty}</p>` : "";
  state.savedDeadlines.forEach(item => {
    const div = document.createElement("div");
    div.className = "list-item";
    div.innerHTML = `<div><strong>${item.name}</strong><br><small>${item.date}</small></div> <button class="btn sm" onclick="removeDeadline('${item.name.replace(/'/g, "\\'")}')">Remove</button>`;
    deadList.appendChild(div);
  });
}

function renderPolicies(type) {
  const dict = translations[state.lang];
  const priv = $("#privacyContentText");
  const terms = $("#termsContentText");
  const about = $("#aboutContentText");
  if (type === "privacy" && priv) priv.innerHTML = `<p>${dict.privacy_content}</p>`;
  if (type === "terms" && terms) terms.innerHTML = `<p>${dict.terms_content}</p>`;
  if (type === "about" && about) about.innerHTML = `<p>${dict.about_content}</p>`;
}

function applyFilters() {
  let list = [...state.raw];
  const q = state.filters.q.toLowerCase();
  if (state.filters.country !== "__ALL__") list = list.filter(x => x.country === state.filters.country);
  if (q) list = list.filter(x => x.name.toLowerCase().includes(q) || x.country.toLowerCase().includes(q));
  if (state.filters.sort === "name_asc") list.sort((a,b)=>a.name.localeCompare(b.name));
  else list.sort((a,b)=>a.rank - b.rank);
  return list;
}

function toggleCompare(name) {
  const idx = state.compareList.indexOf(name);
  if (idx > -1) state.compareList.splice(idx, 1);
  else if (state.compareList.length < 4) state.compareList.push(name);
  saveState();
  renderHome();
  if (window.location.hash === "#dashboard") renderDashboard();
}

function removeDeadline(name) {
  state.savedDeadlines = state.savedDeadlines.filter(d => d.name !== name);
  saveState();
  renderDashboard();
}

function saveDeadline() {
  const name = $("#uniPageName").textContent;
  const uni = state.raw.find(u => u.name === name);
  if (uni && !state.savedDeadlines.find(d => d.name === name)) {
    state.savedDeadlines.push({ name: uni.name, date: uni.deadline });
    saveState();
    alert(translations[state.lang].msg_saved_deadline);
  }
}

function renderChart(name) {
  const canvas = $("#rankingChart");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (currentChart) currentChart.destroy();
  const history = RANKING_HISTORY[name] || [Math.floor(Math.random()*10)+10, Math.floor(Math.random()*10)+8, Math.floor(Math.random()*10)+5, Math.floor(Math.random()*10)+2, Math.floor(Math.random()*10)+1];
  currentChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2021', '2022', '2023', '2024', '2025'],
      datasets: [{ label: 'Rank', data: history, borderColor: '#00dcff', fill: false }]
    },
    options: { scales: { y: { reverse: true, min: 1 } } }
  });
}

function renderPodium() {
  const podium = $("#podium");
  if (!podium) return;
  const top3 = [...state.raw].slice(0,3);
  podium.innerHTML = top3.map(u => `
    <div class="podium-step" onclick="location.hash='uni/${encodeURIComponent(u.name)}'" style="cursor:pointer; text-align:center; padding:10px; background:var(--card2); border-radius:12px; border:1px solid var(--line); flex:1;">
      <div style="font-size:24px;">${u.rank === 1 ? '🥇' : u.rank === 2 ? '🥈' : '🥉'}</div>
      <div style="font-size:11px; font-weight:700;">${u.name.split('(')[0]}</div>
    </div>
  `).join("");
}

function openCompareModal() {
  const modal = $("#compareModal");
  const table = $("#compareTable");
  modal.classList.add("active");
  $("#modalOverlay").classList.add("active");
  const unis = state.compareList.map(name => state.raw.find(u => u.name === name));
  let html = `<tr><th>Metric</th>${unis.map(u => `<th>${u.name.split('(')[0]}</th>`).join('')}</tr>`;
  const rows = [{ l: "Rank", k: "rank" }, { l: "Tuition", k: "tuition" }, { l: "Acceptance", k: "acceptance" }];
  rows.forEach(r => { html += `<tr><td>${r.l}</td>${unis.map(u => `<td>${u[r.k]}</td>`).join('')}</tr>`; });
  table.innerHTML = html;
}

function shareContent() {
  navigator.clipboard.writeText(window.location.href).then(() => alert(translations[state.lang].msg_shared));
}

// Event Listeners
window.addEventListener("hashchange", handleRoute);
window.addEventListener("load", () => {
  initFilters();
  handleRoute();
  setLanguage(state.lang);
  buildCountries();
  $("#langSelect").value = state.lang;
});

function initFilters() {
  const years = $("#year");
  years.innerHTML = `<option value="2025">2025</option>`;
  const sort = $("#sort");
  sort.innerHTML = `
    <option value="rank_asc" data-i18n="sort_rank_asc">순위 높은 순</option>
    <option value="name_asc" data-i18n="sort_name_asc">이름 순</option>
  `;
  const size = $("#pageSize");
  size.innerHTML = `
    <option value="25">25</option>
    <option value="50">50</option>
    <option value="100">100</option>
    <option value="200">200</option>
    <option value="500">500</option>
  `;
  size.value = state.filters.pageSize;
}

function setLanguage(lang) {
  const dict = translations[lang] || translations.en;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
}

function buildCountries() {
  const countries = [...new Set(state.raw.map(u => u.country))].sort();
  const sel = $("#country");
  sel.innerHTML = `<option value="__ALL__">${translations[state.lang].opt_all}</option>`;
  countries.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c; opt.textContent = c;
    sel.appendChild(opt);
  });
}

$("#q").addEventListener("input", (e) => { state.filters.q = e.target.value; state.filters.page = 1; renderHome(); });
$("#country").addEventListener("change", (e) => { state.filters.country = e.target.value; state.filters.page = 1; renderHome(); });
$("#sort").addEventListener("change", (e) => { state.filters.sort = e.target.value; renderHome(); });
$("#pageSize").addEventListener("change", (e) => { state.filters.pageSize = Number(e.target.value); state.filters.page = 1; renderHome(); });

$("#prev").addEventListener("click", () => { if (state.filters.page > 1) { state.filters.page--; renderHome(); } });
$("#next").addEventListener("click", () => {
  const list = applyFilters();
  if (state.filters.page < Math.ceil(list.length / state.filters.pageSize)) { state.filters.page++; renderHome(); }
});

$("#btnMatchMe").addEventListener("click", () => { $("#matchMeModal").classList.add("active"); $("#modalOverlay").classList.add("active"); });
$("#btnSaveDeadline")?.addEventListener("click", saveDeadline);
$("#btnShareUni")?.addEventListener("click", shareContent);
$("#btnCompare").addEventListener("click", openCompareModal);

document.querySelectorAll(".close-modal-btn").forEach(b => b.addEventListener("click", () => {
  document.querySelectorAll(".modal-content").forEach(m => m.classList.remove("active"));
  $("#modalOverlay").classList.remove("active");
}));

$("#btnRunMatch").addEventListener("click", () => {
  const interest = $("#matchInterest").value;
  const filtered = state.raw.filter(u => u.focus === interest).slice(0, 10);
  $("#matchList").innerHTML = filtered.map(u => `<div class="list-item" onclick="location.hash='uni/${encodeURIComponent(u.name)}'"><span>${u.name}</span> <b>#${u.rank}</b></div>`).join("");
  $("#matchResults").style.display = "block";
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
