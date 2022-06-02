import React, {FC, useState} from 'react';

const ButtonTextState: FC = () => {
    const [text, setText] = useState('Hi! Click me');
    return (
        <button onClick={() => setText('Yes! Thank you!')}>
            { text }
        </button>
    );
};

export default ButtonTextState;