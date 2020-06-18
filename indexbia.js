//Esta es la forma de hacer obejetos, 
//lo que está dentro do {} são as propriedades deste objeto

//Quando queremos agrupar todos estes objetos em um só se chama:
//Vetores ou Arrays uma coleção de objetos 
// se faz dentro de [] separando dentro com {},{} 



const alunos = [
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

console.log(alunos)

console.log(alunos[1])

//Para encontrar cada variavel agora é diferente:
// A variavel é contada a partir do 0
const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
//obs: colocando o objeto (aluno01) seguido de um ponto, vai aparecer as caracteristicas deste objeto parea que possa selecionar 


//Outro exemplo
const nomeDeAlunos = ["Mayk", "Diego", "fulano"]

console.log(nomeDeAlunos)