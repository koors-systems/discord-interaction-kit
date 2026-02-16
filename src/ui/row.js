"use strict";

const { ActionRowBuilder } = require("discord.js");

function createRow(components = []) {
  const row = new ActionRowBuilder();
  row.addComponents(components);
  return row;
}

module.exports = { createRow };
