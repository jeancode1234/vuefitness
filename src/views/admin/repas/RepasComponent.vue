<template>
    <div class="w-full h-screen flex items-center justify-center">
           
        <div class="w-full space-y-4">
            <form action="" class="w-full ml-[10em] md:ml-[30em] md:w-3/6 bg-gray-200 overflow-hidden rounded-2xl">
                <div class="w-full py-4 bg-gray-900 text-white text-center">
                    <h1 class="text-2xl">Créer un nouveau repas</h1>
                </div>
                <div class="w-full p-8 space-y-2">
                    <div class="w-full flex space-x-4">
                        <div class="w-full md:w-1/2 space-y-2 flex flex-col">
                            <label for="" class="text-xl text-gray-900 ">Horaire</label>
                            <select name="horaire" v-model="form.horaire_id" id=""
                                class="w-full outline-none px-4 py-3 rounded ">
                                <option value="" selected disabled>Selectionner une horaire</option>
                                <option value="">Petit-dejeuner</option>
                                <option value="">Dejeuner</option>
                                <option value="">Diner</option>
                            </select>

                        </div>
                        <div class="w-full md:w-1/2 space-y-2 flex flex-col">
                            <label for="" class="text-xl text-gray-900 ">Objectif</label>
                            <select name="horaire" v-model="form.objectif_id" id=""
                                class="w-full outline-none px-4 py-3 rounded ">
                                <option value="" selected disabled>Selectionner un objectif</option>
                                <option value="">Prise de masse</option>
                                <option value="">Perte de poids</option>
                                <option value="">Musculature</option>
                            </select>

                        </div>
                    </div>
                    <div class="w-full space-y-2 flex flex-col">
                        <label for="" class="text-xl text-gray-900 ">Etat de santé</label>
                        <select name="horaire" v-model="form.etat_id" id=""
                            class="w-full outline-none px-4 py-3 rounded ">
                            <option value="" selected disabled>Selectionner un etat de sante</option>
                            <option value="">Prise de masse</option>
                            <option value="">Perte de poids</option>
                            <option value="">Musculature</option>
                        </select>

                    </div>
                    <div class="w-full space-y-2 flex flex-col">
                        <label for="" class="text-xl text-gray-900 ">Repas</label>
                        <input name="horaire" v-model="form.repas" id=""
                            class="w-full outline-none px-4 py-3 rounded " />

                    </div>
                    <div class="w-full space-y-2 flex flex-col">
                        <label for="" class="text-xl text-gray-900 ">Status</label>
                        <select name="horaire" v-model="form.status" id=""
                            class="w-full outline-none px-4 py-3 rounded ">
                            <option value="" selected disabled>Selectionner un Status</option>
                            <option value="">Active</option>
                            <option value="">Desactive</option>
                        </select>

                    </div>
                    <div class="pt-4">
                        <button type="submit" class="px-8 py-3 bg-red-600 hover:bg-red-800 text-white text-xl">Enregistrer</button>

                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {

            }
        }
    },
}
</script>