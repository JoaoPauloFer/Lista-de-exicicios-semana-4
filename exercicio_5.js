const frutas = ['manga', 'melancia', 'banana', 'tomate', 'morango', 'laranja', 'maçã']

function removeElemento(elemento){
    const elementoRomovido = elemento.splice(3,1)
    console.log(`o elemento removido foi ${elementoRomovido}`)
    console.log('A lista ficou ' + elemento)

}

removeElemento(frutas)
