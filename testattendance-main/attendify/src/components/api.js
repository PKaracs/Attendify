export async function getCode(sessionCode, sessionId) {
    try {
        const queryParams = new URLSearchParams({ session_code: sessionCode, course_name: course_name }).toString();
        const url = `https://attendify32.azurewebsites.netn/api/get_code?${queryParams}`;

        const response = await fetch(url, { method: 'GET' });

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        return await response.text();
    } catch (error) {
        console.error('Error fetching code:', error);
        throw error;
    }
}
export async function checkAttendance(code, sessionId, studentId) {
    try {
        const queryParams = new URLSearchParams({ input: code, session_id: sessionId, student_email: student_email }).toString();
        const url = `https://attendify32.azurewebsites.net/api/check_attendance?${queryParams}`;

        const response = await fetch(url, { method: 'GET' });

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        return await response.text();
    } catch (error) {
        console.error('Error checking attendance:', error);
        throw error;
    }
}