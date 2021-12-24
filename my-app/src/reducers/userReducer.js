const UserReducer = (state, action) => {
    switch(action.type){
            case 'SET-USERNAME':
                return ({
                        username : action.payload
                }
                )
        default : 
            return state;
    }
}
 
export default UserReducer;