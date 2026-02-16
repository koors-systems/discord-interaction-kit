# discord-interaction-kit

Lightweight interaction dispatcher and UI builder for discord.js.

## Install

npm install discord-interaction-kit

## Basic Usage

```js
const { createDispatcher } = require("discord-interaction-kit");

const handlers = {
  ping: async (interaction) => {
    await interaction.reply("pong");
  }
};

const dispatcher = createDispatcher(handlers);

client.on("interactionCreate", async (interaction) => {
  await dispatcher.handle(interaction);
});
```
