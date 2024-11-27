import React, {useState} from "react"

function ToDoList(){

    const [tasks, SetTask] = useState(["Hit the Gym", "Go for a drive", "Walk the dog"])
    const [newtasks, SetNewTask] = useState("")

    function handleinputChange(event){
        SetNewTask(event.target.value)

    }

    function addtask (){

    }

    function deletetask (index){

    }

    function movetaskup (index){

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

                <button className="add_button" onClick={addtask}> Add </button>
                    
            </div>
                        
            <ol>
                {tasks.map((tasks, index) =>
                     <li key={index}> 
                        <span className="text">{tasks}</span>
                    </li>
                )}
            </ol>

    </div>)
}

export default ToDoList