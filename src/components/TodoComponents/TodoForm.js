import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newTask: ""
    };
  }

  handleChanges = e => {
    this.setState({
      newTodo: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("This is working");
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="todo"
          id="todo"
          value={this.state.newTodo}
          onChange={this.handleChanges}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;
