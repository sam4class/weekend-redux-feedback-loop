import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';



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
        <h1>How are you feeling today?</h1>
        <br />
            <form onSubmit={saveNumber}>
                <label>Feeling?</label>
                <input type='number' value={feeling} min='1' max='5' onChange={(event => setFeeling(event.target.value))} />
                <button type="submit">NEXT</button>
            </form>
        </div>
    </>)
}

export default Feelings;