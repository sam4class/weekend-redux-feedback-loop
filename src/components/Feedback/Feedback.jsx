import { useHistory } from "react-router-dom";

function Feedback(){

    const history = useHistory();

    function handleThatClick(){
        history.push('/')
    }

    return(<>
        <h1>Feedback!</h1>

        <h2>Thank You!</h2>
        <button onClick={handleThatClick}>Back to Start</button>
    </>)
}

export default Feedback;