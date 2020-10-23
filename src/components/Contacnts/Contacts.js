import React from 'react';
import { Alert } from 'react-bootstrap';
import './style.scss';

const Contacts = () => {
    return (
        <div id='contacts'>
            <h4 className="display-4">Contacts</h4>
            <div className="d-flex justify-content-around">
                <Alert key='dark' variant='dark'>
                    <Alert.Link href="https://github.com/exxodia666">Github</Alert.Link>
                </Alert>
                <Alert key='dark' variant='dark'>
                    <Alert.Link href="">Instagram</Alert.Link>
                </Alert>
                <Alert key='dark' variant='dark'>
                    <Alert.Link href="https://www.linkedin.com/in/алексей-олефир-83a12a1b8">LinkedIn</Alert.Link>
                </Alert>
            </div>

        </div>
    );
}

export default Contacts;