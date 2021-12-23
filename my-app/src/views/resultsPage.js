import React from 'react';
import ResponsiveAppBar from '../components/navbar';
import dotenv from  'dotenv'

const ResultsPage = () => {
    const callMethod = () => {
        const body = {
            "username" : "thefriendlyuser",
            "password" : "Password1"
        }
        const url = "https://74duznivyh.execute-api.us-east-1.amazonaws.com/prod/login"
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
    const getMethod = () => {
        const url = "https://74duznivyh.execute-api.us-east-1.amazonaws.com/prod/users/thefriendlyuser/recommendations"
        fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log('error : ' + err));
    }
    return (
        <div>
            <ResponsiveAppBar />
            <div onClick = {()=> {callMethod()}}>Click me</div>
            <div onClick = {()=> alert(process.env.REACT_APP_ID_TOKEN)}>output</div>
            <div onClick = {()=> getMethod()}>make GET request </div>
        </div>
    )
}

export default ResultsPage;
