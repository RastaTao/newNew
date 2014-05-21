
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var leftMenu = {};	// @container
	var centerMenu = {};	// @container
// @endregion// @endlock

// eventHandlers// @lock

	leftMenu.click = function leftMenu_click (event)// @startlock
	{// @endlock
		window.location="/cards/index-smartphone.html"
	};// @lock

	centerMenu.click = function centerMenu_click (event)// @startlock
	{// @endlock
		window.location="/profile/index-smartphone.html"
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("leftMenu", "click", leftMenu.click, "WAF");
	WAF.addListener("centerMenu", "click", centerMenu.click, "WAF");
// @endregion
};// @endlock
