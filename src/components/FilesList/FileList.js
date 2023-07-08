/**
 * @fileoverview Renders a list of files with accordion-style(mui) expanding sections.
 */

import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { FiChevronDown } from 'react-icons/fi';
import TableList from '../TableList/TableList';
import { lightSkyBlueBgColor, primaryFontColor } from '../../utils/colors.js'
import './FilesList.css'

/**
 * Renders a list of files with accordion-style expanding sections using material-ui lib.
 *
 * @component
 * @param {Object[]} files - The array of files to render.
 * @param {Function} onTableClick - The function to handle table click events.
 * @returns {JSX.Element} The rendered FilesList component.
 */

const FileList = ({ files, onTableClick }) => {
  return (
    <div className='files-list-container' style={filesListBackgroundStyle} >
      {files.map((file, index) => (
        <Accordion square={false} key={index} className='files-accordion' sx={filesListBackgroundStyle} >
          <AccordionSummary expandIcon={<FiChevronDown />}>
            <Typography sx={headerTypographyStyle}>{file.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableList tables={file.tables} onTableClick={onTableClick} />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default FileList;

// CSS inline styles
const filesListBackgroundStyle = { backgroundColor: lightSkyBlueBgColor };
const headerTypographyStyle = { color: primaryFontColor, fontWeight: 'bold', letterSpacing: '0.1rem' };