import React from 'react';

const Button = (props) => { 

    return (
        <button
            className="dribbble-button"
            style={{
                backgroundColor: '#EC0016',
                color: 'white',
                fontFamily: 'Verdana',
                fontSize: '16px',
                border: 'none',
                padding: '19px 18px 18px',
                borderRadius: '4px'
            }}>
            {props.label}
        </button>
    )

}

export default Button;