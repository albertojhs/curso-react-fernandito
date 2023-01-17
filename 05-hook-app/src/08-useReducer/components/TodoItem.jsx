
export const TodoItem = ( { todo, onDeleteTodo, onToggleTodo } ) => {

  const deleteTodo = () => {
    onDeleteTodo( todo );
  }

  return (
    <>
        <li className="list-group-item d-flex justify-content-between">
            <span 
              className={`align-self-center ${ todo.done? 'text-decoration-line-through' : '' }`}
              onClick={ () => onToggleTodo( todo ) }>
                { todo.description }
              </span>
            <button className="btn btn-danger" onClick={ deleteTodo }>Borrar</button>
        </li>
    </>
  )
}
