import { useState, useEffect } from "react";
import axios from 'axios';

function Admin(){

    const [feedbackDetails, setFeedbackDetails] = useState([]);

    useEffect(() =>{
        handleUpdate()
    }, []);

    function handleUpdate(){
        console.log('inside GET')

        axios.get('/api/admin')
        .then ((result) => {
        console.log('result in GET', result)
        setFeedbackDetails(result.data)
        }).catch((err) => {
        console.log('error in GET', err)
        })
    }

    return(<>
        <div>
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
                    </tr>))}
                </tbody>
            </table>
        <br />
            
            </div>
        </> )

}

export default Admin;