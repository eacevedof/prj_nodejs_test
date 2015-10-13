/**
 * @author Eduardo Acevedo Farje.
 * @link: www.eduardoaf.com
 * @file index_3.js 
 * @version: 1.0.0
 * @name: 
 * @date: 09-10-2015 14:19 (SPAIN)
 * @observations: core library.
 * @requires:
 */
/*
En este ejemplo hago una demostración del bucle único que maneja node y hago que se bloquee
de modo que las llamadas por el resto de clientes (hosts) no son atendidas.

con este codigo en PHP el servidor sigue contestando:
<?PHP
$a = session_id();
if(empty($a)) session_start();
echo "SID: ".SID."<br>session_id(): ".session_id()."<br>COOKIE: ".$_COOKIE["PHPSESSID"];
$i=0;
while($i<1000000) 
{
    $i++;
	echo "<br>";
	echo "i : $i";
}

?>

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
    var sMessage = "this is a content!! for:"+process.pid;
    var oOptions = {host: "www.eduardoaf.com",port:"80",path:"/"};
    
    var i = 0;

    //Event loop graphic: http://i.stack.imgur.com/BTm1H.png
    //the event loop is stuck here, on this while loop
    console.log("before while");
    while(i<70000)
    {
        i++;
        console.log("while: "+i);
    }
    console.log("after while");
    
    oHttp.get(oOptions,fn_on_getresponse).on("error",fn_on_geterror);
    //oUtils.bug(oRequest);
    oResponse.writeHead(200,{"Content-Type":"text/plain"});
    oResponse.end(sMessage);
};

//En cada petición
oHttp.createServer(fn_on_request).listen(oConfig.get_port(),oConfig.get_ip());

console.log("processid:"+process.pid);
console.log("Server running at: "+oConfig.get_ip()+":"+oConfig.get_port());
