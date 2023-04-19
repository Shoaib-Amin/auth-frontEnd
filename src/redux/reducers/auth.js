import { LOGIN, SIGN_UP, LOGOUT } from '../actions'
const initialState = {
    user: null,
    isLoggedIn: false,
    token: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload.user,
                isLoggedIn: true,
                token: action.payload.token
            }
        case LOGOUT:
            return {
                ...state,
                user: null,
                isLoggedIn: false,
                token: ''
            }
        case SIGN_UP:
            return {
                ...state,
                user: action.payload.user,
                isLoggedIn: true,
                token: action.payload.token
            }
        default: return state
    }
}

export default authReducer