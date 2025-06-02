<template>
    <div class="font-sans text-gray-700">
      <Header />
  
      <!-- Hero Section -->
      <section class="bg-[#0e2e5c] text-white py-20">
        <div class="container mx-auto flex flex-col lg:flex-row items-center px-6 gap-10">
          <div class="flex-1">
            <h1 class="text-4xl font-bold mb-4">Unlocking Talent, Empowering Success</h1>
            <p class="mb-6 text-lg">We combine advanced technology with deep industry insights to redefine how companies recruit top talent.</p>
            <button class="bg-white text-[#0e2e5c] px-6 py-3 rounded-full font-bold hover:bg-gray-100">Try Now</button>
          </div>
           <img src="../assets/hero-img.png" alt="Hero Illustration" class="flex-1 max-w-md" />
        </div>
      </section>
  
      <!-- How It Works -->
      <section class="py-16 bg-white text-center">
        <h2 class="text-3xl font-bold mb-10">How It Works</h2>
        <div class="container mx-auto grid md:grid-cols-3 gap-8 px-6">
          <div>
            <h3 class="font-semibold text-lg mb-2">1. Sign In</h3>
            <p>Log in to your personalized dashboard.</p>
          </div>
          <div>
            <h3 class="font-semibold text-lg mb-2">2. Admin or User Access</h3>
            <p>Access full features based on your role.</p>
          </div>
          <div>
            <h3 class="font-semibold text-lg mb-2">3. Finalize Product</h3>
            <p>Utilize features for management and hiring.</p>
          </div>
        </div>
      </section>
  
      <!-- About Section -->
      <section class="py-16 bg-gray-50 text-center">
        <h2 class="text-3xl font-bold mb-4">About Us</h2>
        <p class="max-w-3xl mx-auto mb-8">ClickHR is your trusted partner in recruitment excellence.</p>
        <img src="../assets/process2.png" alt="About Graphic" class="mx-auto w-200" />
      </section>
  
      <!-- Services Section -->
      <section class="py-16 bg-white text-center">
        <h2 class="text-3xl font-bold mb-10">Services</h2>
        <div class="container mx-auto grid md:grid-cols-4 gap-8 px-6">
          <div>
            <h4 class="font-semibold text-lg mb-2">Candidate Management</h4>
            <p>Track and screen candidates efficiently.</p>
          </div>
          <div>
            <h4 class="font-semibold text-lg mb-2">Job Posting</h4>
            <p>Distribute postings across multiple platforms.</p>
          </div>
          <div>
            <h4 class="font-semibold text-lg mb-2">Reporting Tools</h4>
            <p>Measure recruitment metrics easily.</p>
          </div>
          <div>
            <h4 class="font-semibold text-lg mb-2">Access Control</h4>
            <p>Assign roles and manage visibility.</p>
          </div>
        </div>
      </section>
  
      <!-- FAQ Section -->
      <section class="py-16 bg-gray-100">
        <div class="container mx-auto px-6">
          <h2 class="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div class="space-y-4">
            <details class="bg-white p-4 rounded shadow">
              <summary class="cursor-pointer font-semibold">What is ClickHR and how does it work?</summary>
              <p class="mt-2 text-sm text-gray-600">ClickHR is a SaaS recruitment platform with dashboards and candidate management tools.</p>
            </details>
            <details class="bg-white p-4 rounded shadow">
              <summary class="cursor-pointer font-semibold">How does ClickHR ensure data security?</summary>
              <p class="mt-2 text-sm text-gray-600">We use industry best practices including encryption and access control.</p>
            </details>
          </div>
        </div>
      </section>
  
      <!-- Contact Section -->
      <section class="py-16 bg-white">
        <div class="container mx-auto grid md:grid-cols-2 gap-8 px-6">
          <div>
            <h3 class="text-2xl font-bold mb-4">Contact</h3>
            <p class="mb-2">Location: 62B Woodside Ave, Woodbridge, ON, L4L 0H4, Canada</p>
            <p class="mb-2">Email: contact@clickhr.com</p>
            <p class="mb-4">Phone: +1 437-995-8288</p>
            <iframe class="w-full h-64" src="https://www.google.com/maps/embed?..." loading="lazy"></iframe>
          </div>
          <form class="space-y-4">
            <input type="text" placeholder="Your Name" class="w-full p-3 border border-gray-300 rounded" />
            <input type="email" placeholder="Your Email" class="w-full p-3 border border-gray-300 rounded" />
            <input type="text" placeholder="Subject" class="w-full p-3 border border-gray-300 rounded" />
            <textarea placeholder="Message" class="w-full p-3 border border-gray-300 rounded"></textarea>
            <button type="submit" class="mt-6 w-full bg-[#11376d] text-white font-semibold py-3 rounded-full hover:bg-[#0e2e5c] transition">Send Message</button>
          </form>
        </div>
      </section>
  
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Header from './Header.vue'
  import Footer from './Footer.vue'
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
  }
  </style>
  