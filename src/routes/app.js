const newRouter = require('./news')
const siteRouer = require('./site')

function route(app) {
    // router

    
app.use('/news', newRouter)
app.use('/', siteRouter)

 
}

module.exports = route;
