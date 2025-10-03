// Importa a autenticação do nosso arquivo central
import { auth } from './firebase-config.js';
// Importa a função de login
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const matricula = document.getElementById('matricula').value;
    const senha = document.getElementById('senha').value;
    const email = `${matricula}@nosso-sistema.com`;

    // A linha "const auth = getAuth()" não é mais necessária aqui.
    
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        window.location.href = 'dashboard.html';
      })
      .catch((error) => {
        alert('Falha no login.');
      });
  });
});
