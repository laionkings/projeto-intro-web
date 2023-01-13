listaDeFilmes = [
  (objeto1 = {
    nomeFilme: "Matrix",
    nomeDiretor: "Lana Wachowski",
    anoLancamentoFilme: 1999,
    generoFilme: "Sci-Fi",
  }),

  (objeto2 = {
    nomeFilme: "Vingadores: Ultimato",
    nomeDiretor: "Anthony e Joe Russo",
    anoLancamentoFilme: 2019,
    generoFilme: "Ação",
  }),

  (objeto3 = {
    nomeFilme: "The Shawshank Redemption",
    nomeDiretor: "Frank Darabont",
    anoLancamentoFilme: 1994,
    generoFilme: "Drama",
  }),
];
console.log("Exercícios 1 e 2");

for (objetos of listaDeFilmes) {
  for (propriedades in objetos) {
    console.log(`${propriedades}: ${objetos[propriedades]}`);
  }
  objetos.stringDoObjeto = objetos.generoFilme;
}

console.log("Exercício 3");
const relatorio = (listaDeFilmes) => {
  for (i in listaDeFilmes) {
    console.log(
      `Filme: ${listaDeFilmes[i].nomeFilme}; \nDiretor: ${listaDeFilmes[i].nomeDiretor};\n\nSugiro que assistam ao filme "${listaDeFilmes[i].nomeFilme}" dirigido por ${listaDeFilmes[i].nomeDiretor}. Este filme foi lançado em ${listaDeFilmes[i].anoLancamentoFilme} e é do gênero ${listaDeFilmes[i].generofilme}.`
    );
  }
};
relatorio(listaDeFilmes);

console.log("Exercício 4");
const busca = (listaDeFilmes, string) => {
  const resultado = listaDeFilmes.filter((objeto) => {
    return (
      objeto.nomeFilme === string ||
      objeto.nomeDiretor === string ||
      objeto.anoLancamentoFilme === string ||
      objeto.generoFilme === string
    );
  });
  if (resultado.length > 0) {
    console.log(resultado);
  } else {
    alert("Nenhum item encontrado.");
  }
};

busca(listaDeFilmes, "The Shawshank Redemption");
