import { useEffect, useState } from "react"
import { logout } from '../utilities/users-service'
export default function Navbar({ user, setUser, setShowLogin, showLogin }) {
    function handleLogOut() {
        logout();
        setUser(null);
    }
    return (
        <header>
            <div className="logo">CHOOSE YOUR OWN ADVENTURE</div>
            <div className="user">
                {user ?
                    <>
                        <span>{`Welcome ${user.name}!`}</span>
                        <span className="btn-sm" onClick={handleLogOut}>LOG OUT</span>
                    </>
                    :
                    <span className="logoutButton" onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</span>}

            </div>
            <div className="linkBar">
                <p>|</p>
                <a href="/"><p>Play The Game!</p></a>
                <p>|</p>
                <a href="/cards"><p>Go to card Index</p></a>
                <p>|</p>
                <a href="/clues"><p>Go to Clue Index</p></a>
                <p>|</p>
                <a href="https://www.zmangames.com/en/products/choose-your-own-adventure-house-danger/" target="_blank"><p>Buy the Game!</p></a>
                <p>|</p>
                <a href="/clues"><p>Feedback!</p></a>
                <p>|</p>
            </div>

        </header>
    )
}