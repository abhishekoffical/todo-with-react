import { createContext,useContext } from "react";

export const todocontext = createContext({
    todos:[

        
        {
            id:1,
            todo: "todomsg",
            completed :false,
        },
    ],
    addtodo: (todo)=>{},
    updatetodo: (id,todo)=>{},
    deletetodo: (id)=>{},
    togglecomplete :(id)=>{}
})



export const usetodo = ()=>useContext(todocontext)



export const TodoProvider =todocontext.Provider
