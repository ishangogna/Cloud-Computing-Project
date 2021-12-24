const AuthReducer = (state, action) => {
    switch(action.type){
        case 'AUTHENTICATE':
            return(
                {   ...state,
                    isAuthenticated : true
                }
            )
        case 'DE-AUTHENTICATE':
            return ({
                    ...state,
                    isAuthenticated : false
            }
            )
        default : 
            return state;
    }
}
 
export default AuthReducer;