var data = require("../data.json");

exports.addFriend = function(request, response) {    
	var name = request.query.name;
	var description = request.query.description;
	var newFriend = {"name": name, "description": description, "imageURL": "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY0NTkzMjM0MDUwMjk1MzQ5/james_holzhauer_ad_04-08-19_sn7966_square.jpg"};
	data.friends.push(newFriend);
	response.render('index', data);
 }