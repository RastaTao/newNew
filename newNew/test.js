

var y =ds.User.find("phone ==:1","222220");

var x = ds.Member.query("phone ==:1","1234567");
x;

//y.organisationList[1]=x[1];

x[0].addUser(y);
//x[1]

//y;

//var len = x.length;
//debugger;
//for (var i=0; i<len; i++) {
//	x[i].user;
//	x[i].save();
//};
