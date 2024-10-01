function alteraDivPrincipal(id) {
    let campoControle = document.getElementById(id);
    let div = document.getElementById("painel-grafico");
    
    switch (id) {
        case "cor-fundo":
            div.style.backgroundColor = campoControle.value;
            break;
        case "cor-borda":
            div.style.borderColor = campoControle.value;
            break;
        case "altura-div":
            div.style.height = campoControle.value;
            break;
        case "tamanho-fonte":
            div.style.fontSize = campoControle.value;
            break;
        case "largura-div":
            div.style.width = campoControle.value;
            break;
        default:
            break;
    }

}