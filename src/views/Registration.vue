<template>
  <main class="page auth-page">
    <div class="auth-box">
      <div class="auth-header">
        <span class="logo-icon">⬡</span>
        <h1>Create Account</h1>
        <p>Start tracking your career journey today.</p>
      </div>

      <form class="card auth-form" @submit.prevent="register">
        <div class="row-2">
          <div class="field">
            <label>First Name</label>
            <input v-model="form.first" placeholder="Jane" required />
          </div>
          <div class="field">
            <label>Last Name</label>
            <input v-model="form.last" placeholder="Smith" required />
          </div>
        </div>
        <div class="field">
          <label>Username</label>
          <input v-model="form.username" placeholder="janesmith" required />
        </div>
        <div class="field">
          <label>Email Address</label>
          <input v-model="form.email" type="email" placeholder="jane@email.com" required />
        </div>
        <div class="field">
          <label>Password</label>
          <input v-model="form.password" type="password" placeholder="Min. 8 characters" required />
        </div>
        <div class="field">
          <label>Confirm Password</label>
          <input v-model="form.confirm" type="password" placeholder="Repeat password" required />
        </div>
        <p v-if="error" class="err">{{ error }}</p>
        <button type="submit" class="btn btn-primary full">Create Account</button>
      </form>

      <p class="auth-footer">
        Already have an account? <router-link to="/login">Login here</router-link>
      </p>
    </div>
  </main>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const form = reactive({ first: '', last: '', username: '', email: '', password: '', confirm: '' })
const error = ref('')

const register = () => {
  if (form.password !== form.confirm) { error.value = 'Passwords do not match.'; return }
  if (form.password.length < 8) { error.value = 'Password must be at least 8 characters.'; return }
  error.value = ''
  // In a real app: call your API here
  router.push(`/profile/${form.username}`)
}
</script>

<style scoped>
.auth-page { display: flex; align-items: flex-start; justify-content: center; padding-top: 96px; min-height: 100vh; }
.auth-box { width: 100%; max-width: 480px; padding: 0 1rem 3rem; }
.auth-header { text-align: center; margin-bottom: 1.5rem; }
.logo-icon { font-size: 2rem; color: var(--accent); display: block; margin-bottom: 0.5rem; }
h1 { font-family: var(--font-display); font-size: 1.8rem; font-weight: 800; letter-spacing: -0.02em; }
.auth-header p { color: var(--muted); font-size: 14px; margin-top: 4px; }
.auth-form { display: flex; flex-direction: column; gap: 0; }
.field { margin-bottom: 1rem; }
.row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
.full { width: 100%; margin-top: 0.5rem; }
.err { color: var(--danger); font-size: 13px; margin-bottom: 0.5rem; }
.auth-footer { text-align: center; color: var(--muted); font-size: 13.5px; margin-top: 1rem; }
.auth-footer a { color: var(--accent); font-weight: 500; }
</style>
