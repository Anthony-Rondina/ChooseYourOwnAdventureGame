import { useState } from 'react';
import LoginForm from '../../components/LoginForm';
import SignUpForm from '../../components/SignUpForm';
import Navbar from '../../components/Navbar';
export default function AuthPage({ setUser, showLogin }) {

    return (
        <div className='signInBlock' >
            {/* <Navbar /> */}
            <div className='innerSignIn'>

                {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
            </div>
        </div>
    );
}