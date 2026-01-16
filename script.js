const momentosMusicais = {
    'projeto1': {
        arquivo: 'musicas/Muda_Tudo.mp3',
        tempo: 3
    },
    'projeto2': {
        arquivo: 'musicas/Amar_não_é_pecado.mp3',
        tempo: 20
    },
    'projeto3': {
        arquivo: 'musicas/Esse_Cara_Sou_Eu.mp3',
        tempo: 12
    },
    'projeto4': {
        arquivo: 'musicas/Que_Sorte_A_Nossa.mp3',
        tempo: 8
    },
    'projeto5': {
        arquivo: 'musicas/Simples.mp3',
        tempo: 11
    },
    'projeto6': {
        arquivo: 'musicas/Tá_Vendo_Aquela_Lua.mp3',
        tempo: 8
    },
    'projeto7': {
        arquivo: 'musicas/Te_esperando.mp3',
        tempo: 13
    },
    'projeto8': {
        arquivo: 'musicas/Terça_de_Tarde.mp3',
        tempo: 12
    },
    'projeto9': {
        arquivo: 'musicas/Olhos_castanhos.mp3',
        tempo: 3
    },
    'projeto10': {
        arquivo: 'musicas/Tudo_que_você_quiser.mp3',
        tempo: 27
    },
    'projeto11': {
        arquivo: 'musicas/Vagalumes.mp3',
        tempo: 10
    }
};

let TocadorAtual = null;
let ProjetoAtivo = null;
let EstaPausado = false;


function TocarMusica(projetoId) {
    const config = momentosMusicais[projetoId];
    
    if (!config) return;
    

    if (ProjetoAtivo === projetoId && TocadorAtual) {
        if (!EstaPausado) {
           
            TocadorAtual.pause();
            EstaPausado = true;
        } else {
            
            TocadorAtual.play();
            EstaPausado = false;
        }
        return;
    }
   
    if (TocadorAtual && !TocadorAtual.paused) {
        TocadorAtual.pause();
    }
    
    if (!TocadorAtual) {
        TocadorAtual = new Audio(config.arquivo);
        TocadorAtual.volume = 0.8;
    } else {
        TocadorAtual.src = config.arquivo;
    }
    
    TocadorAtual.currentTime = config.tempo;
    
    ProjetoAtivo = projetoId;
    EstaPausado = false;
    
    TocadorAtual.play();
}


document.addEventListener('click', function(evento) {
    const elemento = evento.target.closest('[data-projeto]');
    
    if (elemento) {
        const projetoId = elemento.getAttribute('data-projeto');
        TocarMusica(projetoId);
    }
});