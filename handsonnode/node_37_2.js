//node_37_2.js
//http://www.acfo.org/www/uploads/minutes/73597218ca257c8e5e45ab51a68f2721.pdf 
//37

/*
Callbacks that will generate events
*/
(
    //Es equivalente a node_37.js
    function fnCallMyself() 
    {
        var fnSubcall = function() 
        {
            console.log("Hello World!");
            fnCallMyself();
        };
        setTimeout(fnSubcall,1000);
    }
)();