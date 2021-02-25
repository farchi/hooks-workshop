import React, { useState } from 'react';
import RefHook1 from './RefHook1';
import RefHook2 from './RefHook2';
import DebounceWithHooks from './DebounceWithHooks';
import PrevProps from './PrevProps';

import '../styles/main.css';

const examples = {
  'useRef for DOM access': RefHook1,
  'useRef for debounce': RefHook2,
  'debouncing with hooks': DebounceWithHooks,
  'prevProps with ref': PrevProps,
};

const MoreHooksView = () => {
  const [selectedExample, setSelectedExample] = useState(null);

  const ActiveExample = examples[selectedExample];

  return (
    <div className="flex flex-col px-4 pt-4 bg-blue-100 min-h-screen">
      <div className="flex space-x-2">
        {Object.keys(examples).map((key) => {
          return (
            <button
              key={key}
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setSelectedExample(key)}
            >
              {key}
            </button>
          );
        })}
      </div>
      <h1 className="text-2xl my-2">
        Active example:
        {' '}
        {selectedExample || 'None'}
      </h1>
      <hr className="my-4" />
      {ActiveExample && <ActiveExample />}
    </div>
  );
};

export default MoreHooksView;
