import React from "react";
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
                    <li key={index} className={style.item}>
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}

            </ul>
        </aside>
    )
}

export default Lista;