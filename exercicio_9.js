class Funcionario {
    constructor(nome, dataDeContratacao){
        this.nome = nome
        this.dataDeContratacao = dataDeContratacao
    }
    
}

class Pf extends Funcionario{
    constructor(nome, dataDeContratacao, cpf, salario, beneficios){
        super(nome, dataDeContratacao)
        this.cpf = cpf
        this.salarioInicial = salario
        this.beneficios = beneficios
        this.aumentoNoSalario = null
    } 
    get getAumento(){
        return this.aumentoNoSalario
    }

    set setAumento(aumento){
        this.aumentoNoSalario = aumento
    }
}
class Pj extends Funcionario{
    constructor(nome, dataDeContratacao, cnpj, salario){
        super(nome, dataDeContratacao)
        this.cnpj = cnpj
        this.salario = salario
        this.aumentoNoSalario = null
    }
    get getAumento(){
        return this.aumentoNoSalario
    }

    set setAumento(aumento){
        this.aumentoNoSalario = aumento
    }
}

const joao = new Pf('João Paulo', '25/05/2022',1234567891011, 3500, 'Plano de saúde Gold')
joao.setAumento = 500

console.log(joao.getAumento)

console.log(joao)

const Sonic = new Pj('Sonic', '20/01/2022', 3252523453242, 4500)

Sonic.aumentoNoSalario=250

console.log(Sonic)