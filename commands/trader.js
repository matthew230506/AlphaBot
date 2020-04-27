"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const buy_1 = require("./buy");
class trader {
    constructor() {
        this._command = 'trader';
    }
    help() {
        return 'Schickt das Traderembed für das Textadventure (WIP!).';
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, message, client) {
        const traderembed = new Discord.RichEmbed()
            .setColor('#4d4d4d')
            .setTitle(`Händler`)
            .addField(`${buy_1.Item1name} (${buy_1.Item1count}/${buy_1.Item1countfull})`, '100', true)
            .addField(`${buy_1.Item2name} (${buy_1.Item2count}/${buy_1.Item2countfull})`, '50', true)
            .addField(`${buy_1.Item3name} (${buy_1.Item3count}/${buy_1.Item3countfull})`, '200', true)
            .setTimestamp();
        message.channel.send(traderembed);
    }
}
exports.default = trader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL3RyYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzQztBQUV0QywrQkFVZTtBQUVmLE1BQXFCLE1BQU07SUFBM0I7UUFDa0IsYUFBUSxHQUFHLFFBQVEsQ0FBQztJQWtCdEMsQ0FBQztJQWhCQSxJQUFJO1FBQ0gsT0FBTyx1REFBdUQsQ0FBQztJQUNoRSxDQUFDO0lBQ0QsYUFBYSxDQUFDLE9BQWU7UUFDNUIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsVUFBVSxDQUFDLElBQWMsRUFBRSxPQUF3QixFQUFFLE1BQXNCO1FBQzFFLE1BQU0sV0FBVyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTthQUN6QyxRQUFRLENBQUMsU0FBUyxDQUFDO2FBQ25CLFFBQVEsQ0FBQyxTQUFTLENBQUM7YUFDbkIsUUFBUSxDQUFDLEdBQUcsZUFBUyxLQUFLLGdCQUFVLElBQUksb0JBQWMsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUM7YUFDdkUsUUFBUSxDQUFDLEdBQUcsZUFBUyxLQUFLLGdCQUFVLElBQUksb0JBQWMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7YUFDdEUsUUFBUSxDQUFDLEdBQUcsZUFBUyxLQUFLLGdCQUFVLElBQUksb0JBQWMsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUM7YUFDdkUsWUFBWSxFQUFFLENBQUM7UUFDakIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkMsQ0FBQztDQUNEO0FBbkJELHlCQW1CQyJ9