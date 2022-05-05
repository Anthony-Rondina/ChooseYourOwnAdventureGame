import { useEffect, useState } from "react"
import { logout } from '../utilities/users-service'

import { Link } from "react-router-dom"
export default function Navbar({ user, setUser, setShowLogin, showLogin }) {
    function handleLogOut() {
        logout();
        setUser(null);
    }
    return (
        <header>

            <div className="user">
                {user ?
                    <>
                        <span>{`Welcome ${user.name}!`}</span>
                        <span className="logoutButton" onClick={handleLogOut}>LOG OUT</span>
                    </>
                    :
                    <span className="logoutButton" onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</span>}

            </div>
            <div className="navMiddle">
                <div className="logoNav">CHOOSE YOUR OWN ADVENTURE</div>
                <div className="linkBar">
                    <p>|</p>
                    <a href="/feedback"><p>Feedback</p></a>
                    <p>|</p>
                    <a href="/"><p>Play the Game!</p></a>
                    <p>|</p>
                    <a href="/howto"><p>How to Play</p></a>
                    <p>|</p>
                    <a href="https://www.zmangames.com/en/products/choose-your-own-adventure-house-danger/" target="_blank"><p>Buy the Game!</p></a>
                    <p>|</p>
                    {user ? user.admin ?
                        <>
                            <a href="/cards"><p>Go to card Index</p></a>
                            <p>|</p>
                            <a href="/clues"><p>Go to Clue Index</p></a>
                            <p>|</p>
                        </>
                        :
                        ''
                        :
                        ''}
                </div>
            </div>
            <div className="me-box">
                <a href={'//www.linkedin.com/in/arondina'} target="_blank" >
                    <img className="anthony" src="https://i.imgur.com/KnCMI31.jpg" alt="Anthony" />
                </a>
                {/* <p>Made By: Anthony Rondina</p> */}
            </div>
        </header>
    )
}