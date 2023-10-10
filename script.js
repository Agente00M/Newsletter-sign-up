

document.getElementById("botao").addEventListener("click", function(){
    let divConclusao = document.getElementById("elmFinalizador")
let divSection = document.getElementById("sessao")
let divArticle = document.getElementById("artigo")
let button = document.getElementById("botao")
    
    
    
    
    divSection.classList.add("invisivel")
    divArticle.classList.add("invisivel")
    divConclusao.classList.remove("invisivel")
})