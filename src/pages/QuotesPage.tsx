import styled from "styled-components";
import Typography from "../components/Typography";
import Button from "../components/Button";
import Icons from "../components/Icon";
import Table from "../components/Table";
import { useNavigate } from "react-router-dom";
import TextInput from "../components/TextInput";
import { useState } from "react";
import { Quote } from "../etc/quotes";

const mockData = [
    {
        id: 1,
        author: "Le Thanh Long",
        content: "Họ cười tôi vì tôi không giống họ. Tôi cười họ vì họ không giống tôi."
    },
    {
        id: 2,
        author: "Le Thanh Long",
        content: "Họ cười tôi vì tôi không giống họ. Tôi cười họ vì họ không giống tôi."
    }
];

const ButtonGroupContainer = styled.div`
    display: flex;
    column-gap: 16px;
`;

const TableAndControlsContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    width: 100%;
`;

const TableControlsContainer = styled.div`
    display: flex;
    column-gap: 16px;
`;

const ActionButtonContainer = styled.div`
    display: flex;
    column-gap: 8px;
`;

const QuotesPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 64px;
    align-items: center;
    row-gap: 64px;
`;

export default function QuotesPage() {
    const navigate = useNavigate();
    const [editingQuote, setEditingQuote] = useState<Quote | null>(null);

    return (
        <QuotesPageContainer>
            <Typography.Display>Quotes</Typography.Display>
            <ButtonGroupContainer>
                <Button variant="secondary" onClick={() => navigate("/")}>Back To Home</Button>
            </ButtonGroupContainer>
            <TableAndControlsContainer>
                <TableControlsContainer>
                    <Button variant="primary">+ Add Quote</Button>
                </TableControlsContainer>
                <Table.Container>
                    <Table.Row header>
                        <Table.Item>#</Table.Item>
                        <Table.Item>Author</Table.Item>
                        <Table.Item>Content</Table.Item>
                        <Table.Item>Actions</Table.Item>
                    </Table.Row>
                    {mockData.map(item => (
                        <Table.Row key={item.id}>
                            <Table.Item>{item.id}</Table.Item>
                            <Table.Item>
                                {editingQuote && editingQuote.id == item.id ? <TextInput type="text" value={editingQuote.author} onChange={(e) => setEditingQuote({...editingQuote, author: e.target.value})} /> : item.author}
                            </Table.Item>
                            <Table.Item>
                                {editingQuote && editingQuote.id == item.id ? <TextInput type="text" value={editingQuote.content} onChange={(e) => setEditingQuote({...editingQuote, content: e.target.value})} /> : item.content}
                            </Table.Item>
                            <Table.Item>
                                <ActionButtonContainer>
                                    <Button onClick={() => editingQuote && editingQuote.id == item.id ? setEditingQuote(null) : setEditingQuote(item)}>
                                        {editingQuote && editingQuote.id == item.id ? <Icons.CheckIcon variant="primaryText" /> : <Icons.EditIcon variant="primaryText" />}
                                        
                                    </Button>
                                    <Button variant="danger"><Icons.TrashCanIcon variant="dangerText" /></Button>
                                </ActionButtonContainer>
                            </Table.Item>
                        </Table.Row>
                    ))}
                </Table.Container>
            </TableAndControlsContainer>
        </QuotesPageContainer>
    );
}