import EventCard from '../eventCard/eventCard';
import './eventList.css';

const EventList = ({ list }) => (
    <div className='list-wrap'>
        {list.map((item) => (
            <EventCard key={item.id} item={item} />
        ))}
    </div>
);

export default EventList;