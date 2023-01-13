const jogadoresCraques = []
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

jogadores.push(obj1, obj2, obj3, obj4);

console.log(jogadoresCraques);

/*
[
{
nome: "Endrick",
idade: 16,
posicao: "Atacante",
timeAtual: "Palmeiras FC",
pais: "Brasil",
imagem: "https://www.psg.fr/sites/default/files/styles/image_equipe_article/public/images/2021-02/endrick-psg.jpg?itok=6pFoJgKv",
site: "https://www.psg.fr/equipe/endrick-3"
},
{
nome: "Haaland",
idade: 21,
posicao: "Atacante",
timeAtual: "Borussia Dortmund",
pais: "Noruega",
imagem: "https://www.bvb.de/globalassets/images/players/haaland-erling-braut/2020-2021/erling-haaland-bvb-2020-2021-portrait-bvb.jpg",
site: "https://www.bvb.de/de/teams/profis/erling-haaland"
},
{
nome: "Mbape",
idade: 24,
posicao: "Atacante",
timeAtual: "Paris Saint-Germain",
pais: "França",
imagem: "https://www.psg.fr/sites/default/files/styles/image_equipe_article/public/images/2021-02/mbappe-psg.jpg?itok=1Y0Ysc-L",
site: "https://www.psg.fr/equipe/mbappe-7"
},
{
nome: "Bellingham",
idade: 19,
posicao: "Meio-campista",
timeAtual: "Borussia Dortmund",
pais: "Inglaterra",
imagem: "https://www.bvb.de/globalassets/images/players/bellingham-jude/2020-2021/jude-bellingham-bvb-2020-2021-portrait-bvb.jpg",
site: "https://www.bvb.de/de/teams/profis/jude-bellingham"
}
]
*/

let jogadoresCraque = []
jogadoresCraques.push(obj1,obj2,obj3,obj4)

for (let i =0;i<jogadoresCraques.length; i++){
if(jogadoresCraques[i].pais==="Brasil"){
jogadoresBrasileiros.push(jogadoresCraques[i])
}
}

for(let i=0;i< jogadoresCraques.length;i++){
console.log(jogadoresCraques[i].posicao)
}

function jogadoresRelatorio(objeto){
console.log(`Nome:${objeto.nome.toUpperCase()}\nIdade:${objeto.idade}\nPosição:${objeto.posicao}\nTime Atual:${objeto.timeAtual}\nPaís:${objeto.pais}\n`)
}
for (let i=0;i<jogadoresCraques.length;i++){
jogadoresRelatorio(jogadoresCraques[i]);
};

function buscarJogadores (jogadoresCraques){
const nome = prompt("Digite o nome do jogador").toUpperCase()
let objeto = jogadoresCraques.filter(
jogador=>{
return jogador.nome.toUpperCase().includes(nome)
}
)
if(objeto.length===0){
alert("Jogador não encontrado!")
}else{
console.log("Achouuu!!!!")
return objeto
}
}



function criarCard (obj){
    const card = document.createElement("div")
    const imagem = document.createElement("img")
    const nome = document.createElement("a")
    const dados = document.createElement("ul")
    const idade = document.createElement("li")
    const posicao = document.createElement("li")
    const timeAtual = document.createElement("li")
    const pais = document.createElement("li")

    imagem.src = obj.imagem
    nome.innerText = obj.nome
    nome.href = obj.site
    nome.target = "_blank"
    idade.innerText = `Idade : ${obj.idade}`
    posicao.innerText = `Posição: ${obj.posicao}`
    timeAtual.innerText = `Time Atual: ${obj.timeAtual}`
    pais.innerText = `País: ${obj.pais}`
    
    card.className = "card"
    dados.className = "texto"
     
    dados.append(nome, idade, posicao, timeAtual, pais)
    card.append(imagem, dados)
    
    return card
    
}


function renderizarProds (list) {
    const secaoProds = document.getElementById("secaoProds")
    secaoProds.innerHTML = ""
    console.log(list)
    list.forEach(produto => {
        const cardProdCriado = criarCard(jogadoresCraques)
        secaoProds.appendChild(cardProdCriado)
    })
    
}

renderizarProds(jogadoresCraques)


function pesquisarJogadores() {
    const inputPesquisa = document.getElementById("txtBusca")
    const botaoPesquisa = document.getElementById("btnBusca")

    botaoPesquisa.addEventListener("click", () => {
        const valor = inputPesquisa.value.toUpperCase()
        let filtro = jogadoresCraques.filter(jogador => jogador.nome.toUpperCase().includes(valor))
        
        if(filtro.length) {
            renderizarProds(filtro)
        } else {
            alert("Jogador não encontrado")
        }
    })
}

pesquisarJogadores()



