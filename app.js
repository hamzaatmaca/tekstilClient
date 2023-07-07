const express = require('express');
const app = express();
const path = require("path")
const PORT = process.env.PORT || 9000


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('home', { message: 'Merhaba, Dünya!' });
});

// Sunucuyu dinlemeye başlayın
app.listen(3000, () => {
  console.log(`Server is running on port : ${PORT}`);
});