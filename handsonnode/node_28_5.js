//node_28_5.js
//http://www.acfo.org/www/uploads/minutes/73597218ca257c8e5e45ab51a68f2721.pdf 
//28

/*
Functions are first-class objects
In fact, there are no second-class objects in JavaScript. JavaScript is the ultimate object-oriented
language, where everything is indeed, an object. As that, a function is an object where you can set
properties, pass it around inside arguments and return them. Always a pleasure.
Example:
*/
var schedule = function(iMsTimeout,fnCallback) 
{
    var st = " - var st;";
    return {
        start: function() 
        {
            
            //este metodo puede acceder a st
            console.log("launched method start, timeout:"+iMsTimeout);
            setTimeout(fnCallback,iMsTimeout);
        }
    };
};

(
    //console.log("scope launching"); esto da error
    function() 
    {

        var iMsTimeout = 1000; // 1 second
        var iCount = 0;
        
        schedule
        (
            //schedule.start() hace esto: setTimeout(fnCallmyself,iMsTimeout);
            iMsTimeout
            //esta funcion debe llevar nombre para poder instanciarse a si misma 
            //TODO. Hacer ejemplo con funcion anonima y funcion externa
            ,function fnCallmyself() 
            {
                console.log("iCount:"+iCount);
                console.log(++ iCount);
                schedule(iMsTimeout,fnCallmyself).start();
            }
        ).start();
    }

)();

