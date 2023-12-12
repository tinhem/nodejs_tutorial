
class SiteControllers {
    // get /home
    home(req, res) {
        res.render('home');
    }
    // got /search
    search(req, res) {
        res.render('search')
    }
}

module.exports = new SiteControllers;