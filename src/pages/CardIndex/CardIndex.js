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

                setLoading(true)
                const response = await axios.get(`http://localhost:3001/api/cards/`)
                setCards(response.data)
                setLoading(false)

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
            {/* <Navbar user={user} /> */}
            <div className='newCardButton'>
                <Link to="/createCard"><button>Make a New Card</button></Link>


                <Posts setEditCard={setEditCard} cards={currentCards} loading={loading} />
                <Pagination postsPerPage={postsPerPage} totalPosts={cards.length} paginate={paginate} />
            </div>
        </>
    )
}