function sortearNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let numuru=(sortearNumero(1, 10));


let progresso = 1;
function atualizarProgresso() {
        progresso ++
        document.getElementById("progress-bar").style.width = progresso + "%";
        document.getElementById("progress-text").textContent = progresso
        nfugb();
}
function destualizarProgresso(){
    if (progresso > 1){
        progresso = 1;
        document.getElementById("progress-bar").style.width = 1 + "%"
    }
    if (progresso <= 1){
        progresso --
        document.getElementById("progress-bar").style.width = 0 + "%"
    }if (progresso == -1){
        alert("Não vai dar certo");
        document.getElementById("progress-bar").style.width = 0 + "%"
    }if (progresso == -6){
        alert("Você é idiota!")
        progresso = 6969
        document.getElementById("progress-bar").style.width = progresso + "%"
    }
    
    document.getElementById("progress-text").textContent = progresso
    
        nfugb();
}
function nfugb(){
    if (progresso > 100){
        document.getElementById("progress-container").style.width = progresso + "px";
    }else{
        document.getElementById("progress-container").style.width = 100 + "px";
    }
}
function picas(){
    let cu = sortearNumero(1, 99);
    progresso = progresso + cu
    document.getElementById("progress-bar").style.width = cu + "%";
    document.getElementById("progress-text").textContent = progresso
    nfugb();
}
let albafeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[{]};:',<.>/?|`~"
function silvao() {
    for (let i = 0; i <= 360; i+=10){
        setTimeout(() => {
        document.getElementById("background").style.transform = `rotate(${i}deg)`;
        }, i);
    }
    let senha = ""
    for (let i = 0; i < progresso; i++){
        let sorte = sortearNumero(1, 91)
        let nhase = albafeto[sorte];
        senha += nhase
    }
    if (senha <= 1){
        senha = "Uma bosta"
    }
    document.getElementById("resultado").textContent = "A senha é: " + senha;
}
const imagens = [
    "./img/imagem (1).png",
    "./img/imagem (2).png",
    "./img/imagem (3).png",
    "./img/imagem (4).png",
    "./img/imagem (5).png",
    "./img/imagem (6).png",
    "./img/imagem (7).png",
    "./img/imagem (8).png",
    "./img/imagem (9).png",
    "./img/imagem (10).png",
]
const autor = [
    "./img/autor/autor (1).png",
    "./img/autor/autor (2).png",
    "./img/autor/autor (3).png",
    "./img/autor/autor (4).png",
    "./img/autor/autor (6).png",
    "./img/autor/autor (7).png"
]
function sortearImagem() {
    const indice = Math.floor(Math.random() * imagens.length);
    document.body.style.backgroundImage = `url('${imagens[indice]}')`;
}
function sortearAutor(){
    const indice = Math.floor(Math.random() * autor.length);
    let img = document.createElement("img");
    img.src = autor[indice];
    img.style.display = "block";
    img.style.margin = "auto";
    img.style.paddingTop = "10%"
    img.style.size = "50%"
    document.getElementById("altor").appendChild(img);
}
window.onload = sortearImagem();
window.onload =  sortearAutor();
