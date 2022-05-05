import React from 'react'
import { Link } from 'react-router-dom'
export const Posts = ({ setEditCard, cards, loading }) => {
    if (loading) {
        return (
            <h2>Loading</h2>
        )
    }
    return (
        <div className="indexPage">
            {
                cards.map((card,) => {
                    return (

                        <Link to={`/cards/${card._id}`} onClick={() => { setEditCard(card) }}><div className='indexCard'>
                            <p className='indexCardNumber'>{`${card.cardNumber}`}</p>
                            <p id='indexCardDetail'>{`Story Card ${card.cardNumber} for ${card.chapter}`}</p>
                        </div></Link>
                    )
                })
            }
        </div>
    )
}
