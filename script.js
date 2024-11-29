class Tarefa{
    constructor(element) {
        const tarefa = document.querySelector(".tarefa");
        const btnTarefa = tarefa.querySelector(".btnTarefa");
        this.element = element;
        btnTarefa.addEventListener("click", ()=>{
            this.alterarStatus(tarefa);
        });
        this.input = element.querySelector('input');
        const statusTarefa = ['default','feito','nao-feito','incompleto'];
        this.statusAtual = 0;
    }

    alterarStatus(tarefa){
        const statusTarefa = ['default','feito','nao-feito','incompleto'];
        let valorInput = tarefa.querySelector('input');
        let statusAtual = statusTarefa.indexOf(valorInput.value);
    
        let proximoStatus = (statusAtual + 1) % statusTarefa.length;
        valorInput.value = statusTarefa[proximoStatus];
        
        statusTarefa.forEach(statusAtual => {
            tarefa.classList.remove(statusAtual)
        })
    
        tarefa.classList.add(statusTarefa[proximoStatus])
    }
    
}

class AddTarefa{
    
}