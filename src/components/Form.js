import {v4 as uuidv4} from "uuid"
import React,{useEffect} from "react";
import App from "../App";
<button className="button-add " type="submit">
    ADD
</button>



const Form  =({input ,setInput,todos,setTodos,editTodo,setEditTodo})=> {


const updateTodo=(title,id,completed) =>{
const newTodo = todos.map((todo)=>
    todo.id === id  ? {title,id,completed} : todo 
)
setTodos(newTodo);

editTodo("");
} ; 
useEffect(()=>{
    if(editTodo){
        setInput(editTodo.title) ;
    }else {
        setInput("")
    }
}, [setInput,editTodo]) ;
    const onInputChange=(event)=> {
        setInput(event.target.value) ;
    } ;
    const onFormSubmit =(event)=>{
        event.preventDefault();
        if(!editTodo){

            setTodos([...todos,{id: uuidv4(),title:input,completed: false}]) ;
            setInput("") ;
    
        }else{
            updateTodo(input,editTodo.id,editTodo.completed)
        }

        
        
            }
return(
    <form onSubmit={onFormSubmit}>
        <input  type="text" placeholder="Add a todo" className="task-input"  
        value={input}
        required
        onChange={onInputChange}
        
        
        
        />
<button className="button-add " type="submit">
    
</button>
        </form>
)
}

export default Form ;