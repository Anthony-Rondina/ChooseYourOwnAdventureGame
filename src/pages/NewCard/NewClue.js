import { useRef } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar"

export default function NewClue(props) {
    const navigate = useNavigate();
    const img = useRef()
    const chapter = useRef()
    const cardNumber = useRef()
    const cardType = useRef()
    const description = useRef()
    const hasClue = useRef()
    const cluePrompt1 = useRef()
    const cluePrompt2 = useRef()
    const cardPrompt1 = useRef()
    const cardPrompt2 = useRef()
    const bonusValue = useRef()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("/api/clues/", {
                img: img.current.value, chapter: chapter.current.value, cardNumber: cardNumber.current.value, cardType: cardType.current.value, description: description.current.value, cluePrompt1: cluePrompt1.current.value, cluePrompt2: cluePrompt2.current.value, hasClue: hasClue.current.checked, bonusValue: bonusValue.current.value, cardPrompt1: cardPrompt1.current.value, cardPrompt2: cardPrompt2.current.value
            })
            navigate("/clues")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            {/* <Navbar /> */}
            <div className="newCardOuterWrapper">
                <div className="createNewCard">
                    <h1>Create New Clue</h1>
                    <a href="/clues"><button>Back to index</button></a>
                    <form onSubmit={handleSubmit}>
                        <p>Does the card have a picture?</p>
                        <input placeholder='Enter image link' type="text" ref={img} />
                        <p>What is the Chapter Name?</p>
                        <input placeholder='Ex: Chapter One' type="text" ref={chapter} />
                        <p>What is the clue's number?</p>
                        <input placeholder='Enter clue number' step=".1" type="number" ref={cardNumber} />
                        <p>What is the clue's type?</p>
                        <input placeholder='Enter clue type' type="text" ref={cardType} />
                        <p>What bonus does the card give?</p>
                        <input placeholder='Enter clue bonus' type="number" ref={bonusValue} />
                        <p>Does the clue have a clue attached?</p>
                        <input className="largeCheckBox" placeholder='Enter has clue?' type="checkbox" ref={hasClue} />
                        <p>Write what the clue says</p>
                        <textarea placeholder='Enter description' type="text" ref={description} />
                        <p>Write the clue's First Prompt</p>
                        <textarea placeholder='Enter description' type="text" ref={cluePrompt1} />
                        <p>Write the clue's Second Prompt</p>
                        <textarea placeholder='Enter description' type="text" ref={cluePrompt2} />
                        <p>Write the Card's Frist Prompt</p>
                        <textarea placeholder='Enter description' type="text" ref={cardPrompt1} />
                        <p>Write the Card's Second Prompt</p>
                        <textarea placeholder='Enter description' type="text" ref={cardPrompt2} />
                        <input type="submit" value="create New Clue" />
                    </form>
                </div>
            </div>
        </>
    )
}
