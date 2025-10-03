// Importa as ferramentas do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// COLE SUAS CHAVES DE VERDADE AQUI DENTRO
const firebaseConfig = {
  apiKey: "AIzaSyAD4FpqCB-IC-Cp6Fz-lDEq5NsMMbf-Iy4", // Exemplo pego do seu index.html
  authDomain: "controle-de-ponto-e260123.firebaseapp.com",
  projectId: "controle-de-ponto-e260123",
  storageBucket: "controle-de-ponto-e260123.firebasestorage.app",
  messagingSenderId: "1055982400261",
  appId: "1:1055982400261:web:af81ad9dfce100f3867d6c"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Disponibiliza a autenticação para os outros arquivos usarem
export const auth = getAuth(app);
