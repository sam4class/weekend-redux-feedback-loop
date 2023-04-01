import { useHistory } from "react-router-dom";

function Feedback(){

    const history = useHistory();

    function handleThatClick(){
        history.push('/')
    }

    return(<>
        <h1 className='heading'>Thank You!</h1>
        <button className='button2' onClick={handleThatClick}>Leave Another Feedback</button>
    </>)
}

export default Feedback;