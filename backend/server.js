import express from 'express';

// Creating an app using Express
const app = express();
 
// Express's main purpose is to serve and listen on one route 
// Server is created
// app.get('/', (req, res) => {
//     res.send('Server is ready');
// });

// get a list of 5 jokes (special route)
app.get( '/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke',
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'This is another joke',
        },
        {
            id: 3,
            title: 'A third joke',
            content: 'This is a third joke',
        },
        {
            id: 4,
            title: 'A fourth joke',
            content: 'This is a fourth joke',
        },
        {
            id: 5,
            title: 'A fifth joke',
            content: 'This is a fifth joke',
        }
        
    ]
    res.send(jokes);
})


// The port can come from either an environment variable when deployed or you can hard-code it
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
