import styled from "styled-components";
import Typography from "./Typography";

export interface QuoteBlockProps {
    quote: string;
    author?: string;
}

const QuoteBlockContainer = styled.div`
    padding: 64px;
    background-color: #D0EFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 24px;
    width: 100%;
`;

const Quote = styled(Typography.Quote)`
    font-size: 24px;
`;

const Author = styled(Typography.NormalText)`
    opacity: .7;
`;

export default function QuoteBlock(props: QuoteBlockProps) {
    return (
        <QuoteBlockContainer>
            <Quote>"{props.quote}"</Quote>
            {props.author && <Author>— {props.author}</Author>}
        </QuoteBlockContainer>
    );
}