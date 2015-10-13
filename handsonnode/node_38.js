//node_38.js
//http://www.acfo.org/www/uploads/minutes/73597218ca257c8e5e45ab51a68f2721.pdf 
//23

/*
Blocking example

Here we are setting a timeout, on line 3, that invokes a function that will set the open variable to
true.
This function is set to be triggered in one second.
On line 30 we are waiting for the variable to become true.
We could be led to believe that, in one second the timeout will happen and set open to true, and that
the while loop will stop and that we will get “opened!” (line 11) printed.
But this never happens. Node will never execute the timeout callback because the event loop is stuck
on this while loop started on line 30, never giving it a chance to process the timeout event!

Esto en index.js hace que no atienda ninguna peticion con lo cual entiendo que ocupa todo el bucle principal
*/

var isOpen = false;
setTimeout(function() 
    {
        console.log("anonym func");
        isOpen = true;
    }
,1000)

//Event loop graphic: http://i.stack.imgur.com/BTm1H.png
//the event loop is stuck here, on this while loop
while(!isOpen){console.log("while");}

console.log('opened!');