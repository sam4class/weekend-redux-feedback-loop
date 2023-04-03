import { useState, useEffect } from "react";
import axios from 'axios';

function Admin(){

    const [feedbackDetails, setFeedbackDetails] = useState([]);

    useEffect(() =>{
        handleUpdate()
    }, []);

    function handleUpdate(){
        console.log('inside GET')

        axios.get('/api')
        .then ((result) => {
        console.log('result in GET', result)
        setFeedbackDetails(result.data)
        }).catch((err) => {
        console.log('error in GET', err)
        })
    }

    const deleteFeedback = (id) => {
        console.log('deleteFeedback', id);

        axios.delete(`/api/delete/${id}`)
        .then((response) => {
            handleUpdate();
        }).catch((err) => {
            console.log('err in delete Admin', err)
        })
    }

    return(<>
        <div>
            <img className='pic2' src="/images/dog.jpeg"/>
            <table>
                <thead>
                    <tr>
                    <th>Feeling</th><th>Comprehension</th><th>Support</th><th>Comments</th>
                    </tr>
                    </thead>
                <tbody>
                    {feedbackDetails.map((detail, i) => (
                    <tr key={i}>
                        <td>{detail.feeling}</td>
                        <td>{detail.understanding}</td>
                        <td>{detail.support}</td>
                        <td>{detail.comments}</td>
                        <td><button onClick={() => deleteFeedback(detail.id)}>Delete</button></td>
                    </tr>))}
                </tbody>
            </table>
        <br />
            
            </div>
        </> )

}

export default Admin;