import React, { useState, useEffect } from "react";

import List from "./List";

import { getAll } from "../../shared/api";

import "../../styles/main.css";

const App = () => {
  // const [isFetching, setIsFetching] = useState(false)
  // const [list, setList] = useState(null)
  const [selectedItemId, setSelectedItemId] = useState(null)

  // useEffect(() => {
  //   document.title = selectedItemId || "Nada"
  // });

  // useEffect(() => {
  //   setIsFetching(true);
  //   getAll().then((list) => {
  //     setList(list)
  //     setIsFetching(false)
  //   });
  // }, [])

  // const selectItem = (id) => {
  //   setSelectedItemId(id === selectedItemId ? null : id);
  // }

  return (
    <div className="flex justify-between">
      <div className="flex">
        Hooks
        <div className="p-8">
          <List
            list={list}
            // selectItem={selectItem}
            // isFetching={isFetching}
            selectedItemId={selectedItemId}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
