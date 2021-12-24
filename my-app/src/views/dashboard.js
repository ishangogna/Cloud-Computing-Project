import React, { useEffect, useState } from 'react';
import ResponsiveAppBar from '../components/navbar';
import { useContext } from 'react'
import { UserContext } from '../contexts/user';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const DashboardPage = () => {
    const { current } = useContext(UserContext);
    const [friends, setFriends] = useState([])
    useEffect(() => {
        console.log(current)
        const url = `https://74duznivyh.execute-api.us-east-1.amazonaws.com/prod/users/${current.username}`
        fetch(url)
        .then(response => response.json())
        .then(data => setFriends(data.friends))
        .catch(err => console.log('error : ' + err));
      },[]);
    return (
        <div>
            <ResponsiveAppBar />
            <div style = {{ fontSize : 30, fontWeight : 500, marginTop : 20 }}>Your Friends</div>
            <div style = {{display : 'flex', flexWrap : 'wrap', marginTop : 40, padding : 20, justifyContent : 'center', alignContent : 'center'}}>
                {
                    friends.map( friend => <div>
                        <Card sx={{ width: 275, marginRight : 10, marginTop : 10}}>
            
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Friend
                </Typography>
                <Typography variant="h5" component="div">
                <strong>{friend}</strong>
                </Typography>
            </CardContent>
            
        </Card>


                    </div>)
                }

            </div>
        </div>  
    )
}
export default DashboardPage;