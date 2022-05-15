const express = require('express');

// this creates a "server" object that we can use to listen for requests
const app = express();

// const htmlRoutes = require('./routes/html')
// const apiRoutes = require('./routes/api');


// Process.env is what's known as the environmental variable
const PORT = process.env.PORT || 3001;
// we can run many servers on 1 machine
// a port can only be listened to by 1 server at a time


app.get(express.json());
app.get(express.static('public'));
app.get(express.urlencoded({ extended: true }));

// app.use('/', htmlRoutes);

// app.use('/api', apiRoutes);

// make our server listen for requests on our port, to respond to any requests
app.listen(PORT, () => { 
    console.log(`Listening for port/server ${PORT}`); 
});