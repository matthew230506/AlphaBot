"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ban {
    constructor() {
        this._command = 'ban';
    }
    help() {
        return 'Bant einen User.';
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, message, client) {
    }
}
exports.default = ban;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2Jhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLE1BQXFCLEdBQUc7SUFBeEI7UUFDa0IsYUFBUSxHQUFHLEtBQUssQ0FBQztJQVduQyxDQUFDO0lBVEEsSUFBSTtRQUNILE9BQU8sa0JBQWtCLENBQUM7SUFDM0IsQ0FBQztJQUNELGFBQWEsQ0FBQyxPQUFlO1FBQzVCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDbEMsQ0FBQztJQUNELFVBQVUsQ0FBQyxJQUFjLEVBQUUsT0FBd0IsRUFBRSxNQUFzQjtJQUUzRSxDQUFDO0NBQ0Q7QUFaRCxzQkFZQyJ9