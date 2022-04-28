import { useRef } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar"

export default function NewCard(props) {
    const navigate = useNavigate();
    const img = useRef()
    const chapter = useRef()
    const cardNumber = useRef()
    const hasClue = useRef()
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


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log(`test`)
            const response = await axios.post("http://localhost:3001/api/cards/", {
                img: img.current.value, chapter: chapter.current.value, cardNumber: cardNumber.current.value, hasClue: hasClue.current.checked, hasChallenge: hasChallenge.current.checked, challengeTitle: challengeTitle.current.value, challengeImg: challengeImg.current.value, challengeDescription: challengeDescription.current.value, challengeType: challengeType.current.value, cardType: cardType.current.value, death: death.current.checked, choice1TransitionScentence: choice1TransitionScentence.current.value, choice2TransitionScentence: choice2TransitionScentence.current.value, choice3TransitionScentence: choice3TransitionScentence.current.value, choice4TransitionScentence: choice4TransitionScentence.current.value, returnTransitionScentence: returnTransitionScentence.current.value, sound: sound.current.value, description: description.current.value, chapterNumber: chapterNumber.current.value,
            })
            navigate("/cards")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            {/* <Navbar /> */}
            <div className="newCardOuterWrapper">
                <div className="createNewCard">
                    <h1>Create New Card</h1>
                    <a href="/cards"><button>Back to index</button></a>
                    <form onSubmit={handleSubmit}>
                        <p>Does the card have a picture?</p>
                        <input placeholder='Enter image link' type="text" ref={img} />
                        <p>What is the Chapter Name?</p>
                        <input placeholder='Ex: Chapter One' type="text" ref={chapter} />
                        <p>What is the Card's number?</p>
                        <input placeholder='Enter card number' step=".1" type="number" ref={cardNumber} />
                        <p>Does the card have a clue attached?</p>
                        <input className="largeCheckBox" placeholder='Enter has clue?' type="checkbox" ref={hasClue} />
                        <p>Does this card have a challenge?</p>
                        <input className="largeCheckBox" placeholder='Enter challenge?' type="checkbox" ref={hasChallenge} />
                        <p>Enter the challenge's Title</p>
                        <input placeholder='Enter challenge Title' type="text" ref={challengeTitle} />
                        <p>Enter the challenge's image</p>
                        <input placeholder='Enter challenge image' type="text" ref={challengeImg} />
                        <p>Enter the challenge's description</p>
                        <input placeholder='Enter challenge description' type="text" ref={challengeDescription} />
                        <p>What type of challeng is it?</p>
                        <textarea placeholder='Enter challenge type(s)' type="text" ref={challengeType} />
                        <p>Enter card type</p>
                        {/* make drop down choice here */}
                        <input placeholder='Enter enter card type' type="text" ref={cardType} />
                        <p>Does this card kill the player?</p>
                        <input className="largeCheckBox" placeholder='Enter death' type="checkbox" ref={death} />
                        <p>Enter choice 1 prompt</p>
                        <input placeholder='Enter choice 1 scenetence' type="text" ref={choice1TransitionScentence} />
                        <p>Enter choice 2 prompt</p>
                        <input placeholder='Enter choice 2 scentence' type="text" ref={choice2TransitionScentence} />
                        <p>Enter choice 3 prompt</p>
                        <input placeholder='Enter choice 3 scenetence' type="text" ref={choice3TransitionScentence} />
                        <p>Enter choice 4 prompt</p>
                        <input placeholder='Enter choice 4 scentence' type="text" ref={choice4TransitionScentence} />
                        <p>Enter return prompt</p>
                        <input placeholder='Enter return scentence' type="text" ref={returnTransitionScentence} />
                        <p>Enter</p>
                        <input placeholder='Enter sound link' type="text" ref={sound} />
                        <p>Write what the card says</p>
                        <textarea placeholder='Enter description' type="text" ref={description} />
                        <p>Enter chapter number</p>
                        <input placeholder='Enter chapter number' type="number" ref={chapterNumber} />
                        <input type="submit" value="create New Card" />
                    </form>
                </div>
            </div>
        </>
    )
}
