
const telaLogin = document.getElementById('login');
const telaCadastro = document.getElementById('cadastro');

const botaoTrocaTela = document.getElementById('mudar-pag');
const botaoH4 = document.getElementById('text-mudarPag');

function mudarPaginas() {
    if (telaLogin.style.display == '') {
        telaLogin.style.display = 'none';
        telaCadastro.style.display = 'block';
        botaoH4.innerText = 'Faça Login';
    } else {
        telaLogin.style.display = '';
        telaCadastro.style.display = 'none';
        botaoH4.innerText = 'Inscreva-se';
    }
}

botaoTrocaTela.addEventListener('click', mudarPaginas);