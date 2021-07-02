window.onload = () => {
    pegar_id()
}



//Função para pegar o Id do usuário selecionado
function pegar_id() {
    let url = window.location;
    let params = new URLSearchParams(url.search);
    let id = params.get('id');

    this.pegar_dados(id);
    this.remover(id)
}



//Função para pegar os dados na Api
async function pegar_dados(id) {
    let req = await fetch(`http://localhost:3000/usuario/listar/id/${id}`);
    let dados = await req.json();
    
    this.preencher_dados(dados)
}



//Função para prencher os dados nos seus campos
function preencher_dados(dados) {

    console.log(dados)
    //pega a quantidade de veículos e motoristas
    let veiculo = dados.Veiculos
    let motor=[]
    for(let i = 0;veiculo.length > i; i++) {
        if(veiculo[i].Motors[0]){
          motor.push(veiculo[i].Motors[0])
        }
    }

    //verifica se possui telefone
    let telefone
    if(dados.telefone === 0) {telefone = '<b style="color:#e82121">não possui telefone</b>';}
    else {telefone = dados.telefone}


    //Deixa a data no formato padrão
    let dataNas = dados.dtNascimento
    let dataANas = dataNas.split('-');
    dataNas = dataANas[2] + '/' + dataANas[1] + '/' + dataANas[0];


    //Preenche os dados em cada campo
    document.querySelector('#email').innerHTML = dados.email
    document.querySelector('#nome').innerHTML = dados.nome
    document.querySelector('#lastname').innerHTML = dados.sobrenome
    document.querySelector('#dtNascimento').innerHTML = dataNas
    document.querySelector('#cpf').innerHTML = dados.cpf
    document.querySelector('#tel').innerHTML = telefone
    document.querySelector('#cel').innerHTML = dados.celular
    document.querySelector('#veiculo').innerHTML = veiculo.length
    document.querySelector("#motorista").innerHTML = motor.length
}



//Função para remover motorista
function remover(id) {
    let btn_remover = document.getElementById('remover');

    btn_remover.addEventListener('click', () => {
        if (confirm("Deseja mesmo excluir sua conta?")) {

            let fetchData = {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            }

            const url = `http://localhost:3000/usuario/del/${id}`
            fetch(url, fetchData)
                .then(res => redirecionar(res))
            window.location.href = "index.html";
        }else{
            confirm("Fico contente que vai ficar conosco mais um tempo")
        }
    })
}
function redirecionar(res){
    window.location.href = "index.html";
}