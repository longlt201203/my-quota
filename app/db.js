import fs from "fs";

function Db() {
    if (!fs.existsSync("quotes.json")) fs.writeFileSync("quotes.json", "[]");
    const quotes = JSON.parse(fs.readFileSync("quotes.json").toString());

    return {
        getQuotes: () => quotes,
        addQuote: (quote) => {
            quote.id = quotes.length+1;
            quotes.push(quote);

            fs.writeFileSync("quotes.json", JSON.stringify(quotes));
        },
        updateQuote: (quote) => {
            const index = quotes.findIndex(item => item.id == quote.id);
            quotes[index] = {...quote};
            fs.writeFileSync("quotes.json", JSON.stringify(quotes));
        },
        deleteQuote: (id) => {
            const index = quotes.findIndex(item => item.id == id);
            quotes.splice(index, 1);
            fs.writeFileSync("quotes.json", JSON.stringify(quotes));
        }
    };
}

const db = Db();

export default db;