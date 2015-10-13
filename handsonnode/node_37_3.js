//node_37_3.js
//http://www.acfo.org/www/uploads/minutes/73597218ca257c8e5e45ab51a68f2721.pdf 
//37

/*
Callbacks that will generate events
*/
var iCount = 0;
(
    function fnCallMyself(sSomeParam) 
    {
        if(sSomeParam) console.log(sSomeParam);
        //con esta variable incrementada dentro de fnSubcall
        function fnSubcall() 
        {
            iCount++;
            console.log("Hello World! "+iCount);
            //hace settimeout de fnSubcall que pone icount=0 y llama a fnsubcall que hace icount++
            fnCallMyself();
        }
        
        setTimeout(fnSubcall,1000);
    }
)("some text for fnCallMyself param");