// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    // console.log(props);
    // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);

    return (
       <div>
        <ul id="myUL">          
            {props.todos !== null && props.todos.map(todo => (
             <Todo key={todo.id} todo={todo} toggleTodo={props.toggleTodo} />
            ))} 
          
                   
         </ul>
        <button className="addBtn  completedBtn" onClick={props.clearCompleted}>Clear Completed</button>
       </div> 
    );
  };
  
  export default TodoList;
