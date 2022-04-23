import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from "../../components/Navbar"
import { Posts } from '../../components/Posts'
import { Pagination } from '../../components/Pagination'
export default function CardIndex({ setEditCard }) {
    const [cards, setCards] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(10)



    useEffect(() => {
        (async () => {
            try {
                const fetchCards = async () => {
                    setLoading(true)
                    const response = await axios.get(`http://localhost:3001/api/cards/`)
                    setCards(response.data)
                    setLoading(false)
                }
                fetchCards();

            } catch (err) {
                console.log(`err`)
            }
        })()
    }, [])

    //Get Current Card
    const indexOfLastCard = currentPage * postsPerPage;
    const indexOfFirstCard = indexOfLastCard - postsPerPage;
    const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
        <>
            <Navbar />
            <Link to="/create"><button>Make a New Card</button></Link>
            <Posts setEditCard={setEditCard} cards={currentCards} loading={loading} />
            <Pagination postsPerPage={postsPerPage} totalPosts={cards.length} paginate={paginate} />
            {/* <div className="indexPage">

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
            </div > */}
        </>
    )
}