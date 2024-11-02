// Links que você vai colocar
const linkTrailer = "https://youtu.be/c0i88t0Kacs?si=NhMgqLsaiWdo2TSx"; // substitua pelo link do trailer
const linkInformacoes = "https://www.site.com/link-informacoes"; // substitua pelo link de informações

// Referenciar os botões no JavaScript
const botaoAssistir = document.getElementById("botao-assistir");
const botaoInformacoes = document.getElementById("botao-informacoes");

// Função de redirecionamento para o trailer
botaoAssistir.addEventListener("click", function() {
    window.open(linkTrailer, "_blank");
});

// Função de redirecionamento para mais informações
botaoInformacoes.addEventListener("click", function() {
    window.open(linkInformacoes, "_blank");
});

// Função para abrir a seção de informações
function abrirInformacoes() {
    document.getElementById('informacoes-jogo').style.display = 'flex';
}

// Função para fechar a seção de informações
function fecharInformacoes() {
    document.getElementById('informacoes-jogo').style.display = 'none';
}
