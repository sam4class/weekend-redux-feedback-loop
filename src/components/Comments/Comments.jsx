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
        <h1 className='heading'>Any comments you want to leave?</h1>
        
        <img className='pic' src='/images/dog.jpeg'/>
        {/* <img className='pic' src='/images/carTrees.jpeg'/> */}
        {/* <img className='pic' src='/images/sight.jpeg'/> */}

            <form onSubmit={saveNumber}>
                <label className='smallTag'>Comments</label>
                <input className='inputSpaceComments' type='text' value={comments} onChange={(event => setComments(event.target.value))}/>
                <button className='button' type="submit">NEXT</button>
            </form>
        </div>
    </>)
}

export default Comments;