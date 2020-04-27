"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item1name = 'Item1';
exports.Item1countfull = 3;
exports.Item1count = 3;
exports.Item2name = 'Item2';
exports.Item2countfull = 6;
exports.Item2count = 6;
exports.Item3name = 'Item3';
exports.Item3countfull = 2;
exports.Item3count = 2;
exports.inventory = ['leer', 'leer', 'leer', 'leer', 'leer'];
class buy {
    constructor() {
        this._command = 'buy';
    }
    help() {
        return 'Hiermit kauft man etwas für das Textadventure.';
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, message, client) {
        if (`${args}` === exports.Item1name && exports.Item1count > 0) {
            if (exports.inventory[0] === 'leer') {
                exports.inventory[0] = exports.Item1name;
                exports.Item1count = exports.Item1count - 1;
                message.reply(`${exports.Item1name} wurde zu deinem Inventar hinzugefügt!`);
            }
            else {
                if (exports.inventory[1] === 'leer') {
                    exports.inventory[1] = exports.Item1name;
                    exports.Item1count = exports.Item1count - 1;
                    message.reply(`${exports.Item1name} wurde zu deinem Inventar hinzugefügt!`);
                }
                else {
                    if (exports.inventory[2] === 'leer') {
                        exports.inventory[2] = exports.Item1name;
                        exports.Item1count = exports.Item1count - 1;
                        message.reply(`${exports.Item1name} wurde zu deinem Inventar hinzugefügt!`);
                    }
                    else {
                        if (exports.inventory[3] === 'leer') {
                            exports.inventory[3] = exports.Item1name;
                            exports.Item1count = exports.Item1count - 1;
                            message.reply(`${exports.Item1name} wurde zu deinem Inventar hinzugefügt!`);
                        }
                        else {
                            if (exports.inventory[4] === 'leer') {
                                exports.inventory[4] = exports.Item1name;
                                exports.Item1count = exports.Item1count - 1;
                                message.reply(`${exports.Item1name} wurde zu deinem Inventar hinzugefügt!`);
                            }
                            else {
                                message.reply('dein Inventar ist voll.');
                            }
                        }
                    }
                }
            }
        }
        else if (`${args}` === exports.Item2name && exports.Item2count > 0) {
            if (exports.inventory[0] === 'leer') {
                exports.inventory[0] = exports.Item2name;
                exports.Item2count = exports.Item2count - 1;
                message.reply(`${exports.Item2name} wurde zu deinem Inventar hinzugefügt!`);
            }
            else {
                if (exports.inventory[1] === 'leer') {
                    exports.inventory[1] = exports.Item2name;
                    exports.Item2count = exports.Item2count - 1;
                    message.reply(`${exports.Item2name} wurde zu deinem Inventar hinzugefügt!`);
                }
                else {
                    if (exports.inventory[2] === 'leer') {
                        exports.inventory[2] = exports.Item2name;
                        exports.Item2count = exports.Item2count - 1;
                        message.reply(`${exports.Item2name} wurde zu deinem Inventar hinzugefügt!`);
                    }
                    else {
                        if (exports.inventory[3] === 'leer') {
                            exports.inventory[3] = exports.Item2name;
                            exports.Item2count = exports.Item2count - 1;
                            message.reply(`${exports.Item2name} wurde zu deinem Inventar hinzugefügt!`);
                        }
                        else {
                            if (exports.inventory[4] === 'leer') {
                                exports.inventory[4] = exports.Item2name;
                                exports.Item2count = exports.Item2count - 1;
                                message.reply(`${exports.Item2name} wurde zu deinem Inventar hinzugefügt!`);
                            }
                            else {
                                message.reply('dein Inventar ist voll.');
                            }
                        }
                    }
                }
            }
        }
        else if (`${args}` === exports.Item3name && exports.Item3count > 0) {
            if (exports.inventory[0] === 'leer') {
                exports.inventory[0] = exports.Item3name;
                exports.Item3count = exports.Item3count - 1;
                message.reply(`${exports.Item3name} wurde zu deinem Inventar hinzugefügt!`);
            }
            else {
                if (exports.inventory[1] === 'leer') {
                    exports.inventory[1] = exports.Item3name;
                    exports.Item3count = exports.Item3count - 1;
                    message.reply(`${exports.Item3name} wurde zu deinem Inventar hinzugefügt!`);
                }
                else {
                    if (exports.inventory[2] === 'leer') {
                        exports.inventory[2] = exports.Item3name;
                        exports.Item3count = exports.Item3count - 1;
                        message.reply(`${exports.Item3name} wurde zu deinem Inventar hinzugefügt!`);
                    }
                    else {
                        if (exports.inventory[3] === 'leer') {
                            exports.inventory[3] = exports.Item3name;
                            exports.Item3count = exports.Item3count - 1;
                            message.reply(`${exports.Item3name} wurde zu deinem Inventar hinzugefügt!`);
                        }
                        else {
                            if (exports.inventory[4] === 'leer') {
                                exports.inventory[4] = exports.Item3name;
                                exports.Item3count = exports.Item3count - 1;
                                message.reply(`${exports.Item3name} wurde zu deinem Inventar hinzugefügt!`);
                            }
                            else {
                                message.reply('dein Inventar ist voll.');
                            }
                        }
                    }
                }
            }
        }
    }
}
exports.default = buy;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2J1eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdhLFFBQUEsU0FBUyxHQUFHLE9BQU8sQ0FBQztBQUNwQixRQUFBLGNBQWMsR0FBRyxDQUFDLENBQUM7QUFDckIsUUFBQSxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBQ2IsUUFBQSxTQUFTLEdBQUcsT0FBTyxDQUFDO0FBQ3BCLFFBQUEsY0FBYyxHQUFHLENBQUMsQ0FBQztBQUNyQixRQUFBLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFDYixRQUFBLFNBQVMsR0FBRyxPQUFPLENBQUM7QUFDcEIsUUFBQSxjQUFjLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCLFFBQUEsVUFBVSxHQUFHLENBQUMsQ0FBQztBQUNiLFFBQUEsU0FBUyxHQUFhLENBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBRSxDQUFDO0FBRTlFLE1BQXFCLEdBQUc7SUFBeEI7UUFDa0IsYUFBUSxHQUFHLEtBQUssQ0FBQztJQTJHbkMsQ0FBQztJQXpHQSxJQUFJO1FBQ0gsT0FBTyxnREFBZ0QsQ0FBQztJQUN6RCxDQUFDO0lBQ0QsYUFBYSxDQUFDLE9BQWU7UUFDNUIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsVUFBVSxDQUFDLElBQWMsRUFBRSxPQUF3QixFQUFFLE1BQXNCO1FBQzFFLElBQUksR0FBRyxJQUFJLEVBQUUsS0FBSyxpQkFBUyxJQUFJLGtCQUFVLEdBQUcsQ0FBQyxFQUFFO1lBQzlDLElBQUksaUJBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxNQUFNLEVBQUU7Z0JBQzVCLGlCQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsaUJBQVMsQ0FBQztnQkFDekIsa0JBQVUsR0FBRyxrQkFBVSxHQUFHLENBQUMsQ0FBQztnQkFDNUIsT0FBTyxDQUFDLEtBQUss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