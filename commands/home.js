"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const fs = require("fs");
class home {
    constructor() {
        this._command = 'home';
    }
    help() {
        return 'Bringt dich zum Home vom Textadventure (WIP!).';
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, message, client) {
        fs.readFile(`../TA_${message.author.id}_name`, (err, data) => {
            if (err)
                throw err;
            const name = data;
            const hoemembed = new Discord.RichEmbed()
                .setColor('#4d4d4d')
                .setTitle(`Home of ${name}`)
                .addField('Level', `Du bist Level...`, true)
                .addField('Geld', `Du hast...`, true)
                .setTimestamp();
            message.channel.send(hoemembed);
        });
    }
}
exports.default = home;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9ob21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNDO0FBRXRDLHlCQUF5QjtBQUV6QixNQUFxQixJQUFJO0lBQXpCO1FBQ2tCLGFBQVEsR0FBRyxNQUFNLENBQUM7SUFxQnBDLENBQUM7SUFuQkEsSUFBSTtRQUNILE9BQU8sZ0RBQWdELENBQUM7SUFDekQsQ0FBQztJQUNELGFBQWEsQ0FBQyxPQUFlO1FBQzVCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDbEMsQ0FBQztJQUNELFVBQVUsQ0FBQyxJQUFjLEVBQUUsT0FBd0IsRUFBRSxNQUFzQjtRQUMxRSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUM1RCxJQUFJLEdBQUc7Z0JBQUUsTUFBTSxHQUFHLENBQUM7WUFDbkIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLE1BQU0sU0FBUyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtpQkFDdkMsUUFBUSxDQUFDLFNBQVMsQ0FBQztpQkFDbkIsUUFBUSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7aUJBQzNCLFFBQVEsQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxDQUFDO2lCQUMzQyxRQUFRLENBQUMsTUFBTSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUM7aUJBQ3BDLFlBQVksRUFBRSxDQUFDO1lBQ2pCLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUNEO0FBdEJELHVCQXNCQyJ9