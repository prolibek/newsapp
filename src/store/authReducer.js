const authState = {
    loggedIn: false,
}

export const authReducer = (state = authState, action) => {
    switch(action.type) {
        case "LOGIN":
            return {...state, loggedIn: true}
        case "LOGOUT":
            return {...state, loggedIn: false}
        default:
            return state
    }
}