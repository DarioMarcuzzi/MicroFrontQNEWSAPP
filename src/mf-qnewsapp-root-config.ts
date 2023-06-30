import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

// console.log(navigator.geolocation.getCurrentPosition);

// try {
//   navigator.geolocation.getCurrentPosition(async function(position) {
//     let currency = "";

//     try {
//       const latitude = position.coords.latitude;
//       const longitude = position.coords.longitude;
//       console.log(position);
//       console.log(`La posición actual del usuario es: ${latitude}, ${longitude}`);

//       // Fetch a la API para obtener información de ubicación
//       const response = await fetch(
//         `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=e46b722f31654f81962ed9751c4dc785`
//       );
//       const data = await response.json();

//       // Obtener el país y la moneda de la respuesta de la API
//       const country = data.results[0].components.country;
//       currency = data.results[0].annotations.currency.iso_code;
//       console.log(`País: ${country}, Moneda: ${currency}`);
//     } catch (error) {
//       console.log(error);
//     }

//     const data2 = {
//       props: {
//         myProps: currency || "USD",
//       },
//       loaders: [
//         // loaders array goes here
//       ],
//     };

//     const routes = constructRoutes(microfrontendLayout, data2);
//     const applications = constructApplications({
//       routes,
//       loadApp({ name }) {
//         return System.import(name);
//       },
//     });
//     const layoutEngine = constructLayoutEngine({ routes, applications });

//     applications.forEach(registerApplication);
//     layoutEngine.activate();
//     start(); // Llamar a singleSpa.start() después de la configuración de las aplicaciones
//   });
// } catch (error) {
//   console.log(error);

//   const data2 = {
//     props: {
//       myProps: "USD",
//     },
//     loaders: [
//       // loaders array goes here
//     ],
//   };

//   const routes = constructRoutes(microfrontendLayout, data2);
//   const applications = constructApplications({
//     routes,
//     loadApp({ name }) {
//       return System.import(name);
//     },
//   });
//   const layoutEngine = constructLayoutEngine({ routes, applications });

//   applications.forEach(registerApplication);
//   layoutEngine.activate();
//   start(); // Llamar a singleSpa.start() después de la configuración de las aplicaciones
// }

async function fetchFromDatabase() {
  try {
    const response = await fetch("http://localhost:3002/news");
    const data = await response.json();
    // console.log('Respuesta de la base de datos:', data);

    // Luego, puedes construir el objeto "data2" con los datos obtenidos de la base de datos
    const data2 = {
      props: {
        myProps: data.currency || "USD",
        myPropsNews: data,
      },
      loaders: [
        // loaders array goes here
      ],
    };
    const routes = constructRoutes(microfrontendLayout, data2);
    const applications = constructApplications({
      routes,
      loadApp({ name }) {
        return System.import(name);
      },
    });
    const layoutEngine = constructLayoutEngine({ routes, applications });

    applications.forEach(registerApplication);
    layoutEngine.activate();
    start();
  } catch (error) {
    return error;
  }
}

// Llamada a la función fetchFromDatabase
fetchFromDatabase();
