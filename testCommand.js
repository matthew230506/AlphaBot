"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class testCommand {
    constructor() {
        this._command = 'testCommand';
    }
    help() {
        return 'This does nothing.';
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, message, client) { }
}
exports.default = testCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdENvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdGVzdENvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxNQUFxQixXQUFXO0lBQWhDO1FBQ2tCLGFBQVEsR0FBRyxhQUFhLENBQUM7SUFTM0MsQ0FBQztJQVBBLElBQUk7UUFDSCxPQUFPLG9CQUFvQixDQUFDO0lBQzdCLENBQUM7SUFDRCxhQUFhLENBQUMsT0FBZTtRQUM1QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ2xDLENBQUM7SUFDRCxVQUFVLENBQUMsSUFBYyxFQUFFLE9BQXdCLEVBQUUsTUFBc0IsSUFBUyxDQUFDO0NBQ3JGO0FBVkQsOEJBVUMifQ==