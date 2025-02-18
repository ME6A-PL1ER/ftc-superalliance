import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="home">
            <h1>FTC Robotics Scouting</h1>
            <p>Welcome to the FTC Robotics Scouting application!</p>
            <nav>
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/pit-form">Pit Form</Link>
                    </li>
                    <li>
                        <Link to="/recon-form">Recon Form</Link>
                    </li>
                    <li>
                        <Link to="/form-editor">Form Editor</Link>
                    </li>
                    <li>
                        <Link to="/team-comparison">Team Comparison</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;