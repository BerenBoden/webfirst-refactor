import React from 'react';
import Contact from '../contact/Contact';
import Headers from '../headers/Headers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ShowcaseContact = () => {
    const element = <FontAwesomeIcon icon={faEnvelope}/>
    return (
        <div className="container mt-4 md:px-18 mx-auto">
            <Headers icons={element} title="Get in touch"/>
            <Contact />
        </div>
    )
}

export default ShowcaseContact
