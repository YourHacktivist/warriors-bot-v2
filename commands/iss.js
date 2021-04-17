const { MessageEmbed } = require("discord.js")
const fetch = require("node-fetch");
const date = require("../fonctions/date.js");


exports.cmd = async (client, msg, args) => {

    const resp = await fetch("https://api.wheretheiss.at/v1/satellites/25544").then(res => res.json());
    let issembed = new MessageEmbed({
      "title": "ISS",
      "color": msg.member.displayColor,
      "description": "ISS Position",
      "thumbnail": {
        "url": 'https://i.imgur.com/d4PFOSv.jpg'
      },
      "image": {
        "url": "https://i.imgur.com/7ypOKTa.jpg"
      },
      "footer": {
        "text": "co-développé avec Slapze"
      },
      "fields": [
        {
          "name":'Unité de mesure',
          "value":resp.units,
          "inline": true
        },
        {
          "name": 'Latitude',
          "value": resp.latitude,
          "inline": true
        },
        {
          "name": 'Longitude',
          "value": resp.longitude,
          "inline": true
        },
        {
          "name": 'Altitude',
          "value": resp.altitude,
          "inline": true
        },
        {
          "name": 'Vitesse de ISS',
          "value": `${resp.velocity} km/h`,
          "inline": true
        },
        {
          "name": 'Visibilité',
          "value": resp.visibility,
          "inline": true
        }
      ]
    });

    msg.channel.send(issembed);

}

exports.help = {
  perm: "SEND_MESSAGES",
  cmd: "iss",
  args: "",
  desc: "Quelques infos sur l'ISS comme ses coordonnées géographiques en temps réel !",
  categ: "FUN",
  author: "Slpaze"
}
