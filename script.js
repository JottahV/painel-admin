import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const matricula = document.getElementById('matricula').value;
    const senha = document.getElementById('senha').value;
    const auth = getAuth();
    const email = `${matricula}@nosso-sistema.com`;

    console.log("Tentando fazer login como:", email); // Diagnóstico

    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("SUCESSO NO LOGIN! UID do usuário:", user.uid); // Diagnóstico
        alert('Login realizado com sucesso! Redirecionando...');
        window.location.href = 'dashboard.html';
      })
      .catch((error) => {
        console.error("ERRO DETALHADO NO LOGIN:", error); // Diagnóstico
        alert('Falha no login. Verifique sua matrícula e senha.');
      });
  });
});
