<script lang="ts" setup>
import { ref } from 'vue'
import AuthForm from './AuthForm.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'


const email = ref('')
const password = ref('')

const handleLogin = () => {
  console.log('Logging in:', { email: email.value, password: password.value })
}
</script>

<template>
  <Header />
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <AuthForm>
      <h2 class="text-2xl font-bold text-center">Login to Your Account</h2>
      <form @submit.prevent="handleLogin" class="space-y-4">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="input"
          required
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="input"
          required
        />
        <button type="submit" class="mt-6 w-full bg-[#11376d] text-white font-semibold py-3 rounded-full hover:bg-[#0e2e5c] transition">Login</button>
        <p class="text-sm text-center text-gray-500">
          Don’t have an account?
          <router-link to="/signup" class="text-blue-600 hover:underline">Sign up</router-link>
        </p>
      </form>
    </AuthForm>
  </div>
  <Footer />
</template>

