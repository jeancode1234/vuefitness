<template>
  <div>
    <logout-component v-if="logoutTap" @closeModal="logoutTap = false" />
    <div
      class="min-h-screen min-w-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white text-black dark:text-white">
      <!-- Header -->
      <div class="fixed min-w-full w-full h-20 flex items-center justify-between text-white z-10">
        <div
          class="flex flex-col items-center justify-center md:justify-center p-3 w-full h-full  border-none bg-red-700">
          <img class="w-7 h-7 md:w-8 md:h-8  mr-2 rounded-full object-cover object-top  overflow-hidden"
            src="../../assets/icon/user.svg" />
          <span class="hidden md:block text-white text-lg font-semibold">{{ user.nom }}</span>
        </div>
        <div class="px-3 min-w-[83.5%] flex justify-between items-center h-full  header-right bg-red-700">
          <div class="bg-white rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-200">
            <button class="outline-none focus:outline-none">
              <svg class="w-5 text-gray-600 h-5 cursor-pointer" fill="none" stroke-linecap="round"
                stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
            <input type="search" name="" id="" placeholder="Search"
              class="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent" />
          </div>
          <ul class="flex items-center space-x-2">
            <li class="relative">

            </li>
            <li>
              <button @click="logout" class="flex items-center mr-4 hover:text-blue-100">
                <span class="inline-flex mr-1">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
                    </path>
                  </svg>
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <!-- ./Header -->

      <!-- Sidebar -->
      <div
        class="fixed flex flex-col mt-2 top-16 left-0 w-16 hover:w-64 md:w-64 bg-red-700 h-full transition-all duration-300 border-none z-10 sidebar">
        <div class="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
          <ul class="flex flex-col py-4 space-y-1">
            <li class="px-5 hidden md:block">
              <div class="flex flex-row items-center h-8">
                <div class="text-sm font-medium tracking-wide text-gray-700 uppercase">
                  Tableau de bord
                </div>
              </div>
            </li>
            <li>
              <router-link to="/dashboard"
                class="relative flex mx-4 items-center h-11 focus:outline-none  hover:bg-red-800  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500  ">
                <span class="inline-flex justify-center items-center ">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                    </path>
                  </svg>
                </span>
                <span class="ml-2 text-sm tracking-wide truncate ">Dashboard</span>
              </router-link>
            </li>
            <li>
              <router-link to="/abonnements"
                class="relative flex mx-4 items-center h-11 focus:outline-none  hover:bg-red-800  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500  ">
                <span class="inline-flex justify-center items-center ">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                    </path>
                  </svg>
                </span>
                <span class="ml-2 text-sm tracking-wide truncate ">Abonnements</span>
              </router-link>
            </li>

            <li>
              <router-link to="/abonnementsClient"
                class="relative flex mx-4 items-center h-11 focus:outline-none  hover:bg-red-800  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500  ">
                <span class="inline-flex justify-center items-center ">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                    </path>
                  </svg>
                </span>
                <span class="ml-2 text-sm tracking-wide truncate ">Abonnements - client</span>
              </router-link>
            </li>

            <li>
              <router-link to="/dashboardAdmin"
                class="relative flex mx-4 items-center h-11 focus:outline-none  hover:bg-red-800  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500  ">
                <span class="inline-flex justify-center items-center ">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                    </path>
                  </svg>
                </span>
                <span class="ml-2 text-sm tracking-wide truncate ">Programmes</span>
              </router-link>
            </li>


            <li>
              <router-link to="/dashboardAdmin"
                class="relative flex mx-4 items-center h-11 focus:outline-none  hover:bg-red-800  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500  ">
                <span class="inline-flex justify-center items-center ">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                    </path>
                  </svg>
                </span>
                <span class="ml-2 text-sm tracking-wide truncate ">Repas</span>
              </router-link>
            </li>

            <li class="px-5 hidden md:block">
              <div class="flex flex-row items-center mt-5 h-8">
                <div class="text-sm font-medium tracking-wide text-gray-700 uppercase">
                  Settings
                </div>
              </div>
            </li>
            <li>
              <router-link to="/navbarUser"
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                <span class="inline-flex justify-center items-center ml-4">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </span>
                <span class="ml-2 text-sm tracking-wide truncate">Profile</span>
              </router-link>
            </li>
          </ul>
          <p class="mb-20 px-5 py-3 hidden md:block text-center text-xs">
            Copyright @2025
          </p>
        </div>
      </div>
      <!-- ./Sidebar -->
      <div class="ml-64 mt-20">
        <router-view name="two"></router-view>
      </div>

    </div>
  </div>
</template>

<script>
import LogoutComponent from '@/components/auth/LogoutComponent.vue';
export default {
  data() {
    return {
      isOpen: false,
      isConnected: false,
      user: {},
      users: {},
      logoutTap:false
    };
  },

  components: {
    LogoutComponent
  },



  methods: {
    logout() {
      this.logoutTap = true
    },
  },
  mounted() {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      this.isConnected = true;
      this.axios
        .get(this.$store.state.api + "user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          this.user = data[0];
          this.$store.state.user =  data[0];
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

<style></style>