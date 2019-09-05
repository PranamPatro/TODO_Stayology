import React, { Component } from "react";

export default class EachItem extends Component {
  state = {
    isEditing: false
  };
  toggleIsEditing = () => {
    console.log("heool");
    console.log(this.state.isEditing);
    this.setState({
      isEditing: !this.state.isEditing
    });
  };
  edititemtostate = e => {
    e.preventDefault();
    this.props.editTodo({
      text: this.refs.edittedvalue.value,
      index: this.props.index
    });
    this.refs.edittedvalue.value = "";
    this.toggleIsEditing();
  };
  deleteitemfromlist = value => {
    this.props.deleteTodo(value);
  };
  renderData = () => {
    const { data, index } = this.props;
    return (
      <section>
        {data.text}
        <button onClick={() => this.deleteitemfromlist(index)}>Delete</button>
        <button onClick={this.toggleIsEditing}>Edit</button>
      </section>
    );
  };
  renderForm = () => {
    const { data } = this.props;

    return (
      <form onSubmit={this.edititemtostate}>
        <input type="text" ref="edittedvalue" defaultValue={data.text} />
        <button type="submit">Edit Item</button>
      </form>
    );
  };
  render() {
    console.log(this.state.isEditing);
    const { data, index } = this.props;
    return (
      <div>
        <li>
          {this.state.isEditing ? this.renderForm() : this.renderData()}
          {/* {this.isEditing} */}
        </li>
      </div>
    );
  }
}
