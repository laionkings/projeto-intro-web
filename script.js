const jogadoresCraques = [
  {
    nome: "Endrick",
    idade: 16,
    posicao: "Atacante",
    timeAtual: "Palmeiras",
    pais: "Brasil",
    imagem:
      "https://egool.com.br/wp-content/uploads/2022/10/david-inter-ricardo-duarte-21.jpg",
    site: "https://pt.wikipedia.org/wiki/Endrick",
  },
  {
    nome: "Haaland",
    idade: 21,
    posicao: "Atacante",
    timeAtual: "Manchester City",
    pais: "Noruega",
    imagem:
      "https://s2.glbimg.com/zh7upOQBAVE0bUtnz0ZFpCVV3NU=/0x0:4857x3423/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/B/L/UtK3zwSCyQrBi2Oxm20A/haaland-getty.jpg",
    site: "https://pt.wikipedia.org/wiki/Erling_Haaland",
  },
  {
    nome: "Mbape",
    idade: 24,
    posicao: "Atacante",
    timeAtual: "Paris Saint-Germain",
    pais: "França",
    imagem:
      "https://blog.kto.com/pt/wp-content/uploads/sites/2/2022/12/Kylian-Mbappe-1-696x464.jpg",
    site: "https://pt.wikipedia.org/wiki/Kylian_Mbapp%C3%A9",
  },
  {
    nome: "Bellingham",
    idade: 18,
    posicao: "Meio-campista",
    timeAtual: "Borussia Dortmund",
    pais: "Inglaterra",
    imagem:
      "https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Ftherealchamps.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1243301538.jpeg",
    site: "https://pt.wikipedia.org/wiki/Jude_Bellingham",
  },
];

function renderizarProds(array) {
  const container = document.getElementById("jogadores-container");
  container.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    let jogador = `
      <img src="${array[i].imagem}" alt="${array[i].nome}">
      <h2>${array[i].nome}</h2>
      <p>Idade: ${array[i].idade}</p>
      <p>Posição: ${array[i].posicao}</p>
      <p>Time atual: ${array[i].timeAtual}</p>
      <p>País: ${array[i].pais}</p>
      <a href="${array[i].site}">Saiba mais</a>
    `;
    container.innerHTML += jogador;
  }
}

renderizarProds(jogadoresCraques);

function pesquisarJogadores() {
  const inputPesquisa = document.getElementById("txtBusca");
  const botaoPesquisa = document.getElementById("btnBusca");

  botaoPesquisa.addEventListener("click", () => {
    let valor = inputPesquisa.value.toUpperCase();
    let filtro = [];
    for (jogador of jogadoresCraques) {
      
      if (jogador.nome.toUpperCase().includes(valor)) {
        filtro.push(jogador);
      }
      renderizarProds(filtro);
    }
    console.log(filtro);

    if (filtro.length === 0) {
      renderizarProds(filtro);
      alert("Jogador não encontrado");
      inputPesquisa.value = "";
    }
  });
}

pesquisarJogadores();
