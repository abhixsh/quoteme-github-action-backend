import { parseStringPromise } from "xml2js";
import fs from "fs";

export const getQuotes = async (req, res) => {
  try {
    const xmlData = fs.readFileSync("quotes.xml", "utf-8");
    const result = await parseStringPromise(xmlData);
    const quotes = result.quotes.quote.map((q) => ({
      id: q.$.id,
      text: q.text[0],
      author: q.author[0],
    }));
    res.json(quotes);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch quotes." });
  }
};
