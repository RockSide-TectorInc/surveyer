import React from 'react';
import {TextField, TextFieldProps} from "@mui/material";

const AppTextField = (props: TextFieldProps) => <TextField variant="outlined" fullWidth sx={{pb: 4}} {...props}/>;

export default AppTextField;