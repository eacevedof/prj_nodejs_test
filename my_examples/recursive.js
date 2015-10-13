//recursive.js 1.0.0
//http://materias.fi.uba.ar/6109/Maronna.pdf PROBABILIDAD Y ESTADISTICA
(
    function fn_recursive(iFrom,iLast)
    {
        console.log(iFrom);
        iFrom++;
        if(iFrom<=iLast)
        {
            fn_recursive(iFrom,iLast);
        }
    }
)(10,10)