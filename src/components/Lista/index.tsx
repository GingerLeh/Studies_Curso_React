import React from "react";

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
        <aside>
            <h2>Estudos do Dia</h2>
            <ul>
                {tarefas.map((item,index)=> (
                    <li key={index}>
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}

            </ul>
        </aside>
    )
}

export default Lista;