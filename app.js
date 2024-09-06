function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
console.log(section);

let campoPesquisa = document.getElementById("campo-pesquisa").value;

//se o campoPesquisa for um String vazia
if (campoPesquisa == "") {
    section.innerHTML = `<p>Nenhum craque foi encontrado</p>`
    return;
};

//processo de transformar tudo em minusculo para filtrar a busca corretamente
campoPesquisa = campoPesquisa.toLowerCase();
console.log(campoPesquisa);

let resultados = "";
let nome = "";
let posicao = "";

for (let dado of dados) {
    //antes de tudo, tranformar os dados do baco de dados em minusculo para aprimoramento da pesquisa
    nome = dado.nome.toLowerCase();
    posicao = dado.posicao[0].toLowerCase();
    //posicao[1] = dado.posicao[1].toLowerCase();

    //se no dado nome includes campoPesquisa
    if (nome.includes(campoPesquisa) || posicao[0].includes(campoPesquisa)) {
        resultados += `
        <div class="item-resultado">
            <h2> 
               <a href="#" target="_blank">${dado.nome}</a>
            </h2>
            <p class="descricao-meta">
                ${dado.descricao}
            </p>
            <p class="descricao-meta">
                Idade: ${dado.idade}<br>
                Camisa: ${dado.numero}<br>
                Posição: ${dado.posicao[0]} - ${dado.posicao[1]}
            </p>
            <a href="${dado.instagram}" target="_blank">Instagram</a>
        </div>
        `;
    };
};

//se o resultado nao existir --> ! serve para isso
if (!resultados) {
    resultados = "<p>Nada encontrado. Você precisa digitar o nome do jogador ou sua posição</p>";
}

section.innerHTML = resultados;
}