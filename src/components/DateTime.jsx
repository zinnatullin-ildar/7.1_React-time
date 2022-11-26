import PropTypes from 'prop-types';

function DateTime(props) {
    return (
        <p className="date">{props.date}</p>
    )
}

DateTime.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
    }),
}

export default DateTime;
