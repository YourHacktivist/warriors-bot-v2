const client = require("../index");

client.on("messageCreate", async (message) => {
    if (
        message.author.bot ||
        !message.guild
    )
        return;

    if (message.content === "/help"){
      message.reply({content : "If you can't use slashcommands, please kick the bot and invite again with this link : https://discord.com/api/oauth2/authorize?client_id=591655828348731422&permissions=8&scope=bot%20applications.commands"});
    }
});
