import fs from "fs";

function Db() {
    if (!fs.existsSync("quotes.json")) fs.writeFileSync("quotes.json", "[]");
    const quotes = JSON.parse(fs.readFileSync("quotes.json").toString());

    return {
        getRandomQuote: () => {
            const index = Math.floor(Math.random() * quotes.length);
            return quotes[index];
        },
        getQuotes: (page) => {
            const take = 10;
            const start = (page-1)*take;
            const end = start+take;

            const returnData = {
                page: page,
                totalPages: quotes.length > 0 ? Math.ceil(quotes.length / take) : 1,
                data: quotes.slice(start, end)
            };
            return returnData;
        },
        addQuote: (quote) => {
            quote.id = quotes.length > 0 ? quotes[quotes.length-1].id+1 : 1;
            quotes.unshift(quote);

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