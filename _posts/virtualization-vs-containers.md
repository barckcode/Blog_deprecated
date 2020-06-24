---
id: 3
title: 'Virtualización vs Contenedores'
excerpt: 'El concepto de contenedores ya lleva varios años con nosotros. Pero, ¿sabes en qué se diferencia de una maquina virtual?. En este post te lo contamos'
coverImage: '/assets/categories/docker.svg'
date: '2020-06-26'
author:
  name: BarckCode
ogImage:
  url: '/assets/categories/docker.svg'
---

Si estas empezando a convivir con la terminal. Verás que existen diversas formas de moverse entre directorios. De crearlos, ejecutar ficheros, etc...

Si aún te confunden conceptos o términos como rutas relativas o absolutas. Entre otras cosas. Estas en el lugar indicado.

### Empecemos.
En Linux existe un directorio padre del que cuelgan todos los demás directorios del sistema operativo. En lo que se conoce como árbol de directorios.

Pero... <strong>¿Qué es un directorio?</strong> Bueno, haciendo un simil hacia Windows. Serían las carpetas. En Linux por lo general a estas se les suelen llamar directorios.

Pero sigamos, a este directorio padre se le conoce como Raíz. Y tiene este aspecto 👉🏾<strong> / </strong>

Este sería un ejemplo de árbol de directorios:
<img>![Code Example](/assets/blog/paths-linux/tree-directory.png)</img>

Como ves este árbol empieza desde el directorio Raíz <strong> / </strong> y a partir de ahí van saliendo más directorios y archivos.

### Rutas absolutas.
Como hemos visto. Del directorio Raíz es desde donde parten todos los demás directorios de nuestro sistema. Por ello toda ruta absoluta va a partir también desde el directorio Raíz.

Ten a la vista la imagen anterior y vamos a poner algunos ejemplos.
Si quisiera declarar la ruta absoluta del directorio Docker_Trainee. Haría lo siguiente:
- Empezaría en Raíz 👉🏾<strong> / </strong>
- Y posteriormente bajaría hasta 👉🏾<strong> Docker_Trainee </strong>

Quedando nuestra ruta absoluta así:

<strong> /Docker_Trainee </strong>

Ahora bien. Si continuamos bajando la forma que tiene Linux de separar entre ficheros y directorios de distinto nivel. Es también a través de un Slash 👉🏾<strong> / </strong>.

Pero ten presente que el primer Slash es el que hace referencia al directorio raíz. El resto solo son separadores.

Vamos a verlo con un ejemplo. Ahora vamos a escribir la ruta absoluta de <strong> node_modules </strong> ¿La tienes ubicada?
- Empezaríamos en Raíz 👉🏾<strong> / </strong>
- Posteriormente bajaría hasta 👉🏾<strong> Docker_Trainee </strong>
- Como continuamos bajando añadimos un separador 👉🏾<strong> / </strong>
- Y bajamos a 👉🏾<strong> docker-master </strong>
- Seguimos bajando y añadimos un separador 👉🏾<strong> / </strong>
- Para finalmente llegar a 👉🏾 <strong> node_modules </strong>

Quedando nuestra ruta absoluta así:

<strong>/Docker_Trainee/docker-master/node_modules</strong>

¿Fácil eeh...? Te reto a que hagas ahora la ruta absoluta del fichero 👉🏾<strong> LICENSE </strong>

Comentame la respuesta por [<strong>Twitter</strong>](https://twitter.com/barckcode)😜.

Genial!!. Ya sabes formular rutas absolutas. Pero estas tienen un pequeño problema. Seguramente te has fijado que ha medida que vamos bajando en el árbol de directorios. La ruta se va volviendo cada vez más y más grande.

Imagina lo que sería tener que escribir una ruta absoluta enorme cada vez que tienes que dirigirte a ella. Sería horrible. Y muy poco efectivo. Para ello tenemos lo que conocemos como...

### Rutas Relativas.
Antes de hablar de rutas relativas quiero enseñarte una cosa. ¿Has visto alguna vez que contiene dentro un directorio vacío?

En teoría debería estar vacío pero vamos a fijarnos bien:
<img>![Code Example](/assets/blog/paths-linux/link-points.png)</img>

¿Has visto? ¿Qué son ese punto y esos dos puntos que aparecen ahí?

Bueno estos símbolos sirven para hacer referencia a directorios. Dependiendo de donde estemos ubicados. Representarán uno u otro directorio. Y aunque antes he hablado de un directorio vacío. Lo cierto es que todos los directorios del sistema lo tienen.

Pero Keep Calm. Vamos a verlo con ejemplos que es como mejor se entiende.

Volvamos al mismo árbol de directorios de antes. Pero esta vez vamos a movermos dentro del directorio 👉🏾<strong> docker-master </strong> y vamos a ver que contiene:
<img>![Code Example](/assets/blog/paths-linux/docker-master.png)</img>

Si te fijas. Al principio de la imagen se ve que tiene también el punto y los dos puntos dentro. Vamos a ver qué significan:
- <strong> . </strong> 👉🏾 Hace referencia al directorio actual en el que te encuentas. En este caso como estamos en <strong> docker-master </strong> pues el 👉🏾 <strong> . </strong> hace referencia a <strong> docker-master </strong>
- <strong> .. </strong> 👉🏾 Hace referencia al directorio padre del que te encuentras. En este caso al estar dentro de <strong> docker-master </strong> pues 👉🏾 <strong> .. </strong> hace referencia a <strong> Docker_Trainee </strong>
<img>![Code Example](/assets/blog/paths-linux/father-son.png)</img>

Teniendo esto claro. Vamos a ver como declarar rutas relativas. Aprovechando que estamos dentro de <strong> docker-master </strong>. Vamos a escribir su ruta relativa. Sería de la siguiente forma:
- Hacemos referencia al directorio actual 👉🏾<strong> . </strong>
- Y añadimos un separador 👉🏾<strong> / </strong>

Quedando de la siguiente forma:

<strong> ./ </strong>

Vamos ahora a escribir la ruta relativa del directorio padre de <strong> docker-master </strong>. El cual, como vimos antes. Es 👉🏾<strong> Docker_Trainee </strong>. Escribamos su ruta relativa:
- Hacemos referencia al directorio padre con 👉🏾<strong> .. </strong>
- Y añadimos un separador 👉🏾<strong> / </strong>

Quedando de la siguiente forma:

<strong> ../ </strong>

Hagamos otro ejemplo. Recuerda que continuamos dentro de <strong> docker-master
</strong>. Quiero hacer referencia al fichero LICENSE. Con una ruta relativa.
- Hacemos referencia al directorio actual 👉🏾<strong> . </strong>
- Añadimos un separador 👉🏾<strong> / </strong>
- Y bajamos hasta el fichero 👉🏾<strong> LICENSE </strong>

Quedando de la siguiente forma:

<strong> ./LICENSE </strong>

¿Sencillo verdad? Vamos a complicarlo un poco. Volvamos a traer nuestro árbol de directorios que teníamos al principio para tenerlo a la vista.
<img>![Code Example](/assets/blog/paths-linux/tree-directory.png)</img>

Vamos a movernos hasta el directorio <strong> accepts
</strong>.
Y vamos a hacer una ruta relativa que llegue desde nuestra ubicación. Hasta <strong> package.json </strong>
- Para ello primero debemos ir hasta nuestro directorio padre (Que en este caso ahora es node_modules). 👉🏾<strong> .. </strong>
- Añadimos un separador 👉🏾<strong> / </strong>
- Ahora que estamos en <strong> node_modules </strong> ya podemos bajar hasta 👉🏾 <strong> abbrev </strong>
- Añadimos un separador 👉🏾<strong> / </strong>
- Para finalmente bajar hasta <strong> package.json </strong>

Quedando de la siguiente forma:

<strong> ../abbrev/package.json </strong>

Ahora te reto a que hagas la ruta relativa para llegar desde el directorio <strong> accepts </strong>. hasta el fichero 👉🏾<strong> Dockerfile </strong> que esta dentro del directorio <strong> docker-master </strong>.

Nuevamente os invito a que me digáis la respuesta por [<strong>Twitter</strong>](https://twitter.com/barckcode)😜.

Espero que después de este post tengáis mas claros estos conceptos. Saludos!!