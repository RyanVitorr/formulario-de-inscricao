
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

const botaoBanner = document.getElementById('botao-banner');
const banner = document.getElementById('banner');

const h1Banner = document.getElementById('h1-banner');
const pBanner = document.getElementById('p-banner');

function moverBanner() {
    if (banner.style.left == "") {
        banner.style.left = "24%";
        banner.style.borderRadius = "10px 0 0 10px";
        banner.style.transition =  "1s";
        h1Banner.innerText = 'Bem vindo(a) de volta!';
        h1Banner.style.fontSize = '1.5rem';
        pBanner.innerText = 'Para se manter conectado conosco, faça login com seus dados pessoais';
    } else {
        banner.style.left = "";
        h1Banner.innerText = 'Olá!';
        h1Banner.style.fontSize = '2rem';
        pBanner.innerText = 'Insira seus dados pessoas para abrir uma conta conosco';
        banner.style.borderRadius = "0 10px 10px 0";
        banner.style.transition =  "1s";
    }
}

botaoBanner.addEventListener('click', moverBanner);