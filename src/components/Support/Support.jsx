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
        <h1 className='heading'>How well are you being supported?</h1>
        
        <img className='pic1' src='/images/bridge.jpeg'/>

            <form onSubmit={saveNumber}>
                <label className='smallTag'>Support? ( 1-5 )</label>
                <input className='inputSpace' type='number' value={support} min='1' max='5' onChange={(event => setSupport(event.target.value))}/>
                <button className='button' type="submit">NEXT</button>
            </form>
        </div>
    </>)
}

export default Support;