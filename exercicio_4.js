const numero = [21, 5, 3, 4, 2, 14, 7, 8, 9, 10, 20, 1]

function ordenar(listaDeNum){
    if(listaDeNum.length < 10 ){
        return `Lista muito`
    }else if( listaDeNum.length > 10 && listaDeNum.length < 20){
        let temp;
        for( let i = 0; i < listaDeNum.length; i++ ){
            for( let j = 0; j < listaDeNum.length; j++ ){
                if(listaDeNum[i] < listaDeNum[j]){
                    temp = listaDeNum[i];
                    listaDeNum[i] = listaDeNum[j]
                    listaDeNum[j] = temp
                }
            }
        }
        return listaDeNum
    }else if(listaDeNum.length >= 20){
        return `Lista muito grande`
    }
}

console.log(ordenar(numero))