import React, { useState } from 'react';
import { getCode } from './api'; // Adjust the import path to your API functions

const TeacherForm = () => {
    const [courseName, setCourseName] = useState('');
    const [sessionCode, setSessionCode] = useState('');
    const [generatedCode, setGeneratedCode] = useState('');
    const [submitStatus, setSubmitStatus] = useState('');

    const generateRandomCode = () => {
        // Generate a random 5-digit number
        const randomCode = Math.floor(10000 + Math.random() * 90000).toString();
        setSessionCode(randomCode);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus('Submitting code...');

        try {
            const response = await getCode(sessionCode, courseName); // Assuming getCode accepts course name as second parameter
            if (response && response.status === 200 && response.body) {
                setGeneratedCode(response.body.code); // Assuming the response has a 'code' field
                setSubmitStatus('Code Submitted Successfully!');
            } else {
                setSubmitStatus('Failed to submit the code');
            }
        } catch (error) {
            console.error('Submission Failed:', error);
            setSubmitStatus(`Submission Failed: ${error.message}`);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="courseName">Course Name:</label>
                <input type="text" id="courseName" name="courseName" required onChange={(e) => setCourseName(e.target.value)} value={courseName} />

                <button type="button" onClick={generateRandomCode} className="generate-btn">
                    Generate Code
                </button>
                {sessionCode && <p>Generated Code: {sessionCode}</p>}
            </div>

            <button type="submit" className="submit-btn" disabled={!sessionCode}>
                Submit Code
            </button>

            {submitStatus && <p>{submitStatus}</p>}
            {generatedCode && <p>Submitted Code: {generatedCode}</p>}
        </form>
    );
};

export default TeacherForm;
