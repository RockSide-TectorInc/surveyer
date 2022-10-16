import React, {useState} from 'react';
import '../css/app.css';
import {
    Box, Button,
    Container,
    Grid, ListItemButton, ListItemText, Snackbar,
    Tab,
    Tabs,
    Tooltip,
    Typography
} from "@mui/material";
import {Cancel, Save} from "@mui/icons-material";
import FieldComponent from "../components/FieldComponent";
import {Field} from "../interfaces/Field";
import TabPanel, {moreTabProps} from '../components/common/TabPanel';
import {FieldCreatable} from "../implementation/FieldCreatable";
import {Option} from "../interfaces/Option";
import useComponentUtils from "../hooks/useComponentUtils";
import OptionWrapper from "../components/OptionWrapper";
import Integrator, {IntegratorMap} from "../components/Integrator";
import AppModal from "../components/common/AppModal";

function App() {
    const [field, setField] = useState<Field>({label: "", desc: ""});
    const [questions, setQuestions] = useState<Option[]>([{label: ""}]);
    const [answers, setAnswers] = useState<Option[]>([{label: ""}]);

    const [form, setForm] = useState<IntegratorMap>({});

    const [message, setMessage, handleClose, activeTab, setActiveTab, open, setOpen] = useComponentUtils();
    const handleSetActiveTab = (event: React.SyntheticEvent, newValue: number) => {
        if (newValue > 0 && !field.label.trim()) {
            setMessage("Please add a label to the survey options.")
            setActiveTab(0);
        } else
            setActiveTab(newValue)
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
                            <OptionWrapper label={"Answers"} options={answers} setOptions={setAnswers}/>
                        </TabPanel>

                    </Grid>

                    <Grid item md={6} sx={{backgroundColor: ""}}>

                        <Typography variant={"h4"} align={"center"} component={"h4"}>
                            Preview
                        </Typography>

                        <Box sx={{px: 4}}>

                            <Tooltip title={field.desc ?? ""}>
                                <Typography variant={"body1"} component={"h4"}>
                                    {field.label}
                                </Typography>
                            </Tooltip>

                            <Integrator meta={questions} radios={answers} form={form} setForm={setForm}/>

                            <Box sx={{display: "flex", flexDirection: "row"}} rowGap={4}>
                                <Button size="small" startIcon={<Save/>} onClick={() => setOpen(true)}>Save</Button>
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

            <AppModal setOpen={setOpen} open={open}>
                <>
                    {
                        Object.entries(form).map((value, index) => (
                            <ListItemButton key={index}>
                                <ListItemText primary={value[0]} secondary={value[1]}/>
                            </ListItemButton>
                        ))
                    }
                </>
            </AppModal>

        </Container>
    );
}

export default App;