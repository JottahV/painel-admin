// Este código precisa ser do tipo "module" para funcionar com o Firebase
// (Não se preocupe com os detalhes disso agora)

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const matricula = document.getElementById('matricula').value;
    const senha = document.getElementById('senha').value;

    // --- A MÁGICA ACONTECE AQUI ---
    // Pegamos a autenticação do Firebase que foi inicializada no HTML
    const auth = getAuth();

    // Firebase só faz login com email, então usamos nosso truque:
    const email = `${matricula}@nosso-sistema.com`;

    // Tentamos fazer o login com a função do Firebase
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Deu certo! O usuário conseguiu fazer o login.
        const user = userCredential.user;
        alert('Login realizado com sucesso! Bem-vindo, ' + user.displayName);
        // No futuro, aqui nós redirecionaríamos para a tela principal do painel.
      })
      .catch((error) => {
        // Deu errado! A senha pode estar errada ou o usuário não existe.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Erro no login:', errorCode, errorMessage);
        alert('Falha no login. Verifique sua matrícula e senha.');
      });
  });
});
