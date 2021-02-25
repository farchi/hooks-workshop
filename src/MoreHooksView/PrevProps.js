import React, { useRef, useState, useEffect } from 'react';

const PrevProps = () => {
  const [count, setCount] = useState(0);

  const prevCountRef = useRef(null);
  useEffect(() => {
    prevCountRef.current = count;
  });

  const prevCount = prevCountRef.current;
  return (
    <h1>
      <p>Now: {count}, before: {prevCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <hr/>
      <button onClick={() => alert(prevCount)}>Show Ref closure value</button>
      <button onClick={() => alert(prevCountRef.current)}>Show Re currentf</button>
    </h1>
  );
};

export default PrevProps;