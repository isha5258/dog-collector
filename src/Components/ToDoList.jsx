function ToDoList(props) {
  return ( 
    <>
      <div>
        {props.todos.length ? <p> {props.todos}</p> : <p>No Todos yet. Add a Todo</p>}
      </div>

    </>
  );
}

export default ToDoList;