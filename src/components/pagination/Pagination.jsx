import ReactPaginate from 'react-paginate';

import "../../reactPagination.css";

const Pagination = ({ pageCount, handlePageClick }) => {
    
    return (
        <div className='flex justify-center items-center'>
            <ReactPaginate 
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}

                // style
                containerClassName='pagination'
                pageLinkClassName='page-num'
                previousLinkClassName='page-num'
                nextLinkClassName='page-num'
                activeLinkClassName='active'
            />
        </div>
    )
}

export default Pagination
