"use strict";

const path = require("path");

function loadHandlers() {
  const handlerPath = path.resolve(__dirname, "./handlers.js");

  delete require.cache[handlerPath];

  return require(handlerPath);
}

module.exports = { loadHandlers };