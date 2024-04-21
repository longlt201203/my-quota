import styled from "styled-components";
import Typography from "./Typography";

interface QuoteBlockContainerProps {
    animation?: string;
}

export interface QuoteBlockProps {
    quote: string;
    author?: string;
    containerProps?: QuoteBlockContainerProps;
}

const QuoteBlockContainer = styled.div<QuoteBlockContainerProps>`
    padding: 64px;
    background-color: #D0EFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 24px;
    width: 100%;
    ${props => props.animation && `animation: ${props.animation} 1s;`}
`;

const Quote = styled(Typography.Quote)`
    font-size: 24px;
`;

const Author = styled(Typography.NormalText)`
    opacity: .7;
`;

export default function QuoteBlock(props: QuoteBlockProps) {
    return (
        <QuoteBlockContainer {...props.containerProps}>
            <Quote>"{props.quote}"</Quote>
            {props.author && <Author>— {props.author}</Author>}
        </QuoteBlockContainer>
    );
}