"use strict";

/**
 * Simple emoji registry
 */
const emojiMap = {
  one: "1️⃣",
  two: "2️⃣",
  three: "3️⃣",
  four: "4️⃣",
  five: "5️⃣",
  check: "✅",
  cross: "❌"
};

function getEmoji(name) {
  return emojiMap[name] || null;
}

module.exports = { getEmoji };
