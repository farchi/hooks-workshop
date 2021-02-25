import React, { useState, useEffect, useRef } from 'react';

function debounce(func, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func(args);
    }, wait);
  };
}

const Container = () => {
  const [calls, setCalls] = useState([]);

  const fetchData = (filters) => {
    setCalls((prevCalls) => [...prevCalls, filters]);
  };

  return (
    <div>
      <RefHook2 fetchData={fetchData} />
      <div>
        <span className="text-xl">Calls</span>
        <div>
          {calls.map((value, index) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <p key={index}>
                fetchData triggered with
                {' '}
                {value}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const RefHook2 = ({ fetchData }) => {
  const [filters, setFilters] = useState('Kappa');
  const fetchDebouncedRef = useRef(debounce(fetchData, 500));

  useEffect(() => {
    const fetchDebounced = fetchDebouncedRef.current;
    fetchDebounced(filters);
  }, [filters]);

  return (
    <input value={filters} onChange={(e) => setFilters(e.target.value)} className="border border-black" />
  );
};

export default Container;
