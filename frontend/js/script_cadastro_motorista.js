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
        }


    }

    // Limpa as validações da tela
    limpar_validations(validation) {
        validation.forEach(el => el.remove());
    }

}

function formataCPF(cpf) {
    const elementoAlvo = cpf
    const cpfAtual = cpf.value   
    
    let cpfAtualizado;
    
    cpfAtualizado = cpfAtual.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, 
     function( regex, argumento1, argumento2, argumento3, argumento4 ) {
            return argumento1 + '.' + argumento2 + '.' + argumento3 + '-' + argumento4;
    })  
    elementoAlvo.value = cpfAtualizado; 
    }   

    function formataCEL(cel) {
        const elementoAlvo = cel
        const celAtual = cel.value   
        
        let celAtualizado;
        
        celAtualizado = celAtual.replace(/(\d{2})(\d{5})(\d{4})/, 
         function( regex, argumento1, argumento2, argumento3 ) {
                return '(' + argumento1 +')' + argumento2 + '-' + argumento3 ;
        })  
        elementoAlvo.value = celAtualizado; 
    }  

    function formataTEL(tel) {
        const elementoAlvo = tel
        const telAtual = tel.value   
        
        let telAtualizado;
        
        telAtualizado = telAtual.replace(/(\d{2})(\d{4})(\d{4})/, 
            function( regex, argumento1, argumento2, argumento3 ) {
                return '(' + argumento1 +')' + argumento2 + '-' + argumento3 ;
        })  
        elementoAlvo.value = telAtualizado; 
    }  

    function formataCEP(cep) {
        const elementoAlvo = cep
        const cepAtual = cep.value   
        
        let cepAtualizado;
        
        cepAtualizado = cepAtual.replace(/(\d{5})(\d{3})/, 
            function( regex, argumento1, argumento2 ) {
                return argumento1 + '-' + argumento2  ;
        })  
        elementoAlvo.value = cepAtualizado; 
    }  
    
    
window.onload = function () {
    let form = document.getElementById("register-form");
    let submit = document.getElementById("btn_submit");

    let validator = new Validator();

    // Evento para disparar validações
    submit.addEventListener('click', function (e) {

        // O formulario deixa de funcionar da forma que devia.
        e.preventDefault();

        validator.validate(form);
    });
}