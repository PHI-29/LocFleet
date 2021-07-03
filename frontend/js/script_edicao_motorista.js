window.onload = () => {
    pegar_id()
}



//Função para pegar o Id do motorista selecionado
function pegar_id() {
    let url = window.location;
    let params = new URLSearchParams(url.search);
    let id = params.get('id');

    this.pegar_dados(id);
    this.editar(id)
}



//Função para pegar os dados na Api
async function pegar_dados(id) {
    let req = await fetch(`http://localhost:3000/motorista/listar/id/${id}`);
    let dados = await req.json();

    this.preencher_dados(dados)
    this.cancelar(dados)
}



//Função para prencher os dados nos seus campos
function preencher_dados(dados) {
    //Verificar se tem um veículo atribuido a este motorista
    let resposta;
    if (!dados.Veiculo) {
        resposta = '';
    } else {
        resposta = dados.Veiculo.placa
    }


    //verifica se possui telefone
    let telefone
    if (dados.tel === 0 || dados.tel < 0) {telefone = '' }
    else { telefone = dados.tel }


    //Deixa a data no formato padrão
    let dataNas = dados.dtNascimento
    let dataANas = dataNas.split('-');
    dataNas = dataANas[2] + '/' + dataANas[1] + '/' + dataANas[0];

    //Preenche os dados em cada campo
    document.querySelector('#email').value = dados.email
    document.querySelector('#nome').innerHTML = dados.nome
    document.querySelector('#lastname').innerHTML = dados.sobrenome
    document.querySelector('#dtNascimento').innerHTML = dataNas
    document.querySelector('#cpf').innerHTML = dados.cpf
    document.querySelector('#tel').value = telefone
    document.querySelector('#cel').value = dados.cel
    document.querySelector('#dtEmissao').value = dados.dtEmissao
    document.querySelector('#dtvencimento').value = dados.dtvencimento
    document.querySelector('#numCNH').innerHTML = dados.numCNH
    document.querySelector('#cep').value = dados.cep
    document.querySelector("#placa_at").value = resposta;
}



//Função para editar veículo
function editar(id) {
    let btn_editar = document.getElementById('salvar');

    btn_editar.addEventListener('click', () => {
        if (confirm("Deseja fazer as alterações?")) {
            const veiculo = {
                email: document.querySelector('#email').value,
                tel: document.querySelector('#tel').value || null,
                cel: document.querySelector('#cel').value,
                dtEmissao: document.querySelector('#dtEmissao').value,
                dtvencimento: document.querySelector('#dtvencimento').value,
                cep: document.querySelector('#cep').value,
                placa: document.querySelector('#placa_at').value
            }


            let fetchData = {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(veiculo)
            }

            const url = `http://localhost:3000/motorista/upd/${id}`
            fetch(url, fetchData)
            .then(res => mensagem(res))
        }
    })
}



// função de cancelamento e volta a pagina de detalhe do veículo
function cancelar(dados) {
    let btn_cancel = document.getElementById('cancelar');

    btn_cancel.addEventListener('click', () => {
        window.location.href = 'detalhe_motorista.html?id=' + dados.id + ''
    })
}



// função para caso de certo redirecionar caso não emitir mensagem de alerta
function mensagem(res){
    if (res.status === 200) {
        window.location.href = 'motorista.html'
    } else {
        alert('Informações incorreta ou o véiculo já possui um motorista')
    }
}