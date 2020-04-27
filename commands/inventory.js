"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const buy_1 = require("./buy");
const fs = require("fs");
exports.slotsall = 10;
exports.slotsavailable = 10;
class inv {
    constructor() {
        this._command = 'inventory';
    }
    help() {
        return 'Öffnet dein Inventar vom Textadventure (WIP!).';
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, message, client) {
        const name = fs.readFile(`C:/Users/matth/Desktop/Programming/AlphaBot Re/TA_${message.author.id}_name`, (err, data) => {
            if (err) {
                message.reply('bitte mach dir erst einen Charakter (?newgame).');
            }
            else {
                message.channel.send(name);
                const inventoryembed = new Discord.RichEmbed()
                    .setColor('#4d4d4d')
                    .setTitle(`Inventar von ${name}`)
                    .addField('Slot1:', `${buy_1.inventory[0]}`, true)
                    .addField('Slot2:', `${buy_1.inventory[1]}`, true)
                    .addField('Slot3:', `${buy_1.inventory[2]}`, true)
                    .addField('Slot4:', `${buy_1.inventory[3]}`, true)
                    .addField('Slot5:', `${buy_1.inventory[4]}`, true)
                    .setTimestamp();
                message.channel.send(inventoryembed);
            }
        });
    }
}
exports.default = inv;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52ZW50b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2ludmVudG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzQztBQUV0QywrQkFBa0M7QUFDbEMseUJBQXlCO0FBRVosUUFBQSxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLFFBQUEsY0FBYyxHQUFHLEVBQUUsQ0FBQztBQUUvQixNQUFxQixHQUFHO0lBQXhCO1FBQ2tCLGFBQVEsR0FBRyxXQUFXLENBQUM7SUE4QnpDLENBQUM7SUE1QkEsSUFBSTtRQUNILE9BQU8sZ0RBQWdELENBQUM7SUFDekQsQ0FBQztJQUNELGFBQWEsQ0FBQyxPQUFlO1FBQzVCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDbEMsQ0FBQztJQUNELFVBQVUsQ0FBQyxJQUFjLEVBQUUsT0FBd0IsRUFBRSxNQUFzQjtRQUMxRSxNQUFNLElBQUksR0FBRyxFQUFFLENBQUMsUUFBUSxDQUN2QixxREFBcUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLE9BQU8sRUFDN0UsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDYixJQUFJLEdBQUcsRUFBRTtnQkFDUixPQUFPLENBQUMsS0FBSyxDQUFDLGlEQUFpRCxDQUFDLENBQUM7YUFDakU7aUJBQU07Z0JBQ04sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzNCLE1BQU0sY0FBYyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtxQkFDNUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztxQkFDbkIsUUFBUSxDQUFDLGdCQUFnQixJQUFJLEVBQUUsQ0FBQztxQkFDaEMsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLGVBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQztxQkFDM0MsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLGVBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQztxQkFDM0MsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLGVBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQztxQkFDM0MsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLGVBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQztxQkFDM0MsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLGVBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQztxQkFDM0MsWUFBWSxFQUFFLENBQUM7Z0JBQ2pCLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQ3JDO1FBQ0YsQ0FBQyxDQUNELENBQUM7SUFDSCxDQUFDO0NBQ0Q7QUEvQkQsc0JBK0JDIn0=