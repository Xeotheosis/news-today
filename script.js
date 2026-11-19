/* =====================================================================
   THE GIRLFRIEND APPRECIATION INDEX™ — script.js
   ---------------------------------------------------------------------
   ✏️  EVERYTHING YOU'D WANT TO PERSONALISE LIVES IN `CONFIG` BELOW.
   You shouldn't need to touch index.html or the rest of this file.

   Placeholders you can use inside any text:
     {name}      → girlfriendName            e.g. "Gio"
     {NAME}      → girlfriendName in CAPS     e.g. "GIO"
     {nickname}  → nickname
     {me}        → yourName
     {days}      → days since relationshipStart
   ===================================================================== */

const CONFIG = {
  /* ----- WHO'S WHO ------------------------------------------------- */
  girlfriendName: "Gio",
  nickname: "Gio",                    // e.g. "bubu", "baby"
  yourName: "Andrei",                 // shown in the footer
  // Either an exact date ("2025-10-20") or an approximate number of days ("± 30 days").
  // The approximate form is shown as-is (e.g. "± 30") wherever the day count appears.
  relationshipStart: "± 30 days",

  /* ----- OPENING SCREEN -------------------------------------------- */
  opening: {
    headline: "{NAME} IS FEELING DOWN!",
    subhead: "IMMEDIATE CHEER-UP PROTOCOL INITIATED.",
    message: "An urgent emotional support intervention has been requested. Our research department has assembled an extensive collection of scientific evidence proving that you are, in fact, absolutely wonderful."
  },

  /* ----- LOADING SEQUENCE ------------------------------------------ */
  loading: {
    steps: [
      "Initialising girlfriend analysis...",
      "Calibrating cuteness sensors...",
      "Measuring smile frequency...",
      "Consulting independent experts (me)...",
      "Analysing affection distribution...",
      "Calculating astronomical levels of thiccness...",
      "Finalising scientific conclusions..."
    ],
    stepDelayMs: 650,
    done: "ANALYSIS COMPLETE. RESULTS ARE EXTREMELY PROMISING."
  },

  /* ----- DASHBOARD HEADER ------------------------------------------ */
  dashboard: {
    title: "THE GIRLFRIEND APPRECIATION INDEX™",
    intro: "An independently conducted investigation into why you're so wonderful."
  },

  // Scrolling "stock ticker" under the nav bar
  ticker: [
    { label: "CUTENESS", value: "▲ 4.2%" },
    { label: "{NAME}/USD", value: "PRICELESS" },
    { label: "ADORATION RESERVES", value: "▲ UNLIMITED" },
    { label: "SMILE INDEX", value: "▲ ALL-TIME HIGH" },
    { label: "KISS FUTURES", value: "▲ BULLISH" },
    { label: "MENACE LEVEL", value: "▲ AFFECTIONATE" },
    { label: "BAD DAYS", value: "▼ TEMPORARY" },
    { label: "BOYFRIEND OBJECTIVITY", value: "▼ 0.00%" }
  ],

  // Four headline stats under the title. Use "{days}" for days together.
  kpis: [
    { label: "Days of research", value: "{days}", delta: "▲ every day" },
    { label: "Smiles recorded", value: "∞", delta: "▲ statistically significant" },
    { label: "Confidence level", value: "100%", delta: "± 0% margin of error" },
    { label: "Wonderfulness", value: "MAX", delta: "▲ verified" }
  ],

  /* ----- CHARTS ---------------------------------------------------- */
  charts: {
    affection: {
      title: "Distribution of My Affection",
      labels: ["Thinking about you", "Wanting to kiss you", "Missing you", "Admiring you", "Pretending to be productive"],
      values: [35, 25, 20, 15, 5],
      centerTop: "100%+",
      centerBottom: "OF MY ATTENTION",
      caption: "Percentages may exceed 100% on days when you're particularly cute."
    },
    top10: {
      title: "Top 10 Things I Like About You",
      labels: ["Your calm allure", "Your shredded back", "Your top chef skills", "Your cat rescuing stories", "Your intelligence",
               "The way you treat me", "Your little quirks", "Your sense of humour", "Your kinkiness", "You in yoga pants"],
      // Scores out of 100. Anything above 100 breaks the chart (on purpose).
      values: [98, 97, 96, 97, 95, 98, 96, 95, 97, 99999],
      overflowLabel: "∞  OFF THE CHART ➜",
      caption: "Ranking methodology: extensive research, personal experience, and hopeless, unconditional adoration."
    },
    adorationOverTime: {
      title: "My Adoration For You Over Time",
      xAxisTitle: "Time since meeting",
      yAxisTitle: "Amount of adoration",
      points: 12,                       // number of data points drawn
      warning: "WARNING: ADORATION LEVELS HAVE EXCEEDED THE MAXIMUM MEASURABLE THRESHOLD.",
      annotation: "Scientists have lost the ability to measure this."
    },
    cuteness: {
      title: "Girlfriend Cuteness Distribution",
      labels: ["Face", "Personality", "Voice", "Being an absolute menace (affectionately)"],
      values: [40, 25, 20, 15],
      caption: "All measurements have been verified by an extremely biased research department."
    }
  },

  /* ----- THICCNESS ANALYTICS DIVISION ------------------------------ */
  thicc: {
    title: "THE THICCNESS ANALYTICS DIVISION",
    indexLabel: "THICCNESS INDEX",
    index: 9999999,
    classification: "ASTRONOMICALLY THICC",
    scaleCapacity: 412,                // "% of scale capacity used"
    readings: [
      { label: "Equipment status", value: "⚠ overwhelmed" },
      { label: "Peer review", value: "✓ unanimous" },
      { label: "Margin of error", value: "none" },
      { label: "Gravitational pull", value: "noticeable" }
    ],
    conclusion: "Current measurement equipment is insufficient to accurately quantify the subject.",
    disclaimer: "Further research is recommended. Preferably conducted in person."
  },

  /* ----- MISSING YOU ANALYTICS ------------------------------------- */
  missingYou: {
    title: "Missing You Analytics",
    durationMs: 4200,
    statuses: ["Monitoring…", "Missing you slightly…", "Missing you a normal amount…", "Missing you quite a lot…", "Missing you A LOT…", "CRITICAL MISSING LEVELS"],
    errorTitle: "ERROR: LIMIT EXCEEDED",
    errorText: "MissingYou.exe has stopped responding due to excessive affection."
  },

  /* ----- CLASSIFIED INTELLIGENCE (the sincere bit) ----------------- */
  classified: {
    title: "CLASSIFIED INTELLIGENCE: THINGS YOU SHOULD KNOW.",
    intro: "No charts in this section. Just a few things that are true.",
    messages: [
      "You make me feel stronger.",
      "You don't have to be happy all the time.",
      "You're allowed to have bad days.",
      "You make me want to be a better person.",
      "You are adored, even on the days you don't feel particularly adorable."
    ]
  },

  footer: "© The Research Department of {me}. All findings are final and non-negotiable. ♡"
};

/* =====================================================================
   ⚙️  ENGINE ROOM — you shouldn't need to edit below this line.
   ===================================================================== */

(() => {
  "use strict";

  /* ---------- Utilities ---------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const sleep = (ms) => new Promise((r) => setTimeout(r, REDUCED ? Math.min(ms, 150) : ms));

  // relationshipStart can be "YYYY-MM-DD" or an approximation like "± 30 days"
  const approxMatch = String(CONFIG.relationshipStart).match(/^\s*(±|\+\/-|~)?\s*(\d+)\s*days?\s*$/i);
  const startDate = approxMatch
    ? new Date(Date.now() - Number(approxMatch[2]) * 86400000)
    : new Date(CONFIG.relationshipStart + "T00:00:00");
  const daysTogether = (() => {
    const d = Math.floor((Date.now() - startDate.getTime()) / 86400000);
    return Number.isFinite(d) && d > 0 ? d : 1;
  })();
  const daysLabel = approxMatch && approxMatch[1]
    ? `± ${daysTogether.toLocaleString("en-GB")}`
    : daysTogether.toLocaleString("en-GB");

  /** Replace {name}, {NAME}, {nickname}, {me}, {days} placeholders. */
  const fmt = (str) => String(str ?? "")
    .replaceAll("{NAME}", CONFIG.girlfriendName.toUpperCase())
    .replaceAll("{name}", CONFIG.girlfriendName)
    .replaceAll("{nickname}", CONFIG.nickname)
    .replaceAll("{me}", CONFIG.yourName)
    .replaceAll("{days}", daysLabel);

  /** Read a dotted path like "charts.top10.title" from CONFIG. */
  const get = (path) => path.split(".").reduce((o, k) => (o == null ? o : o[k]), CONFIG);

  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };
  const esc = (s) => fmt(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------- Fill all [data-tpl] text from CONFIG ---------- */
  function applyTemplates() {
    $$("[data-tpl]").forEach((node) => {
      const v = get(node.dataset.tpl);
      if (typeof v === "string") node.textContent = fmt(v);
    });
    const today = new Date();
    $("#incident-date").textContent = today.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }).toUpperCase();
    $("#incident-no").textContent = String(daysTogether).padStart(4, "0");
  }

  /* =====================================================================
     FLOATING HEARTS & SPARKLES
     ===================================================================== */
  const FLOATIES = ["💗", "💕", "✨", "💖", "🌸", "💜", "⭐", "♡", "💞", "🩷"];
  const rand = (a, b) => a + Math.random() * (b - a);
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

  /** Fill a layer with gently looping floaters. */
  function populateFloaters(layer, count) {
    if (REDUCED || !layer) return;
    layer.innerHTML = "";
    for (let i = 0; i < count; i++) {
      const f = el("span", "floater", pick(FLOATIES));
      f.style.setProperty("--x", rand(0, 100) + "%");
      f.style.setProperty("--size", rand(14, 34) + "px");
      f.style.setProperty("--dur", rand(9, 18) + "s");
      f.style.setProperty("--delay", rand(-18, 0) + "s");
      f.style.setProperty("--drift", rand(-60, 60) + "px");
      f.style.setProperty("--alpha", rand(.45, .9).toFixed(2));
      layer.appendChild(f);
    }
  }

  /** One-shot burst of hearts from a point (used by the hug button). */
  function burst(layer, x, y, n = 18) {
    if (REDUCED || !layer) return;
    for (let i = 0; i < n; i++) {
      const b = el("span", "burst", pick(FLOATIES));
      const angle = rand(0, Math.PI * 2);
      const dist = rand(80, 260);
      b.style.setProperty("--x", x + "px");
      b.style.setProperty("--y", y + "px");
      b.style.setProperty("--dx", Math.cos(angle) * dist + "px");
      b.style.setProperty("--dy", Math.sin(angle) * dist + "px");
      b.style.setProperty("--rot", rand(-90, 90) + "deg");
      b.style.setProperty("--size", rand(18, 36) + "px");
      b.addEventListener("animationend", () => b.remove(), { once: true });
      layer.appendChild(b);
    }
  }

  /* =====================================================================
     SCREEN MANAGEMENT
     ===================================================================== */
  const screens = {
    opening: $("#opening"),
    loading: $("#loading"),
    dashboard: $("#dashboard")
  };
  let dashboardReady = false;

  function lockScroll(lock) { document.body.classList.toggle("is-locked", lock); }

  /* =====================================================================
     LOADING SEQUENCE → DASHBOARD
     ===================================================================== */
  let loadingRun = 0;

  async function startLoading() {
    const run = ++loadingRun;
    const opening = screens.opening;
    opening.classList.add("is-leaving");
    await sleep(350);
    opening.hidden = true;
    opening.classList.remove("is-leaving");

    const ov = screens.loading;
    const log = $("#loading-log");
    const bar = $("#loading-bar");
    const done = $("#loading-done");
    log.innerHTML = "";
    bar.style.width = "0%";
    done.hidden = true;
    ov.hidden = false;
    $("#btn-skip-loading").focus({ preventScroll: true });

    const steps = CONFIG.loading.steps;
    for (let i = 0; i < steps.length; i++) {
      const prev = log.lastElementChild;
      if (prev) prev.classList.replace("is-working", "is-done");
      const li = el("li", "is-working");
      li.textContent = fmt(steps[i]);
      log.appendChild(li);
      bar.style.width = ((i + 1) / steps.length) * 100 + "%";
      await sleep(CONFIG.loading.stepDelayMs);
      if (run !== loadingRun) return;
    }
    log.lastElementChild?.classList.replace("is-working", "is-done");
    done.hidden = false;
    await sleep(1500);
    if (run !== loadingRun) return;
    showDashboard();
  }

  function showDashboard() {
    loadingRun++;
    screens.loading.hidden = true;
    screens.opening.hidden = true;
    const dash = screens.dashboard;
    dash.hidden = false;
    dash.classList.add("is-entering");
    lockScroll(false);
    window.scrollTo(0, 0);
    dash.focus({ preventScroll: true });
    if (!dashboardReady) { buildDashboard(); dashboardReady = true; }
  }

  function replayOpening() {
    screens.dashboard.hidden = true;
    screens.opening.hidden = false;
    lockScroll(true);
    window.scrollTo(0, 0);
    $("#btn-evidence").focus({ preventScroll: true });
  }

  /* =====================================================================
     DASHBOARD BUILDERS
     ===================================================================== */
  function buildDashboard() {
    buildTicker();
    buildKpis();
    buildReadings();
    buildClassified();
    setupReveal();
    setupLazyWidgets();
  }

  function buildTicker() {
    const html = CONFIG.ticker.map((t) =>
      `<span class="ticker__item"><b>${esc(t.label)}</b><span class="${t.value.includes("▼") ? "" : "ticker__up"}">${esc(t.value)}</span></span>`
    ).join("");
    $("#ticker-track").innerHTML = html + html; // duplicated for a seamless loop
  }

  function buildKpis() {
    $("#kpis").innerHTML = CONFIG.kpis.map((k) => `
      <div class="kpi">
        <div class="kpi__lbl">${esc(k.label)}</div>
        <div class="kpi__val">${esc(k.value)}</div>
        <div class="kpi__delta">${esc(k.delta)}</div>
      </div>`).join("");
  }

  function buildReadings() {
    $("#thicc-readings").innerHTML = CONFIG.thicc.readings
      .map((r) => `<li><span>${esc(r.label)}</span>${esc(r.value)}</li>`).join("");
  }

  function buildClassified() {
    const tilts = [-1.6, 1.2, -0.8, 1.8, -1.2, 0.9];
    $("#classified-notes").innerHTML = CONFIG.classified.messages.map((m, i) => `
      <div class="note" style="--tilt:${tilts[i % tilts.length]}deg; --delay:${(i * 0.12).toFixed(2)}s">
        <div class="note__ref">INTEL #${String(i + 1).padStart(3, "0")}</div>
        <p class="note__text">${esc(m)}</p>
      </div>`).join("");
  }

  /* ---------- Scroll reveal ---------- */
  function setupReveal() {
    const items = $$(".reveal");
    if (!("IntersectionObserver" in window)) { items.forEach((i) => i.classList.add("is-visible")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach((i) => io.observe(i));
  }

  /* ---------- Start charts / counters when they scroll into view ---------- */
  function setupLazyWidgets() {
    const jobs = new Map([
      [$("#chart-affection"), makeAffectionChart],
      [$("#chart-cuteness"), makeCutenessChart],
      [$("#chart-top10"), makeTop10Chart],
      [$("#chart-adoration"), makeAdorationChart],
      [$("#sec-thicc"), runThicc],
      [$("#missing-card"), runMissingYou]
    ]);
    const run = (node) => { const fn = jobs.get(node); if (fn) { jobs.delete(node); try { fn(node); } catch (err) { console.warn(err); } } };

    if (!("IntersectionObserver" in window)) { [...jobs.keys()].forEach(run); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { io.unobserve(e.target); run(e.target); } });
    }, { threshold: 0.3 });
    jobs.forEach((_, node) => io.observe(node));
  }

  /* =====================================================================
     CHARTS (Chart.js)
     ===================================================================== */
  const PALETTE = ["#F472B6", "#A78BFA", "#F9A8D4", "#C4B5FD", "#E879F9", "#FBCFE8"];
  const INK = "#45324F";
  const MUTED = "#7A6688";

  function chartReady(canvas) {
    if (typeof window.Chart === "undefined") {
      canvas.parentElement.innerHTML = '<div class="chart-fallback">📡 Chart engine offline — but the findings remain: you are wonderful.</div>';
      return false;
    }
    return true;
  }

  function setupChartDefaults() {
    if (typeof window.Chart === "undefined") return;
    const C = window.Chart;
    C.defaults.font.family = '"Nunito", system-ui, sans-serif';
    C.defaults.font.size = 12;
    C.defaults.color = INK;
    C.defaults.maintainAspectRatio = false;
    C.defaults.plugins.tooltip.backgroundColor = "rgba(69, 50, 79, .92)";
    C.defaults.plugins.tooltip.padding = 10;
    C.defaults.plugins.tooltip.cornerRadius = 10;
    C.defaults.plugins.tooltip.titleFont = { family: '"Fredoka", sans-serif', weight: "600", size: 13 };
    if (REDUCED) C.defaults.animation = false;
  }

  /** Draws two lines of text in the middle of a doughnut. */
  const centerTextPlugin = (top, bottom) => ({
    id: "centerText",
    afterDraw(chart) {
      const meta = chart.getDatasetMeta(0);
      if (!meta.data.length) return;
      const { x, y } = meta.data[0];
      const c = chart.ctx;
      c.save();
      c.textAlign = "center";
      c.textBaseline = "middle";
      c.fillStyle = "#DB2777";
      c.font = '700 26px "Fredoka", sans-serif';
      c.fillText(top, x, y - 8);
      c.fillStyle = MUTED;
      c.font = '700 9px "Space Mono", monospace';
      c.fillText(bottom, x, y + 16);
      c.restore();
    }
  });

  const legendBottom = {
    position: "bottom",
    labels: { usePointStyle: true, pointStyle: "circle", padding: 14, boxWidth: 8, font: { weight: "700" } }
  };

  // A. Distribution of my affection — doughnut
  function makeAffectionChart(canvas) {
    if (!chartReady(canvas)) return;
    const cfg = CONFIG.charts.affection;
    new Chart(canvas, {
      type: "doughnut",
      data: {
        labels: cfg.labels.map(fmt),
        datasets: [{
          data: cfg.values,
          backgroundColor: ["#F472B6", "#C084FC", "#F9A8D4", "#A78BFA", "#DDD6FE"],
          borderColor: "#fff", borderWidth: 3, borderRadius: 8, hoverOffset: 12
        }]
      },
      options: {
        cutout: "62%",
        layout: { padding: 6 },
        animation: { animateRotate: true, animateScale: true, duration: 1600, easing: "easeOutQuart" },
        plugins: {
          legend: legendBottom,
          tooltip: { callbacks: { label: (c) => ` ${c.label}: ${c.parsed}%` } }
        }
      },
      plugins: [centerTextPlugin(fmt(cfg.centerTop), fmt(cfg.centerBottom))]
    });
  }

  // D. Cuteness distribution — pie
  function makeCutenessChart(canvas) {
    if (!chartReady(canvas)) return;
    const cfg = CONFIG.charts.cuteness;
    new Chart(canvas, {
      type: "pie",
      data: {
        labels: cfg.labels.map(fmt),
        datasets: [{
          data: cfg.values,
          backgroundColor: ["#F9A8D4", "#C4B5FD", "#F0ABFC", "#A78BFA", "#FBCFE8"],
          borderColor: "#fff", borderWidth: 3, hoverOffset: 14
        }]
      },
      options: {
        layout: { padding: 6 },
        animation: { animateRotate: true, animateScale: true, duration: 1600, easing: "easeOutBack" },
        plugins: {
          legend: legendBottom,
          tooltip: { callbacks: { label: (c) => ` ${c.label}: ${c.parsed}%` } }
        }
      }
    });
  }

  // B. Top 10 — horizontal bar with an off-the-chart final entry
  function makeTop10Chart(canvas) {
    if (!chartReady(canvas)) return;
    const cfg = CONFIG.charts.top10;
    const MAX = 100;
    // Split long labels into multiple lines on small screens
    const wrapLabel = (text, max) => {
      if (text.length <= max) return text;
      const lines = [""];
      text.split(" ").forEach((w) => {
        const cur = lines[lines.length - 1];
        if ((cur + " " + w).trim().length > max && cur) lines.push(w);
        else lines[lines.length - 1] = (cur + " " + w).trim();
      });
      return lines;
    };

    const barLabels = {
      id: "barLabels",
      afterDatasetsDraw(chart) {
        const { ctx, chartArea } = chart;
        const meta = chart.getDatasetMeta(0);
        const data = chart.data.datasets[0].data;
        ctx.save();
        ctx.textBaseline = "middle";
        meta.data.forEach((bar, i) => {
          const v = data[i];
          if (v > MAX) {
            ctx.font = '700 11px "Space Mono", monospace';
            ctx.textAlign = "right";
            ctx.fillStyle = "#fff";
            const right = Math.min(bar.x, chartArea.right) - 10;
            const room = right - chartArea.left - 10;
            const full = fmt(cfg.overflowLabel);
            const text = ctx.measureText(full).width <= room ? full : "∞ ➜";
            if (ctx.measureText(text).width <= room) ctx.fillText(text, right, bar.y);
          } else {
            ctx.font = '700 11px "Space Mono", monospace';
            ctx.textAlign = "right";
            ctx.fillStyle = "rgba(255,255,255,.95)";
            if (bar.x > chartArea.left + 40) ctx.fillText(v, bar.x - 8, bar.y);
          }
        });
        ctx.restore();
      }
    };

    new Chart(canvas, {
      type: "bar",
      data: {
        labels: cfg.labels.map((l, i) => wrapLabel(`${i + 1}. ${fmt(l)}`, window.innerWidth < 600 ? 14 : 40)),
        datasets: [{
          data: cfg.values,
          backgroundColor: (c) => {
            const v = c.raw;
            if (v > MAX) {
              const { ctx, chartArea } = c.chart;
              if (!chartArea) return "#EC4899";
              const g = ctx.createLinearGradient(chartArea.left, 0, chartArea.right, 0);
              g.addColorStop(0, "#F472B6"); g.addColorStop(.6, "#EC4899"); g.addColorStop(1, "#9333EA");
              return g;
            }
            return c.dataIndex % 2 ? "#C4B5FD" : "#F9A8D4";
          },
          borderRadius: 999, borderSkipped: false,
          barPercentage: .78, categoryPercentage: .9
        }]
      },
      options: {
        indexAxis: "y",
        animation: { duration: 1400, easing: "easeOutQuart", delay: (c) => (c.type === "data" ? c.dataIndex * 90 : 0) },
        scales: {
          x: {
            min: 0, max: MAX,
            grid: { color: "rgba(124,58,237,.08)" },
            border: { display: false },
            ticks: { maxRotation: 0, callback: (v) => (v === MAX ? (window.innerWidth < 600 ? "max" : "100 (max)") : v), font: { family: '"Space Mono", monospace', size: 10 } },
            title: { display: true, text: "Scientifically measured adoration (0–100)", color: MUTED, font: { size: 11, weight: "700" } }
          },
          y: { grid: { display: false }, border: { display: false }, ticks: { autoSkip: false, font: { weight: "700", size: window.innerWidth < 600 ? 11 : 12 } } }
        },
        plugins: {
          legend: { display: false },
          tooltip: { callbacks: { label: (c) => (c.raw > MAX ? " Score: yes. All of it." : ` Score: ${c.raw}/100`) } }
        }
      },
      plugins: [barLabels]
    });
  }

  // C. Adoration over time — progressively drawn line that breaks the ceiling
  function makeAdorationChart(canvas) {
    if (!chartReady(canvas)) return;
    const cfg = CONFIG.charts.adorationOverTime;
    const n = Math.max(6, cfg.points | 0);
    const THRESHOLD = 100;

    // Labels spread evenly from the day you met until today
    const start = startDate;
    const end = new Date();
    const spanDays = (end - start) / 86400000;
    const labels = Array.from({ length: n }, (_, i) => {
      if (i === 0) return "Day 1";
      if (i === n - 1) return "Today";
      const d = new Date(start.getTime() + (end - start) * (i / (n - 1)));
      // Short relationships get "Day N" labels; longer ones get months
      return spanDays < 120
        ? `Day ${Math.max(1, Math.round(spanDays * (i / (n - 1))))}`
        : d.toLocaleDateString("en-GB", { month: "short", year: "2-digit" });
    });
    // Steady increase (slightly exponential) with the last point blowing past the ceiling
    const data = labels.map((_, i) => {
      if (i === n - 1) return 118;
      const t = i / (n - 2);
      return Math.round(12 + 84 * Math.pow(t, 1.35) + (i % 3 === 1 ? 2 : 0));
    });

    const totalDuration = REDUCED ? 0 : 2200;
    const perPoint = totalDuration / n;
    const prevY = (c) => c.index === 0
      ? c.chart.scales.y.getPixelForValue(0)
      : c.chart.getDatasetMeta(c.datasetIndex).data[c.index - 1].getProps(["y"], true).y;

    const thresholdPlugin = {
      id: "threshold",
      beforeDatasetsDraw(chart) {
        const { ctx, chartArea, scales } = chart;
        const y = scales.y.getPixelForValue(THRESHOLD);
        ctx.save();
        ctx.fillStyle = "rgba(252, 231, 243, .7)";
        ctx.fillRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, y - chartArea.top);
        ctx.setLineDash([6, 5]);
        ctx.strokeStyle = "#EC4899";
        ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(chartArea.left, y); ctx.lineTo(chartArea.right, y); ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = "#BE185D";
        ctx.font = '700 9px "Space Mono", monospace';
        ctx.textAlign = "left";
        ctx.textBaseline = "bottom";
        ctx.fillText("MAXIMUM MEASURABLE THRESHOLD", chartArea.left + 8, y - 4);
        ctx.restore();
      }
    };

    new Chart(canvas, {
      type: "line",
      data: {
        labels,
        datasets: [{
          label: "Adoration",
          data,
          borderColor: "#DB2777",
          borderWidth: 3,
          tension: .35,
          fill: false,
          pointBackgroundColor: (c) => (c.dataIndex === n - 1 ? "#EC4899" : "#fff"),
          pointBorderColor: "#DB2777",
          pointBorderWidth: 2,
          pointRadius: (c) => (c.dataIndex === n - 1 ? 9 : 3.5),
          pointHoverRadius: 7,
          pointStyle: (c) => (c.dataIndex === n - 1 ? "star" : "circle")
        }]
      },
      options: {
        animation: REDUCED ? false : {
          x: { type: "number", easing: "linear", duration: perPoint, from: NaN,
               delay(c) { if (c.type !== "data" || c.xStarted) return 0; c.xStarted = true; return c.index * perPoint; } },
          y: { type: "number", easing: "linear", duration: perPoint, from: prevY,
               delay(c) { if (c.type !== "data" || c.yStarted) return 0; c.yStarted = true; return c.index * perPoint; } }
        },
        interaction: { intersect: false, mode: "index" },
        scales: {
          x: {
            grid: { display: false },
            ticks: { maxRotation: 0, autoSkip: true, maxTicksLimit: 7, font: { family: '"Space Mono", monospace', size: 10 } },
            title: { display: true, text: fmt(cfg.xAxisTitle), color: MUTED, font: { size: 11, weight: "700" } }
          },
          y: {
            min: 0, max: 120,
            ticks: { stepSize: 20, callback: (v) => (v > THRESHOLD ? "∞" : v), font: { family: '"Space Mono", monospace', size: 10 } },
            grid: { color: "rgba(124,58,237,.08)" },
            title: { display: true, text: fmt(cfg.yAxisTitle), color: MUTED, font: { size: 11, weight: "700" } }
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: { callbacks: { label: (c) => (c.raw > THRESHOLD ? " Adoration: ERROR (unmeasurable)" : ` Adoration: ${c.raw} units`) } }
        }
      },
      plugins: [thresholdPlugin]
    });

    setTimeout(() => $("#adoration-warning").classList.add("is-visible"), totalDuration + 300);
  }

  /* =====================================================================
     THICCNESS ANALYTICS DIVISION
     ===================================================================== */
  function countUp(node, target, duration = 2000, from = 0) {
    if (REDUCED) { node.textContent = target.toLocaleString("en-GB"); return Promise.resolve(); }
    return new Promise((resolve) => {
      const t0 = performance.now();
      const ease = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)); // easeOutExpo
      const tick = (now) => {
        const p = Math.min(1, (now - t0) / duration);
        node.textContent = Math.round(from + (target - from) * ease(p)).toLocaleString("en-GB");
        if (p < 1) requestAnimationFrame(tick); else resolve();
      };
      requestAnimationFrame(tick);
    });
  }

  function runThicc() {
    const cfg = CONFIG.thicc;
    const needle = $("#gauge-needle");
    const num = $("#thicc-number");

    // Needle swings past MAX (90deg) and gets stuck at ~111deg
    requestAnimationFrame(() => { needle.style.transform = "rotate(111deg)"; });
    setTimeout(() => {
      needle.style.transform = "";
      needle.classList.add("is-broken");
      $("#gauge-broken").classList.add("is-visible");
    }, REDUCED ? 0 : 2700);

    $("#overmeter-fill").style.width = "103%";
    countUp($("#overmeter-pct"), cfg.scaleCapacity, 2600).then(() => {
      $("#overmeter-pct").textContent = cfg.scaleCapacity + "%";
    });
    $("#overmeter-pct").textContent = "0";

    countUp(num, cfg.index, 2600).then(() => {
      num.classList.add("is-maxed");
      num.setAttribute("aria-label", `${cfg.indexLabel}: ${cfg.index.toLocaleString("en-GB")}`);
    });
  }

  /* =====================================================================
     MISSING YOU ANALYTICS
     ===================================================================== */
  let missingRun = 0;

  function runMissingYou() {
    const run = ++missingRun;
    const cfg = CONFIG.missingYou;
    const card = $("#missing-card");
    const fill = $("#missing-fill");
    const pct = $("#missing-pct");
    const status = $("#missing-status");
    const bar = $("#missing-progress");
    const err = $("#missing-error");

    card.classList.remove("is-crashed");
    err.hidden = true;

    const duration = REDUCED ? 1 : cfg.durationMs;
    const t0 = performance.now();
    const tick = (now) => {
      if (run !== missingRun) return;
      const p = Math.min(1, (now - t0) / duration);
      const eased = p < .7 ? p * .8 / .7 : .8 + (p - .7) / .3 * .2; // slows down, then rushes to 100
      const v = Math.round(eased * 100);
      fill.style.width = v + "%";
      pct.textContent = v + "%";
      bar.setAttribute("aria-valuenow", v);
      status.textContent = cfg.statuses[Math.min(cfg.statuses.length - 1, Math.floor(eased * (cfg.statuses.length - 1)))];
      if (p < 1) { requestAnimationFrame(tick); return; }
      // Crash!
      pct.textContent = "100%+";
      status.textContent = cfg.statuses[cfg.statuses.length - 1];
      card.classList.add("is-crashed");
      err.hidden = false;
    };
    requestAnimationFrame(tick);
  }

  /** Small burst of hearts around a button (inside the page, not the overlay). */
  function buttonBurst(btn) {
    if (REDUCED) return;
    let layer = $("#page-bursts");
    if (!layer) {
      layer = el("div", "float-layer");
      layer.id = "page-bursts";
      layer.style.position = "fixed";
      layer.style.zIndex = "60";
      layer.setAttribute("aria-hidden", "true");
      document.body.appendChild(layer);
    }
    const r = btn.getBoundingClientRect();
    burst(layer, r.left + r.width / 2, r.top + r.height / 2, 14);
  }

  /* =====================================================================
     WIRING
     ===================================================================== */
  function init() {
    applyTemplates();
    setupChartDefaults();
    populateFloaters($("#opening-floaters"), 22);

    $("#btn-evidence").addEventListener("click", startLoading);
    $("#btn-skip-loading").addEventListener("click", showDashboard);
    $("#btn-replay").addEventListener("click", replayOpening);
    $("#btn-missing-restart").addEventListener("click", runMissingYou);
    $("#btn-missing-hug").addEventListener("click", (e) => {
      buttonBurst(e.currentTarget);
      $("#missing-status").textContent = "Hug received. Missing levels remain critical. 💗";
    });

  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
