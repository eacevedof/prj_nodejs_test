//node_37.js
//http://www.acfo.org/www/uploads/minutes/73597218ca257c8e5e45ab51a68f2721.pdf 
//37

/*
Callbacks that will generate events
*/
(
    function fnCallMyself() 
    {
        setTimeout(function() 
        {
            console.log("Hello World!");
            fnCallMyself();
        },1000);
    }
)();