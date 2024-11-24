# quoteme-github-action-backend

This is the backend for the motivational quote generator app built with **Node.js**, **Express.js**, and **MongoDB**. The backend handles fetching, saving, and deleting quotes. It also provides API routes for interacting with the frontend. The app uses **GitHub Actions** to automate testing, deployment, and other backend-related workflows.

## Features

- Fetch random quotes from an XML file.
- Save and delete favorite quotes to/from MongoDB.
- RESTful API for interacting with the frontend.
- **GitHub Actions** integrated for automating tests, deployment, and CI/CD processes.

## Technologies Used

- **Node.js**: For the server-side JavaScript environment.
- **Express.js**: For creating the API endpoints.
- **MongoDB**: For storing favorite quotes.
- **GitHub Actions**: For automating testing, building, and deploying the backend.
- **xml2js**: For parsing XML quotes data.
- **dotenv**: For managing environment variables.

## Setup and Installation

To get started with the backend locally:

1. Clone the repository:

    ```bash
    git clone https://github.com/<your-username>/quoteme-github-action-backend.git
    ```

2. Navigate to the project folder:

    ```bash
    cd quoteme-github-action-backend
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file and add your MongoDB URI:

    ```bash
    MONGO_URI=your-mongodb-uri
    ```

5. Start the backend server:

    ```bash
    npm start
    ```

The API should now be running at `http://localhost:5000`.

### Workflow Configuration

You can find the GitHub Actions configuration file in the `.github/workflows` directory. The actions are triggered for each push to the main branch and will run automated tests, lint the code, and deploy the backend to a cloud hosting service.

## API Endpoints

- `GET /api/quotes`: Fetch a random quote from the XML file.
- `POST /api/save-favorite`: Save a quote to the user's favorites in MongoDB.
- `GET /api/saved-quotes`: Retrieve all saved quotes from MongoDB.
- `DELETE /api/delete-favorite/:id`: Delete a saved quote by its ID.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature:

    ```bash
    git checkout -b feature/your-feature
    ```

3. Commit your changes:

    ```bash
    git commit -am 'Add new feature'
    ```

4. Push to your branch:

    ```bash
    git push origin feature/your-feature
    ```

5. Create a new Pull Request.