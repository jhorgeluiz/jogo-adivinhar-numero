
let aleatorio = Math.floor(Math.random() * 100) + 1
let contador = 1
let cont_quant = 10

function escolher() {
    const codigo = document.getElementById('codigo').value
    let index = document.getElementById('index')
    if (codigo == 1) {
    document.querySelector('.menu').classList.add('tela_2')
    document.getElementById('container_tela_2').classList.remove('tela_2')
    } else if (codigo == 2) {
    window.location.href = 'index.html'
    } else {
    alert("opção invalida!")
    }
}

function chutar() {
    const numero = document.getElementById('numero').value
    const res = document.getElementById('res')
    const res2 = document.getElementById('res2')
    if (contador <= 10) {
    if (numero > aleatorio) {
        res.innerHTML = `<p class="resposta">Chutou alto!</p>`
    } else if (numero < aleatorio) {
        res.innerHTML = `<p class="resposta">Chutou baixo!</p>`
    } else {
        res.innerHTML = `<p class="acertou">Acertou, Parabens!</p>`
        return
    }
    contador++
    } else {
    res.innerHTML = `<img class="img" src="img-font/game-over.png" alt="">`
    }

    if (contador > 10 && numero != aleatorio) {
    res.innerHTML =  `<img class="img" src="img-font/game-over.png" alt="">`
    }

    if (numero < 1 || numero > 100) {
    res.innerHTML = `<p class="num_invalido">Numero Invalido!</p>`
    }
        
    if (cont_quant > 10 || numero != aleatorio) {
    cont_quant--
    res2.innerHTML = `<p class="res2"> Voce tem: <span>${cont_quant}</span> tentativas</p>` 
    }
}

function Limpar() {
    let campo = document.getElementById('numero').value = ''
    if (campo == 0) {
    campo.innerHTML = ''
    res.innerHTML = ''
    } 
}

function Sair() {
    let sair = document.getElementById('sair')
    window.location.href = 'index.html'
}