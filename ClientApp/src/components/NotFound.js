import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';
import './NotFound.css'; // Import the CSS file for styling

const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <FaExclamationTriangle className="not-found-icon" />
                <h1 className="not-found-title">Oops! Page Not Found</h1>
                <p className="not-found-message">
                    The page you are looking for may have been removed, had its name changed,
                    or is temporarily unavailable.
                </p>
                <Link to="/" className="not-found-link">
                    Go to Home Page
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
