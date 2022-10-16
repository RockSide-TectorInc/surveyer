import React, {useState} from 'react';
import './app.css';
import {
    Box, Button,
    Container,
    Grid, IconButton,
    Paper, Radio,
    Tab, Table, TableBody, TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tabs,
    TextField,
    Typography
} from "@mui/material";
import {Add, AddCircle, ArrowDownwardRounded, ArrowUpwardRounded, Cancel, Save} from "@mui/icons-material";
import {FieldCreatable} from "./implementation/FieldCreatable";
import Field from "./components/Field";

function App() {
    const [state, setState] = useState<FieldCreatable>(new FieldCreatable("", ""));

    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };

    console.log("State", state);

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
                            <Field onLabelChange={e => setState(prevState => {
                                return {...prevState, label: e}
                            })} onDescChange={
                                e => setState(prevState => {
                                    return {...prevState, desc: e};
                                })
                            } label={state.label} desc={state.desc}/>
                        </TabPanel>,

                        <TabPanel value={value} index={1}>

                            <Typography variant={"body1"} component={"body"}>
                                Questions
                            </Typography>
                            <Box component={Paper}>
                                <TableContainer>
                                    <Table sx={{minWidth: "100%"}} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell/>
                                                <TableCell>Label</TableCell>
                                                <TableCell>Value</TableCell>
                                                <TableCell align="right"/>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                                <TableCell component="th" scope="row">
                                                    <div style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        alignItems: "center"
                                                    }}>
                                                        <IconButton aria-label="move-up" size={"small"}>
                                                            <ArrowUpwardRounded fontSize={"small"}/>
                                                        </IconButton>
                                                        <IconButton aria-label="move-down" size={"small"}>
                                                            <ArrowDownwardRounded fontSize={"small"}/>
                                                        </IconButton>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <TextField variant="outlined" size={"small"}/>
                                                </TableCell>
                                                <TableCell>
                                                    <TextField variant="outlined" size={"small"}/>
                                                </TableCell>
                                                <TableCell align="right"/>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <Box sx={{display: "flex", flexDirection: "row"}}>
                                    <Button size="small" startIcon={<Add/>}>Add Another</Button>
                                </Box>
                            </Box>
                        </TabPanel>

                    </Grid>

                    <Grid item md={6} sx={{backgroundColor: ""}}>

                        <Typography variant={"h4"} align={"center"} component={"body"}>
                            Preview
                        </Typography>

                        <Box sx={{px: 4}}>

                            <Typography variant={"body1"} component={"body"}>
                                Survey
                            </Typography>

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
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
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