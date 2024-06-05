// auth.js

// Função para verificar se o usuário está logado
function verificarUsuarioLogado() {
    // Verifica se há um usuário logado no localStorage
    const usuarioLogado = JSON.parse(localStorage.getItem("usuario-logado"));
    if (usuarioLogado) {
        // Exibe uma mensagem junto com o nome do usuário
        const mensagem = "Olá, ";
        const userNameElement = document.getElementById("user-name");
        userNameElement.textContent = mensagem + usuarioLogado.nomeUsuario;
        
        const userInfoElement = document.getElementById("user-info");
        userInfoElement.style.display = "block";

        // Altera o link de login para logout
        const loginLink = document.getElementById("login-link");
        loginLink.outerHTML = "<a href='#' onclick='deslogarUsuario()'>Logout</a>";
    } else {
        const userInfoElement = document.getElementById("user-info");
        userInfoElement.style.display = "none";

        // Restaura o link de login
        const loginLink = document.getElementById("login-link");
        loginLink.outerHTML = '<a href="./login.html" id="login-link">Login</a>';
    }
}

// Função para deslogar o usuário
function deslogarUsuario() {
    // Remove o usuário do localStorage e sessionStorage
    localStorage.removeItem("usuario-logado");
    sessionStorage.removeItem("token");

    // Verifica novamente o estado de login
    verificarUsuarioLogado();
}

// Adiciona o evento de DOMContentLoaded para chamar a função verificarUsuarioLogado
document.addEventListener("DOMContentLoaded", verificarUsuarioLogado);
