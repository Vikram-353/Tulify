import React, {useState, useCallback} from 'react'
import { useNavigate } from 'react-router-dom';
const HomePage =()=>{
    const [value, setValue]= useState();
    const navigate = useNavigate()
    const handleJoinRoom = useCallback (()=>{
        navigate(`/room/${value}`)
    }, [navigate, value])
    return(
        <div>
            <input 
            value={value}
            onChange={(e)=> setValue(e.target.value)}
            type="text" placeholder="Enter room code" />
            <button onClick={handleJoinRoom}>Join</button>
        </div>
        // <h1> HomePage</h1>
    )
}
export default HomePage;