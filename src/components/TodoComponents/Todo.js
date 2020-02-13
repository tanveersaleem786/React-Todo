import React from 'react';

const Todo = props => {
    // console.log(props);
    // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
   
        //console.log(props);
      
        return (
          <div
            className={`item${props.todo.completed ? " purchased" : ""}`}
            onClick={() => props.toggleTodo(props.todo.id)}
          >
            <p>{props.todo.task}</p>
          </div>
        );
      };
      
  
  export default Todo;
