import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";
import { Pagination, Quote } from "../etc/types";

export const fetchRandomQuote = createAsyncThunk("quotes/fecthRandomQuote", async () => {
    const res = await axios.get<Quote>("/api/quotes/random");
    return res.data;
});

export const fetchQuotes = createAsyncThunk("quotes/fecthQuotes", async (page: number) => {
    const res = await axios.get<Pagination<Quote>>("/api/quotes?page="+page);
    return res.data;
});

export interface QuotesState {
    randomQuote: Quote | null;
    quotesData: Pagination<Quote>;
    page: number;
    totalPages: number;
}

const initialState: QuotesState = {
    randomQuote: null,
    quotesData: {
        data: [],
        page: 1,
        totalPages: 1
    },
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
        builder.addCase(fetchRandomQuote.fulfilled, (state, action) => {
            state.randomQuote = action.payload;
        });

        builder.addCase(fetchQuotes.fulfilled, (state, action) => {
            state.quotesData = action.payload;
        });
    }
});

export const { setRandomQuote } = quotesSlice.actions;

export const getRandomQuote = (state: RootState) => state.quotesReducer.randomQuote;
export const getQuotesData = (state: RootState) => state.quotesReducer.quotesData;

export default quotesSlice.reducer;