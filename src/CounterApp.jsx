import PropTypes from 'prop-types';
import { useState } from 'react';

export const CounterApp = ({ value }) => {

    const [valor, setValor] = useState(value);

    const handleAdd = () => {
        setValor(valor + 1)
    }

    const handleSubstract = () => {
        setValor(valor - 1)
    }

    const handleReset = () => {
        setValor(value)
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{valor}</h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleSubstract}>-1</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 0
}
