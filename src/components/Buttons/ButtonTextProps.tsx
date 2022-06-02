import React from 'react';

const ButtonTextProps = (props: {text: string, setText: (text: string) => void}) => {
    return (
        <button onClick = {() => props.setText('One more time! Good job!')}>
            { props.text }
        </button>
    );
};

export default ButtonTextProps;