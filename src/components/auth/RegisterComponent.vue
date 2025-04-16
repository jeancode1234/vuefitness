<template>
  <div style="font-family: Arial, Helvetica, sans-serif;">
    <div class="w-full relative lg:h-screen flex justify-center">
      <div class="w-full z-10 absolute flex justify-end h-auto">
        <form @submit.prevent="handleSubmit" class="h-full p-8 bg-white w-3/6">
          <div class="w-full">
            <h2 class="text-3xl text-gray-800 pb-8 text-center font-bold">Commencez dès maintenant</h2>

            <div v-if="errors.length" class="w-full space-y-2 flex flex-col py-2 justify-center">
              <p v-for="(error, index) in errors" :key="index"
                class="bg-red-500 w-full text-center text-white rounded px-2 py-1">{{ error }}</p>
            </div>

            <!-- Étape 1 -->
            <div v-if="step === 1" class="w-full space-y-4">
              <h3 class="text-lg">Étape 1 : Informations personnelles</h3>
              <div class="w-full space-y-4">
                <div class="space-y-2">
                  <label class="text-lg text-gray-800">status:</label>
                  <select v-model="formData.status" required
                    class="w-full text-gray-800 border p-3 rounded-xl border-gray-900 bg-transparent">
                    <option value="" disabled>Sélectionnez votre status</option>
                    <option value="diabétique">Diabétique</option>
                    <option value="hypertendu">Hypertendu(e)</option>
                    <option value="normal">Aucun</option>
                  </select>
                </div>
                <div class="w-full flex space-x-2">
                  <div class="space-y-2 w-1/2">
                    <label class="text-lg text-gray-800">Nom:</label>
                    <input type="text" v-model="formData.nom" required
                      class="w-full text-gray-800 border p-3 rounded-xl border-gray-900 bg-transparent" />
                  </div>
                  <div class="space-y-2 w-1/2">
                    <label class="text-lg text-gray-800">Prenom:</label>
                    <input type="text" v-model="formData.prenom" required
                      class="w-full text-gray-800 border p-3 rounded-xl border-gray-900 bg-transparent" />
                  </div>
                </div>
                <div class="space-y-2">
                  <label class="text-lg text-gray-800">Email:</label>
                  <input type="email" v-model="formData.email" required
                    class="w-full text-gray-800 border p-3 rounded-xl border-gray-900 bg-transparent" />
                </div>
                <div class="space-y-2">
                  <label class="text-lg text-gray-800">Téléphone:</label>
                  <input type="text" v-model="formData.telephone" required
                    class="w-full text-gray-800 border p-3 rounded-xl border-gray-900 bg-transparent" />
                </div>
              </div>
              <div class="w-full flex justify-end py-4">
                <button type="button" @click="validateStep1"
                  class="px-6 py-3 rounded-xl shadow bg-red-800 hover:bg-red-900 text-white">Suivant</button>
              </div>
            </div>

            <!-- Étape 2 -->
            <div v-if="step === 2" class="w-full space-y-4">
              <h3 class="text-lg font-semibold">Étape 2 : Informations supplémentaires</h3>
              <div class="space-y-2">
                <label class="text-lg text-gray-800">Pays:</label>
                <input type="text" v-model="formData.pays" required
                  class="w-full text-gray-800 border p-3 rounded-xl border-gray-900 bg-transparent" />
              </div>
              <div class="space-y-2">
                <label class="text-lg text-gray-800">Ville:</label>
                <input type="text" v-model="formData.ville" required
                  class="w-full text-gray-800 border p-3 rounded-xl border-gray-900 bg-transparent" />
              </div>
              <div class="space-y-2">
                <label class="text-lg text-gray-800">Poids:</label>
                <input type="number" v-model="formData.poids" required
                  class="w-full text-gray-800 border p-3 rounded-xl border-gray-900 bg-transparent" />
              </div>
              <div class="space-y-2">
                <label class="text-lg text-gray-800">Taille:</label>
                <input type="number" v-model="formData.taille" required
                  class="w-full text-gray-800 border p-3 rounded-xl border-gray-900 bg-transparent" />
              </div>
              <div class="w-full flex justify-between">
                <button type="button" @click="prevStep"
                  class="px-6 py-3 rounded-xl shadow bg-gray-800 hover:bg-gray-900 text-white">Précédent</button>
                <button type="button" @click="validateStep2"
                  class="px-6 py-3 rounded-xl shadow bg-red-800 hover:bg-red-900 text-white">Suivant</button>
              </div>
            </div>

            <!-- Étape 3 -->
            <div v-if="step === 3" class="w-full space-y-4">
              <h3 class="text-lg font-semibold">Étape 3 : Informations finales</h3>
              <div class="space-y-2">
                <label class="text-lg text-gray-800">Age:</label>
                <input type="number" v-model="formData.age" required
                  class="w-full text-gray-800 border p-3 rounded-xl border-gray-900 bg-transparent" />
              </div>
              <div class="space-y-2">
                <label class="text-lg text-gray-800">Sexe:</label>
                <select v-model="formData.sexe" required
                  class="w-full text-gray-800 border p-3 rounded-xl border-gray-900 bg-transparent">
                  <option value="" disabled>Sélectionnez votre sexe</option>
                  <option value="masculin">Masculin</option>
                  <option value="féminin">Féminin</option>
                </select>
              </div>
              <div class="space-y-2">
                <label class="text-lg text-gray-800">Objectif:</label>
                <input type="text" v-model="formData.objectif" required
                  class="w-full text-gray-800 border p-3 rounded-xl border-gray-900 bg-transparent" />
              </div>
              <div class="space-y-2">
                <label class="text-lg text-gray-800">Mot de passe:</label>
                <input type="password" v-model="formData.password" required
                  class="w-full text-gray-800 border p-3 rounded-xl border-gray-900 bg-transparent" />
              </div>
              <div class="space-y-2">
                <label class="text-lg text-gray-800">Confirmer le mot de passe:</label>
                <input type="password" v-model="formData.confirmMotDePasse" required
                  class="w-full text-gray-800 border p-3 rounded-xl border-gray-900 bg-transparent" />
              </div>

              <div class="w-full flex justify-between items-center">
                <button type="button" @click="prevStep"
                  class="px-6 py-3 rounded-xl shadow bg-gray-800 hover:bg-gray-900 text-white">Précédent</button>

                <!-- BOUTON AVEC LOADING -->
                <button type="submit" :disabled="loading"
                  class="px-6 py-3 rounded-xl shadow bg-red-800 hover:bg-red-900 text-white flex items-center justify-center">
                  <span v-if="loading" class="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></span>
                  <span>{{ loading ? 'Soumission...' : 'Soumettre' }}</span>
                </button>
              </div>
            </div>

            <div class="text-center text-gray-600 mt-4">
              <p>Vous avez déjà un compte ? <router-link to="/login" class="text-red-800 underline">Connexion</router-link></p>
            </div>
          </div>
        </form>
      </div>

      <div class="w-full relative h-full">
        <div class="w-full h-full absolute bg-black/80"></div>
        <img src="./../../assets/img/fit.jpg" class="w-full h-full object-cover object-center" alt="background" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      loading: false,
      formData: {
        nom: '',
        prenom: '',
        status: '',
        email: '',
        telephone: '',
        pays: '',
        ville: '',
        poids: '',
        taille: '',
        age: '',
        sexe: '',
        objectif: '',
        password: '',
        confirmMotDePasse: '',
        type: 0,
      },
      errors: [],
      message: '',
    };
  },
  mounted() {
    if (localStorage.getItem('jwtToken')) {
      this.$router.push('/');
    }
  },
  methods: {
    validateStep1() {
      this.errors = [];
      if (!this.formData.status || !this.formData.nom || !this.formData.prenom || !this.formData.email || !this.formData.telephone) {
        this.errors.push("Veuillez remplir tous les champs de l'étape 1.");
      } else {
        this.step++;
      }
    },
    validateStep2() {
      this.errors = [];
      if (!this.formData.pays || !this.formData.ville || !this.formData.poids || !this.formData.taille) {
        this.errors.push("Veuillez remplir tous les champs de l'étape 2.");
      } else {
        this.step++;
      }
    },
    handleSubmit() {
      if (this.formData.password !== this.formData.confirmMotDePasse) {
        this.errors.push("Les mots de passe ne correspondent pas.");
        return;
      }

      this.errors = [];
      this.loading = true;

      let form = new FormData();
      for (let key in this.formData) {
        form.append(key, this.formData[key]);
      }

      this.axios.post(this.api + 'register', form)
        .then(({ data }) => {
          this.loading = false;
          localStorage.setItem("jwtToken", data.access_token.token);
          this.step = 1
          this.resetForm();
          this.$router.push("/dashboard");
          this.$store.commit("setUser", data.user);
        })
        .catch((error) => {
          // this.step = 1
          // this.resetForm();
          this.loading = false;
          this.errors = error.response?.data.errors || [error.response?.data.message || "Une erreur est survenue."];
        });
    },
    prevStep() {
      if (this.step > 1) {
        this.step--;
      }
    },
    resetForm() {
      this.formData = {
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        pays: '',
        ville: '',
        poids: '',
        taille: '',
        status: '',
        age: '',
        sexe: '',
        objectif: '',
        password: '',
        confirmMotDePasse: '',
        type: 0,
      };
      this.message = '';
      this.errors = [];
    },
  },
  computed: {
    api() {
      return this.$store.state.api;
    }
  }
};
</script>
