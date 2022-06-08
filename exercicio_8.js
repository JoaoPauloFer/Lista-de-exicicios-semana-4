const pessoa = {
    nome: 'João Paulo',
    idade : 20,
    alterarNome: function(nome){
        this.nome = nome
    },
    alterarIdade: function(idade){
        this.idade = idade
    }
}

console.log(pessoa.nome)
console.log(pessoa.idade)


pessoa.alterarNome('Fernando')
pessoa.alterarIdade(30)

console.log(pessoa.nome)
console.log(pessoa.idade)


