import styled from "styled-components";
import Button from "../components/Button";
import QuoteBlock from "../components/QuoteBlock";
import Typography from "../components/Typography";
import { useNavigate } from "react-router-dom";

const ButtonGroupContainer = styled.div`
    display: flex;
    column-gap: 16px;
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

export default function Home() {
    const navigate = useNavigate();

    return (
        <HomeContainer>
            <Typography.Display>My Quota</Typography.Display>
            <QuoteBlock quote="Họ cười tôi vì tôi không giống họ. Tôi cười họ vì họ không giống tôi." author="Lê Thành Long" />
            <ButtonGroupContainer>
                <Button>Randomize</Button>
                <Button variant="secondary" onClick={() => navigate("/quotes")}>Manage Quotes</Button>
            </ButtonGroupContainer>
        </HomeContainer>
    );
}