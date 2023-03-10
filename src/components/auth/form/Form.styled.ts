import styled from 'styled-components';

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 20%;
    justify-content: center;
    margin: 200px auto;
`;

const Input = styled.input`
    display: block;
    width: 100%;
    height: 45px;
    padding: 5px 10px;
    margin: 5px 0;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #bdbdbd;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export { FormContainer, Input };
