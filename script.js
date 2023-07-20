//validar email

function validateEmail(email) {
    const confEmail = email.match(/^(\w{2,}(?=@))@((?<=@)[a-z]{2,})(\.\w{2,}$)/g)
    if (confEmail) {
        sessionStorage.setItem('Email:', confEmail)
        return confEmail
    }
    throw new Error("Digite um e-mail válido!")
    
}

//validar senha

function validatePassword(pass) {

    if (pass.length >= 8 &&
        pass.match(/[a-z]/g) &&
        pass.match(/[A-Z]/g) &&
        pass.match(/[0-9]/g) &&
        pass.match(/\W/g)
    ) {
        const passwordConfirm = pass
        sessionStorage.setItem('Password:', passwordConfirm)
        return passwordConfirm
    } else {
        throw new Error("A senha não preenche os requisitos")
    }

}

const userinputs = {}

userinputs.name = document.getElementById('name')
userinputs.email = document.getElementById('email')
userinputs.password = document.getElementById('password')

const form = document.querySelector('#form')

form.addEventListener('submit', (ev) => {
    ev.preventDefault()
    try {
        console.log(validateEmail(userinputs.email.value))
        console.log(validatePassword(userinputs.password.value))
        alert('Usuário cadastrado com sucesso')
    } catch (err) {
        alert(err.message)
        console.log(err.message)
    } finally {
        userinputs.name.value = ""
        userinputs.email.value = ""
        userinputs.password.value = ""
    }
})