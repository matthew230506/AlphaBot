'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const ytdl = require('ytdl-core');
class play {
	constructor() {
		this._command = 'play';
	}
	help() {
		return 'Spielt Musik von Youtube ab.';
	}
	isThisCommand(command) {
		return command === this._command;
	}
	runCommand(args, message, client) {
		const voiceChannel = message.member.voiceChannel;
		if (!voiceChannel) {
			message.reply('please join a voice channel first!');
		}
		voiceChannel.join().then((connection) => {
			const stream = ytdl('https://www.youtube.com/watch?v=60ItHLz5WEA', { filter: 'audioonly' });
			const dispatcher = connection.playOpusStream(stream);
			dispatcher.on('end', () => voiceChannel.leave());
		});
	}
}
exports.default = play;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9wbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsa0NBQWtDO0FBRWxDLE1BQXFCLElBQUk7SUFBekI7UUFDa0IsYUFBUSxHQUFHLE1BQU0sQ0FBQztJQXdCcEMsQ0FBQztJQXRCQSxJQUFJO1FBQ0gsT0FBTyw4QkFBOEIsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsYUFBYSxDQUFDLE9BQWU7UUFDNUIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsVUFBVSxDQUFDLElBQWMsRUFBRSxPQUF3QixFQUFFLE1BQXNCO1FBQzFFLE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBRWpELElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1NBQ3BEO1FBRUQsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFO1lBQ3ZDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyw2Q0FBNkMsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDO1lBQzVGLE1BQU0sVUFBVSxHQUFHLFVBQVUsQ0FBQyxjQUFjLENBQzNDLElBQUksQ0FBQyw2Q0FBNkMsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUM1RSxDQUFDO1lBRUYsVUFBVSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0NBQ0Q7QUF6QkQsdUJBeUJDIn0=
