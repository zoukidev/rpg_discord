import * as Discord from 'discord.js';
import CommandManager from "../managers/command";
import CommandModel from "../commands/model";

export default class DiscordBot {
    static instance: any;

    static init(token: string) {
        DiscordBot.instance = new Discord.Client();

        DiscordBot.instance.on('message', DiscordBot.messageHandler);

        DiscordBot.instance.login(token);
    }

    static messageHandler(msg: Discord.Message) {
        let available_command: CommandModel = CommandManager.commands.filter(c => `!${c.name}` === `${msg.content}`)[0];

        if (available_command) {
            available_command.exec(msg);
        }
    }
}
