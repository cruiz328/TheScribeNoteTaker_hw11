const express = require('express');

// this creates a "server" object that we can use to listen for requests
const app = express();

const apiRoutes = require('./routes/api');
const htmlRoutes = require('./routes/html')

// Process.env is what's known as the environmental variable
const PORT = process.env.PORT || 5050;
// we can run many servers on 1 machine
// a port can only be listened to by 1 server at a time


app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use('/', htmlRoutes);

app.use('/api', apiRoutes);

// make our server listen for requests on our port, to respond to any requests
app.listen(PORT, () => { 
    console.log(`API server now on the port ${PORT}`); 
});