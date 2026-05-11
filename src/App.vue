<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg: #0c0e14;
  --surface: #13161f;
  --surface2: #1a1e2a;
  --border: rgba(255,255,255,0.07);
  --accent: #4ade80;
  --accent2: #818cf8;
  --text: #e8eaf0;
  --muted: #6b7280;
  --danger: #f87171;
  --warn: #fbbf24;
  --radius: 12px;
  --font-display: 'Syne', sans-serif;
  --font-body: 'DM Sans', sans-serif;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  font-size: 15px;
  min-height: 100vh;
}

a { color: inherit; text-decoration: none; }

button, .btn {
  cursor: pointer;
  border: none;
  font-family: var(--font-body);
  font-weight: 500;
  border-radius: 8px;
  padding: 0.6rem 1.4rem;
  transition: all 0.2s;
}

.btn-primary {
  background: var(--accent);
  color: #0c0e14;
  font-weight: 700;
}
.btn-primary:hover { background: #22d060; transform: translateY(-1px); }

.btn-outline {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text);
}
.btn-outline:hover { border-color: var(--accent); color: var(--accent); }

.page { padding: 80px 0 0; min-height: 100vh; }

input, textarea, select {
  background: var(--surface2);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text);
  font-family: var(--font-body);
  font-size: 14px;
  padding: 0.65rem 1rem;
  width: 100%;
  transition: border-color 0.2s;
  outline: none;
}
input:focus, textarea:focus { border-color: var(--accent); }
input::placeholder, textarea::placeholder { color: var(--muted); }

label { font-size: 13px; color: var(--muted); margin-bottom: 6px; display: block; }

.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem;
}
</style>
