import React, { FC } from 'react';
import arrowLeft from '@images/arrowLeft.svg';
import arrowRight from '@images/arrowRight.svg';
import { StyledReactPaginate } from './Paginate.styled';
import { PaginateProps } from './types';

export const Paginate: FC<PaginateProps> = ({ pageQuery, pageCount, handlePageClick }) => {
    return (
        <StyledReactPaginate
            forcePage={+pageQuery - 1}
            marginPagesDisplayed={1}
            pageCount={pageCount}
            pageRangeDisplayed={10}
            onPageChange={handlePageClick}
            containerClassName="pagination flex-base"
            activeClassName="pagination_active item-base-layout"
            pageLinkClassName="pagination__page-link"
            breakLinkClassName="pagination__break-link"
            nextLinkClassName="pagination__next-link"
            previousLinkClassName="pagination__prev-link"
            pageClassName="pagination__page-item flex-base item-base-layout"
            breakClassName="pagination__break-item"
            nextClassName="pagination__next-item item-base-layout"
            previousClassName="pagination__prev-item item-base-layout"
            previousLabel={<img src={arrowLeft} alt="prev" />}
            nextLabel={<img src={arrowRight} alt="next" />}
        />
    );
};
