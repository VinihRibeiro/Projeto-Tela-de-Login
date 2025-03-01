function login() {

    let email = document.getElementById('email').value;
    let senha = document.getElementById('password').value;

    if (email === "" || senha === "") {
        document.getElementById('mensagem').innerText = "Preencha todos os campos!";
        document.getElementById('mensagem').style.color = "red";
        return;
    }
    // Recupera a lista de usuários cadastrados
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Busca o usuário pelo email e senha
    let usuarioEncontrado = usuarios.find(user => user.email === email && user.senha === senha);


    if (usuarioEncontrado) {

        // Salva o usuário logado na sessão
        sessionStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado));

        document.getElementById('mensagem').innerText = "Login bem-sucedido!";
        document.getElementById('mensagem').style.color = "green";

        setTimeout(() => {
            window.location.href = "home.html";
        }, 3000);
    } else {
        document.getElementById('mensagem').innerText = "E-mail ou senha incorretos!";
        document.getElementById('mensagem').style.color = "red";
    }
}