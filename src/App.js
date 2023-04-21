
import { useState } from 'react';
import ToDoList from './TodoList';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"



function App() {

  const [input, setInput] = useState("")
  const [item,setitem] = useState([])
  
  const inputevent = (e) => {
    setInput(e.target.value)
  }
  const listofitem = ()=>{
      setitem((olditem)=>{
        return[...olditem,input]
      })
      setInput("  ")
  }
  const deleteitm = (id)=>
    {
        console.log("deletge")
        setitem((olditem)=>{
          return olditem.filter((arrelement,index)=>{
            return index !== id
          })
        })
    }
  return (
    <>
    <center>

      <h1 className='text-danger'>ToDoList </h1>
      <input type="text"
       placeholder='Add A Item'
       onChange={inputevent}
       value={input}
       />
      <button onClick={listofitem} className="btn btn-success"> + </button>

      <ol>
        {/* <li>{input}</li> */}
        {item.map((itemval,index)=>
        {
          return <ToDoList
           text={itemval}
          key={index}
         
         
          id={index}
          onSelect={deleteitm}
           />
        })}
      </ol>

      </center>
    </>
  );
}

export default App;
