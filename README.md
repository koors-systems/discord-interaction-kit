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

## Install
```npm install @koors/discord-interaction-kit

## Discord Demo
<img width="592" height="604" alt="Image" src="https://github.com/user-attachments/assets/0283fb3f-118b-4df5-ae6d-9b64da588581" />
