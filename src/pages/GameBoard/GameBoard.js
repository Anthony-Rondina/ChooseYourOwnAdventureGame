import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar"
import { Cardbox } from "../../components/Cardbox"
export default function StoryCardIndex() {
    const [cards, setCards] = useState({})
    const [clues, setClues] = useState({})
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
                const response = await axios.get(`/api/cards/${input}`)
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

    const openPopClue = (input) => {
        getClueData(input)
        toggleClueView()
    }
    const getClueData = (input) => {
        (async () => {
            try {
                const response = await axios.get(`/api/clues/${input}`)
                // console.log(response)
                setClues(response.data.foundClue)
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
                const response = await axios.get(`/api/cards/6260bb10959680ed4d55cb28`)
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
            <button className="openControls" onClick={toggleDrawerView}>Controls</button>

            {/* this shows that the previousCard object is there, but I cant reference it */}
            {console.log("the previous card is ", cards.previousCard)}
            {console.log("choice 1 is ", cards.choice1)}

            <img className="vision" onClick={toggleVisionView} src="https://i.imgur.com/feHfHsV.png" alt="vision" style={{ opacity: visionToggle ? "100" : "0", }}></img>
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
                    <p className="cardOption" onClick={() => { getData(cards.choice1._id) }}>{cards.choice1TransitionScentence}</p>
                    {
                        cards.choice2TransitionScentence ? <p className="cardOption" onClick={() => { getData(cards.choice2._id) }}>{cards.choice2TransitionScentence}</p> : ""
                    }
                    {
                        cards.choice3TransitionScentence ? <p className="cardOption" onClick={() => { getData(cards.choice3._id) }}>{cards.choice3TransitionScentence}</p> : ""
                    }
                    {
                        cards.choice4TransitionScentence ? <p className="cardOption" onClick={() => { getData(cards.choice4._id) }}>{cards.choice4TransitionScentence}</p> : ""
                    }

                </div>
                <hr className="style-seven" />
                {cards.death ? <div className="optionDiv">
                    {console.log(`death is ${cards.death}`)}
                    <p className="choiceOrReturn">Return</p>
                    <p className="cardOption" onClick={() => { getData(cards.deathRoute._id) }}>{cards.returnTransitionScentence}</p>
                    {/* ${cards.previousCard.cardNumber} */}

                    {/* Load previous cards if there are any */}
                    {
                        cards.deathRoute2 ? <p className="cardOption" onClick={() => { getData(cards.deathRoute2._id) }}>{cards.returnTransitionScentence2}</p> : ""
                    }

                    {
                        cards.deathRoute3 ? <p className="cardOption" onClick={() => { getData(cards.deathRoute3._id) }}>{cards.returnTransitionScentence3}</p> : ""
                    }

                </div> : ""}
                {cards.hasClue ? <div className="optionDiv">
                    <p className="choiceOrReturn">Clue</p>
                    {
                        cards.clue1 ? <p className="cardOption" onClick={() => { openPopClue(cards.clue1._id) }}>{cards.cluePrompt1}</p> : ""
                    }
                    {
                        cards.clue2 ? <p className="cardOption" onClick={() => { openPopClue(cards.clue2._id) }}>{cards.cluePrompt2}</p> : ""
                    }

                </div> : ""}

                <hr className="style-seven" />
            </div>
            <Cardbox clueToggle={clueToggle} getData={getData} clues={clues} toggleClueView={toggleClueView} getClueData={getClueData} />
            {/* <div className="clueBox" style={{ opacity: clueToggle ? "100" : "0", right: clueToggle ? "0" : "-500px    " }}>
                <div className="chapNumBox">
                    <button className="clueClose closeWindow" onClick={toggleClueView}>x</button>
                    <h2>{clues.chapter}</h2>
                    <h2>{`Clue: #${clues.cardNumber}`}</h2>
                </div>
                <img src={clues.img} />
                <p className="clue-description">{clues.description}</p>
                <h2 id="clickable" onClick={() => { getData(clues.choice1._id) }}>{clues.cardPrompt1}</h2>
                <h2 id="clickable" onClick={() => { getClueData(clues.clue1._id) }}>{clues.cluePrompt1}</h2>
                <h2 id="clickable" onClick={() => { getClueData(clues.clue2._id) }}>{clues.cluePrompt2}</h2>
            </div> */}

        </main >
    )
}