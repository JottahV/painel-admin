import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const auth = getAuth();

// --- MISSÃO 1: PROTEGER A PÁGINA ---
// O Firebase vai verificar o status do login assim que a página carregar
onAuthStateChanged(auth, (user) => {
  if (user) {
    // Se o usuário ESTÁ logado, ele pode ficar na página.
    console.log("Usuário logado:", user.email);
  } else {
    // Se o usuário NÃO ESTÁ logado, ele é "chutado" para a tela de login.
    console.log("Nenhum usuário logado. Redirecionando...");
    window.location.href = 'index.html';
  }
});

// --- MISSÃO 2: LÓGICA DO FORMULÁRIO E LOGOUT ---
document.addEventListener('DOMContentLoaded', () => {
    
    // Lógica do botão de Sair (Logout)
    const logoutButton = document.getElementById('logout-button');
    logoutButton.addEventListener('click', () => {
        signOut(auth).then(() => {
            alert('Você saiu do sistema.');
            // O onAuthStateChanged acima vai detectar a saída e redirecionar.
        }).catch((error) => {
            console.error('Erro ao sair:', error);
        });
    });

    // Lógica do formulário de cadastro (por enquanto, só mostra os dados)
    const addEmployeeForm = document.getElementById('add-employee-form');
    addEmployeeForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const nome = document.getElementById('nomeCompleto').value;
        const matricula = document.getElementById('numeroMatricula').value;
        const cargo = document.getElementById('cargo').value;
        const senha = document.getElementById('senhaTemporaria').value;

        console.log('Dados do novo funcionário:', { nome, matricula, cargo, senha });
        alert(`Preparando para cadastrar: ${nome}`);
        // Aqui, no futuro, chamaremos a função para cadastrar de verdade.
    });
});