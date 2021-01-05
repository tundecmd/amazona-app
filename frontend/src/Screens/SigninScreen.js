import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

const SigninScreen = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirect = props.location.search ? props.location.search.split('=')[1] : '/';
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo, loading, error } = userSignin;

    const dispatch = useDispatch();
    const submitHandler = e => {
        e.preventDefault();
        dispatch(signin(email, password))
    }
    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect )
        }
    }, [userInfo, redirect, props.history])
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Sign in</h1>
                </div>
                { loading && <LoadingBox /> }
                { error && <MessageBox variant='danger'>{error}</MessageBox> }
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' 
                        placeholder='Email' 
                        required 
                        onChange={ e => setEmail(e.target.value) } 
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' 
                        placeholder='Password' 
                        required 
                        onChange={ e => setPassword(e.target.value) } 
                    />
                </div>
                <div>
                    <label/>
                    <button type='submit' className='primary' >Sign In</button>
                </div>
                <div>
                    <label/>
                    <div>
                         New Customer ? {' '}
                         <Link to={`/register?redirect=${redirect}`}>Create Your Account</Link>
                    </div>
                </div>
            </form>            
        </div>
    )
}

export default SigninScreen;
