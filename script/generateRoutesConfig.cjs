// generateRoutesConfig.js

const fs = require('fs');
const path = require('path');

const pagesDirectory = path.join(__dirname, 'src/pages');

function getPages() {
  return fs.readdirSync(pagesDirectory);
}

function generateRoutesConfig() {
  const pages = getPages();

  const routesConfig = pages.map(page => ({
    path: `/home/${page.toLowerCase()}`,
    name: page,
    // 其他配置...
  }));

  return routesConfig;
}

function saveRoutesConfigToFile(config) {
  const outputPath = path.join(__dirname, 'src/routesConfig.js');
  const content = `export const routesConfig = ${JSON.stringify(config, null, 2)};\n`;

  fs.writeFileSync(outputPath, content);

  console.log('Routes config has been generated and saved to src/routesConfig.js');
}

const routesConfig = generateRoutesConfig();
saveRoutesConfigToFile(routesConfig);
