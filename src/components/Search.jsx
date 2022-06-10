import { useState } from 'react';

function Search({ cb = Function.prototype }) {
  const [value, setValue] = useState('');

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    cb(value);
  };

  return (
    <div className='input-field'>
      <input
        className='validate'
        value={value}
        type='search'
        placeholder='Search'
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKey}
      />
      <button className='btn search-btn' onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
}

export { Search };
