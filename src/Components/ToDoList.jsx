function ToDoList(props) {
  return ( 
    <>
      <div>
        {props.todos.length ? 
          props.todos.map((todo) => (
          <li key={todo} >{todo.todo}</li>
          )) : <p>No Todos yet. Add a Todo</p>
          }


      </div>

    </>
  );
}

export default ToDoList;