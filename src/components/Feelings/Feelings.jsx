import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';



function Feelings(){

    const history = useHistory();
    const dispatch = useDispatch();

    const [feeling, setFeeling] = useState(0)

    function saveNumber(event){
        event.preventDefault();

        dispatch({
            type: "SAVE_FEELING",
            payload: feeling
        })

        history.push('/understanding')
    }

    return(<>
    <div>
        <h1 class='heading'>How are you feeling today?</h1>
        <br />
            <form onSubmit={saveNumber}>
            <lable class='smallTag'>Feeling? ( 1-5 )</lable>
                <input class='inputSpace' type='number' value={feeling} min='1' max='5' onChange={(event => setFeeling(event.target.value))} />
                <button class='button' type="submit" color='primary'>NEXT</button>
            </form>
        </div>
    </>)
}

export default Feelings;