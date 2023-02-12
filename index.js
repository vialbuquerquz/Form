let email = " ";
let senha = " ";
const button = document.querySelector("enviar")

button.addEventListener(click, "Login()")

function Login(){
    email = document.querySelector("#email").value;
    senha = document.querySelector("#senha").value;

    if( email == 'vitoria@gmail.com' && senha == "1234"){
        alert("Login realizado com sucesso.")
    } else {
        alert ("Email ou senha incorretos, tente novamente.")
    }
}