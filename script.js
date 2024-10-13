function alteraDivPrincipal(id) {
    const largura = window.innerWidth;

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
            if(campoControle.value < 350 || campoControle.value > 700) {
                alert("Valor inválido para esse campo, o campo será redefinido para 400");
                campoControle.value = 400;
            }

            div.style.height = campoControle.value+"px";
            break;
        case "tamanho-fonte":
            if(campoControle.value < 10 || campoControle.value > 22) {
                alert("Valor inválido para esse campo, o campo será redefinido para 16");
                campoControle.value = 16;
            }

            div.style.fontSize = campoControle.value+"px";
            break;
        case "largura-div":
            if(campoControle.value > largura) {
                alert("O valor do campo é maior que a largura da janela, selecione um valor menor");
                break;
            }

            if(campoControle.value < 350 || campoControle.value > 700) {
                alert("Valor inválido para esse campo, o campo será redefinido para 400");
                campoControle.value = 400;
            }

            div.style.width = campoControle.value+"px";
            break;
        default:
            break;
    }

}

window.addEventListener('resize', () => {
    const largura = window.innerWidth;
    let campoControle = document.getElementById("largura-div");

    if(campoControle.value > largura) {
        alert("O valor do campo é maior que a largura da janela, selecione um valor menor");
        let div = document.getElementById("painel-grafico");
        div.style.width = "80%";
    }

});