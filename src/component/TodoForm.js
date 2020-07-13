import React, { Component } from "react";
import shortid from "shortid";

export class TodoForm extends Component {
  state = {
    text: "",
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false,
    });
    this.setState({
      text: "",
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group mb-3">
            <input
              name="text"
              value={this.state.text}
              onChange={this.handleChange}
              type="text"
              className="form-control"
              placeholder="What's on Your Mind"
            />
            <div className="input-group-append">
              <button
                onClick={this.handleSubmit}
                className="btn btn-outline-primary"
               
              >
                Add To-do
              </button>
            </div>
          </div>
        </form>
        {/* <div>
          <ul className="list-group">
            <li className="list-group-item">Sample</li>
            <li className="list-group-item disabled">Sample</li>
          </ul>
          <div className="d-flex justify-content-between">
            <button className="btn btn-info ">All</button>

            <button className="btn btn-primary">Active</button>

            <button className="btn btn-success">Completed</button>

            <button className="btn btn-warning">Clear Completed</button>
          </div>
        </div> */}
      </div>
    );
  }
}

export default TodoForm;
