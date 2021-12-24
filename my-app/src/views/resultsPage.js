import React, { useEffect, useState} from 'react';
import ResponsiveAppBar from '../components/navbar';
import dotenv from  'dotenv'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useContext } from 'react'
import { UserContext } from '../contexts/user';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  
const ResultsPage = () => {
    const { current } = useContext(UserContext);
    const [ friendsOfFriends, setFriendsOfFriends ] = useState([])
    const [ friendsWithInterests, setFriendsWithInterests ] = useState([])
    useEffect(() => {
        console.log(current)
        const url = `https://74duznivyh.execute-api.us-east-1.amazonaws.com/prod/users/${current.username}/recommendations`
        fetch(url)
        .then(response => response.json())
        .then(data => { setFriendsOfFriends(data.friendsOfFriends); setFriendsWithInterests(data.friendsWithInterests) })
        .catch(err => console.log('error : ' + err));
      },[]);
    

    const followUser = () => {
        const token = process.env.REACT_APP_ID_TOKEN;
        var body = {
            "username" : "paulacruz"
        }
        const url = `https://74duznivyh.execute-api.us-east-1.amazonaws.com/prod/users/${current.username}/friends`
        fetch(url, {
            method : "POST",
            headers : {
            'content-type' : 'application/json',
            'Authorization' : `Bearer ${token}`
    },
    body : JSON.stringify(body)
    }).then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log('error : ' + err))
    }   

    return (
        <div>
            <ResponsiveAppBar />
            <div>
            <div style = {{ fontSize : 30, fontWeight : 500, marginTop : 30 }}>Friends of Friends</div>

                <div style = {{display : 'flex', flexWrap : 'wrap', marginTop : 0, padding : 20, justifyContent : 'center', alignContent : 'center'}}>
                    {
                        friendsOfFriends.map(friendOfFriend => <div key = {friendOfFriend[0]}> <Card sx={{ width: 275, marginRight : 10, marginTop : 10}}>
            
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Friend
                                </Typography>
                                <Typography variant="h5" component="div">
                                {friendOfFriend[0]}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick = {() => followUser()}>Follow</Button>
                            </CardActions>
                        </Card> </div>) 
                    }
                    
                </div>
                <div style = {{ fontSize : 30, fontWeight : 500, marginTop : 60 }}>Other users with similar Interests</div>

                <div style = {{display : 'flex', flexWrap : 'wrap', marginTop : 0, padding : 20, justifyContent : 'center', alignContent : 'center'}}>
                    {
                        friendsWithInterests.map(friendOfFriend => <div key = {friendOfFriend[0]}> <Card sx={{ width: 275, marginRight : 10, marginTop : 10}}>
            
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                User
                                </Typography>
                                <Typography variant="h5" component="div">
                                {friendOfFriend[0]}
                                </Typography>
                                <CardActions>
                                <Button size="small" onClick = {() => followUser()}>Follow</Button>
                            </CardActions>  
                            </CardContent>
                            
                        </Card> </div>) 
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default ResultsPage;
