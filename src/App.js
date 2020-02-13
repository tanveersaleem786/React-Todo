import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import "./components/TodoComponents/Todo.css";

const todos =
[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos
    };
  }

  addTodo = (e, task) => {  
    e.preventDefault();

    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  // this is a method of App
  toggleTodo = todoId => {
    //console.log("tanveer",todoId);
    //alert(todoId);

    this.setState({
      todos: this.state.todos.map(todo => {
        //console.log(todo);
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }

        return todo;
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    console.log(this.state.todos);
    this.setState({
      // returns the items that haven't been purchased and purges
      // the ones that have been purchased
      todos: this.state.todos.filter(todo => todo.completed === false)
    });
    console.log(this.state.todos);
  };


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />
        <TodoList  todos={this.state.todos} toggleTodo={this.toggleTodo} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
