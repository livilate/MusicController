import React, {useState, useEffect} from "react"
import { Link, useParams } from 'react-router-dom';
import { TextField, Button, ButtonGroup, Grid, Typography } from "@material-ui/core";

export default function Room(){
    const [room, setRoom] = useState({
        votesToSkip: 2,
        guestCanPause: false,
        isHost: false,
    });

    const { roomCode } = useParams();

    useEffect(() => {
        fetch('/api/get-room' + '?code=' + roomCode)
            .then(response => response.json())
            .then(data =>            
                setRoom({
                    votesToSkip: data.votes_to_skip, 
                    guestCanPause: data.guest_can_pause,
                    isHost: data.is_host
                })
            );
    }, [])

        /*
            <div>
            <h3>{roomCode}</h3>
            <p>votes: {room.votesToSkip}</p>
            <p>able to pause: {room.guestCanPause.toString()}</p>
            <p>host: {room.isHost.toString()}</p>
        </div>

         */

    return(
        <Grid container spacing={1} align="center">
            <Grid item xs={12}>
                <Typography variant="h4" component="h4">
                    You are in the Room {roomCode}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6" component="h4">
                    Votes to skip the song: {room.votesToSkip}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6" component="h4">
                    {room.guestCanPause ? "Se puede pausar" : room.guestCanPause && room.isHost ? "Se puede pausar" : "No puede pausar"}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6" component="h4">
                    You are in the Room {roomCode}
                </Typography>
            </Grid>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={12}>
                <ButtonGroup disableElevation variant="contained" color="primary">
                    <Button color="primary" to="/join" component={Link}>
                        something
                    </Button>
                    <Button color="secondary" to="/" component={Link}>
                        Leave Room
                    </Button>
                </ButtonGroup>
            </Grid>
        </Grid>
    )
}