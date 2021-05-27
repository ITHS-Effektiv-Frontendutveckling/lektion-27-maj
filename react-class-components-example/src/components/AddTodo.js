function AddTodo({ update }) {
  let todo = '';

  function handleKeyUp(event) { 
    todo = event.target.value;
  }

  function handleClick() {
    update(todo);
  }

  return (
    <section>
      <input type="text" onKeyUp={ handleKeyUp } />
      <button onClick={ handleClick }>Lägg till todo</button>
    </section>
  )
}

export default AddTodo;