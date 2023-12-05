// StudentPage.js
import React from 'react';
import './student.css';
import { Link } from 'react-router-dom';
import StudentForm from "./components/StudentForm";

const StudentPage = () => {
    return (
        <div className="page-wrapper">
            <header className="page-header">
                <h1 id="attendify-title">Attendify</h1>
                <div className="mode-buttons">
                    <button type="button" className="mode-btn" id="student-mode">
                        Student Mode
                    </button>
                    <Link to="/teacher">
                        <button type="button" className="mode-btn" id="teacher-mode">
                            Teacher Mode
                        </button>
                    </Link>
                </div>
            </header>
            <div className="container">
                <h1>
                    <span className="highlight">Welcome!</span> Submit your information to
                    check in for the class.
                </h1>
                <StudentForm />
            </div>
        </div>
    );
};

export default StudentPage;