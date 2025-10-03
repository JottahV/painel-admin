// Importa as ferramentas do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// SEU CÓDIGO DE CONFIGURAÇÃO FICA AQUI, NO ÚNICO LUGAR CORRETO
const firebaseConfig = {
  apiKey: "SUA_API_KEY_CORRETA",
  authDomain: "SEU_AUTH_DOMAIN_CORRETO",
  projectId: "SEU_PROJECT_ID_CORRETO",
  storageBucket: "SEU_STORAGE_BUCKET_CORRETO",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID_CORRETO",
  appId: "SEU_APP_ID_CORRETO"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Disponibiliza a autenticação para os outros arquivos usarem
export const auth = getAuth(app);