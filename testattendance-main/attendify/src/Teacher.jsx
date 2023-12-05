import React from 'react';
import './teachers.css';
import { Link } from 'react-router-dom'
import CheckInForm from "./components/TeacherForm";

const TeacherPage = () => {
    return (
        <div className="page-wrapper">
            <header className="page-header">
                <h1 id="attendify-title">Attendify</h1>
                <div className="mode-buttons">
                    <Link to="/student">
                        <button type="button" className="mode-btn" id="student-mode">
                            Student Mode
                        </button>
                    </Link>
                    <button type="button" className="mode-btn" id="teacher-mode">
                        Teacher Mode
                    </button>
                </div>
            </header>
            <div className="container">
                <h1>
                    <span className="highlight">Welcome back!</span> Start generating codes
                    for today's class.
                </h1>
                <h2 className="generate">Press on the button below to generate codes.</h2>

                <CheckInForm />
            </div>
        </div>
    );
};

export default TeacherPage;