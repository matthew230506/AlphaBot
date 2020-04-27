"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const ConfigFile = require("../config");
class welcome {
    constructor() {
        this._command = 'welcome';
    }
    help() {
        return 'Sendet das Welcomeembed (Admins only).';
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, message, client) {
        const welcomeembedde = new Discord.RichEmbed()
            .setColor('#2f3136')
            .setTitle(`Willkommen, im ${message.guild.name}!`)
            .addField('Mitglieder Anzahl', `${message.guild.memberCount}`, true)
            .addField('Admins', `${ConfigFile.config.Admin1}, ${ConfigFile.config.Admin2}`, true)
            .addField('Moderators', `${ConfigFile.config.Moderator1}`, true)
            .setTimestamp()
            .setImage('https://cdn.discordapp.com/icons/503104675256729600/7b5bb95e4b9aadb8b691ecd2256ca4f6.jpg');
        message.delete(0);
        message.channel.send(welcomeembedde);
    }
}
exports.default = welcome;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy93ZWxjb21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNDO0FBRXRDLHdDQUF3QztBQUV4QyxNQUFxQixPQUFPO0lBQTVCO1FBQ2tCLGFBQVEsR0FBRyxTQUFTLENBQUM7SUFvQnZDLENBQUM7SUFsQkEsSUFBSTtRQUNILE9BQU8sd0NBQXdDLENBQUM7SUFDakQsQ0FBQztJQUNELGFBQWEsQ0FBQyxPQUFlO1FBQzVCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDbEMsQ0FBQztJQUNELFVBQVUsQ0FBQyxJQUFjLEVBQUUsT0FBd0IsRUFBRSxNQUFzQjtRQUMxRSxNQUFNLGNBQWMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7YUFDNUMsUUFBUSxDQUFDLFNBQVMsQ0FBQzthQUNuQixRQUFRLENBQUMsa0JBQWtCLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUM7YUFDakQsUUFBUSxDQUFDLG1CQUFtQixFQUFFLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLENBQUM7YUFDbkUsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxDQUFDO2FBQ3BGLFFBQVEsQ0FBQyxZQUFZLEVBQUUsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFFLElBQUksQ0FBQzthQUMvRCxZQUFZLEVBQUU7YUFDZCxRQUFRLENBQUMsMEZBQTBGLENBQUMsQ0FBQztRQUN2RyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Q0FDRDtBQXJCRCwwQkFxQkMifQ==