/**
 * 데이터 소스 (공개 Raw CSV)
 * - CWUR csv (world_rank,institution,country,score,year 등)
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

const $ = (s) => document.querySelector(s);

function setSourceStatus(loaded, msg){
  const box = $("#sourceBox");
  box.innerHTML = loaded
    ? `<div class="dot" style="animation:none; opacity:1;">
       </div>
       <div>
         <div style="color:var(--text); opacity:0.9; font-size:13px; font-weight:650;">데이터 준비 완료</div>
         <div style="font-size:12px;">${msg}</div>
       </div>`
    : `<div class="dot"></div>
       <div>
         <div style="color:var(--text); opacity:0.86; font-size:13px; font-weight:650;">데이터 불러오는 중…</div>
         <div style="font-size:12px;">${msg || "잠시만요"}</div>
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
  sel.innerHTML = `<option value="__ALL__">전체</option>`;
  countries.forEach(c=>{
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    sel.appendChild(opt);
  });
  state.country = "__ALL__";
  sel.value = "__ALL__";
}

function updateSummary(){
  const chips = $("#summaryChips");
  const parts = [];

  if (state.year) parts.push({k:"Year", v:String(state.year)});
  if (state.country !== "__ALL__") parts.push({k:"Country", v:state.country});
  if (state.q) parts.push({k:"Query", v:state.q});
  parts.push({k:"Sort", v: $("#sort").selectedOptions[0].textContent});
  parts.push({k:"Page", v: `${state.pageSize}/page`});

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
  $("#metaCount").textContent = `Top 1000 (필터 후 ${total.toLocaleString()}개)`;
  $("#metaNote").textContent = total ? ` · 현재 ${state.page}페이지` : "";

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
        <div style="margin-top:4px; color:var(--muted2); font-size:12px;">National rank: ${it.national_rank ?? "-"}</div>
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
  setSourceStatus(false, "공개 CSV를 가져오는 중…");
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

    setSourceStatus(true, `총 ${state.raw.length.toLocaleString()} rows 로드 완료 · 소스: CWUR CSV`);
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

// init
loadData();
