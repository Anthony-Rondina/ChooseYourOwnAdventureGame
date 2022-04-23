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
    const clue1 = useRef()
    const clue2 = useRef()
    const hasChallenge = useRef()
    const challengeTitle = useRef()
    const challengeImg = useRef()
    const challengeDescription = useRef()
    const challengeType = useRef()
    const cardType = useRef()
    const death = useRef()
    const choice1TransitionScentence = useRef()
    const choice2TransitionScentence = useRef()
    const choice3TransitionScentence = useRef()
    const choice4TransitionScentence = useRef()
    const returnTransitionScentence = useRef()
    const sound = useRef()
    const description = useRef()
    const chapterNumber = useRef()


    const handleSubmit = async (evt) => {
        evt.preventDefault()
        // ^ UNCAUGHT IN PROMISE ERROR ^
        try {
            console.log(`test`)
            // v NAVIGATE WORKS WHEN UNCOMMENTED v
            // navigate("/cards")
            // v CODE BREAKS HERE v
            await axios.put(`http://localhost:3001/api/cards/${editCard._id}`, {
                img: img.current.value, chapter: chapter.current.value, cardNumber: cardNumber.current.value, hasClue: hasClue.current.value, hasChallenge: hasChallenge.current.value, challengeTitle: challengeTitle.current.value, challengeImg: challengeImg.current.value, challengeDescription: challengeDescription.current.value, challengeType: challengeType.current.value, cardType: cardType.current.value, death: death.current.value, choice1TransitionScentence: choice1TransitionScentence.current.value, choice2TransitionScentence: choice2TransitionScentence.current.value, choice3TransitionScentence: choice3TransitionScentence.current.value, choice4TransitionScentence: choice4TransitionScentence.current.value, returnTransitionScentence: returnTransitionScentence.current.value, sound: sound.current.value, description: description.current.value, chapterNumber: chapterNumber.current.value,
            })

            // await axios.put(`http://localhost:3001/api/cards/${editCard._id}`, {
            //     img: img.current.value, chapter: chapter.current.value, cardNumber: cardNumber.current.value, choice1: choice1.current.value, choice2: choice2.current.value, previousCard: previousCard.current.value, hasClue: hasClue.current.value, clue1: clue1.current.value, clue2: clue2.current.value, hasChallenge: hasChallenge.current.value, challengeTitle: challengeTitle.current.value, challengeImg: challengeImg.current.value, challengeDescription: challengeDescription.current.value, challengeType: challengeType.current.value, cardType: cardType.current.value, death: death.current.value, choice1TransitionScentence: choice1TransitionScentence.current.value, choice2TransitionScentence: choice2TransitionScentence.current.value, returnTransitionScentence: returnTransitionScentence.current.value, sound: sound.current.value, description: description.current.value, chapterNumber: chapterNumber.current.value,
            // })

            // v THIS CODE NEVER RUNS v
            console.log(`success!`)
            navigate(-1)
        } catch (err) {
            console.log(`error`)
            console.log(err)
        }
    }
    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3001/api/cards/${id}`, {
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
            <Navbar />
            <div className="newCardOuterWrapper">
                <div className="createNewCard">
                    <h1>Create New Card</h1>
                    <a href="/cards"><button>Back to index</button></a>
                    <button onClick={() => { handleDelete(editCard._id) }}>Delete Card</button>

                    <form onSubmit={(evt) => { handleSubmit(evt) }}>
                        <p>Does the card have a picture?</p>
                        <input defaultValue={editCard.img} placeholder='Enter image link' type="text" ref={img} />
                        <p>What is the Chapter Name?</p>
                        <input defaultValue={editCard.chapter} placeholder='Enter chapter name' type="text" ref={chapter} />
                        <p>What is the Card's number?</p>
                        <input defaultValue={editCard.cardNumber} placeholder='Enter card number' type="number" ref={cardNumber} />
                        {/* <p>What is their first choice?</p>
                    <input defaultValue={editCard.choice1} placeholder='Enter choice 1' type="text" ref={choice1} /> */}
                        {/* <p>What is their second choice?</p>
                    <input defaultValue={editCard.choice2} placeholder='Enter choice 2' type="text" ref={choice2} /> */}
                        {/* <p>What is the previous card?</p>
                    <input defaultValue={editCard.previousCard} placeholder='Enter previous card' type="text" ref={previousCard} /> */}
                        <p>Does the card have a clue attached?</p>
                        <input className="largeCheckBox" placeholder='Enter has clue?' type="checkbox" ref={hasClue} />
                        {/* <p>Link first clue object</p>
                    <input defaultValue={editCard.clue1} placeholder='Enter clue 1' type="text" ref={clue1} />
                    <p>Link second clue object</p>
                    <input defaultValue={editCard.clue2} placeholder='Enter clue 2' type="text" ref={clue2} /> */}
                        <p>Does this card have a challenge?</p>
                        <input className="largeCheckBox" placeholder='Enter challenge?' type="checkbox" ref={hasChallenge} />
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
                        <input className="largeCheckBox" placeholder='Enter death' type="checkbox" ref={death} />
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
                </div>
            </div>
        </>
    )
}
