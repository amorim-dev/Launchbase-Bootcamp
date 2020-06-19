//Criar um programa que calcula a média das turmas de aluno
//  e envia mensagem de calculo da media

const alunosDaTurmaA = [
    {
        nome: "mayk",
        nota: 9.8
    },
    {
        nome: "Diego",
        nota: 10
    },
    {
        nome: "fulano",
        nota: 2
    }
]

const alunosDaTurmaB = [
    {
        nome: "Cleiton",
        nota: 1.8
    },
    {
        nome: "Robson",
        nota: 10
    },
    {
        nome: "Siclano",
        nota: 2
    }
]

//Para não ficar repetindo alunos da turmaA media 1, alunos da turma b ,media 2,etc.
//Para não ficar repetindo o codigo eu uso uma função
//Vou retornar o valor (ver o porque não usa a constante const)
function calculaMedia(alunos) {
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}

//Duas variaveis que estão recebendo o pedaço de codigo acima
//assim eu não precisei ficar reescrevendo ele
const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)


//faz sentido colocar isso denro de uma função porque também vou rodar isso mais de uma vez
//também faz sentido colocar o parametro turma aqui
function enviaMensagem(media, turma) {
    if (media > 5) {
        console.log(`A media da turma ${turma} foi de ${media}. Parabéns!`)
    } else {
        console.log(`A média da turma ${turma} é menor que 5.`)
    }
}

//Estou usando parametros aqui para poder enviar para dentro do codigo acima.
//Vou aproveitar esta função de mensagem para adicioclearnar outro parametros, a turma.
enviaMensagem(media1, 'A')
enviaMensagem(media2, 'B')

