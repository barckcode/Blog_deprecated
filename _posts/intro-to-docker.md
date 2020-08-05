---
id: 5
title: 'Introducción a Docker'
excerpt: 'Docker lleva ya varios años en la industria. Y se ha convertido en casi un estándar en cuanto a crear infraestructura. ¿Quieres saber más? Entra al post.'
coverImage: '/assets/categories/docker.svg'
date: '2020-08-05'
author:
  name: BarckCode
ogImage:
  url: '/assets/categories/docker.svg'
---

Docker es una herramienta escrita en GO. Que se basa en la containerización. Lo cuál supuso un avance a la hora de construir infraestructura.

Ya que antes de su llegada. Lo principal eran las máquinas virtuales. En mi blog podrás encontrar un post que habla precisamente de [<strong>Virtualización vs Contenedores.</strong>](https://barckcode.dev/posts/virtualization-vs-containers).

Pero antes de entrar de lleno en Docker. Vamos a ver primero...

### ¿Qué es un contenedor?
Es una unidad lógica que tiene una agrupación de procesos. Estos procesos se limitan a los recursos que le proporciona el contenedor. Impidiendoles tener un alcance más alla de su contenedor.

Con Docker el único software que comparte el contenedor y host anfitrión. En el caso de que estemos usando Linux. Es el kernel del propio sistema operativo.

Existen varias herramientas para crear contenedores. Sin embargo, Docker es la más extendida.

Veamos como es su <strong>Arquitectura.</strong>

<img>![Code Example](/assets/blog/intro-to-docker/docker-architecture.png)</img>

Como véis tenemos un cliente el cuál a través del Docker Daemon puede ir creando y manejando los contenedores que va creando. Estos contenedores están totalmente aislados del sistema operativo padre.

Y también por defecto, los contenedores están aislados entre sí. Esto nos ayuda a tener distintos entornos de desarrollo con distintos requisitos o recursos. Los cuáles podrán ser manejados de forma independiente y sin pisarse unos a otros.

Ahora que sabemos esto. Veamos cómo almacena Docker sus datos.

### Persistencia de datos.
Existen varias formas de guardar datos en Docker. Estas son algunas de ellas:

- <strong>Bind Mount:</strong> comparte un directorio de nuestro host. Para que este sea visible dentro de nuestro contenedor.

- <strong>Volume:</strong> funciona parecido a bind mount. Con la diferencia que los volume son manejados por Docker. Lo cual hace que los procesos de sistema no puedan interferir en el funcionamiento del contenedor.

- <strong>Tmpfs mount:</strong> temporal filesystem. Se carga en memoria, no en disco.

<img>![Code Example](/assets/blog/intro-to-docker/docker-volumns.png)</img>

<strong>¿Bind Mount o Volume?</strong> Docker recomienda que utilices Volume siempre que puedas. Ya que de esta forma evitarás que algún proceso del host. Afecte al funcionamiento del contenedor.

Los Volume en Linux. Se guardan por defecto en el path:
<strong>/var/lib/docker/volumes/</strong>

Otra ventaja de los Volume, es que a pesar de que el contenedor que lo utiliza desaparezca. Los datos almacenados en el volume se mantedrán almacenados ahí. Hasta que decidas borrar el propio volume.

### Images.
Uno de los problemas más grandes del software. Es la complejidad de distribuir, compartir y replicar lo que se esta construyendo.

Ya que dependiendo de lo que estes desarrollando. Necesitas unas u otras prestaciones en tu ambiente de desarrollo.

Para aliviar este problema. Docker cuenta con lo que se conoce como Imágenes. Las cuales nos sirven para distribuir contenedores con distintas funcionalidades y requerimientos.

Docker tiene su propio repositorio de imágenes que podemos descargar y utilizar siempre que queramos:
[<strong>Repositorio.</strong>](https://hub.docker.com/)

También aquí. Podemos crear un repositorio. Donde podremos crear y subir nuestras propias imágenes para poder compartirlas con otras personas. Si alguna vez has utilizado GitHub. Esto es como el GitHub de imágenes de Docker.

Para construir estas imágenes. Necesitaremos crear un fichero llamado: <strong>Dockerfile</strong>

Y al igual que en Git. Cuando estemos construyendo nuestra imagen. También podremos crear un fichero para que ignore ciertos ficheros o directorios. Este fichero se llama: <strong>.dockerignore</strong>


### Network.
Docker tambien crea redes propias para que los contenedores hagan uso de ellas.
Existen varias formas de crear redes en Docker. Estas son algunas de ellas:
- <strong>Bridge:</strong> es la red por defecto que usarán todos los contenedores al crearse salvo que se especifique lo contrario.

- <strong>Host:</strong> el contenedor usará la misma red que el host. Esto es peligroso. Ya que si exponemos todo nuestro host a internet y necesitamos aislar nuestros datos. Como BBDD por ejemplo. Nos estaríamos exponiendo a que cualquiera pueda acceder si no lo evitamos.

- <strong>None:</strong> deshabilita todas las redes. Normalmente se usa junto con un controlador de red personalizado para que afecte únicamente al propio contenedor.

Este tema es bastante extenso por lo que te dejo algunos posts que me parece que lo explican bastante a detalle:
- [<strong>Redes en Docker.</strong>](https://dockertips.com/algo_sobre_redes)
- [<strong>Como hacer redes con docker.</strong>](http://dondocker.com/como-hacer-redes-con-docker/)
- [<strong>Documentación Oficial.</strong>](https://docs.docker.com/network/)

Espero que os haya gustado. Si es así os invito a compartirlo o dejarme un comentario por [<strong>Twitter</strong>](https://twitter.com/barckcode)😜. Si no también te agradecería tu feedback para poder mejorar mi contenido.

Saludos!!