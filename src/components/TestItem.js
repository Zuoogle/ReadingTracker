import TestDate from './TestDate';
import './TestItem.css';

function TestItem(props) {
    return (
        <div className='test-item'>
            <TestDate date={props.date} />
            <div className='test-item__price'>
                <h2>{props.childName}</h2>
            </div>
            <div className='test-item__price'>
                <div className='test-item__description'>
                    <p>{props.surah}</p>
                    <p>From {props.startAyah}</p>
                    <p>To {props.endAyah}</p>
                    <p>Status {props.status}</p>
                </div>
            </div>
        </div>
    );
}

export default TestItem;