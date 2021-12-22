import React from 'react';
import ResponsiveAppBar from '../components/navbar';

const ResultsPage = () => {
    const callMethod = () => {
        const body = {
            "username" : "thefriendlyuser",
            "password" : "Password1"
        }
        const url = "https://e2rfuo7dnj.execute-api.us-east-1.amazonaws.com/prod/login"
        fetch(url, {
            method : "POST",
            headers : {
                'content-type' : 'application/json',
            },
            body : JSON.stringify(body)
        }).then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log('error : ' + err));
    }
    return (
        <div>
            <ResponsiveAppBar />
            <div onClick = {()=> {callMethod()}}>Click me</div>
        </div>
    )
}

export default ResultsPage;
