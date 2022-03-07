import React from 'react';
import './QuranTestFilterByYear.css';

const QuranTestFilter = (props) => {

  const selectTestYearChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  }

  return (
    <div className='quran-test-filter'>
      <div className='quran-test-filter__control'>
        <label>Filter Quran Test By Year</label>
        <select
          value={props.selected}
          onChange={selectTestYearChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
        </select>
      </div>
    </div>
  );
};

export default QuranTestFilter;