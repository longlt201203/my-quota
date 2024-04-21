import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Quote } from "../etc/quotes";
import axios from "axios";
import { RootState } from "./store";

export const fetchRandomQuote = createAsyncThunk("quotes/fecthRandomQuote", async () => {
    console.log("fetchRandomQuote");
    const res = await axios.get<Quote>("/api/quotes/random");
    return res.data;
});

export const fetchQuotes = createAsyncThunk("quotes/fecthQuotes", async (page: number) => {
    console.log("fetchRandomQuote");
    const res = await axios.get<Quote[]>("/api/quotes/?page="+page);
    return res.data;
});

export interface QuotesState {
    randomQuote: Quote | null;
    quotes: Quote[];
    page: number;
    totalPages: number;
}

const initialState: QuotesState = {
    randomQuote: null,
    quotes: [],
    page: 1,
    totalPages: 0
}

export const quotesSlice = createSlice({
    name: "quotes",
    initialState,
    reducers: {
        setRandomQuote: (state, action: PayloadAction<Quote>) => {
            state.randomQuote = action.payload;
        }
    },
    extraReducers: builder => {
        console.log("extraReducers");

        builder.addCase(fetchRandomQuote.fulfilled, (state, action) => {
            state.randomQuote = action.payload;
        });

        builder.addCase(fetchQuotes.fulfilled, (state, action) => {
            state.quotes = action.payload;
        });
    }
});

export const { setRandomQuote } = quotesSlice.actions;

export const getRandomQuote = (state: RootState) => state.quotesReducer.randomQuote;
export const getQuotes = (state: RootState) => state.quotesReducer.quotes;

export default quotesSlice.reducer;