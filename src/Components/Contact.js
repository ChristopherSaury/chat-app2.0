import React from 'react';
import './Contact.css';

const isOnline = true;

function Contact (){
return (
    <div className='Contact'>
        <img className='avatar' src='https://randomuser.me/api/portraits/women/45.jpg' alt='avatar' />
          
        <div><h4 className='name'>Anna Terry</h4>
                <div className='status'>
                    <div className={isOnline ? 'status-online': 'status-offline'}></div>
                    <div className='status-text'>{isOnline ? 'online':'offline'}</div>
                </div>
        </div>

    </div>
)
}

export default Contact;