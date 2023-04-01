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

    history.push('/feedback');
 }

    return(<>
        <div>
        <h1 class='heading'>Review Your Feedback</h1>
        <br />
            <ul id='list'>
                <li class='listComplete'><em>Feeling:</em> {number.feeling}</li>
                <li class='listComplete'><em>Understanding:</em> {number.understanding}</li>
                <li class='listComplete'><em>Support:</em> {number.support}</li>
                <li class='listComplete'><em>Comments:</em> {number.comments}</li>
            </ul>
        
        <button class='button' onClick={handleSubmit}>SUBMIT</button>
        
        </div>
    </>)
}

export default Review;