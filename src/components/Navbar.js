import { useEffect, useState } from "react"

export default function MainPage(props) {

    return (
        <header>
            <div className="logo">CHOOSE YOUR OWN ADVENTURE</div>
            <div className="linkBar">
                <a href="/"><p>Go to Game!</p></a>
                <p>|</p>
                <a href="/cards"><p>Go to card Index</p></a>
                <p>|</p>
                <a href="/clues"><p>Go to Clue Index</p></a>
                <p>|</p>
                <a href="https://www.zmangames.com/en/products/choose-your-own-adventure-house-danger/" target="_blank"><p>Buy the Game!</p></a>
            </div>

        </header>
    )
}