let nome = window.prompt("Digite o nome da pasta");
if(!nome) {
    window.alert("Você não digitou nenhum nome.");
}

window.alert(`
    cd desktop
    cd Docs Clientes
    md ${nome}
    cd ${nome}
    md Docs Editados
    cd..
`)