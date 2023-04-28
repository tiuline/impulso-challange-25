document.addEventListener("DOMContentLoaded", function() {
    // Crie a tag <title> e defina o texto do título
    var tagTitle = document.createElement("title");
    var textoTitle = document.createTextNode("Impulso Challenge - n.25");
    tagTitle.appendChild(textoTitle);

    // Adicione a tag <title> ao elemento <head> do documento
    var tagHead = document.getElementsByTagName("head")[0];
    tagHead.appendChild(tagTitle);
    
    // tratar o corpo da pagina
    var div = document.getElementById("aux");
    div.innerHTML = "<h1>Minha Página Web com JavaScript</h1><p>Esta é a minha página web criada com JavaScript!</p>";
});