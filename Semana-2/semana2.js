const objeto1 = {
    nomeFilme: "Matrix",
    nomeDiretor: "Lana Wachowski",
    anoLancamentoFilme: 1999,
    generoFilme: "Sci-Fi"
    }
    
    const objeto2 = {
    nomeFilme: "Vingadores: Ultimato",
    nomeDiretor: "Anthony e Joe Russo",
    anoLancamentoFilme: 2019,
    generoFilme: "Ação"
    }
    
    const objeto3 = {
    nomeFilme: "The Shawshank Redemption",
    nomeDiretor: "Frank Darabont",
    anoLancamentoFilme: 1994,
    generoFilme: "Drama"
    }
    
    let primeiroArray = [objeto1, objeto2, objeto3];
    
    let segundoArray = primeiroArray.slice()
    



    if (objeto1.generoFilme === "Ação"){
        segundoArray.push(objeto1);
        console.log (segundoArray)
    }else {
        alert ("O filme é de ação? NÃO \nOBJETO 1 não adicionado.")
    }if (objeto2.generoFilme === "Ação"){
            segundoArray.push(objeto2)
            console.log (segundoArray)
    }else{
        alert ("O filme é de ação? NÃO \nOBJETO 2 não adicionado.")
    }if (objeto3.generoFilme === "Ação"){
                segundoArray.push(objeto3)
                console.log (segundoArray)
    }else{
        alert ("O filme é de ação? NÃO \nOBJETO 3 não adicionado.")
            }
    