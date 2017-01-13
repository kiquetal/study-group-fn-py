"use strict";
function logParts()
{
 let stringParts=arguments[0];
 let values=[].slice.call(arguments,1);
 console.log("Strings: ",stringParts);
 console.log("Values: ",values);



}
logParts `1${2}3${4}${5}kiquetal`
