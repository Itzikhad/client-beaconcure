/**
 * @fileoverview Renders details of a table, including its title, row count, column count, and notes.
 */

import React from 'react';
import { Typography } from '@mui/material'
import './TableDetails.css'
import { primaryFontColor, secondaryFontColor, lightSkyBlueBgColor } from '../../utils/colors';

/**
 * Renders details of a table, including its title, row count, column count, and notes.
 * Close button - close the view
 *
 * @component
 * @param {Object} table - The table object containing the details.
 * @param {Function} onTableClick - The function to handle table click events.
 * @returns {JSX.Element} The rendered TableDetails component.
 */
const TableDetails = ({ table, onTableClick }) => {
  return (
    <div className='table-details-container' style={containerBGColor}>
      <div className='table-details-info-container'>
        <Typography variant="h6" sx={typographyTitleStyle}>{table.title}</Typography>
        <Typography sx={typographyStyle}>Rows: {table.rows}</Typography>
        <Typography sx={typographyStyle}>Columns: {table.columns}</Typography>
        <Typography sx={typographyStyle}>{table.notes}</Typography>
      </div>
      <button className="hide-table-details-button" onClick={() => onTableClick(null)} >
        Close
      </button>
    </div>
  );
};

export default TableDetails;

// CSS inline styles
const containerBGColor = { backgroundColor: lightSkyBlueBgColor };
const typographyStyle = { color: secondaryFontColor, fontFamily: 'inherit' };
const typographyTitleStyle = { ...typographyStyle, color: primaryFontColor, marginBottom: "20px", fontWeight: 'bold' }