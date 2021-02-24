import React from 'react';
import useColor from './useColor';

function List(props) {
  const {
    list, selectedItemId, selectItem, isFetching,
  } = props;

  const color = useColor();

  if (isFetching || !list) {
    return <div className="bg-gray-200 p-4 w-48 text-center rounded">Loading...</div>;
  }
  return (
    <div className="bg-gray-400 p-4 w-48 text-center rounded" style={{ backgroundColor: color }}>
      {list.map((item) => (
        <div
          id={item.id}
          className={`bg-white my-2 px-2 border rounded ${
            item.id === selectedItemId ? 'border-red-500 font-bold' : 'border-transparent'
          }`}
          key={item.id}
          onClick={() => selectItem(item.id)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default List;
