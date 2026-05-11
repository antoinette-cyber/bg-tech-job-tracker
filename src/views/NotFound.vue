<template>
  <main class="page not-found">
    <div class="nf-inner">
      <div class="nf-glow"></div>
      <span class="nf-code">404</span>
      <h1>Page Not Found</h1>
      <p>The page you're looking for doesn't exist — it may have moved or been removed.</p>
      <div class="nf-actions">
        <router-link to="/" class="btn btn-primary">← Back Home</router-link>
        <router-link to="/dashboard/overview" class="btn btn-outline">Go to Dashboard</router-link>
      </div>
      <div class="nf-links">
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/login">Login</router-link>
      </div>
    </div>
  </main>
</template>

<style scoped>
.not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  padding: 2rem;
}
.nf-inner { position: relative; max-width: 480px; width: 100%; }
.nf-glow {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -60%);
  width: 400px; height: 300px;
  background: radial-gradient(ellipse, rgba(129,140,248,0.12) 0%, transparent 70%);
  pointer-events: none;
}
.nf-code {
  font-family: var(--font-display);
  font-size: clamp(5rem, 15vw, 8rem);
  font-weight: 800;
  line-height: 1;
  background: linear-gradient(135deg, var(--accent2), var(--accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: block;
  margin-bottom: 1rem;
}
h1 {
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
}
p { color: var(--muted); line-height: 1.7; margin-bottom: 2rem; }
.nf-actions { display: flex; gap: 0.75rem; justify-content: center; margin-bottom: 2rem; }
.nf-links { display: flex; gap: 1.5rem; justify-content: center; }
.nf-links a { color: var(--muted); font-size: 13px; transition: color 0.2s; }
.nf-links a:hover { color: var(--accent); }
</style>
