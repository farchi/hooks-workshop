import React, { useState, Component } from "react"

export class ToDoList extends Component {
  constructor(props) {
    super(props)
    this.state={
      list: [],
      element: ""
    }
    this.changeElement = this.changeElement.bind(this);
    this.addElement = this.addElement.bind(this);
    this.removeElement = this.removeElement.bind(this);
  }

  changeElement(event){
    this.setState({element: event.target.value})
  }

  addElement(){
    if (this.state.list.includes(this.state.element)){
      alert("This elements already exist")
    } else{
      this.setState((prevState) => ({list: prevState.list.concat(prevState.element), element: ""}))
    }
  }

  removeElement(option){
    this.setState((prevState) => ({ list: prevState.list.filter((element) => element != option)}))
  }

  render(){
    return (
      <div>
        <ul>
        {
          this.state.list.map(element => (
            <li key={element}>{element}<button onClick={() => this.removeElement(element)}>Remove Element</button></li>
          ))
        }
      </ul>
      <input value={this.state.element} onChange={this.changeElement}/>
      <button onClick={this.addElement}>Add Element</button>
      </div>
    )
  }
}

export const HooksToDo = (props) => {
  const [list, setList] = useState([])
  const [element, setElement] = useState("")

  const changeElement = (event) => {
    setElement(event.target.value)
  }

  const addElement = () => {
    if (list.includes(element)){
      alert("This elements already exist")
    } else{
      setList(list.concat(element))
      setElement("")
    }
  }

  const removeElement = (option) =>{
    setList(list.filter((element) => element != option))
  }

  return (
    <div>
        <ul>
        {
          list.map(element => (
            <li key={element}>{element}<button onClick={() => removeElement(element)}>Remove Element</button></li>
          ))
        }
      </ul>
      <input value={element} onChange={changeElement}/>
      <button onClick={addElement}>Add Element</button>
    </div>
  )
}
