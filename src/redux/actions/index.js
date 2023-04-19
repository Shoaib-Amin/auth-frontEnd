export const LOGIN = 'LOGIN'
export const SIGN_UP = 'SIGN_UP'
export const LOGOUT = 'LOGOUT'


export const login = (data) => {
    return {
        type: LOGIN,
        payload: data
    }
}

export const signUp = (data) => {
    return {
        type: SIGN_UP,
        // payload: newProduct
    }
}

export const logOut = () => {
    return {
        type: LOGOUT,
    }
}