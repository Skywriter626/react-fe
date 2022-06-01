import React from 'react';

const ButtonTextProps = (props: {text: string}) => {
    return (
        <button>
            { props.text }
        </button>
    );
};

export default ButtonTextProps;