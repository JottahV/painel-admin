import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

console.log("--- Script dashboard.js CARREGADO ---");

const auth = getAuth();

// ATENÇÃO: Desativei o redirect temporariamente para podermos ler o console!
console.log("Segurança: Verificando status do login...");

onAuthStateChanged(auth, (user) => {
  console.log("--- Verificação de auth CONCLUÍDA ---");
  if (user) {
    console.log("Resultado: LOGADO. UID:", user.uid);
    document.body.style.display = 'block'; // Mostra a página
  } else {
    console.log("Resultado: NÃO LOGADO. Usuário nulo.");
    console.log("O segurança te mandaria para o login agora, mas o redirect está desativado para depuração.");
    // window.location.href = 'index.html'; // DESATIVADO TEMPORARIAMENTE
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

