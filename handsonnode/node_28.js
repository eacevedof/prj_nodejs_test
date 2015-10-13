//node_28.js
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
            setTimeout(fnCallback,iMsTimeout);
        }
    };
};

(
    function() 
    {
        var iMsTimeout = 1000; // 1 second
        var iCount = 0;
        schedule
        (
            iMsTimeout
            ,function fnCallmyself() 
            {
                console.log(++ iCount);
                schedule(iMsTimeout,fnCallmyself);
            }
        ).start(iMsTimeout);
    }

)();

