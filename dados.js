/* PARA DEFINIÇÃO DE UMA LISTA EM JAVASCRIPT BASTA ADICIONAR UM COLCHETES "{
[]" */
//lista
let dados = [
    {
        nome: "Luiz Henrique",
        descricao: "A joia do Botafogo: Luiz Henrique, o camisa 7 do Botafogo, é um dos jovens talentos mais promissores do futebol brasileiro. Conhecido por sua velocidade, habilidade e finalização precisa, o atacante tem se destacado nas partidas e conquistadoa torcida alvinegra.",
        instagram: "https://www.instagram.com/luiz_henriqueee_11/",
        posicao: ["Atacante", "Ponta Direita"],
        numero: 7,
        idade: 22
    },
    {
        nome: "Mateo Ponte",
        descricao: "Mateo Ponte é um jovem lateral-direito uruguaio que se destaca no Botafogo. Revelado pelo Danubio, no Uruguai, o jogador chamou a atenção por suas atuações na Copa do Mundo Sub-20, onde foi um dos pilares da seleção uruguaia campeã.",
        instagram: "https://www.instagram.com/mateoponte_04/",
        posicao: ["Lateral", "Lateral Esquerdo"],
        numero: 4,
        idade: 21
    },
    {
        nome: "Tiquinho Soares",
        descricao: "Tiquinho Soares é um centroavante brasileiro que se destaca pela sua versatilidade e faro de gol. Atualmente vestindo a camisa do Botafogo, ele tem sido um dos principais responsáveis pelos bons resultados da equipe Referência no ataque do Botafogo, Tiquinho Soares é conhecido por sua experiência e visão de jogo.",
        instagram: "https://www.instagram.com/tiquinhosoares9/",
        posicao: ["Atacante", "Centroavante"],
        numero: 9,
        idade: 33
    },
    {
        nome: "Junior Santos",
        descricao: "O Raio Alvinegro Júnior Santos é um atacante brasileiro que se destaca pela sua velocidade e habilidade em dribles. Com seu carísma conquistou o coração da torcida. Tem vários apelidos: O raio alvinegro, jacaré, mbappe do fogão....",
        instagram: "https://www.instagram.com/junior_santos_oficial/",
        posicao: ["Atacante", "Ponta Direita"],
        numero: 11,
        idade: 29
    },
    {
        nome: "Igor Jesus",
        descricao: "é um jovem atacante brasileiro que vem ganhando destaque no cenário nacional, especialmente com sua passagem pelo Botafogo. Conhecido por sua força física e habilidade nos arremates, ele se tornou uma peça fundamental no ataque do time carioca.",
        instagram: "https://www.instagram.com/igorjesusoficial/",
        posicao: ["Atacante", "Centroavante"],
        numero: 99,
        idade: 23
    },
    {
        nome: "Thiago Almada",
        descricao: "Meia-atacante argentino, campeão mundial em 2022, conhecido por sua habilidade, visão de jogo e finalização precisa. Chegou ao Botafogo em 2024 e rapidamente se tornou um dos principais jogadores do time.",
        instagram: "https://www.instagram.com/thiago_almada23/", 
        posicao: ["Meia", "Meia-atacante"],
        numero: 23,
        idade: 23
    },
    {
        nome: "Jefferson Savarino",
        descricao: "Atacante venezuelano conhecido por sua velocidade e habilidade nos dribles. Chegou ao Botafogo em 2024 e rapidamente se tornou um dos principais jogadores do time, destacando-se pela sua capacidade de desequilibrar as partidas.",
        instagram: "https://www.instagram.com/jeffersonsavarino/", 
        posicao: ["Atacante", "Ponta Esquerda"],
        numero: 10,
        idade: 27
    },
    {
        nome: "Marlon Freitas",
        descricao: "Volante brasileiro conhecido por sua força física, marcação implacável e boa distribuição de bola. É uma das peças fundamentais do meio-campo do Botafogo, responsável por dar equilíbrio ao time.",
        instagram: "https://www.instagram.com/_marlonfreitass23/", 
        posicao: ["Volante", "Volante de construção"],
        numero: 5,
        idade: 28
    },
    {
        nome: "Gregore",
        descricao: "Volante brasileiro com experiência em grandes clubes, conhecido por sua liderança e visão de jogo. Chegou ao Botafogo em 2024 e rapidamente se tornou um dos pilares do time, formando uma dupla de volantes sólida com Marlon Freitas.",
        instagram: "https://www.instagram.com/gregore94/", 
        posicao: ["Volante", "Volante de marcação"],
        numero: 26,
        idade: 30
    },
    {
        nome: "Cuiabano",
        descricao: "Lateral-esquerdo brasileiro, conhecido por sua velocidade e cruzamentos precisos. É uma das principais opções para o ataque pelo lado esquerdo do Botafogo.",
        instagram: "https://www.instagram.com/cuiabano_06/", 
        posicao: ["Lateral", "Lateral Esquerdo"],
        numero: 6,
        idade: 25
    },
    {
        nome: "Alexander Barbosa",
        descricao: "Zagueiro central brasileiro, conhecido por sua força física e liderança. É um dos pilares da defesa do Botafogo, responsável por organizar a linha de quatro.",
        instagram: "https://www.instagram.com/alex.barboz/", 
        posicao: ["Zagueiro", "Zagueiro Central"],
        numero: 13,
        idade: 29
    },
    {
        nome: "Bastos Quissanga",
        descricao: "Zagueiro angolano, conhecido por sua velocidade e habilidade no jogo aéreo. Chegou ao Botafogo em 2024 e rapidamente se adaptou ao futebol brasileiro, formando uma dupla sólida de zaga com Alexander Barbosa.",
        instagram: "https://www.instagram.com/bastosquissanga/", 
        posicao: ["Zagueiro", "Zagueiro Central"],
        numero: 4,
        idade: 27
    },
    {
        nome: "Alex Telles",
        descricao: "Lateral-esquerdo brasileiro com vasta experiência em grandes clubes europeus, conhecido por sua precisão nos cruzamentos e habilidade na bola parada. Chegou ao Botafogo em 2024 e é esperado que traga mais qualidade e experiência ao setor defensivo.",
        instagram: "https://www.instagram.com/alextelles13/", 
        posicao: ["Lateral", "Lateral Esquerdo"],
        numero: 12,
        idade: 30
    },
    {
        nome: "Allan",
        descricao: "Volante brasileiro conhecido por sua força física, marcação implacável e boa distribuição de bola. Chegou ao Botafogo em 2024 para fortalecer o meio-campo e dar mais equilíbrio ao time.",
        instagram: "https://www.instagram.com/allanmarques91/", 
        posicao: ["Volante", "Volante de marcação"],
        numero: 8,
        idade: 27
    },
    {
        nome: "Jhon Victor",
        descricao: "Goleiro brasileiro com grande potencial, conhecido por suas defesas importantes e segurança sob as traves. É uma das promessas da nova geração de goleiros brasileiros.",
        instagram: "https://www.instagram.com/johnvictor/",
        posicao: ["Goleiro"],
        numero: 1,
        idade: 22
    },
    {
        nome: "Danilo Barbosa",
        descricao: "Volante brasileiro com experiência em grandes clubes europeus, conhecido por sua versatilidade e capacidade de desarme. É uma opção importante para o meio-campo do Botafogo, podendo atuar tanto como volante quanto como zagueiro.",
        instagram: "https://www.instagram.com/danilo21/", 
        posicao: ["Volante", "Zagueiro"],
        numero: 25,
        idade: 27
    },
    {
        nome: "Tchê Tchê",
        descricao: "Volante brasileiro com vasta experiência no futebol brasileiro, conhecido por sua marcação forte e dinamismo. É uma das peças fundamentais do meio-campo do Botafogo, responsável por dar equilíbrio ao time.",
        instagram: "https://www.instagram.com/tchetche/", 
        posicao: ["Volante"],
        numero: 15,
        idade: 30
    },
    {
        nome: "Matheus Martins",
        descricao: "Atacante brasileiro com grande potencial, conhecido por sua velocidade e habilidade nos dribles. É uma das jovens promessas do Botafogo, com um futuro promissor.",
        instagram: "https://www.instagram.com/matheusmartinss/", 
        posicao: ["Atacante", "Ponta Esquerda"],
        numero: 37,
        idade: 21
    }
];

//objeto
/*
let LH7 = {
    nome : "Luiz Henrique",
    descricao : "A joia do Botafogo: Luiz Henrique, o camisa 7 do Botafogo, é um dos jovens talentos mais promissores do futebol brasileiro. Conhecido por sua velocidade, habilidade e finalização precisa, o atacante tem se destacado nas partidas e conquistadoa torcida alvinegra.",
    instagram : "https://www.instagram.com/luiz_henriqueee_11/",
}
*/