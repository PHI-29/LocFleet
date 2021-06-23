class Validator {

    constructor() {
        this.validations = [
            'data-required',
            'data-min-length',
            'data-max-length',
            'data-somente-letras',
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

    // Validar somente letras no campo de texto
    somenteletras(input) {

        let re = /^[A-Z a-z]+$/;

        let inputValue = input.value;

        let mensagem_error = `Este campo não aceita números nem caracteres especiais`;

        if (!re.test(inputValue)) {
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
        let modelo_dados = document.querySelector('#modelo')
        let marca_dados = document.querySelector('#marca')
        let ano_dados = document.querySelector('#ano')
        let placa_dados = document.querySelector('#placa')
        let renavam_dados = document.querySelector('#renavam')
        let cor_dados = document.querySelector('#cor')
        let km_dados = document.querySelector('#km')
        let ulRevisao_dados = document.querySelector('#ulRevisao')
        let loc_dados = document.querySelector('#loc')
        let valor_dados = document.querySelector('#valor')

        const veiculo = {
            modelo: modelo_dados.value,
            marca: marca_dados.value,
            ano: ano_dados.value,
            placa: placa_dados.value,
            renavam: renavam_dados.value,
            cor: cor_dados.value,
            km: km_dados.value,
            ulRevisao: ulRevisao_dados.value,
            loc: loc_dados.value,
            valor: valor_dados.value
        }
        return enviar_dados(veiculo)

    }
    else {
        console.log("Não pegou os dados")
    }

}

//Envia os dados do formulario para a api
async function enviar_dados(veiculo) {
    const url = 'http://localhost:3000/veiculo/add'

    let fetchData = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(veiculo)
    }

    fetch(url, fetchData)
        .then(res => res.json())
        .then(resp => console.log(resp))

    limpar_campos()

    window.location.href = 'frota.html'
}

//Limpa os campos de texto
function limpar_campos() {
    document.querySelector('#modelo')
    document.querySelector('#marca')
    document.querySelector('#ano')
    document.querySelector('#placa')
    document.querySelector('#renavam')
    document.querySelector('#cor')
    document.querySelector('#km')
    document.querySelector('#ulRevisao')
    document.querySelector('#loc')
    document.querySelector('#valor')

    //atribui tempo até o servidor coletar todos os dados
    for (let i = 0; i < 30000; i++) {
    }
}