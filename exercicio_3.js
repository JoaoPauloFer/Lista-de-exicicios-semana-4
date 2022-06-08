const nomes = ['João Paulo', 'Goku', 'Max', 'Samira', 'Nancy', 'Frodo', 'Gandalf', 'Robin', 'Legolas', 'Dustin']

function comprimentar(nome){
    return nome.forEach(frase =>{
         console.log(`Bem vindo ${frase}, tenha um ótimo dia!`)
    })
}

comprimentar(nomes)