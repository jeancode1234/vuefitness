<template>
    <div>
        <transition name="fade-scale">
            <div class="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-[70] flex items-center justify-center">
                <div
                    class="bg-white p-6 md:p-8 rounded-3xl shadow-2xl w-full max-w-sm mx-4 space-y-6 border border-gray-100 transition duration-300 ease-in-out">
                    <!-- Titre -->
                    <h2 class="text-center text-xl md:text-2xl font-semibold text-gray-900">
                        Ajouter un avantage
                    </h2>

                    <!-- Champ input -->
                    <div>
                        <label class="block mb-1 text-gray-700 font-medium">Avantage</label>
                        <input v-model="input" type="text" placeholder="Ex : Accès aux vidéos exclusives"
                            class="w-full rounded-full bg-gray-100 text-base p-3 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-black transition" />
                    </div>

                    <!-- Boutons -->
                    <div class="flex justify-center gap-4 pt-2">
                        <button @click="closeModal"
                            class="px-6 py-2 rounded-full text-gray-700 border border-gray-300 hover:bg-gray-100 transition">
                            Annuler
                        </button>
                        <button @click="AddAvantage"
                            class="px-6 py-2 rounded-full bg-black text-white hover:bg-gray-900 transition">
                            Confirmer
                        </button>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<style scoped>
/* Animation fade + scale */
.fade-scale-enter-active,
.fade-scale-leave-active {
    transition: all 0.25s ease;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
    opacity: 0;
    transform: scale(0.95);
}
</style>


<script>
export default {
    data() {
        return {
            input: ""
        }
    },
    methods: {
        closeModal() {
            this.$emit('closeModal');
        },
        AddAvantage() {
            this.$emit('AddAvantage', this.input);
            this.input = ""
        },
    },
};
</script>