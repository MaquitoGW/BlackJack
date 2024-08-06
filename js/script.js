//criar intro

function awefortec() {
    var intro = document.createElement('video');
    intro.autoplay;
    intro.className = 'awefortec';
    intro.src = 'img/awefortec_intro.mp4';
    document.body.appendChild(intro);
    intro.play();

    return true;
}

function blackjackIntro() {
    var intro = document.createElement('video');
    intro.autoplay;
    intro.className = 'blackjack';
    intro.src = 'img/backjack_intro.mp4';

    document.body.appendChild(intro);
    intro.play();

    return true;
}

//chamar

if (awefortec()) {
    var totalTimer = 1;
    var timerIntro = setInterval(() => {
        document.body.removeChild(document.querySelector('video'));
        if (blackjackIntro()) {
            if (totalTimer == 2) {
                clearInterval(timerIntro);
                document.body.removeChild(document.querySelector('video'));
                createAudioElement(audio);
            }
            totalTimer++;
        }
    }, 3000);
}

//criar o som da pagina
var audio = document.createElement('audio');

function createAudioElement() {
    audio.autoplay = true;
    audio.loop = true;
    audio.src = "songs/sound_track.mp3";
}

//ativar e desativar som

var audioButton = document.querySelector('[audio]');
audioButton.addEventListener('click', () => {
    var atributeAudio = audioButton.getAttribute('audio');
    if (atributeAudio == 'on') {
        audio.pause();
        audioButton.innerHTML = '<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M301.109 34.818C289.609 29.631 276.156 31.725 266.734 40.1L131.84 160.004H48C21.49 160.004 0 181.496 0 208.004V304.002C0 330.51 21.49 352.002 48 352.002H131.84L266.734 471.906C272.719 477.219 280.312 480 288 480C292.438 480 296.906 479.094 301.109 477.188C312.609 472.031 320 460.594 320 448V64.006C320 51.412 312.609 39.975 301.109 34.818ZM513.938 255.998L560.969 208.967C570.344 199.592 570.344 184.404 560.969 175.029S536.406 165.654 527.031 175.029L480 222.061L432.969 175.029C423.594 165.654 408.406 165.654 399.031 175.029S389.656 199.592 399.031 208.967L446.062 255.998L399.031 303.029C389.656 312.404 389.656 327.592 399.031 336.967C408.404 346.34 423.588 346.348 432.969 336.967L480 289.936L527.031 336.967C536.404 346.34 551.588 346.348 560.969 336.967C570.344 327.592 570.344 312.404 560.969 303.029L513.938 255.998Z"></path></svg>';
        audioButton.setAttribute('audio', 'off');
    } else {
        audio.play();
        audioButton.innerHTML = '<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M444.562 181.942C434.281 173.598 419.156 175.067 410.812 185.348C402.406 195.598 403.906 210.723 414.188 219.129C425.5 228.379 432 241.816 432 256.003C432 270.19 425.5 283.628 414.188 292.878C403.906 301.284 402.406 316.409 410.812 326.658C415.531 332.471 422.437 335.471 429.375 335.471C434.719 335.471 440.125 333.69 444.562 330.065C467.094 311.627 480 284.659 480 256.003S467.094 200.379 444.562 181.942ZM505.125 108.005C494.906 99.662 479.781 101.099 471.344 111.349C462.937 121.599 464.437 136.724 474.687 145.13C508.562 172.911 528 213.316 528 256.003S508.562 339.096 474.688 366.877C464.438 375.283 462.938 390.408 471.344 400.657C476.094 406.439 482.969 409.439 489.906 409.439C495.281 409.439 500.656 407.657 505.125 404.001C550.156 367.095 576 313.127 576 256.003S550.156 144.911 505.125 108.005ZM333.109 34.819C321.609 29.631 308.156 31.725 298.734 40.1L163.84 160.005H80C53.49 160.005 32 181.496 32 208.004V304.002C32 330.51 53.49 352.002 80 352.002H163.84L298.734 471.906C304.719 477.219 312.312 480 320 480C324.438 480 328.906 479.094 333.109 477.188C344.609 472.031 352 460.594 352 448V64.006C352 51.412 344.609 39.975 333.109 34.819Z"></path></svg>';
        audioButton.setAttribute('audio', 'on');
    }
});

// Armazenar cartas
var cartasCookie = [];

//criar cartas
function creatCartas() {
    //com treze cartas em cada naipe
    //array de numeros de 2 a 10
    var valores = ['K', 'Q', 'J', 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10];

    //array dos quatro naipes 
    var naipes = ['Copas', 'Espadas', 'Ouros', 'Paus'];

    //gerar cartas
    var cartas = [],
        cor = '';

    for (let y = 0; y < valores.length; y++) {
        for (let x = 0; x < naipes.length; x++) {
            //adicionar cores
            if ('Espadas' == naipes[x] || 'Paus' == naipes[x]) cor = 'black';
            else cor = 'red';

            var element = { 'carta': valores[y], 'naipe': naipes[x], 'cor': cor }
            cartas.push(element);
        }
    }
    return cartas;
}

//gerar cartas
function cartaRandom() {
    //obter cartas
    var cartas = creatCartas();

    min = Math.ceil(0);
    max = Math.floor(cartas.length);
    var random = Math.floor(Math.random() * (max - min) + min);

    return cartas[random];
}

//verificar carta gerada
function checkCartas() {
    while (true) {
        var carta = cartaRandom();
        if (!cartasCookie.includes(JSON.stringify(carta))) { // Converta o objeto em string antes de verificar
            cartasCookie.push(JSON.stringify(carta)); // Adicione a string ao array
            console.log(cartasCookie)
            return carta;
        }
    }
}

// Criar o jogo

var play_home = document.getElementById('play'),
    telaHome = document.querySelector('.telaHome'),
    continuarJogo = [];

play_home.addEventListener('click', () => {
    //iniciar jogo
    var array = [
        {
            "selected": "c",
            "player": "0"
        },
        {
            "selected": "c",
            "player": "1"
        }];

    play(array);

    //remover botão de play
    telaHome.parentNode.removeChild(telaHome);
});

// funcão de click dos botoes

var option = document.querySelectorAll('[option]');
option.forEach(option => {
    option.addEventListener('click', () => {
        if (optionsSelect(option, continuarJogo)) continuarJogo = [];
    });
});

function optionsSelect(option, continuarJogo) {
    //pegar valores e adicionar a array

    var selected = option.getAttribute('option'),
        player = option.getAttribute('player');

    //adicionar a array

    var add = {
        'selected': selected,
        'player': player
    };

    continuarJogo.push(add);

    //ocultar botão e adicionar o texto

    var options = document.getElementById('options' + player);
    options.style.display = 'none';

    var text = (selected === 'c') ? 'Continua' : 'Parou';
    var texts = document.getElementById('text' + player);
    if (texts) texts.innerText = text;

    //verificar se array tem dois valores

    if (continuarJogo.length == 2) {
        if (play(continuarJogo)) {
            //remover texto e mostrar botão
            for (let x = 0; x < 2; x++) {
                var options = document.getElementById('options' + x);
                options.style.display = '';

                var texts = document.getElementById('text' + x);
                if (texts) texts.innerText = '';
            }
            return true;
        }
    }
    console.log(continuarJogo);
}

function play(jogo) {
    // svgs das cartas

    var naipes = {
        'Copas': `<svg role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path d="m 6.9238749,12.964876 c -0.0111,-0.02 -0.0587,-0.1642 -0.10586,-0.3207 -0.29877,-0.9913 -0.8534,-1.9952 -1.78219,-3.2256997 -0.34895,-0.4623 -0.67739,-0.8717 -1.56552,-1.9513 -1.02835,-1.25 -1.32291,-1.6505 -1.62036,-2.2028 -0.17565,-0.3262 -0.35768,-0.8224 -0.41758,-1.1385 -0.0599,-0.3158 -0.0608,-0.8319 -0.002,-1.1006 0.23902,-1.093 1.2099,-1.9176 2.37084,-2.0136 1.32995,-0.10999996 2.46124,0.5618 3.05565,1.8147 l 0.13273,0.2797 0.0999,-0.221 c 0.14844,-0.3284 0.29139,-0.5505 0.53268,-0.8276 0.61434,-0.7056 1.34547,-1.0512 2.22626,-1.0524 0.3945301,-5e-4 0.6206001,0.032 0.9568001,0.1386 0.50282,0.1591 0.88133,0.407 1.21843,0.7979 0.87849,1.0187 0.77448,2.4066 -0.30777,4.1063 -0.25245,0.3965 -0.70795,0.9832 -1.33437,1.7187 -0.7213701,0.8469 -1.0738301,1.2773 -1.4347001,1.752 -0.86498,1.1376997 -1.44672,2.1714997 -1.76671,3.1394997 -0.0488,0.1477 -0.1,0.2853 -0.11365,0.3058 -0.0318,0.048 -0.11629,0.048 -0.1425,10e-4 z"/></svg>`,
        'Espadas': `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="533.333px" height="533.333px" viewBox="0 0 533.333 533.333"><path d="M425.817,181.328C325.001,106.402,290.262,46.423,266.668,0.001l0,0c-0.002,0-0.002-0.001-0.002-0.001v0.001 c-23.592,46.422-58.333,106.402-159.149,181.327c-171.893,127.753-10.092,306.077,132.166,207.93 c-9.269,60.9-40.901,105.298-73.025,124.416v19.659h100.008h100.008v-19.656c-32.126-19.118-63.756-63.517-73.026-124.419 C435.905,487.407,597.709,309.081,425.817,181.328z"/></svg>`,
        'Ouros': `<svg role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path d="m 6.999995,1 c -1.2494,2.0791 -2.65591,4.0791 -4.08487,6 1.49629,1.9209 2.92525,3.9209 4.08487,6 1.20452,-2.1187 2.52125,-4.1385 4.08488,-6 C 9.566135,5.0791 8.182065,3.0396 6.999995,1 Z"/></svg>`,
        'Paus': `<svg role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path d="m 5.9879637,6.1783 c -1.89881,-0.907 -4.69189,0.1749 -4.03105,2.6155 0.64399,2.3784 3.42513,1.8564 4.38685,0.4087 -0.40121,2.745 -1.10584,3.1724 -1.52817,3.7683 l 4.48387,0 c -0.4543,-0.6373 -1.27925,-1.0233 -1.76303,-3.806 0.96908,1.4454 3.8823703,1.9464 4.5170603,-0.3976 0.62435,-2.3058 -2.1900103,-3.619 -4.0614903,-2.5751 1.79457,-1.2051 2.4390503,-5.1629 -0.95987,-5.1629 -3.43247,0 -2.85977,4.0352 -1.04417,5.1491 z"/></svg>`
    };

    var player1 = checkCartas(),
        player2 = checkCartas(),
        scoreTotal = [],
        stop = 0;

    for (let i = 0; i < jogo.length; i++) {
        var player = '',
            p = jogo[i].player;

        if (p == 0) player = player1;
        else player = player2;

        //pegar os pontos

        var scoresPlayers = document.querySelector('[score_' + p + ']'),
            scorePlayer = parseInt(scoresPlayers.getAttribute('score_' + p)),
            score = 0;

        //verificar se o jogador vai continuar 

        if (jogo[i].selected == 'c') {

            //pegar valor das cartas

            if (player.carta == 'K' || player.carta == 'J' || player.carta == 'Q') score = 10;
            else if (player.carta == 'A') score = 1;
            else score = player.carta;

            //adicionar novo valor de pontos

            scoresPlayers.setAttribute('score_' + p, score + scorePlayer);
            scoresPlayers.textContent = `${score + scorePlayer} pontos`

            var label = document.createElement("label");
            label.classList.add("carta", player.cor);

            var h4_1 = document.createElement("h4");
            h4_1.classList.add("text1");
            h4_1.textContent = player.carta;

            var span = document.createElement("span");
            span.innerHTML = naipes[player.naipe]

            var h4_2 = document.createElement("h4");
            h4_2.classList.add("text2");
            h4_2.textContent = player.carta;

            label.appendChild(h4_1);
            label.appendChild(span);
            label.appendChild(h4_2);

            document.getElementById(p).appendChild(label);

            //criar som das cartas 

            var drop = document.createElement('audio');
            drop.src = "songs/drop.mp3";
            drop.play();
        } else stop++;

        //adicionar score total

        var addScore = {
            'p': p,
            'score': score + scorePlayer
        };

        scoreTotal.push(addScore)
    }

    console.log(player1);
    console.log(player2);
    console.log(scoreTotal);

    //verificar se o jogadores param 
    if (stop >= scoreTotal.length) {
        if (checkWinner(scoreTotal, true)) return true;
    }
    else {
        if (checkWinner(scoreTotal, false)) return true;
    }
}

//funcão de verificação

function checkWinner(scoreTotal, stop) {
    //verificar se alguem ganhou 
    var checkPlayer = [];
    for (let w = 0; w < scoreTotal.length; w++) {
        var scores = scoreTotal[w].score,
            players = scoreTotal[w].p,
            result = '';

        if (stop) result = 'stop';
        else if (scores == 21) result = 'Winner';
        else if (scores > 21) result = 'Loser';

        checkPlayer.push({
            'p': players,
            'valor': result,
            'score': scores
        })
    }

    //verificar

    if (checkPlayer[0].valor == '' && checkPlayer[1].valor == '') return true;
    else if (checkPlayer[0].valor == 'stop' && checkPlayer[1].valor == 'stop') {

        if (checkPlayer[0].score == checkPlayer[1].score) winner('empate');
        else if (checkPlayer[0].score > checkPlayer[1].score) winner(1);
        else winner(2);

    }
    else if (checkPlayer[0].valor == checkPlayer[1].valor) winner('empate');
    else {
        for (let value = 0; value < checkPlayer.length; value++) {
            var elemento = checkPlayer[value];
            switch (elemento.valor) {
                case 'Winner':
                    var resultado = 2;
                    if (elemento.p == 0) resultado = 1;
                    winner(resultado);
                    break;
                case 'Loser':
                    var resultado = 1;
                    if (elemento.p == 0) resultado = 2;
                    winner(resultado);
                default:
                    break;
            }
        }
    }

    checkPlayer = [];
    return true;
}

function winner(jogador) {

    //verificar se deu empate

    var text = '',
        srcEffect = '',
        timer = '';

    if (jogador == 'empate') {
        text = 'O jogo empatou!!';
        srcEffect = 'empate';
        timer = 2000;
    }
    else {
        text = `O jogador ${jogador} Ganhou !!!`;
        srcEffect = 'winner';
        timer = 3700;
    }

    //criar tela de winner

    var telaHome = document.createElement('div');
    telaHome.className = 'telaHome';

    var h3 = document.createElement('h3');
    h3.textContent = text;
    telaHome.appendChild(h3);

    var button = document.createElement('button');
    button.textContent = "Reiniciar";
    button.id = "play";
    button.className = "red";
    telaHome.appendChild(button);

    document.querySelector('main').appendChild(telaHome);

    var effectAudio = document.createElement('audio');
    effectAudio.src = 'songs/' + srcEffect + '.mp3';

    //verificar se audio está pausado

    var audioEstado = true;
    if (audio.paused) { audioEstado = false }
    else audio.pause();

    effectAudio.play();

    //começar denovo audio

    var clear = setInterval(() => {
        if (audioEstado) audio.play();
        clearInterval(clear);
    }, timer);

    // Limpar cartas lançadas
    cartasCookie = [];

    // reiniciar jogo

    button.addEventListener('click', () => {
        //iniciar jogo
        var array = [
            {
                "selected": "c",
                "player": "0"
            },
            {
                "selected": "c",
                "player": "1"
            }];

        //remover cartas e pontos
        for (let r = 0; r < 2; r++) {
            document.getElementById(r).innerHTML = '';

            var scores = document.querySelector('[score_' + r + ']');
            scores.setAttribute('score_' + r, 0);
        }

        //remover botão de play
        telaHome.parentNode.removeChild(telaHome);

        play(array);
    });
}