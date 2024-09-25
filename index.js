let alunos = []

class Aluno{
    nome
    idade
    nota
    constructor(nome, idade, nota){
        this.nome = nome
        this.idade = idade
        this.nota = nota
    }
 }

    function cadastrarAluno(nome, idade, nota, array){
        let objetoAluno = new Aluno(nome, idade, nota)
        if (!array.some(x => x.Nome == nome)){
            array.push(objetoAluno)
            return objetoAluno;
        }
    }

    function ordenarPorNota(array){
        array.sort((a, b) => a.Nota - b.Nota)
        return array;
    }

    function ordenarPoridade(array){
        array.sort((a, b) => b.Idade - a.Idade)
        return array;
    }

    function ordernarPorNome(array){
        array.sort((a, b) => {
            const nomeA = a.Nome.toUpperCase()
            const nomeB = b.Nome.toUpperCase()

            if (nomeA < nomeB){
                return -1;
            }
            if (nomeA > nomeB){
                return 1;
            }
            return 0;
        })
        return array;
    }

    function calcularMedia(array){
        if (array.lenght === 0){
            return 0
        }
        let somaNotas = 0

        array.forEach((aluno) => {
            somaNotas += Number(aluno.Nota)
        })

        const media = somaNotas / alunos.lenght
        return media;
    }
