# React App Client - Beaconcure

This is a React app that serves as a file explorer. It allows users to fetch and display files data from a server and view details of individual tables within the files.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the required dependencies.

## Running Instructions

To run the React app locally, follow these steps:

1. Install the required dependencies by running `npm install`.
2. Start the server by running `npm start`.
3. Open your web browser and navigate to `http://localhost:3000`.

<ins>**Note**</ins>: the client app is reaching out an a server at url `https://localhost:5000`.
>Until docker implementation is completed the client and server runs seperately. make sure the server runs before the client.


## Usage

1. Start the server by running `npm start`.
2. Open your web browser and navigate to `http://localhost:3000` to access the app.
3. Click the "Get Files" button to fetch the files data from the server.
4. The list of files will be displayed in an accordion-style format.
5. Click on a file to expand and view its tables.
6. Click on a table to view its details.
7. To close the table details view, click the "Close" button.


## Folder Structure

The app follows the following folder structure:

- `src/`: The root directory of the React app.
  - `index.js`: The entry point of the React app.
  - `index.css`: The CSS file for the index page.
  - `views/`: Directory containing main views or pages of the app.
    - `App.js`: The main component of the app responsible for rendering other components.
    - `App.css`: The CSS file for the `App` component.
  - `utils/`: Directory containing utility files.
    - `colors.js`: A utility file providing global color variables for the app.
  - `components/`: Directory containing reusable components used in the app.
    - `FilesList/`: Directory containing files related to the file list component.
      - `FilesList.js`: Component that renders a list of files with accordion-style expanding sections.
      - `FilesList.css`: The CSS file for the `FilesList` component.
    - `TableList/`: Directory containing files related to the table list component.
      - `TableList.js`: Component that renders a list of tables as clickable items.
    - `TableDetails/`: Directory containing files related to the table details component.
      - `TableDetails.js`: Component that renders details of a selected table.
      - `TableDetails.css`: The CSS file for the `TableDetails` component.


## External Libraries

This app utilizes the following external libraries:

- <ins>**React**</ins>: A JavaScript library for building user interfaces.
- <ins>**axios**</ins>: A promise-based HTTP client for making API requests.
- <ins>**Material-UI**</ins>: A popular React UI framework for building responsive and beautiful user interfaces.


## Additional Information

For more detailed information about each file or component, please refer to the individual files and their respective comments.



## Future Improvements

* Dockerize the client with the server to create a single instance.
> TODO: implement dockerizing the app by writing docker compose and dockerfile files
* Add configuration file for global constants such as port and server url.
* ad theme and better color handling with mui elements
---

