const eclyssia = require("eclyssia-api-wrapper");
const Discord = require("discord.js");

const client = new Discord.Client();

client.on("ready", () => {
    console.log("I am ready!");
})

client.on("message", async message => {
    if(!message.content.startsWith("!")) return;

    
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === "!eclyssia") {
        if(!args[0] || !eclyssia.endpoints.includes(args[0].toLowerCase())) {
            message.channel.send("Incorrect endpoint\n\nSupported endpoints:\n" + eclyssia.endpoints.join(", "))
            return;
        }

        if(!args[1]) {
            message.channel.send("You forgot the image URL!");
            return;
        }

        let url = args[1]

        eclyssia[args[0]](url)
            .then(data => {
                if(["triggered", "rainbow"].includes(args[0].toLowerCase())) {
                    let attachment = new Discord.MessageAttachment(data, 'eclyssia.gif');
                    message.channel.send(attachment)
                }
                else {
                    let attachment = new Discord.MessageAttachment(data, 'eclyssia.png');
                    message.channel.send(attachment)
                }
            })
        return;
    }

    return;
})

client.login("Discord bot token here")