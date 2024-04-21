import { Router } from "express";
import db from "../db.js";

const QuotesRouter = Router();

QuotesRouter.get("/random", (req, res) => {
    const quotes = db.getQuotes();
    const index = Math.floor(Math.random() * quotes.length);
    res.status(200).send(quotes[index]);
});

QuotesRouter.get("/", (req, res) => {
    const query = req.query;
    const page = parseInt(query.page || "0");
    res.status(200).send(db.getQuotes(page));
});

QuotesRouter.post("/", (req, res) => {
    const dto = req.body;
    db.addQuote(dto);
    res.status(201).send("Add quote successfully!");
});

QuotesRouter.put("/", (req, res) => {
    const dto = req.body;
    db.updateQuote(dto);
    res.status(200).send("Update quote successfully!");
});

QuotesRouter.delete("/:id", (req, res) => {
    const { id } = req.params;
    db.deleteQuote(id);
    res.status(200).send("Delete quote successfully!");
});

export default QuotesRouter;