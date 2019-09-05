import React, { Component } from "react";
import "./App.css";

import { connect } from "react-redux";
import EachItem from "./Components/EachItem.js";

class App extends Component {
  additemtostate = e => {
    e.preventDefault();
    this.props.addTodo({
      text: this.refs.addtododata.value
    });
    this.refs.addtododata.value = "";
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>TaskList</p>
        </header>
        <form className="inputbox">
          <input className="input" ref="addtododata" />
          <button onClick={this.additemtostate} className="btn">
            ADD
          </button>
        </form>
        {this.props.todos.length !== 0 ? (
          <ul className="list-group">
            {this.props.todos.map((data, index) => {
              return (
                <EachItem
                  data={data}
                  key={index}
                  index={index}
                  deleteTodo={this.props.deleteTodo}
                  editTodo={this.props.editTodo}
                />
              );
            })}
          </ul>
        ) : (
          <p>no data</p>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addTodo: ({ text }) => {
      dispatch({
        type: "ADD_TODO",
        payload: {
          text: text,
          completed: "false"
        }
      });
    },
    deleteTodo: index => {
      dispatch({
        type: "DELETE_TODO",
        payload: index
      });
    },
    editTodo: ({ text, index }) => {
      dispatch({
        type: "EDIT_TODO",
        payload: {
          text: text,
          index: index
        }
      });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
