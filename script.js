const button = document.querySelector(".button-add-taks")
const input = document.querySelector(".input-task")
const listaCompleta = document.querySelector(".list-tasks")

let minhaListaDeItens = []

function adicionarNovaTarefa() {
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    mostrarTarefa()
}

function mostrarTarefa() {

    let novaLi = ''

    minhaListaDeItens.forEach((item, posicao) => {

        novaLi = novaLi + `
        <li class="task ${item.concluida && 'done'}">
         <img src="./img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${posicao})">
         <p>${item.tarefa}</p>
         <img src="./img/trash.png" alt="lixeira" onclick="deletarItem(${posicao})">
        </li> 

        `
    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens
        )) }

    

    function concluirTarefa(posicao) { 
      
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida

        mostrarTarefa()

    

}

function deletarItem(posicao) { 
    minhaListaDeItens.splice(posicao, 1)

    mostrarTarefa ()
}

function recarregarTarefas() {
    const tarefasDoLocalStorage = localStorage.getItem('lista')
    
    if(tarefasDoLocalStorage) {
    minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    }
    

    mostrarTarefa()
}


recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa)
