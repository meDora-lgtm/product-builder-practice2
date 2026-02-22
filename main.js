/**
 * i18n Translations
 */
const translations = {
  ko: {
    app_title: "세계 대학교 상위 1000 탐색기",
    app_desc: "연도 선택 · 검색 · 국가 필터 · 정렬 · 페이지로 세계 대학교 상위 1000개를 조회합니다",
    btn_reload: "데이터 새로고침",
    btn_reset: "필터 초기화",
    btn_apply: "조회",
    filter_title: "조회 조건",
    shortcut_enter: "단축키 Enter 조회",
    shortcut_search: "검색 포커스",
    data_notice: "공개 CSV 데이터를 불러와서 보여주는 데모 페이지입니다. (Top 1000 표시는 선택한 연도 기준)",
    label_search: "검색",
    label_search_hint: "학교명/국가",
    label_year: "연도",
    label_year_hint: "데이터 연도",
    label_country: "국가",
    label_country_hint: "선택",
    label_sort: "정렬",
    label_sort_hint: "기본: 세계랭킹",
    label_page: "페이지 당",
    label_page_hint: "표시 개수",
    label_current: "현재 조건",
    label_current_hint: "자동 요약",
    msg_loading: "데이터 불러오는 중…",
    msg_wait: "네트워크 상황에 따라 1~3초 걸릴 수 있어요",
    source_credit: "데이터 출처: CWUR 공개 CSV",
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
    footer_note: "* 이 페이지는 예시용이며, “최신 2025/2026 Top1000”을 쓰려면 별도 데이터 소스를 연결해야 합니다.",
    opt_all: "전체",
    sort_rank_asc: "세계랭킹 ↑",
    sort_rank_desc: "세계랭킹 ↓",
    sort_score_desc: "점수 ↓",
    sort_name_asc: "학교명 A→Z",
    msg_data_ready: "데이터 준비 완료",
    msg_render: "테이블을 렌더링 중…",
    national_rank: "국가 내 순위",
    label_partnership: "제휴 문의",
    label_partnership_hint: "Formspree",
    placeholder_name: "성함 / 기업명",
    placeholder_email: "이메일 주소",
    placeholder_message: "문의 내용을 입력해주세요",
    btn_send: "문의하기",
    comments_title: "댓글",
    label_ads: "광고",
    // 승인 최적화 문구 (고급화)
    about_title: "세계 명문대 조회 및 학술 정보 가이드",
    about_desc: "본 플랫폼은 전 세계 유명 대학교들의 학문적 성과와 글로벌 위상을 한눈에 파악하고, 교육 정보 조회를 수월하게 돕기 위해 구축된 전문 탐색 도구입니다. CWUR 데이터를 바탕으로 공신력 있는 랭킹 정보를 제공하며, 미래를 준비하는 학생들과 연구자들에게 최적화된 데이터 분석 환경을 제공합니다.",
    policy_privacy: "개인정보처리방침",
    policy_terms: "이용약관",
    privacy_content: "본 사이트는 사용자의 개인정보를 직접 수집하지 않습니다. 다만 광고 및 통계 분석을 위해 Google AdSense 및 Disqus의 쿠키가 사용될 수 있습니다.",
    terms_content: "제공되는 모든 순위 데이터는 참고용이며, 최신 정보는 각 교육 기관의 공식 발표를 기준으로 합니다.",
    copyright: "© 2026 World Uni Explorer. Empowering Global Education.",
    btn_close: "닫기"
  },
  en: {
    app_title: "World University Top 1000 Explorer",
    app_desc: "Explore top 1000 universities by year, search, country filter, sort, and pagination",
    btn_reload: "Reload Data",
    btn_reset: "Reset Filters",
    btn_apply: "Apply",
    filter_title: "Filters",
    shortcut_enter: "Press Enter to search",
    shortcut_search: "Focus search",
    data_notice: "Demo page using public CSV data. (Top 1000 based on selected year)",
    label_search: "Search",
    label_search_hint: "Name/Country",
    label_year: "Year",
    label_year_hint: "Data Year",
    label_country: "Country",
    label_country_hint: "Select",
    label_sort: "Sort",
    label_sort_hint: "Default: World Rank",
    label_page: "Per Page",
    label_page_hint: "Count",
    label_current: "Current Conditions",
    label_current_hint: "Auto Summary",
    msg_loading: "Loading data...",
    msg_wait: "May take 1-3 seconds depending on network",
    source_credit: "Data Source: CWUR Public CSV",
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
    footer_note: "* This is a demo. For latest 2025/2026 data, connect to a separate source.",
    opt_all: "All",
    sort_rank_asc: "Rank Asc",
    sort_rank_desc: "Rank Desc",
    sort_score_desc: "Score Desc",
    sort_name_asc: "Name A-Z",
    msg_data_ready: "Data Ready",
    msg_render: "Rendering table...",
    national_rank: "National rank",
    label_partnership: "Partnership",
    label_partnership_hint: "Formspree",
    placeholder_name: "Name / Company",
    placeholder_email: "Email Address",
    placeholder_message: "Enter your message",
    btn_send: "Send Message",
    comments_title: "Comments",
    label_ads: "AD",
    about_title: "About Project",
    about_desc: "This project provides a comprehensive explorer for the Top 1000 World University Rankings based on CWUR data. It aims to help students, researchers, and educators analyze global academic trends and institutional performance across different years and countries.",
    policy_privacy: "Privacy Policy",
    policy_terms: "Terms of Service",
    privacy_content: "We do not directly collect or store any personal user data. However, third-party services like Google AdSense and Disqus may use cookies for ad personalization and comment functionality.",
    terms_content: "Data provided on this site is for educational and informational purposes only. While we strive for accuracy, please consult official institutional sources for definitive information.",
    copyright: "© 2026 World Uni Explorer. All Rights Reserved."
  },
  ja: {
    app_title: "世界大学トップ1000エクスプローラー",
    app_desc: "年度選択、検索、国フィルタ、ソート、ページングで世界大学トップ1000を照会します",
    btn_reload: "데이터更新",
    btn_reset: "리셋",
    btn_apply: "適用",
    filter_title: "照会条件",
    shortcut_enter: "Enterで照회",
    shortcut_search: "検索フォーカス",
    data_notice: "公開CSV데이터を使用した데모페이지입니다.（トップ1000は選択年度基準）",
    label_search: "検索",
    label_search_hint: "大学名/国名",
    label_year: "年度",
    label_year_hint: "데이터年度",
    label_country: "国",
    label_country_hint: "選択",
    label_sort: "並び替え",
    label_sort_hint: "デフォルト: 世界順位",
    label_page: "表示件数",
    label_page_hint: "1ページあたり",
    label_current: "現在の条件",
    label_current_hint: "自動要約",
    msg_loading: "데이터を読み込み中...",
    msg_wait: "네트워크状況により1〜3秒かかる場合があります",
    source_credit: "데이터出典: CWUR 公開 CSV",
    result_title: "照会結果",
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
    footer_note: "* このページはデモ用です。最新の2025/2026データを使用するには別途ソースが必要です。",
    opt_all: "すべて",
    sort_rank_asc: "世界順位 ↑",
    sort_rank_desc: "世界順위 ↓",
    sort_score_desc: "スコア ↓",
    sort_name_asc: "大学名 A→Z",
    msg_data_ready: "準備完了",
    msg_render: "렌다링中...",
    national_rank: "国内順位",
    label_partnership: "提携お問い合わせ",
    label_partnership_hint: "Formspree",
    placeholder_name: "お名前 / 企業名",
    placeholder_email: "メールアドレス",
    placeholder_message: "お問い合わせ内容を入力してください",
    btn_send: "送信する",
    comments_title: "コメント",
    label_ads: "広告",
    about_title: "プロジェクトについて",
    about_desc: "このプロジェクトは、CWUR（Center for World University Rankings）のデータを活用し、世界中の大学の競争力や学術的成果を簡単に探索できるように設計されています。ユーザーは年度別の順位変動を確認し、国別のフィルタリングを通じて興味のある教育機関の情報を得ることができます。",
    policy_privacy: "プライバシーポリシー",
    policy_terms: "利用規約",
    privacy_content: "当サイトはユーザーの個人情報を直接収集または保存しません。ただし、Google AdSenseやDisqusなどの第三者サービスを通じて、広告のパーソナライズやコメント機能提供のためにクッキーが使用される場合があります。",
    terms_content: "当サイトで提供されるデータは教育目的の参照用です。正確性の確保に努めていますが、最新の公式情報を必ず確認してください。",
    copyright: "© 2026 World Uni Explorer. All Rights Reserved."
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
  buildCountries(); // Update "All" option in select
  render(); // Update labels in summary chips and table
});

/**
 * 데이터 소스 (공개 Raw CSV)
 */
const DATA_URL = "https://raw.githubusercontent.com/arnaudbenard/university-ranking/master/cwurData.csv";

// App state
const state = {
  raw: [],
  year: null,
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
    ? `<div class="dot" style="animation:none; opacity:1;">
       </div>
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

// Robust-ish CSV parser (handles quotes, commas in quotes)
function parseCSV(text){
  const rows = [];
  let i = 0, field = "", row = [], inQuotes = false;
  const pushField = () => { row.push(field); field = ""; };
  const pushRow = () => { rows.push(row); row = []; };

  while (i < text.length){
    const c = text[i];

    if (inQuotes){
      if (c === '"'){
        if (text[i+1] === '"'){ field += '"'; i += 2; continue; }
        inQuotes = false; i++; continue;
      } else {
        field += c; i++; continue;
      }
    } else {
      if (c === '"'){ inQuotes = true; i++; continue; }
      if (c === ","){ pushField(); i++; continue; }
      if (c === "\r"){ i++; continue; }
      if (c === "\n"){ pushField(); pushRow(); i++; continue; }
      field += c; i++; continue;
    }
  }
  // last
  if (field.length || row.length){
    pushField(); pushRow();
  }
  return rows;
}

function toNum(v){
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

function normalize(s){
  return (s || "").toLowerCase().trim();
}

function uniq(arr){
  return [...new Set(arr)];
}

function buildYears(){
  const years = uniq(state.raw.map(x => x.year)).sort((a,b)=>b-a);
  const sel = $("#year");
  sel.innerHTML = "";
  years.forEach(y=>{
    const opt = document.createElement("option");
    opt.value = String(y);
    opt.textContent = String(y);
    sel.appendChild(opt);
  });
  state.year = years[0] ?? null;
  sel.value = String(state.year ?? "");
}

function buildCountries(){
  const list = state.raw
    .filter(x => x.year === state.year && x.world_rank <= 1000)
    .map(x => x.country)
    .filter(Boolean);
  const countries = uniq(list).sort((a,b)=>a.localeCompare(b));
  const sel = $("#country");
  const lang = localStorage.getItem("lang") || "ko";
  const allText = translations[lang].opt_all;
  const prevVal = sel.value || "__ALL__";
  
  sel.innerHTML = `<option value="__ALL__">${allText}</option>`;
  countries.forEach(c=>{
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    sel.appendChild(opt);
  });
  sel.value = prevVal;
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
  parts.push({k:dict.page_label, v: `${state.pageSize}/page`});

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

  let list = state.raw.filter(x =>
    x.year === state.year &&
    x.world_rank !== null &&
    x.world_rank <= 1000
  );

  if (state.country !== "__ALL__"){
    list = list.filter(x => x.country === state.country);
  }

  if (q){
    list = list.filter(x => {
      const hay = normalize(`${x.institution} ${x.country}`);
      return hay.includes(q);
    });
  }

  // sort
  if (state.sort === "rank_asc"){
    list.sort((a,b)=>a.world_rank - b.world_rank);
  } else if (state.sort === "rank_desc"){
    list.sort((a,b)=>b.world_rank - a.world_rank);
  } else if (state.sort === "score_desc"){
    list.sort((a,b)=>(b.score ?? -1) - (a.score ?? -1) || (a.world_rank - b.world_rank));
  } else if (state.sort === "name_asc"){
    list.sort((a,b)=>String(a.institution).localeCompare(String(b.institution)));
  }

  return list;
}

function render(){
  const lang = localStorage.getItem("lang") || "ko";
  const dict = translations[lang];

  $("#loadingArea").style.display = "block";
  $("#empty").style.display = "none";
  $("#tbody").innerHTML = "";

  const list = applyFilters();
  const total = list.length;

  // pagination
  const maxPage = Math.max(1, Math.ceil(total / state.pageSize));
  state.page = Math.min(state.page, maxPage);
  const start = (state.page - 1) * state.pageSize;
  const end = start + state.pageSize;
  const pageItems = list.slice(start, end);

  $("#pageNow").textContent = String(state.page);
  $("#pageMax").textContent = String(maxPage);

  $("#metaYear").textContent = state.year ? String(state.year) : "-";
  $("#metaTotal").textContent = String(total);
  $("#metaShown").textContent = String(pageItems.length);
  $("#metaCount").textContent = `Top 1000 (${dict.result_title} ${total.toLocaleString()})`;
  $("#metaNote").textContent = total ? ` · ${state.page} / ${maxPage} ${dict.page_label}` : "";

  $("#resultTitle").textContent = `Top 1000 · ${state.year ?? "-"}`;

  if (!pageItems.length){
    $("#loadingArea").style.display = "none";
    $("#empty").style.display = "block";
    return;
  }

  const tbody = $("#tbody");
  for (const it of pageItems){
    const tr = document.createElement("tr");
    const scoreText = (it.score === null || it.score === undefined) ? "-" : (Math.round(it.score*100)/100).toFixed(2);

    tr.innerHTML = `
      <td><span class="rank">#${it.world_rank}</span></td>
      <td>
        <div style="font-weight:650; color:var(--text); opacity:0.94;">${escapeHTML(it.institution)}</div>
        <div style="margin-top:4px; color:var(--muted2); font-size:12px;">${dict.national_rank}: ${it.national_rank ?? "-"}</div>
      </td>
      <td><span class="pill"><b>${escapeHTML(it.country)}</b></span></td>
      <td><span class="pill"><b>${scoreText}</b> score</span></td>
    `;
    tbody.appendChild(tr);
  }

  $("#loadingArea").style.display = "none";
  updateSummary();
}

function escapeHTML(s){
  return String(s ?? "")
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

async function loadData(){
  const lang = localStorage.getItem("lang") || "ko";
  const dict = translations[lang];

  setSourceStatus(false, dict.msg_loading);
  try{
    const res = await fetch(DATA_URL, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();

    const rows = parseCSV(text);
    // header
    const header = rows[0].map(h => h.trim());
    const idx = (name) => header.indexOf(name);

    const iRank = idx("world_rank");
    const iInst = idx("institution");
    const iCountry = idx("country");
    const iNat = idx("national_rank");
    const iScore = idx("score");
    const iYear = idx("year");

    if ([iRank,iInst,iCountry,iYear].some(i => i < 0)){
      throw new Error("CSV 헤더가 예상과 다릅니다.");
    }

    const parsed = [];
    for (let r=1; r<rows.length; r++){
      const row = rows[r];
      if (!row || row.length < header.length) continue;

      const world_rank = toNum(row[iRank]);
      const year = toNum(row[iYear]);
      if (!world_rank || !year) continue;

      parsed.push({
        world_rank,
        institution: row[iInst] || "",
        country: row[iCountry] || "",
        national_rank: toNum(row[iNat]),
        score: toNum(row[iScore]),
        year
      });
    }

    state.raw = parsed;

    buildYears();
    buildCountries();

    // 초기 세팅
    state.page = 1;
    state.pageSize = Number($("#pageSize").value);
    state.sort = $("#sort").value;

    setSourceStatus(true, `총 ${state.raw.length.toLocaleString()} rows 로드 완료`);
    render();
  } catch (e){
    setSourceStatus(true, `로드 실패: ${e.message}`);
    $("#empty").style.display = "block";
    $("#empty").innerHTML = `데이터를 불러오지 못했어요 😿<br/>인터넷 연결을 확인하거나, 데이터 URL을 바꿔주세요.`;
  }
}

// events
$("#btnApply").addEventListener("click", ()=>{
  state.page = 1;
  buildCountries(); // year 변경 후 국가 리스트 업데이트
  render();
});

$("#btnReset").addEventListener("click", ()=>{
  state.q = "";
  state.country = "__ALL__";
  state.sort = "rank_asc";
  state.page = 1;
  state.pageSize = 50;

  $("#q").value = "";
  $("#country").value = "__ALL__";
  $("#sort").value = "rank_asc";
  $("#pageSize").value = "50";

  buildCountries();
  render();
});

$("#btnReload").addEventListener("click", loadData);

$("#q").addEventListener("input", (e)=>{ state.q = e.target.value; });
$("#q").addEventListener("keydown", (e)=>{
  if (e.key === "Enter"){
    state.page = 1;
    render();
  }
});

$("#year").addEventListener("change", (e)=>{
  state.year = Number(e.target.value);
  state.page = 1;
  buildCountries();
  render();
});

$("#country").addEventListener("change", (e)=>{
  state.country = e.target.value;
  state.page = 1;
  render();
});

$("#sort").addEventListener("change", (e)=>{
  state.sort = e.target.value;
  state.page = 1;
  render();
});

$("#pageSize").addEventListener("change", (e)=>{
  state.pageSize = Number(e.target.value);
  state.page = 1;
  render();
});

$("#prev").addEventListener("click", ()=>{
  state.page = Math.max(1, state.page - 1);
  render();
});
$("#next").addEventListener("click", ()=>{
  state.page = state.page + 1;
  render();
});

// shortcut: "/" focuses search
window.addEventListener("keydown", (e)=>{
  if (e.key === "/" && document.activeElement?.tagName !== "INPUT"){
    e.preventDefault();
    $("#q").focus();
  }
});

/**
 * Theme Toggle logic
 */
const themeToggle = $("#themeToggle");
const themeIcon = $("#themeIcon");

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  themeIcon.textContent = theme === "dark" ? "🌙" : "☀️";
}

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(newTheme);
});

// Init theme
const savedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
setTheme(savedTheme);

// Init language
const savedLang = localStorage.getItem("lang") || "ko";
setLanguage(savedLang);

// init
loadData();

/**
 * Modal Logic
 */
const modalOverlay = $("#modalOverlay");
const modalContent = $("#modalContent");
const modalTitle = $("#modalTitle");
const modalBody = $("#modalBody");

function openModal(type) {
  const lang = localStorage.getItem("lang") || "ko";
  const dict = translations[lang];
  
  if (type === "privacy") {
    modalTitle.textContent = dict.policy_privacy;
    modalBody.textContent = dict.privacy_content;
  } else {
    modalTitle.textContent = dict.policy_terms;
    modalBody.textContent = dict.terms_content;
  }
  
  modalOverlay.classList.add("active");
  modalContent.classList.add("active");
  document.body.style.overflow = "hidden"; // scroll lock
}

function closeModal() {
  modalOverlay.classList.remove("active");
  modalContent.classList.remove("active");
  document.body.style.overflow = "";
}

$("#openPrivacy").addEventListener("click", () => openModal("privacy"));
$("#openTerms").addEventListener("click", () => openModal("terms"));
$("#closeModal").addEventListener("click", closeModal);
$("#modalOverlay").addEventListener("click", closeModal);
$("#btnModalClose").addEventListener("click", closeModal);

/**
 * Fun Interaction: Visual feedback on Apply
 */
$("#btnApply").addEventListener("mousedown", () => {
  $("#btnApply").style.transform = "scale(0.95)";
});
$("#btnApply").addEventListener("mouseup", () => {
  $("#btnApply").style.transform = "scale(1)";
});
