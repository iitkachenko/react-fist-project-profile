import React from 'react';


export default function Contacts() {
    return (
        <div className="contacts">
            <h1>Maksym Tkachenko</h1>
            <h2>Frontend Developer</h2>   
            <span className="email">maksymt.website</span> 
            <div className="button-set">
                <a className="light" href="mailto:name@email.com">
                    <i className="fa-solid fa-envelope"></i>
                    Email
                </a>
                <a className="dark" href="#"><i className="fa-brands fa-linkedin"></i>LinkedIn</a>
            </div>        
        </div>
    )
}