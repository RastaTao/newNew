
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var textField8 = {};	// @textField
	var button12 = {};	// @button
	var button10 = {};	// @button
	var button11 = {};	// @button
	var search = {};	// @textField
	var button9 = {};	// @button
	var logoutButton = {};	// @button
	var button1 = {};	// @button
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	textField8.keyup = function textField8_keyup (event)// @startlock
	{// @endlock
		var theName = $$("search").getValue();
		var session = WAF.directory.currentUser();
		var currentName= session.fullName;
		
		var firstQuery = $$("combobox1").getValue();
		
		sources.member.query(firstQuery+"== :1 AND orgName== :2", { params: ["*"+theName + "*",currentName]});
	};// @lock

	button12.click = function button12_click (event)// @startlock
	{// @endlock
		$("#button12").css("border-width","1px");
		$("#button12").css("border-style","inset");
		$("#button12").css("border-color","#ff5656");
		
		$("#button10").css("border-width","0px");
		$("#button11").css("border-width","0px");
		
		$$("members").hide();
		$$("cards").hide();
		$$("eventsDiv").show();
	};// @lock

	button10.click = function button10_click (event)// @startlock
	{// @endlock
		$("#button10").css("border-width","1px");
		$("#button10").css("border-style","inset");
		$("#button10").css("border-color","#ff5656");
		
		$("#button11").css("border-width","0px");
		$("#button12").css("border-width","0px");
		
		$$("members").show();
		$$("cards").hide();
		$$("eventsDiv").hide();
		
	};// @lock

	button11.click = function button11_click (event)// @startlock
	{// @endlock
		$("#button11").css("border-width","1px");
		$("#button11").css("border-style","inset");
		$("#button11").css("border-color","#ff5656");
		
		$("#button10").css("border-width","0px");
		$("#button12").css("border-width","0px");
		
		$$("members").hide();
		$$("cards").show();
		$$("eventsDiv").hide();
	};// @lock

	search.keyup = function search_keyup (event)// @startlock
	{// @endlock
		var theName = $$("search").getValue();
		var session = WAF.directory.currentUser();
		var currentName= session.fullName;
		
		var firstQuery = $$("combobox1").getValue();
		
		sources.member.query(firstQuery+"== :1 AND orgName== :2", { params: ["*"+theName + "*",currentName]});
	};// @lock

	button9.click = function button9_click (event)// @startlock
	{// @endlock
		sources.card.sync();
	};// @lock

	logoutButton.click = function logoutButton_click (event)// @startlock
	{// @endlock
		WAF.directory.logout();
		window.location = "/login"
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		debugger;
		$.post('/importPersonal',function(){alert("success");});
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		var session = WAF.directory.currentUser();
		var currentName= session.fullName;
		
		
		sources.organisation.query("name ==:1",currentName);
		sources.card.query("organName ==:1",currentName);
		sources.member.query("orgName ==:1",currentName);
		
		$$("message").setValue(session.fullName+" Admin Panel");
		
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("textField8", "keyup", textField8.keyup, "WAF");
	WAF.addListener("button12", "click", button12.click, "WAF");
	WAF.addListener("button10", "click", button10.click, "WAF");
	WAF.addListener("button11", "click", button11.click, "WAF");
	WAF.addListener("search", "keyup", search.keyup, "WAF");
	WAF.addListener("button9", "click", button9.click, "WAF");
	WAF.addListener("logoutButton", "click", logoutButton.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
