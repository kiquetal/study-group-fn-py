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



#### Part III



#### PART IV


#### PART V
 
