import React, { useState } from 'react';
import { create } from '../../shared/api';

const formInitialState = {
  name: '',
  someField: '',
};

const Form = ({ onSubmit }) => {
  // const [name, setName] = useState(formInitialState.name)
  // const [someField, setSomeField] = useState(formInitialState.someField)

  const onButtonSubmit = () => {
    // const fields = { name, someField };
    create(fields).then((response) => {
      if (response) {
        onSubmit();
        // setName(formInitialState.name)
        // setSomeField(formInitialState.someField)
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
          // value={name}
          data-field="name"
          // onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label htmlFor="someField">
        Some Field
        <input
          id="someField"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
          // value={someField}
          data-field="someField"
          // onChange={(event) => setSomeField(event.target.value)}
        />
      </label>
      <div className="mt-3 w-full flex items-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          // onClick={onButtonSubmit}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default Form;
