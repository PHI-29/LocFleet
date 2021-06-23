/* global fetch*/

class Validator {

    constructor() {
        this.validations = [
            'data-required',
            'data-min-length',
            'data-max-length',
            'data-email-validate',
            'data-somente-letras',
            'data-equal',
            'data-password-validate',
            'data-maior-idade'
        ]
    }

    // Inica a validação de todos os campos
    validate(form) {

        // Resgata todas as validações
        let validacoes_atuais = document.querySelectorAll('form .error-validation');

        if (validacoes_atuais.length > 0) {
            this.limpar_validations(validacoes_atuais)
        }

        // Pegar os inputs do formulario
        let inputs = form.getElementsByTagName('input');

        // Transforma um HTMLColection para um array 
        let inputsArray = [...inputs];

        // Loop dos inputs e validação mediante ao que for encontrado.
        inputsArray.forEach(function (input) {

            // Loop em todas as validações existentes
            for (let i = 0; this.validations.length > i; i++) {

                // Verifica se a validação atual existe no input
                if (input.getAttribute(this.validations[i]) != null) {

                    // Limpando a string para virar um metodo
                    // Exemplo: data-min-length  ->  minlength
                    let method = this.validations[i].replace('data-', '')
                        .replace('-', '');

                    // Valor do input
                    let value = input.getAttribute(this.validations[i]);

                    // Invocar o método
                    this[method](input, value);
                };
            }
        }, this);
    };

    // Verifica se meu input tem um número minimo de caracteres 
    minlength(input, minValue) {

        let inputLength = input.value.length;

        let mensagem_error = `O campo precisa ter pelo menos ${minValue} caracteres`;

        if (inputLength < minValue) {
            this.imprimirMensagem(input, mensagem_error);
        }
    }

    // Verifica se um input passou do limite de caracteres
    maxlength(input, maxValue) {

        let inputLength = input.value.length;

        let mensagem_error = `O campo precisa ter menos que ${maxValue} caracteres`;

        if (inputLength > maxValue) {
            this.imprimirMensagem(input, mensagem_error);
        }
    }

    // Verifica se o input é requerido
    required(input) {

        let inputValue = input.value;

        if (inputValue === '') {
            let mensagem_error = `Este campo é obrigatório`;

            this.imprimirMensagem(input, mensagem_error);
        }
    }

    //valida idade
    maioridade(input) {
        let dataInput = new Date(input.value)
        if (!isNaN(dataInput)) {
            let dataAtual = new Date();
            let diferença = dataAtual.getFullYear() - dataInput.getFullYear()

            if (diferença < 18) {
                let mensagem_error = `O usuario não pode ser menor de idade`;

                this.imprimirMensagem(input, mensagem_error);
            }
        }
    }

    // Valida emails
    emailvalidate(input) {

        let re = /\S+@\S+\.\S+/;

        let email = input.value;

        let mensagem_error = `Insira um e-mail no padrão seuemail@email.com`;

        if (!re.test(email)) {
            this.imprimirMensagem(input, mensagem_error);
        }
    }

    // Validar somente letras no campo de texto
    somenteletras(input) {

        let re = /^[A-Za-z]+$/;

        let inputValue = input.value;

        let mensagem_error = `Este campo não aceita números nem caracteres especiais`;

        if (!re.test(inputValue)) {
            this.imprimirMensagem(input, mensagem_error);
        }

    }

    // Verifica se dois campos são iguais
    equal(input, inputName) {

        let inputToCompare = document.getElementsByName(inputName)[0];

        let mensagem_error = `Este campo precisa estar igual ao ${inputName}`;

        if (input.value != inputToCompare.value) {
            this.imprimirMensagem(input, mensagem_error);
        }
    }

    // Validar o campo de senha
    passwordvalidate(input) {

        // Transformar a string em array
        let carac_array = input.value.split("");

        let uppercase = 0;
        let numbers = 0;

        for (let i = 0; carac_array.length > i; i++) {
            if (carac_array[i] === carac_array[i].toUpperCase() && isNaN(parseInt(carac_array[i]))) {
                uppercase++;
            } else if (!isNaN(parseInt(carac_array[i]))) {
                numbers++;
            }

        }
        if (uppercase === 0 || numbers === 0) {
            let mensagem_error = `A senha precisa de um caractere maiúsculo  e um número`;

            this.imprimirMensagem(input, mensagem_error);
        }

    }

    // Métodos para imprimir mensagem de erro na tela
    imprimirMensagem(input, msg) {

        // Quantidade de erros 
        let errosQty = input.parentNode.querySelector('.error-validation');
        if (errosQty === null) {
            let tamplate = document.querySelector('.error-validation').cloneNode(true);

            tamplate.textContent = msg;

            let inputParent = input.parentNode;

            tamplate.classList.remove('tamplate');

            inputParent.appendChild(tamplate);

            //desvalidar o envio do formulario
            g = 1;
        }
    }

    // Limpa as validações da tela
    limpar_validations(validation) {
        validation.forEach(el => el.remove());
    }
}

// Variavel que confirma se pode mandar o formulario
let g = 0;
window.onload = () => {
    let form = document.getElementById("register-form");
    let submit = document.getElementById("btn_submit");

    let validator = new Validator();

    //Evento para disparar validações
    submit.addEventListener('click', function (e) {

        // O formulario deixa de funcionar da forma que devia.
        e.preventDefault();

        validator.validate(form);

        getDados(g)
        //validar o envio do formulario
        g = 0
    });
}


//Pegar os dados do formulario
function getDados(g) {
    if (g === 0) {
        let email_dados = document.querySelector('#email')
        let nome_dados = document.querySelector('#name')
        let sobrenome_dados = document.querySelector('#lastname')
        let dtNascimento_dados = document.querySelector('#dtNascimento')
        let cpf_dados = document.querySelector('#cpf')
        let telefone_dados = document.querySelector('#tel')
        let celular_dados = document.querySelector('#cel')
        let senha_dados = document.querySelector('#password')
        const usuario = {
            email: email_dados.value,
            nome: nome_dados.value,
            sobrenome: sobrenome_dados.value,
            dtNascimento: dtNascimento_dados.value,
            cpf: cpf_dados.value,
            telefone: telefone_dados.value,
            celular: celular_dados.value,
            senha: senha_dados.value
        }
        return enviar_dados(usuario)

    }
    else {
        console.log("Não pegou os dados")
    }

}

//Envia os dados do formulario para a api
async function enviar_dados(usuario) {
    const url = 'http://localhost:3000/usuario/add'

    let fetchData = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    }

    fetch(url, fetchData)
        .then(res => res.json())
        .then(resp => console.log(resp))

    limpar_campos()

    window.location.href = 'login.html'
}

//Limpa os campos de texto
function limpar_campos() {
    document.querySelector('#email').value = '';
    document.querySelector('#name').value = '';
    document.querySelector('#lastname').value = '';
    document.querySelector('#dtNascimento').value = '';
    document.querySelector('#cpf').value = '';
    document.querySelector('#tel').value = '';
    document.querySelector('#cel').value = '';
    document.querySelector('#password').value = '';
    document.querySelector('#passConfirmation').value = '';

    //atribui tempo até o servidor coletar todos os dados
    for (let i = 0; i < 25000; i++) {
    }
}