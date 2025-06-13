<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-[#0e2e5c] shadow-md p-4 space-y-6">
    <img src="../assets/white.png" alt="Logo" class="h-16 w-40 object-contain" />
    
      <nav class="space-y-4 text-white" >
        <NavItem icon="🏠" label="Dashboard" />
        <NavItem icon="👥" label="Employees" />
        <NavItem icon="🕒" label="Attendance" />
        <NavItem icon="💰" label="Payroll" />
        <NavItem icon="⚙️" label="Settings" />
      </nav>
    </aside>

    <!-- Main content -->
<div class="flex-1 flex flex-col">
  <!-- Top navbar -->
  <header class="bg-[#0e2e5c] shadow p-4">
    <h2 class="text-xl font-semibold text-white">Dashboard Overview</h2>
  </header>

  <!-- Dashboard Cards -->
  <main class="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <DashboardCard title="Total Employees" value="128" />
    <DashboardCard title="Today's Attendance" value="112" />
    <DashboardCard title="Pending Leaves" value="9" />
  </main>

  <!-- Calendar + Notes -->
  <div class="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <!-- Calendar spans two rows -->
    <div class="lg:row-span-2 lg:col-span-2">
      <Calender />
    </div>

    <!-- Notes input card -->
    <NotesCard />
  </div>
</div>

  </div>
</template>

<script setup>
import NavItem from './NavItem.vue'
import DashboardCard from './DashboardCard.vue'
import Calender from './Calender.vue'
import NotesCard from './NotesCard.vue'
</script>
