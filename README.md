# Book Management System

This is a simple Book Management System that allows users to perform CRUD (Create, Read, Update, Delete) operations on a collection of books. The system is implemented using a full-stack JavaScript approach, combining a React front-end with a Node.js/Express back-end and MongoDB as the database.

## Features

### 1. Home Page

-   Displays a list of books in either table or card view.
-   Provides options to switch between table and card view.
-   Allows users to navigate to create a new book.

   ![home page](https://github.com/anthonynguyent/bookit/assets/54492419/096747cb-7e9d-40a3-a6b3-edafc8e61f6b)


### 2. Create Book

-   Allows users to add a new book to the collection.
-   Validates and prompts the user for required fields (title, author, publish year).
-   Displays a loading spinner during the data submission process.
-   Provides user feedback using snackbar notifications.

   ![create book](https://github.com/anthonynguyent/bookit/assets/54492419/367e9e6e-c89d-4009-9795-031d7bd1febc)


### 3. Show Book Details

-   Displays detailed information about a specific book.
-   Allows users to navigate back to the home page.

### 4. Edit Book

-   Allows users to update the details of an existing book.
-   Retrieves current book details for editing.
-   Displays a loading spinner during the data submission process.
-   Provides user feedback using snackbar notifications.

### 5. Delete Book

-   Allows users to delete a specific book from the collection.
-   Displays a confirmation message before deletion.
-   Displays a loading spinner during the data submission process.
-   Provides user feedback using snackbar notifications.

   ![show book details, edit book, delete book](https://github.com/anthonynguyent/bookit/assets/54492419/08a143c2-9637-4460-87db-31cdb3665533)


## Technologies Used

-   **Front-end**: React
-   **Back-end**: Node.js, Express
-   **Database**: MongoDB
-   **State Management**: React Hooks
-   **Routing**: React Router
-   **HTTP Requests**: Axios
-   **UI Components**: Tailwind CSS
-   **Notification**: react-notifications (notistack)

## Project Structure

-   **Backend (Node.js/Express)**

    -   `index.js`: Server setup and entry point.
    -   `config.js`: Configuration file for constants (e.g., PORT, MongoDB URL).
    -   `models/bookModel.js`: MongoDB schema for the Book model.
    -   `routes/booksRoute.js`: Express routes for CRUD operations on books.

-   **Frontend (React)**
    -   `src/App.jsx`: Main application component with React Router setup.
    -   `src/pages/`: Folder containing React components for different pages.
    -   `src/components/`: Folder containing reusable React components.
    -   `src/index.css`: Tailwind CSS styles.

## How to Run

1. Clone the repository.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install dependencies.
4. Start the backend server: `npm run dev`.
5. Navigate to the `frontend` directory: `cd frontend`.
6. Run `npm install` to install frontend dependencies.
7. Start the React app: `npm start`.

The application will be accessible at [http://localhost:3000](http://localhost:3000).

## Notes

-   Ensure that MongoDB is installed and running on your machine.
-   Modify the MongoDB connection URL in `config.js` if needed.

Feel free to explore and enhance the features based on your requirements. Happy coding!
