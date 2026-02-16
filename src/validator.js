"use strict";

/**
 * Basic customId validation
 */
function validateCustomId(id) {
  if (typeof id !== "string") return false;
  if (id.length > 100) return false;
  if (!/^[a-zA-Z0-9:_-]+$/.test(id)) return false;
  return true;
}

module.exports = { validateCustomId };