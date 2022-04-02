# Todo app

> Simple task manager build with NodeJS and MongoDB.

---

## Planned Features

- Create, Update, Delete tasks;
- Each task contains:
  - _title_ - title of task;
  - _status_ - there are 3 statuses: **"Next Up"**, **"In progress"**, **"Completed"**;
  - _description_ - details of task;
  - _deadline_;
  - _tags_ - helpful for groupping tasks;
- Filtering tasks, for example, getting tasks with status **In progress**, with **Tutorial** tag, or expired tasks;
- Searching by _title_;
- User authentication;
- Testing;
- Dockerize the project...

---

## First of all

> Make sure you have [Node](https://nodejs.org/en/download/) and [MongoDB](https://www.mongodb.com/docs/guides/server/install/) installed.

## How to run🏃‍♂️

- Clone the repo
- `cd repo_name`
- Install dependencies: `npm install`;
- Run `npm start`

---

## API endpoints

- Create new task: `POST: /api/v1/task/`
- Get tasks list: `GET: /api/v1/task/`
- Get task details: `GET: /api/v1/tast/:id`
- Delete task : `DELETE: /api/v1/task/:id`
