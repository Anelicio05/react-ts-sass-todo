import { ITask } from "../../interfaces/Task"
import '../List/list.sass'

interface Props{
    lista: ITask[]
}

function List({lista}: Props){
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
                    <div>
                        <i className="bi bi-pencil"></i>
                        <i className="bi bi-trash"></i>
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
