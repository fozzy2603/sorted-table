import React from "react";

const Pagination = ({currentPage, postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i)
    }
    return(
        <nav className="mt-3">
            <ul className="pagination">
                {pageNumbers.map(item => <li key={item} className={`page-item ${currentPage === item ? 'active' : ''}`}>
                    <a href="!#" onClick={e => {e.preventDefault(); paginate(item)}} className="page-link">{item}</a>
                </li>)}
            </ul>
        </nav>
    )
}

export default Pagination;