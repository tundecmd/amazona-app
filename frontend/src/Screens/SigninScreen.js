import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SigninScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const submitHandler = e => {
        e.preventDefault();
        // TODO: FOR SIGN IN
    }

    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Sign in</h1>
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
                    <label/>
                    <button type='submit' className='primary' >Sign In</button>
                </div>
                <div>
                    <label/>
                    <div>
                         New Customer ? {' '}
                         <Link to='/reister'>Create Your Account</Link>
                    </div>
                </div>
            </form>            
        </div>
    )
}

export default SigninScreen;
