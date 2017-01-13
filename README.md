### Javascript Next (ECS7)

   Descripción de las nuevas característica del lenguaje, con sus nuevos `features`.
   
   Reconocimiento de nuevos patrones de diseño del lenguaje, tratando de mejorar las actuales funciones utilizadas en los distintos programas.


#### Part I

##### Utilización de `let`

    El `scope` pertenece al bloque máx próximo donde fue definido, esto es diferente cuando
    se declara `var`, cuyo scope siempre es la función donde fue declarada.
    
    El concepto de una variable cuando es accedida, antes de ser declarada, recibe el nombre
    de `hoisting`.
    
    Cuando se quiere utilizar la variable antes de ser declarada, esto se sitúa en lugar llamado
    `temporal dead zone` y la ejecución es interrumpida lanzando un error.
        
        
```javascript
    {
       console.log(foo);
       let foo=2
    }
```



Ejemplo del scope let
    
```javascript
    let num=0;
    function testNum()
    {
      if (!num) {
       let num=1;
      }
      return num;
    }
```

Reemplazando las IIFE's, utilizando let, para evitar crear funciones cuyo único objectivo es
`proteger` las variables.


```javascript
(function (namespace)
{
   var START_COUNT=0;
   var DEFAULT_STEP=1;
   
   
   var range=function(start,stop,step)
   {
   
   var arr=[];
   
   if (!step)
   {
   step=DEFAULT_STEP;
   }
   if (!stop)
   {
   stop=start;
   start=DEFAULT_STEP;
   }
   if (stop<start)
   {
    (function ()
    {
     var tmp=start;
     start=stop;
     stop=temp;
    })();
   }
   
   (function ()
   {
     var i;
     for (i=start;i<stop;i+=step)
     {
      arr.push(i);
     }
})()
   
   
    return arr;
   
   }
   return range(START_COUNT,20,1);

})("myLib");
```
Utilizando let

```javascript

(function (namespace)
{
   var START_COUNT=0;
   var DEFAULT_STEP=1;
   
   
   var range=function(start,stop,step)
   {
   
   var arr=[];
   
   if (!step)
   {
   step=DEFAULT_STEP;
   }
   if (!stop)
   {
   stop=start;
   start=DEFAULT_STEP;
   }
   if (stop<start)
   {
    let tmp=start;
     start=stop;
     stop=temp;
 
   }
   
   {
     let i;
     for (i=start;i<stop;i+=step)
     {
      arr.push(i);
     }
   }
   
   
    return arr;
   
   }
   return range(START_COUNT,20,1);

})("libLet");
```
#### Part II

##### Utilización de `const`

    Comparte las mismas caracteristicas que `let`, con la diferencia que también que la re-assignación esta prohibida.

    Surge debido a la inhabilidad de reassignar valor la confusión con llamarlo `inmutable`.
    
    Los `const` NO son inmutables.
    
    La assignación sólo significa la asociación de un nombre con respecto a la variable.
    La inmutabilidad es la propiedad que el valor alojado en la variable nunca cambia.
    
    
```javascript

const noInm={};

noInm["valor"]="value 1";
noInm["valor"]="value2";


```
     
      
     

#### Part III

##### Utilizando nuevos método para los Strings.

    .* String.prototype.startsWith
    .* String.prototype.endsWith
    .* String.prototype.includes
    .* String.prototype.repeat
    .* String.prototype.padStart
    .* String.prototype.padEnd
    
```javascript
'abc'.padStart(6);
//"   abc"

'abc'.padEnd(6);
//"abc   "

'abc'.padStart(6,'x')

//xxxabc

'abc'.padEnd(6,'x')

//abcxxx

```
         
     La propiedad de máxima longitud, determina la longitud del string luego de haber 
     completado con la repetición indicada.Si los carácteres a ser reemplazados, son mayores que
     el espacio para el reemplazo,el valor será truncado.
     
 ```javascript
 
 "abc".padStart(8,'123');
 "abc".padEnd(5,'123');
 ```

#### PART IV

##### Utilizando template literals

      Es una nueva forma que sirve para la cración de String, utilia el ```, para la demarcanción
      en lugar de las comillas o comillas dobles.
      
      let str=`Hello World`
      
      También se puede utilizar para las caracteristicas siguientes, 
      Interpolación de String, Multilinea and Tagging
      
      Interpolación de String:
      
```javascript
let interpolado= `You've ${cart.length} items in your cart`
let multiline=`Nuevas cosas
              segundas cosas`
```

#####  Tagging functions
      
    Es una propiedad algo parecida a los macros,donde podremos enviar por ejemplo
    porciones de html, para formatear y/o realizar modificaciones en la presentación
    como eliminado de espacios, formato de moneda,etc.
    


```javascript
function logParts()
{
  let stringParts=arguments[0];
  let values=[].slice.call(arguments,1);
  console.log('Strings:',stringParts);
  console.log(`Values`,values)

}


logParts`1${2}2${3}${4}`

```

```javascript
function stripWS()
{
  let stringParts=arguments[0];
  let values=[].slice.call(arguments,1);
  let str=stringParts.reduce(function (memo,nextPart){
   return memo + String(values.shift()) + nextPart;
  
  });
 return str.replace(/\n\s*/g,'');

function getProductsHtml(product)
{

 return stripWS` <div class="products">
           <div class="product-image">
           <div class="product-desc">${product.desc}</div>
           </div>
                 `

}


}


```



#### PART V
 
