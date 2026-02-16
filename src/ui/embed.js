"use strict";

const { EmbedBuilder } = require("discord.js");

/**
 * Create a flexible embed
 * @param {Object} options
 */
function createEmbed(options = {}) {
  const {
    title,
    description,
    color = 0x5865F2,
    author,
    footer,
    image,
    thumbnail,
    fields = [],
    timestamp = false,
    url
  } = options;

  const embed = new EmbedBuilder().setColor(color);

  if (title) embed.setTitle(title);
  if (description) embed.setDescription(description);
  if (url) embed.setURL(url);

  if (author) {
    embed.setAuthor({
      name: author.name,
      iconURL: author.iconURL,
      url: author.url
    });
  }

  if (footer) {
    embed.setFooter({
      text: footer.text,
      iconURL: footer.iconURL
    });
  }

  if (image) embed.setImage(image);
  if (thumbnail) embed.setThumbnail(thumbnail);

  if (Array.isArray(fields) && fields.length > 0) {
    embed.addFields(
      fields.map(f => ({
        name: String(f.name).slice(0, 256),
        value: String(f.value).slice(0, 1024),
        inline: f.inline ?? false
      }))
    );
  }

  if (timestamp) embed.setTimestamp();

  return embed;
}

module.exports = { createEmbed };
