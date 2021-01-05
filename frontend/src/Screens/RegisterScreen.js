import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

const RegisterScreen = props => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const redirect = props.location.search ? props.location.search.split('=')[1] : '/';
    const userRegister = useSelector(state => state.userRegister);
    const { userInfo, loading, error } = userRegister;

    const dispatch = useDispatch();
    const submitHandler = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('password and confirm password do not match')
        } else {
            dispatch(register(fullname, email, password))
        }
        
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
                    <h1>Create Account</h1>
                </div>
                { loading && <LoadingBox /> }
                { error && <MessageBox variant='danger'>{error}</MessageBox> }
                <div>
                    <label htmlFor="fullname">Fullname</label>
                    <input type="text" id='fullname' 
                        placeholder='Full Name' 
                        required 
                        onChange={ e => setFullname(e.target.value) } 
                    />
                </div>
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
                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <input type="password" id='confirmpassword' 
                        placeholder='Confirm Password' 
                        required 
                        onChange={ e => setConfirmPassword(e.target.value) } 
                    />
                </div>
                <div>
                    <label/>
                    <button type='submit' className='primary' >Register</button>
                </div>
                <div>
                    <label/>
                    <div>
                         Already have an account ? {' '}
                         <Link to={`/signin?redirect=${redirect}`}>Sign In</Link>
                    </div>
                </div>
            </form>            
        </div>
    )
}

export default RegisterScreen;
