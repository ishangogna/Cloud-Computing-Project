import React from 'react';
import ResponsiveAppBar from '../components/navbar';
import LexChat from "react-lex-plus";


const FindPage = () => {
    return (
        <div>
            <ResponsiveAppBar />
            <div style = {{ marginTop : 400, fontSize : 35, fontWeight : 200 }}>Need to find a project or need a person for your project?</div>
            <div style = {{ fontSize : 50, fontWeight : 500 }}>We got you covered.</div>
            <LexChat
                botName="projectMatchingApp"
                IdentityPoolId="us-east-1:093c47ee-9fbd-4ff0-acf9-ba423f03519c"
                placeholder="Say hi to us."
                backgroundColor="#FFFFFF"
                height="430px"
                region="us-east-1"
                headerText="Let our Bot help you out there!"
                headerStyle={{ backgroundColor: "#ABD5D9", fontSize: "30px" }}
                greeting={
                    "Hello, how can I help? You can say things like 'help' to get more info"
                 }
                />
        </div>
    )
}

export default FindPage;
