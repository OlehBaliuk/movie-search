import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

export const StyledReactPaginate = styled(ReactPaginate)`
    display: flex;
    justify-content: center;
    align-items: center;

    .item-base-layout {
        margin: 5px;
        width: 30px;
        height: 30px;
    }

    .flex-base {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & > .pagination__page-item.pagination_active {
        background: orange;
        border-radius: 5px;
    }

    & > li > a {
        color: white;
        cursor: pointer;
    }
`;
