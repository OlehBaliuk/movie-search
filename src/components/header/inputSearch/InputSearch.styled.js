import styled from 'styled-components';

const InputSearchContainer = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
`;

const SearchList = styled.ul`
    display: block;
    position: absolute;
    padding: 10px;
    left: 0;
    top: 37px;
    width: 30vw;
    background-color: white;
    color: black;
    border: 2px solid rgb(46, 46, 46);
    border-radius: 5px;
    max-height: 205px;
    overflow: scroll;
    overflow-x: hidden;
    text-align: start;

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background: #ccc;
    }

    &::-webkit-scrollbar-thumb {
        background: orange;
    }
`;

export { InputSearchContainer, SearchList };
