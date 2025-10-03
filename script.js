import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const matricula = document.getElementById('matricula').value;
    const senha = document.getElementById('senha').value;

    const auth = getAuth();
    const email = `${matricula}@nosso-sistema.com`;

    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        const user = userCredential.user;
        alert('Login realizado com sucesso! Bem-vindo!');
      })
      .catch((error) => {
        console.error('Erro no login:', error);
        alert('Falha no login. Verifique sua matrícula e senha.');
      });
  });
});
