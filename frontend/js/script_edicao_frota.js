window.onload = () => {
    pegar_id()
}



//Função para pegar o Id do veículo selecionado
function pegar_id() {
    let url = window.location;
    let params = new URLSearchParams(url.search);
    let id = params.get('id');

    this.pegar_dados(id);
    this.editar(id)
}



//Função para pegar os dados na Api
async function pegar_dados(id) {
    let req = await fetch(`http://localhost:3000/veiculo/listar/id/${id}`);
    let dados = await req.json();

    this.preencher_dados(dados)
    this.cancelar(dados)
}



//Função para prencher os dados nos seus campos
function preencher_dados(dados) {
    //Verificar se tem um motorista atribuido a este veículo
    let resposta;
    if (!dados.Motors[0]) {
        resposta = '<b style="color:#e82121">Sem motorista</b>';
    } else {
        resposta = dados.Motors[0].nome
    }

    //Preenche os dados em cada campo
    document.querySelector("#modelo").innerHTML = dados.modelo
    document.querySelector("#marca").innerHTML = dados.marca
    document.querySelector("#ano").innerHTML = dados.ano
    document.querySelector("#placa").innerHTML = dados.placa
    document.querySelector("#renavam").innerHTML = dados.renavam
    document.querySelector("#cor").value = dados.cor
    document.querySelector("#km").value = dados.km
    document.querySelector("#loc").value = dados.loc
    document.querySelector("#valor").value = dados.valor
    document.querySelector("#ulRevisao").value = dados.ulRevisao;
    document.querySelector("#Condutor_atual").innerHTML = resposta;
}



//Função para editar veículo
function editar(id) {
    let btn_editar = document.getElementById('salvar');

    btn_editar.addEventListener('click', () => {
        if (confirm("Deseja fazer as alterações?")) {
            const veiculo = {
                cor: document.querySelector('#cor').value,
                km: document.querySelector('#km').value,
                ulRevisao: document.querySelector('#ulRevisao').value,
                loc: document.querySelector('#loc').value,
                valor: document.querySelector('#valor').value
            }


            let fetchData = {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(veiculo)
            }

            const url = `http://localhost:3000/veiculo/upd/${id}`
            fetch(url, fetchData)
            window.location.href = "frota.html";
        }
    })
}



// função de cancelamento e volta a pagina de detalhe do veículo
function cancelar(dados) {
    let btn_cancel = document.getElementById('cancelar');

    btn_cancel.addEventListener('click', () => {
        window.location.href = 'detalhe_frota.html?id=' + dados.id + ''
    })
}