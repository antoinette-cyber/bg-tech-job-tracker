<template>
  <nav class="navbar">
    <div class="nav-inner">
      <router-link to="/" class="logo">
        <span class="logo-icon">⬡</span>
        <span>BG<em>Tech</em></span>
      </router-link>

      <div class="nav-links" :class="{ open: menuOpen }">
        <router-link to="/" @click="close">Home</router-link>
        <router-link to="/about" @click="close">About</router-link>
        <router-link to="/contact" @click="close">Contact</router-link>
        <router-link to="/dashboard/overview" @click="close">Dashboard</router-link>
      </div>

      <div class="nav-actions">
        <router-link to="/login" class="btn btn-outline">Login</router-link>
        <router-link to="/register" class="btn btn-primary">Register</router-link>
      </div>

      <button class="burger" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
const close = () => { menuOpen.value = false }
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  background: rgba(12, 14, 20, 0.85);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
}
.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 64px;
  display: flex;
  align-items: center;
  gap: 2rem;
}
.logo {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--text);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  letter-spacing: -0.02em;
  white-space: nowrap;
}
.logo em { color: var(--accent); font-style: normal; }
.logo-icon { font-size: 1.4rem; color: var(--accent); }

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex: 1;
}
.nav-links a {
  padding: 0.4rem 0.9rem;
  border-radius: 6px;
  color: var(--muted);
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
}
.nav-links a:hover { color: var(--text); background: var(--surface2); }
.nav-links a.router-link-active { color: var(--accent); }

.nav-actions {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-left: auto;
}
.nav-actions .btn { font-size: 13px; padding: 0.45rem 1rem; }

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: transparent;
  padding: 4px;
  border-radius: 6px;
}
.burger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: all 0.2s;
}

@media (max-width: 768px) {
  .burger { display: flex; }
  .nav-links {
    display: none;
    position: absolute;
    top: 64px; left: 0; right: 0;
    background: var(--surface);
    border-bottom: 1px solid var(--border);
    flex-direction: column;
    padding: 1rem;
    align-items: flex-start;
    gap: 0;
  }
  .nav-links.open { display: flex; }
  .nav-links a { width: 100%; padding: 0.75rem 1rem; }
  .nav-actions { gap: 0.4rem; }
  .nav-actions .btn { display: none; }
}
</style>
