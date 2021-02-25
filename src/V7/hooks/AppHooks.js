import React, { useState, useEffect, useCallback } from 'react';

import ListHooks from './ListHooks';
import FormHooks from './FormHooks';
import ColorPicker from '../../shared/ColorPicker';

import { getAll } from '../../shared/api';

import '../../styles/main.css';

const App = () => {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [list, setList] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    document.title = selectedItemId || 'Nada';
  });

  const fetchAllItems = useCallback(async () => {
    setIsFetching(true);
    try {
      const items = await getAll();
      setList(items);
    } finally {
      setIsFetching(false);
    }
  }, []);

  useEffect(() => {
    fetchAllItems();
  }, [fetchAllItems]);

  const selectItem = (id) => {
    setSelectedItemId(id === selectedItemId ? null : id);
  };

  return (
    <div className="flex justify-between">
      <div className="flex">
        <h1 className="text-xl p-4">Hooks Ver 7</h1>
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
      <div className="p-8">
        <ColorPicker />
      </div>
    </div>
  );
};

export default App;
