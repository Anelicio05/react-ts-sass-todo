import React, {useState, useEffect, ChangeEvent, FormEvent} from 'react'
import '../Form/form.sass'
import { ITask } from '../../interfaces/Task'

interface Props{
    btnText: string;
    taskList: ITask[];
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
    task?: ITask | null;
    hundleUpdate?(id: number, title: string, difficulty: number): void
}

function Form({btnText, taskList, setTaskList, task, hundleUpdate}: Props){
    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>("")
    const [difficulty, setDifficulty] = useState<number>(0)

    useEffect(()=>{
        if(task){
            setId(task.id)
            setTitle(task.title)
            setDifficulty(task.difficulty)
        }
    }, [task])

    function addTaskHandler(e: FormEvent<HTMLFormElement>){
        e.preventDefault()

        if(hundleUpdate){
            hundleUpdate(id, title, difficulty)
        }else{
            const id = Math.floor(Math.random() * 100)

            const newTask: ITask = {id, title, difficulty}
            setTaskList!([...taskList, newTask])

            setTitle('')
            setDifficulty(0)
        }
    }
    function handleChange(e: ChangeEvent<HTMLInputElement>){
        if(e.target.name === 'title'){
            setTitle(e.target.value)
        }else{
            setDifficulty(parseInt(e.target.value))
        }

    }

    return(
        <form onSubmit={addTaskHandler}>
            <div>
                <label htmlFor="title">Título:</label>
                <input 
                    onChange={handleChange} 
                    type="text" name="title" 
                    placeholder="Título da tarefa"
                    value={title}
                />
            </div>
            <div>
                <label htmlFor="difficulty">Dificuldade:</label>
                <input 
                    type="text"
                    name="difficulty"
                    placeholder="Dificuldade da tarefa" 
                    onChange={handleChange}
                    value={difficulty}
                />
            </div>
            <input type="submit" value={btnText}/>
        </form>
    )
}

export default Form