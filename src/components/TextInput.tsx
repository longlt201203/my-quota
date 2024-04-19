import styled from "styled-components";

const TextInput = styled.input`
    font-size: 1rem;
    font-family: ${props => props.theme.font.normalText}, serif;
    border: none;
    outline: none;
    border-bottom: 1px solid;
    width: 100%;
`;

export default TextInput;