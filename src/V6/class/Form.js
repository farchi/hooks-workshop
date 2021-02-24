import React from "react";
import { get, create, update } from "../../shared/api";
import withColor from "./withColor";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.formInitialState,
      isFetching: false,
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.onButtonSubmit = this.onButtonSubmit.bind(this);
    this.fetchSelectedItem = this.fetchSelectedItem.bind(this);

    this.nameInputRef = React.createRef();
  }

  formInitialState = {
    name: "",
    someField: "",
  };

  componentDidMount() {
    if (this.props.id) {
      this.fetchSelectedItem(this.props.id);
    }
  }

  componentDidUpdate(prevProps, _prevState) {
    if (this.props.id !== prevProps.id) {
      if (this.props.id) {
        this.fetchSelectedItem(this.props.id);
      } else {
        this.setState(this.formInitialState);
      }
    }
  }

  fetchSelectedItem() {
    this.setState({ isFetching: true });
    get(this.props.id).then((response) => {
      this.setState({ ...response, isFetching: false });
      this.nameInputRef.current?.focus()
    });
  }

  onValueChange(event) {
    const value = event.target.value;
    const field = event.target.dataset.field;
    this.setState({ [field]: value });
  }

  onButtonSubmit() {
    const fields = { name: this.state.name, someField: this.state.someField };
    const isNew = !this.props.id;
    const promise = isNew ? create(fields) : update({ ...fields, id: this.props.id });
    promise.then((response) => {
      if (response) {
        this.props.onSubmit();
        if (isNew) this.setState(this.formInitialState);
        alert("Success!");
      }
    });
  }

  render() {
    return (
      <>
        {this.state.isFetching ? (
          <div>Loading...</div>
        ) : (
          <div className="w-64 p-8" style={{ backgroundColor: this.props.color }}>
            <label htmlFor="name">
              Name
              <input
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                value={this.state.name}
                data-field="name"
                onChange={this.onValueChange}
                ref={this.nameInputRef}
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
                {this.props.id ? "Update" : "Create"}
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default withColor(Form);
