import React, {useState} from 'react'
import Form from '../Form'
import List from '../List'
import Modal from '../Modal'
import { ITask } from '../../interfaces/Task'

import '../Main/main.sass'

function Main(){
    const [task, setTask] = useState<ITask[]>([])
    const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)

    function deleteTask(id: number){
        setTask(
            task.filter((item)=>{
                return item.id !== id
            })
        )
    }

    function hiderOrShowModal(display: boolean){
        const modal = document.querySelector('#modal')
        if(display){
            modal!.classList.remove('hide')
        }else{
            modal!.classList.add('hide')
        }
    }

    function edit(task: ITask):void{
        hiderOrShowModal(true)
        setTaskToUpdate(task)
    }

    function updateTask(id: number, title: string, difficulty: number){
        const updateTask: ITask = {id, title, difficulty}

        const updateItems = task.map((item)=>{
            return item.id === updateTask.id ? updateTask : item
        })

        setTask(updateItems)

        hiderOrShowModal(false)
    }

    return(
        <main>
            <Modal children={<Form  btnText='Editar tarefa' taskList={task} task={taskToUpdate} hundleUpdate={updateTask}/>}/>
            <h2>O que Você vai fazer?</h2>
            <Form
                taskList={task}
                setTaskList={setTask}
                btnText='Criar tarefa'
            />
            <div>
                <h2>Suas tarefas</h2>
                <List lista={task} deleteList={deleteTask} addModal={edit}/>
            </div>
        </main>
    )
}

export default Main