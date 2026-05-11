<template>
  <main class="page profile-page">
    <div class="container">
      <div class="profile-hero card">
        <div class="avatar-wrap">
          <div class="avatar">{{ initials }}</div>
          <span class="badge">Pro Tracker</span>
        </div>
        <div class="profile-info">
          <h1>@{{ username }}</h1>
          <p class="bio">Software developer • Actively job searching • Open to remote roles</p>
          <div class="profile-meta">
            <span>📍 Rotterdam, NL</span>
            <span>📅 Joined 2026</span>
            <span>💼 24 Applications</span>
          </div>
          <div class="profile-actions">
            <router-link to="/dashboard/overview" class="btn btn-primary">View Dashboard</router-link>
            <button class="btn btn-outline">Edit Profile</button>
          </div>
        </div>
      </div>

      <div class="profile-stats">
        <div class="stat-card card" v-for="s in stats" :key="s.label">
          <span class="stat-num">{{ s.num }}</span>
          <span class="stat-lbl">{{ s.label }}</span>
          <span class="stat-change" :class="s.up ? 'up' : 'down'">{{ s.change }}</span>
        </div>
      </div>

      <div class="recent-section card">
        <h2>Recent Applications</h2>
        <div class="job-list">
          <div class="job-row" v-for="j in jobs" :key="j.title">
            <div class="job-info">
              <strong>{{ j.title }}</strong>
              <span class="company">{{ j.company }}</span>
            </div>
            <span class="status-pill" :class="j.status.toLowerCase().replace(' ', '-')">{{ j.status }}</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
// Dynamic route param
const username = computed(() => route.params.username || 'user')
const initials = computed(() => username.value.slice(0, 2).toUpperCase())

const stats = [
  { num: '24', label: 'Applied', change: '+6 this week', up: true },
  { num: '6', label: 'Interviews', change: '+2 this week', up: true },
  { num: '2', label: 'Offers', change: 'This week', up: true },
  { num: '3', label: 'Rejected', change: 'Total', up: false },
]

const jobs = [
  { title: 'Frontend Engineer', company: 'Acme Corp', status: 'Interview Scheduled' },
  { title: 'Full-Stack Developer', company: 'Globex Profile', status: 'Applied' },
  { title: 'Backend Engineer', company: 'AppliedTech', status: 'Applied' },
  { title: 'Product Engineer', company: 'Slate Systems', status: 'Offer Received' },
  { title: 'Mobile Developer', company: 'InnoApps', status: 'Rejected' },
]
</script>

<style scoped>
.profile-page { padding-bottom: 5rem; }
.container { max-width: 900px; margin: 0 auto; padding: 2rem; }

.profile-hero { display: flex; gap: 2rem; align-items: flex-start; margin-bottom: 1.5rem; }
.avatar-wrap { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; flex-shrink: 0; }
.avatar { width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, var(--accent), var(--accent2)); color: #0c0e14; font-family: var(--font-display); font-weight: 800; font-size: 1.5rem; display: flex; align-items: center; justify-content: center; }
.badge { font-size: 11px; background: rgba(74,222,128,0.15); color: var(--accent); border: 1px solid rgba(74,222,128,0.3); border-radius: 20px; padding: 2px 10px; white-space: nowrap; }

.profile-info h1 { font-family: var(--font-display); font-size: 1.6rem; font-weight: 800; letter-spacing: -0.02em; margin-bottom: 0.25rem; }
.bio { color: var(--muted); font-size: 14px; margin-bottom: 0.75rem; }
.profile-meta { display: flex; gap: 1rem; flex-wrap: wrap; font-size: 13px; color: var(--muted); margin-bottom: 1rem; }
.profile-actions { display: flex; gap: 0.5rem; }

.profile-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 1.5rem; }
.stat-card { display: flex; flex-direction: column; gap: 4px; }
.stat-num { font-family: var(--font-display); font-size: 2rem; font-weight: 800; line-height: 1; }
.stat-lbl { color: var(--muted); font-size: 13px; }
.stat-change { font-size: 12px; }
.up { color: var(--accent); }
.down { color: var(--danger); }

.recent-section h2 { font-family: var(--font-display); font-weight: 700; margin-bottom: 1rem; }
.job-list { display: flex; flex-direction: column; gap: 0.5rem; }
.job-row { display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 1rem; background: var(--surface2); border-radius: 8px; }
.job-info { display: flex; flex-direction: column; gap: 2px; }
.job-info strong { font-size: 14px; }
.company { font-size: 12px; color: var(--muted); }

.status-pill { font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: 20px; white-space: nowrap; }
.applied { background: rgba(129,140,248,0.15); color: var(--accent2); }
.interview-scheduled { background: rgba(251,191,36,0.15); color: var(--warn); }
.offer-received { background: rgba(74,222,128,0.15); color: var(--accent); }
.rejected { background: rgba(248,113,113,0.15); color: var(--danger); }

@media (max-width: 640px) {
  .profile-hero { flex-direction: column; }
  .profile-stats { grid-template-columns: repeat(2, 1fr); }
}
</style>
