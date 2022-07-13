# Cómo inciar el juego.

Se necesita tener Node.Js y algún IDE instalado.
Node.Js se puede descargar de https://nodejs.org/es/

Una vez instalado se debe proceder a abrir una consola/terminal en la carpeta dónde tengan el proyecto.

## Scripts disponibles


### `npm install`

Instalará todas las dependencias necesarias para que el proyecto pueda ejecutarse.

### `npm start`

Inicia la aplicación en modo desarollador.\
Para ver la aplicación abra su navegador preferido y vaya a: [http://localhost:3000](http://localhost:3000).

## El Juego

El juego es como un piedra papel o tijera tradicional, pero con la diferencia de que se agrega `Lagarto` y `Spock`.
Las reglas quedarían de la siguiente manera:

Tijera corta a Papel
Papel tapa a Piedra
Piedra aplasta a Lagarto
Lagarto envenena a Spock
Spock rompe a Tijera
Tijera decapita a Lagarto
Lagarto devora a Papel
Papel desautoriza a Spock
Spock vaporiza a Piedra
y como siempre, Piedra aplasta a Tijera

Dentro de la aplicación podrán encontrar un mini tutorial de cómo funciona la interfaz y en la partida podrán ver las reglas.
