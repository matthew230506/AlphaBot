'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const ban_1 = require('./commands/ban');
const Ban = new ban_1.default();
const Banhelp = Ban.help();
const buy_1 = require('./commands/buy');
const Buy = new buy_1.default();
const help_1 = require('./commands/help');
const Help = new help_1.default();
const home_1 = require('./commands/home');
const Home = new home_1.default();
const inventory_1 = require('./commands/inventory');
const Inv = new inventory_1.default();
const kick_1 = require('./commands/kick');
const Kick = new kick_1.default();
const newgame_1 = require('./commands/newgame');
const Newgame = new newgame_1.default();
const survey_1 = require('./commands/survey');
const Survey = new survey_1.default();
const trader_1 = require('./commands/trader');
const Trader = new trader_1.default();
const warn_1 = require('./commands/warn');
const Warn = new warn_1.default();
const welcome_1 = require('./commands/welcome');
const Welcome = new welcome_1.default();
exports.config = {
	commands: [ 'ban', 'kick', 'warn', 'welcome', 'buy', 'home', 'inventory', 'newgame', 'trader', 'survey', 'help' ],
	commandshelp: [
		Ban.help(),
		Kick.help(),
		Warn.help(),
		Welcome.help(),
		Buy.help(),
		Home.help(),
		Inv.help(),
		Newgame.help(),
		Trader.help(),
		Survey.help(),
		Help.help()
	],
	Admin1: '<@503103781412798464>',
	Admin2: '<@571747061566013442>',
	Moderator1: '<@591972799975784468>'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUFpQztBQUNqQyxNQUFNLEdBQUcsR0FBRyxJQUFJLGFBQUcsRUFBRSxDQUFDO0FBQ3RCLE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUMzQix3Q0FBaUM7QUFDakMsTUFBTSxHQUFHLEdBQUcsSUFBSSxhQUFHLEVBQUUsQ0FBQztBQUN0QiwwQ0FBbUM7QUFDbkMsTUFBTSxJQUFJLEdBQUcsSUFBSSxjQUFJLEVBQUUsQ0FBQztBQUN4QiwwQ0FBbUM7QUFDbkMsTUFBTSxJQUFJLEdBQUcsSUFBSSxjQUFJLEVBQUUsQ0FBQztBQUN4QixvREFBdUM7QUFDdkMsTUFBTSxHQUFHLEdBQUcsSUFBSSxtQkFBRyxFQUFFLENBQUM7QUFDdEIsMENBQW1DO0FBQ25DLE1BQU0sSUFBSSxHQUFHLElBQUksY0FBSSxFQUFFLENBQUM7QUFDeEIsZ0RBQXlDO0FBQ3pDLE1BQU0sT0FBTyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO0FBQzlCLDhDQUF1QztBQUN2QyxNQUFNLE1BQU0sR0FBRyxJQUFJLGdCQUFNLEVBQUUsQ0FBQztBQUM1Qiw4Q0FBdUM7QUFDdkMsTUFBTSxNQUFNLEdBQUcsSUFBSSxnQkFBTSxFQUFFLENBQUM7QUFDNUIsMENBQW1DO0FBQ25DLE1BQU0sSUFBSSxHQUFHLElBQUksY0FBSSxFQUFFLENBQUM7QUFDeEIsZ0RBQXlDO0FBQ3pDLE1BQU0sT0FBTyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO0FBRW5CLFFBQUEsTUFBTSxHQUFHO0lBQ25CLEtBQUssRUFBRSw2REFBNkQ7SUFDcEUsTUFBTSxFQUFFLEdBQUc7SUFDWCxRQUFRLEVBQUU7UUFDVCxLQUFLO1FBQ0wsTUFBTTtRQUNOLE1BQU07UUFDTixTQUFTO1FBQ1QsS0FBSztRQUNMLE1BQU07UUFDTixXQUFXO1FBQ1gsU0FBUztRQUNULFFBQVE7UUFDUixRQUFRO1FBQ1IsTUFBTTtRQUNOLE1BQU07S0FDTjtJQUNELFlBQVksRUFBRTtRQUNiLEdBQUcsQ0FBQyxJQUFJLEVBQUU7UUFDVixJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ1gsSUFBSSxDQUFDLElBQUksRUFBRTtRQUNYLE9BQU8sQ0FBQyxJQUFJLEVBQUU7UUFDZCxHQUFHLENBQUMsSUFBSSxFQUFFO1FBQ1YsSUFBSSxDQUFDLElBQUksRUFBRTtRQUNYLEdBQUcsQ0FBQyxJQUFJLEVBQUU7UUFDVixPQUFPLENBQUMsSUFBSSxFQUFFO1FBQ2QsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNiLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDYixJQUFJLENBQUMsSUFBSSxFQUFFO0tBQ1g7SUFDRCxNQUFNLEVBQUUsdUJBQXVCO0lBQy9CLE1BQU0sRUFBRSx1QkFBdUI7SUFDL0IsVUFBVSxFQUFFLHVCQUF1QjtDQUNuQyxDQUFDIn0=
