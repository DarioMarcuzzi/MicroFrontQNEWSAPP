## MicroFrontQNEWSAPP

MicroFrontQNEWSAPP es una aplicación contenedora y orquestadora de cuatro microaplicaciones. Utiliza la potencia de Single-SPA (https://single-spa.js.org/) y ReactJS para crear una integración fluida de estas microaplicaciones.

![image](https://github.com/DarioMarcuzzi/MicroFrontQNEWSAPP/assets/97201734/96812646-7892-412f-9486-379d6330e9b6)

## Descripción
El propósito de esta aplicación es proporcionar una experiencia personalizada de noticias mediante el análisis de hilos de Twitter. En el mundo acelerado de hoy, Twitter sirve como un centro de información en tiempo real para una amplia gama de temas. Esta aplicación aprovecha su tecnología para obtener tweets relevantes de diversas fuentes autorizadas, como ministerios gubernamentales y organizaciones de salud. De esta manera, trae las últimas noticias y actualizaciones antes que los medios de noticias tradicionales, ofreciendo a los usuarios una experiencia interactiva similar a la de un periódico.

Esta aplicación sigue una arquitectura de micro frontends, compuesta por cuatro microaplicaciones separadas que trabajan en conjunto. Cada microaplicación está construida con ReactJS y Single-SPA. Los backends de estas microaplicaciones se crean utilizando NodeJS y utilizan una base de datos PostgreSQL para el almacenamiento de datos.

## Repositorios Relacionados

Esta aplicación se compone de varias micro aplicaciones. A continuación, se enumeran los repositorios relacionados que puedes descargar e instalar por separado:

1. [mf-inicio](https://github.com/DarioMarcuzzi/mf-inicio): En este repositorio podrás encontrar la microaplicación encargada del inicio de sesión y registro de usuarios.
2. [mf-main](https://github.com/DarioMarcuzzi/mf-main): En este repositorio podrás encontrar el contenido principal de la página, así como un buscador por palabra clave y filtros para las categorías de noticias.
3. [mf-Currency](https://github.com/DarioMarcuzzi/mf-Currency): En este repositorio encontrarás la sección ubicada en la esquina superior izquierda de la página, donde se muestra la información actualizada sobre el cambio de las monedas más influyentes en el mercado.
4. [mf-columDer](https://github.com/DarioMarcuzzi/mf-columDer):  En este repositorio encontrarás la sección ubicada en la parte inferior derecha de la pantalla, donde se visualizan las organizaciones de donde se obtiene la información para las noticias, con la opción de aplicar filtros por cada organización y sus noticias.
5. [backCurrency](https://github.com/DarioMarcuzzi/backCurrency):Este repositorio es el servidor de la microaplicación Currency, encargado de realizar llamadas a una API externa para obtener información actualizada sobre las principales monedas del mercado, así como de comunicarse con una base de datos local para almacenar la información.
6. [backNews](https://github.com/DarioMarcuzzi/backNews): Este repositorio es el servidor de la microaplicación de noticias, encargado de buscar información en Twitter, formatearla, almacenarla en una base de datos, interactuar con una IA para generar noticias y guardarlas nuevamente en una base de datos.

## Instalación

<strong>Paso 1:</strong>

Descargar o clonar este repositorio en su computadora y guardarlo en una carpeta.

<strong>Paso 2:</strong>

Repetir el Paso 1 con los 6 repositorios mencionados en este archivo ReadMe. Asegúrese de seguir el ReadMe de cada repositorio antes de continuar con el Paso 3.

<strong>Paso 3:</strong>

Una vez que los repositorios estén descargados e inicializados, asegúrese de estar en la carpeta correcta (./MicroFrontQNEWSAPP) y ejecute "npm i" y luego "npm start".

Recuerde que cada repositorio funciona de forma independiente y tiene un puerto específico. Si por casualidad tiene un puerto en ejecución en su ordenador y hay un conflicto con alguno de los puertos de alguna microaplicación, deberá cambiar el puerto de ejecución de la microaplicación en cuestión. Además, vaya al archivo "./src/index.ejs" de este repositorio y actualice la subcripcion de la aplicacion a el puerto correspondiente.

![image](https://github.com/DarioMarcuzzi/MicroFrontQNEWSAPP/assets/97201734/106453c5-f2fd-4890-a85a-fbc5b382be99)



## Uso


