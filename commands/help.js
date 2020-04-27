"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const ConfigFile = require("../config");
class help {
    constructor() {
        this._command = 'help';
    }
    help() {
        return 'Dieser Command.';
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, message, client) {
        if (!args[0]) {
            const helpembed = new Discord.RichEmbed()
                .setColor('#2f3136')
                .setTitle(`Hilfe zum AlphaBot RE`)
                .addField(ConfigFile.config.commands[0], ConfigFile.config.commandshelp[0], true)
                .addField(ConfigFile.config.commands[1], ConfigFile.config.commandshelp[1], true)
                .addField(ConfigFile.config.commands[2], ConfigFile.config.commandshelp[2], true)
                .addField(ConfigFile.config.commands[3], ConfigFile.config.commandshelp[3], true)
                .addField(ConfigFile.config.commands[4], ConfigFile.config.commandshelp[4], true)
                .addField(ConfigFile.config.commands[5], ConfigFile.config.commandshelp[5], true)
                .addField(ConfigFile.config.commands[6], ConfigFile.config.commandshelp[6], true)
                .addField(ConfigFile.config.commands[7], ConfigFile.config.commandshelp[7], true)
                .addField(ConfigFile.config.commands[8], ConfigFile.config.commandshelp[8], true)
                .addField(ConfigFile.config.commands[9], ConfigFile.config.commandshelp[9], true)
                .addField(ConfigFile.config.commands[10], ConfigFile.config.commandshelp[10], true)
                .setTimestamp();
            message.channel.send(helpembed);
        }
    }
}
exports.default = help;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9oZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNDO0FBRXRDLHdDQUF3QztBQUV4QyxNQUFxQixJQUFJO0lBQXpCO1FBQ2tCLGFBQVEsR0FBRyxNQUFNLENBQUM7SUE0QnBDLENBQUM7SUExQkEsSUFBSTtRQUNILE9BQU8saUJBQWlCLENBQUM7SUFDMUIsQ0FBQztJQUNELGFBQWEsQ0FBQyxPQUFlO1FBQzVCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDbEMsQ0FBQztJQUNELFVBQVUsQ0FBQyxJQUFjLEVBQUUsT0FBd0IsRUFBRSxNQUFzQjtRQUMxRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2IsTUFBTSxTQUFTLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2lCQUN2QyxRQUFRLENBQUMsU0FBUyxDQUFDO2lCQUNuQixRQUFRLENBQUMsdUJBQXVCLENBQUM7aUJBQ2pDLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7aUJBQ2hGLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7aUJBQ2hGLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7aUJBQ2hGLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7aUJBQ2hGLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7aUJBQ2hGLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7aUJBQ2hGLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7aUJBQ2hGLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7aUJBQ2hGLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7aUJBQ2hGLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7aUJBQ2hGLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUM7aUJBQ2xGLFlBQVksRUFBRSxDQUFDO1lBQ2pCLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2hDO0lBQ0YsQ0FBQztDQUNEO0FBN0JELHVCQTZCQyJ9