<template>
  <div style="font-family: Arial, Helvetica, sans-serif;">
    <div class="w-full relative lg:h-screen flex  justify-center ">
      
      <div class="w-full lg:z-10 absolute flex  justify-end h-auto ">
        <form @submit.prevent="handleSubmit" class=" h-full p-8 bg-white lg:w-3/6">
          <div class="w-full">
            <h2 class="text-3xl text-gray-800 pb-8 text-center font-bold">Commencez dès maintenant</h2>
            <div v-if="errors.length" class="w-full space-y-2 flex flex-col py-2 justify-center">
              <p v-for="(error, index) in errors" :key="index" class="bg-red-500 w-full text-center text-white rounded px-2 py-1">{{ error }}</p>
            </div>
            <div class="">
              <div v-if="step === 1" class="w-full space-y-4">
                <h3 class="text-lg ">Étape 1 : Informations personnelles</h3>
                <div class="w-full space-y-4">
                  <div class=" space-y-2">
                    <label for="" class="text-lg text-gray-800">Statut:</label>
                    <select v-model="formData.statut" required class="w-full placeholder:text-gray-800 text-gray-800 outline-none border p-3 flex items-center rounded-xl border-gray-900 bg-transparent">
                      <option value="" disabled>Sélectionnez votre statut</option>
                      <option value="diabétique">Diabétique</option>
                      <option value="hypertendu">Hypertendu(e)</option>
                      <option value="hypertendu">Normal(e)</option>
                      <option value="normal">Autre</option>
                
                    </select>
                  </div>
                  <div class="w-full flex space-x-2">

                    <div class="space-y-2 w-1/2">
                      <label for="" class="text-lg text-gray-800">Nom:</label>
                     <input type="text" v-model="formData.nom" required class="w-full placeholder:text-gray-800 text-gray-800 outline-none border p-3 flex items-center rounded-xl border-gray-900 bg-transparent" />
                    </div>
                  <div class="space-y-2 w-1/2">
                    <label for="" class="text-lg text-gray-800">Prenom:</label>
                    <input type="text" v-model="formData.prenom" required  class="w-full placeholder:text-gray-800 text-gray-800 outline-none border p-3 flex items-center rounded-xl border-gray-900 bg-transparent" />
                  </div>
                  </div>
                 
                <div class="space-y-2">
                  <label for="" class="text-lg text-gray-800">Email:</label>
                   <input type="email" v-model="formData.email" required placeholder="Exple: john@gmail.com" class="w-full placeholder:text-gray-800 text-gray-800 outline-none border p-3 flex items-center rounded-xl border-gray-900 bg-transparent" />
                  </div>
                <div class="space-y-2">
                  <label for="" class="text-lg text-gray-800">Téléphone:</label>
                  <input type="text" v-model="formData.telephone" required placeholder="Entrer votre telephone" class="w-full placeholder:text-gray-800 text-gray-800 outline-none border p-3 flex items-center rounded-xl border-gray-900 bg-transparent" />
                </div>
                </div> 
                           
                <div class="w-full flex justify-end py-4">
                  <button type="button" @click="validateStep1" class="px-6 py-3 rounded-xl shadow bg-red-800 hover:bg-red-900 text-white">Suivant</button>

                </div>
              </div>

              <div v-if="step === 2" class="w-full space-y-4">
                <h3 class="text-lg font-semibold">Étape 2 : Informations supplémentaires</h3>
                <div class=" space-y-2">
                  <label for="" class="text-lg text-gray-800">Pays:</label>
                  <input type="text" v-model="formData.pays"  required class="w-full placeholder:text-gray-800 text-gray-800 outline-none border p-3 flex items-center rounded-xl border-gray-900 bg-transparent" />
                </div>
                <div class="space-y-2">
                  <label for="" class="text-lg text-gray-800">Ville:</label>
                  <input type="text" v-model="formData.ville"  required class="w-full placeholder:text-gray-800 text-gray-800 outline-none border p-3 flex items-center rounded-xl border-gray-900 bg-transparent" />
                </div>
                <div class="space-y-2">
                  <label for="" class="text-lg text-gray-800">Poids:</label>
                  <input type="number" v-model="formData.poids" placeholder="Poids (kg)" required class="w-full placeholder:text-gray-800 text-gray-800 outline-none border p-3 flex items-center rounded-xl border-gray-900 bg-transparent" />
                </div>
                <div class="space-y-2">
                  <label for="" class="text-lg text-gray-800">Taille:</label>
                  <input type="number" v-model="formData.taille" placeholder="Taille (cm)" required class="w-full placeholder:text-gray-800 text-gray-800 outline-none border p-3 flex items-center rounded-xl border-gray-900 bg-transparent" />
                </div>
                <div class="w-full flex items-center justify-between">
                  <button type="button" @click="prevStep" class="px-6 py-3 rounded-xl shadow bg-gray-800 hover:bg-gray-900 text-white">Précédent</button>
                  <button type="button" @click="validateStep2" class="px-6 py-3 rounded-xl shadow bg-red-800 hover:bg-red-900 text-white">Suivant</button>
                </div>
              </div>

              <div v-if="step === 3" class="w-full space-y-4">
                <h3 class="text-lg font-semibold">Étape 3 : Informations finales</h3>
                <div class="space-y-2">
                  <label for="" class="text-lg text-gray-800">Age:</label>
                  <input type="number" v-model="formData.age" placeholder="Âge" required class="w-full placeholder:text-gray-800 text-gray-800 outline-none border p-3 flex items-center rounded-xl border-gray-900 bg-transparent" />
                </div>
                <div class=" space-y-2">
                  <label for="" class="text-lg text-gray-800">Sexe:</label>
                  <select v-model="formData.sexe" required class="w-full placeholder:text-gray-800 text-gray-800 outline-none border p-3 flex items-center rounded-xl border-gray-900 bg-transparent">
                    <option value="" disabled>Sélectionnez votre sexe</option>
                    <option value="masculin">Masculin</option>
                    <option value="féminin">Féminin</option>
              
                  </select>
                </div>
                <div class="space-y-2">
                  <label for="" class="text-lg text-gray-800">Objectif:</label>
                  <input type="text" v-model="formData.objectif" placeholder="Exple: perte de poids etc..." required class="w-full placeholder:text-gray-800 text-gray-800 outline-none border p-3 flex items-center rounded-xl border-gray-900 bg-transparent" />
                </div>
                <div class=" space-y-2">
                  <label for="" class="text-lg text-gray-800">Mot de passe:</label>
                  <input type="password" v-model="formData.password" required class="w-full placeholder:text-gray-800 text-gray-800 outline-none border p-3 flex items-center rounded-xl border-gray-900 bg-transparent" />
                </div>
                <div class=" space-y-2">
                  <label for="" class="text-lg text-gray-800">Confirmer le mot de passe:</label>
                  <input type="password" v-model="formData.confirmMotDePasse" placeholder="Confirmation du mot de passe" required class="w-full placeholder:text-gray-800 text-gray-800 outline-none border p-3 flex items-center rounded-xl border-gray-900 bg-transparent" />
                </div>
                <div class="w-full flex items-center justify-between">
                  <button type="button" @click="prevStep" class="px-6 py-3 rounded-xl shadow bg-gray-800 hover:bg-gray-900 text-white">Précédent</button>
                  <button type="submit" class="px-6 py-3 rounded-xl shadow bg-red-800 hover:bg-red-900 text-white">soumettre</button>
                </div>
              </div>
            </div>
            <div class="text-center text-gray-600">
             <p>Vous avez déjà un compte? <router-link to="/login" class="text-red-800 underline">Connexion</router-link></p>
            </div>
          </div> 
         
        </form>
       
      </div>
        
      <div class="w-full hidden lg:flex relative h-full">
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
      formData: {
        nom: '',
        prenom: '',
        statut: '',
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
        role: 'patient',
      },
      URL_AUTH: 'http://127.0.0.1:8000/api/',
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
      if (!this.formData.statut || !this.formData.nom || !this.formData.prenom || !this.formData.email || !this.formData.telephone) {
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
  // Valider le mot de passe
  if (this.formData.password !== this.formData.confirmMotDePasse) {
    this.errors.push("Les mots de passe ne correspondent pas.");
    return;
  }

  this.errors = [];
  let form = new FormData();
  form.append("nom", this.formData.nom);
  form.append("prenom", this.formData.prenom);
  form.append("statut", this.formData.statut);
  form.append("email", this.formData.email);
  form.append("telephone", this.formData.telephone);
  form.append("pays", this.formData.pays);
  form.append("ville", this.formData.ville);
  form.append("poids", this.formData.poids);
  form.append("taille", this.formData.taille);
  form.append("age", this.formData.age);
  form.append("sexe", this.formData.sexe);
  form.append("objectif", this.formData.objectif);
  form.append("password", this.formData.password);
  form.append("role", this.formData.role);

  this.axios
    .post(this.URL_AUTH + 'register', form)
    .then((response) => {
      if (response.data && response.data.access_token && response.data.access_token.token) {
        localStorage.setItem('jwtToken', response.data.access_token.token);
        localStorage.setItem('role', 'patient');
        this.$router.push('/');
      } else {
        throw new Error("Réponse inattendue du serveur");
      }
    })
    .catch((error) => {
      // Vérifier si error.response est défini
      if (error.response) { 
        // Gérer les erreurs de réponse
        this.errors = error.response.data.errors || [error.response.data.message || "Une erreur est survenue."];
      } else {
        // Gérer les erreurs réseau
        this.errors = ["Erreur réseau. Vérifiez votre connexion."];
      }
    });
    this.resetForm();
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
        statut: '',
        age: '',
        sexe: '',
        objectif: '',
        password: '',
        confirmMotDePasse: '',
      };
      this.message = '';
      this.errors = [];
    },
  },
};
</script>

<style>
/* Ajoutez des styles personnalisés si nécessaire */
</style>