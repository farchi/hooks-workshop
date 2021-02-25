import React, { useRef } from 'react';

const RefHook1 = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="space-x-2">
      <input ref={inputRef} className="border border-black" />
      <button
        type="button"
        onClick={focusInput}
        className="bg-blue-500 py-2 px-4 rounded text-white"
      >
        Focus
      </button>
    </div>
  );
};

export default RefHook1;
