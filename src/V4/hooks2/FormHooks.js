import React, { useState, useEffect, useReducer } from 'react';
import { get, create, update } from '../../shared/api';

const formInitialState = {
  name: '',
  someField: '',
};

// const reducer = (state, values) => {
//   return { ...state, ...values }
// }

const FormHooks = ({ onSubmit, id }) => {
  const [isFetching, setIsFetching] = useState(false);
  // const [formState, formDispatch] = useReducer(reducer, formInitialState);

  useEffect(() => {
    const fetchSelectedItem = () => {
      setIsFetching(true);
      get(id).then((response) => {
        // formDispatch({
        //   name: response.name,
        //   someField: response.someField,
        // })
        setIsFetching(false);
      });
    };

    if (id) {
      fetchSelectedItem();
    } else {
      // formDispatch(formInitialState)
    }
  }, [id]);

  const onValueChange = (event) => {
    const { value } = event.target;
    const { field } = event.target.dataset;
    // formDispatch({ [field]: value });
  };

  if (isFetching) return <div>Loading...</div>;

  const onButtonSubmit = () => {
    const isNew = !id;
    // const promise = isNew ? create(formState) : update({ ...formState, id });
    promise.then((response) => {
      if (response) {
        onSubmit();
        if (isNew) {
          // formDispatch(formInitialState)
        }
        alert('Success!');
      }
    });
  };

  return (
    <div className="w-64 p-8">
      <label htmlFor="name">
        Name
        <input
          id="name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
          // value={formState.name}
          data-field="name"
          // onChange={onValueChange}
        />
      </label>
      <label htmlFor="someField">
        Some Field
        <input
          id="someField"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
          // value={formState.someField}
          data-field="someField"
          // onChange={onValueChange}
        />
      </label>
      <div className="mt-3 w-full flex items-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={onButtonSubmit}
        >
          {id ? 'Update' : 'Create'}
        </button>
      </div>
    </div>
  );
};

export default FormHooks;
