import React, { useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { login } from '../redux/actions'

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const [isSignUp, setIsSignUp] = useState(false)
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let { from } = location.state || { from: { pathname: "/" } };

    const loginHandle = async () => {
        if (!email || !password) return alert('Email and password required!')
        await axios({
            method: 'post',
            url: 'http://localhost:5000/api/auth/login',
            data: {
                email,
                password
            },
        }).then(res => {
            if (res.data.status === 200) {
                const { user, token } = res.data
                dispatch(login({
                    user,
                    token
                }))
                navigate(from)
            } else {
                alert(res.data.message)
            }
        }).catch(error => {
            alert(error.message)
        })

    }

    const signUpHandle = async () => {
        if (!userName || !email || !password) return alert('All fields required!')
        await axios({
            method: 'post',
            url: 'http://localhost:5000/api/auth/register',
            data: {
                userName,
                email,
                password
            },
        }).then(res => {
            if (res.data.status === 200) {
                const { user, token } = res.data
                dispatch(login({
                    user,
                    token
                }))
                navigate(from)
            }
        }).catch(error => {
            alert(error.response.data.message)
        })

    }

    const handleSubmit = () => {
        if (isSignUp) {
            signUpHandle()
            return
        }

        loginHandle()
    }

    return (
        <div className='container'>
            <strong>{isSignUp ? 'Please Sign-up!' : 'Please Login!'}</strong>
            {isSignUp &&
                <input
                    type='text'
                    placeholder='user name'
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                />}
            <input
                type='email'
                placeholder='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                type='password'
                placeholder='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>{isSignUp ? 'Sign up' : 'Login In'}</button>
            {isSignUp ?
                <p>Do you have an account? <span onClick={() => setIsSignUp(!isSignUp)}>Log-in</span></p> :
                <p>Don't have an accout? <span onClick={() => setIsSignUp(!isSignUp)}>sign-up</span></p>
            }
        </div>
    )
}

export default Login