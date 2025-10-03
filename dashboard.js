import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const auth = getAuth();

// Esconde o conteúdo da página para evitar que ele "pisque" na tela antes da verificação
document.body.style.display = 'none';


// --- MISSÃO 1: PROTEGER A PÁGINA (Versão Paciente) ---
onAuthStateChanged(auth, (user) => {
  if (user) {
    // Se o usuário ESTÁ logado, o segurança libera a entrada.
    console.log("Usuário verificado:", user.email);
    // Mostra o conteúdo da página
    document.body.style.display = 'block';
  } else {
    // Se o usuário NÃO ESTÁ logado, ele é "chutado" para a tela de login.
    console.log("Nenhum usuário logado. Redirecionando...");
    window.location.href = 'index.html';
  }
});


// --- MISSÃO 2: LÓGICA DO FORMULÁRIO E LOGOUT (continua igual) ---
document.addEventListener('DOMContentLoaded', () => {
    
    const logoutButton = document.getElementById('logout-button');
    logoutButton.addEventListener('click', () => {
        signOut(auth).then(() => {
            alert('Você saiu do sistema.');
        }).catch((error) => {
            console.error('Erro ao sair:', error);
        });
    });

    const addEmployeeForm = document.getElementById('add-employee-form');
    addEmployeeForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const nome = document.getElementById('nomeCompleto').value;
        const matricula = document.getElementById('numeroMatricula').value;
        const cargo = document.getElementById('cargo').value;
        const senha = document.getElementById('senhaTemporaria').value;

        console.log('Dados do novo funcionário:', { nome, matricula, cargo, senha });
        alert(`Preparando para cadastrar: ${nome}`);
    });
});
