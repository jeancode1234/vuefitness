<template>
  <div>
    <!-- Navbar -->
    <div class="w-full p-4 bg-black fixed z-30 flex items-center justify-between transition-all duration-300"
      :class="{ 'shadow-lg': !isVisible }">
      <!-- Logo -->
      <div class="flex xl:w-1/4 justify-center">
        <h1
          class="text-3xl font-extrabold text-center text-white uppercase italic animate__animated animate__fadeInLeft">
          Dim<span class="text-red-600">Fitness</span>
        </h1>
      </div>


      <div class=" xl:w-3/4 hidden lg:flex justify-between space-x-8 items-center">
        <!-- Navigation Links -->
        <nav
          class="flex items-center justify-center space-y-4 md:space-y-0 md:space-x-10 font-semibold text-lg text-white animate__animated animate__fadeIn">
          <router-link to="/" class="focus-within:outline-0 focus-within:text-red-700 transition-all hover:text-red-700 duration-300">Accueil</router-link>
          <router-link to="/apropos" class="focus-within:outline-0 focus-within:text-red-700 transition-all hover:text-red-700 duration-300">À propos</router-link>
          <router-link to="/services"
          class="focus-within:outline-0 focus-within:text-red-700 transition-all hover:text-red-700 duration-300">Services</router-link>
          <router-link to="/contact" class="hover:text-red-700 transition-colors duration-300">Contact</router-link>
          <div v-if="isConnected && user.role === 'admin'">
            <router-link to="/dashboardAdmin" class="hover:text-red-700 transition-colors duration-300">Tableau de
              bord</router-link>
          </div>
        </nav>

        <!-- Auth Buttons -->
        <div class="flex items-center justify-center" v-if="isConnected">
          <button type="submit" @click="logout"
            class="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white shadow transition-all duration-300 animate__animated animate__fadeInRight">
            Déconnexion
          </button>
        </div>
        <div class="flex items-center justify-between space-x-4" v-if="!isConnected">
          <router-link to="/login"
            class="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white shadow transition-all duration-300 animate__animated animate__fadeInRight">
            Connexion
          </router-link>
          <router-link to="/register"
            class="px-6 py-3 rounded-lg border border-red-600 hover:bg-red-700 text-white shadow transition-all duration-300 animate__animated animate__fadeInRight">
            S'inscrire
          </router-link>
        </div>
      </div>
      <!-- Menu Button (Mobile) -->
      <button @click="toggleMenu" class="text-white lg:hidden">
        <svg class="w-6 h-6 animate__animated animate__fadeInDown" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>

    <div :class="{
      hidden: !isMenuOpen,
      flex: isMenuOpen,
    }" class="w-full flex lg:hidden flex-col space-y-4 bg-black fixed z-20 h-screen p-4">
      <div class="w-full h-16"></div>
      <div class="w-full group ">
        <div class="w-full p-4 rounded group-hover:bg-red-800 group-hover:duration-200">

          <router-link to="/" class="text-lg block text-white font-bold">Home</router-link>
        </div>
      </div>
      <div class="w-full  group">
        <div class="w-full p-4 rounded group-hover:bg-red-800 group-hover:duration-200">

          <p class="text-lg text-white font-bold">Services</p>
        </div>
      </div>
      <div class="w-full  group">
        <div class="w-full p-4 rounded group-hover:bg-red-800 group-hover:duration-200">

          <p class="text-lg text-white font-bold">Blog</p>
        </div>
      </div>
      <div class="w-full space-y-4">
        <div class="w-full p-4 rounded bg-red-800">
          <router-link to="/" class="text-lg block text-white font-bold">Connexion</router-link>
        </div>
        <div class="w-full p-4 rounded bg-white">
          <router-link to="/" class="text-lg block text-black font-bold">S'inscrire</router-link>
        </div>
      </div>
    </div>
    <!-- Router View -->
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
    handleScroll() {
      this.isVisible = window.scrollY < 100; // Changez 100 selon vos besoins
    },
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
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

<style scoped>
/* Navbar styles */
nav {
  transition: all 0.3s ease-in-out;
}

/* Responsive styles */
@media (max-width: 768px) {
  nav {
    flex-direction: column;
    align-items: flex-start;
  }
}

/* Animations */
.animate__animated {
  animation-duration: 0.5s;
  animation-fill-mode: both;
}

/*  */
</style>