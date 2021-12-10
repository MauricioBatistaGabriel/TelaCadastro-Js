var ValidaCamposVazios
var ValidaSenhasIguais
var ValidaSenhaIgualANull

//BLOCO PRINCIPAL para CADASTRO
const Cadastrar = function () {
    //Checa se os campos estão vazios, caso sim, não prossegue o cadastro
    ChecaCamposVazios()
    if (ValidaCamposVazios == 1) {
        return
    }

    //Checa se a senha é igual a null
    ChecaSenhaIgualANull()
    if(ValidaSenhaIgualANull == 1){
        return
    }

    //Checa se as senhas são iguais
    ChecaSenhasIguais()
    if (ValidaSenhasIguais == 1) {
        return
    }

    //Salva usuários no local storage
    SalvaUsuarios()  

    alert("cadastro realizado, navegue para 'Login' e insira seus dados")
}

ChecaCamposVazios = function () {
    var pEmail = document.getElementById("campoEmailCadastro").value
    var pPassword = document.getElementById("campoPasswordCadastro").value
    var pConfirmPassword = document.getElementById("campoPasswordRecadastro").value
    ValidaCamposVazios = 0

    if (pEmail != "" && pPassword != "" && pConfirmPassword != "") {
        return
    }

    if (pEmail == "" || pPassword == "" || pConfirmPassword == "") {
        if (pEmail == "" && pPassword == "" && pConfirmPassword == "") {
            alert("Preencha os campos de email, senha e confirmação de senha")
            return ValidaCamposVazios = 1
        }
        if (pEmail == "" && pPassword != "" && pConfirmPassword != "") {
            alert("Preencha o campo de email")
            return ValidaCamposVazios = 1
        }
        if (pEmail != "" && pPassword == "" && pConfirmPassword == "") {
            alert("Preencha o campo de senha e confirmação de senha")
            return ValidaCamposVazios = 1
        }
        if (pEmail != "" && pPassword != "" && pConfirmPassword == "") {
            alert("Preencha o campo de confirmação de senha")
            return ValidaCamposVazios = 1
        }
        if (pEmail != "" && pConfirmPassword != "" && pPassword == "") {
            alert("Preecha o campo de senha")
            return ValidaCamposVazios = 1
        }
        if (pEmail == "" && pPassword == "" && pConfirmPassword != "") {
            alert("Preencha os campos de email e senha")
            return ValidaCamposVazios = 1
        }
        if (pEmail == "" && pConfirmPassword == "" && pPassword != "") {
            alert("Prencha o campo de email e confirmação de senha")
            return ValidaCamposVazios = 1
        }
    }
}

ChecaSenhaIgualANull = function(){
    var pPassword = document.getElementById("campoPasswordCadastro").value
    var pConfirmPassword = document.getElementById("campoPasswordRecadastro").value
    ValidaSenhaIgualANull = 0

    if(pPassword == "null" || pConfirmPassword == "null"){
        alert("Sua senha não pode ser 'null' devido a regras do nosso sistema")
        return ValidaSenhaIgualANull = 1
    }
}

ChecaSenhasIguais = function () {
    var pPassword = document.getElementById("campoPasswordCadastro").value
    var pConfirmPassword = document.getElementById("campoPasswordRecadastro").value
    ValidaSenhasIguais = 0

    if (pPassword == pConfirmPassword) {
        return
    }
    if (pPassword != pConfirmPassword) {
        alert("As senhas não são iguais")
        return ValidaSenhasIguais = 1
    }
}

SalvaUsuarios = function () {
    var pEmail = document.getElementById("campoEmailCadastro").value
    var pPassword = document.getElementById("campoPasswordCadastro").value
    localStorage.setItem(pEmail, pPassword)
}