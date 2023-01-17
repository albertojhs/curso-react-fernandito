import { useForm } from "../../hooks/useForm";

export const TodoAdd = ( {onNewTodo} ) => {

    const { description, onInputChange, onResetForm } = useForm({ description: '' });

    const onAddNewTodo = (event) => {
        event.preventDefault();
        onNewTodo && description !== '' && onNewTodo({
            id          : new Date().getTime(),
            done        : false,
            description
        });
        onResetForm();
    }

    

  return (
    <>
        <form onSubmit={ onAddNewTodo }>
            <input type="text"
            placeholder="¿Qué hay que hacer?"
            className="form-control"
            value={ description }
            name="description"
            onChange={onInputChange} />
            <button
                type="submit"
                className="btn btn-outline-primary mt-1">
                Agregar
            </button>
        </form>
    </>
  )
}
