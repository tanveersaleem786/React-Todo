import React,{Component} from "react";

class TodoForm extends Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      task: ""
    };
  }

  handleChanges = e => {
    // update state with each keystroke
    // console.log(e);
    this.setState({ [e.target.name]: e.target.value });
    // console.log(this.state);
  };

  // class property to submit form
  submitTodo = e => {
    e.preventDefault();
    this.props.addTodo(e, this.state.task);
    // this.setState({ item: "" });
  };

  render() {
    //console.log("rendering form", this.state.task);
    return (
      <form onSubmit={this.submitTodo}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input type="text" name="task" onChange={this.handleChanges} />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
