<template>
  <div class="flex justify-center  text-black">
    <create-abonnement @closeModal="AddPlanTap = false" v-if="AddPlanTap" @AddAbonnement="AddAbonnement" />

    <div class="w-11/12 mx-auto px-4 ">
      <!-- Header -->
      <div class="flex justify-between items-center py-4">
        <div>
          <h2 class="text-xl  font-semibold tracking-tight text-gray-900">
            Liste des abonnements
          </h2>
          <p class="text-xs md:text-base font-light text-gray-500">
            Vos offres premium pour vos clients
          </p>
        </div>
        <button @click="AddPlanTap = true"
          class="bg-black text-white rounded-full px-6 py-2 hover:bg-gray-800 transition-all duration-300 shadow-md">
          Ajouter
        </button>
      </div>

      <no-abonnement v-if="abonnements.length === 0" />


      <!-- Cartes d'abonnement -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-4">
        <div v-for="item in abonnements" :key="item.id"
          class="rounded-3xl p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h4 class="text-center text-3xl font-bold uppercase text-gray-900">
            {{ item.titre }}
          </h4>

          <div class="flex flex-col items-center py-6">
            <p class="text-4xl font-extrabold text-black mb-2">
              {{ item.prix }} XAF
              <span class="text-base text-gray-500 font-medium">/ {{ item.duree }}</span>
            </p>

            <!-- Avantages -->
            <div class="w-full space-y-3 mt-4">
              <div v-for="avantage in JSON.parse(item.avantages)" :key="avantage" class="flex items-center space-x-3">
                <div class="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                <p class="text-gray-700 text-sm">{{ avantage }}</p>
              </div>
            </div>

            <!-- Boutons -->
            <div class="flex space-x-4 mt-8">
              <button v-if="user.type > 0" @click="DeletedAbonnement(item)"
                class="px-6 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 font-medium text-sm transition">
                Supprimer
              </button>
              <button @click="SubscribeAbonnement(item)"
                class="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-900 font-medium text-sm transition">
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CreateAbonnement from './CreateAbonnement.vue';
import NoAbonnement from './NoAbonnement.vue';

export default {
  created() {
    this.axios.get(this.$store.state.api + "getAbonnements", {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
      }
    }).then(({ data }) => {
      this.abonnements = data
    }).catch((error) => {
      console.log(error)
    })
  },
  components: {
    CreateAbonnement,
    NoAbonnement
  },
  data() {
    return {
      AddPlanTap: false,
      abonnements: []
    }
  },
  methods: {
    AddAbonnement(abonnement) {
      this.abonnements.unshift(abonnement)
      this.AddPlanTap = false
    },

    DeletedAbonnement(item) {
      this.axios.delete(this.$store.state.api + "DeletedAbonnement/" + item.id, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
        }
      }).then(() => {
        this.abonnements.filter((row, index) => row.id == item.id ? this.abonnements.splice(index, 1) : "")
      }).catch((error) => {
        console.log(error)
      })
    },

    SubscribeAbonnement(item){
      this.axios.post(this.$store.state.api + "SubscribeAbonnement/" + item.id,"", {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
        }
      }).then(({data}) => {
        this.$store.state.abonnementClients.push(data)
      }).catch((error) => {
        console.log(error)
      })
    }
  },

  computed: {
    user() {
      return this.$store.state.user;
    }
  }
}
</script>