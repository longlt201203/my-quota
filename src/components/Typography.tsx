import { styled } from "styled-components";

const Display = styled.p`
    font-family: ${props => props.theme.font.display}, serif;
    font-size: 3rem;
    font-weight: 600;
`;

const NormalText = styled.p`
    font-family: ${props => props.theme.font.normalText}, serif;
    font-size: 1rem;
`;

const Quote = styled.p`
    font-family: ${props => props.theme.font.normalText}, serif;
    font-size: 1rem;
    letter-spacing: .05rem;
    font-style: italic;
    line-height: 1.2;
`;

const Typography = {
    Display,
    NormalText,
    Quote
};

export default Typography;