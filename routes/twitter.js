exports.search = function(req, res){
	var hashtag1 = req.params.hashtag1,
		hashtag2 = req.params.hashtag2;

	res.render(require('path').normalize(__dirname + '/../views/twitter.ejs') , {
		title: 'Twitter Results',
		hashtag1: hashtag1,
		hashtag2: hashtag2
	})
};