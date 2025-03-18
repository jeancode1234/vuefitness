<template>
  <div>
    <div class="w-full p-4 bg-black fixed z-20 flex items-center justify-between">
      <div class="flex justify-center">
        <h1 class="text-3xl font-extrabold text-center text-white uppercase italic">Dim<span class="text-red-600">Fitness</span></h1>
      </div>
      <button @click="toggleMenu" class="text-white md:hidden">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
      <nav :class="{'hidden': !isMenuOpen, 'flex': isMenuOpen}" class="flex-col md:flex md:flex-row md:items-center md:justify-center space-y-4 md:space-y-0 md:space-x-10 font-semibold text-lg text-white">
        <a href="" class="hover:text-red-700">Accueil</a>
        <a href="" class="hover:text-red-700">Apropos de nous</a>
        <a href="" class="hover:text-red-700">Blog</a>
        <a href="" class="hover:text-red-700">Historique</a>
        <a href="" class="hover:text-red-700">Astuces</a>
        <router-link to="/contact" class="hover:text-red-700">Contactez-nous</router-link>
        <div v-if="isConnected && user.role=='admin'">
          <router-link to="/dashboardAdmin">Tableau de bord</router-link>
        </div>
      </nav>
      <div class="flex items-center justify-center" v-if="isConnected">
        <button type="submit" @click="logout" class="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white shadow">Déconnexion</button>
      </div>
      <div class="flex items-center justify-between space-x-4" v-if="!isConnected">
        <router-link to="/login" class="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white shadow">Connexion</router-link>
        <router-link to="/register" class="px-6 py-3 rounded-lg border border-red-600 hover:bg-red-700 text-white shadow">S'inscrire</router-link>
      </div>
    </div>
    <router-view name="one"></router-view>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      isVisible: true,
      user: {},
      isConnected: false,
      open: ref(false),
      isMenuOpen: false,
      isDrop: false,
      URL_API: "http://127.0.0.1:8000/api/",
    };
  },
  methods: {
    logout() {
      this.axios
        .post(
          this.URL_API + "logout",
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
            },
          }
        )
        .then(() => {
          localStorage.removeItem("jwtToken");
          localStorage.removeItem("role");
          this.isConnected = false; // Mettre à jour l'état de connexion
          this.user = {}; // Réinitialiser les données de l'utilisateur
          this.$router.push("/");
        })
        .catch((error) => {
          console.error("Erreur lors de la déconnexion: ", error);
        });
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    dropDown() {
      this.isDrop = !this.isDrop;
    },
    handleScroll() {
      this.isVisible = window.scrollY < 100; // Changez 100 selon vos besoins
    },
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    const token = localStorage.getItem("jwtToken");
    if (token) {
      this.isConnected = true;
      this.axios
        .get(this.URL_API + "user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          this.user = response.data;
          console.log(this.user); // Stocker les données de l'utilisateur
        })
        .catch((error) => {
          console.error(
            "Erreur lors de la récupération des données de l'utilisateur: ",
            error
          );
        });
    }
  },
};
</script>