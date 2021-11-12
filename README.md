# week4_day4

## Main points: Query Strings & URL Params 

- Son accesibles tanto en GET como en POST.
- Sirven para pasar información limitada al servidor, usualmente para realizar una búsqueda en la BD.
- Se pueden cachear, permanecen en el historial y son visibles para el usuario.

- Query strings
  - En el navegador:
    ```html
      http://localhost:3000/tienda?size=L&color=red&type=shirt 
    ```
    - Es la parte de la url que comienza con **?** y contiene pares clave valor separados por **&** y **=**. 
    - También pueden ser enviadas por un formulario tipo GET.

    En el servidor:
    ```js
      router.get("/tienda)
    ```
    - En las rutas, se puede acceder a esta información por medio de **req.query**. 
    - En este ejemplo tendríamos disponible: ```req.query.size```, ```req.query.color``` y ```req.query.type```


- URL Params
  - En el navegador:
    ```html
      http://localhost:3000/detalles/618e3c162d6cfb24047d90d3 
    ```
    - Es una parte de la URL no identificable a simple vista. 

    En el servidor:
    ```js
      router.get("/detalles/:book_id)
    ```
    - En las rutas, es la parte del endpoint identificable por los **:**. 
    - Se puede acceder a esa información por medio de **req.params**.
    - En este ejemplo tendríamos disponible: ```req.params.book_id```.

  
  
## Main points: req.body.

- Solo es accesible desde POST.
- Sirve para pasar mayores volumenes de información al servidor.
- No es accesible por el usuario medio. Por lo tanto es más confidencial.
- En el cliente es enviado por un formulario tipo POST.

## Forms

- Para que un formulario pueda llegar al backend necesita disponer de los atributos:
  - action: indica el endpoint al que realizar la petición
  - method: indica el método de http que emplea, GET por defecto. 
- Los inputs han de tener:
  - name: conforman las claves del `req.body`. Un input con un `name="size"` genera un `req.body.size` si el formulario es de tipo POST.

## IronLauncher

- Ironlauncher es un generador de *boilerplate* que monta la estructura básica para el servidor. Hay dos formas posibles de emplearlo.
  - Instalación global.
    Primero lo instalamos
    ```
      npm i -g ironlauncher
    ```
    Y generamos proyectos con:
    ```
      ironlauncher nombre-del-proyecto
    ```
  - Sin instalación
    ```
    npx ironlauncher nombre-del-proyecto
    ```
