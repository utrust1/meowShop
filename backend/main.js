const app = require("./server");
const db = require("./db/db");
const a = "Maamoun";

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server On ${PORT}`);
});