<template>
  <div class="settings">
    <div class="settings-grid">
      <!-- Profile Settings -->
      <div class="card settings-section">
        <h3>Profile Settings</h3>
        <div class="field"><label>Display Name</label><input v-model="s.name" placeholder="Jane Smith" /></div>
        <div class="field"><label>Username</label><input v-model="s.username" placeholder="janesmith" /></div>
        <div class="field"><label>Email</label><input v-model="s.email" type="email" placeholder="jane@email.com" /></div>
        <div class="field"><label>Bio</label><textarea v-model="s.bio" rows="3" placeholder="Software developer..."></textarea></div>
        <button class="btn btn-primary">Save Changes</button>
      </div>

      <div class="right-col">
        <!-- Notifications -->
        <div class="card settings-section">
          <h3>Notifications</h3>
          <div class="toggle-row" v-for="n in notifications" :key="n.label">
            <div>
              <span class="t-label">{{ n.label }}</span>
              <span class="t-desc">{{ n.desc }}</span>
            </div>
            <div class="toggle" :class="{ on: n.on }" @click="n.on = !n.on">
              <div class="toggle-knob"></div>
            </div>
          </div>
        </div>

        <!-- Danger Zone -->
        <div class="card settings-section danger-zone">
          <h3>Danger Zone</h3>
          <p>These actions are permanent and cannot be undone.</p>
          <div class="danger-actions">
            <button class="btn danger-btn">Export My Data</button>
            <button class="btn danger-btn red">Delete Account</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const s = reactive({ name: 'Jane Smith', username: 'janesmith', email: 'jane@email.com', bio: 'Software developer • Actively job searching' })

const notifications = reactive([
  { label: 'Status Updates', desc: 'When an application status changes', on: true },
  { label: 'Weekly Summary', desc: 'Weekly digest of your activity', on: true },
  { label: 'Interview Reminders', desc: '24hrs before scheduled interviews', on: false },
  { label: 'New Job Matches', desc: 'When new matching roles appear', on: false },
])
</script>

<style scoped>
.settings { display: flex; flex-direction: column; gap: 1.5rem; }
.settings-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 1.25rem; }
.right-col { display: flex; flex-direction: column; gap: 1.25rem; }
.settings-section h3 { font-family: var(--font-display); font-weight: 700; margin-bottom: 1.25rem; }
.field { margin-bottom: 1rem; }

.toggle-row { display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 0; border-bottom: 1px solid var(--border); }
.toggle-row:last-child { border-bottom: none; }
.t-label { display: block; font-size: 14px; font-weight: 500; }
.t-desc { display: block; font-size: 12px; color: var(--muted); }

.toggle { width: 40px; height: 22px; border-radius: 20px; background: var(--surface2); border: 1px solid var(--border); position: relative; cursor: pointer; transition: background 0.2s; flex-shrink: 0; }
.toggle.on { background: var(--accent); border-color: var(--accent); }
.toggle-knob { width: 16px; height: 16px; background: white; border-radius: 50%; position: absolute; top: 2px; left: 2px; transition: left 0.2s; }
.toggle.on .toggle-knob { left: 20px; }

.danger-zone p { color: var(--muted); font-size: 13px; margin-bottom: 1rem; }
.danger-actions { display: flex; gap: 0.5rem; flex-wrap: wrap; }
.danger-btn { background: var(--surface2); border: 1px solid var(--border); color: var(--text); font-size: 13px; }
.danger-btn.red { border-color: var(--danger); color: var(--danger); }
.danger-btn.red:hover { background: rgba(248,113,113,0.1); }

@media (max-width: 768px) { .settings-grid { grid-template-columns: 1fr; } }
</style>
