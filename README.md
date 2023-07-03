## MicroFrontQNEWSAPP

MicroFrontQNEWSAPP es una aplicación contenedora y orquestadora de cuatro microaplicaciones. Utiliza la potencia de Single-SPA (https://single-spa.js.org/) y ReactJS para crear una integración fluida de estas microaplicaciones.

Descripción
![image](https://github.com/DarioMarcuzzi/MicroFrontQNEWSAPP/assets/97201734/96812646-7892-412f-9486-379d6330e9b6)

El propósito de esta aplicación es proporcionar una experiencia personalizada de noticias mediante la agregación y análisis de hilos de Twitter. En el mundo acelerado de hoy, Twitter sirve como un centro de información en tiempo real para una amplia gama de temas. Esta aplicación aprovecha su tecnología para obtener tweets relevantes de diversas fuentes autorizadas, como ministerios gubernamentales y organizaciones de salud. De esta manera, trae las últimas noticias y actualizaciones antes que los medios de noticias tradicionales, ofreciendo a los usuarios una experiencia interactiva similar a la de un periódico.

Visión general
Esta aplicación sigue una arquitectura de micro frontends, compuesta por cuatro microaplicaciones separadas que trabajan en conjunto. Cada microaplicación está construida con ReactJS y Single-SPA. Los backends de estas microaplicaciones se crean utilizando NodeJS y utilizan una base de datos PostgreSQL para el almacenamiento de datos.

Estructura de los repositorios

## Repositorios Relacionados

Esta aplicación se compone de varias micro aplicaciones. A continuación, se enumeran los repositorios relacionados que puedes descargar e instalar por separado:

1. [mf-inicio](https://github.com/DarioMarcuzzi/mf-inicio): En este repositorio podra encontrar la micro aplicacion encargada del login y registro de los usuarios.
2. [mf-main](https://github.com/DarioMarcuzzi/mf-main): En este repositorio podra encontrar el contenido principal de la pag, tambien un buscador por palabra clave y unos filtros sobre las categorias de las noticias.
3. [mf-Currency](https://github.com/DarioMarcuzzi/mf-Currency): En este repositorio encontrara la seccion de la pag ubicada en la esquina superior izquierda, donde se indica el cambio actual de las monedas mas influyentes en el mercado, asi como una actualizacion diaria y dispareidad sobre el dia a dia.
4. [mf-columDer](https://github.com/DarioMarcuzzi/mf-columDer): En este repositorio encontrara la seccion de la parte inferior derecha de su pantalla, alli visualizara las organizaciones de donde se saca la informacion para las noticias, tambien con un filtro aplicable por cada organizacion y sus noticias.
5. [backCurrency](https://github.com/DarioMarcuzzi/backCurrency): Este repositorio es el servidor de microfront Currency, encargado de hacer llamadas a una api externa dia a dia para traer informacion sobre las monedas mas relevantes del mercado y comunicarce con una base de datos local asi guardar la informacion.
6. [backNews](https://github.com/DarioMarcuzzi/backNews): Este repositorio es el servidor de las noticias. Encargado de buscar informacion en twitter, formatearla guardarla en una base de datos, luego comunicarse con una IA para formar las noticias y guardarlas nuevamente en una base de datos.

## Instalación




## Uso


