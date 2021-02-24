import React, { useState, useEffect } from 'react';

import ListHooks from './ListHooks';
import FormHooks from './FormHooks';

import { getAll } from '../../shared/api';

import '../../styles/main.css';

const App = () => {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [list, setList] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    document.title = selectedItemId || 'Nada';
  });

  const fetchAllItems = async () => {
    setIsFetching(true);
    try {
      const items = await getAll();
      setList(items);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchAllItems();
  }, []);

  const selectItem = (id) => {
    setSelectedItemId(id === selectedItemId ? null : id);
  };

  return (
    <div className="flex justify-between">
      <div className="flex">
        Hooks
        <div className="p-8">
          <ListHooks
            selectItem={selectItem}
            isFetching={isFetching}
            list={list}
            selectedItemId={selectedItemId}
          />
        </div>
        <div className="p-8">
          <FormHooks onSubmit={fetchAllItems} id={selectedItemId} />
        </div>
      </div>
    </div>
  );
};

export default App;
