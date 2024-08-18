const { writeFileSync, mkdirSync } = require("fs");
require("dotenv").config();

const targetPath = "./src/enviroments/";
const envFileContent = `
export const environments = {
  mapbox_key: "${process.env["MAPBOX_KEY"]}",
   otra: "PROPIEDAD",
};
`;

mkdirSync( targetPath , { recursive: true });
writeFileSync(targetPath + "environments.ts", envFileContent);
