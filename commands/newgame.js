"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class newgame {
    constructor() {
        this._command = 'newgame';
    }
    help() {
        return 'Startet das Setup zum Textadventure (WIP!).';
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, message, client) {
        function RoleCreate(RoleName) {
            return __awaiter(this, void 0, void 0, function* () {
                message.reply(`dein Name ist ${RoleName}`);
                yield message.member.guild.createRole({ name: `${RoleName}`, permissions: ['READ_MESSAGE_HISTORY'] });
                const member = message.member;
                const role = message.guild.roles.find('name', `${RoleName}`);
                member.addRole(role);
            });
        }
        RoleCreate(args[0]);
    }
}
exports.default = newgame;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3Z2FtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9uZXdnYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBSUEsTUFBcUIsT0FBTztJQUE1QjtRQUNrQixhQUFRLEdBQUcsU0FBUyxDQUFDO0lBa0J2QyxDQUFDO0lBaEJBLElBQUk7UUFDSCxPQUFPLDZDQUE2QyxDQUFDO0lBQ3RELENBQUM7SUFDRCxhQUFhLENBQUMsT0FBZTtRQUM1QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ2xDLENBQUM7SUFDRCxVQUFVLENBQUMsSUFBYyxFQUFFLE9BQXdCLEVBQUUsTUFBc0I7UUFDMUUsU0FBZSxVQUFVLENBQUMsUUFBZ0I7O2dCQUN6QyxPQUFPLENBQUMsS0FBSyxDQUFDLGlCQUFpQixRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUMzQyxNQUFNLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLFFBQVEsRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFFLHNCQUFzQixDQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUN4RyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO2dCQUM5QixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsUUFBUSxFQUFFLENBQUMsQ0FBQztnQkFDN0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QixDQUFDO1NBQUE7UUFDRCxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckIsQ0FBQztDQUNEO0FBbkJELDBCQW1CQyJ9