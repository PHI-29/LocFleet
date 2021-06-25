//Chama a função get_all_dados assim que toda a pagina é carregada
window.onload = function () {
    get_all_dados();
}



//função ligada ao botão para adicionar novos motoristas que redireciona o usuario a pagina de adição
function add_motorista() {
    window.location.href = "cadt_motorista.html";
}

// Função para pegar todos os motoristas
async function get_all_dados() {
    let req = await fetch(`http://localhost:3000/motorista/listar/`);
    let dados = await req.json();

    this.imprimir_dados(dados);
}



//Pega a informação no input e depois o limpa
function find_motor_btn() {
    const search = document.querySelector("#find_motor").value

    if (!search) {
        apagarTabela()

        get_all_dados();
    }
    else {
        document.querySelector("#find_motor").value = "";

        enviar_dados(search)
    }
}



//Pegar todos os motoristas que o usuario pesquisou
async function enviar_dados(search) {
    const url = `http://localhost:3000/motorista/listar/${search}`
    let resposta = await fetch(url)
    let dados = await resposta.json();

    if (dados.length === 0) window.alert("Motorista não encontrado")
    else {
        apagarTabela()

        this.imprimir_dados(dados);
    }
}



// imprime os dados na tela em forma de tabela
function imprimir_dados(dados) {

    const table = document.querySelector("#motorista");
    dados.forEach(motorista => {
        let linha = table.insertRow(-1);
        let nome = linha.insertCell(0);
        let email = linha.insertCell(1);
        let celular = linha.insertCell(2);
        let placa_atual = linha.insertCell(3);
        let detalhes_motorista = linha.insertCell(4)

        let resposta;
        if (!motorista.Veiculo) {
            resposta = '<b style="color:#e82121">Sem veículo</b>';
        }
        else {
            resposta = motorista.Veiculo.placa
        }

        nome.innerHTML = motorista.nome;
        email.innerHTML = motorista.email;
        celular.innerHTML = motorista.cel;
        placa_atual.innerHTML = resposta;
        detalhes_motorista.innerHTML =
            '<a href="detalhe_motorista.html?id=' + motorista.id + '"><button class="btn_tab">Detalhes</button></a>';

    });
}



function apagarTabela() {
    const tables = document.querySelector("#motorista").rows;
    for (let i = tables.length - 1; i >= 1; i--) {
        document.querySelector("#motorista").deleteRow(i)
    }
}