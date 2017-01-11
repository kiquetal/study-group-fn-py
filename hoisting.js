(function ()
{
'use strict';
let myData=dameDefault();
if (true)
{
printSomething(myData);
let myData=dameNoDefault();
printSomething(myData);
}
})();
function printSomething(m)
{
console.log(m);
}

function dameNoDefault()
{

  return {"key2":"value2"};
}
function dameDefault()
{
  return {"key":"hola"};
}
