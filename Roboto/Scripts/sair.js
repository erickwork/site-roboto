function sair() {
    if(localStorage.getItem("usuario")) {
        // Remove o item "usuario" do localStorage
        localStorage.removeItem("usuario");
        console.log("Item 'usuario' removido do localStorage.");
        window.location.replace("./index.html");
    } else {
        console.log("Item 'usuario' não encontrado no localStorage.");
    }
}


