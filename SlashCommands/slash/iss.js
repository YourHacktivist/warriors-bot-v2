/*
 * author : Slapze & Mizari (Mizari-W)
 */

// importation des packages dont on a besoin
const { MessageEmbed } = require("discord.js")
const fetch = require("node-fetch");
const date = require("../../fonctions/date.js");

module.exports = {
  name: "iss",
  description: "Display informations about the International Space Station",
  type: 'CHAT_INPUT',
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async(client, interaction, args) => {
    // requête sur l'API pour avoir les infos de l'ISS
    const resp = await fetch("https://api.wheretheiss.at/v1/satellites/25544").then(res => res.json());

    // quand c'est fait on crée un embed avec les infos qui vont biens
    let issembed = new MessageEmbed({
      "title": "ISS",
      "color": "#2F3136",
      "thumbnail": {
        "url": 'https://i.imgur.com/d4PFOSv.jpg'
      },
      "image": {
        "url": "https://i.imgur.com/7ypOKTa.jpg"
      },
      "fields": [
        {
          "name": 'Unité de mesure',
          "value": `${resp.units}`,
          "inline": true
        },
        {
          "name": 'Latitude',
          "value": `${resp.latitude.toFixed(5)}`,
          "inline": true
        },
        {
          "name": 'Longitude',
          "value": `${resp.longitude.toFixed(5)}`,
          "inline": true
        },
        {
          "name": 'Altitude',
          "value": `${resp.altitude.toFixed(2)}`,
          "inline": true
        },
        {
          "name": 'Vitesse de ISS',
          "value": `${resp.velocity.toFixed(2)} km/h`,
          "inline": true
        },
        {
          "name": 'Visibilité',
          "value": `${resp.visibility}`,
          "inline": true
        }
      ]
    });

    // puis on send l'embed
    interaction.followUp({ embeds: [issembed] });
  }
}
