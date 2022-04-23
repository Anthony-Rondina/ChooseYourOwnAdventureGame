import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar"
export default function StoryCardIndex(props) {
    const [cards, setCards] = useState([])
    const [toggle, setToggle] = useState(false)
    const [cardToggle, setCardToggle] = useState(false)
    const [clueToggle, setClueToggle] = useState(false)
    const [red, setRed] = useState(3)
    const getData = (input) => {
        (async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/cards/${input}`)
                // console.log(response)
                setCards(response.data.foundCard)
                // console.log(cards)
                if (response.status === 200) {
                    setToggle(!toggle)
                } else {
                    console.log('Something went wrong')
                }
            } catch (err) {
                console.log(err)
                console.log(cards)
            }
        })()
    }
    const toggleCardView = () => {
        setCardToggle(!cardToggle)
    }
    const toggleClueView = () => {
        setClueToggle(!clueToggle)
    }
    const increaseRed = () => {
        if (red <= 7) {
            setRed(red + 1)
        }
        console.log(red)
    }
    const decreaseRed = () => {
        if (red >= 2) {
            setRed(red - 1)
        }
        console.log(red)
    }
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/cards/6260bb10959680ed4d55cb28`)
                console.log(response)
                setCards(response.data.foundCard)
                console.log(cards)
                console.log(`red is ${red}`)
            } catch (err) {
                console.log(err)
                console.log(cards)

            }
        })()
    }, [])

    useEffect(() => {

    }, [toggle, red])


    return (
        <main>
            <Navbar />
            <button onClick={increaseRed}>increase</button>
            <button onClick={decreaseRed}>decrease</button>
            <div className="gameBoard">

                <img className="board" src="https://i.imgur.com/bvCluet.png" />
                <img onClick={toggleCardView} className="deck" src="https://i.imgur.com/wawdxow.png" />
                <img onClick={toggleClueView} className="clue" src="https://i.imgur.com/UV0FA0B.png" />
                <img className="yellowIcon" src="https://i.imgur.com/WGFsmeS.png" />
                <img className={`redIcon red${red}`} src="https://i.imgur.com/VHepIiE.png" />
            </div>
            <div className={`cardBox`} style={{ opacity: cardToggle ? "100" : "0", right: cardToggle ? "0" : "-500px    " }}>
                <div className="chapNumBox">
                    <h2>{cards.chapter}</h2>
                    <h2>{`Card #${cards.cardNumber}`}</h2>
                </div>


                <h2>{cards.description}</h2>
                <button onClick={() => { getData(cards.previousCard) }}>{`Go back card`}</button>
                {
                    cards.choice2TransitionScentence ? <button onClick={() => { getData(cards.choice2._id) }}>{cards.choice2TransitionScentence}</button> : ""
                }
                {
                    cards.choice3TransitionScentence ? <button onClick={() => { getData(cards.choice3._id) }}>{cards.choice3TransitionScentence}</button> : ""
                }
                {
                    cards.choice4TransitionScentence ? <button onClick={() => { getData(cards.choice4._id) }}>{cards.choice4TransitionScentence}</button> : ""
                }
                <button onClick={() => { getData(cards.choice1._id) }}>{cards.choice1TransitionScentence}</button>
                <button onClick={toggleCardView}>x</button>
            </div>
            <div className="clueBox" style={{ opacity: clueToggle ? "100" : "0", right: clueToggle ? "0" : "-500px    " }}>
                <h1>clue</h1>
                <button onClick={toggleClueView}>x</button>
            </div>
        </main>
    )
}