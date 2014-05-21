



model.Card.methods.salut = function(name,phone) {
	var q= ds.Card.find("organName = :1 and memberPhone = :2" , name , phone);
	return q;
};
model.Card.methods.salut.scope="public";

model.Card.methods.search = function(phone,name) {
	
	
	this.query("'organName' ==:1 AND 'memberPhone' ==:2", { params: [name + "*"]},phone);

};
