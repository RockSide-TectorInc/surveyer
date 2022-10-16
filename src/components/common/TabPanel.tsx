import React from 'react';
import {Box, Typography} from "@mui/material";

const TabPanel = (props: TabPanelProps) => {
    const {children, value, index, ...other} = props;
    return (
        <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`}
             aria-labelledby={`tab-${index}`}{...other}>
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export const moreTabProps = (index: number) => ({id: `tab-${index}`, 'aria-controls': `tabpanel-${index}`});

export default TabPanel;