
class NewsControllers {
    // get /news
    index(req, res) {
        res.render('news');
    }
    // got /new/:slug
    show(req, res) {
        res.render('lalala')
    }
}

module.exports = new NewsControllers;