<template>
  <div class="relative bg-gray-800">
    <div class="w-[86%] sm:w-[92%] md:w-[95%] lg:w-[81.9%] ml-14 mt-14 absolute md:ml-[15.2rem]">
      <div class="w-full p-4 rounded bg-gray-100 text-gray-800 text-lg font-bold">
        Formulaire de création d'un programme
      </div>
      <div class="w-full flex items-center justify-center p-10">
        <form @submit.prevent="SubmitForm" class="w-full lg:w-5/6 h-full lg:p-8 bg-gray-100 space-y-4">
          <!-- Message de succès ou d'erreur -->
          <div v-if="errors.length" class="space-y-2">
            <p v-for="(error, index) in errors" :key="index"
              class="bg-red-600 w-full text-center text-white rounded px-2 py-1">
              {{ error }}
            </p>
          </div>

          <!-- Client -->
          <div class="w-full space-y-4">
            <label for="client" class="text-lg text-gray-800">Client :</label>
            <select v-model="form.patient_id" :class="{ 'border-red-500': fieldErrors.patient_id }"
              class="w-full outline-none py-3.5 border rounded">
              <option value="" disabled>-- Choisir un client --</option>
              <option v-for="patient in patients" :key="patient.id" :value="patient.id">{{ patient.nom }} statut: {{
                patient.statut }}</option>
            </select>
            <p v-if="fieldErrors.clientid" class="text-red-500 text-sm">{{ fieldErrors.clientid }}</p>
          </div>

          <!-- Type de programme -->
          <div class="w-full space-y-4">
            <label class="text-lg text-gray-800">Programme pour :</label>
            <select v-model="form.type" :class="{ 'border-red-500': fieldErrors.type }"
              class="w-full outline-none py-3.5 border rounded">
              <option value="" disabled>-- Choisir un type --</option>
              <option value="diabetique">Personne diabétique</option>
              <option value="hypertension">Personne hypertendue</option>
              <option value="normal">Personne normale</option>
            </select>
            <p v-if="fieldErrors.type" class="text-red-500 text-sm">{{ fieldErrors.type }}</p>
          </div>

          <!-- Date de début -->
          <div class="w-full space-y-4">
            <label class="text-lg text-gray-800">Date début :</label>
            <input type="date" v-model="form.date_debut" :class="{ 'border-red-500': fieldErrors.date_debut }"
              class="w-full p-3 outline-none border rounded text-gray-800">
            <p v-if="fieldErrors.date_debut" class="text-red-500 text-sm">{{ fieldErrors.date_debut }}</p>
          </div>

          <!-- Date de fin -->
          <div class="w-full space-y-4">
            <label class="text-lg text-gray-800">Date de fin :</label>
            <input type="date" v-model="form.date_final" :class="{ 'border-red-500': fieldErrors.date_final }"
              class="w-full p-3 outline-none border rounded text-gray-800">
            <p v-if="fieldErrors.date_final" class="text-red-500 text-sm">{{ fieldErrors.date_final }}</p>
          </div>

          <!-- Description -->
          <div class="w-full space-y-4">
            <label class="text-lg text-gray-800">Description du programme :</label>
            <textarea v-model="form.description" :class="{ 'border-red-500': fieldErrors.description }" cols="30" rows="5"
              class="w-full p-3 outline-none border rounded text-gray-800"></textarea>
            <p v-if="fieldErrors.description" class="text-red-500 text-sm">{{ fieldErrors.description }}</p>
          </div>

          <!-- Bouton de soumission -->
          <div>
            <button type="submit" class="w-full p-3 text-white bg-red-600 rounded hover:bg-red-700">
              Créer le programme
            </button>
          </div>
        </form>
      </div>
     <!-- Modal Apple Style -->
    <div v-if="showModal" class="fixed inset-0 flex items-center w-full justify-center bg-black bg-opacity-50">
      <div class="bg-white rounded-2xl p-6 w-11/12 md:w-2/5 shadow-xl text-gray-800 relative">
        <h2 class="text-xl font-bold text-center mb-4">Programme Ajouté avec succès</h2>
           <div class="w-12 h-12 rounded-full border mx-auto border-green-600 flex items-center justify-center">
               <div class="w-8 h-8 rounded-full bg-green-400"></div>
           </div>
        
          <button @click="closeModal" class="w-4 h-4 bg-red-600 absolute top-4 right-4 rounded"></button>
        
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import store from '@/store';
export default {
  data() {
    return {
      errors: [],
      showModal: false,
      fieldErrors: {}, // Stocke les erreurs par champ
    
      form: {
        patient_id: "",
        type: "",
        date_debut: "",
        date_final: "",
        description: "",
      },
      isConnected: false,
      user: {},
      menu: {
        programme_id: "",
        repas: [""],
        date: "",
        description: "", // Liste des repas
      },
      patients: {},
    };
  },
  mounted() {
    const token = localStorage.getItem("jwtToken");
    const role = localStorage.getItem("role");

    // Vérification du token et du type d'utilisateur pour afficher le tableau des utilisateurs
    if (token && role == "admin") {
      // Récupération des données de l'utilisateur
      this.isConnected = true; // Mettre à jour l'état de connexion
      this.axios
        .get(this.requestHttp + "user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          this.user = response.data;
          console.log(this.user); // Stocker les données de l'utilisateur
        })
        .catch((error) => {
          console.error(
            "Erreur lors de la récupération des données de l'utilisateur: ",
            error
          );
        });
    } else {
      this.$router.push("/login");
    }

    this.Patients();
  },
  methods: {
    Patients() {
      this.axios
        .get(store.state.api + "patients")
        .then((response) => {
          this.patients = response.data; // Assurez-vous que la structure des données est correcte
        })
        .catch((error) => {
          console.error(
            "Erreur lors de la récupération des patients :",
            error.response ? error.response.data : error.message
          );
        });
    },
    validateForm() {
      this.fieldErrors = {}; // Réinitialiser les erreurs
      let isValid = true;

      if (!this.form.patient_id) {
        this.fieldErrors.patient_id = "Veuillez sélectionner un client.";
        isValid = false;
      }
      if (!this.form.type) {
        this.fieldErrors.type = "Veuillez choisir un type de programme.";
        isValid = false;
      }
      if (!this.form.date_debut) {
        this.fieldErrors.date_debut = "Veuillez choisir une date de début.";
        isValid = false;
      }
      if (!this.form.date_final) {
        this.fieldErrors.date_final = "Veuillez choisir une date de fin.";
        isValid = false;
      } else if (new Date(this.form.date_final) <= new Date(this.form.date_debut)) {
        this.fieldErrors.date_final = "La date de fin doit être postérieure à la date de début.";
        isValid = false;
      }
      if (!this.form.description) {
        this.fieldErrors.description = "Veuillez entrer une description.";
        isValid = false;
      }

      return isValid;
    },
    SubmitForm() {
      if (!this.validateForm()) return;
      this.errors = []; // Réinitialiser les erreurs
      const token = localStorage.getItem("jwtToken");
      this.axios
        .post(store.state.api + "progstore", this.form, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          // Gérer la réponse réussie
          console.log("Programme créé avec succès :", response.data.programme.id);
          // this.programmeCree = response.programme;  // Vérifie que response.data.id est défini
          // console.log("programmeCree:", this.programmeCree); // Debug
          this.showModal= true;
          this.resetForm();
          // console.log(response);
        })
        .catch((error) => {
          // Gérer les erreurs
          if (error.response && error.response.data && error.response.data.errors) {
            // Assignation des erreurs spécifiques
            this.errors = error.response.data.errors;
          } else {
            // Erreur générale
            this.errors = [error.message];
          }
        });
    },
    // ajouterRepas() {
    //   this.menu.repas.push("");
    // },
    // removeRepas(index) {
    //   this.menu.repas.splice(index, 1);
    // },
    // submitMenu() {
    //   if (this.menu.repas.some((repas) => repas === "")) {
    //     alert("Veuillez remplir tous les repas.");
    //     return;
    //   }
    //   this.axios.post(store.state.api + "menustore", this.menu, {
    //     programme_id: this.programmeCree,
    //     repas: JSON.stringify(this.menu.repas),
    //   })
    //   .then(() => {
    //     alert("Menu enregistré avec succès !");
    //     this.showModal = false;
    //   })
    //   .catch(() => {
    //     alert("Erreur lors de l'enregistrement du menu.");
    //   });
    // },
    resetForm() {
      this.form = {
        patient_id: "",
        type: "",
        date_debut: "",
        date_final: "",
        description: "",
      };
      this.fieldErrors = {};
    },
    closeModal(){
     if (this.showModal == true) {
       this.showModal = false;
     }
    }
  },
 
};
</script>

<style>
.border-red-500 {
  border: 2px solid red;
}
</style>