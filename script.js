const jogadores = []
const obj1 = {
nome: "Endrick",
idade: 16,
posicao: "Atacante",
timeAtual: "Palmeiras",
pais: "Brasil",
imagem: "https://egool.com.br/wp-content/uploads/2022/10/david-inter-ricardo-duarte-21.jpg",
site: "https://pt.wikipedia.org/wiki/Endrick"
}
const obj2 = {
nome: "Haaland",
idade: 21,
posicao: "Atacante",
timeAtual: "Manchester City",
pais: "Noruega",
imagem: "https://s2.glbimg.com/zh7upOQBAVE0bUtnz0ZFpCVV3NU=/0x0:4857x3423/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/B/L/UtK3zwSCyQrBi2Oxm20A/haaland-getty.jpg",
site: "https://pt.wikipedia.org/wiki/Erling_Haaland"
}
const obj3 = {
nome: "Mbape",
idade: 24,
posicao: "Atacante",
timeAtual: "Paris Saint-Germain",
pais: "França",
imagem: "https://blog.kto.com/pt/wp-content/uploads/sites/2/2022/12/Kylian-Mbappe-1-696x464.jpg",
site: "https://pt.wikipedia.org/wiki/Kylian_Mbapp%C3%A9"
}
const obj4 = {
nome: "Bellingham",
idade: 18,
posicao: "Meio-campista",
timeAtual: "Borussia Dortmund",
pais: "Inglaterra",
imagem: "https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Ftherealchamps.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1243301538.jpeg",
site: "https://pt.wikipedia.org/wiki/Jude_Bellingham"
}



const jogadoresCraques = [obj1, obj2, obj3, obj4];


for (let i = 0; i < jogadoresCraques.length; i++) {
  const jogador = jogadoresCraques[i];
  const container = document.createElement("div");
  container.innerHTML = `
    <img src="${jogador.imagem}" alt="${jogador.nome}">
    <h2>${jogador.nome}</h2>
    <p>Idade: ${jogador.idade}</p>
    <p>Posição: ${jogador.posicao}</p>
    <p>Time atual: ${jogador.timeAtual}</p>
    <p>País: ${jogador.pais}</p>
    <a href="${jogador.site}">Saiba mais</a>
  `;
  document.body.appendChild(container);
}


