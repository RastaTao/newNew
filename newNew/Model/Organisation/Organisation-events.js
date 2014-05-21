


model.Organisation.password.onSet = function(value) {
	this.hashKey = directory.computeHA1(this.user, value);
};


model.Organisation.password.onGet = function() {
	return "*********"
};
