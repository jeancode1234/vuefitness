<template>
  <div style="font-family: Georgia, 'Times New Roman', Times, serif">
    <div class="w-full md:h-screen p-8 md:p-0 overflow-hidden flex items-center justify-center ">

      <div class="w-full md:w-1/2 hidden md:flex h-full overflow-hidden">
        <div class="relative w-full h-full">
          <div class="w-full h-full bg-black/80 absolute"></div>
          <img src="./../../assets/img/back.jpg" class="w-full h-full object-cover object-center" alt="background" />
        </div>
      </div>
      <div class="w-full md:w-1/2 h-full flex items-center flex-col justify-center bg-white">
        <h2 class="text-center text-2xl text-gray-800 pb-8">Connexion à votre compte</h2>
        <form @submit.prevent="login" class=" w-full">
          <div class="w-full px-8 lg:px-20">
            <div class="w-full">
              <div v-if="errors[0]" class="w-full space-y-2 flex flex-col py-2 justify-center">
                <p v-if="errors[0]" class="bg-red-500 w-full text-center text-white rounded px-2 py-1"
                  v-text="errors[0]"></p>
                <p v-if="errors[1]" class="bg-red-500 w-full text-center text-white rounded px-2 py-1"
                  v-text="errors[1]"></p>
              </div>
              <p v-if="message" class="bg-red-500 w-full text-white rounded px-2 py-1" v-text="message"></p>
            </div>
            <div class=" space-y-8">
              <div class="w-full relative flex items-center">

                <img src="../../assets/icon/envelope.svg" class="absolute top-3 right-4 w-6 h-6" alt="icon_email" />
                <input type="email" name="email" v-model="form.email" placeholder="Entrer votre email" required
                  class="w-full placeholder:text-gray-800 text-gray-800 outline-none border p-3 flex items-center rounded-xl border-red-900 bg-transparent" />
              </div>
              <div class="w-full relative flex items-center">
                <img src="../../assets/icon/lock.svg" class="absolute top-3 right-4 w-6 h-6" alt="icon_lock"
                  @click="showPassword" v-if="visibility == 'password'" />
                <img src="../../assets/icon/unlock.svg" class="absolute top-3 right-4 w-6 h-6" alt="icon_lock"
                  @click="hidePassword" v-if="visibility == 'text'" />
                <input name="password" v-model="form.password" :type="visibility" placeholder="Mot de passe" required
                  class="w-full placeholder:text-gray-800 text-gray-800 outline-none border p-3 flex items-center rounded-xl border-red-900 bg-transparent" />
              </div>
              <div>
                <a href="#" class="hover:text-red-800 text-gray-900">Mot de passe oublié?</a>
              </div>
              <div class="flex flex-col items-center justify-center w-full space-y-4">
                <button type="submit" :disabled="isLoading"
                  class="w-full flex justify-center space-x-2 bg-red-800 hover:bg-red-900 text-white py-3 px-4 rounded-lg">
                  <div v-if="isLoading" class="loader w-6 h-6 rounded-full border border-r-0 border-white "></div>
                  <div v-else> Se connecter</div>
                </button>
                <div class="flex justify-center items-center space-x-4 my-1 w-full">
                  <div class="w-44 h-[1px] bg-red-800"></div>
                  <p class="">ou</p>
                  <div class="w-44 h-[1px] bg-red-800"></div>
                </div>

                <button type="button" @click="loginWithGoogle"
                  class="w-full border space-x-4 hover:bg-red-700 hover:text-white duration-300 flex items-center justify-center border-red-700 text-red-800 font-bold py-2 px-4 rounded-md">
                  <img src="../../assets/icon/google.png" width="20" height="20" alt="" />
                  <p>Continuez avec google</p>
                </button>
              </div>
            </div>
          </div>
        </form>
        <div class="w-full text-center py-4">
          <p>Vous n'avez pas de compte ? <router-link to="/register"
              class="text-red-700 hover:text-red-800">S'inscrire</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      errors: {},
      message: '',
      visibility: "password",
      isLoading: false, // État de chargement
    };
  },
  mounted() {
    if (localStorage.getItem('jwtToken')) {
      this.$router.push('/');
    }
  },
  methods: {
    loginWithGoogle() {
      window.open('http://127.0.0.1:8000/api/auth/google');
    },
    login() {
      this.isLoading = true; // Démarrer le chargement

      this.axios.post(this.$store.state.api + 'login', this.form)
        .then(({ data }) => {
          localStorage.setItem('jwtToken', data.access_token.token);
          localStorage.setItem('type', data.user.type);
          this.$router.push('/');
        })
        .catch(error => {
          if (!(this.form.email || this.form.password) || !(this.form.password && this.form.email)) {
            this.message = '';
            this.errors = error.response.data.errors;
          } else {
            this.errors = '';
            this.message = error.response.data.message;
          }
        })
        .finally(() => {
          this.isLoading = false; // Arrêter le chargement
        });
    },
    showPassword() {
      this.visibility = "text";
    },
    hidePassword() {
      this.visibility = "password";
    },
  }
}
</script>

<style>
.loader {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>