function socio(){

    const stringUsuario = localStorage.getItem("usuario");

    if(stringUsuario == null){
        alert("Faca login!")
    }else{

        const usuarioCadastrado = JSON.parse(stringUsuario);
        const { email, senha } = usuarioCadastrado;
        
        console.log(stringUsuario)
        console.log(email)
        console.log(senha)
        
        if(email != null || senha != null){
            window.location.href = "./sejasocio.html";
        }else{
            alert("Faca login!")
        }
    }
}
