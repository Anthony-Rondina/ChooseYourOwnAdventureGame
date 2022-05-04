import { useState, useEffect, useRef } from "react"
import axios from "axios"
import Navbar from "../../components/Navbar"
import { useNavigate } from "react-router-dom";
export default function EditCard({ editCard }) {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false)
    const img = useRef()
    const chapter = useRef()
    const cardNumber = useRef()
    const choice1 = useRef()
    const choice2 = useRef()
    const previousCard = useRef()
    const hasClue = useRef()
    const cluePrompt1 = useRef()
    const cluePrompt2 = useRef()
    const hasChallenge = useRef()
    const challengeTitle = useRef()
    const challengeImg = useRef()
    const challengeDescription = useRef()
    const challengeType = useRef()
    const cardType = useRef()
    const death = useRef(null)
    const choice1TransitionScentence = useRef()
    const choice2TransitionScentence = useRef()
    const choice3TransitionScentence = useRef()
    const choice4TransitionScentence = useRef()
    const returnTransitionScentence = useRef()
    const sound = useRef()
    const description = useRef()
    const chapterNumber = useRef()
    const h1 = useRef()


    const handleSubmit = async (evt) => {
        evt.preventDefault()
        // ^ UNCAUGHT IN PROMISE ERROR ^
        try {
            console.log(`test`)
            // v CODE BREAKS HERE v
            await axios.put(`http://localhost:3001/api/cards/${editCard._id}`, {
                img: img.current.value, chapter: chapter.current.value, cardNumber: cardNumber.current.value, hasClue: hasClue.current.checked, hasChallenge: hasChallenge.current.checked, challengeTitle: challengeTitle.current.value, challengeImg: challengeImg.current.value, challengeDescription: challengeDescription.current.value, challengeType: challengeType.current.value, cardType: cardType.current.value, death: death.current.checked, choice1TransitionScentence: choice1TransitionScentence.current.value, choice2TransitionScentence: choice2TransitionScentence.current.value, choice3TransitionScentence: choice3TransitionScentence.current.value, choice4TransitionScentence: choice4TransitionScentence.current.value, returnTransitionScentence: returnTransitionScentence.current.value, sound: sound.current.value, description: description.current.value, chapterNumber: chapterNumber.current.value, cluePrompt1: cluePrompt1.current.value, cluePrompt2: cluePrompt2.current.value
            })
            console.log(`success!`)
            navigate(-1)
            console.log(death.current.checked)
        } catch (err) {
            console.log(`error`)
            console.log(err)
        }
    }
    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`/api/cards/${id}`, {
            })
            if (response.status === 200) {
                navigate(-1)
            }

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            {/* <Navbar /> */}
            <div className="newCardOuterWrapper">
                <div className="createNewCard">
                    <h1 ref={h1}>Edit This Card</h1>
                    <a href="/cards"><button>Back to index</button></a>
                    <form onSubmit={(evt) => { handleSubmit(evt) }}>
                        <p>Does the card have a picture?</p>
                        <input defaultValue={editCard.img} placeholder='Enter image link' type="text" ref={img} />
                        <p>What is the Chapter Name?</p>
                        <input defaultValue={editCard.chapter} placeholder='Enter chapter name' type="text" ref={chapter} />
                        <p>What is the Card's number?</p>
                        <input defaultValue={editCard.cardNumber} placeholder='Enter card number' type="number" ref={cardNumber} />
                        <p>Does the card have a clue attached?</p>
                        {editCard.hasClue ? <input className="largeCheckBox" placeholder='Enter death' type="checkbox" ref={hasClue} defaultChecked /> : <input className="largeCheckBox" placeholder='Enter death' type="checkbox" ref={hasClue} />}
                        <p>Does this card have a challenge?</p>
                        {editCard.hasChallenge ? <input className="largeCheckBox" placeholder='Enter death' type="checkbox" ref={hasChallenge} defaultChecked /> : <input className="largeCheckBox" placeholder='Enter death' type="checkbox" ref={hasChallenge} />}
                        <p>Enter the challenge's Title</p>
                        <input defaultValue={editCard.challengeTitle} placeholder='Enter challenge Title' type="text" ref={challengeTitle} />
                        <p>Enter the challenge's image</p>
                        <input defaultValue={editCard.challengeImg} placeholder='Enter challenge image' type="text" ref={challengeImg} />
                        <p>Enter the challenge's description</p>
                        <input defaultValue={editCard.challengeDescription} placeholder='Enter challenge description' type="text" ref={challengeDescription} />
                        <p>What type(s)of challeng is it?</p>
                        <input defaultValue={editCard.challengeType} placeholder='Enter challenge type(s)' type="text" ref={challengeType} />
                        <p>Enter card type</p>
                        {/* make drop down choice here */}
                        <input defaultValue={editCard.cardType} placeholder='Enter enter card type' type="text" ref={cardType} />
                        <p>Does this card kill the player?</p>
                        {editCard.death ? <input className="largeCheckBox" placeholder='Enter death' type="checkbox" ref={death} defaultChecked /> : <input className="largeCheckBox" placeholder='Enter death' type="checkbox" ref={death} />}
                        <p>Enter clue 1 prompt</p>
                        <input defaultValue={editCard.cluePrompt1} placeholder='Enter clue 1 prompt' type="text" ref={cluePrompt1} />
                        <p>Enter clue 2 prompt</p>
                        <input defaultValue={editCard.cluePrompt2} placeholder='Enter clue 2 prompt' type="text" ref={cluePrompt2} />
                        <p>Enter choice 1 prompt</p>
                        <input defaultValue={editCard.choice1TransitionScentence} placeholder='Enter choice 1 scenetence' type="text" ref={choice1TransitionScentence} />
                        <p>Enter choice 2 prompt</p>
                        <input defaultValue={editCard.choice2TransitionScentence} placeholder='Enter choice 2 scentence' type="text" ref={choice2TransitionScentence} />
                        <p>Enter choice 3 prompt</p>
                        <input defaultValue={editCard.choice3TransitionScentence} placeholder='Enter choice 3 scenetence' type="text" ref={choice3TransitionScentence} />
                        <p>Enter choice 4 prompt</p>
                        <input defaultValue={editCard.choice4TransitionScentence} placeholder='Enter choice 4 scentence' type="text" ref={choice4TransitionScentence} />
                        <p>Enter return prompt</p>
                        <input defaultValue={editCard.returnTransitionScentence} placeholder='Enter return scentence' type="text" ref={returnTransitionScentence} />
                        <p>Enter</p>
                        <input defaultValue={editCard.sound} placeholder='Enter sound link' type="text" ref={sound} />
                        <p>Write what the card says</p>
                        <textarea defaultValue={editCard.description} placeholder='Enter description' type="text" ref={description} />
                        <p>Enter chapter number</p>
                        <input defaultValue={editCard.chapterNumber} placeholder='Enter chapter number' type="number" ref={chapterNumber} />
                        <input type="submit" value="Update the Card" />
                    </form>
                    <button onClick={() => { handleDelete(editCard._id) }}>Delete Card</button>
                </div>
            </div>
        </>
    )
}
