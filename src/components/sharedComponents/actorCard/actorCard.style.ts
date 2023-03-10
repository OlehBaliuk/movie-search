import styled from 'styled-components';

const ActorCardContainer = styled.div`
    margin: 10px;
    width: 130px;
    font-size: 14px;
`;

const ActorCardImage = styled.img`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 195px;
    object-fit: cover;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;

const ActorCardText = styled.div`
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: orange;
    height: 80px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px 5px;
`;

const ActorCardCharacter = styled.p`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

export { ActorCardContainer, ActorCardImage, ActorCardText, ActorCardCharacter };
