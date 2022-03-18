import React from "react";
import Item from "./Item";
import style from './Lista.module.scss';

function Lista(){
    const tarefas=[{
            tarefa:'',
            tempo: ''
        },  {
            tarefa: '',
            tempo: ''
        }
    ]
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do Dia</h2>
            <ul>
                {tarefas.map((item,index)=> (
                  <Item
                    key={index}
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