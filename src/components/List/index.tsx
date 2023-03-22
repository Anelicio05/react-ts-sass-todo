import { ITask } from "../../interfaces/Task"
import '../List/list.sass'

interface Props{
    lista: ITask[]
    deleteList(id: number): void,
    addModal(task: ITask): void
}

function List({lista, deleteList, addModal }: Props){
    return(
        <>
            {lista.length > 0 ? (
                lista.map((item)=>{
            return(        
                <div key={item.id} className='task'>
                    <div>
                        <h3>{item.title}</h3>
                        <p>Dificudade: {item.difficulty}</p>
                    </div>
                    <div className="icon">
                        <i className="bi bi-pencil" onClick={()=>addModal(item)}></i>
                        <i className="bi bi-trash" onClick={()=>{deleteList(item.id)}}></i>
                    </div>
                </div>
                )})
            ) : (
                <p>não tem tarefas</p>
            )}
        </>
    )
}

export default List
