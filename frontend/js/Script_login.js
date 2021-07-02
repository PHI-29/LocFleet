window.onload = () => {
    const btn = document.getElementById('btn_submit')

    btn.addEventListener('click', function (e) {

        // O formulario deixa de funcionar da forma que devia.
        e.preventDefault();

        getDados()
    });
}


//Pegar os dados do formulario
function getDados() {
    const usuario = {
        email: document.querySelector('#email').value,
        senha: document.querySelector('#senha').value
    }
    return enviar_dados(usuario)
}

//Envia os dados do formulario para a api
function enviar_dados(usuario) {
    const url = 'http://localhost:3000/login'

    let fetchData = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    }

    fetch(url, fetchData)
        .then(res => confirmarDados(res))
}

async function confirmarDados(res) {
    if (res.status === 200) {
        let dados = await res.json()
        console.log(dados.id)
        window.location.href = 'usuario.html?id=' + dados.id + ''
    } else {
        alert('Verifique os campos, as informações estão incorretas')
    }
}