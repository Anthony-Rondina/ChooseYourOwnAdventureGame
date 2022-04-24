import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar"
export default function StoryCardIndex(props) {
    const [cards, setCards] = useState({})
    const [toggle, setToggle] = useState(false)
    const [cardToggle, setCardToggle] = useState(false)
    const [clueToggle, setClueToggle] = useState(false)
    const [drawerToggle, setDrawerToggle] = useState(false)
    const [visionToggle, setVisionToggle] = useState(false)
    const [red, setRed] = useState(3)
    const [yellow, setYellow] = useState(3)
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
                // console.log(`cards is ${cards}`)
            }
        })()
    }

    const previousCardValue = (input) => {

        return `Go back to Card ${input}`

    }
    const toggleVisionView = () => {
        setVisionToggle(!visionToggle)
    }

    const toggleDrawerView = () => {
        setDrawerToggle(!drawerToggle)
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
    const resetRed = () => {
        setRed(3)
        console.log(red)
    }
    const increaseYellow = () => {
        if (yellow <= 9) {
            setYellow(yellow + 1)
        }
        console.log(yellow)
    }
    const decreaseYellow = () => {
        if (yellow >= 2) {
            setYellow(yellow - 1)
        }
        console.log(yellow)
    }
    const resetYellow = () => {
        setYellow(3)
        console.log(yellow)
    }
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/cards/6260bb10959680ed4d55cb28`)
                setCards(response.data.foundCard)
                // console.log(response.data.foundCard)
                // console.log(cards)
                // console.log(cards.description)
            } catch (err) {
                console.log(err)

            }
        })()
    }, [])

    useEffect(() => {

    }, [toggle, red])


    return (
        <main>
            <Navbar />
            <button className="openControls" onClick={toggleDrawerView}>Controls</button>

            {/* this shows that the previousCard object is there, but I cant reference it */}
            {console.log("the previous card is ", cards.previousCard)}
            {console.log("choice 1 is ", cards.choice1)}

            <img className="vision" onClick={toggleVisionView} src="https://i.imgur.com/feHfHsV.png" alt="vision" style={{ opacity: visionToggle ? "100" : "0", top: visionToggle ? "150px" : "-400px" }}></img>
            <div className="gameBoard">
                <div className="drawer" style={{
                    left: drawerToggle ? "0" : "-348px"
                }}>
                    <button className="controls closeWindow" onClick={toggleDrawerView}>x</button>
                    <div className="drawerContents">
                        <div className="counterWrapperRed">
                            <div className="counterButtons">
                                <button onClick={decreaseRed}>-</button>
                                <span className="readout">Psychic Meter</span>
                                <button onClick={increaseRed}>+</button>
                            </div>
                            <button className="reset" onClick={resetRed}>Reset</button>
                        </div>
                        <div className="counterWrapperYellow">
                            <div className="counterButtons">
                                <button onClick={decreaseYellow}>-</button>
                                <span className="readout">Danger Meter</span>
                                <button onClick={increaseYellow}>+</button>
                            </div>
                            <button className="reset" onClick={resetYellow}>Reset</button>
                        </div>
                        <a href="https://www.youtube.com/watch?v=XCKQgJ0Eqlg" target="_blank"><button className="music">Play Creepy Music</button></a>

                    </div>
                    <img className="drawerPic" src="https://i.imgur.com/zcaBRl6.png" alt="alternative text" />
                </div>
                <img className="board" onClick={toggleVisionView} src="https://i.imgur.com/bvCluet.png" alt="alternative text" />
                <img onClick={toggleCardView} className="deck" src="https://i.imgur.com/wawdxow.png" alt="alternative text" />
                <img onClick={toggleClueView} className="clue" src="https://i.imgur.com/UV0FA0B.png" alt="alternative text" />
                <img className={`yellowIcon yellow${yellow}`} src="https://i.imgur.com/WGFsmeS.png" alt="alternative text" />
                <img className={`redIcon red${red}`} src="https://i.imgur.com/VHepIiE.png" alt="alternative text" />
            </div>
            <div className={`cardBox`} style={{ opacity: cardToggle ? "100" : "0", right: cardToggle ? "0" : "-500px" }}>
                <div className="chapNumBox">
                    <button className="cardClose closeWindow" onClick={toggleCardView}>x</button>
                    <h2>{cards.chapter}</h2>
                    <h2>{`Card #${cards.cardNumber}`}</h2>
                </div>


                <img className="cardImage" src={cards.img}></img>
                <p className="cardDescription">{cards.description}</p>
                <hr className="style-seven" />
                <div className="optionDiv">
                    <p className="choiceOrReturn">Choice</p>
                    {
                        cards.choice2TransitionScentence ? <p className="cardOption" onClick={() => { getData(cards.choice2._id) }}>{cards.choice2TransitionScentence}</p> : ""
                    }
                    {
                        cards.choice3TransitionScentence ? <p className="cardOption" onClick={() => { getData(cards.choice3._id) }}>{cards.choice3TransitionScentence}</p> : ""
                    }
                    {
                        cards.choice4TransitionScentence ? <p className="cardOption" onClick={() => { getData(cards.choice4._id) }}>{cards.choice4TransitionScentence}</p> : ""
                    }
                    <p className="cardOption" onClick={() => { getData(cards.choice1._id) }}>{cards.choice1TransitionScentence}</p>
                </div>
                <hr className="style-seven" />
                <div className="optionDiv">
                    <p className="choiceOrReturn">Return</p>
                    <p className="cardOption" onClick={() => { getData(cards.previousCard._id) }}>{`Go back to Card `}</p>
                    {/* ${cards.previousCard.cardNumber} */}

                    {/* Load previous cards if there are any */}
                    {
                        cards.previousCard2 ? <p className="cardOption" onClick={() => { getData(cards.previousCard2._id) }}>{`Go back to Card `}</p> : ""
                    }
                    {
                        cards.previousCard3 ? <p className="cardOption" onClick={() => { getData(cards.previousCard3._id) }}>{`Go back to Card `}</p> : ""
                    }
                    {
                        cards.previousCard4 ? <p className="cardOption" onClick={() => { getData(cards.previousCard4._id) }}>{`Go back to Card `}</p> : ""
                    }

                </div>
            </div>
            <div className="clueBox" style={{ opacity: clueToggle ? "100" : "0", right: clueToggle ? "0" : "-500px    " }}>
                <button className="clueClose closeWindow" onClick={toggleClueView}>x</button>
                <h1>clue</h1>

            </div>
        </main>
    )
}