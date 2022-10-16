import React from 'react';
import {Radio, TableCell, TableRow, Typography} from "@mui/material";
import {Option} from "../interfaces/Option";

type IntegratorRowProps = {
    label: string;
    radios: Option[];
    selected: string;
    handleChange: (value: string) => void;
};

const IntegratorRow = ({label, radios, selected, handleChange}: IntegratorRowProps) => {
    return (
        <TableRow>
            <TableCell>
                <Typography variant={"button"} component={"p"}>
                    {label}
                </Typography>
            </TableCell>
            {
                radios.map(({label: radio}, index) => (
                    <TableCell key={index}>
                        <Radio
                            checked={selected === radio}
                            onChange={e => handleChange(e.target.value)}
                            value={radio}
                            name={label}
                            inputProps={{'aria-label': radio}}
                        />
                    </TableCell>
                ))

            }
        </TableRow>
    );
};

export default IntegratorRow;