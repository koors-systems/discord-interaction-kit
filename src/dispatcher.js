"use strict";

/**
 * Create a safe interaction dispatcher
 * @param {Object<string, Function>} handlerMap
 */
function createDispatcher(handlerMap = {}) {
  if (typeof handlerMap !== "object") {
    throw new Error("handlerMap must be an object");
  }

  return {
    async handle(interaction) {
      if (!interaction) return;

      if (!interaction.isButton?.()) return;

      const id = interaction.customId;

      if (!id || typeof id !== "string") {
        throw new Error("Invalid customId");
      }

      const handler = handlerMap[id];

      if (!handler) {
        throw new Error(`No handler registered for: ${id}`);
      }

      await handler(interaction);
    }
  };
}

module.exports = { createDispatcher };