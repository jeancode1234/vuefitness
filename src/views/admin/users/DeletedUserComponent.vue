<template>
    <div>
        <div class="fixed inset-0 bg-black bg-opacity-50 flex z-[60] items-center justify-center">
      <div
        class="bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full mx-4 border border-gray-100 transform transition-all duration-300 ease-in-out scale-95 hover:scale-100">
        <!-- Icône illustrative -->
        <div class="flex justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14 text-red-500" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
        </div>

        <!-- Message -->
        <p class="text-gray-800 text-center text-xl font-semibold mb-6">
          voulez vous vraiment vous supprimer ce compte ?
        </p>

        <!-- Boutons -->
        <div class="flex justify-center space-x-4">
          <!-- Bouton Annuler -->
          <button @click="closeModal"
            class="bg-transparent text-gray-600 px-8 py-3 rounded-full border border-gray-300 hover:bg-gray-50 transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-300">
            annuler
          </button>

          <!-- Bouton Confirmer -->
          <button @click="deletedUser"
            class="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-500 transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-300">
            supprimer
          </button>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
    export default{
  props: {
    CurrentUserId:String
  },
  methods: {
    closeModal() {
      this.$emit('closeModal');
    },

    destroyUser() {
      this.axios
        .post(
          this.$store.state.api + "deletedUser/" + this.CurrentUserId,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
            },
          }
        )
        .then(() => {
          this.$emit("destroyUser",this.CurrentUserId)
        })
        .catch((error) => {
          console.error("Erreur lors de la déconnexion: ", error);
        });
    },
  },

    }
</script>