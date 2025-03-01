//Função que o usuario aperta no botão cadastrar
function cadastro() {
    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('password').value;

    //Verifica se os campos estão vazios
    if (nome === '' || email === '' || senha === '' || sobrenome === '') {
        document.getElementById('mensagem').innerText = 'Preencha todos os campos!';
        document.getElementById('mensagem').style.color = 'red';
        return;
    }

    // Recupera os usuários cadastrados ou cria um array vazio
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    

    //Cria um objeto com os dados do usuario
    let user = {
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        senha: senha
    };

    usuarios.push(user)
    
    //Salva o objeto no localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    document.getElementById('mensagem').innerText = 'Usuário cadastrado!';
    document.getElementById('mensagem').style.color = 'green';

    setTimeout(() => {
        window.location.href = "../html/Login.html";
    }, 3000);

}