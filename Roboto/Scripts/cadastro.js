// Função para selecionar elementos do DOM usando um seletor CSS
const $ = (elemento) => document.querySelector(elemento);

// Adiciona um ouvinte de evento para o clique no botão "cadastro"

function cadastrar(){
    const nome = $("#nome").value;
  const email = $("#email").value;
//   const login = "erick";
  const senha = $("#senha").value;
//   const confirmaSenha = $("#confirma-senha").value;

  // Verifica se a senha inserida é igual à senha confirmada
//   const senhaConfirmada = senha === confirmaSenha;

  // Se a senha não estiver confirmada, exibe um alerta e interrompe a execução
//   if (!senhaConfirmada) {
//     alert("Sua confirmação de senha não confere.\nPor favor verifique.");
//     return;
//   }

  // Verifica se todos os campos do formulário foram preenchidos
  const tudoPreenchido =
    nome.length !== 0 &&
    email.length !== 0 &&
    senha.length !== 0;

  // Se algum campo estiver vazio, exibe um alerta e interrompe a execução
  if (!tudoPreenchido) {
    alert("Preencha todos os campos antes de enviar.");
    return;
  }

  // Cria um objeto contendo os dados do usuário cadastrado
  const usuarioCadastrado = {
    nome,
    email,
    // login,
    senha,
    // confirmaSenha,
  };

  // Converte o objeto em uma string JSON
  const stringUsuario = JSON.stringify(usuarioCadastrado);

  // Armazena os dados do usuário no localStorage
  localStorage.setItem("usuario", stringUsuario);

  // Exibe um alerta de cadastro realizado com sucesso
  alert("Cadastro realizado com sucesso!");
  window.location.href = "./login.html";
}

// $("#cadastro").addEventListener("click", (evento) => {
//   // Evita o comportamento padrão do clique (envio do formulário)
//   evento.preventDefault();

//   // Obtém os valores dos campos de entrada do formulário
//   const nome = $("#nome").value;
//   const email = $("#email").value;
// //   const login = "erick";
//   const senha = $("#senha").value;
// //   const confirmaSenha = $("#confirma-senha").value;

//   // Verifica se a senha inserida é igual à senha confirmada
// //   const senhaConfirmada = senha === confirmaSenha;

//   // Se a senha não estiver confirmada, exibe um alerta e interrompe a execução
// //   if (!senhaConfirmada) {
// //     alert("Sua confirmação de senha não confere.\nPor favor verifique.");
// //     return;
// //   }

//   // Verifica se todos os campos do formulário foram preenchidos
//   const tudoPreenchido =
//     nome.length !== 0 &&
//     email.length !== 0 &&
//     senha.length !== 0;

//   // Se algum campo estiver vazio, exibe um alerta e interrompe a execução
//   if (!tudoPreenchido) {
//     alert("Preencha todos os campos antes de enviar.");
//     return;
//   }

//   // Cria um objeto contendo os dados do usuário cadastrado
//   const usuarioCadastrado = {
//     nome,
//     email,
//     // login,
//     senha,
//     // confirmaSenha,
//   };

//   // Converte o objeto em uma string JSON
//   const stringUsuario = JSON.stringify(usuarioCadastrado);

//   // Armazena os dados do usuário no localStorage
//   localStorage.setItem("usuario", stringUsuario);

//   // Exibe um alerta de cadastro realizado com sucesso
//   alert("Cadastro realizado com sucesso!");

//   // Redireciona o usuário para a página de login
//   window.location.href = "./login.html";
// });
