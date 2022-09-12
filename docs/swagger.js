import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "iClass API V1",
    description: "Documentation for the iClass API Endpoints.",
  },
  host: `localhost:${process.env.PORT || 8000}`,
  schemes: ["http"],
};

const outputFile = "./docs/swagger-output.json";
const endpointsFiles = ["./index.js"];

/* NOTE: if you use the express Router, you must pass in the
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen()(outputFile, endpointsFiles, doc);
