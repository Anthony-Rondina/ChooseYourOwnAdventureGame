import { useEffect, useState } from "react"

export default function MainPage(props) {

    return (
        <header>
            <div className="logo">CHOOSE YOUR OWN ADVENTURE</div>
            <div className="linkBar">
                <a href="/cards"><button>Go to card Index</button></a>
                <a href="https://www.zmangames.com/en/products/choose-your-own-adventure-house-danger/" target="_blank"><button>Buy the Game!</button></a>
            </div>

        </header>
    )
}