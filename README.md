## Starting the Project

### Manual Setup

1. Clone the repo
2. `npm i` to install all the dependencies
3. Setup a `postgres db`
4. Create a `.env` file based on the schema given in `.env.example` and populate the enviornment variables accordingly.
5. `npm run start-dev` to start the server at `localhost:8000` with the API documentation at `/api/v1/docs`

### Setup with Docker

1. Do `docker-compose run --service-ports iclassbe` to start the project

---

## Configure Pre-Commit Hooks

Move the custom hooks files from `.githooks` folder to your local `.git\hooks` folder and remove the existing .sample file

---
