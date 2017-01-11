### Javascript Next (ECS7)

   Descripción de las nuevas característica del lenguaje, con sus nuevos `features`.
   Entendimiento de las nuevas funciones para consultas sobre http.
   Reconocimiento de nuevos patrones, con la idea de mejorar las actuales funciones utilizadas en los distintos programas.


#### Part I

##### Utilización de `let`
El `scope` pertenece al bloque máx próximo donde fue definido, esto es diferente cuando
se declara `var`, cuyo scope siempre es la función donde fue declarada.
    
El concepto de una variable cuando es accedida, antes de ser declarada, recibe el nombre
de `hoisting`.
    
 Cuando se quiere utilizar la variable antes de ser declarada, esto se sitúa en lugar llamado
`temporal dead zone` y la ejecución es interrupmida lanzando un error.
        
        
```javascript
{
    console.log(foo);
    let foo=2
}```


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

#### Part II



#### Part III



#### PART IV


#### PART V
 
