import React, {useEffect, useState} from "react";
import { TextField, Button, ButtonGroup, Grid, Typography } from "@material-ui/core";
import { Link, useNavigate } from 'react-router-dom';

export default function HomePage(){
    const navigate = useNavigate();

    const [roomCode, setRoomCode] = useState({roomCode: null})

    useEffect(() => {
        fetch('/api/user-in-room')
            .then(response => response.json())
            .then(data =>
                {
                    if(data.code){
                        navigate('/room/' + data.code)
                    }
                }
            );
    }, [])

    return (
        <Grid container spacing={1} align="center">
            <Grid item xs={12}>
                <Typography variant="h3" component="h3">
                    Music controller
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <ButtonGroup disableElevation variant="contained" color="primary">
                    <Button color="primary" to="/join" component={Link}>
                        Join a Room
                    </Button>
                    <Button color="secondary" to="/create" component={Link}>
                        Create a Room
                    </Button>
                </ButtonGroup>
            </Grid>
        </Grid>
    )
}