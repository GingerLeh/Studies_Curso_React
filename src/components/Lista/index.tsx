import {ITarefa} from "../../types/ITarefa";
import Item from "./Item";
import style from './Lista.module.scss';

interface Props{
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function Lista({tarefas,selecionaTarefa}:Props){
    
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do Dia</h2>
            <ul>
                {tarefas.map(item=> (
                  <Item
                    selecionaTarefa={selecionaTarefa}
                    key={item.id}
                    {...item}
                    //tarefa={item.tarefa} outra forma de usar
                    //tempo={item.tempo} outra forma de usar
                  />
                ))}

            </ul>
        </aside>
    )
}

export default Lista;