<template>
  <main class="page home">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-glow"></div>
      <div class="container">
        <p class="hero-eyebrow">BG Tech Job Tracker</p>
        <h1 class="hero-title">Track Your Career<br><em>Progress.</em></h1>
        <p class="hero-sub">Manage applications, interviews, and offers — all in one dashboard. Always know where to focus.</p>
        <div class="hero-cta">
          <router-link to="/register" class="btn btn-primary">Get Started Free</router-link>
          <router-link to="/login" class="btn btn-outline">Login</router-link>
        </div>
        <div class="hero-stats">
          <div class="stat"><span class="num">2.4k+</span><span class="lbl">Jobs Tracked</span></div>
          <div class="stat"><span class="num">89%</span><span class="lbl">Offer Rate</span></div>
          <div class="stat"><span class="num">Free</span><span class="lbl">Always</span></div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="features container">
      <h2>Built for job hunters <em>at every stage</em></h2>
      <p class="section-sub">A clear workflow from first application to signed offer.</p>
      <div class="feature-grid">
        <div class="feature-card" v-for="f in features" :key="f.title">
          <span class="f-icon">{{ f.icon }}</span>
          <h3>{{ f.title }}</h3>
          <p>{{ f.desc }}</p>
        </div>
      </div>
    </section>

    <!-- CTA Band -->
    <section class="cta-band container">
      <div class="cta-inner">
        <h2>Ready to land your next role?</h2>
        <router-link to="/register" class="btn btn-primary">Create Free Account</router-link>
      </div>
    </section>

    <footer class="footer">
      <p>© 2026 BG Tech Job Tracker</p>
      <div>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </footer>
  </main>
</template>

<script setup>
const features = [
  { icon: '📋', title: 'Application Pipeline', desc: 'Track job titles, companies, and current progress in seconds.' },
  { icon: '🎯', title: 'Interview Visibility', desc: 'Keep upcoming interviews and notes organized in one place.' },
  { icon: '📊', title: 'Progress Reports', desc: 'Visualize your weekly activity with clear charts and metrics.' },
  { icon: '🔔', title: 'Status Alerts', desc: 'Get notified on status changes so nothing slips through.' },
]
</script>

<style scoped>
.home { overflow-x: hidden; }
.container { max-width: 1100px; margin: 0 auto; padding: 0 2rem; }

/* Hero */
.hero {
  position: relative;
  text-align: center;
  padding: 7rem 2rem 5rem;
  overflow: hidden;
}
.hero-glow {
  position: absolute;
  top: -100px; left: 50%;
  transform: translateX(-50%);
  width: 600px; height: 400px;
  background: radial-gradient(ellipse, rgba(74,222,128,0.12) 0%, transparent 70%);
  pointer-events: none;
}
.hero-eyebrow {
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 600;
  margin-bottom: 1rem;
}
.hero-title {
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 6vw, 5rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.03em;
  margin-bottom: 1.25rem;
}
.hero-title em { color: var(--accent); font-style: normal; }
.hero-sub { color: var(--muted); max-width: 480px; margin: 0 auto 2rem; line-height: 1.7; }

.hero-cta { display: flex; gap: 0.75rem; justify-content: center; margin-bottom: 3rem; }
.hero-stats {
  display: flex;
  gap: 2rem;
  justify-content: center;
  border-top: 1px solid var(--border);
  padding-top: 2rem;
}
.stat { display: flex; flex-direction: column; align-items: center; gap: 4px; }
.num { font-family: var(--font-display); font-size: 1.6rem; font-weight: 700; color: var(--text); }
.lbl { font-size: 12px; color: var(--muted); }

/* Features */
.features { padding: 5rem 2rem; text-align: center; }
.features h2 {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.features h2 em { color: var(--accent); font-style: normal; }
.section-sub { color: var(--muted); margin-bottom: 3rem; }
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
  text-align: left;
}
.feature-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem;
  transition: border-color 0.2s, transform 0.2s;
}
.feature-card:hover { border-color: var(--accent); transform: translateY(-2px); }
.f-icon { font-size: 1.8rem; display: block; margin-bottom: 0.75rem; }
.feature-card h3 { font-family: var(--font-display); font-weight: 600; margin-bottom: 0.5rem; }
.feature-card p { color: var(--muted); font-size: 13.5px; line-height: 1.6; }

/* CTA band */
.cta-band { padding: 3rem 2rem; }
.cta-inner {
  background: linear-gradient(135deg, var(--surface), var(--surface2));
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}
.cta-inner h2 { font-family: var(--font-display); font-size: 1.5rem; font-weight: 700; }

/* Footer */
.footer {
  border-top: 1px solid var(--border);
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--muted);
  font-size: 13px;
  max-width: 1100px;
  margin: 0 auto;
}
.footer a { color: var(--muted); margin-left: 1.5rem; transition: color 0.2s; }
.footer a:hover { color: var(--accent); }
</style>
