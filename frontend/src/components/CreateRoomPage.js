import React, { useState } from "react"
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";


export default function CreateRoomPage(){

    const [room, setRoom] = useState({
                guestCanPause: true,
                votesToSkip: 2
            });

    let defaultVotes = 2;

    const handleRoomVotes = (event) => {
        setRoom(prevRoom => {
            return {...prevRoom, votesToSkip: Number(event.target.value)}
        })
    }

    const handleGuestCanPause = (event) =>{
        setRoom(prevRoom => {
            return {...prevRoom, guestCanPause: event.target.value === "true" ? true : false}
        })
    }

    const handleSubmitRoom = () => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify({
                votes_to_skip: room.votesToSkip,
                guest_can_pause: room.guestCanPause,
            }),
        };
        
        fetch('/api/create-room/', requestOptions)
            .then((response) => response.json())
            .then((data) => console.log(data));
    }

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                <Typography component='h4' variant='h4'>
                    Create A Room
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl component="fieldset">
                    <FormHelperText>
                        <div align="center">
                            guest control of playback state
                        </div>
                    </FormHelperText>
                    <RadioGroup row defaultValue="true" onChange={handleGuestCanPause}>
                        <FormControlLabel value="true" 
                            control={<Radio control="primary" />} 
                            label="Play/Pause"
                            labelPlacement="bottom"/>
                        <FormControlLabel value="false" 
                            control={<Radio control="secondary" />} 
                            label="No Control"
                            labelPlacement="bottom"/>
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl>
                    <TextField required={true} type="number" 
                        defaultValue={defaultVotes} 
                        onChange={handleRoomVotes}
                        inputProps={{min: 1, style: {textAlign: "center"}}} />
                    <FormHelperText>
                        <div align="Center">
                            Votes required to skip song
                        </div>
                    </FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
                <Button color="primary" variant="contained" onClick={handleSubmitRoom}>
                    Create a Room
                </Button>
            </Grid>
            <Grid item xs={12} align="center">
                <Button color="secondary" variant="contained" to="/" component={Link}>
                    Back
                </Button>
            </Grid>
        </Grid>
    )
}