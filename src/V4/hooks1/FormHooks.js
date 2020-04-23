import React, { useState, useEffect } from "react";
import { get, create, update } from "../../shared/api";

const formInitialState = {
  name: "",
  someField: "",
};

const FormHooks = ({ onSubmit, id }) => {
  // const [isFetching, setIsFetching] = useState(false)
  const [name, setName] = useState(formInitialState.name);
  const [someField, setSomeField] = useState(formInitialState.someField);

  const onButtonSubmit = () => {
    const fields = { name, someField };
    // const isNew = !id;
    // const promise = isNew ? create(fields) : update({ ...fields, id });
    promise.then((response) => {
      if (response) {
        onSubmit();
        // if (isNew) {
        //   setName(formInitialState.name);
        //   setSomeField(formInitialState.someField);
        // }
        alert("Success!");
      }
    });
  }

  // useEffect(() => {
  //   if (id) {
  //     fetchCurrentElement(id);
  //   } else {
  //     setName(formInitialState.name)
  //     setSomeField(formInitialState.someField)
  //   }
  // },[id])

  // const fetchCurrentElement = (id) => {
  //   setIsFetching(true);
  //   get(id).then((response) => {
  //     setName(response.name)
  //     setSomeField(response.someField)
  //     setIsFetching(false)
  //   });
  // }
  
  // if (isFetching) return <div>Loading...</div>;
  
  return (
    <div className="w-64 p-8">
      <label htmlFor="name">
        Name
        <input
          id="name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
          value={name}
          data-field="name"
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label htmlFor="someField">
        Some Field
        <input
          id="someField"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
          value={someField}
          data-field="someField"
          onChange={(event) => setSomeField(event.target.value)}
        />
      </label>
      <div className="mt-3 w-full flex items-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={onButtonSubmit}
        >
          {/* {id ? "Update" : "Create"} */}
        </button>
      </div>
    </div>
  );
};

export default FormHooks
