import React, { useState, useEffect } from 'react';

import List from './List';

import { getAll } from '../../shared/api';

import '../../styles/main.css';

const App = () => {
  // const [isFetching, setIsFetching] = useState(false)
  // const [list, setList] = useState(null)
  const [selectedItemId, setSelectedItemId] = useState(null);

  // useEffect(() => {
  //   document.title = selectedItemId || "Nada"
  // });

  // useEffect(() => {
  //   const fetchAllItems = async () => {
  //     setIsFetching(true);
  //     try {
  //       const items = await getAll();
  //       setList(items);
  //     } finally {
  //       setIsFetching(false);
  //     }
  //   };
  //   fetchAllItems();
  // }, []);

  // const selectItem = (id) => {
  //   setSelectedItemId(id === selectedItemId ? null : id);
  // }

  return (
    <div className="flex justify-between">
      <div className="flex">
      <h1 className="text-xl p-4">Hooks Ver 2</h1>
        <div className="p-8">
          <List
            // list={list}
            // selectItem={selectItem}
            // isFetching={isFetching}
            selectedItemId={selectedItemId}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
