const pessoa = {
nome: 'João Paulo',
idade: 20,   
sexo: 'masculino',
cpf: '12345678910-11',
dataNascimento: '07/01/2002',
altura: 184}

function percorrerObj(obj){
    for (let valor in obj){
        console.log(`A chave ${valor} possui o valor: ${obj[valor]}`)
    }
}

percorrerObj(pessoa)