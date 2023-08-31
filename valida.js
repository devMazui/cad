
const usuarios = [
{
  login:'admin',
  pass:'admin',
}
]

  function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login == "admin" && senha == "admin"){
        alert('Verificação concluida!');
        location.href="home.html";
    }else{
      alert('Ops! usuario ou senha incorreto.');
    }
  }

