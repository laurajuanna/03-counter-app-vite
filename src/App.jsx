import PropTypes from 'prop-types';

export const App = ({ title, subtitle }) => {

    return (
        <>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </>
    );
}

App.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired
}

App.defaultProps = {
    title: 'Sin título',
    subtitle: 100
}