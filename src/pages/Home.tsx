import styled from "styled-components";
import Button from "../components/Button";
import QuoteBlock from "../components/QuoteBlock";
import Typography from "../components/Typography";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { fetchRandomQuote, getRandomQuote } from "../redux/quotes.reducer";
import { useEffect, useState } from "react";

const ButtonGroupContainer = styled.div`
    display: flex;
    column-gap: 16px;
`;

const IconSpan = styled.span`
    color: ${props => props.theme.color.primary.original};
`;

const HomeContainer = styled.div`
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 64px;
    row-gap: 64px;
`;

const animations = ["bounceIn", "fadeInDown", "flipInX", "flipInY", "zoomIn", "slideInUp"];

export default function Home() {
    const navigate = useNavigate();

    const randomQuote = useAppSelector(getRandomQuote);
    const dispatch = useAppDispatch();

    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        dispatch(fetchRandomQuote());
    }, []);

    useEffect(() => {
        if (index+1 < animations.length) {
            setIndex(prev => prev+1);
        } else {
            setIndex(0);
        }
    }, [randomQuote]);

    return (
        <HomeContainer>
            <Typography.Display>My <IconSpan>Q</IconSpan>uota</Typography.Display>
            {randomQuote && <QuoteBlock quote={randomQuote.content} author={randomQuote.author} containerProps={{ animation: animations[index] }} />}
            <ButtonGroupContainer>
                <Button variant="primary" onClick={() => dispatch(fetchRandomQuote())}>Randomize</Button>
                <Button variant="secondary" onClick={() => navigate("/quotes")}>Manage Quotes</Button>
            </ButtonGroupContainer>
        </HomeContainer>
    );
}