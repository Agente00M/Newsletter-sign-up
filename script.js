/*document.getElementById("botao").addEventListener("click", function(event){
    event.preventDefault();
    console.log("Certo")
})*/



document.getElementById("botao").addEventListener("click", function(event){
    event.preventDefault();

    
    let mail = document.getElementById("emailuser").value
    if(mail === ""){
        alert("Informe o email!!!")
     console.log("Moises é lindão")
    }
    console.log(mail)
    console.log("Moises é lindão")
    document.getElementById("emailconfirm").textContent = mail



    document.getElementById("sessao").style.display = 'none';
    document.getElementById("artigo").style.display = 'none';
    document.getElementById("elmFinalizador").style.display = 'block';
    document.documentElement.style.setProperty('--largura', '400px')
    }
)





document.getElementById("voltar").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("sessao").style.display = 'inline-block';
    document.getElementById("artigo").style.display = 'inline-block';
    document.getElementById("elmFinalizador").style.display = 'none';
    document.documentElement.style.setProperty('--largura', '1000px')


})
/*  
document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("emailuser");
    const submitButton = document.getElementById("botao");
    const conclusao = document.getElementById("elmFinalizador");
    const imagem = document.getElementById("sessao");
    const artigo = document.getElementById("artigo");

    submitButton.addEventListener("click", function () {
        let email = emailInput.value;
        if (email) {
            conclusao.style.display = "block";
            emailInput.style.display = "none";
            submitButton.style.display = "none";
            imagem.style.display = "none"
            artigo.style.display = "none"
        }
    });
});
*/