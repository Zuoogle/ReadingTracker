import React, { useState } from 'react';
import QuranTestItem from './QuranTestItem';
import Card from '../UI/Card';
import QuranTestFilter from '../QuranTestFilter/QuranTestFilterByYear';
import './QuranTests.css';

const QuranTests = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    return (
        <div>
            <Card className="tests">
                <QuranTestFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler} />
                <QuranTestItem
                    id={props.result[0].id}
                    childName={props.result[0].childName}
                    surah={props.result[0].surah}
                    date={props.result[0].date}
                    startAyah={props.result[0].startAyah}
                    endAyah={props.result[0].endAyah}
                    status={props.result[0].status}
                />
                <QuranTestItem
                    id={props.result[1].id}
                    childName={props.result[1].childName}
                    surah={props.result[1].surah}
                    date={props.result[1].date}
                    startAyah={props.result[1].startAyah}
                    endAyah={props.result[1].endAyah}
                    status={props.result[1].status}
                />
                <QuranTestItem
                    id={props.result[2].id}
                    childName={props.result[2].childName}
                    surah={props.result[2].surah}
                    date={props.result[2].date}
                    startAyah={props.result[2].startAyah}
                    endAyah={props.result[2].endAyah}
                    status={props.result[2].status}
                />
            </Card>
        </div>
    );
}

export default QuranTests