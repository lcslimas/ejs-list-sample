let express = require("express");
let app = express();
const port = process.env.PORT || 4000;

app.set("view engine", "ejs");

let quantity = 0;

app.use(express.json());

app.get("/", (req, res) => {
  itemId = undefined;
  res.render("index.ejs", { itemId, quantity });
});

app.get("/components/items", (req, res) => {
  try {
    quantity = req?.query?.quantity || 0;
    res.render("./templates/items/items.ejs", { quantity });
  } catch (e) {
    res.status(400).json({ error: "Invalid quantity." });
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
