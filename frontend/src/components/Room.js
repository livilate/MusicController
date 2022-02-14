import React, {useState, useEffect} from "react"
import { Link, useParams } from 'react-router-dom';

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

    return(
        <div>
            <h3>{roomCode}</h3>
            <p>votes: {room.votesToSkip}</p>
            <p>able to pause: {room.guestCanPause.toString()}</p>
            <p>host: {room.isHost.toString()}</p>
        </div>
    )
}