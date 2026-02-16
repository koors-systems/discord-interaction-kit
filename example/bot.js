"use strict";

const {
  Client,
  GatewayIntentBits,
  Events,
  SlashCommandBuilder
} = require("discord.js");

const {
  createDispatcher,
  createEmbed,
  createButton,
  createRow
} = require("../src");

const { loadHandlers } = require("./loader");

let handlers = loadHandlers();
let dispatcher = createDispatcher(handlers);

const config = require("./config.json");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});


client.once(Events.ClientReady, async () => {
  console.log(`Logged in as ${client.user.tag}`);

  const demo = new SlashCommandBuilder()
    .setName("demo")
    .setDescription("Demo interaction framework");

  await client.application.commands.create(demo, config.guildId);
  const reload = new SlashCommandBuilder()
    .setName("reload")
    .setDescription("Reload handlers");

  await client.application.commands.create(reload, config.guildId);
  console.log("Slash command registered.");
});

client.on(Events.InteractionCreate, async (interaction) => {
  try {
    if (interaction.isChatInputCommand()) {
      if (interaction.commandName === "reload") {
        handlers = loadHandlers();
        dispatcher = createDispatcher(handlers);

        return interaction.reply({
          content: "Handlers reloaded.",
          ephemeral: true
        });
      }

      if (interaction.commandName === "demo") {

        const embed = createEmbed({
          title: "Demo Framework",
          description: "Press a button below.",
          footer: { text: "discord-interaction-kit" }
        });

        const pingButton = createButton({
          id: "ping",
          label: "Ping"
        });

        const aButton = createButton({
          label: "Click the button",
          style: "Success", // green (because discord)
          data: { action: "aButton", id: "the id of the button" }
        });

        await interaction.reply({
          embeds: [embed],
          components: [createRow([pingButton, aButton])]
        });
      }
    }

    if (interaction.isButton()) {
      const id = interaction.customId;

      // JSON payload buttons
      if (id.startsWith("{")) {
        const parsed = JSON.parse(id);

        if (parsed.action && handlers[parsed.action]) {
          return handlers[parsed.action](interaction);
        }
      }

      // Regular ID buttons
      return dispatcher.handle(interaction);
    }

  } catch (err) {
    console.error(err);

    if (!interaction.replied) {
      await interaction.reply({
        content: "An error occurred.",
        ephemeral: true
      });
    }
  }
});

client.login(config.token);
