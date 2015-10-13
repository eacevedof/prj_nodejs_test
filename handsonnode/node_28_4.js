//node_28_4.js
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
    return {
        start: function() 
        {
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
        
        console.log("antes de llamar a schedule niv1");
    
        var jsnObject = schedule
        (
            iMsTimeout
            ,function fnCallmyself() 
            {
                console.log("iCount:"+iCount);
                console.log(++iCount);
                //console.log("antes de llamar a schedule niv2");
                //console.log("fnCallmyself:");
                //console.log(fnCallmyself);//[Function: fnCallmyself]
                schedule(iMsTimeout,fnCallmyself).start();
            }
        );
        
        console.log("jsnObject.start()");
        jsnObject.start(iMsTimeout);
        
        console.log("jsnObject:");
        console.log(jsnObject);   
    }

)();

