const icons = {
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3.5" y="5" width="17" height="16" rx="2"/><path d="M7.5 3v4M16.5 3v4M3.5 9.5h17M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="9" cy="8" r="3.5"/><path d="M2.8 20c.2-3.5 2.6-5.5 6.2-5.5s6 2 6.2 5.5M16 5a3.5 3.5 0 0 1 0 6.8m1.3 2.8c2.5.6 3.9 2.3 4 5.4"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 21s8-3.8 8-10V5l-8-3-8 3v6c0 6.2 8 10 8 10Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></svg>',
  receipt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M5 3.5h14v17l-3-2-4 2-4-2-3 2v-17Z"/><path d="M8.5 8h7M8.5 12h7M8.5 16h3"/></svg>',
  sparkles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/><path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15ZM5 2l.7 1.3L7 4l-1.3.7L5 6l-.7-1.3L3 4l1.3-.7L5 2Z"/></svg>',
  more: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m6 6 12 12M18 6 6 18"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4.2 4.2"/></svg>',
  arrowLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m15 18-6-6 6-6"/></svg>',
  arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m9 18 6-6-6-6"/></svg>',
  edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m15 5 4 4M4 20l4.2-.8L19 8.4a2.1 2.1 0 0 0-3-3L5.2 16.2 4 20Z"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 7h16M10 11v6M14 11v6M5.5 7l1 14h11l1-14M9 7V4h6v3"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v12m0 0 4-4m-4 4-4-4M4 18v3h16v-3"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  money: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 2v20m5-15.5C16.2 5.5 14.3 5 12 5c-2.8 0-5 1.2-5 3.2 0 5.2 10 2.4 10 7.4 0 2-2.2 3.4-5 3.4-2.3 0-4.2-.6-5-1.7"/></svg>',
  trend: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m3 17 6-6 4 4 8-9"/><path d="M15 6h6v6"/></svg>',
  soccer: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9.5"/><path d="m12 7 3.1 2.2-1.2 3.7h-3.8l-1.2-3.7L12 7ZM12 7V2.5m3.1 6.7 4.6-1.5M13.9 12.9l2.8 4m-8.6-8.7L3.7 6.7m6.4 6.2-2.8 4m7.5 0 3.8 2.5M7.3 17.8l-3.6 2.6"/></svg>',
  box: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m12 3 9 5v9l-9 5-9-5V8l9-5Z"/><path d="m3.5 8.2 8.5 4.9 8.5-4.9M12 13v9"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m5 12 4 4L19 6"/></svg>'
};
document.querySelectorAll("[data-icon]").forEach((el) => { el.innerHTML = icons[el.dataset.icon] || ""; });

const dateOffset = (offset) => {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return d.toISOString().slice(0, 10);
};
const initialData = {
  coaches: [
    { id: "c1", name: "Dario Moretti", email: "dario@magellanperformance.com", rate: 55, teams: ["t1", "t2"] },
    { id: "c2", name: "Sofia Bennett", email: "sofia@magellanperformance.com", rate: 48, teams: ["t2", "t3"] },
    { id: "c3", name: "Marcus Reed", email: "marcus@magellanperformance.com", rate: 42, teams: ["t1"] },
    { id: "c4", name: "Elena Cruz", email: "elena@magellanperformance.com", rate: 50, teams: ["t3"] }
  ],
  teams: [
    { id: "t1", name: "Howell United U14", level: "Boys · U14", coachIds: ["c1", "c3"], monthlyFee: 1800, invoiceStatus: "pending" },
    { id: "t2", name: "Shoreline FC U16", level: "Girls · U16", coachIds: ["c1", "c2"], monthlyFee: 2200, invoiceStatus: "paid" },
    { id: "t3", name: "Coastal Academy U12", level: "Co-ed · U12", coachIds: ["c2", "c4"], monthlyFee: 1500, invoiceStatus: "pending" }
  ],
  activities: [
    { id: "a1", type: "Practice", coachId: "c1", teamId: "t1", date: dateOffset(-1), hours: 1.5, notes: "Technical development" },
    { id: "a2", type: "Game", coachId: "c2", teamId: "t2", date: dateOffset(-2), hours: 2.5, notes: "League fixture" },
    { id: "a3", type: "Practice", coachId: "c3", teamId: "t1", date: dateOffset(-3), hours: 1.5, notes: "Finishing & movement" },
    { id: "a4", type: "Practice", coachId: "c4", teamId: "t3", date: dateOffset(-4), hours: 1.25, notes: "Small-sided games" },
    { id: "a5", type: "Game", coachId: "c1", teamId: "t2", date: dateOffset(-5), hours: 2, notes: "Tournament" },
    { id: "a6", type: "Practice", coachId: "c2", teamId: "t3", date: dateOffset(-6), hours: 1.5, notes: "Ball mastery" }
  ],
  expenses: [
    { id: "e1", description: "Training cones & bibs", category: "Equipment", amount: 86.45, date: dateOffset(0), coachId: "c1", notes: "Field session supplies" },
    { id: "e2", description: "Match balls (size 5)", category: "Equipment", amount: 124, date: dateOffset(-1), coachId: "c2", notes: "" },
    { id: "e3", description: "Coach first-aid kits", category: "Supplies", amount: 58.9, date: dateOffset(-2), coachId: "", notes: "" }
  ]
};
let data;
try {
  const stored = localStorage.getItem("magellan-ops-data");
  data = stored ? { ...initialData, ...JSON.parse(stored) } : initialData;
} catch (error) {
  console.error("Could not load saved workspace data.", error);
  data = initialData;
}
let selectedPage = "overview";
let weekOffset = 0;
let toastTimer;
let activeSearch = "";

const money = (amount) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(amount || 0);
const preciseMoney = (amount) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount || 0);
const dateFormat = (date, options = { month: "short", day: "numeric" }) => new Intl.DateTimeFormat("en-US", options).format(new Date(`${date}T12:00:00`));
const esc = (value = "") => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
const coachById = (id) => data.coaches.find((coach) => coach.id === id);
const teamById = (id) => data.teams.find((team) => team.id === id);
const coachName = (id) => coachById(id)?.name || "Unassigned";
const teamName = (id) => teamById(id)?.name || "No team";
const initials = (name) => name.split(/\s+/).map((part) => part[0]).slice(0, 2).join("").toUpperCase();
const weekStart = (offset = 0) => {
  const date = new Date();
  const day = date.getDay();
  date.setDate(date.getDate() - ((day + 6) % 7) + offset * 7);
  date.setHours(0, 0, 0, 0);
  return date;
};
const weekEnd = (offset = 0) => {
  const date = weekStart(offset);
  date.setDate(date.getDate() + 6);
  date.setHours(23, 59, 59, 999);
  return date;
};
const dateKey = (date) => {
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
};
const activitiesForWeek = (offset = weekOffset) => {
  const start = dateKey(weekStart(offset));
  const end = dateKey(weekEnd(offset));
  return data.activities.filter((item) => item.date >= start && item.date <= end);
};
const sum = (items, getValue) => items.reduce((total, item) => total + getValue(item), 0);
const currentMonth = () => new Date().toISOString().slice(0, 7);
const monthExpenses = () => data.expenses.filter((item) => item.date.startsWith(currentMonth()));
const monthRevenue = () => sum(data.teams, (team) => team.monthlyFee);
const allPayroll = (offset = weekOffset) => sum(activitiesForWeek(offset), (item) => (coachById(item.coachId)?.rate || 0) * Number(item.hours));
const empty = (title, description) => `<div class="empty-state"><strong>${esc(title)}</strong>${esc(description)}</div>`;
const iconButton = (icon, label, attrs = "") => `<button class="row-action" aria-label="${esc(label)}" title="${esc(label)}" ${attrs}>${icons[icon]}</button>`;
const coachCell = (coach, index = 0) => `<div class="coach-cell"><span class="coach-avatar color-${index % 4}">${esc(initials(coach.name))}</span><span class="coach-details"><span class="coach-name">${esc(coach.name)}</span><span class="cell-secondary">${esc(coach.email || "")}</span></span></div>`;
const pageHeader = (eyebrow, title, subtitle, action) => `<div class="page-heading"><div><span class="eyebrow">${eyebrow}</span><h1>${title}</h1><p>${subtitle}</p></div>${action || ""}</div>`;
const weekLabel = (offset = weekOffset) => `${dateFormat(dateKey(weekStart(offset)))} – ${dateFormat(dateKey(weekEnd(offset)), { month: "short", day: "numeric", year: "numeric" })}`;
function save() {
  try {
    localStorage.setItem("magellan-ops-data", JSON.stringify(data));
  } catch (error) {
    console.error("Could not save workspace data.", error);
    showToast("Changes could not be saved in this browser.");
  }
}
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}
function setPage(page) {
  selectedPage = page;
  document.querySelectorAll(".page").forEach((section) => section.classList.toggle("active", section.id === `page-${page}`));
  document.querySelectorAll(".nav-link").forEach((button) => button.classList.toggle("active", button.dataset.page === page));
  const current = document.querySelector(`.nav-link[data-page="${page}"] span:nth-child(2)`);
  document.getElementById("breadcrumb-current").textContent = current?.textContent || "Overview";
  document.getElementById("sidebar").classList.remove("open");
  render();
}
function statCard(label, value, foot, icon) {
  return `<article class="stat-card"><div class="stat-top"><span>${label}</span><span class="stat-icon">${icons[icon]}</span></div><div class="stat-value">${value}</div><div class="stat-foot">${foot}</div></article>`;
}
function renderOverview() {
  const weekItems = activitiesForWeek();
  const payroll = allPayroll();
  const monthExpenseAmount = sum(monthExpenses(), (item) => Number(item.amount));
  const net = monthRevenue() - monthExpenseAmount;
  const coachRows = data.coaches.map((coach, index) => {
    const sessions = weekItems.filter((item) => item.coachId === coach.id);
    const hours = sum(sessions, (item) => Number(item.hours));
    return `<div class="payroll-row"><div>${coachCell(coach, index)}</div><div><span class="table-value strong">${hours.toFixed(hours % 1 ? 2 : 0)} hrs</span><span class="cell-secondary">${sessions.length} sessions</span></div><div class="table-value">${money(coach.rate)}/hr</div><div class="table-value strong">${money(hours * coach.rate)}</div></div>`;
  }).join("");
  const recent = [...data.activities].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 4);
  const recentRows = recent.map((item) => `<div class="activity-item"><span class="activity-dot"></span><div class="activity-copy"><strong>${esc(item.type)} logged</strong><p>${esc(coachName(item.coachId))} · ${esc(teamName(item.teamId))}</p></div><span class="activity-time">${dateFormat(item.date)}</span></div>`).join("");
  const teams = [...data.teams].sort((a, b) => b.monthlyFee - a.monthlyFee).slice(0, 3);
  const teamRows = teams.map((team) => `<div class="mini-team-row"><div><div class="team-title">${esc(team.name)}</div><div class="team-meta">${team.coachIds.length} coaches · Monthly invoice</div></div><div style="text-align:right"><div class="revenue-amount">${money(team.monthlyFee)}</div><span class="status-pill ${team.invoiceStatus === "paid" ? "" : "pending"}">${team.invoiceStatus === "paid" ? "Paid" : "Due"}</span></div></div>`).join("");
  document.getElementById("page-overview").innerHTML = `
    ${pageHeader("BUSINESS AT A GLANCE", `Good ${greeting()}, Magellan.`, "Here’s how your coaching operation is moving this week.", `<div class="overview-actions"><button class="button button-secondary" data-action="quick-expense">${icons.plus} Add expense</button><button class="button button-primary" data-action="quick-activity">${icons.plus} Log session</button></div>`)}
    <div class="stats-grid">
      ${statCard("Coach payroll · this week", money(payroll), `<span class="positive">${weekItems.length} sessions</span> logged this week`, "money")}
      ${statCard("Monthly team revenue", money(monthRevenue()), `${data.teams.length} active team invoices`, "trend")}
      ${statCard("Expenses · this month", money(monthExpenseAmount), `${monthExpenses().length} recorded this month`, "receipt")}
      ${statCard("Coaching team", data.coaches.length, `${data.teams.length} teams in your program`, "users")}
    </div>
    <div class="dashboard-grid">
      <section class="panel"><div class="panel-header"><div><h2 class="panel-title">Weekly coach payroll</h2><p class="panel-subtitle">${esc(weekLabel())} · Based on logged hours</p></div><button class="text-link" data-goto="activity">View activity →</button></div>
        <div class="payroll-row table-head"><span>Coach</span><span>Hours</span><span>Rate</span><span>Pay</span></div>
        ${coachRows || empty("No coaches yet", "Add a coach to start tracking payroll.")}
        <div class="payroll-total"><span>Estimated weekly payroll</span><strong>${money(payroll)}</strong></div>
      </section>
      <section class="panel"><div class="panel-header"><div><h2 class="panel-title">Recent activity</h2><p class="panel-subtitle">Latest sessions &amp; games</p></div><button class="text-link" data-goto="activity">See all →</button></div>
        <div class="activity-list">${recentRows || empty("Nothing logged yet", "Your recent sessions will appear here.")}</div>
      </section>
    </div>
    <div class="bottom-grid">
      <section class="panel"><div class="panel-header"><div><h2 class="panel-title">Team invoices</h2><p class="panel-subtitle">${dateFormat(`${currentMonth()}-01`, { month: "long", year: "numeric" })} · ${money(monthRevenue())} expected</p></div><button class="text-link" data-goto="teams">Manage teams →</button></div>
        ${teamRows || empty("No teams yet", "Add a team to start tracking revenue.")}
      </section>
      <section class="panel"><div class="panel-header"><div><h2 class="panel-title">Monthly snapshot</h2><p class="panel-subtitle">Revenue less recorded expenses</p></div><span class="stat-icon">${icons.trend}</span></div>
        <div style="padding:18px 19px"><div style="display:flex;justify-content:space-between;margin-bottom:14px;font-size:10px"><span style="color:#849088">Team revenue</span><strong>${money(monthRevenue())}</strong></div><div style="display:flex;justify-content:space-between;margin-bottom:14px;font-size:10px"><span style="color:#849088">Expenses to date</span><strong>− ${money(monthExpenseAmount)}</strong></div><div style="height:1px;background:#edf0ec;margin-bottom:13px"></div><div style="display:flex;justify-content:space-between;align-items:center"><span style="color:#536058;font-size:11px;font-weight:600">Net before payroll</span><span class="expense-total">${money(net)}</span></div><div class="cell-secondary" style="margin-top:8px">Weekly coach payroll: ${money(payroll)}</div></div>
      </section>
    </div>`;
}
function renderActivity() {
  const activities = [...data.activities].sort((a, b) => b.date.localeCompare(a.date));
  const tableRows = activities.map((item) => {
    const coach = coachById(item.coachId);
    const pay = (coach?.rate || 0) * Number(item.hours);
    return `<tr><td class="table-primary">${dateFormat(item.date, { month: "short", day: "numeric", year: "numeric" })}<span class="table-muted">${dateFormat(item.date, { weekday: "long" })}</span></td><td><span class="status-pill ${item.type === "Game" ? "pending" : ""}">${esc(item.type)}</span></td><td class="table-primary">${esc(coachName(item.coachId))}</td><td>${esc(teamName(item.teamId))}</td><td>${Number(item.hours).toFixed(Number(item.hours) % 1 ? 2 : 0)} hrs</td><td>${money(coach?.rate || 0)}/hr</td><td class="table-primary">${money(pay)}</td><td><div class="table-actions">${iconButton("edit", "Edit session", `data-edit-activity="${esc(item.id)}"`)}${iconButton("trash", "Delete session", `data-delete-activity="${esc(item.id)}"`)}</div></td></tr>`;
  }).join("");
  const weeklyPay = allPayroll();
  document.getElementById("page-activity").innerHTML = `
    ${pageHeader("COACHING OPERATIONS", "Sessions &amp; games", "Log every practice and match. Hours automatically roll into weekly coach pay.", `<button class="button button-primary" data-action="quick-activity">${icons.plus} Log session or game</button>`)}
    <div class="summary-banner"><div><span class="eyebrow">WEEKLY PAYROLL</span><div class="week-switcher"><button type="button" data-week="-1" aria-label="Previous week">${icons.arrowLeft}</button><span>${esc(weekLabel())}</span><button type="button" data-week="1" aria-label="Next week">${icons.arrowRight}</button></div><p style="margin-top:8px">${activitiesForWeek().length} sessions logged across ${new Set(activitiesForWeek().map((item) => item.coachId)).size} coaches</p></div><div class="summary-metric"><span>Estimated coach payroll</span><strong>${money(weeklyPay)}</strong></div></div>
    <section class="panel"><div class="table-toolbar"><div class="toolbar-group"><label class="search-box">${icons.search}<input type="search" placeholder="Search coach or team..." data-search="activity" value="${esc(activeSearch)}"></label><select class="select-filter" data-filter="activity-type"><option value="">All activities</option><option>Practice</option><option>Game</option></select></div><button class="button button-secondary" data-action="export-activity">${icons.download} Export CSV</button></div>
      <div class="table-scroll"><table class="data-table"><thead><tr><th>Date</th><th>Type</th><th>Coach</th><th>Team</th><th>Duration</th><th>Hourly rate</th><th>Coach pay</th><th></th></tr></thead><tbody id="activity-table-body">${tableRows}</tbody></table></div>
      <div class="section-note">Coach pay is calculated from each session’s hours and the coach’s current hourly rate.</div>
    </section>`;
  applyActivityFilters();
}
function renderCoaches() {
  const rows = data.coaches.map((coach, index) => {
    const sessions = activitiesForWeek().filter((item) => item.coachId === coach.id);
    const hours = sum(sessions, (item) => Number(item.hours));
    const assigned = coach.teams.map(teamById).filter(Boolean).map((team) => team.name);
    return `<tr><td>${coachCell(coach, index)}</td><td>${assigned.length ? assigned.map((name) => esc(name)).join("<span style='color:#b1b9b4'> · </span>") : '<span class="table-muted">No teams</span>'}</td><td class="table-primary">${money(coach.rate)}<span class="table-muted">per hour</span></td><td>${hours.toFixed(hours % 1 ? 2 : 0)} hrs<span class="table-muted">${sessions.length} activities this week</span></td><td class="table-primary">${money(hours * coach.rate)}</td><td><div class="table-actions">${iconButton("edit", "Edit coach", `data-edit-coach="${esc(coach.id)}"`)}${iconButton("trash", "Delete coach", `data-delete-coach="${esc(coach.id)}"`)}</div></td></tr>`;
  }).join("");
  const payroll = allPayroll();
  document.getElementById("page-coaches").innerHTML = `
    ${pageHeader("YOUR COACHING TEAM", "Coaches", "Manage hourly rates, team assignments, and weekly compensation.", `<button class="button button-primary" data-action="add-coach">${icons.plus} Add coach</button>`)}
    <div class="stats-grid">${statCard("Active coaches", data.coaches.length, "In your coaching roster", "users")}${statCard("This week’s payroll", money(payroll), `${activitiesForWeek().length} sessions logged`, "money")}${statCard("Average hourly rate", money(data.coaches.length ? sum(data.coaches, (coach) => coach.rate) / data.coaches.length : 0), "Across all coaches", "trend")}${statCard("Teams covered", new Set(data.coaches.flatMap((coach) => coach.teams)).size, "Unique team assignments", "shield")}</div>
    <section class="panel"><div class="panel-header"><div><h2 class="panel-title">Coach roster</h2><p class="panel-subtitle">Rates apply to logged hours and determine estimated payroll.</p></div><span class="month-label">${esc(weekLabel())}</span></div><div class="table-scroll"><table class="data-table"><thead><tr><th>Coach</th><th>Teams</th><th>Hourly rate</th><th>This week</th><th>Est. pay</th><th></th></tr></thead><tbody>${rows || `<tr><td colspan="6">${empty("No coaches yet", "Add your first coach to build your roster.")}</td></tr>`}</tbody></table></div></section>`;
}
function renderTeams() {
  const total = monthRevenue();
  const pending = sum(data.teams.filter((team) => team.invoiceStatus !== "paid"), (team) => team.monthlyFee);
  const rows = data.teams.map((team) => {
    const assigned = team.coachIds.map(coachById).filter(Boolean);
    const names = assigned.map((coach) => esc(coach.name)).join(", ") || "No coaches assigned";
    return `<tr><td class="table-primary">${esc(team.name)}<span class="table-muted">${esc(team.level || "Team")}</span></td><td>${names}</td><td class="table-primary">${money(team.monthlyFee)}<span class="table-muted">per month</span></td><td><span class="status-pill ${team.invoiceStatus === "paid" ? "" : "pending"}">${team.invoiceStatus === "paid" ? "Paid" : "Due"}</span><span class="table-muted">${dateFormat(`${currentMonth()}-01`, { month: "long", year: "numeric" })}</span></td><td><div class="table-actions"><button class="row-action" title="${team.invoiceStatus === "paid" ? "Mark invoice due" : "Mark invoice paid"}" aria-label="${team.invoiceStatus === "paid" ? "Mark invoice due" : "Mark invoice paid"}" data-toggle-invoice="${esc(team.id)}">${icons.check}</button>${iconButton("edit", "Edit team", `data-edit-team="${esc(team.id)}"`)}${iconButton("trash", "Delete team", `data-delete-team="${esc(team.id)}"`)}</div></td></tr>`;
  }).join("");
  document.getElementById("page-teams").innerHTML = `
    ${pageHeader("REVENUE &amp; CLIENTS", "Teams &amp; invoices", "Set monthly team fees and keep track of what’s been invoiced and paid.", `<button class="button button-primary" data-action="add-team">${icons.plus} Add team</button>`)}
    <div class="stats-grid">${statCard("Monthly recurring revenue", money(total), `${data.teams.length} active team accounts`, "trend")}${statCard("Invoices due", money(pending), `${data.teams.filter((team) => team.invoiceStatus !== "paid").length} teams awaiting payment`, "receipt")}${statCard("Collected this month", money(total - pending), `${data.teams.filter((team) => team.invoiceStatus === "paid").length} invoices marked paid`, "money")}${statCard("Average team fee", money(data.teams.length ? total / data.teams.length : 0), "Monthly per team", "shield")}</div>
    <section class="panel"><div class="panel-header"><div><h2 class="panel-title">Team accounts</h2><p class="panel-subtitle">Monthly revenue per team · update status when an invoice is paid.</p></div><span class="month-label">${esc(dateFormat(`${currentMonth()}-01`, { month: "long", year: "numeric" }))}</span></div><div class="table-scroll"><table class="data-table"><thead><tr><th>Team</th><th>Coaches</th><th>Monthly fee</th><th>Invoice status</th><th></th></tr></thead><tbody>${rows || `<tr><td colspan="5">${empty("No teams yet", "Add a team to track monthly revenue and invoices.")}</td></tr>`}</tbody></table></div><div class="section-note">Monthly recurring revenue: <strong style="color:#405a49">${money(total)}</strong> · Outstanding: <strong style="color:#a6763d">${money(pending)}</strong></div></section>`;
}
function renderExpenses() {
  const expenses = [...data.expenses].sort((a, b) => b.date.localeCompare(a.date));
  const total = sum(monthExpenses(), (item) => Number(item.amount));
  const rows = expenses.map((item) => `<tr><td class="table-primary">${esc(item.description)}${item.notes ? `<span class="table-muted">${esc(item.notes)}</span>` : ""}</td><td>${esc(item.category)}</td><td>${dateFormat(item.date, { month: "short", day: "numeric", year: "numeric" })}</td><td>${esc(coachName(item.coachId))}</td><td class="table-primary">${preciseMoney(item.amount)}</td><td><div class="table-actions">${iconButton("edit", "Edit expense", `data-edit-expense="${esc(item.id)}"`)}${iconButton("trash", "Delete expense", `data-delete-expense="${esc(item.id)}"`)}</div></td></tr>`).join("");
  document.getElementById("page-expenses").innerHTML = `
    ${pageHeader("BUSINESS COSTS", "Expenses", "Log equipment, travel, and other business purchases in one place.", `<button class="button button-primary" data-action="add-expense">${icons.plus} Add expense</button>`)}
    <div class="stats-grid">${statCard("Expenses this month", preciseMoney(total), `${monthExpenses().length} purchases recorded`, "receipt")}${statCard("All-time expenses", preciseMoney(sum(data.expenses, (item) => Number(item.amount))), `${data.expenses.length} total records`, "money")}${statCard("Equipment &amp; supplies", preciseMoney(sum(monthExpenses().filter((item) => /equipment|supplies/i.test(item.category)), (item) => Number(item.amount))), "This month", "box")}${statCard("Average purchase", preciseMoney(data.expenses.length ? sum(data.expenses, (item) => Number(item.amount)) / data.expenses.length : 0), "Across all recorded expenses", "trend")}</div>
    <section class="panel"><div class="panel-header"><div><h2 class="panel-title">Expense log</h2><p class="panel-subtitle">All expenses are saved locally in this browser.</p></div><span class="month-label">${esc(dateFormat(`${currentMonth()}-01`, { month: "long", year: "numeric" }))} · ${preciseMoney(total)}</span></div><div class="table-toolbar"><label class="search-box">${icons.search}<input type="search" placeholder="Search expenses..." data-search="expense"></label><button class="button button-secondary" data-action="export-expenses">${icons.download} Export CSV</button></div><div class="table-scroll"><table class="data-table"><thead><tr><th>Description</th><th>Category</th><th>Date</th><th>For coach</th><th>Amount</th><th></th></tr></thead><tbody>${rows || `<tr><td colspan="6">${empty("No expenses yet", "Add purchases like equipment, travel, or supplies.")}</td></tr>`}</tbody></table></div></section>`;
  applyExpenseFilters();
}
function render() {
  renderOverview();
  renderActivity();
  renderCoaches();
  renderTeams();
  renderExpenses();
  document.getElementById("activity-count").textContent = data.activities.length;
  document.getElementById("today-label").textContent = new Intl.DateTimeFormat("en-US", { weekday: "short", month: "short", day: "numeric" }).format(new Date());
}
function greeting() {
  const hour = new Date().getHours();
  return hour < 12 ? "morning" : hour < 17 ? "afternoon" : "evening";
}
function applyActivityFilters() {
  const query = (document.querySelector('[data-search="activity"]')?.value || "").trim().toLowerCase();
  const type = document.querySelector('[data-filter="activity-type"]')?.value || "";
  const rows = [...document.querySelectorAll("#activity-table-body tr")];
  rows.forEach((row, index) => {
    const item = [...data.activities].sort((a, b) => b.date.localeCompare(a.date))[index];
    const matchesQuery = !query || `${coachName(item.coachId)} ${teamName(item.teamId)} ${item.notes}`.toLowerCase().includes(query);
    row.hidden = !matchesQuery || Boolean(type && item.type !== type);
  });
}
function applyExpenseFilters() {
  const query = (document.querySelector('[data-search="expense"]')?.value || "").trim().toLowerCase();
  document.querySelectorAll("#page-expenses tbody tr").forEach((row) => { row.hidden = Boolean(query && !row.textContent.toLowerCase().includes(query)); });
}
const field = (label, name, type = "text", value = "", extra = "") => `<div class="form-field"><label for="field-${name}">${label}</label><input id="field-${name}" name="${name}" type="${type}" value="${esc(value)}" ${extra} required></div>`;
const selectField = (label, name, options, selected = "", required = true, multiple = false) => `<div class="form-field"><label for="field-${name}">${label}</label><select id="field-${name}" name="${name}" ${required ? "required" : ""} ${multiple ? "multiple" : ""}>${multiple ? options.map((option) => `<option value="${esc(option.value)}" ${selected.includes(option.value) ? "selected" : ""}>${esc(option.label)}</option>`).join("") : `<option value="">Select ${label.toLowerCase()}</option>${options.map((option) => `<option value="${esc(option.value)}" ${selected === option.value ? "selected" : ""}>${esc(option.label)}</option>`).join("")}`}</select>${multiple ? '<span class="form-help">Hold Ctrl (Windows) or Command (Mac) to select multiple teams.</span>' : ""}</div>`;
function showModal(title, content, onSubmit, eyebrow = "MAGELLAN PERFORMANCE") {
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-eyebrow").textContent = eyebrow;
  const form = document.getElementById("modal-form");
  form.innerHTML = `${content}<div class="modal-actions"><button type="button" class="button button-secondary" data-cancel>Cancel</button><button type="submit" class="button button-primary">Save changes</button></div>`;
  document.getElementById("modal-backdrop").classList.add("open");
  document.getElementById("modal-backdrop").setAttribute("aria-hidden", "false");
  form.onsubmit = (event) => { event.preventDefault(); onSubmit(new FormData(form)); };
  form.querySelector("[data-cancel]").addEventListener("click", closeModal);
  form.querySelector("input, select")?.focus();
}
function closeModal() {
  document.getElementById("modal-backdrop").classList.remove("open");
  document.getElementById("modal-backdrop").setAttribute("aria-hidden", "true");
}
function coachForm(coach) {
  const selected = coach?.teams || [];
  const teamOptions = data.teams.map((team) => ({ value: team.id, label: team.name }));
  return `<div class="form-grid">${field("Coach name", "name", "text", coach?.name || "", 'placeholder="e.g. Alex Morgan"')}${field("Hourly rate ($)", "rate", "number", coach?.rate || "", 'min="0" step="0.01" placeholder="45.00"')}${field("Email address", "email", "email", coach?.email || "", 'placeholder="coach@example.com"')}<div class="form-field"><label for="field-teams">Assigned teams</label><select id="field-teams" name="teams" multiple>${teamOptions.map((option) => `<option value="${esc(option.value)}" ${selected.includes(option.value) ? "selected" : ""}>${esc(option.label)}</option>`).join("")}</select><span class="form-help">Hold Ctrl (Windows) or Command (Mac) to select multiple teams.</span></div></div>`;
}
function openCoachModal(id) {
  const existing = id ? coachById(id) : null;
  showModal(existing ? "Edit coach" : "Add a coach", coachForm(existing), (form) => {
    const coach = { id: existing?.id || `c${Date.now()}`, name: form.get("name").trim(), email: form.get("email").trim(), rate: Number(form.get("rate")), teams: form.getAll("teams") };
    data.coaches = existing ? data.coaches.map((item) => item.id === existing.id ? coach : item) : [...data.coaches, coach];
    data.teams.forEach((team) => { team.coachIds = team.coachIds.filter((coachId) => coachId !== coach.id); if (coach.teams.includes(team.id)) team.coachIds.push(coach.id); });
    save(); closeModal(); render(); showToast(existing ? "Coach details updated." : "Coach added to your roster.");
  });
}
function openActivityModal(id) {
  const existing = id ? data.activities.find((item) => item.id === id) : null;
  if (!data.coaches.length || !data.teams.length) {
    showToast("Add a coach and team before logging an activity.");
    return;
  }
  const coachOptions = data.coaches.map((coach) => ({ value: coach.id, label: coach.name }));
  const teamOptions = data.teams.map((team) => ({ value: team.id, label: team.name }));
  const content = `<div class="form-grid">${selectField("Activity type", "type", [{ value: "Practice", label: "Practice" }, { value: "Game", label: "Game" }], existing?.type || "Practice")}${field("Date", "date", "date", existing?.date || dateKey(new Date()))}${selectField("Coach", "coachId", coachOptions, existing?.coachId || "")}${selectField("Team", "teamId", teamOptions, existing?.teamId || "")}${field("Duration (hours)", "hours", "number", existing?.hours || "", 'min="0.25" step="0.25" placeholder="1.5"')}${field("Session notes (optional)", "notes", "text", existing?.notes || "", 'placeholder="Focus, location, or details"')}</div>`;
  showModal(existing ? "Edit activity" : "Log a session or game", content, (form) => {
    const item = { id: existing?.id || `a${Date.now()}`, type: form.get("type"), coachId: form.get("coachId"), teamId: form.get("teamId"), date: form.get("date"), hours: Number(form.get("hours")), notes: form.get("notes").trim() };
    data.activities = existing ? data.activities.map((activity) => activity.id === existing.id ? item : activity) : [item, ...data.activities];
    save(); closeModal(); render(); showToast(existing ? "Activity updated." : `${item.type} added to the activity log.`);
  });
}
function openTeamModal(id) {
  const existing = id ? teamById(id) : null;
  const options = data.coaches.map((coach) => ({ value: coach.id, label: coach.name }));
  const selected = existing?.coachIds || [];
  const content = `<div class="form-grid">${field("Team name", "name", "text", existing?.name || "", 'placeholder="e.g. Shoreline FC U15"')}${field("Age group / level", "level", "text", existing?.level || "", 'placeholder="Boys · U15"')}${field("Monthly team fee ($)", "monthlyFee", "number", existing?.monthlyFee || "", 'min="0" step="0.01" placeholder="1800"')}<div class="form-field"><label for="field-coaches">Assigned coaches</label><select id="field-coaches" name="coachIds" multiple>${options.map((option) => `<option value="${esc(option.value)}" ${selected.includes(option.value) ? "selected" : ""}>${esc(option.label)}</option>`).join("")}</select><span class="form-help">Hold Ctrl (Windows) or Command (Mac) to select multiple coaches.</span></div>${selectField("Invoice status", "invoiceStatus", [{ value: "pending", label: "Due" }, { value: "paid", label: "Paid" }], existing?.invoiceStatus || "pending")}</div>`;
  showModal(existing ? "Edit team" : "Add a team", content, (form) => {
    const team = { id: existing?.id || `t${Date.now()}`, name: form.get("name").trim(), level: form.get("level").trim(), monthlyFee: Number(form.get("monthlyFee")), coachIds: form.getAll("coachIds"), invoiceStatus: form.get("invoiceStatus") };
    data.teams = existing ? data.teams.map((item) => item.id === existing.id ? team : item) : [...data.teams, team];
    data.coaches.forEach((coach) => { coach.teams = coach.teams.filter((teamId) => teamId !== team.id); if (team.coachIds.includes(coach.id)) coach.teams.push(team.id); });
    save(); closeModal(); render(); showToast(existing ? "Team details updated." : "Team added to your accounts.");
  });
}
function expenseForm(expense) {
  const coachOptions = data.coaches.map((coach) => ({ value: coach.id, label: coach.name }));
  return `<div class="form-grid">${field("Description", "description", "text", expense?.description || "", 'placeholder="Training cones & bibs"')}${field("Amount ($)", "amount", "number", expense?.amount || "", 'min="0.01" step="0.01" placeholder="75.00"')}${selectField("Category", "category", ["Equipment", "Supplies", "Travel", "Field rental", "Marketing", "Other"].map((label) => ({ value: label, label })), expense?.category || "Equipment")}${field("Purchase date", "date", "date", expense?.date || dateKey(new Date()))}${selectField("For coach (optional)", "coachId", coachOptions, expense?.coachId || "", false)}<div class="form-field full"><label for="field-notes">Notes (optional)</label><textarea id="field-notes" name="notes" placeholder="Add a receipt note or business purpose">${esc(expense?.notes || "")}</textarea></div></div>`;
}
function openExpenseModal(id) {
  const existing = id ? data.expenses.find((item) => item.id === id) : null;
  showModal(existing ? "Edit expense" : "Add an expense", expenseForm(existing), (form) => {
    const expense = { id: existing?.id || `e${Date.now()}`, description: form.get("description").trim(), amount: Number(form.get("amount")), category: form.get("category"), date: form.get("date"), coachId: form.get("coachId"), notes: form.get("notes").trim() };
    data.expenses = existing ? data.expenses.map((item) => item.id === existing.id ? expense : item) : [expense, ...data.expenses];
    save(); closeModal(); render(); showToast(existing ? "Expense updated." : "Expense saved.");
  });
}
function downloadCsv(filename, rows) {
  const csv = rows.map((row) => row.map((value) => `"${String(value ?? "").replace(/"/g, '""')}"`).join(",")).join("\n");
  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
function deleteItem(collection, id, description) {
  if (!window.confirm(description)) return;
  data[collection] = data[collection].filter((item) => item.id !== id);
  if (collection === "coaches") data.teams.forEach((team) => { team.coachIds = team.coachIds.filter((coachId) => coachId !== id); });
  if (collection === "teams") {
    data.coaches.forEach((coach) => { coach.teams = coach.teams.filter((teamId) => teamId !== id); });
    data.activities = data.activities.filter((item) => item.teamId !== id);
  }
  save(); render(); showToast("Record deleted.");
}
document.querySelectorAll(".nav-link").forEach((button) => button.addEventListener("click", () => setPage(button.dataset.page)));
document.querySelector(".brand").addEventListener("click", (event) => {
  event.preventDefault();
  history.replaceState(null, "", "#overview");
  setPage("overview");
});
document.getElementById("mobile-menu").addEventListener("click", () => document.getElementById("sidebar").classList.toggle("open"));
document.getElementById("close-modal").addEventListener("click", closeModal);
document.getElementById("modal-backdrop").addEventListener("click", (event) => { if (event.target.id === "modal-backdrop") closeModal(); });
document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeModal(); });
document.addEventListener("input", (event) => { if (event.target.matches('[data-search="activity"]')) applyActivityFilters(); if (event.target.matches('[data-search="expense"]')) applyExpenseFilters(); });
document.addEventListener("change", (event) => { if (event.target.matches('[data-filter="activity-type"]')) applyActivityFilters(); });
document.addEventListener("click", (event) => {
  const target = event.target.closest("button");
  if (!target) return;
  if (target.dataset.action === "add-coach") openCoachModal();
  if (target.dataset.action === "add-team") openTeamModal();
  if (target.dataset.action === "add-expense" || target.dataset.action === "quick-expense") openExpenseModal();
  if (target.dataset.action === "quick-activity") openActivityModal();
  if (target.dataset.editCoach) openCoachModal(target.dataset.editCoach);
  if (target.dataset.editActivity) openActivityModal(target.dataset.editActivity);
  if (target.dataset.editTeam) openTeamModal(target.dataset.editTeam);
  if (target.dataset.editExpense) openExpenseModal(target.dataset.editExpense);
  if (target.dataset.deleteCoach) deleteItem("coaches", target.dataset.deleteCoach, "Delete this coach? Their logged activity will remain, but the coach will be removed from team assignments.");
  if (target.dataset.deleteActivity) deleteItem("activities", target.dataset.deleteActivity, "Delete this session or game?");
  if (target.dataset.deleteTeam) deleteItem("teams", target.dataset.deleteTeam, "Delete this team? Its linked session records will also be removed.");
  if (target.dataset.deleteExpense) deleteItem("expenses", target.dataset.deleteExpense, "Delete this expense?");
  if (target.dataset.toggleInvoice) {
    const team = teamById(target.dataset.toggleInvoice);
    team.invoiceStatus = team.invoiceStatus === "paid" ? "pending" : "paid";
    save(); render(); showToast(`Invoice marked ${team.invoiceStatus === "paid" ? "paid" : "due"}.`);
  }
  if (target.dataset.goto) setPage(target.dataset.goto);
  if (target.dataset.action === "export-activity") {
    const rows = [["Date", "Type", "Coach", "Team", "Hours", "Hourly rate", "Coach pay", "Notes"], ...data.activities.map((item) => [item.date, item.type, coachName(item.coachId), teamName(item.teamId), item.hours, coachById(item.coachId)?.rate || 0, (coachById(item.coachId)?.rate || 0) * item.hours, item.notes])];
    downloadCsv("magellan-activity.csv", rows); showToast("Activity CSV downloaded.");
  }
  if (target.dataset.action === "export-expenses") {
    const rows = [["Date", "Description", "Category", "Amount", "Coach", "Notes"], ...data.expenses.map((item) => [item.date, item.description, item.category, item.amount, coachName(item.coachId), item.notes])];
    downloadCsv("magellan-expenses.csv", rows); showToast("Expense CSV downloaded.");
  }
});
document.getElementById("page-activity").addEventListener("click", (event) => {
  const button = event.target.closest("[data-week]");
  if (button) { weekOffset += Number(button.dataset.week); render(); }
});
document.getElementById("page-activity").addEventListener("change", (event) => { if (event.target.matches('[data-filter="activity-type"]')) applyActivityFilters(); });
render();
