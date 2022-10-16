import React, {useState} from 'react';
import {Box, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {Option} from "../interfaces/Option";
import IntegratorRow from "./IntegratorRow";

type IntegratorProps = {
    meta: Option[];
    radios: Option[],
    form: IntegratorMap,
    setForm: ((value: (((prevState: IntegratorMap) => IntegratorMap) | IntegratorMap)) => void)
};

export interface IntegratorMap {
    [key: string]: string;
}

const Integrator = ({meta, radios, form, setForm}: IntegratorProps) => {
    return (
        <Box component={Paper}>
            <Table sx={{minWidth: "100%"}} aria-label="Integrator">
                <TableHead>
                    <TableRow>
                        <TableCell/>
                        {
                            radios.map((value, index) => (
                                <TableCell key={index}>{value.label}</TableCell>
                            ))
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        meta.map((value, index) => (
                            <IntegratorRow
                                label={value.label}
                                radios={radios}
                                selected={form[value.label] ?? ""}
                                handleChange={radio => setForm(prevState => ({...prevState, [value.label]: radio}))}
                                key={index}
                            />
                        ))
                    }
                </TableBody>
            </Table>
        </Box>
    );
};

export default Integrator;