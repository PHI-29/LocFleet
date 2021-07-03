window.onload = () => {
    pegar_id()
}



//Função para pegar o Id do veículo selecionado
function pegar_id() {
    let url = window.location;
    let params = new URLSearchParams(url.search);
    let id = params.get('id');

    this.pegar_dados(id);
    this.remover(id)
}



//Função para pegar os dados na Api
async function pegar_dados(id) {
    let req = await fetch(`http://localhost:3000/veiculo/listar/id/${id}`);
    let dados = await req.json();

    this.preencher_dados(dados)
    this.redireciona(dados)
    this.redirecionar_editar(dados)
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

    //Deixa a data no formato padrão
    let dataAjuste = dados.ulRevisao;
    let datas = dataAjuste.split('-');
    dataAjuste = datas[2] + '/' + datas[1] + '/' + datas[0];

    //Preenche os dados em cada campo
    document.querySelector("#modelo").innerHTML = dados.modelo
    document.querySelector("#marca").innerHTML = dados.marca
    document.querySelector("#ano").innerHTML = dados.ano
    document.querySelector("#placa").innerHTML = dados.placa
    document.querySelector("#renavam").innerHTML = dados.renavam
    document.querySelector("#cor").innerHTML = dados.cor
    document.querySelector("#km").innerHTML = dados.km
    document.querySelector("#loc").innerHTML = dados.loc
    document.querySelector("#valor_loc").innerHTML = dados.valor
    document.querySelector("#ultima_revi").innerHTML = dataAjuste;
    document.querySelector("#Condutor_atual").innerHTML = resposta;
}



//Função para remover veículo
function remover(id) {
    let btn_remover = document.getElementById('remover');

    btn_remover.addEventListener('click', () => {
        let deletar = confirm("Deseja mesmo excluir este veículo?")
        if (deletar) {

            let fetchData = {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            }

            const url = `http://localhost:3000/veiculo/del/${id}`
            let resposta = fetch(url, fetchData)
            window.location.href = "frota.html";
        }
    })
}


//Função para redirecionar para a pagina do motorista correspondente
function redireciona(dados) {
    let btn_redi = document.getElementById('redireciona');

    btn_redi.addEventListener('click', () => {
        if (!dados.Motors[0]) {
            alert("Este veículo ainda não possui um condutor.")
        }
        else {
            window.location.href = 'detalhe_motorista.html?id=' + dados.Motors[0].id + ''
        }
    })
}



//Função para redirecionar para a pagina de edição
function redirecionar_editar(dados) {
    let btn_redi_edit = document.getElementById('redireciona_edit');
    btn_redi_edit.addEventListener('click', () => {
        window.location.href = 'edicao_frota.html?id=' + dados.id + ''
    })
}