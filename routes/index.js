exports.index = function(req, res){
    res.render('index.ejs', {title: 'TNT Main'}, function(err, stuff){
    	if (!err){
    		console.log(stuff);
    		res.write(stuff);
    		res.end();
    	}
    });
};