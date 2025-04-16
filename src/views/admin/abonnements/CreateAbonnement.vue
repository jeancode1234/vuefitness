<template>
    <div>
        <add-avantage-component v-if="AddAvanTap" @closeModal="AddAvanTap = false" @AddAvantage="AddAvantagMethode" />

        <div class="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-[60] flex items-center justify-center">
            <form
                class="bg-white p-6 md:p-8 rounded-3xl shadow-2xl w-full max-w-md mx-4 space-y-6 border border-gray-100 transition duration-300 ease-in-out">
                <!-- Titre -->
                <h2 class="text-center text-2xl font-semibold text-gray-900">
                    Ajouter un plan d'abonnement
                </h2>

                <!-- Champ titre -->
                <div>
                    <label class="block mb-1 text-gray-700 font-medium">Titre</label>
                    <input v-model="titre" type="text" required
                        class="w-full rounded-xl bg-gray-100 text-base p-3 focus:outline-none focus:ring-2 focus:ring-black transition" />
                </div>

                <!-- Champ avantages -->
                <div>
                    <div class="flex justify-between items-center mb-1">
                        <label class="text-gray-700 font-medium">Avantages</label>
                        <button type="button" @click="AddAvanTap = true"
                            class="text-xl font-semibold text-gray-500 hover:text-black transition">
                            +
                        </button>
                    </div>
                    <div class="max-h-36 overflow-y-auto space-y-2">
                        <div v-for="(item, index) in avantages" :key="item"
                            class="flex justify-between items-center bg-green-100 px-4 py-2 rounded-xl">
                            <span class="text-sm text-green-800 font-medium">{{ item }}</span>
                            <button @click="deletedAvantage(index)" type="button"
                                class="text-red-500 hover:text-red-700 font-bold">
                                -
                            </button>
                        </div>
                        <div v-if="avantages.length === 0" class="text-center text-sm text-gray-400">
                            Aucun avantage ajouté
                        </div>
                    </div>
                </div>

                <!-- Durée -->
                <div>
                    <label class="block mb-1 text-gray-700 font-medium">Durée</label>
                    <select v-model="Currentduree" required
                        class="w-full rounded-xl bg-gray-100 text-base p-3 focus:outline-none focus:ring-2 focus:ring-black transition">
                        <option v-for="item in duree" :key="item" :value="item">{{ item }}</option>
                    </select>
                </div>

                <!-- Prix -->
                <div>
                    <label class="block mb-1 text-gray-700 font-medium">Prix</label>
                    <input v-model="prix" type="number" required
                        class="w-full rounded-xl bg-gray-100 text-base p-3 focus:outline-none focus:ring-2 focus:ring-black transition" />
                </div>

                <!-- Loader ou Boutons -->
                <div v-if="loading" class="flex justify-center">
                    <div class="loader w-6 h-6 border-2 border-t-transparent border-red-500 rounded-full animate-spin">
                    </div>
                </div>
                <div v-else class="flex justify-center gap-4 pt-4">
                    <button type="button" @click="closeModal"
                        class="px-6 py-2 rounded-full text-gray-700 border border-gray-300 hover:bg-gray-100 transition">
                        Annuler
                    </button>
                    <button type="button" @click="SaveAbonnement"
                        class="px-6 py-2 rounded-full bg-black text-white hover:bg-gray-900 transition">
                        Confirmer
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>


<script>
import AddAvantageComponent from './AddAvantageComponent.vue';

export default {
    components: {
        AddAvantageComponent
    },
    data() {
        return {
            titre: "",
            avantages: [],
            duree: [
                '1 mois',
                '3 mois',
                '6 mois',
                '12 mois'
            ],
            prix: 0,
            AddAvanTap: false,
            loading: false,
            Currentduree: ""
        }
    },
    methods: {
        closeModal() {
            this.$emit('closeModal');
        },

        deletedAvantage(index) {
            this.avantages.splice(index, 1)
        },

        AddAvantagMethode(input) {
            this.avantages.unshift(input)
            this.AddAvanTap = false
        },

        SaveAbonnement() {
            this.loading = true
            let data = new FormData();
            data.append("titre", this.titre)
            data.append("duree", this.Currentduree)
            data.append("prix", this.prix)
            data.append("avantages", JSON.stringify(this.avantages))
            this.axios.post(this.$store.state.api + "saveAbonnement", data, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
                }
            }).then(({ data }) => {
                this.$emit("AddAbonnement", data)
                this.loading = false
            }).catch((error) => {
                this.loading = false
                console.log(error)
            })
        },
    },
};
</script>

<style>
.loader {
    animation: spin 1s linear infinite;
}
</style>