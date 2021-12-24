import React from 'react';
import ResponsiveAppBar from '../components/navbar';

const LoggedInPage = () => {

    return (
        <div>
            <ResponsiveAppBar />
            <div style = {{ marginTop : 400, fontSize : 35, fontWeight : 200 }}>You're logged in.</div>
            <div style = {{ fontSize : 50, fontWeight : 500 }}>Hit the Find Tab to get started!</div>
        </div>
    )
}
export default LoggedInPage;