import { useHistory } from "react-router-dom";

function Feedback(){

    const history = useHistory();

    function handleThatClick(){
        history.push('/')
    }

    return(<>
        <h1 class='heading'>Thank You!</h1>
        <button class='button2' onClick={handleThatClick}>Leave Another Feedback</button>
    </>)
}

export default Feedback;