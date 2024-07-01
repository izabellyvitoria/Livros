const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Está à peocura de livros físicos ou em pdf para ler ou ouvir? No LiBOOKS têmos isso, além de que aqui você pode encontrar livros novos, velhos e usados, por um preço justo e barato. Você também pode vender seus livros abrindo uma conta para isso, mas primeiro. Qual gênero literario você mias gostaria de dar uma olhada?",
        alternativas: [
            {
                texto: "Ficção Científica!",
                afirmacao: "A ficção científica é um gênero ficcional a qual as narrativas se referem a elementos científicos. Esse gênero consiste de uma elaboração de fatos e princípios científicos em forma de narrativa, que pode igualar-se aos temas fantásticos. "
            },
            {
                texto: "Fantasia!",
                afirmacao: "Se refere a seres sobrenaturais, como: Fadas, Vampiros, Lobos, bruxas, entre outros seres místicos, as fantasias contem um universo novo, uma terra nova, um mundo inteiro, podendo conter guerras e romance."
            }
        ]
    },
    {
        enunciado: "Quais livros desses gênero de seria mais do seu agrado? icção científica, contento experimentos cientificos? Ou, Fantasia com romance ou guerra?",
        alternativas: [
            {
                texto: "Guerra e romance",
                afirmacao: "Várias espécies em guerra umas com as outras, ou até mesmo humanos."
            },
            {
                texto: "Romance",
                afirmacao: "Um amor entre espécies diferentes."
            }
        ]
    },
    {
        enunciado: "Nos livros de guerra e romance temos alguams indicações, escolha o de sua preferencia!",
        alternativas: [
            {
                texto: "The House of the Dragon.",
                afirmacao: "The house od the Dragon conta a história da casa(família), Targaryen, também envolve outras casa, mas a principal são os Targaryen, a quais são a única família que contem Dragões, a história tem como principal Rhaenyra Targaryen, Herdeira do trono de ferro, a qual foi roubada pelo seu meio irmão, Aegon II, O Usurpador, porém a guerra só dá início mesmo quando Aemond Targaryen, meio-irmão de Rhaenyra, mata sem querer o segundo filho de Rhaenyra, Lucerys Velaryon da casa Targaryen."
            },
            {
                texto: "Acotar.",
                afirmacao: "Ao todo são cinco livros que contam a história no ponto de vista da protagonista, Feyre Archeron, uma humana a qual era rica, mas por investimentos errados de seu pai, caiu na pobreza, ficando só, seu pai, sua irmã mais velha Nesta, a própria Feyre e sua irmã mais nova Elain, Feyre era a única de sua família que fazia alguma coisa para conseguir dinheiro e comida para sua família, desde os quatorze anos, após matar um feerico(fada) por ódio, o Grão-Senhor(mestre, líder) do feerico vai atrá de feyre,e a partir daí ela passa a viver e compreender a vida dos feericos."
            }
        ]
    },
    {
        enunciado: "Em The house of the Dragon, nós é apresentado a casa Targaryen como principal na história, temos dois lados na história, qua deles você gostaria de conhecer? ",
        alternativas: [
            {
                texto: "Team Black.",
                afirmacao: "A casa Targaryen teve alguns dessentedimento entre seus membros, o que causou uma guerra entre a família a divindo em dois, o time dos pretos é da Rainha légitima Rhaenyra Targaryen."
            },
            {
                texto: "Team Verde.",
                afirmacao: "A casa Targaryen teve alguns dessentedimento entre seus membros, o que causou uma guerra entre a família a divindo em dois, o time dos verde é do Rei Usurpador AegonII Targaryen."
            }
        ]
    },
    {
        enunciado: "para saber mais desse livro você pode escolher compra ele ou conhecer mais livros.",
        alternativas: [
            {
                texto: "Compra House of the Dragon.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "Conhecer outros Livros.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();