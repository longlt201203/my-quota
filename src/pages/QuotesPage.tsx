import styled from "styled-components";
import Typography from "../components/Typography";
import Button from "../components/Button";
import Icons from "../components/Icon";
import Table from "../components/Table";
import { useNavigate } from "react-router-dom";
import TextInput from "../components/TextInput";
import { useEffect, useState } from "react";
import { Quote } from "../etc/quotes";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { fetchQuotes, getQuotes } from "../redux/quotes.reducer";
import axios from "axios";
import { toast } from "react-toastify";
import Pagination from "../components/Pagination";

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

const PaginationBufferContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export default function QuotesPage() {
    const navigate = useNavigate();
    const [newQuote, setNewQuote] = useState<Quote | null>(null);
    const [editingQuote, setEditingQuote] = useState<Quote | null>(null);

    const dispatch = useAppDispatch();
    const quotes = useAppSelector(getQuotes);

    useEffect(() => {
        dispatch(fetchQuotes());
    }, []);

    const handleAddQuote = () => {
        setNewQuote({ id: 0, content: "", author: "" });
    }

    const postQuote = () => {
        axios
            .post("/api/quotes", newQuote)
            .then(() => {
                toast.success("Add new quote successfully!");
                dispatch(fetchQuotes());
            })
            .catch((err) => {
                console.log(err);
                toast.error("Server error!");
            });
        setNewQuote(null);
    }

    const updateQuote = () => {
        axios
            .put("/api/quotes", editingQuote)
            .then(() => {
                toast.success("Update quote successfully!");
                dispatch(fetchQuotes());
            })
            .catch((err) => {
                console.log(err);
                toast.error("Server error!");
            });
        setEditingQuote(null);
    }

    const deleteQuote = (id: number) => {
        axios
            .delete("/api/quotes/" + id)
            .then(() => {
                toast.success("Delete quote successfully!");
                dispatch(fetchQuotes());
            })
            .catch((err) => {
                console.log(err);
                toast.error("Server error!");
            });
    }

    return (
        <QuotesPageContainer>
            <Typography.Display>Quotes</Typography.Display>
            <ButtonGroupContainer>
                <Button variant="secondary" onClick={() => navigate("/")}>Back To Home</Button>
            </ButtonGroupContainer>
            <TableAndControlsContainer>
                <TableControlsContainer>
                    <Button variant="primary" onClick={() => handleAddQuote()}>+ Add Quote</Button>
                </TableControlsContainer>
                <Table.Container>
                    <Table.Row header>
                        <Table.Item>#</Table.Item>
                        <Table.Item>Author</Table.Item>
                        <Table.Item>Content</Table.Item>
                        <Table.Item>Actions</Table.Item>
                    </Table.Row>
                    {newQuote && (
                        <Table.Row>
                            <Table.Item>{newQuote.id}</Table.Item>
                            <Table.Item>
                                <TextInput type="text" value={newQuote.author} onChange={(e) => setNewQuote({ ...newQuote, author: e.target.value })} />
                            </Table.Item>
                            <Table.Item>
                                <TextInput type="text" value={newQuote.content} onChange={(e) => setNewQuote({ ...newQuote, content: e.target.value })} />
                            </Table.Item>
                            <Table.Item>
                                <ActionButtonContainer>
                                    <Button variant="primary" onClick={() => postQuote()}><Icons.CheckIcon variant="dangerText" /></Button>
                                    <Button variant="danger" onClick={() => setNewQuote(null)}><Icons.BanIcon variant="dangerText" /></Button>
                                </ActionButtonContainer>
                            </Table.Item>
                        </Table.Row>
                    )}
                    {/* {quotes && quotes.map((item, index) => (
                        <Table.Row key={item.id}>
                            <Table.Item>{index+1}</Table.Item>
                            <Table.Item>
                                {editingQuote && editingQuote.id == item.id ? <TextInput type="text" value={editingQuote.author} onChange={(e) => setEditingQuote({ ...editingQuote, author: e.target.value })} /> : item.author}
                            </Table.Item>
                            <Table.Item>
                                {editingQuote && editingQuote.id == item.id ? <TextInput type="text" value={editingQuote.content} onChange={(e) => setEditingQuote({ ...editingQuote, content: e.target.value })} /> : item.content}
                            </Table.Item>
                            <Table.Item>
                                <ActionButtonContainer>
                                    <Button onClick={() => editingQuote && editingQuote.id == item.id ? updateQuote() : setEditingQuote(item)}>
                                        {editingQuote && editingQuote.id == item.id ? <Icons.CheckIcon variant="primaryText" /> : <Icons.EditIcon variant="primaryText" />}
                                    </Button>
                                    <Button variant="danger" onClick={() => deleteQuote(item.id)}><Icons.TrashCanIcon variant="dangerText" /></Button>
                                </ActionButtonContainer>
                            </Table.Item>
                        </Table.Row>
                    ))} */}
                </Table.Container>
                <PaginationBufferContainer>
                    <Pagination start={1} end={10} current={5} />
                </PaginationBufferContainer>
            </TableAndControlsContainer>
        </QuotesPageContainer>
    );
}