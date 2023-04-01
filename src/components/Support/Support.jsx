import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


function Support(){

    const history = useHistory();
    const dispatch = useDispatch();

    const [support, setSupport] = useState(0)

    function saveNumber(event){
        event.preventDefault();

        dispatch({
            type: "SAVE_SUPPORT",
            payload: support
        })

        history.push('/comments');
    }

    return(<>
        <div>
        <h1>How well are you being supported?</h1>
        <br />
            <form onSubmit={saveNumber}>
                <label>Support?</label>
                <input type='number' value={support} min='1' max='5' onChange={(event => setSupport(event.target.value))}/>
                <button type="submit">NEXT</button>
            </form>
        </div>
    </>)
}

export default Support;