// Este código vai esperar a página HTML carregar completamente
document.addEventListener('DOMContentLoaded', () => {

  // --- PASSO 1: Conectar com o formulário no HTML ---
  // A gente "conversa" com o formulário do HTML através do ID dele.
  const loginForm = document.getElementById('login-form');

  // --- PASSO 2: Adicionar um "escutador" para o evento de envio ---
  // O JavaScript vai ficar "escutando" até o usuário clicar no botão "Entrar" (que é do tipo "submit").
  loginForm.addEventListener('submit', (event) => {
    
    // Impede o comportamento padrão do formulário, que é recarregar a página.
    event.preventDefault();

    // --- PASSO 3: Pegar os valores digitados pelo usuário ---
    const matricula = document.getElementById('matricula').value;
    const senha = document.getElementById('senha').value;

    console.log('Matrícula digitada:', matricula);
    console.log('Senha digitada:', senha);

    // --- PASSO 4: (Futuro) Enviar para o Firebase ---
    // Por enquanto, vamos apenas mostrar um alerta para confirmar que está funcionando.
    alert(`Tentando fazer login com a matrícula: ${matricula}`);
    
    // Aqui, no futuro, chamaremos a função do Firebase:
    // firebase.auth().signInWithEmailAndPassword(...)
  });

});