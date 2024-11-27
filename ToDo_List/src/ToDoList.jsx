import React, {useState} from "react"

function ToDoList(){

    const [tasks, SetTask] = useState([])
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
                    
            </div>

    </div>)
}

export default ToDoList