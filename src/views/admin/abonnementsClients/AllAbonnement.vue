<template>
    <div class="p-6 space-y-8  rounded-3xl ">

        <div class="flex justify-between items-center">
            <div class="space-y-3">
                <h2 class="text-xl font-semibold text-gray-900 ">
                    Abonnements des clients
                </h2>

                <div class="flex justify-center space-x-3">
                    <button v-for="option in filtres" :key="option" @click="filtreActif = option" :class="[
                        'px-6 py-2 rounded-full transition-all text-sm',
                        filtreActif === option
                            ? 'bg-black text-white shadow-md'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    ]">
                        {{ option }}
                    </button>
                </div>
            </div>
            <div class="flex justify-end pt-4">
                <button @click="refreshAbonnements"
                    class="px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md">
                    Rafraîchir
                </button>
            </div>
        </div>


        <!-- Message si aucun abonnement -->
        <div v-if="abonnementsFiltres.length === 0" class="text-center text-gray-500 text-lg pt-6">
            Aucun abonnement trouvé pour le filtre sélectionné.
        </div>

        <!-- Table des abonnements -->
        <div v-else class="overflow-x-auto">
            <table class="min-w-full table-auto ">
                <thead>
                    <tr>
                        <th class="px-6 py-4 text-left text-xl font-semibold text-gray-800">Nom du client</th>
                        <th class="px-6 py-4 text-left text-xl font-semibold text-gray-800">Abonnement</th>
                        <th class="px-6 py-4 text-left text-xl font-semibold text-gray-800">Durée</th>
                        <th class="px-6 py-4 text-left text-xl font-semibold text-gray-800">Statut</th>
                        <th class="px-6 py-4 text-left text-xl font-semibold text-gray-800">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="abonnement in abonnementsFiltres" :key="abonnement.id">
                        <td class="px-6 py-4 text-gray-700">{{ abonnement.user.nom }}</td>
                        <td class="px-6 py-4 text-gray-700">{{ abonnement.titre }}</td>
                        <td class="px-6 py-4 text-gray-700">{{ abonnement.duree }}</td>
                        <td class="px-6 py-4">
                            <span :class="{
                                'text-green-600': abonnement.statut === 'actif',
                                'text-red-600': abonnement.statut === 'annulé',
                                'text-yellow-600': abonnement.statut === 'en attente'
                            }">
                                {{ abonnement.statut }}
                            </span>
                        </td>
                        <td class="px-6 py-4 flex space-x-4">
                            <a :href="whatsappLink(abonnement.user.telephone, 'activation', abonnement.titre)"
                                target="_blank"
                                class="px-4 py-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition-all">
                                Activer
                            </a>
                            <a :href="whatsappLink(abonnement.user.telephone, 'annulation', abonnement.titre)"
                                target="_blank"
                                class="px-4 py-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-all">
                                Annuler
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        this.axios.get(this.$store.state.api + "getAbonnementsClients", {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
            }
        }).then(({ data }) => {
            this.abonnements = data
        }).catch((error) => {
            console.log(error)
        })
    },
    data() {
        return {
            filtreActif: 'Tous',
            filtres: ['Tous', 'actif', 'en attente', 'annulé'],
            abonnements: []
        }
    },
    computed: {
        abonnementsFiltres() {
            if (this.filtreActif === 'Tous') {
                return this.abonnements
            }
            return this.abonnements.filter(a => a.statut === this.filtreActif)
        }
    },
    methods: {
        // Rafraîchir les abonnements (simulation de la mise à jour)
        refreshAbonnements() {
            // Ici, vous pouvez ajouter une requête pour récupérer les abonnements à partir de l'API Laravel.
            // Pour l'instant, nous simulons la mise à jour des données
            this.abonnements = [
                {
                    id: 1,
                    client: {
                        nom: 'Jean Dupont',
                        telephone: '+237690112233'
                    },
                    titre: 'Forme intense',
                    duree: '3 mois',
                    statut: 'en attente'
                },
                {
                    id: 2,
                    client: {
                        nom: 'Sarah K',
                        telephone: '+237691234567'
                    },
                    titre: 'Yoga Zen',
                    duree: '1 mois',
                    statut: 'actif'
                },
                {
                    id: 3,
                    client: {
                        nom: 'Paul M',
                        telephone: '+237699887766'
                    },
                    titre: 'Cardio Plus',
                    duree: '6 mois',
                    statut: 'annulé'
                }
            ]
        },
        whatsappLink(tel, action, plan) {
            const base = 'https://wa.me/';
            const msg = `Bonjour, concernant votre abonnement "${plan}", merci de confirmer son ${action}.`;
            return `${base}${tel.replace(/\D/g, '')}?text=${encodeURIComponent(msg)}`;
        },

        ActiveAboonement(abonnement) {
            let data = new FormData();
            data.append("user_id", abonnement.user_id)
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
        }
    }
}
</script>

<style scoped>
/* Styles inspirés d'Apple avec transitions fluides */
table {
    border-collapse: collapse;
    width: 100%;
}

th,
td {
    border-bottom: 2px solid #f0f0f0;
}

td {
    padding: 12px;
}

button:hover,
a:hover {
    transform: translateY(-2px);
}
</style>