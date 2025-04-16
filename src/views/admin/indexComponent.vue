<template>

  <deleted-user-component :CurrentUserId="CurrentUserId" @destroyUser="refreshData" @closeModal="DeletedUserTap = false"
    v-if="DeletedUserTap" />
  <div class="relative bg-gray-800">
    <div class="w-full absolute ">
      <!-- Statistics Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 gap-4 mx-auto  w-11/12">
        <div
          class="bg-white shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-red-600  text-white font-medium group">
          <div
            class="flex justify-center items-center w-14 h-14  rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor"
              class="stroke-current text-red-600 transform transition-transform duration-500 ease-in-out">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
              </path>
            </svg>
          </div>
          <div class="text-right">
            <p class="text-2xl text-red-600">{{ dataDashbaord[0] }}</p>
            <p class="text-red-600">utilisateurs</p>
          </div>
        </div>

        <div
          class="bg-white shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-red-600  text-white font-medium group">
          <div
            class="flex justify-center items-center w-14 h-14  rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor"
              class="stroke-current text-red-600 transform transition-transform duration-500 ease-in-out">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6">
              </path>
            </svg>
          </div>
          <div class="text-right">
            <p class="text-2xl text-red-600">
              {{ dataDashbaord[1] }}
            </p>
            <p class="text-red-600">Total Menus</p>
          </div>
        </div>

        <div
          class="bg-white shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-red-600  text-white font-medium group">
          <div
            class="flex justify-center items-center w-14 h-14  rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor"
              class="stroke-current text-red-600 transform transition-transform duration-500 ease-in-out">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6">
              </path>
            </svg>
          </div>
          <div class="text-right">
            <p class="text-2xl text-red-600">
              {{ dataDashbaord[2] }}
            </p>
            <p class="text-red-600">Programmes Total</p>
          </div>
        </div>

      </div>
      <!-- ./Statistics Cards -->
      <!-- Client Table -->
      <div class="mt-2 mx-auto space-y-4 w-11/12">
        <div class="text-black font-semibold">
          <span>liste des utilisateurs</span>
        </div>
        <div class="w-full h-64 rounded-lg shadow-xs">
          <div class="w-full overflow-x-auto">
            <table class="w-full">
              <thead class="">
                <tr style=""
                  class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 ">
                  <th class="px-4 py-3">Nom</th>
                  <!-- <th class="px-4 py-3">email</th> -->
                  <th class="px-4 py-3">Email</th>
                  <th class="px-4 py-3">Role</th>
                  <th class="px-4 py-3">status</th>
                  <th class="px-4 py-3">objectif</th>
                  <th class="px-4 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody class=" divide-y dark:divide-gray-700 ">
                <tr v-for="row in dataDashbaord[3]" :key="row.id"
                  class="bg-gray-100 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400 duration-500">
                  <td class="px-4 py-3">
                    <div class="flex items-center text-sm">
                      <div>
                        <p class="font-semibold">{{ row.prenom }}</p>
                        <p class="text-xs text-gray-600 dark:text-gray-400">
                          {{ row.nom }}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-3 text-sm">{{ row.email }}</td>
                  <td class="px-4 py-3 text-sm text-red-600">
                    <p v-if="row.type == 0">Utilisateur</p>
                    <p v-if="row.type == 1">Administrateur</p>
                  </td>
                  <td class="px-4 py-3 text-xs">
                    <span
                      class="px-2 py-1 font-semibold leading-tight text-green-700 bg-red-100 rounded-full dark:bg-green-700 dark:text-green-100">
                      {{ row.status }}
                    </span>
                  </td>
                  <td class="px-4 py-3 text-xs">
                    <span class=" py-1 font-semibold leading-tight text-green-700  rounded-full ">
                      {{ row.objectif }}
                    </span>
                  </td>
                  <td class="px-2 py-3 text-sm flex justify-center space-x-2 text-right">
                    <button v-if="row.id != user.id" @click="destroyUser(row.id)"
                      class="bg-red-400 text-white font-semibold rounded px-2 py-1">
                      supprimer
                    </button>
                    
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- ./Client Table -->
    </div>

  </div>
</template>
<script>
import DeletedUserComponent from './users/DeletedUserComponent.vue';
export default {
  data() {
    return {
      hide: false,
      name: "",
      type: "",
      dataDashbaord: [],
      CurrentUserId: "",
      DeletedUserTap: false,
    };
  },
  components: {
    DeletedUserComponent
  },

  methods: {

    destroyUser(userId) {
      this.CurrentUserId = userId
      this.DeletedUserTap = true
    },

    refreshData(userId) {
      this.dataDashbaord[0]--
      this.dataDashbaord[3].filter((item, index) => item.id == userId ? this.dataDashbaord[3].slice(index, 1) : "")
      this.DeletedUserTap = false
    }


  },

  mounted() {
    if (localStorage.getItem("jwtToken")) {
      this.isConnected = true;
      this.axios
        .get(this.$store.state.api + "dashbaord", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        })
        .then(({ data }) => {
          this.dataDashbaord = data;
        })
        .catch((error) => {
          console.error(
            "Erreur lors de la récupération des données : ",
            error
          );
        });
    } else {
      this.$router.push('/login')
    }
  },

  computed: {
    user (){
      return this.$store.state.user;
    }
  },
};
</script>