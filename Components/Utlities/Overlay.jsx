import React from 'react'
import ReactDOM from 'react-dom';
import './Overlay.css'


// Background Overlay //

const Overlay = ({ onClick, style, children, onMouseEnter }) => {
    return (
        <div
            className="overlay"
            onMouseEnter={onMouseEnter}
            onClick={onClick}
            style={style}
        >{children}</div>
    );

}

export default Overlay