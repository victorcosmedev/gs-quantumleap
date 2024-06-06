// Função para verificar se o usuário está logado
function verificarUsuarioLogado() {
    // Verifica se há um usuário logado no localStorage
    const usuarioLogado = JSON.parse(localStorage.getItem("usuario-logado"));
    const userInfoElement = document.getElementById("user-info");
    const loginLink = document.querySelector(".login-link a");

    if (usuarioLogado) {
        // Exibe uma mensagem junto com o nome do usuário
        const mensagem = "Olá, ";
        const userNameElement = document.getElementById("user-name");
        userNameElement.textContent = mensagem + usuarioLogado.nomeUsuario;
        userInfoElement.style.display = "block";

        // Altera o link de login para logout
        loginLink.textContent = "Logout";
        loginLink.href = "#";
        loginLink.onclick = deslogarUsuario;
    } else {
        // Esconde as informações do usuário
        userInfoElement.style.display = "none";

        // Restaura o link de login
        loginLink.textContent = "Login";
        loginLink.href = "/gs-quantumleap/paginas/login.html";
        loginLink.onclick = null;
    }
}

// Função para deslogar o usuário
function deslogarUsuario(event) {
    event.preventDefault();
    // Remove o usuário do localStorage e sessionStorage
    localStorage.removeItem("usuario-logado");
    sessionStorage.removeItem("token");

    // Verifica novamente o estado de login
    verificarUsuarioLogado();
}

// Adiciona o evento de DOMContentLoaded para chamar a função verificarUsuarioLogado
document.addEventListener("DOMContentLoaded", verificarUsuarioLogado);
