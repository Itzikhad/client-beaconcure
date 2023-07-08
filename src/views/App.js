/**
 * @fileoverview Main component for the React app.
 * Responsible for fetching files data and rendering the file explorer and presenting views.
 */

import { useState } from 'react';
import axios from 'axios'
import FileList from '../components/FilesList/FileList';
import TableDetails from '../components/TableDetails/TableDetails';
import './App.css'

/**
 * Server global url details
 * TODO: fetch from configure file
 *        implement logging for actions and error handling
 *
 * @global
 */
const server_port = 5000
const base_url = `http://localhost:${server_port}`;

/**
 * Main component for the React app.
 * Renders the file explorer and handles fetching files data and presenting views.
 *
 * @component
 */
const App = () => {
  const [selectedTable, setSelectedTable] = useState(null);
  const [files, setFiles] = useState([]);
  // const classes = useStyles();

  /**
 * Handles the click event when a table is selected.
 *
 * @param {Table|null} table - The selected table object.
 */
  const handleTableClick = (table) => {
    setSelectedTable(table);
  };

  /**
 * Fetches the files data from the server.
 * Using axios and a GET call /api/files
 * 
 * @function
 */
  const fetchFilesData = () => {
    axios.get(base_url + '/api/files')
      .then((filesResponse) => {
        parseFilesData(filesResponse.data).then((data) => {
          setFiles(data);
        });
      })
      .catch((error) => {
        console.error('Error fetching files:', error);
      });
  };

  /**
 * Parses the files data retrieved from the server.
 *
 * @param {Array} jsonFiles - The JSON files data.
 * @returns {Array} - The parsed file data.
 */
  const parseFilesData = async (jsonFiles) => {
    const fileData = [];
    let index = 1;
    for (const jsonFile of jsonFiles) {
      fileData.push({ title: `file${index}`, ...jsonFile });
      index++
    }
    return fileData;
  };

  /**
 * Handles the click event when the "Get Files" button is clicked.
 * 
 * @function
 */
  const handleGetFiles = () => {
    fetchFilesData()
  }

  return (
    <div className='App'>
      <h1>File Explorer</h1>
      <button className="get-files-button" onClick={handleGetFiles} >
        Get Files
      </button>
      
        <div className='body-container'>
          {files.length > 0 ? (
            <FileList files={files} onTableClick={handleTableClick} />
          ) : (
            <p>Loading files... (maybe try to click Get files button)</p>
          )}
          <>
            {selectedTable && <TableDetails table={selectedTable} onTableClick={handleTableClick} />}
          </>
        </div>
      
    </div>
  );
};

export default App;
