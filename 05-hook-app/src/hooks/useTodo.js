import { useEffect, useReducer, useState } from "react";
import { todoReducer } from '../08-useReducer/todoReducer';


const init = () => {
    return JSON.parse( localStorage.getItem( 'todos' ) || [] );
}


export const useTodo = () => {

    const handleNewTodo = ( todo ) => {
        const action = {
            type    : '[TODO] Add Todo', 
            payload : todo
        }
        dispatch( action );
    }
    
    const handleRemoveTodo = ( todo ) => {
        const action = {
            type    : '[TODO] Remove Todo',
            payload : todo 
        }
        dispatch( action );
    }
    
    const handleToggleTodo = ( todo ) => {
        const action = {
            type    : '[TODO] Toggle Todo',
            payload : todo 
        }
        dispatch( action );
    }
    
    const [ todos, dispatch ] = useReducer( todoReducer , [], init );
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    return {
        ...todos,
        todosCount : todos.length,
        pendingTodosCount : todos.filter( todo => !todo.done ).length,
        todos, 
        handleNewTodo,  
        handleRemoveTodo, 
        handleToggleTodo,
    }
}