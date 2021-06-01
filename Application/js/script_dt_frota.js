window.onload = function(){
    preencher_dados();
}


async function preencher_dados(){
    let url = window.location;
    let params = new URLSearchParams(url.search);
    let id = params.get('id');
    let req = await fetch('https://my-json-server.typicode.com/PedroIsidorio29/apiFake/veiculos/'+id);
    let dados = await req.json();

    document.querySelector("#v_modelo").innerHTML = dados.modelo
    document.querySelector("#v_marca").innerHTML = dados.marca
    document.querySelector("#v_ano").innerHTML = dados.ano
    document.querySelector("#v_placa").innerHTML = dados.placa
    document.querySelector("#v_renav").innerHTML = dados.renavam
    document.querySelector("#v_cor").innerHTML = dados.cor
    document.querySelector("#v_situacao").innerHTML = dados.situação
    document.querySelector("#v_km").innerHTML = dados.quilometragem
    document.querySelector("#v_loc").innerHTML = dados.localização
    document.querySelector("#v_val_loc").innerHTML = dados.valor_locação
    document.querySelector("#v_u_revisao").innerHTML = dados.ultima_revisão;
    document.querySelector("#v_c_atual").innerHTML = dados.condutor_atual;
}

function redireciona(){
    
    function motorista(){
        
    }
}

function remover(){

}