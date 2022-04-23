import React from 'react'

export const Pagination = ({ paginate, postsPerPage, totalPosts }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav>
            <div className="pagination">
                {pageNumbers.map((number) => {
                    return (
                        <div className="page-item"><a onClick={() => paginate(number)} className='page-link'>{number}</a></div>
                    )
                })}
            </div>
        </nav >
    )
}