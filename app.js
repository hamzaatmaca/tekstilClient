const express = require('express');
const app = express();
const path = require("path")
const PORT = process.env.PORT || 9000

//Import Router
const router = require("./router/router")

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Static
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);

app.get('*', function(req, res){
    res.render('404');
});

// Sunucuyu dinlemeye başlayın
app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`);
});