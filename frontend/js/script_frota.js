window.onload = function(){
    cadastrar_dados();
}

function add_veiculo(){
    window.location.href="cadt_frota.html";
}

async function cadastrar_dados(){
    let req = await fetch('http://localhost:3000/veiculo/listar');
    let dados = await req.json();

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
           resposta = JSON.stringify(veiculos.Motors[0].nome)
        }

        modelo.innerHTML = veiculos.modelo;
        cor.innerHTML = veiculos.cor;
        placa.innerHTML = veiculos.placa;
        ultimo_condutor.innerHTML = resposta
        detalhes_veiculos.innerHTML = 
        '<a href="detalhe_frota.html?id='+veiculos.id+'"><button class="btn_tab">Detalhes</button></a>';
    });
}