const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// Sets up view engine and views folder
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware for parsing incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

//routes
const indexRouter = require('./routes/index');

// Using routes
app.use('/', indexRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error'); // Render an error page
});

// Starts the server
const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

