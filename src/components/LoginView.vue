<script lang="ts" setup>
import { ref, computed } from 'vue'
import AuthForm from './AuthForm.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'

const step = ref<'login' | 'password' | 'forgot' | 'sent'>('login')
const email = ref('')
const password = ref('')
const forgotEmail = ref('')

const logoUrl = computed(() => {
  const domain = email.value.split('@')[1]
  return domain ? `https://logo.clearbit.com/${domain}` : ''
})

function goToPassword() {
  if (email.value.includes('@')) {
    step.value = 'password'
  } else {
    alert('Please enter a valid email')
  }
}

function submitLogin() {
  console.log('Calling login API with:', email.value, password.value)
}

function sendReset() {
  if (!forgotEmail.value.includes('@')) return alert('Invalid email')
  console.log('Send reset to:', forgotEmail.value)
  step.value = 'sent'
}

function resendEmail() {
  console.log('Resending email to:', forgotEmail.value)
}
</script>

<template>
  <Header />
  <div class="max-w-md mx-auto my-12 px-6 py-8 bg-white border border-gray-300 rounded-xl shadow-lg">
    <!-- Logo Area -->
    <div class="text-center mb-6">
      <img
        v-if="step === 'login'"
        src="../assets/clickhr.png"
        alt="Default Logo"
        class="h-16 object-contain mx-auto"
      />
      <img
        v-else-if="step === 'password'"
        :src="logoUrl"
        alt="Company Logo"
        class="h-16 object-contain mx-auto"
      />
    </div>

    <!-- Step 1: Login -->
    <div v-if="step === 'login'" class="flex flex-col gap-4">
      <h2 class="text-xl font-semibold text-center">Login</h2>
      <input
        type="email"
        v-model="email"
        placeholder="Enter your email"
        class="px-4 py-2 border border-gray-400 rounded-md text-sm"
      />
      <button
        @click="goToPassword"
        class="py-2 font-semibold bg-[#0e2e5c] text-white rounded-md hover:bg-blue-700"
      >
        Continue
      </button>
    </div>

    <!-- Step 2: Password -->
    <div v-if="step === 'password'" class="flex flex-col gap-4">
      <h2 class="text-xl font-semibold text-center">Password</h2>
      <input
        type="email"
        :value="email"
        readonly
        class="px-4 py-2 border border-gray-400 rounded-md text-sm bg-gray-100"
      />
      <input
        type="password"
        v-model="password"
        placeholder="Enter your password"
        class="px-4 py-2 border border-gray-400 rounded-md text-sm"
      />
      <div class="flex justify-between items-center">
        <button
        
          @click="submitLogin"
          class="py-2 px-4 bg-[#0e2e5c] text-white font-semibold rounded-md hover:bg-blue-700"
        >
          Login
        </button>
        <a @click="step = 'forgot'" class="text-sm text-[#0e2e5c] cursor-pointer hover:underline">
          Forgot Password?
        </a>
      </div>
    </div>

    <!-- Step 3: Forgot Password -->
    <div v-if="step === 'forgot'" class="flex flex-col gap-4">
      <h2 class="text-xl font-semibold text-center">Forgot Password</h2>
      <input
        type="email"
        v-model="forgotEmail"
        placeholder="Enter your email"
        class="px-4 py-2 border border-gray-400 rounded-md text-sm"
      />
      <button
        @click="sendReset"
        class="py-2 font-semibold bg-[#0e2e5c] text-white rounded-md hover:bg-blue-700"
      >
        Send Email
      </button>
    </div>

    <!-- Step 4: Email Sent -->
    <div v-if="step === 'sent'" class="flex flex-col gap-4 text-center">
      <h2 class="text-xl font-semibold">Check Your Email</h2>
      <p class="text-sm">
        Please check <strong>{{ forgotEmail }}</strong> for reset instructions.
      </p>
      <button
        @click="resendEmail"
        class="py-2 px-4 bg-[#0e2e5c] text-white font-semibold rounded-md hover:bg-blue-700"
      >
        Resend Email
      </button>
    </div>
  </div>
  <Footer />
</template>
