directory.setLoginListener('customLogin',"Admin");
directory.setLoginListener('customLogin',"Organisation");
directory.setLoginListener('customLogin',"User");
addHttpRequestHandler(
'/importPersonal', 
'Modules/import.js', 
'doImportEmpsAndComps' 
);
addHttpRequestHandler("^/cors/", "utils/cors.js",  "handleCORSMethod");