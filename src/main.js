import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { createI18n } from 'vue-i18n'
import store from './store'

const messages = {
  en: {
    messages: {
      hello: 'hello world',
      menu1:'Name',
      menu2:'Description',
      menu3:'pitchord',
      menu4:'Edit',
      menu5:'Delete',
      menu6:'Action',
      menu7:'Add an article',
      menu8:'Add',
      menu9:'the article name',
      menu10:'Create the article',
      menu11:'Save',
      menu12:'Close',
      menu13:'Modify an article'
    }
  },
  fr: {
    messages: {
      hello:'test',
      menu1:'nom',
      menu2:'description',
      menu3:'image',
      menu4:'editer',
      menu5:'supprimer',
      menu6:'action',
      menu7:'ajouter un article',
      menu8:'ajouter',
      menu9:'nom de article',
      menu10:'creer un article',
      menu11:'Enregistrer',
      menu12:'Fermer',
      menu13:'Modifier un article'
    }
  },
}

// 2. Create i18n instance with options
const i18n = createI18n({
  locale: 'fr', // set locale
  fallbackLocale: 'fr', // set fallback locale
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
})

// Fonction pour récupérer le token d'accès depuis localStorage
function getAccessToken() {
  return localStorage.getItem('access_token');
}

// Fonction pour récupérer le refresh token depuis localStorage
function getRefreshToken() {
  return localStorage.getItem('refresh_token');
}

// Fonction pour rafraîchir le token en envoyant une requête
async function refreshToken() {
  try {
    const refreshToken = getRefreshToken();
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    const response = await axios.post(store.state.api+'refresh', {
      refresh_token: refreshToken
    });

    const { access_token } = response.data;
    localStorage.setItem('access_token', access_token); // Stocker le nouveau token d'accès
    return access_token;
  } catch (error) {
    console.error('Erreur lors du rafraîchissement du token', error);
    throw error;
  }
}

// Créer une instance axios globale
axios.defaults.baseURL = store.state.api;
axios.defaults.headers['Authorization'] = `Bearer ${getAccessToken()}`;

// Ajouter un intercepteur pour gérer les erreurs 401 et rafraîchir le token
axios.interceptors.response.use(
  response => response,  // Si la réponse est ok, on la renvoie telle quelle
  async error => {
    const originalRequest = error.config;

    // Vérifier si l'erreur est liée à un token expiré (code 401)
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Marquer la requête comme ayant été tentée une fois

      try {
        // Rafraîchir le token
        const newAccessToken = await refreshToken();
        // Mettre à jour l'en-tête Authorization avec le nouveau token
        axios.defaults.headers['Authorization'] = `Bearer ${newAccessToken}`;

        // Relancer la requête initiale avec le nouveau token
        return axios(originalRequest);
      } catch (refreshError) {
        console.error('Échec du rafraîchissement du token', refreshError);
        // Optionnellement, vous pouvez rediriger vers la page de login ici
      }
    }

    // Si l'erreur n'est pas liée à un 401, ou si le rafraîchissement échoue, on rejette l'erreur
    return Promise.reject(error);
  }
);

createApp(App).use(store).use(router).use(VueAxios, axios).use(i18n).use(AOS.init())
.mount('#app');
