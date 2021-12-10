var ValidaCamposVazios
var ValidaLogin

//BLOCO PRINCIPAL para Login
const Login = function () {


    //Checa no bloco principal se os campos estão vazios
    ChecaCamposVazios()
    if (ValidaCamposVazios == 1) {
        return
    }

    //Checa usuário e senha e loga
    ChecaUsuarioESenha()
    if(ValidaLogin == 1){
        return
    }
}

ChecaCamposVazios = function () {
    var pEmail = document.getElementById("campoEmail").value
    var pPassword = document.getElementById("campoPassword").value
    ValidaCamposVazios = 0

    if (pEmail != "" && pPassword != "") {
        return
    }
    if (pEmail == "" || pPassword == "") {
        if (pEmail == "" && pPassword == "") {
            alert("preencha os campos de email e senha")
            return ValidaCamposVazios = 1
        }
        if (pEmail == "" && pPassword != "") {
            alert("Preencha o campo email")
            return ValidaCamposVazios = 1
        }

        if (pEmail != "" && pPassword == "") {
            alert("Preencha o campo senha")
            return ValidaCamposVazios = 1
        }
    }
}

ChecaUsuarioESenha = function () {
    var pEmail = document.getElementById("campoEmail").value
    var pPassword = document.getElementById("campoPassword").value
    var senha = localStorage.getItem(pEmail)
    ValidaLogin = 0

    if(senha == null){
        alert("Sua conta não foi encontrada")
        return ValidaLogin = 1
    }
    if(senha == pPassword){
        alert("Login realizado com sucesso")
    }
    if(senha != pPassword){
        alert("Senha incorreta")
        return ValidaLogin = 1
    }

}