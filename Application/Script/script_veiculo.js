window.onload = function(){
    cadastrar_dados();
}


async function cadastrar_dados(){
    let req = await fetch('https://my-json-server.typicode.com/PedroIsidorio29/apiFake/veiculos');
    let dados = await req.json();


    const table = document.querySelector("#veiculos");
    dados.forEach(veiculos => {
        let linha = table.insertRow(-1);
        let modelo = linha.insertCell(0);
        let cor = linha.insertCell(1);
        let placa = linha.insertCell(2);
        let ultimo_condutor = linha.insertCell(3);
        let detalhes_veiculos = linha.insertCell(4)

        modelo.innerHTML = veiculos.modelo;
        cor.innerHTML = veiculos.cor;
        placa.innerHTML = veiculos.placa;
        ultimo_condutor.innerHTML = veiculos.condutor_atual;
        detalhes_veiculos.innerHTML = 
        '<a href="detalhe_veículo.html?id='+veiculos.id+'"><button class="btn_tab">Detalhes</button></a>';
       
    });
}