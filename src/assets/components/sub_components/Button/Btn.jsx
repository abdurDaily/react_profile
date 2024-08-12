import React from 'react';
import './Btn.css';

const Btn = ({children , href}) => {
    return (
        <div>
            <a  className='cmn_btn' href={href}>{children}</a>
        </div>
    );
};

export default Btn;