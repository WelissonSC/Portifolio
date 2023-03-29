const formulario = document.querySelector('[data-form="form"]');
const inputs = document.querySelectorAll('[data-form="inputs"]');
const spans = document.querySelectorAll('[data-tipo="required"]')

const emailRegex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/;



// funções que inserem e retiram os erros
const setError = (index) => {
    inputs[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

const validate = (index) => {
    inputs[index].style.border = 'none'
    spans[index].style.display = 'none';
}

//funcão que valida o campo de nome
const validaNome = () => {
    if(inputs[0].value.length < 3) {
       setError(0);
    }
    else {
        validate(0);
    }
}

//funcão que valida o email
const validaEmail = () => {
    if(emailRegex.test(inputs[1].value)) {
        validate(1);
    }
    else {
        setError(1);
    }
}

// funcao que válida o campo assunto
const validaAssunto = () => {
    if(inputs[2].value.length < 5) {
        setError(2);
    }
    else {
        validate(2)
    }
}




inputs[0].addEventListener('input', validaNome);
inputs[1].addEventListener('input', validaEmail);
inputs[2].addEventListener('input', validaAssunto);
