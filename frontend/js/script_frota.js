//Chama a função get_all_dados assim que toda a pagina é carregada
window.onload = function () {
    get_all_dados();
}



//função ligada ao botão para adicionar novos veiculos que redireciona o usuario a pagina de adição
function add_veiculo(){
    window.location.href="cadt_frota.html";
}



//Função ligada ao botão de listar a tabela novamente 
function reset_tab_btn() {

    apagarTabela()

    get_all_dados();
}



// Função para pegar todos os veiculos
async function get_all_dados() {
    let req = await fetch(`http://localhost:3000/veiculo/listar/`);
    let dados = await req.json();

    this.imprimir_dados(dados);
}



//Pega a informação no input e depois o limpa
function find_veiuclo_btn() {
    const search = document.querySelector("#find_veiuculo").value

    if (!search) window.alert("Digite um modelo")
    else {

        document.querySelector("#find_veiuculo").value = "";

        enviar_dados(search)

    }
}



//Pegar todos os veíclos que o usuario pesquisou
async function enviar_dados(search) {
    const url = `http://localhost:3000/veiculo/listar/${search}`
    let resposta = await fetch(url)
    let dados = await resposta.json();

    if (dados.length === 0) window.alert("Veiculo não encontrado")
    else {
        apagarTabela()

        this.imprimir_dados(dados);
    }
}



// imprime os dados na tela em forma de tabela
function imprimir_dados(dados) {
    const table = document.querySelector("#veiculos");
    dados.forEach(veiculos => {
        let linha = table.insertRow(-1);
        let modelo = linha.insertCell(0);
        let cor = linha.insertCell(1);
        let placa = linha.insertCell(2);
        let ultimo_condutor = linha.insertCell(3);
        let detalhes_veiculos = linha.insertCell(4)

        let resposta;
        if(!veiculos.Motors[0]){
            resposta ='<b style="color:#e82121">Sem motorista</b>';
        }
        else{
           resposta = veiculos.Motors[0].nome
        }

        modelo.innerHTML = veiculos.modelo;
        cor.innerHTML = veiculos.cor;
        placa.innerHTML = veiculos.placa;
        ultimo_condutor.innerHTML = resposta
        detalhes_veiculos.innerHTML = 
        '<a href="detalhe_frota.html?id='+veiculos.id+'"><button class="btn_tab">Detalhes</button></a>';
    });
}



//Função que apaga todos os itens da tabela
function apagarTabela(){
    const tables = document.querySelector("#veiculos").rows;
    for(let i=tables.length-1; i >= 1 ; i--){
        document.querySelector("#veiculos").deleteRow(i)
    }
}