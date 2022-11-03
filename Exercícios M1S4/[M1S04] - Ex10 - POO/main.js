class Usuario {
  constructor(nome, email, senha) {
      this.nome = nome;
      this.email = email;
      this.senha = senha;
  }

  autenticar(emailInformado, senhaInformada) {
      return (this.email === emailInformado && this.senha === senhaInformada);
  }
}

const usuario = new Usuario('Philippe Rocca', 'phrbretas@gmail.com', '1234');

function login() {
  const inputEmail = document.querySelector('#email');
  const valorEmail = inputEmail.value;
  const inputSenha = document.querySelector('#senha');
  const valorSenha = inputSenha.value;
  if (valorEmail === '' || valorSenha === '') {
      alert('Credenciais não informadas');
      return;
  }
  const autenticado = usuario.autenticar(valorEmail, valorSenha);
  if (autenticado) {
      alert('Usuário autenticado com sucesso!');
  
  } else {
      alert('Credenciais inválidas!');
  }
  inputEmail.value = '';
  inputSenha.value = '';
}