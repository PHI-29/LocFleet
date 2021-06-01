window.onload = function(){
    preencher_dados();
}


async function preencher_dados(){
    let url = window.location;
    let params = new URLSearchParams(url.search);
    let id = params.get('id');
    let req = await fetch('https://my-json-server.typicode.com/PedroIsidorio29/apiFake/motoristas/'+id);
    let dados = await req.json();

    document.querySelector("#m_nome").innerHTML = dados.nome;
    document.querySelector("#m_sobrenome").innerHTML = dados.sobrenome;
    document.querySelector("#m_idade").innerHTML = dados.idade;
    document.querySelector("#m_cpf").innerHTML = dados.cpf;
    document.querySelector("#m_rg").innerHTML = dados.rg;
    document.querySelector("#m_email").innerHTML = dados.email;
    document.querySelector("#m_data_nascimento").innerHTML = dados.data_nascimento;
    document.querySelector("#m_telefone").innerHTML = dados.telefone;
    document.querySelector("#m_cnh").innerHTML = dados.cnh;
    document.querySelector("#m_data_em").innerHTML = dados.data_emissão;
    document.querySelector("#m_data_venc").innerHTML = dados.data_vencimento;
    document.querySelector("#m_placa_at").innerHTML = dados.placa_atual;
    document.querySelector("#m_rua").innerHTML = dados.endereço.rua;
    document.querySelector("#m_numero").innerHTML = dados.endereço.numero;
    document.querySelector("#m_cidade").innerHTML = dados.endereço.cidade;
    document.querySelector("#m_cep").innerHTML = dados.endereço.cep;

}