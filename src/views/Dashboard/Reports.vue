<template>
  <div class="reports">
    <div class="reports-top">
      <div class="filter-group">
        <label>Date Range</label>
        <select v-model="range">
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="quarter">This Quarter</option>
        </select>
      </div>
    </div>

    <div class="report-cards">
      <div class="card report-card" v-for="r in reportStats" :key="r.label">
        <h4>{{ r.label }}</h4>
        <span class="big-num">{{ r.num }}</span>
        <p class="r-desc">{{ r.desc }}</p>
      </div>
    </div>

    <div class="card weekly-chart">
      <h3>Weekly Application Volume</h3>
      <div class="week-bars">
        <div class="week-col" v-for="w in weekly" :key="w.week">
          <div class="week-bar" :style="{ height: w.h + '%' }"></div>
          <span>{{ w.week }}</span>
        </div>
      </div>
    </div>

    <div class="card">
      <h3>Application Outcomes</h3>
      <div class="outcome-grid">
        <div class="outcome-row" v-for="o in outcomes" :key="o.status">
          <span class="o-status">{{ o.status }}</span>
          <div class="o-bar-wrap">
            <div class="o-bar" :class="o.color" :style="{ width: o.pct + '%' }"></div>
          </div>
          <span class="o-pct">{{ o.pct }}%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const range = ref('month')

const reportStats = [
  { label: 'Response Rate', num: '42%', desc: 'Of applications received a reply' },
  { label: 'Interview Rate', num: '25%', desc: 'Of responses led to interviews' },
  { label: 'Offer Rate', num: '8%', desc: 'Of interviews led to offers' },
  { label: 'Avg. Days to Reply', num: '11', desc: 'Average response time in days' },
]

const weekly = [
  { week: 'W1', h: 35 }, { week: 'W2', h: 60 }, { week: 'W3', h: 80 }, { week: 'W4', h: 50 },
]

const outcomes = [
  { status: 'Applied', pct: 62, color: 'indigo' },
  { status: 'In Progress', pct: 25, color: 'amber' },
  { status: 'Offer', pct: 8, color: 'green' },
  { status: 'Rejected', pct: 12, color: 'red' },
]
</script>

<style scoped>
.reports { display: flex; flex-direction: column; gap: 1.5rem; }
.reports-top { display: flex; align-items: center; gap: 1rem; }
.filter-group { display: flex; align-items: center; gap: 0.5rem; }
.filter-group label { font-size: 13px; color: var(--muted); white-space: nowrap; }
.filter-group select { width: 140px; }

.report-cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
.report-card h4 { color: var(--muted); font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.5rem; }
.big-num { font-family: var(--font-display); font-size: 2.2rem; font-weight: 800; display: block; margin-bottom: 0.25rem; }
.r-desc { color: var(--muted); font-size: 12px; }

h3 { font-family: var(--font-display); font-weight: 600; font-size: 1rem; margin-bottom: 1rem; }

.week-bars { display: flex; align-items: flex-end; gap: 0.75rem; height: 140px; padding-bottom: 1.5rem; }
.week-col { display: flex; flex-direction: column; align-items: center; gap: 6px; flex: 1; height: 100%; justify-content: flex-end; }
.week-bar { background: linear-gradient(to top, var(--accent2), rgba(129,140,248,0.2)); border-radius: 6px 6px 0 0; width: 100%; min-height: 4px; }
.week-col span { font-size: 12px; color: var(--muted); }

.outcome-grid { display: flex; flex-direction: column; gap: 0.75rem; }
.outcome-row { display: flex; align-items: center; gap: 0.75rem; font-size: 13px; }
.o-status { width: 80px; color: var(--muted); flex-shrink: 0; }
.o-bar-wrap { flex: 1; height: 8px; background: var(--surface2); border-radius: 4px; overflow: hidden; }
.o-bar { height: 100%; border-radius: 4px; }
.o-pct { width: 36px; text-align: right; font-weight: 600; }

.green { background: var(--accent); }
.indigo { background: var(--accent2); }
.amber { background: var(--warn); }
.red { background: var(--danger); }

@media (max-width: 768px) { .report-cards { grid-template-columns: repeat(2, 1fr); } }
</style>
