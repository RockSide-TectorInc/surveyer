import React, {useState} from 'react';
import './app.css';
import {
    Box, Button,
    Container,
    Grid, Paper, Radio, Snackbar,
    Tab, Table, TableBody, TableCell,
    TableHead,
    TableRow,
    Tabs,
    Tooltip,
    Typography
} from "@mui/material";
import {Cancel, Save} from "@mui/icons-material";
import FieldComponent from "./components/FieldComponent";
import Options from "./components/Options";
import {Field} from "./interfaces/Field";
import TabPanel, {moreTabProps} from './components/common/TabPanel';
import {FieldCreatable} from "./implementation/FieldCreatable";
import {Option} from "./interfaces/Option";
import useComponentUtils from "./hooks/useComponentUtils";
import OptionWrapper from "./components/OptionWrapper";

function App() {
    const [field, setField] = useState<Field>({label: "", desc: ""});
    const [questions, setQuestions] = useState<Option[]>([{label: ""}]);

    const [message, setMessage, handleClose, activeTab, setActiveTab] = useComponentUtils();
    const handleSetActiveTab = (event: React.SyntheticEvent, newValue: number) => {
        if (newValue > 0 && !field.label.trim()) {
            setMessage("Please add a label to the survey options.")
            setActiveTab(0);
        } else
            setActiveTab(newValue)
    };

    const [selectedValue, setSelectedValue] = React.useState('a');
    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };

    return (
        <Container maxWidth={"lg"} sx={{py: 4}}>

            <Typography variant="h6" component="h6" sx={{textDecoration: "underline", display: "block"}}>
                Survey Component
            </Typography>

            <Box sx={{height: "90vh", py: 4}}>
                <Grid container rowSpacing={4}>
                    <Grid item md={6} sx={{}}>

                        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                            <Tabs value={activeTab} onChange={handleSetActiveTab} aria-label="tabs">
                                <Tab label="Meta" {...moreTabProps(0)} />
                                <Tab label="Options" {...moreTabProps(1)} />
                            </Tabs>
                        </Box>

                        <TabPanel value={activeTab} index={0}>
                            <FieldComponent
                                label={field.label}
                                desc={field.desc}
                                onLabelChange={e => setField(FieldCreatable.setValue("label", e))}
                                onDescChange={e => setField(FieldCreatable.setValue("desc", e))}
                            />
                        </TabPanel>

                        <TabPanel value={activeTab} index={1}>
                            <OptionWrapper label={"Questions"} options={questions} setOptions={setQuestions}/>
                        </TabPanel>

                    </Grid>

                    <Grid item md={6} sx={{backgroundColor: ""}}>

                        <Typography variant={"h4"} align={"center"} component={"body"}>
                            Preview
                        </Typography>

                        <Box sx={{px: 4}}>

                            <Tooltip title={field.desc ?? ""}>
                                <Typography variant={"body1"} component={"body"}>
                                    {field.label}
                                </Typography>
                            </Tooltip>

                            <Box component={Paper}>

                                <Table sx={{minWidth: "100%"}} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell/>
                                            <TableCell>Excellent</TableCell>
                                            <TableCell>Good</TableCell>
                                            <TableCell>Better</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>
                                                <Typography variant={"button"} component={"body"}>
                                                    Math
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Radio
                                                    checked={selectedValue === 'b'}
                                                    onChange={handleRadioChange}
                                                    value="b"
                                                    name="radio-buttons"
                                                    inputProps={{'aria-label': 'B'}}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Radio
                                                    checked={selectedValue === 'a'}
                                                    onChange={handleRadioChange}
                                                    value="a"
                                                    name="radio-buttons"
                                                    inputProps={{'aria-label': 'A'}}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Radio
                                                    checked={selectedValue === 'c'}
                                                    onChange={handleRadioChange}
                                                    value="c"
                                                    name="radio-buttons"
                                                    inputProps={{'aria-label': 'C'}}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>

                            </Box>

                            <Box sx={{display: "flex", flexDirection: "row"}} rowGap={4}>
                                <Button size="small" startIcon={<Save/>}>Save</Button>
                                <Button size="small" startIcon={<Cancel/>} variant={"text"}
                                        color={"error"}>Cancel</Button>
                            </Box>

                        </Box>

                    </Grid>

                </Grid>
            </Box>

            <Snackbar
                open={!!message}
                autoHideDuration={2000}
                onClose={handleClose}
                message={message}
            />

        </Container>
    );
}

export default App;