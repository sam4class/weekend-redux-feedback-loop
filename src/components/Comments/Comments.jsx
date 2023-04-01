import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Comments(){

    const history = useHistory();
    const dispatch = useDispatch();

    const [comments, setComments] = useState('')

    function saveNumber(event){
        event.preventDefault();

        dispatch({
            type: "SAVE_COMMENTS",
            payload: comments
        })

        history.push('/review');
    }

    return(<>
        <div>
        <h1 class='heading'>Any comments you want to leave?</h1>
        <br />
            <form onSubmit={saveNumber}>
                <label class='smallTag'>Comments</label>
                <input class='inputSpaceComments' type='text' value={comments} onChange={(event => setComments(event.target.value))}/>
                <button class='button' type="submit">NEXT</button>
            </form>
        </div>
    </>)
}

export default Comments;