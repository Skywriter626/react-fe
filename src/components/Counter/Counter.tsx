import React, {FC, useState} from 'react';
import './Counter.css';

const Counter: FC = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <h3>Current count: { count } </h3>
            <button className={'buttonPlus'} onClick= { () => setCount(count + 1 )}>+</button>
            <button className={'buttonMinus'} onClick= { () => setCount(count - 1 )}>-</button>
        </>
    );
};

export default Counter;