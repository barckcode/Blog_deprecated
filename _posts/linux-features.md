---
id: 4
title: 'Linux Tips: Particularidades de Linux'
excerpt: 'Seguramente te encontrarás o ya te has encontrado varias de estas particularidades de Linux en tu camino de aprendizaje. ¿Quieres saber cuales? Entra al post.'
coverImage: '/assets/categories/linux.svg'
date: '2020-07-29'
author:
  name: BarckCode
ogImage:
  url: '/assets/categories/linux.svg'
---

El sistema operativo más extendido a nivel usuario es Windows por lo que la mayoría de simils/comparaciones irán contra Windows. Si bien es cierto que tambien podríamos compararlo con MacOS. Al estar los dos basados en Unix estos dos son más parecidos.

Empecemos.

### Directorios vs Files Systems.
En Windows todos conocemos lo que es una carpeta. Sin embargo, la mayoría de gente en Linux se refiere a ellas de dos formas distintas dependiendo de su estado. ¿Que a qué me refiero con esto?

Bueno en Linux a las "carpetas comunes" les solemos llamar directorios. Sin embargo, los directorios que conforman un punto de montaje en nuestro sistema. Los solemos llamar Files Systems.

Pero...<strong>¿Cómo sabemos si un directorio es un File System o no?</strong> Como os dije un File System es un punto de montaje en nuestro sistema. Esto lo podemos averiguar utilizando el comando df -h
<img>![Code Example](/assets/blog/linux-features/example-filesystem.png)</img>

Si véis a la derecha de la imagen. Hay una columna que pone "Mounted on". Estos son los puntos de montaje de mi sistema operativo. Existe uno que siempre siempre va a existir en todos los sistemas Linux. Si sabes cuál dejame un [<strong>tweet</strong>](https://twitter.com/barckcode) con la respuesta. Si no lo sabes, te invito a ver este [<strong>post.</strong>](https://barckcode.dev/posts/paths-linux)😜.

Pues bien. Todo lo que aparece en la columna "Mounted on" son Files Systems de nuestro sistema. Todo lo demás serían directorios.

### Comandos.
La terminal de Linux es muy poderosa. En su mayor parte es gracias a la cantidad enorme de comandos que viene solamente con la instalación del sistema operativo. Además de poder agregar paquetes o librerías que añadan más comandos a nuestro sistema.

Por resumir digamos que aprender Linux. Es saber aprender a manejarte con la terminal. Ya que aunque uses una distribución con interfaz gráfica. Siempre vas a tener que tirar en algún punto de la terminal.

Por no hablar que cuando se administran servidores. Lo normal es que estos ni siquiera tengan interfaz gráfica. Y toda la gestión del sistema se haga a través de la terminal.

Ojo!! Hay un sin fin de comandos. Y sobre todo al principio. Es casi abrumador tener que usar comandos para todo lo que hacemos. Poco a poco nos vamos aprendiendo los que más utilizamos. Pero tampoco es necesario que te sepas todos.

De hecho algo que he aprendido fijandome en mis compañeros de trabajo. Es que no hay nada mejor que apuntarse ciertos comandos que realicen una tarea especifica.

Para que cuando vuelva a necesitar ejecutar dicha tarea y no recuerde el comando. Pueda consultarlo. Como una "wikipedia" de comandos propia. De verdad que esto es súper útil y ojalá lo hubiese aprendido antes.

<strong>No hace falta que los memorices todos. Apuntalos. En algún momento te pueden volver a servir.</strong>

Introduciendonos más en su funcionamiento. La mayoría de comandos vienen también con varias opciones las cuales podemos agregar para dar una mayor funcionalidad a nuestro comando.
Por ejemplo. Lancemos el comando ls
<img>![Code Example](/assets/blog/linux-features/example-ls.png)</img>

Y ahora añadamos al comando ls la opción -1
<img>![Code Example](/assets/blog/linux-features/example-ls-1.png)</img>

Como ves, el comando es el mismo (ls). Pero al agregarle una opción. Este cambió su comportamiento. Y nos mostró el resultado de una forma distinta.

Vamos a agregarle ahora dos opciones a nuestro comando ls
<img>![Code Example](/assets/blog/linux-features/example-ls-1a.png)</img>

Nuevamente al agregar esa nueva opción. Ha vuelto a modificar su comportamiento.

### Manual de comandos.
Como indiqué antes. Existen tantos comandos que aprenderselos todos resulta casi imposible. Si encima a esto le añadimos que cada comando puede tener diversas opciones. Pues lo hace aún más complejo.

Por lo que en muchas ocasiones. Nos encontraremos con comandos que no tenemos ni idea de lo que hacen. Para esto Linux nos brinda un comando que funciona con casi todos los demás comandos existentes.

Y este se llama: <strong>man</strong>

Su uso es muy sencillo. Vamos a usarlo junto con nuestro comando anterior. Para ello ejecuta en tu terminal: man ls

Esto te llevará en tu misma terminal a otra pantalla. En la cuál podrás leer una documentación entera sobre el comando. Cómo se usa, para qué sirve, qué opciones tiene y muchas cosas más.

Si quieres salir de la pantalla del man. Simplemente presiona la tecla "<strong>q</strong>" de tu teclado.

Si con este manual no te queda claro. Siempre podrás recurrir a Google. Casi con total seguridad encontrarás a alguien que haya explicado con palabras más "sencillas". Su funcionamiento.

### Editores de texto.
Seguro que conoces programas como Word, bloc de notas, etc. Estos gráficamente son muy útiles si queremos editar archivos de texto.

Sin embargo, esto también lo podemos hacer desde nuestra terminal de Linux. Existen varios editores de texto. Los más conocidos son Nano, Vi/Vim y Emacs.

Lo cierto que Vi es el que más me gusta a nivel personal. Pero Nano es el más sencillo de aprender aunque su contra es que es el menos útil de los tres.

Aquí no voy a entrar demasiado. Te voy a dejar manuales para los tres:
- [<strong>Nano.</strong>](https://iesmunoztorrero.educarex.es/web/lenix/nano/nano.htm)
- [<strong>Vi.</strong>](https://www.unirioja.es/cu/enriquez/docencia/Quimica/vi.pdf)
- [<strong>Emacs.</strong>](https://www.gnu.org/software/emacs/manual/html_node/emacs/)

### Distribuciones.
Existen muchas distribuciones de Linux. Ubuntu, Red Hat, Debian, Kali, Fedora, etc.

Cuando estamos empezando a aprender Linux. Ya sea por un curso o de forma autodidacta. Es difícil elegir con qué distribución empezar.

Por mi experiencia he de decir que distribuciones como Ubuntu. Son de las más amigables para empezar. Ya que tiene interfaz gráfica y mucha documentación de la comunidad que nos puede hacer la vida mas sencilla.

Bien es cierto que a pesar de que todos son Linux. Tienen varias diferencias. Pero a grosso modo podemos distrubuirlos por familias:
<img>![Code Example](/assets/blog/linux-features/linux-family.png)</img>

Por mi parte te recomendaré tres distribuciones. Dependiendo del enfoque que le quieras dar.
- [<strong>Ubuntu:</strong>](https://ubuntu.com/download/desktop) Si eres programador. O incluso si este va a ser tu primer acercamiento a Linux. Esta sería la distribución que te recomendaría. Ya que como te dije tiene una gran comunidad por detrás, existe mucha documentación y tiene una versión Desktop que tiene interfaz gráfica.

- [<strong>Red Hat:</strong>](https://www.redhat.com/es/technologies/linux-platforms/enterprise-linux/try-it?intcmp=701f20000012m1qAAA) Si eres SysAdmin. O incluso si quieres conocer más como funciona un servidor. Vivir una experiencia 100% con la terminal. Sin interfaz gráfica de por medio. Esta sería mi opción favorita. Aunque si quieres algo muy parecido a Red Hat pero sin empresas ni licencias de por medio. Siempre puedes usar un [<strong>CentOS:</strong>](https://www.centos.org/centos-linux/)

- [<strong>Kali Linux:</strong>](https://www.kali.org/downloads/) Si te gusta la ciberseguridad. En especial el pentesting. Esta distribución seguramente te va a encantar. Existen varios manuales, páginas y comunidad con la que aprender.

### Los 6 Mandamientos.
No quiero irme sin antes dejarte los 6 comandos imprescindibles que debes saber para empezar a manejarte en cualquier sistema linux.

- <strong>cd:</strong> este comando nos sirve para movernos entre directorios. Para esto es importante que tengas claro como funciona el sistema de rutas de Linux. Para ello te vuelvo a invitar a que visites el post donde hablo más a detalle sobre este tema.

- <strong>ls:</strong> nos sirve para listar el contenido de directorios/files systems. Como el ejemplo anterior que utilizamos el comando para ver el contenido del directorio Programming.

- <strong>cat:</strong> nos sirve para ver el contenido que tiene cualquier fichero de texto.

- <strong>grep:</strong> nos sirve para filtrar mediante palabras, números o simbolos el contenido de ficheros o incluso salidas de algún otro comando. Este comando te facilitará mucho la vida.

- <strong>rm:</strong> nos sirve para eliminar tanto ficheros como directorios de nuestro sistema.

- <strong>find:</strong> de los 6. Este posiblemente sea el más poderoso. Te sirve para buscar ficheros y directorios en el sistema. Te permite poner filtros en la búsqueda. O incluso ejecutar tareas después de realizar esa búsqueda.

Espero que os haya gustado. Si es así os invito a compartirlo o dejarme un comentario por [<strong>Twitter</strong>](https://twitter.com/barckcode)😜. Si no también te agradecería tu feedback para poder mejorar mi contenido.

Saludos!!