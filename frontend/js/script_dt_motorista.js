window.onload = () => {
    pegar_id()
}



//Função para pegar o Id do motorista selecionado
function pegar_id() {
    let url = window.location;
    let params = new URLSearchParams(url.search);
    let id = params.get('id');

    this.pegar_dados(id);
    this.remover(id)
}



//Função para pegar os dados na Api
async function pegar_dados(id) {
    let req = await fetch(`http://localhost:3000/motorista/listar/id/${id}`);
    let dados = await req.json();

    this.preencher_dados(dados)
    this.redireciona(dados)
}



//Função para prencher os dados nos seus campos
function preencher_dados(dados) {
    //Verificar se tem um veículo atribuido a este motorista
    let resposta;
    if (!dados.Veiculo) {
        resposta = '<b style="color:#e82121">Não possui um veículo atribuido</b>';
    } else {
        resposta = dados.Veiculo.placa
    }


    //Deixa a data no formato padrão
    //pegar as datas
    let dataNas = dados.dtNascimento
    let dataEmi = dados.dtEmissao
    let datavenc = dados.dtvencimento
    //Dividir as datas
    let dataANas = dataNas.split('-');
    let dataAEmi = dataEmi.split('-');
    let dataAvenc = datavenc.split('-');
    //Organiza as datas
    dataNas = dataANas[2] + '/' + dataANas[1] + '/' + dataANas[0];
    dataEmi = dataAEmi[2] + '/' + dataAEmi[1] + '/' + dataAEmi[0];
    datavenc = dataAvenc[2] + '/' + dataAvenc[1] + '/' + dataAvenc[0];

    //Preenche os dados em cada campo
    document.querySelector('#email').innerHTML = dados.email
    document.querySelector('#nome').innerHTML = dados.nome
    document.querySelector('#lastname').innerHTML = dados.sobrenome
    document.querySelector('#dtNascimento').innerHTML = dataNas
    document.querySelector('#cpf').innerHTML = dados.cpf
    document.querySelector('#tel').innerHTML = dados.tel
    document.querySelector('#cel').innerHTML = dados.cel
    document.querySelector('#dtEmissao').innerHTML = dataEmi
    document.querySelector('#dtvencimento').innerHTML = datavenc
    document.querySelector('#numCNH').innerHTML = dados.numCNH
    document.querySelector('#cep').innerHTML = dados.cep
    document.querySelector("#placa_at").innerHTML = resposta;
}



//Função para remover motorista
function remover(id) {
    let btn_remover = document.getElementById('remover');

    btn_remover.addEventListener('click', () => {
        let deletar = confirm("Deseja mesmo excluir este motorista?")
        if (deletar) {

            let fetchData = {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            }

            const url = `http://localhost:3000/motorista/del/${id}`
            let resposta = fetch(url, fetchData)
            window.location.href = "motorista.html";
        }
    })
}



//Função para redirecionar para a pagina do veículo correspondente
function redireciona(dados) {
    let btn_redi = document.getElementById('redireciona');

    btn_redi.addEventListener('click', () => {
        if (!dados.Veiculo) {
            alert("Este veículo ainda não possui um condutor.")
        }
        else {
           window.location.href = 'detalhe_frota.html?id=' + dados.Veiculo.id +''
        }
    })
}