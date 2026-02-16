"use strict";

module.exports = {
  // Button handler
  ping: async (interaction) => {
    await interaction.reply("pong 🪨");
  },

  aButton: async (interaction) => {
    const data = JSON.parse(interaction.customId);

    await interaction.reply({
      content: `button id: ${data.id}`//,
      //ephemeral: true
    });
  },

  // Modal submission handler
  contact_submit: async (interaction) => {
    const name = interaction.fields.getTextInputValue("name");
    const message = interaction.fields.getTextInputValue("message");

    await interaction.reply({
      content: `Thanks ${name}, we received: "${message}"`,
      ephemeral: true
    });
  }
};
