import React, { useState } from 'react';
import { checkAttendance } from './api'; // Adjust the import path to your API functions

const StudentForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        code: '',
        course: ''
    });
    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus('Submitting...');

        // Example: replace with your logic for studentId and sessionId
        const studentId = formData.email; // Assuming student ID is the email
        const sessionId = formData.course; // Assuming session ID is the course

        try {
            const response = await checkAttendance(formData.code, sessionId, studentId);
            console.log('Attendance Check:', response);
            setSubmitStatus('Submitted Successfully!');
            // Additional handling if needed
        } catch (error) {
            console.error('Submission Failed:', error);
            setSubmitStatus(`Submission Failed: ${error.message}`);
            // Additional error handling
        }
    };

    return (
        <form id="checkInForm" onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="email">Enter your email:</label>
                <input type="text" id="email" name="email" required onChange={handleChange} value={formData.email} />
                <label htmlFor="code">Enter the code:</label>
                <input type="text" id="code" name="code" required onChange={handleChange} value={formData.code} />
                <label htmlFor="course">Enter the course:</label>
                <input type="text" id="course" name="course" required onChange={handleChange} value={formData.course} />
            </div>
            <button type="submit" className="submit-btn">
                Submit
            </button>
            {submitStatus && <p>{submitStatus}</p>}
        </form>
    );
};

export default StudentForm;
