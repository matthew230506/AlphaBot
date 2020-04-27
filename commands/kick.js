"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class kick {
    constructor() {
        this._command = 'kick';
    }
    help() {
        return 'Kickt einen User.';
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, message, client) {
        let mentionedUser = message.mentions.users.first();
        let suppliedReason = args.slice(1).join(' ') || '';
        let kickLog = `${message.author.username}: ${suppliedReason}`;
        message.delete(0);
        if (!message.member.hasPermission('ADMINISTRATOR')) {
            message.channel.send(`Nice try ${message.author.username}, you do not have permission...`);
            return;
        }
        if (!mentionedUser) {
            message.channel.send('Could not find that person');
            return;
        }
        message.guild.member(mentionedUser).kick(kickLog).then(console.log).catch(console.error);
    }
}
exports.default = kick;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2ljay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9raWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsTUFBcUIsSUFBSTtJQUF6QjtRQUNrQixhQUFRLEdBQUcsTUFBTSxDQUFDO0lBMkJwQyxDQUFDO0lBekJBLElBQUk7UUFDSCxPQUFPLG1CQUFtQixDQUFDO0lBQzVCLENBQUM7SUFDRCxhQUFhLENBQUMsT0FBZTtRQUM1QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ2xDLENBQUM7SUFDRCxVQUFVLENBQUMsSUFBYyxFQUFFLE9BQXdCLEVBQUUsTUFBc0I7UUFDMUUsSUFBSSxhQUFhLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkQsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25ELElBQUksT0FBTyxHQUFHLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEtBQUssY0FBYyxFQUFFLENBQUM7UUFFOUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVsQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDbkQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsaUNBQWlDLENBQUMsQ0FBQztZQUMzRixPQUFPO1NBQ1A7UUFFRCxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ25CLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFDbkQsT0FBTztTQUNQO1FBRUQsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxRixDQUFDO0NBQ0Q7QUE1QkQsdUJBNEJDIn0=