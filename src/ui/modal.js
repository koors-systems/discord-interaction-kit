"use strict";

const {
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  ActionRowBuilder
} = require("discord.js");

function createModal({ id, title, fields = [] }) {
  const modal = new ModalBuilder()
    .setCustomId(id)
    .setTitle(title || "Modal");

  const rows = fields.map(field => {
    const input = new TextInputBuilder()
      .setCustomId(field.id)
      .setLabel(field.label)
      .setStyle(
        field.style === "Paragraph"
          ? TextInputStyle.Paragraph
          : TextInputStyle.Short
      )
      .setRequired(field.required ?? true)
      .setPlaceholder(field.placeholder || "");

    if (field.value) input.setValue(field.value);

    return new ActionRowBuilder().addComponents(input);
  });

  modal.addComponents(rows);

  return modal;
}

module.exports = { createModal };
