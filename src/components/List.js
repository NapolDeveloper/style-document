import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialList = [
  {
    id: 'a',
    name: 'Robin'
  },
  {
    id: 'b',
    name: 'Napol'
  }
];

const List = () => {
  const [list, setList] = useState(initialList);
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleAdd = () => {
    const newList = list.concat({ name, id: uuidv4() });
    setList(newList);
    setName('');
  };

  return (
    <div>
      <div>
        <input type='text' value={name} onChange={handleChange} />
        <button type='button' onClick={handleAdd}>
          Add
        </button>
      </div>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
