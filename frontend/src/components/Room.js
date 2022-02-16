import React, {useState, useEffect} from "react"
import { Link, useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, ButtonGroup, Grid, Typography } from "@material-ui/core";

export default function Room(){
    const [room, setRoom] = useState({
        votesToSkip: 2,
        guestCanPause: false,
        isHost: false,
    });

    const { roomCode } = useParams();
    const navigate = useNavigate();
    
    const handlerLeaveRoom = () => {
        fetch('/api/leave-room')
            .then(response => navigate('/'))
    }

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


    return(
        <Grid container spacing={1} align="center">
            <Grid item xs={12}>
                <Typography variant="h4" component="h4">
                    You are in the Room {roomCode}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6" component="h6">
                    Votes to skip the song: {room.votesToSkip}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6" component="h6">
                    {room.guestCanPause ? "Able to pause" : room.guestCanPause && room.isHost ? "Able to pause" : "Not able to pause"}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6" component="h6">
                    {room.isHost ? "You are the Host of the Room" : "You are a guest"}
                </Typography>
            </Grid>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={12}>
                <ButtonGroup disableElevation variant="contained" color="primary">
                    <Button color="secondary" onClick={handlerLeaveRoom}>
                        Leave Room
                    </Button>
                </ButtonGroup>
            </Grid>
        </Grid>
    )
}