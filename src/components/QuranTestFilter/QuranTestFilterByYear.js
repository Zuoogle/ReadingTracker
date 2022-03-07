import React from 'react';


import './QuranTestFilterByYear.css';

const QuranTestFilter = () => {

  const selectTestYearEventHandler = (event) => {
    var testYear = event.target.value;
    console.log(testYear);
  }
  return (
    <div className='quran-test-filter'>
      <div className='quran-test-filter__control'>
        <label>Filter by year</label>
        <select onSelect={selectTestYearEventHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
        </select>
      </div>
    </div>
  );
};

export default QuranTestFilter;