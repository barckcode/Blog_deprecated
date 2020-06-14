---
id: 2
title: 'Free Weather API'
excerpt: 'Este fin de semana conseguí crear mi primera app web. Pero no vengo a hablarte de ella. Sino de la API que usé para recoger los datos del clima de varios países. Es sencilla y en gran parte gratuita.'
coverImage: '/assets/categories/api.svg'
date: '2020-05-11'
author:
  name: BarckCode
ogImage:
  url: '/assets/categories/api.svg'
---


La API de la que vamos a hablar se llama [<strong>Open Weather</strong>](https://openweathermap.org/api). Es una API muy conocida y que te ofrece mucha cantidad de datos que puedes utilizar según convengas. Y además gran parte de su uso es gratuito😉

### Conociendo la API...
Si le habéis echado una ojeada al link anterior. Habréis visto varias opciones de uso. Desde datos del clima actual hasta datos de pronósticos de varios días. Decíros que las opciones gratuitas de uso. Son las que podemos extraer datos actuales y la opción que nos permite tener un pronóstico de hasta cinco días, cada tres horas.

Tiene mas opciones. Como una base de datos enorme con un histórico de datos bastante amplio. Y la que me parece más interesante. Sus datos meteorológicos con mapas. No la he usado de momento pero he visto un par de ejemplos que me vuelven loco. Os dejo el ejemplo de uso de su propia web: [<strong>Link</strong>](https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=30&lon=-20&zoom=5)

El ejemplo que ellos usan para representar sus datos. Es con un mapa de calor que cambia según la temperatura que haga en la región. Pero no es la única forma. En su [<strong>documentación</strong>](https://openweathermap.org/api/weather-map-2) tambien nos indican que podemos representar el mapa en relieves, corrientes de aire, etc...

Vamos que con estos datos vas o poder ser tu propio hombre o mujer del tiempo.

### Datos Gratuitos
Ahora bien, en mi caso y dado que mi app es más por aprendizaje que por otra cosa. He usado las opciones gratuitas que nos ofrece la API. Ambas funcionan de forma parecida. Sin embargo la que me parece un poco más completa de entre las opciones gratuitas es la que nos ofrece un pronóstico de cinco días cada tres horas. He aquí su [<strong>documentación</strong>](https://openweathermap.org/forecast5).

Pero igualmente indicarte que lo explicado aquí te servirá para la mayoría de opciones. Ya que al fin y al cabo la respuesta de esta API. Es muy parecida en casi todos los casos.

Esta respuesta de la API nos puede venir en distintos formatos. JSON, XML y más. En este caso vamos a centrarnos en la respuesta que viene en formato JSON.

### Ejemplo de uso
Recapitulemos. En este ejemplo vamos a utilizar la opción de pronóstico de cinco días cada tres horas. Y además la respuesta de la API la recibiremos en formato JSON.

Antes de empezar a utilizarla debemos registrarnos en su página web. Una vez registrado te enviarán un correo de verificación y unos cinco minutos después ya podrás usar la API.

La URL que vamos a utilizar es:
<blockquote>http://api.openweathermap.org/data/2.5/forecast?q=<strong>CIUDAD</strong>,<strong>PAIS</strong>&appid=<strong>API_KEY</strong></blockquote>

<h5>OJO!!</h5> Cuando llevemos a producción nuestro sitio. Seguramente queramos utilizar HTTPS. En ese caso tendrás que modificar también el protocolo en la URL de la API para que utilice HTTPS. Sino tu app no funcionará.

Esto es muy sencillo simplemente cambia el http del principio de la URL. Y pon https. Y el resto todo igual.

Funcionamiento:
- **CIUDAD:** el nombre de la ciudad que queremos consultar.
- **PAIS:** Código del país donde se encuentra esta ciudad. Por ejemplo: **es** - España, **co** - Colombia, **ve** - Venezuela, **us** - Estados Unidos, etc
- **API_KEY**: Cuando te registras y verificas tu email. Te envían un correo con tu API KEY. De todas formas siempre puedes gestionar tus API_KEYs haciendo login en su web. En el apartado llamado "API keys".

Bueno teniendo esto claro vamos ya a ver como sería una llamada a nuestra API. Y los parámetros que nos da:
<img>![Code Example](/assets/blog/dynamic-routing/response.png)</img>

- **cod:** Si la petición ha sido exitosa te devolverá un **cod** con un código 200. En caso de fallar la petición te devolverá un 404.

- **message:** Si la respuesta es exitosa mostrará un 0. En caso de tener una llamada errónea nos indicará el parámetro que no ha encontrado.

- **cnt:** La cantidad de objetos que hay dentro del array "list".

- **list:** Es un array de objetos que nos devuelve gran cantidad de información. Que analizaremos más adelante.

- **city:** Un objeto con datos de la ciudad a la cual hayamos hecho la búsqueda.

Ahora bien. Estos serían los datos principales de la API. Pero vamos a profundizar en los que contienen la mayoría de información.

### List
Vamos a adentrarnos en el array de objetos list. En el ejemplo que estamos utilizando este array nos devuelve 40 objetos. Los cuales contienen los mismos parámetros pero con distinta información según lo que consultemos.
<img>![Code Example](/assets/blog/dynamic-routing/list.png)</img>

Vamos a analizar algunos de los parámetros más importantes de estos objetos:

- **main:** Este es un objeto el cuál contiene información como: **temp** - Temperatura (Por defecto viene en grados Kelvin),  **sea_level** - Nivel del mar, **humidity** - % Humedad...
- **weather:** Es un array que contiene un objeto. Nos brinda información del estado del clima. **main** - Nos indica si esta Nublado, lloviendo, nieve, etc
- **clouds:** Este objeto nos indica con: **all** - El % de nubes.
- **wind:** Es un objeto que nos da la información del viento. **deg** - Velocidad del viento. La unidad por defecto de la API es en metros/segundo.
- **dt_txt:** La hora de los datos. A los que hacen referencia todo este array List. Recordemos que List. Contiene 40 objetos. En este apartado cada uno de ellos tendrá una diferencia de tres horas.

Suponiendo que la hora más cercana a la hora real a la que estemos haciendo la consulta a la API es las 00:00. El ciclo de horas de la API sería la siguiente:
<blockquote>00:00 - 03:00 - 06:00 - 09:00 - 12:00 - 15:00 - 18:00 - 21:00 - 00:00</blockquote>

### City
Veamos ahora el objeto city. Este tiene menos información que el array list. Pero no por ello es menos útil.
<img>![Code Example](/assets/blog/dynamic-routing/city.png)</img>

Analicemos sus datos más importantes:
- **name:** El nombre de la ciudad que estemos consultando.
- **coord:** Este objeto nos indica las coordenadas de la ciudad. Si recordáis las clases de geografía sabréis que estas se miden en latitud y longitud.
- **country:** Código del país al que pertenezca la ciudad que estemos consultando.

### Ejemplo práctico
En mi caso he utilizado los datos antes descritos para crear mi propia app. No es algo profesional es un proyecto simple de aprendizaje. Si le queréis echar un vistazo os dejo el [<strong>link</strong>](https://barckcode-weather.netlify.app/). También os dejo un enlace al [<strong>repositorio</strong>](https://github.com/BarckCode/Weather-App)
