import React, {useState} from 'react';
import {Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {Option} from "../interfaces/Option";
import OptionComponent from "./OptionComponent";
import {Add} from "@mui/icons-material";
import {OptionCreatable} from "../implementation/OptionCreatable";

export type OptionsProps = {
    options: Option[],
    setOptions: ((value: (((prevState: Option[]) => Option[]) | Option[])) => void)
};

const Options = ({options, setOptions}: OptionsProps) => {
    return (
        <>
            <TableContainer>
                <Table sx={{minWidth: "100%"}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell/>
                            <TableCell>Label</TableCell>
                            <TableCell>Value</TableCell>
                            <TableCell align="center"/>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            options.map((({label}, index) =>
                                <OptionComponent
                                    index={index}
                                    key={index}
                                    label={label}
                                    first={index === 0}
                                    last={index === options.length - 1}
                                    moveTo={(newIndex, currentIndex) => setOptions(OptionCreatable.moveOption(newIndex, currentIndex))}
                                    onDelete={index => setOptions(OptionCreatable.deleteOption(index))}
                                    onLabelChange={(label, index) => setOptions(OptionCreatable.onChangeLabel(index, label))}
                                />))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{display: "flex", flexDirection: "row"}}>
                <Button size="small" startIcon={<Add/>}
                        onClick={() => setOptions(prevState => [...prevState, OptionCreatable.newOption()])}>
                    Add Another
                </Button>
            </Box>
        </>
    );
};

export default Options;