const AuthReducer = (state, action) => {
    switch(action.type){
        case 'AUTHENTICATE':
            return(
                {
                    isAuthenticated : true
                }
            )
        case 'DE-AUTHENTICATE':
            return ({
                    isAuthenticated : false
            }
            )
        default : 
            return state;
    }
}
 
export default AuthReducer;