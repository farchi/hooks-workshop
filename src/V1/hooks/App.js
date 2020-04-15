import React, { useState } from "react";

import List from "./List";

import "../../styles/main.css";

const list = [
  { id: 1, name: "Item1", someField: "1234" },
  { id: 2, name: "Item2", someField: "1234" },
]

const App = () => {
  const [selectedItemId, setSelectedItemId] = useState(null)

  return (
    <div className="flex justify-between">
      <div className="flex">
        Hooks
        <div className="p-8">
          <List
            list={list}
            selectItem={setSelectedItemId}
            selectedItemId={selectedItemId}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
