Live Link:- https://aakarshkumar-btech-10287-22-frontend.onrender.com

Task Management System 
About the Project
This project is a full-stack task management application built around a Kanban board workflow.
Users can register, log in, and manage their own tasks by moving them between Pending, In Progress, and Completed columns.
The goal of this project is to keep the code simple, clean, and easy to understand, while covering all core task management features end-to-end.

Tech Stack

Frontend:-
React (Vite)
JavaScript, HTML, CSS
Axios

Backend:-
Node.js
Express.js
MongoDB (Mongoose)
JWT Authentication

Backend:-
cd Backend
npm install
npm start

Frontend:-
cd Frontend
npm install
npm run dev

Environment Variables
Backend (Backend/.env):-
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Frontend (Frontend/.env):-
VITE_API_BASE_URL=http://localhost:5000/api

How Tasks Work:-
Each task contains:
Title
Description
Status (Pending / In Progress / Completed)
Due date
Created date
Tasks are user-specific and fetched from the backend.
If a task is created after its due date, it is automatically marked as Completed.
Otherwise, users control task status using drag and drop on the Kanban board.

Demo Access:-
Email: aaa@gmail.com
Password: password

Deployment:- Render

Summary:-
This project demonstrates authentication, REST APIs, CRUD operations, and frontend-backend integration using a clean and minimal Kanban-based design.
Some Pic Of Website:-
<img width="1885" height="959" alt="image" src="https://github.com/user-attachments/assets/5a0c4beb-2b6c-4f01-8275-a2b5bff05d05" />
<img width="685" height="759" alt="image" src="https://github.com/user-attachments/assets/84bcc880-7080-4047-895b-1a754ea2c7f0" />
<img width="662" height="631" alt="image" src="https://github.com/user-attachments/assets/e89e8ab9-6f9f-4a22-8294-49393d38ae77" />

