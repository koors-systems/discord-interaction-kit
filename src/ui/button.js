"use strict";

const { ButtonBuilder, ButtonStyle } = require("discord.js");
const { getEmoji } = require("./emoji");

function createButton({
  id,
  label,
  style = "Primary",
  disabled = false,
  emoji,
  data
}) {
  if (!id && !data) {
    throw new Error("Button id or data required");
  }

  const customId = data
    ? JSON.stringify(data)
    : id;

  const styleMap = {
    Primary: ButtonStyle.Primary,
    Secondary: ButtonStyle.Secondary,
    Success: ButtonStyle.Success,
    Danger: ButtonStyle.Danger
  };

  const button = new ButtonBuilder()
    .setCustomId(customId)
    .setStyle(styleMap[style] || ButtonStyle.Primary)
    .setDisabled(disabled);

  if (label) button.setLabel(label);

  if (emoji) {
    const resolved = getEmoji(emoji) || emoji;
    button.setEmoji(resolved);
  }

  return button;
}

module.exports = { createButton };
