// Função para selecionar elementos do DOM usando um seletor CSS
// const $ = (elemento) => document.querySelector(elemento);


function logar(){
    // Obtém a string do localStorage com os dados do usuário cadastrado
    const stringUsuario = localStorage.getItem("usuario");
    
    // Converte a string em objeto JavaScript
    const usuarioCadastrado = JSON.parse(stringUsuario);
  
    // Extrai o login e senha do usuário cadastrado
    const { email, senha } = usuarioCadastrado;

    console.log(stringUsuario)
    console.log(email)
    console.log(senha)
  
    // Verifica se os dados inseridos pelo usuário correspondem aos cadastrados
    const dadosCorretos =
      email === $("#emails").value && senha === $("#senhas").value;
    
    // Exibe no console se os dados estão corretos (apenas para depuração)
    if (dadosCorretos) {
        alert("Dados corretos!");
        window.location.href = "./index.html";
      }
    // Se os dados não estiverem corretos, exibe um alerta e interrompe a execução
    if (!dadosCorretos) {
      alert("Dados inválidos!");
    }
  
    // Se os dados estiverem corretos, redireciona para a página de usuário logado
}

// Adiciona um ouvinte de evento para o clique no botão "entrar"
// $("#entrar").addEventListener("click", (evento) => {
//   // Evita o comportamento padrão do clique (envio do formulário)
//   evento.preventDefault();

//   // Obtém a string do localStorage com os dados do usuário cadastrado
//   const stringUsuario = localStorage.getItem("usuario");
  
//   // Converte a string em objeto JavaScript
//   const usuarioCadastrado = JSON.parse(stringUsuario);

//   // Extrai o login e senha do usuário cadastrado
//   const { login, senha } = usuarioCadastrado;

//   // Verifica se os dados inseridos pelo usuário correspondem aos cadastrados
//   const dadosCorretos =
//     login === $("#emails").value && senha === $("#senhas").value;
  
//   // Exibe no console se os dados estão corretos (apenas para depuração)
//   console.log(dadosCorretos);
//   alert("dados corretos")

//   // Se os dados não estiverem corretos, exibe um alerta e interrompe a execução
//   if (!dadosCorretos) {
//     alert("Dados inválidos!");
//     return;
//   }

//   // Se os dados estiverem corretos, redireciona para a página de usuário logado
//   window.location.href = "./index.html";
// });
