import React from 'react';
import {IconButton, TableCell, TableRow} from "@mui/material";
import {ArrowDownwardRounded, ArrowUpwardRounded, CancelRounded} from "@mui/icons-material";

import {OptionProps} from "../interfaces/Option";
import AppTextField from "./common/AppTextField";
import {OptionCreatable} from "../implementation/OptionCreatable";

const OptionComponent = ({index, first, last, label, moveTo, onLabelChange, onDelete}: OptionProps) => (
    <TableRow sx={{'&:last-child td, &:last-child th': {border: 0}}}>
        <TableCell component="th" scope="row">
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                {
                    !first && (
                        <IconButton aria-label="move-up" size={"small"} onClick={() => moveTo(index - 1, index)}>
                            <ArrowUpwardRounded fontSize={"small"}/>
                        </IconButton>
                    )
                }
                {
                    !last && (
                        <IconButton aria-label="move-down" size={"small"} onClick={() => moveTo(index + 1, index)}>
                            <ArrowDownwardRounded fontSize={"small"}/>
                        </IconButton>
                    )
                }
            </div>
        </TableCell>
        <TableCell>
            <AppTextField size={"small"} value={label} onChange={e => onLabelChange(e.target.value, index)}/>
        </TableCell>
        <TableCell>
            <AppTextField disabled value={OptionCreatable.makeValueFromLabel(label)} size={"small"}/>
        </TableCell>
        <TableCell align="center">
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <IconButton aria-label="move-down" size={"small"} onClick={() => onDelete(index)}>
                    <CancelRounded color={"error"} fontSize={"small"}/>
                </IconButton>
            </div>
        </TableCell>
    </TableRow>
);

export default OptionComponent;