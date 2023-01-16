const nomeFilme1 = ('Matrix')
const nomeDiretor1 = ('Lana Wachowski')
const anoLancamentoFilme1 = 1999
const generoFilme1 = ('Sci-Fi')

const nomeFilme2 = ('Vingadores: Ultimato')
const nomeDiretor2 = ('Anthony e Joe Russo')
const anoLancamentoFilme2 = 2019
const generoFilme2 = ('Ação')

const nomeFilme3 = ('The Shawshank Redemption')
const nomeDiretor3 = ('Frank Darabont')
const anoLancamentoFilme3 = 1994
const generoFilme3 = ('Drama')



const media = (anoLancamentoFilme1 + anoLancamentoFilme2 + anoLancamentoFilme3) / 3
console.log (`A média dos anos de lançamento dos filmes é ${media}`);

console.log (`
Todos os filmes são de gênero de ação? 
${generoFilme1 === "Ação" && generoFilme2 === "Ação" && generoFilme3 === "Ação"}
`)

const filmesPreferidos = ["Matrix", "Vingadores: Ultimato", "The Shawshank Redemption"]


console.log (`
Nome do Filme:${nomeFilme1.toUpperCase()};
Nome do Diretor:${nomeDiretor1};
Ano de Lançamento do Filme: ${anoLancamentoFilme1};
Genero do Filme: ${generoFilme1};
`)

console.log (`
Nome do Filme:${nomeFilme2.toUpperCase()};
Nome do Diretor:${nomeDiretor2};
Ano de Lançamento do Filme: ${anoLancamentoFilme2};
Genero do Filme: ${generoFilme2};
`)

console.log (`
Nome do Filme:${nomeFilme3.toUpperCase()};
Nome do Diretor:${nomeDiretor3};
Ano de Lançamento do Filme: ${anoLancamentoFilme3};
Genero do Filme: ${generoFilme3};
`)
