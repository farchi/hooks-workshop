import React, { Component } from 'react';

import List from './List';

import '../../styles/main.css';

const list = [
  { id: 1, name: 'Item1', someField: '1234' },
  { id: 2, name: 'Item2', someField: '1234' },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItemId: null,
    };

    this.selectItem = this.selectItem.bind(this);
  }

  selectItem(id) {
    this.setState({ selectedItemId: id });
  }

  render() {
    const { selectedItemId } = this.state;
    return (
      <div className="flex justify-between">
        <div className="flex">
        <h1 className="text-xl p-4">Class Ver 1</h1>
          <div className="p-8">
            <List
              list={list}
              selectItem={this.selectItem}
              selectedItemId={selectedItemId}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
