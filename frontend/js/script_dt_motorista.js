window.onload = function(){
    preencher_dados();
}


async function preencher_dados(){
    let url = window.location;
    let params = new URLSearchParams(url.search);
    let id = params.get('id');
    let req = await fetch('http://localhost:3000/motorista/listar/'+id);
    let dados = await req.json();

    let resposta;
        if(!dados.VeiculoId){
            resposta ='<b style="color:#e82121">Não está conduzindo veículo atualmente</b>';
        }
        else{
           resposta = JSON.stringify(dados.VeiculoId.placa)
        }

    document.querySelector('#email').innerHTML = dados.email
    document.querySelector('#nome').innerHTML = dados.nome
    document.querySelector('#lastname').innerHTML = dados.sobrenome
    document.querySelector('#dtNascimento').innerHTML = dados.dtNascimento
    document.querySelector('#cpf').innerHTML = dados.cpf
    document.querySelector('#tel').innerHTML = dados.tel
    document.querySelector('#cel').innerHTML = dados.cel
    document.querySelector('#dtEmissao').innerHTML = dados.dtEmissao
    document.querySelector('#dtvencimento').innerHTML = dados.dtvencimento
    document.querySelector('#numCNH').innerHTML = dados.numCNH
    document.querySelector('#cep').innerHTML = dados.cep
    document.querySelector("#placa_at").innerHTML = resposta;

}