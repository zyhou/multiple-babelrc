import express from 'express';

const app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept',
    );
    next();
});

app.get('/', (req, res) => res.send('Hello World from server!'));

app.listen(3000, () => console.log('Listening on port 3000!'));
