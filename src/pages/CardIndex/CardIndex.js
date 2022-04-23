import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function CardIndex({ setEditCard }) {
    const [cards, setCards] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/cards/`)

                setCards(response.data)

            } catch (err) {
                console.log(err)
            }
        })()
    }, [])


    return (
        <>
            <Link to="/create"><button>Make a New Card</button></Link>
            <a href="/"><button>Go to Game!</button></a>
            <div className="indexPage">

                {cards.map((card, idx) => {
                    return (
                        <div key={idx}>
                            <Link to={`/cards/${card._id}`} onClick={() => { setEditCard(card) }}><div className='indexCard'>
                                <h1>{`Card ${card.cardNumber}`}</h1>
                                <p>{`The card number is ${card.chapter}`}</p>
                            </div></Link>
                        </div>
                    )
                })}
            </div >
        </>
    )
}