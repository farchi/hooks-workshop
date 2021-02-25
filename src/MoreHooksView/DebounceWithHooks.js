import React, { useState, useEffect, useRef } from 'react';

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

  useEffect(() => {
    const timeOutId = setTimeout(() => fetchData(filters), 500);
    return () => clearTimeout(timeOutId);
  }, [filters]); // eslint says fetchData needs to be in this list, but what happens when we add it?

  return (
    <input value={filters} onChange={(e) => setFilters(e.target.value)} className="border border-black" />
  );
};

export default Container;
