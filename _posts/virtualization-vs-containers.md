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

Empecemos aclarando que un contenedor no es una maquina virtual. De hecho según indican los expertos como [<strong>Kelsey Hightower</strong>](https://twitter.com/kelseyhightower). Los contenedores son la siguiente evolución a nivel de infraestructura.

Si te preguntas por qué. Aquí vamos con la comparativa. Ten presente de todas formas que estas tecnologías no son incompatibles entre ellas. De hecho en muchos casos son incluso complementarias. Teniendo un parque por ejemplo con algunas maquinas virtuales en las cuales corren muchos contenedores. Ahora si empecemos.

### Virtualización.
<img>![Code Example](/assets/blog/virtualization-vs-containers/virtualization.png)</img>

En este esquema tenemos una infraestructura que tiene los siguientes elementos. Empezamos de abajo hacia arriba:
- El sistema operativo del host que contiene todas las maquinas virtuales.
- Para poder virtualizar y administrar dichas maquinas. Este sistema operativo necesita un hypervisor.
- Después tenemos tres maquinas virtuales dentro de este host. Las cuales a su vez tienen su propio sistema operativo para poder funcionar.
- El sistema operativo de las maquinas virtuales al ser independiente uno de otro. Tiene sus propios demonios, procesos, etc...
- Para finalmente. Tener nuestras aplicaciones.

Como véis esto tiene algunas desventajas. Ya que para empezar. Crear esta infraestructura nos puede llevar bastante tiempo. Ya que no solo es configurar el host. Sino la creación y configuración de las maquinas virtuales. Esto sin olvidar que dependiendo de los requisitos del desarrollo esta configuración puede volverse aun más compleja.

Otra desventaja. Es que el mantenimiento de esta infraestructura también es bastante tedioso. Ya que no solamente tenemos que mantener y administrar el host que contiene las maquinas virtuales. Sino que estas, al tener un sistema operativo aparte. También requiere de mantenimiento y administración.

Por lo que al final. En este esquema por ejemplo tendrías que administrar y mantener 4 sistemas operativos. Cada uno con sus requerimientos de seguridad, parcheados, actualizaciones, etc...

Finalmente, una de las desventajas mas importantes. Es su tamaño. Tengamos en cuenta que cada maquina virtual ocupa bastante espacio. Podemos hablar de varios cientos de GB. Esto nos deja un host que debe tener un almacenamiento enorme para poder abastecer a estas maquinas virtuales.

Pero no solo eso. Sino que en la ocupación de cada maquina virtual. Es posible que estemos replicando la misma información. Ya sea a nivel de SO, librerías, binarios, etc... Haciendo que esto no sea nada óptimo.

### Contenedores.
<img>![Code Example](/assets/blog/virtualization-vs-containers/containers.png)</img>

Como ves. Este esquema representa la misma infraestructura de antes. Pero en lugar de maquinas virtuales. Utilizamos contenedores. Vamos a ver que elementos tiene:
- El sistema operativo del host principal.
- En este sistema operativo tendremos el Docker Daemon. El cual será el encargado de administrar los contenedores de Docker.
- Finalmente tendremos nuestros contenedores. Los cuales no son mas que un conjunto de procesos específicos empaquetados en una imagen. En las cuales podremos desplegar y ejecutar nuestras aplicaciones.

Esta infraestuctura es mucho mas ligera y facil de mantener. Ya que solamente tienes un sistema operativo que mantener. El del host.

El resto son contenedores los cuales carecen de un sistema operativo propio. Haciendolos mucho mas ligeros y rápidos de desplegar que una maquina virtual común.

Algunas de las ventajas que teníamos en las maquinas virtuales. Es que eran entornos totalmente aislados. Los cuales nos permitían desplegar aplicaciones que tuviesen entornos de desarrollo totalmente diferentes sin interferir unos de otros.

Esta ventaja no se pierde con los contenedores. De hecho ganamos en eficiencia ya que no debemos cargar con un sistema operativo completo sino solo con los procesos necesarios para que nuestro entorno de desarrollo sea funcional.

Otro de los problemas que los contenedores resuelve. Es la posibilidad de replicar y compartir estos entornos. Ya que una maquina virtual de varios GB no es precisamente fácil de compartir. Sin embargo, con los contenedores al empaquetarlos en imagenes. Podemos replicar y compartir con muchisima facilidad varios entornos en cuestión de segundos.

Os dejo el repositorio de Docker por si les queréis echar un vistazo a las imagenes de contenedores disponibles que nos brinda. [<strong>Link</strong>](https://hub.docker.com/search?q=&type=image)

En mi caso la primera vez que corrí un contenedor me sorprendió la facilidad y velocidad con la que se hace. Pudiendo tener por ejemplo un servidor web, con los requisitos que yo quisiera. Funcionando y escuchando en solo cuestión de segundos. Lo cuál con una maquina virtual es literalmente imposible.

Espero que os ha gustado. Si es así os invito a compartirlo por [<strong>Twitter</strong>](https://twitter.com/barckcode)😜. Si no también te agradecería tu feedback para poder mejorar mi contenido.

Saludos!!