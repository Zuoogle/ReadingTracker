import Card from '../UI/Card';
import QuranTestDate from './QuranTestDate';
import './QuranTestItem.css';

const QuranTestItem = (props) => {
    return (
        <Card className='test-item'>
            <QuranTestDate date={props.date} />
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
        </Card>
    );
}

export default QuranTestItem;