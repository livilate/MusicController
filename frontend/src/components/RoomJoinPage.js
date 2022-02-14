import React, {useState} from "react";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";


export default function RoomJoinPage(){
    const [input, setInput] = useState({
        roomCode: "",
        error: ""
    })

    const handleSubmit = (event) => {
        console.log(event)
    }

    const handleTextChange = (e) => {
        setInput(prevInput => {
            return {...prevInput, roomCode: e.target.value}
        })
    }

    return (
        <Grid spacing={1} align="center">
            <Grid item xs={12}>
                <Typography variant="h4" component="h4">
                    Join a Room
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField 
                    error={input.error} 
                    label="Code" 
                    placeholder="Enter a Room Code"
                    Value={input.roomCode}
                    helperText={input.error}
                    variant="outlined" 
                    onChange={handleTextChange}/>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Enter Room
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color="secondary" to="/" component={Link}>
                    Back
                </Button>
            </Grid>
        </Grid>
    )
}