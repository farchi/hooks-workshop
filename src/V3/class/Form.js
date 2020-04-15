import React from "react";
import { create } from "../../shared/api";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.formInitialState,
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.onButtonSubmit = this.onButtonSubmit.bind(this);
  }

  formInitialState = {
    name: "",
    someField: "",
  };

  onValueChange(event) {
    const value = event.target.value;
    const field = event.target.dataset.field;
    this.setState({ [field]: value });
  }

  onButtonSubmit() {
    const fields = { name: this.state.name, someField: this.state.someField };
    create(fields).then((response) => {
      if (response) {
        this.props.onSubmit();
        this.setState(this.formInitialState);
        alert("Success!");
      }
    });
  }

  render() {
    return (
      <div className="w-64 p-8">
        <label htmlFor="name">
          Name
          <input
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
            value={this.state.name}
            data-field="name"
            onChange={this.onValueChange}
          />
        </label>
        <label htmlFor="someField">
          Some Field
          <input
            id="someField"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
            value={this.state.someField}
            data-field="someField"
            onChange={this.onValueChange}
          />
        </label>
        <div className="mt-3 w-full flex items-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={this.onButtonSubmit}
          >
            Create
          </button>
        </div>
      </div>
    );
  }
}

export default Form;
