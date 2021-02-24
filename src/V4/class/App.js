import React, { Component } from 'react';

import List from './List';
import Form from './Form';

import { getAll } from '../../shared/api';

import '../../styles/main.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetching: false,
      list: null,
      selectedItemId: null,
    };

    this.selectItem = this.selectItem.bind(this);
    this.fetchAllItems = this.fetchAllItems.bind(this);
  }

  componentDidMount() {
    this.fetchAllItems();
  }

  async fetchAllItems() {
    this.setState({ isFetching: true });
    try {
      const items = await getAll();
      this.setState({ list: items });
    } finally {
      this.setState({ isFetching: false });
    }
  }

  selectItem(id) {
    this.setState(({ selectedItemId }) => ({
      selectedItemId: id === selectedItemId ? null : id,
    }));
  }

  render() {
    const { isFetching, list, selectedItemId } = this.state;
    return (
      <div className="flex justify-between">
        <div className="flex">
          <div className="p-8">
            <List
              selectItem={this.selectItem}
              isFetching={isFetching}
              list={list}
              selectedItemId={selectedItemId}
            />
          </div>
          <div className="p-8">
            <Form id={selectedItemId} onSubmit={this.fetchAllItems} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
