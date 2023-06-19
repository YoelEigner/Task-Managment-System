# Task Management System

This is a Task Management System application that allows users to manage tasks with CRUD (Create, Read, Update, Delete) operations. It is built with React, Redux, and Bootstrap.

## Features
- Add new tasks.
- View a list of current tasks.
- Update existing tasks.
- State is managed with Redux and persisted in local storage.
- Communicates with a server to persist tasks across sessions.

## Installation

Before starting, ensure you have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed on your system.

1. Clone this repository: 
```bash
git clone https://github.com/YoelEigner/Task-Managment-System.git
```
2. Navigate into the project directory:

```bash
cd Task-Managment-System
```
3. Install the dependencies:
```bash
npm i
```

## Running the Application

To start the application in development mode, run:

```bash
npm start
```

The application will start on [http://localhost:3000](http://localhost:3000) by default.

The apps endpoints are:

- GET `http://localhost:3001/api/tasks/{id}`: Fetch a task by id.
- POST `http://localhost:3001/api/tasks/`: Create a new task.
- PUT `http://localhost:3001/api/tasks/{id}`: Update an existing task.

You can find the backend API [on the task-api repo](https://github.com/YoelEigner/task-api) 


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
