import React, { useState } from 'react';
import QuranTestItem from './QuranTestItem';
import Card from '../UI/Card';
import QuranTestFilter from '../QuranTestFilter/QuranTestFilterByYear';
import './QuranTests.css';

const QuranTests = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    return (
        <div>
            <Card className="tests">
                <QuranTestFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler} />
                {
                    props.result.map((tests) => (<QuranTestItem
                            childName={tests.childName}
                            surah={tests.surah}
                            startAyah={tests.startAyah}
                            endAyah={tests.endAyah}
                            date={tests.date}
                        />))
                }
            </Card>
        </div>
    );
}

export default QuranTests