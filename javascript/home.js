window.onload = function () {
    let usuarioLogado = JSON.parse(sessionStorage.getItem('usuarioLogado'));

    if (usuarioLogado) {
        document.getElementById('bemVindo').innerText = `Bem vindo ao Sistema ${usuarioLogado.nome} ${usuarioLogado.sobrenome}!`;
    } else {
        document.getElementById('bemVindo').innerText = 'Usuario não encontrado!';
    }

    document.getElementById('logoutButton').addEventListener('click', logoutButton);

    function logoutButton(){
        //Redireciona para a página de login
        window.location.href = "/html/Login.html";
    }

};