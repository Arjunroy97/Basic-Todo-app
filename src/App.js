import { useRef, useState } from "react";
import './style.css';
function App() {
  const [todolist, setTodolist] = useState(['Todo'])
  const [currentTask, setCurrentTask] = useState('')
  const ref = useRef(null)

const handleChange = (e) => {
  setCurrentTask(e.target.value)
  }

  const createTodoItem = () => {
     setTodolist([...todolist, currentTask])
     ref.current.value = "";
     setCurrentTask("")
  }

  const delectTack = (tackDel) =>{
      setTodolist(todolist.filter(del=>{
          return del !== tackDel
      }))
  }
  return (
    <div className="App">
        <div className="card">
                <div className="card-body">
                    <div className="input-group mb-3">
                        <input 
                            ref={ref}
                            type="text" 
                            className="form-control" 
                            placeholder="Enter Your Item"
                            onChange={handleChange}
                        />
                        <button 
                            className="btn btn-outline-secondary" 
                            type="button" 
                            onClick={createTodoItem}
                        >
                        Add Item
                        </button>
                    </div>
                </div>
        </div>
        <div className="card">
                <ul className="list-group list-group-flush">
                    {todolist.map((item,index) =>{
                        return(
                                <li key={index} className="list-group-item">{item}
                                <span className="delect-icon"onClick={()=>delectTack(item)} ><i className="material-icons">delete_sweep</i></span> 
                            </li>
                        )
                       
                    })}
                
                </ul>
        </div>
    </div>
  );
}

export default App;
