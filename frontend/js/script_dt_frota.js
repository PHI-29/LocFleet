window.onload = function(){
    preencher_dados();
}


async function preencher_dados(){
    let url = window.location;
    let params = new URLSearchParams(url.search);
    let id = params.get('id');
    let req = await fetch('http://localhost:3000/veiculo/listar/'+id);
    let dados = await req.json();

    let resposta;
        if(!dados.Motors[0]){
            resposta ='<b style="color:#e82121">Sem motorista</b>';
        }
        else{
           resposta = dados.Motors[0].nome
        }

    document.querySelector("#modelo").innerHTML = dados.modelo
    document.querySelector("#marca").innerHTML = dados.marca
    document.querySelector("#ano").innerHTML = dados.ano
    document.querySelector("#placa").innerHTML = dados.placa
    document.querySelector("#renavam").innerHTML = dados.renavam
    document.querySelector("#cor").innerHTML = dados.cor
    document.querySelector("#km").innerHTML = dados.km
    document.querySelector("#loc").innerHTML = dados.loc
    document.querySelector("#valor_loc").innerHTML = dados.valor
    document.querySelector("#ultima_revi").innerHTML = dados.ulRevisao;
    document.querySelector("#Condutor_atual").innerHTML = resposta;
}
