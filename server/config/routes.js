var auth = require('./../controllers/authors.js');
var path = require('path');
module.exports = function(app){
    //routes
    app.post('/create', auth.createAuthor);
    app.get('/allauthors', auth.getAuthors);
    app.put('/edit/:id', auth.update);
    app.get('/findauthor/:id', auth.show);
    app.delete('/delete/:id', auth.delete);


    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
      });
}