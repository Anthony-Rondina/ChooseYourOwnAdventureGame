import { useState, useEffect, useRef } from "react"
import axios from "axios"
import Navbar from "../../components/Navbar"
import { useNavigate } from "react-router-dom";
export default function editClue({ editClue }) {
    const navigate = useNavigate();
    const img = useRef()
    const chapter = useRef()
    const cardNumber = useRef()
    const cardType = useRef()
    const description = useRef()
    const hasClue = useRef()
    const cluePrompt1 = useRef()
    const cluePrompt2 = useRef()
    const bonusValue = useRef()
    const cardPrompt1 = useRef()
    const cardPrompt2 = useRef()

    const handleClueSubmit = async (evt) => {
        evt.preventDefault()
        // ^ UNCAUGHT IN PROMISE ERROR ^
        try {
            console.log(`test`)
            // v NAVIGATE WORKS WHEN UNCOMMENTED v
            // navigate("/cards")
            // v CODE BREAKS HERE v
            await axios.put(`http://localhost:3001/api/clues/${editClue._id}`, {
                img: img.current.value, chapter: chapter.current.value, cardNumber: cardNumber.current.value, cardType: cardType.current.value, description: description.current.value, cluePrompt1: cluePrompt1.current.value, cluePrompt2: cluePrompt2.current.value, hasClue: hasClue.current.checked, bonusValue: bonusValue.current.value, cardPrompt1: cardPrompt1.current.value, cardPrompt2: cardPrompt2.current.value
            })
            console.log(`success!`)
            navigate(-1)
        } catch (err) {
            console.log(err)
        }
    }
    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3001/api/clues/${id}`, {
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
                    <h1>Edit This Clue</h1>
                    <a href="/clues"><button>Back to index</button></a>


                    <form onSubmit={(evt) => { handleClueSubmit(evt) }}>
                        <p>Does the clue have a picture?</p>
                        <input defaultValue={editClue.img} placeholder='Enter image link' type="text" ref={img} />
                        <p>What is the Chapter Name?</p>
                        <input defaultValue={editClue.chapter} placeholder='Ex: Chapter One' type="text" ref={chapter} />
                        <p>What is the clue's number?</p>
                        <input defaultValue={editClue.cardNumber} placeholder='Enter clue number' step=".1" type="number" ref={cardNumber} />
                        <p>What is the clue's type?</p>
                        <input defaultValue={editClue.cardType} placeholder='Enter clue type' type="text" ref={cardType} />
                        <p>What bonus does the card give?</p>
                        <input defaultValue={editClue.bonusValue} placeholder='Enter clue number' type="number" ref={bonusValue} />
                        <p>Does the clue have a clue attached?</p>
                        {editClue.hasClue ? <input className="largeCheckBox" placeholder='Enter has clue?' type="checkbox" ref={hasClue} defaultChecked /> : <input className="largeCheckBox" placeholder='Enter has clue?' type="checkbox" ref={hasClue} />}
                        <p>Write what the clue says</p>
                        <textarea defaultValue={editClue.description} placeholder='Enter description' type="text" ref={description} />
                        <p>Write the clue's First Prompt</p>
                        <textarea defaultValue={editClue.cluePrompt1} placeholder='Enter description' type="text" ref={cluePrompt1} />
                        <p>Write the clue's Second Prompt</p>
                        <textarea defaultValue={editClue.cluePrompt2} placeholder='Enter description' type="text" ref={cluePrompt2} />
                        <p>Write the Card's Frist Prompt</p>
                        <textarea defaultValue={editClue.cardPrompt1} placeholder='Enter description' type="text" ref={cardPrompt1} />
                        <p>Write the Card's Second Prompt</p>
                        <textarea defaultValue={editClue.cardPrompt2} placeholder='Enter description' type="text" ref={cardPrompt2} />
                        <input type="submit" value="Update the Clue" />
                    </form>
                    <button onClick={() => { handleDelete(editClue._id) }}>Delete Clue</button>
                </div>
            </div>
        </>
    )
}
