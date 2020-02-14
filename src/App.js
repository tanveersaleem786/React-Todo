import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import "./components/TodoComponents/Todo.css";

const todos = JSON.parse(localStorage.getItem('saveTodo'));
//console.log("afdsaf",todos);

class App extends React.Component {
 
  constructor() {
    super();
    this.state = {
      todos: todos
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

    console.log(this.state.todos);
   

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
    //console.log(this.state.todos);
    this.setState({
           todos: this.state.todos.filter(todo => todo.completed === false)
    });
     
    //console.log(this.state.todos);
  };

  componentDidUpdate(prevProps, prevState) {    
    //console.log(prevState.todos.length); 
    //console.log(this.state.todos.length);    

    if (prevState.todos.length !== this.state.todos.length) {
        localStorage.setItem('saveTodo', JSON.stringify(this.state.todos));
    }
  }


  render() {
    return (
    <div>
      <div id="myDIV" className="header">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />              
      </div>
      <TodoList  todos={this.state.todos} toggleTodo={this.toggleTodo} clearCompleted={this.clearCompleted}/> 
    </div>
    );
  }
}

export default App;
