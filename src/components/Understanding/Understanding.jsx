import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


function Understanding(){

    const history = useHistory();
    const dispatch = useDispatch();

    const [understanding, setUnderstanding] = useState(0)

    function saveNumber(event){
        event.preventDefault();

        dispatch({
            type: "SAVE_UNDERSTANDING",
            payload: understanding
        })

        history.push('/support');
    }

    return(<>
        <div>
        <h1>How well are you understanding the content?</h1>
        <br />
            <form onSubmit={saveNumber}>
                <label>Understanding?</label>
                <input type='number' value={understanding} onChange={(event => setUnderstanding(event.target.value))}/>
                <button type="submit">NEXT</button>
            </form>
        </div>
    </>)
}

export default Understanding;