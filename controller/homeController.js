exports.home = async (req, res) => {
    res.render('home', { message: 'Merhaba, Dünya!' });
}