document.addEventListener("DOMContentLoaded", function() {
    // Crie a tag <title> e defina o texto do título
    var tagTitle = document.createElement("title");
    var textoTitle = document.createTextNode("Impulso Challenge - n.25");
    tagTitle.appendChild(textoTitle);

    // Adicione a tag <title> ao elemento <head> do documento
    var tagHead = document.getElementsByTagName("head")[0];
    tagHead.appendChild(tagTitle);
    
    // tratar o corpo da pagina
    const auxDiv = document.getElementById("aux");
    const cardDiv = document.createElement("div");
    const photoDiv = document.createElement("div");

    cardDiv.setAttribute("id","card");
    photoDiv.setAttribute("id","foto");

    auxDiv.appendChild(cardDiv)
    cardDiv.appendChild(photoDiv)
});