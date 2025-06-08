function sortearNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let numuru=(sortearNumero(1, 10));


let progresso = 1;
function atualizarProgresso() {
    if (progresso < 100) {
        progresso += 1;
        document.getElementById("progress-bar").style.width = progresso + "%";
        document.getElementById("progress-text").textContent = progresso
    }
}
function destualizarProgresso(){
    if (progresso > 1){
        progresso = 1;
        document.getElementById("progress-bar").style.width = progresso + "%";
        document.getElementById("progress-text").textContent = progresso
    }
}
let albafeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[{]};:',<.>/?|`~"
function silvao() {
    let senha = ""
    for (let i = 0; i < progresso; i++){
        let sorte = sortearNumero(1, 91)
        let nhase = albafeto[sorte];
        senha += nhase
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
    document.getElementById("altor").src = `${autor[indice]}`;
}
window.onload = sortearImagem();
window.onload =  sortearAutor();