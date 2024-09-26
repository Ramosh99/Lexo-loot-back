import express from "express";

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello');
});

// Step 4: Start the server and listen on a port
const port = 3000||8080;
app.listen(port, () => {
  console.log(`Server is running on:${port}`);
});
