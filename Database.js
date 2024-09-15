import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/lexo_loot', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    contact_no: String
});

export const User = mongoose.model('User', userSchema);