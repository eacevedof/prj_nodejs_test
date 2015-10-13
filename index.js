/**
 * @author Eduardo Acevedo Farje.
 * @link: www.eduardoaf.com
 * @file server.js 
 * @version: 1.0.0
 * @name: 
 * @date: 16-12-2014 16:36 (SPAIN)
 * @observations: core library.
 * @requires:
 */

//IMPORTACIÓN DE MÓDULOS
//Main Node modules
var oHttp = require("http");
var oUrl = require("url");

//propios
var oUtils = require("./the_framework/utils");
var oConfig = require("./the_framework/config");
        
var fn_on_geterror = function(oError)
{
    oUtils.bug("There was an error: "+oError.message);
}

var fn_on_getresponse = function(oResponse)
{
    if(oResponse.statusCode==200)
    {
        oUtils.bug("the site is up");
    }
    else
    {
        oUtils.bug("the site is down");
    }
}

var fn_on_request = function(oRequest,oResponse)
{
    var sMessage = "this is a content!! for:"+oRequest.sessionID;
    var oOptions = {host: "www.eduardoaf.com",port:"80",path:"/"};
 
    oHttp.get(oOptions,fn_on_getresponse).on("error",fn_on_geterror);
    //oUtils.bug(oRequest);
    oResponse.writeHead(200,{"Content-Type":"text/plain"});
    oResponse.end(sMessage);
};

//En cada petición
oHttp.createServer(fn_on_request).listen(oConfig.get_port(),oConfig.get_ip());

console.log("processid:"+process.pid);
console.log("Server running at: "+oConfig.get_ip()+":"+oConfig.get_port());
