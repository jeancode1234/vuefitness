<template>
    <nav 
      class="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 lg:flex lg:flex-col lg:static lg:visible lg:w-64 lg:h-full"
      :class="{ 'hidden': !isVisible, 'block': isVisible }"
      ref="sidebar"
    >
      <ul>
        <li><router-link to="/">Historique des Menus</router-link></li>
        <li><router-link to="/notifications">Notifications</router-link></li>
        <li><router-link to="/edit-profile">Éditer Profil</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isVisible: true,
      };
    },
    methods: {
      toggle() {
        this.isVisible = !this.isVisible;
      },
    },
  };
  </script>