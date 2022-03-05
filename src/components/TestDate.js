import './TestDate.css';

function TestDate(props) {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <div className="test-date">
            <div className="test-date__month">{month}</div>
            <div className='test-date__year'>{year}</div>
            <div className='test-date__day'>{day}</div>
        </div>
    );
}
export default TestDate;