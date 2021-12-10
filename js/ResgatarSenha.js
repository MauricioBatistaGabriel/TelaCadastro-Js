var ValidaCamposVazios
var ValidaSenhasIguais
var ValidaCPFIgual

const ResgatarSenha = function () {
    //Checa se os campos estão vazios, caso sim, não prossegue o cadastro
    ChecaCamposVazios()
    if (ValidaCamposVazios == 1) {
        return
    }

    //Checa se as senhas são iguais
    ChecaSenhasIguais()
    if (ValidaSenhasIguais == 1) {
        return
    }

    //Checa se o usuário existe, caso sim troca a senha
    RealizaTrocaDeSenha()
    if (ValidaCPFIgual == 1) {
        return
    }
}

ChecaCamposVazios = function () {
    var pEmail = document.getElementById("campoEmailRegistra").value
    var pCPF = document.getElementById("campoCPFRegistra").value
    var pPassword = document.getElementById("campoPasswordRegistra").value
    var pConfirmPassword = document.getElementById("campoPasswordRegistra_2").value
    ValidaCamposVazios = 0

    if (pEmail != "" && pCPF != "" && pPassword != "" && pConfirmPassword != "") {
        return
    }

    if (pEmail == "" || pCPF == "" && pPassword == "" || pConfirmPassword == "") {
        if (pEmail == "" && pPassword == "" && pConfirmPassword == "" && pCPF == "") {
            alert("Preencha os campos de email, cpf, senha e confirmação de senha")
            return ValidaCamposVazios = 1
        }
        if (pEmail == "" && pCPF != "" && pPassword != "" && pConfirmPassword != "") {
            alert("Preencha o campo de email")
            return ValidaCamposVazios = 1
        }
        if (pEmail != "" && pCPF != "" && pPassword == "" && pConfirmPassword == "") {
            alert("Preencha o campo de senha e confirmação de senha")
            return ValidaCamposVazios = 1
        }
        if (pEmail != "" && pCPF != "" && pPassword != "" && pConfirmPassword == "") {
            alert("Preencha o campo de confirmação de senha")
            return ValidaCamposVazios = 1
        }
        if (pEmail != "" && pCPF != "" && pConfirmPassword != "" && pPassword == "") {
            alert("Preecha o campo de senha")
            return ValidaCamposVazios = 1
        }
        if (pEmail == "" && pCPF != "" && pPassword == "" && pConfirmPassword != "") {
            alert("Preencha os campos de email e senha")
            return ValidaCamposVazios = 1
        }
        if (pEmail == "" && pCPF != "" && pConfirmPassword == "" && pPassword != "") {
            alert("Prencha o campo de email e confirmação de senha")
            return ValidaCamposVazios = 1
        }
        if (pCPF != "" && pEmail == "" && pPassword == "" && pConfirmPassword == "") {
            alert("Preencha o campo de email, senha e confirmação de senha")
            return ValidaCamposVazios = 1
        }
        if (pEmail != "" && pCPF == "" && pPassword == "" && pConfirmPassword == "") {
            alert("Preencha o campo de CPF, senha e confirmação de senha")
            return ValidaCamposVazios = 1
        }
        if (pEmail == "" && pCPF == "" && pPassword != "" && pConfirmPassword == "") {
            alert("Preencha o campo email, CPF, e confirmação de senha")
            return ValidaCamposVazios = 1
        }
        if (pEmail == "" && pCPF == "" && pPassword == "" && pConfirmPassword != "") {
            alert("Preencha o campo email, CPF, e senha")
            return ValidaCamposVazios = 1
        }
        if (pEmail == "" && pCPF == "" && pPassword != "" && pConfirmPassword != "") {
            alert("Preencha o campo email e CPF")
            return ValidaCamposVazios = 1
        }
        if (pEmail != "" && pCPF == "" && pPassword == "" && pConfirmPassword != "") {
            alert("Preencha o campo CPF e senha")
            return ValidaCamposVazios = 1
        }
        if (pEmail != "" && pCPF == "" && pPassword != "" && pConfirmPassword == "") {
            alert("Preencha o campo CPF e confirmação de senha")
            return ValidaCamposVazios = 1
        }
    }
}

ChecaSenhasIguais = function () {
    var pPassword = document.getElementById("campoPasswordRegistra").value
    var pConfirmPassword = document.getElementById("campoPasswordRegistra_2").value
    ValidaSenhasIguais = 0

    if (pPassword == pConfirmPassword) {
        return
    }
    if (pPassword != pConfirmPassword) {
        alert("As senhas não são iguais")
        return ValidaSenhasIguais = 1
    }
}

RealizaTrocaDeSenha = function () {
    var pEmail = document.getElementById("campoEmailRegistra").value
    var pCPF = document.getElementById("campoCPFRegistra").value
    var pPassword = document.getElementById("campoPasswordRegistra").value
    var pEmailCPF = (pEmail + "0")
    var oCPF = localStorage.getItem(pEmailCPF)
    ValidaCPFIgual = 0

    if (oCPF == pCPF) {
        localStorage.setItem(pEmail, pPassword)
        return
    }
    if (oCPF != pCPF) {
        alert("Seu email e CPF não possuem nenhuma conta")
        return ValidaCPFIgual = 1
    }

}
