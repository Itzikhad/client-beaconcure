/**
 * @fileoverview Renders a list of tables as clickable items, for the FilesList component.
 */

import { List, ListItemButton, ListItemText, Typography } from '@mui/material';
import { secondaryFontColor } from '../../utils/colors';

/**
 * Renders a list of tables as clickable items.
 *
 * @component
 * @param {Object[]} tables - The array of tables to render.
 * @param {Function} onTableClick - The function to handle table click events.
 * @returns {JSX.Element} The rendered TableList component.
 */

const TableList = ({ tables, onTableClick }) => {
    return (
        <List component="nav">
            {tables.map((table, index) => (
                <ListItemButton key={index} onClick={() => onTableClick(table)}>
                    <ListItemText>
                        <Typography sx={typographyStyle}>
                            {`${table.title}.json`}
                        </Typography>
                    </ListItemText>
                </ListItemButton>
            ))}
        </List>
    );
};

export default TableList;

// CSS inline styles
const typographyStyle = { color: secondaryFontColor, fontWeight: 'bold', fontFamily: 'inherit' }
