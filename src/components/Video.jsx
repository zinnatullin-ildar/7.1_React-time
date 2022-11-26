import PropTypes from 'prop-types';
import { v4 as uuid } from "uuid";
import DateTimePretty from '../hocs/DateTimePretty';

function Video(props) {
    return (
        <>
            <iframe
                title={uuid()}
                src={props.url}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
            />
            <DateTimePretty date={props.date} />
        </>
    )
}

Video.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    }),
}

export default Video;
