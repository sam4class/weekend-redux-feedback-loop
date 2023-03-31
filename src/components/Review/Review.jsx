import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function Review(){

 const history = useHistory();
 const number = useSelector((store) =>store.number);
 console.log(number.feeling)

 function handleSubmit(){

    axios.post('/feedback', number)
    .then((result) =>{
        console.log('in POST', result)
    }).catch((err) => console.log('error in post', err))

    history.push('/5');
 }

    return(<>
        <div>
        <h1>Review Your Feedback</h1>
        <br />
            <ul>
                <li>Feeling: {number.feeling}</li>
                <li>Understanding: {number.understanding}</li>
                <li>Support: {number.support}</li>
                <li>Comments: {number.comments}</li>
            </ul>
        
        <button onClick={handleSubmit}>SUBMIT</button>
        
        </div>
    </>)
}

export default Review;