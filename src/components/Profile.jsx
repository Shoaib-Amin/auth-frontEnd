import React from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from '../redux/actions'

function Profile() {
    const dispatch = useDispatch()

    return (
        <div className='container'>
            <div>Profile page</div>
            <button onClick={() => dispatch(logOut())}>log out</button>
        </div>
    )
}

export default Profile