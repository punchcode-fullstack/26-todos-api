# 26 Todos Full Stack

## The following is a fullstack app

- wireframe provided

https://www.figma.com/file/HXzbimO2S6gEPxE2tga0od/todo-form-mock

## Front End Application (React App)

- you will be creating a full stack application.

- There will be a login/signup page where a user is created
  - login page should log the user in (hitting a BE endpoint that already exists)
  - signup page should send a users email and password (hitting a BE endpoint that already exists)
- There will be a dashboard page that you land on which allows you to do the following actions

  - get a list of todos based on the user
  - create a todo
  - delete a todo when clicking on delete button
  - update a todo status
  - bonus: update a todo description

## Backend Application

You will be creating a todos api with all the CRUD actions

GET

/api/todos

DELETE

/api/todos

UPDATE

/api/todos/1

POST

/api/todos

# Below is an opionated list of how to approach this

# Phase 0: Planning

- what tables does your todo app need? (you will need two tables - )

## Phase 1: Optional but a good first step

Create a mock api (fake placeholder data) for all the routes using an array in memory.

A short example can be seen below

```js
const todos = []
app.get('/api/todos', (req, res) => {
  res.json(todos)
})

app.post('/api/todos', (req, res) => {
  todos.push(req.body)
  res.json({ message: 'added the todo!' })
})
```

## Phase 2: Create the api utilizing postman

Actually integrating the requests with a database (note this assumes the database is already created and tables are created)

```js
app.get('/api/todos', (req, res) => {
  knex.raw('SELECT * FROM todos').then((result) => {
    res.json(result.rows)
  })
})
```

## Phase 3: Create the frontend which will consume (use) this api

Make the react app which will use all these different api endpoints

1. start with dashboard (do all the api things without concerning which user is logged in - will explain tomorrow on Friday)
2. then move on to login/signup
3. then adjust your routes to only allow a user to delete their own routes (will explain tomorrow on Friday)

## I will be providing the authentication portion of the app - for now I want you to do the following steps:

### Make the start of the frontend app

1. create a react app called client

`npx create-react-app client --template redux`

2. Install the following dependencies (in client folder)

`yarn add axios react-router react-router-dom`

### Make the start of the backend app

1. create a backend express app (follow the steps below)

   1. mkdir server
   2. go into server folder and run `npm init -y`
   3. install the following dependencies

```bash
yarn add nodemon express knex pg
```

- update the scripts section in package.json to execute nodemon on your app.js file (assuming you have server setup)

```json
"scripts": {
    "start": "nodemon app.js"
  }
```

### Make the file to run both express and react app

- outside of client and server folder

`npm init -y`

`yarn add concurrently`

- update the package.json to include the following in the scripts section

```json
"scripts": {
    "client": "cd client && npm start",
    "server": "cd server && npm start",
    "start": "concurrently \"npm run client\" \"npm run server\""
  }
```

2. resources folder will have several more instructions to get started (regarding table creation and database hookup)

## normal mode

- create the dashboard
- make sure you have a user in the database
- hard code the user_id to 1 for todos insert

## hard mode

- create the login/signup page too

## nightmare mode

- create a new table for tagging todos
- be able to create them and search them with a search bar in dashboard (hint this is a many to many relationship to todos)
