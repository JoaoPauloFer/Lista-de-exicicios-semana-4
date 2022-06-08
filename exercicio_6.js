const numeros = [2, 34, 50, 70, 25, 55, ,23, 100, 250]

function divisivelPorDois(lista){
    const divisiveis = lista.filter(numero =>
        numero % 2 == 0)

    return divisiveis
}

console.log(divisivelPorDois(numeros))