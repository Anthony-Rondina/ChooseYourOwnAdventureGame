import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from "../../components/Navbar"
import { Clues } from '../../components/Clues'
import { Pagination } from '../../components/Pagination'
export default function ClueCardIndex({ setEditClue }) {
    const [cards, setCards] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(10)



    useEffect(() => {
        (async () => {
            try {

                setLoading(true)
                const response = await axios.get(`http://localhost:3001/api/clues/`)
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
            {/* <Navbar /> */}
            <div className='newCardButton'>
                <Link to="/createClue"><button id='red'>Make a New Clue</button></Link>


                <Clues setEditClue={setEditClue} clues={currentCards} loading={loading} />
                <Pagination postsPerPage={postsPerPage} totalPosts={cards.length} paginate={paginate} />
            </div>
        </>
    )
}