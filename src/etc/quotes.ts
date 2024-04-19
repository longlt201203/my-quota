import * as fs from "fs";

export interface Quote {
    id: number;
    author?: string;
    content: string;
}

export default class Quotes {
    private static instance: Quotes;
    static getInstance() {
        if (!this.instance) this.instance = new Quotes();
        return this.instance;
    }

    private readonly quotes: Quote[];
    private constructor() {
        if (!fs.existsSync("quotes.json")) fs.writeFileSync("quotes.json", "[]");
        this.quotes = JSON.parse(fs.readFileSync("quotes.json").toString()) as Quote[];
    }

    getData() {
        return this.quotes;
    }
}