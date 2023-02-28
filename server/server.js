// Require gives us a function from Express
const express = require('express');

// Create an instance of express by calling the function
    // Results in app becoming an object we can interact with
const app = express();

// Handy for when running multiple servers
    // Can be any number but
    // For us, it'll always be 5k
const port = 5000;

app.use( express.static( 'server/public' ) );

// an arrow function is a nameless function that executes where it's written
    // Whenever this server runs it'll select the 'port' (5k) port
    // and will let us know we're in the server
app.listen( port, () => {
    console.log( 'listening on port:', port );
});

const quoteList = require('./modules/quoteList.js');

// req = request, res = response
// Normal url is: http://localhost:5000/
// To use GET request: http://localhost:5000/quotes
    // /quotes can be called 'the path' or 'the route'
app.get( '/quotes', function(req, res) {
    console.log( 'Request for /quotes was made' );

    // send back the list of quotes
    // we can see in our browser
    res.send(quoteList);

    // Respond with status code
    // res.sendStatus(200);
        // in the future we can use these as confirmation things are working properly
    
    // Respond with status code and a thing
    // res.status(400).send('This request is broken');
})





