import React, { useEffect, useState} from 'react';
import ResponsiveAppBar from '../components/navbar';
import dotenv from  'dotenv'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  
const ResultsPage = () => {
    const [ friendsOfFriends, setFriendsOfFriends ] = useState([])
    const [ friendsWithInterests, setFriendsWithInterests ] = useState([])
    useEffect(() => {
        const url = "https://74duznivyh.execute-api.us-east-1.amazonaws.com/prod/users/thefriendlyuser/recommendations"
        fetch(url)
        .then(response => response.json())
        .then(data => { setFriendsOfFriends(data.friendsOfFriends); setFriendsWithInterests(data.friendsWithInterests) })
        .catch(err => console.log('error : ' + err));
      });
    
    return (
        <div>
            <ResponsiveAppBar />
            <div>
                <div style = {{display : 'flex', flexWrap : 'wrap', marginTop : 40, padding : 20, justifyContent : 'center', alignContent : 'center'}}>
                    {
                        friendsOfFriends.map(friendOfFriend => <div key = {friendOfFriend[0]}> <Card sx={{ width: 275, marginRight : 10, marginTop : 10}}>
            
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                User
                                </Typography>
                                <Typography variant="h5" component="div">
                                {friendOfFriend[0]}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Skills
                                </Typography>
                                <Typography variant="body2">
                                Project Name
                                
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Follow</Button>
                            </CardActions>
                        </Card> </div>) 
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default ResultsPage;
