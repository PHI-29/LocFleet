window.onload = function(){
    cadastrar_dados();
}

function add_motorista(){
    window.location.href="cadt_motorista.html";
}

async function cadastrar_dados(){
    let req = await fetch('https://my-json-server.typicode.com/PedroIsidorio29/apiFake/motoristas');
    let dados = await req.json();


    const table = document.querySelector("#motorista");
    dados.forEach(motorista => {
        let linha = table.insertRow(-1);
        let nome = linha.insertCell(0);
        let email = linha.insertCell(1);
        let telefone = linha.insertCell(2);
        let placa_atual = linha.insertCell(3);
        let detalhes_motorista = linha.insertCell(4)

        nome.innerHTML = motorista.nome;
        email.innerHTML = motorista.email;
        telefone.innerHTML = motorista.telefone;
        placa_atual.innerHTML = motorista.placa_atual;
        detalhes_motorista.innerHTML = 
        '<a href="detalhe_motorista.html?id='+motorista.id+'"><button class="btn_tab">Detalhes</button></a>';
        
    });
}
