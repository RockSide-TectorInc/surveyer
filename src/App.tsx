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

function App() {
    const [state, setState] = useState<Field>({label: "", desc: ""});

    const [message, setMessage] = useState<string>("");

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setMessage("");
    };

    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        if (newValue > 0 && !state.label.trim()) {
            setMessage("Please add a label to the survey options.")
            setValue(0);
        } else
            setValue(newValue)
    };

    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };

    //console.log("State", state);
    return (
        <Container maxWidth={"lg"} sx={{py: 4}}>

            <Typography variant="h6" component="h6" sx={{textDecoration: "underline", display: "block"}}>
                Survey Component
            </Typography>

            <Box sx={{height: "90vh", py: 4}}>
                <Grid container rowSpacing={4}>
                    <Grid item md={6} sx={{}}>

                        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="Meta" {...a11yProps(0)} />
                                <Tab label="Options" {...a11yProps(1)} />
                            </Tabs>
                        </Box>

                        <TabPanel value={value} index={0}>
                            <FieldComponent onLabelChange={e => setState(prevState => {
                                return {...prevState, label: e}
                            })} onDescChange={
                                e => setState(prevState => {
                                    return {...prevState, desc: e};
                                })
                            } label={state.label} desc={state.desc}/>
                        </TabPanel>

                        <TabPanel value={value} index={1}>

                            <Typography variant={"body1"} component={"body"}>
                                Questions
                            </Typography>
                            <Box component={Paper}>
                                <Options/>
                            </Box>
                        </TabPanel>

                    </Grid>

                    <Grid item md={6} sx={{backgroundColor: ""}}>

                        <Typography variant={"h4"} align={"center"} component={"body"}>
                            Preview
                        </Typography>

                        <Box sx={{px: 4}}>

                            <Tooltip title={state.desc ?? ""}>
                                <Typography variant={"body1"} component={"body"}>
                                    {state.label}
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

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`}
             aria-labelledby={`simple-tab-${index}`}{...other}>
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default App;