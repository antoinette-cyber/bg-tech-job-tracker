<template>
  <main class="page about">
    <div class="container">
      <div class="page-header">
        <span class="eyebrow">Our Story</span>
        <h1>About <em>BG Tech</em></h1>
        <p>We build tools that make job searching less stressful and more strategic.</p>
      </div>

      <div class="about-grid">
        <div class="about-text card">
          <h2>Why we built this</h2>
          <p>Job searching is overwhelming. Applications scattered across emails, interviews in your head, offers mixed with rejections — BG Tech Job Tracker brings order to the chaos.</p>
          <p>We're a team of developers who've been through the grind ourselves. We built the tool we wished we had.</p>
        </div>
        <div class="values">
          <div class="value-item" v-for="v in values" :key="v.title">
            <span class="v-icon">{{ v.icon }}</span>
            <div>
              <h3>{{ v.title }}</h3>
              <p>{{ v.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="team-section">
        <h2>The Team</h2>
        <div class="team-grid">
          <div class="team-card card" v-for="m in team" :key="m.name">
            <div class="avatar">{{ m.initials }}</div>
            <h3>{{ m.name }}</h3>
            <p class="role">{{ m.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
const values = [
  { icon: '🧭', title: 'Clarity', desc: 'See exactly where every application stands at a glance.' },
  { icon: '⚡', title: 'Speed', desc: 'Add and update jobs in seconds — not minutes.' },
  { icon: '🔒', title: 'Privacy', desc: 'Your data stays yours. No selling, no ads.' },
]
const team = [
  { name: 'Blake G.', initials: 'BG', role: 'Founder & Lead Dev' },
  { name: 'Alex T.', initials: 'AT', role: 'UI/UX Designer' },
  { name: 'Sam K.', initials: 'SK', role: 'Backend Engineer' },
]
</script>

<style scoped>
.about { padding-bottom: 5rem; }
.container { max-width: 1000px; margin: 0 auto; padding: 0 2rem; }
.page-header { text-align: center; padding: 4rem 0 3rem; }
.eyebrow { font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent); font-weight: 600; }
h1 { font-family: var(--font-display); font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; margin: 0.5rem 0; letter-spacing: -0.02em; }
h1 em { color: var(--accent); font-style: normal; }
.page-header p { color: var(--muted); }

.about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 3rem; }
.about-text h2 { font-family: var(--font-display); font-weight: 700; margin-bottom: 1rem; }
.about-text p { color: var(--muted); line-height: 1.7; margin-bottom: 0.75rem; }

.values { display: flex; flex-direction: column; gap: 1rem; }
.value-item { display: flex; gap: 1rem; align-items: flex-start; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 1.25rem; }
.v-icon { font-size: 1.5rem; flex-shrink: 0; }
.value-item h3 { font-family: var(--font-display); font-weight: 600; margin-bottom: 4px; }
.value-item p { color: var(--muted); font-size: 13.5px; }

.team-section h2 { font-family: var(--font-display); font-weight: 700; font-size: 1.4rem; margin-bottom: 1.5rem; }
.team-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
.team-card { text-align: center; }
.avatar { width: 56px; height: 56px; border-radius: 50%; background: linear-gradient(135deg, var(--accent), var(--accent2)); color: #0c0e14; font-family: var(--font-display); font-weight: 800; font-size: 1rem; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.75rem; }
.team-card h3 { font-weight: 600; margin-bottom: 4px; }
.role { color: var(--muted); font-size: 13px; }

@media (max-width: 640px) {
  .about-grid, .team-grid { grid-template-columns: 1fr; }
}
</style>
