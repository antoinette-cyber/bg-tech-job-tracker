<template>
  <main class="page auth-page">
    <div class="auth-box">
      <div class="auth-header">
        <span class="logo-icon">⬡</span>
        <h1>Welcome back</h1>
        <p>Continue your job tracking journey.</p>
      </div>

      <form class="card auth-form" @submit.prevent="login">
        <div class="field">
          <label>Email or Username</label>
          <input v-model="form.email" placeholder="jane@email.com" required />
        </div>
        <div class="field">
          <label>Password</label>
          <input v-model="form.password" type="password" placeholder="Your password" required />
        </div>

        <div class="remember-row">
          <label class="check-label">
            <input type="checkbox" v-model="form.remember" /> Remember me
          </label>
          <a href="#" class="forgot">Forgot password?</a>
        </div>

        <p v-if="error" class="err">{{ error }}</p>
        <button type="submit" class="btn btn-primary full">Login</button>
      </form>

      <div class="divider"><span>Or continue with</span></div>

      <div class="social-grid">
        <button class="social-btn" v-for="s in socials" :key="s.name">
          <span>{{ s.icon }}</span> {{ s.name }}
        </button>
      </div>

      <p class="auth-footer">
        New here? <router-link to="/register">Create an account</router-link>
        &nbsp;·&nbsp;
        <router-link to="/contact">Contact Support</router-link>
      </p>
    </div>
  </main>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const form = reactive({ email: '', password: '', remember: false })
const error = ref('')

const login = () => {
  if (!form.email || !form.password) { error.value = 'Please fill in all fields.'; return }
  error.value = ''
  // In a real app: validate with your API
  router.push('/dashboard/overview')
}

const socials = [
  { icon: '🔵', name: 'Google' },
  { icon: '🟦', name: 'Microsoft' },
  { icon: '⬛', name: 'GitHub' },
  { icon: '🔷', name: 'LinkedIn' },
]
</script>

<style scoped>
.auth-page { display: flex; align-items: flex-start; justify-content: center; padding-top: 96px; min-height: 100vh; }
.auth-box { width: 100%; max-width: 440px; padding: 0 1rem 3rem; }
.auth-header { text-align: center; margin-bottom: 1.5rem; }
.logo-icon { font-size: 2rem; color: var(--accent); display: block; margin-bottom: 0.5rem; }
h1 { font-family: var(--font-display); font-size: 1.8rem; font-weight: 800; letter-spacing: -0.02em; }
.auth-header p { color: var(--muted); font-size: 14px; margin-top: 4px; }
.auth-form { display: flex; flex-direction: column; }
.field { margin-bottom: 1rem; }
.remember-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; font-size: 13px; }
.check-label { display: flex; align-items: center; gap: 6px; color: var(--muted); cursor: pointer; }
.check-label input { width: auto; cursor: pointer; }
.forgot { color: var(--accent); font-size: 13px; }
.full { width: 100%; }
.err { color: var(--danger); font-size: 13px; margin-bottom: 0.5rem; }

.divider { display: flex; align-items: center; gap: 1rem; margin: 1.25rem 0; color: var(--muted); font-size: 13px; }
.divider::before, .divider::after { content: ''; flex: 1; height: 1px; background: var(--border); }

.social-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 1rem; }
.social-btn { background: var(--surface); border: 1px solid var(--border); border-radius: 8px; padding: 0.6rem; color: var(--text); font-size: 13px; display: flex; align-items: center; justify-content: center; gap: 0.4rem; transition: all 0.2s; cursor: pointer; }
.social-btn:hover { border-color: var(--accent); }

.auth-footer { text-align: center; color: var(--muted); font-size: 13px; margin-top: 1rem; }
.auth-footer a { color: var(--accent); font-weight: 500; }
</style>
