import React, {useEffect, useState} from "react";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function RoomJoinPage(){
    const navigate = useNavigate();
    const [input, setInput] = useState({
        roomCode: "",
        error: ""
    })

    const handleSubmit = (event) => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify({
                code: input.roomCode,
            }),
        };

        fetch('/api/join-room', requestOptions)
            .then(response => {
                if (response.ok){
                    navigate('/room/' + input.roomCode)
                } else{
                    setInput(prevInput => {
                        return {...prevInput, error: "Room not found."}
                    })
                }
            }).catch(error => console.log(error))
    }

    const handleTextChange = (e) => {
        setInput(prevInput => {
            return {...prevInput, roomCode: e.target.value}
        })
    }

    return (
        <Grid container spacing={1} align="center">
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