const mongoose = require('mongoose');
const MONGOURI = 'mongodb+srv://gusparr28:27284401g@eventsdb.pcdqf.mongodb.net/eventsdb?retryWrites=true&w=majority'

mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Successfully connected to MongoDB');
});