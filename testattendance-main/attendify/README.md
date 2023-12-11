# Attendify

## Overview

Attendify is a robust attendance system designed for schools. Utilizing Azure Functions and an SQL database, it streamlines the process of attendance verification in classrooms. Teachers can initiate sessions for their classes, generating a unique code for students to enter and confirm their attendance. This data is then securely saved and managed.

## Features

- **Session Initialization**: Teachers can start a session for each class, generating a random attendance code.
- **Attendance Verification**: Students enter the provided code to mark their attendance.
- **Data Management**: Attendance records are securely stored and managed in an SQL database.
- **User-Friendly Interface**: Built with React, offering a seamless and intuitive user experience.

## Technology Stack

- **Frontend**: React
- **Backend**: Azure Functions (Python)
- **Database**: Azure SQL Database

## Getting Started

### Prerequisites

- Node.js
- Azure account and Azure Functions
- SQL database setup

### Installation

1. Clone the repository: `git clone https://github.com/PKaracs/Attendify.git`
2. Navigate to the project directory: `cd attendify`
3. Install dependencies: `npm install`
4. Configure Azure Functions and SQL database according to your Azure setup.

### Running the Application
1. Start the frontend server: `npm run dev`
2. Deploy Azure Functions as per Azure documentation.
3. Access the application through the provided local URL.

## Usage

- **Teachers**:
  - Log in to the system.
  - Select the class and start a new session. A code will be generated.
  - Share the code with students.
- **Students**:
  - Log in and enter the code provided by the teacher.
  - Once entered, attendance is automatically recorded.

## Group Members

Andrei, Leonardo, Nicholas, Peter, Paul
