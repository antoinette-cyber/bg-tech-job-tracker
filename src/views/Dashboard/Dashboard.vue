<template>
  <div class="dashboard-layout">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-brand">
        <span class="logo-icon">⬡</span>
        <span class="brand-name">BG<em>Tech</em></span>
      </div>

      <nav class="sidebar-nav">
        <router-link
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="nav-item"
          active-class="active"
        >
          <span class="nav-icon">{{ item.icon }}</span>
          <span>{{ item.label }}</span>
        </router-link>
      </nav>

      <div class="sidebar-footer">
        <div class="user-row">
          <div class="user-avatar">JD</div>
          <div class="user-info">
            <span class="user-name">janesmith</span>
            <span class="user-role">Pro Tracker</span>
          </div>
        </div>
        <router-link to="/profile/janesmith" class="view-profile-btn">View Public Profile →</router-link>
        <router-link to="/" class="sign-out-btn">← Sign Out</router-link>
      </div>
    </aside>

    <!-- Main content area -->
    <div class="dashboard-main">
      <header class="dash-header">
        <div class="dash-title">
          <h2>{{ currentTitle }}</h2>
          <span class="dash-sub">{{ currentSub }}</span>
        </div>
        <div class="dash-header-actions">
          <input placeholder="Search jobs..." class="dash-search" />
          <router-link to="/profile/janesmith" class="header-avatar">JD</router-link>
        </div>
      </header>

      <!-- Nested routes render here -->
      <div class="dash-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const navItems = [
  { to: '/dashboard/overview', icon: '📊', label: 'Overview' },
  { to: '/dashboard/reports', icon: '📈', label: 'Reports' },
  { to: '/dashboard/settings', icon: '⚙️', label: 'Settings' },
]

const titles = {
  Overview: { title: 'Overview', sub: 'A quick snapshot of your pipeline this week.' },
  Reports: { title: 'Reports', sub: 'Detailed analytics and trends.' },
  Settings: { title: 'Settings', sub: 'Manage your account and preferences.' },
}

const currentTitle = computed(() => titles[route.name]?.title || 'Dashboard')
const currentSub = computed(() => titles[route.name]?.sub || '')
</script>

<style scoped>
.dashboard-layout {
  display: flex;
  min-height: 100vh;
  padding-top: 64px; /* navbar height */
}

/* SIDEBAR */
.sidebar {
  width: 220px;
  flex-shrink: 0;
  background: var(--surface);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 64px;
  bottom: 0;
  left: 0;
  z-index: 50;
  overflow-y: auto;
}

.sidebar-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1.25rem 1.25rem 0.75rem;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1rem;
  border-bottom: 1px solid var(--border);
  margin-bottom: 0.75rem;
}
.logo-icon { color: var(--accent); font-size: 1.25rem; }
.brand-name em { color: var(--accent); font-style: normal; }

.sidebar-nav { display: flex; flex-direction: column; gap: 2px; padding: 0 0.75rem; flex: 1; }

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  color: var(--muted);
  font-size: 14px;
  font-weight: 500;
  transition: all 0.15s;
}
.nav-item:hover { background: var(--surface2); color: var(--text); }
.nav-item.active { background: rgba(74,222,128,0.1); color: var(--accent); }
.nav-icon { font-size: 1rem; }

.sidebar-footer {
  padding: 1rem;
  border-top: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.user-row { display: flex; align-items: center; gap: 0.75rem; }
.user-avatar { width: 36px; height: 36px; border-radius: 50%; background: linear-gradient(135deg, var(--accent), var(--accent2)); color: #0c0e14; font-family: var(--font-display); font-weight: 800; font-size: 0.8rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.user-info { display: flex; flex-direction: column; }
.user-name { font-size: 13px; font-weight: 600; }
.user-role { font-size: 11px; color: var(--accent); }
.view-profile-btn { font-size: 12px; color: var(--accent); padding: 0; background: none; }
.sign-out-btn { font-size: 12px; color: var(--muted); padding: 0; background: none; }
.sign-out-btn:hover { color: var(--danger); }

/* MAIN */
.dashboard-main {
  flex: 1;
  margin-left: 220px;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 64px);
}

.dash-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid var(--border);
  gap: 1rem;
  flex-wrap: wrap;
}
.dash-title h2 { font-family: var(--font-display); font-weight: 700; font-size: 1.3rem; }
.dash-sub { color: var(--muted); font-size: 13px; }

.dash-header-actions { display: flex; align-items: center; gap: 0.75rem; }
.dash-search {
  background: var(--surface2);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text);
  font-family: var(--font-body);
  font-size: 13px;
  padding: 0.45rem 0.9rem;
  width: 180px;
  outline: none;
}
.dash-search:focus { border-color: var(--accent); }
.header-avatar { width: 34px; height: 34px; border-radius: 50%; background: linear-gradient(135deg, var(--accent), var(--accent2)); color: #0c0e14; font-family: var(--font-display); font-weight: 800; font-size: 0.75rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }

.dash-content { flex: 1; padding: 2rem; overflow-y: auto; }

@media (max-width: 768px) {
  .sidebar { width: 180px; }
  .dashboard-main { margin-left: 180px; }
}
@media (max-width: 540px) {
  .sidebar { display: none; }
  .dashboard-main { margin-left: 0; }
}
</style>
