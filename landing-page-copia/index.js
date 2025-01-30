//Janelas de Login
function fazerLogin(){
    const janelaInicial = document.getElementById("janela-inicial");
    const janelaLogin = document.getElementById("janela-login");
    const janelaCadastro = document.getElementById("janela-cadastro");
    janelaCadastro.style.display="none";
    janelaInicial.style.display="none";
    janelaLogin.style.display="block";
}

function entrar(){
    const janelaLogin = document.getElementById("janela-login");
    const janelaCadastro = document.getElementById("janela-cadastro");
    const janelaTimeline = document.getElementById("janela-timeline");
    janelaLogin.style.display="none";
    janelaCadastro.style.display="none";
    janelaTimeline.style.display="block";
}

function fazerCadastro(){
    const janelaInicial = document.getElementById("janela-inicial");
    const janelaCadastro = document.getElementById("janela-cadastro");
    const janelaLogin = document.getElementById("janela-login");
    janelaLogin.style.display="none";
    janelaInicial.style.display="none";
    janelaCadastro.style.display="block";
}

//Janela Inicial

function voltarLogin(){
    const janelaTimeline= document.getElementById("janela-timeline");
    const janelaLogin=document.getElementById("janela-login");
    janelaTimeline.style.display="none";
    janelaLogin.style.display="block";

}