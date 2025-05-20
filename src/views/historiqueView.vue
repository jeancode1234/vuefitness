<template>
  <div class="flex h-full">
    <Sidebar />
    <div class="flex-1 p-6">
      <header class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold">Dashboard</h1>
        <button @click="toggleSidebar" class="lg:hidden p-2 bg-blue-500 text-white rounded">Toggle Sidebar</button>
      </header>
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from '../views/users/SidebarView.vue';

export default {
  components: { Sidebar },
  methods: {
    toggleSidebar() {
      this.$refs.sidebar.toggle();
    },
  },
};
</script>