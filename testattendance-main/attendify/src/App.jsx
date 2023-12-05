import { useState } from 'react';
import './App.css';
import TeacherPage from './Teacher.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Student from './Student';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={<TeacherPage />} />
                        <Route path="/teacher" element={<TeacherPage />} />
                        <Route path="/student" element={<Student />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
