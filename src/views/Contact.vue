<template>
  <main class="page contact">
    <div class="container">
      <div class="page-header">
        <span class="eyebrow">Get in Touch</span>
        <h1>Contact <em>Us</em></h1>
        <p>Have a question or feedback? We'd love to hear from you.</p>
      </div>

      <div class="contact-grid">
        <form class="card contact-form" @submit.prevent="submit">
          <h2>Send a message</h2>
          <div class="field">
            <label>Your Name</label>
            <input v-model="form.name" placeholder="Jane Smith" required />
          </div>
          <div class="field">
            <label>Email Address</label>
            <input v-model="form.email" type="email" placeholder="jane@email.com" required />
          </div>
          <div class="field">
            <label>Subject</label>
            <input v-model="form.subject" placeholder="How can we help?" />
          </div>
          <div class="field">
            <label>Message</label>
            <textarea v-model="form.message" rows="5" placeholder="Tell us more..." required></textarea>
          </div>
          <button type="submit" class="btn btn-primary" style="width:100%">Send Message</button>
          <p v-if="sent" class="success">✅ Message sent! We'll get back to you soon.</p>
        </form>

        <div class="contact-info">
          <div class="info-card card" v-for="c in contacts" :key="c.label">
            <span class="c-icon">{{ c.icon }}</span>
            <h3>{{ c.label }}</h3>
            <p>{{ c.value }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { reactive, ref } from 'vue'
const form = reactive({ name: '', email: '', subject: '', message: '' })
const sent = ref(false)
const submit = () => { sent.value = true; Object.keys(form).forEach(k => form[k] = '') }
const contacts = [
  { icon: '📧', label: 'Email', value: 'support@bgtech.dev' },
  { icon: '🌍', label: 'Location', value: 'Remote — Worldwide' },
  { icon: '🕐', label: 'Response Time', value: 'Within 24 hours' },
]
</script>

<style scoped>
.contact { padding-bottom: 5rem; }
.container { max-width: 1000px; margin: 0 auto; padding: 0 2rem; }
.page-header { text-align: center; padding: 4rem 0 3rem; }
.eyebrow { font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent); font-weight: 600; }
h1 { font-family: var(--font-display); font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; margin: 0.5rem 0; }
h1 em { color: var(--accent); font-style: normal; }
.page-header p { color: var(--muted); }

.contact-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: 1.5rem; }
.contact-form h2 { font-family: var(--font-display); font-weight: 700; margin-bottom: 1.5rem; }
.field { margin-bottom: 1rem; }
.success { margin-top: 1rem; color: var(--accent); font-size: 13.5px; }

.contact-info { display: flex; flex-direction: column; gap: 1rem; }
.info-card { display: flex; flex-direction: column; gap: 6px; }
.c-icon { font-size: 1.5rem; }
.info-card h3 { font-family: var(--font-display); font-weight: 600; }
.info-card p { color: var(--muted); font-size: 14px; }

@media (max-width: 640px) { .contact-grid { grid-template-columns: 1fr; } }
</style>
