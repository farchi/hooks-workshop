import React, { useState, useEffect } from 'react';

import List from './List';
import Form from './Form';

import { getAll } from '../../shared/api';

import '../../styles/main.css';

const App = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [list, setList] = useState(null);
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
    document.title = selectedItemId || 'Nada';
  });

  //   const fetchAllItems = async () => {
  //     setIsFetching(true);
  //     try {
  //       const items = await getAll();
  //       setList(items);
  //     } finally {
  //       setIsFetching(false);
  //     }
  //   };

  // useEffect(() => {
  //   fetchAllItems();
  // }, []);

  const selectItem = (id) => {
    setSelectedItemId(id === selectedItemId ? null : id);
  };

  return (
    <div className="flex justify-between">
      <div className="flex">
        Hooks
        <div className="p-8">
          <List
            selectItem={selectItem}
            isFetching={isFetching}
            list={list}
            selectedItemId={selectedItemId}
          />
        </div>
        {/* <div className="p-8">
          <Form onSubmit={fetchAllItems} />
        </div> */}
      </div>
    </div>
  );
};

export default App;
