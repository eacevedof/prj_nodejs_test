//node_28_3.js
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
        console.log("1 function() this:");
        console.log(this);        
        var iMsTimeout = 1000; // 1 second
        var iCount = 0;
        
        schedule
        (
            iMsTimeout
            ,function fnCallmyself() 
            {
                console.log("fnCallmyself this:");
                console.log(this);
                /*
                { _idleTimeout: 1000,
                  _idlePrev: null,
                  _idleNext: null,
                  _idleStart: 1444242543286,
                  _monotonicStartTime: 10916595927,
                  _onTimeout: [Function: fnCallmyself],
                  _repeat: false }                
                */
                console.log("iCount:"+iCount);
                console.log(++ iCount);
                schedule(iMsTimeout,fnCallmyself);
            }
        ).start(iMsTimeout);
    }

)();

