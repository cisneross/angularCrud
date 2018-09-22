var mongoose = require('mongoose');
var Author = mongoose.model('Author');
module.exports = {
    //methods
    createAuthor: (req,res)=>{
        console.log(req.body.name);
        Author.create({
            name: req.body.name,

        }, function(err, auth){
            if(err){
                res.json(err);
            }else{
                console.log(auth);
                res.json(auth);
            }
        })
    },
    getAuthors: (req,res)=>{
        Author.find({}, function(err, authors){
            if (err){
                console.log('errors');
                res.json(err);
            }
            else{
                console.log('found all the authors',authors);
                res.json(authors);
            }
        })
    },
    show: (req,res)=>{
        Author.findOne({_id: req.params.id}, function(err, auth){
            console.log('made it contorller', auth)
            console.log('got Author', err);
            if(err){
                res.json(err);
            }else{
                res.json(auth);
            }
        })
    },

    update: (req,res)=>{
        Author.findOne({_id: req.params.id}, function(err, auth){
            auth.name = req.body.name;
            auth.save(function(err){
                if(err){
                    res.json(err);
                }else{
                    res.json(auth);
                }
            })
        })
    },
    delete: (req,res)=>{
        Author.remove({_id:req.params.id}, function(err){
            if(err){
                console.log("how do you mess up deleting something?");
                res.json(err);
            }else{
                res.json({message: "Author Deleted"});
            }
        })
    }


}