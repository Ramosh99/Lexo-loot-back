import express from 'express';
import {User} from './Database.js';

const app = express();

//Middlewares =================================================>>>>

//parse incoming request with JSON payloads
app.use(express.json());


//===============================================================>>>


app.get('/hello', (req, res) => {
  res.send('Hello');
});

/* app.post('/users', async (req, res) => {
    const user = new User({
        name: req.body.name,
        age: req.body.age,
        contact_no: req.body.contact_no
    });

    try {
        const result = await user.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).send('User not found');
        res.send(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
}); */



// Step 4: Start the server and listen on a port
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
