
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		var theUser = $$("userInput").getValue();
		var thePass = $$("passInput").getValue();
		if(WAF.directory.loginByPassword(theUser, thePass))
		{
//			$$("loginContainer").hide();
//			$$("containerBody").show();
			
			
			
			if (WAF.directory.currentUserBelongsTo("Administrator")) {
				window.location = "/index"
			} else if (WAF.directory.currentUserBelongsTo("Organisation")) {
				window.location = "/organisation"
			}

			
			//alert(session.belongsTo());
			
//			$$("welcomeText").setValue("Welcome to administration page, "+session.fullName+"!");
			
		}
		else {
			alert("MA TANK UR");
			  }
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
