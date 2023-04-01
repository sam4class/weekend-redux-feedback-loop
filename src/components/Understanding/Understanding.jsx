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
        <h1 className='heading'>How well are you understanding the content?</h1>
        <br />
            <form onSubmit={saveNumber}>
                <label className='smallTag'>Understanding? ( 1-5 )</label>
                <input className='inputSpace' type='number' value={understanding} min='1' max='5' onChange={(event => setUnderstanding(event.target.value))}/>
                <button className='button' type="submit">NEXT</button>
            </form>
        </div>
    </>)
}

export default Understanding;