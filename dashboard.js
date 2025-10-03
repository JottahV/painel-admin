// Importa a autenticação do nosso arquivo central
import { auth } from './firebase-config.js';
// Importa as outras funções que precisamos
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// A linha "const auth = getAuth()" não é mais necessária aqui.

onAuthStateChanged(auth, (user) => {
  if (user) {
    document.body.style.display = 'block';
  } else {
    // Reativei o redirect!
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


