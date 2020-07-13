import React, { Component } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
export class TodoList extends Component {
  state = {
    todos: [],
    todoToShow: "all",
  };
  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos],
    });
  };
  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            // id: todo.id,
            // text: todo.text,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    });
  };
  updateTodoToShow = (s) => {
    this.setState({
      todoToShow: s,
    });
  };
  handleDeleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };
  removeAllTodos = () => {
    this.setState({
      todos: this.state.todos.filter((todo) => !todo.complete),
    });
  };
  render() {
    let todos = [];

    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter((todo) => !todo.complete);
    } else if (this.state.todoToShow === "complete") {
      todos = this.state.todos.filter((todo) => todo.complete);
    }
    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            onDelete={() => this.handleDeleteTodo(todo.id)}
            todo={todo}
          />
        ))}
        <div className="card">
          <div className="card-body d-flex justify-content-between">
            Task(s) Pending:
            {this.state.todos.filter((todo) => !todo.complete).length}
            <button
              onClick={() => this.updateTodoToShow("all")}
              className="btn btn-info "
            >
              All
            </button>
            <button
              onClick={() => this.updateTodoToShow("active")}
              className="btn btn-primary"
            >
              Active
            </button>
            <button
              onClick={() => this.updateTodoToShow("complete")}
              className="btn btn-success"
            >
              Completed
            </button>
            {this.state.todos.some((todo) => todo.complete).length ? (
              <button onClick={this.removeAllTodos} className="btn btn-warning">
                Clear Completed
              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
