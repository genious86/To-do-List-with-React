import React, {useState} from "react"

function ToDoList(){

    const [tasks, SetTask] = useState(["Hit the Gym", "Go for a drive", "Walk the dog"])
    const [newtasks, SetNewTask] = useState("")

    function handleinputChange(event){
        SetNewTask(event.target.value)

    }

    function addtask (){

        if (newtasks.trim() !==""){

            SetTask(t=> [...t, newtasks])
            SetNewTask("")
    
        }

    }

    function deletetask (index){

        const updatedTasks =tasks.filter((_, i) => i !==index)
        SetTask(updatedTasks)

    }

    function movetaskup (index){

        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = 
            [updatedTasks[index-1],updatedTasks[index]]

            SetTask(updatedTasks)
        }

    }

    function movetaskdown (index){

    }

    return(<div className="to_do_list">

            <h1> TO-DO-LIST</h1>
            <div>
                <input 
                    type="text" 
                    placeholder="Add Task"
                    value={newtasks}
                    onChange={handleinputChange}/>

                <button className="add_button" onClick={addtask}> Add ➕ </button>
                    
            </div>
                        
            <ol>
                {tasks.map((tasks, index) =>
                     <li key={index}> 
                        <span className="text">{tasks}</span>
                        <button className="delete_btn"
                        onClick={()=>deletetask(index)}>
                            Delete❌
                        </button>

                        <button className="move_btn"
                        onClick={()=>movetaskup(index)}>
                            Up👆
                        </button>

                        <button className="move_btn"
                        onClick={()=>movetaskdown(index)}>
                            Down👇
                        </button>
                    </li>
                )}
            </ol>

    </div>)
}

export default ToDoList