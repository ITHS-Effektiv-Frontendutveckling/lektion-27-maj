import './App.css';
import { Component } from 'react';

import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], latestTodo: '' };

    //Behövs inte om vi använder arrow functions för våra metoder
    //this.updateName = this.updateName.bind(this); 
  }

  latestTodo = (task) => {
    this.setState({ latestTodo: task })
  }

  updateTodos = (task) => {
    const todo = {
      task: task,
      id: this.state.todos.length + 1
    }

    this.setState((prevState) => ({
      todos: prevState.todos.concat(todo)
    }));

    this.latestTodo(task);
  }

  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map((todo) => {
            return <TodoItem task={ todo.task } key={ todo.id } />
          })}
        </ul>
        <article>
          <p>Senaste todo: { this.state.latestTodo }</p>
        </article>
        <AddTodo update={ this.updateTodos } />
      </div>
    )
  }
}

export default App;
