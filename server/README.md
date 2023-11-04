# Server Readme File

## Setup

### Install Packages

- ensure you're inside the _server_ directory
- install all packages within the _package.json_ file.
    
    `npm i && npm i -D`

### Database Setup

- Open Docker Desktop

- (once Docker is fully loaded) open the _package.json_ and find the scripts

- Run the docker database container

    `npm run setup-prod-db`

- Seed the database with the required data

    `npm run seed-db`

    A successful output should read

    ```
    Planting Seeds 🌱
    Connected to mongodb://localhost:<ENTRYPORT>/portfolioSite-db successfully 🚀
    Planting Stack Seed
    Planting Project Seed
    DB Seeded 🌾
    ```

- Optional - Open the mongodb shell to confirm or interact with the data within the CLI

    `npm run enter-prod-db`

- Run the Express server

    `npm run dev`

    A successful output should read

    ```
    Connected to mongodb://localhost:9090/portfolioSite-db successfully 🚀
    API running on port 4000
    ```
