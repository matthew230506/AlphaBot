"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class warn {
    constructor() {
        this._command = 'warn';
    }
    help() {
        return 'Warnt jemanden miit einer DM.';
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, message, client) {
        const args2 = `${args[0]}`;
        const args3 = args2.slice(2, -1);
        const args4 = args3.slice(1);
        console.log(args2);
        const mentioneduser = message.guild.member(`${args4}`);
        const reason = `${args[1]}`;
        mentioneduser.send(`Hi ${mentioneduser}, du wurdest von <@${message.author.id}> gewarnt. Grund: ${reason}`);
    }
}
exports.default = warn;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Fybi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy93YXJuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsTUFBcUIsSUFBSTtJQUF6QjtRQUNrQixhQUFRLEdBQUcsTUFBTSxDQUFDO0lBaUJwQyxDQUFDO0lBZkEsSUFBSTtRQUNILE9BQU8sK0JBQStCLENBQUM7SUFDeEMsQ0FBQztJQUNELGFBQWEsQ0FBQyxPQUFlO1FBQzVCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDbEMsQ0FBQztJQUNELFVBQVUsQ0FBQyxJQUFjLEVBQUUsT0FBd0IsRUFBRSxNQUFzQjtRQUMxRSxNQUFNLEtBQUssR0FBVyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUN2RCxNQUFNLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzVCLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxhQUFhLHNCQUFzQixPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUscUJBQXFCLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDN0csQ0FBQztDQUNEO0FBbEJELHVCQWtCQyJ9