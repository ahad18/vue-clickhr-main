<template>
  <!-- <Header /> -->
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#11376d] to-[#3f5ca3] py-10">
    <div class="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8 flex flex-col lg:flex-row gap-8">

      <!-- Left Panel -->
      <div class="flex-1 flex flex-col items-center justify-center text-white bg-[#11376d] rounded-lg p-6">
        <img src="../assets/white.png" alt="ClickHR Logo" class="w-32 mb-4" />
        <h2 class="text-xl font-semibold text-center">Empower Your Recruitment</h2>
        <p class="text-center mt-2 text-sm opacity-80">Where Technology Meets Talent</p>
        <router-link to="/login" class="mt-6 px-6 py-2 bg-white text-[#11376d] font-semibold rounded-full hover:shadow-md transition">Login</router-link>
      </div>

      <!-- Right Panel (Signup Form) -->
      <div class="flex-1">
        <h2 class="text-2xl font-bold mb-4 text-[#11376d]">Register Your Company On Click-HR NOW!</h2>
        <form @submit.prevent="handleSignup" class="space-y-4">

          <!-- Company Detail Section -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input v-model="companyName" type="text" placeholder="Company Name *" class="input" required />
            <input v-model="companyEmail" type="email" placeholder="Company Email *" class="input" required />
            <input v-model="website" type="url" placeholder="Company Website URL *" class="input" required />
            <select v-model="employeeCount" class="input" required>
              <option value="" disabled selected>Select number of employees</option>
              <option>1-10</option>
              <option>11-50</option>
              <option>51-200</option>
              <option>201-500</option>
              <option>500+</option>
            </select>
            <input v-model="address" type="text" placeholder="Company Address *" class="input" required />
            <input v-model="contactNumber" type="tel" placeholder="Company Contact Number *" class="input" required />
          </div>

          <!-- Checkbox Options -->
          <div class="text-sm text-gray-700">
            <p class="mb-2">Please select from where candidate data will be fetched for your company:</p>
            <div class="space-y-1">
              <label><input type="checkbox" v-model="indeed" class="mr-2">Indeed Attached Email</label><br>
              <label><input type="checkbox" v-model="zipRecruiter" class="mr-2">ZipRecruiter Attached Email</label>
            </div>
          </div>

          <!-- Contact Person Detail -->
          <div class="mt-4 text-gray-700 font-semibold">Contact Person Detail:</div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input v-model="firstName" type="text" placeholder="First Name *" class="input" required />
            <input v-model="lastName" type="text" placeholder="Last Name *" class="input" required />
            <input v-model="contactEmail" type="email" placeholder="Email *" class="input" required />
            <input v-model="phone" type="tel" placeholder="Phone Number *" class="input" required />
            <input v-model="password" type="password" placeholder="Password *" class="input" required />
            <input v-model="repeatPassword" type="password" placeholder="Repeat Password *" class="input" required />
          </div>

          <!-- Submit -->
          <button type="submit" class="mt-6 w-full bg-[#11376d] text-white font-semibold py-3 rounded-full hover:bg-[#0e2e5c] transition">
            Register
          </button>

          <p class="text-xs text-center mt-2 text-gray-500">Note: Login will be with your company email and password.</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from './Header.vue'
import { ref } from 'vue'

const companyName = ref('')
const companyEmail = ref('')
const website = ref('')
const employeeCount = ref('')
const address = ref('')
const contactNumber = ref('')
const indeed = ref(false)
const zipRecruiter = ref(false)

const firstName = ref('')
const lastName = ref('')
const contactEmail = ref('')
const phone = ref('')
const password = ref('')
const repeatPassword = ref('')

const handleSignup = () => {
  console.log('Submitting registration:', {
    companyName: companyName.value,
    companyEmail: companyEmail.value,
    website: website.value,
    employeeCount: employeeCount.value,
    address: address.value,
    contactNumber: contactNumber.value,
    source: {
      indeed: indeed.value,
      zipRecruiter: zipRecruiter.value
    },
    contactPerson: {
      firstName: firstName.value,
      lastName: lastName.value,
      contactEmail: contactEmail.value,
      phone: phone.value,
      password: password.value,
      repeatPassword: repeatPassword.value
    }
  })
}
</script>


