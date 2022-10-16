import React from 'react';
import {Box, Paper, Typography} from "@mui/material";
import Options, {OptionsProps} from "./Options";

const OptionWrapper = ({label, ...rest}: { label: string } & OptionsProps) => (
    <>
        <Typography variant={"body1"} component={"body"}>
            {label}
        </Typography>
        <Box component={Paper} sx={{mb: 4}}>
            <Options {...rest} />
        </Box>
    </>
);

export default OptionWrapper;