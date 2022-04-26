import React from 'react'
import { Link } from 'react-router-dom'
export const Clues = ({ setEditClue, clues, loading }) => {
    if (loading) {
        return (
            <h2>Loading</h2>
        )
    }
    return (
        <div className="indexPage">
            {
                clues.map((clue,) => {
                    return (

                        <Link to={`/clues/${clue._id}`} onClick={() => { setEditClue(clue) }}><div className='indexCard'>
                            <p className='clueIndexCardNumber'>{`${clue.cardNumber}`}</p>
                            <p id='indexCardDetail'>{`The clue number is ${clue.chapter}`}</p>
                            {/* <img src={clue.img} /> */}
                        </div></Link>
                    )
                })
            }
        </div>
    )
}
