import React, {useState} from 'react'
import Form from '../Form'
import List from '../List'
import { ITask } from '../../interfaces/Task'

import '../Main/main.sass'

function Main(){
    const [task, setTask] = useState<ITask[]>([])
    console.log(task)

    return(
        <main>
            <h2>O que Você vai fazer?</h2>
            <Form
                taskList={task}
                setTaskList={setTask}
                btnText='Criar tarefa'
            />
            <div>
                <h2>Suas tarefas</h2>
                <List lista={task}/>
            </div>
        </main>
    )
}

export default Main