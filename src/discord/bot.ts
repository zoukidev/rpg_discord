import * as Discord from 'discord.js';
import CommandManager from "../managers/command";
import CommandModel from "../commands/model";
import {Game} from "../game";
import Logger from "../utils/logger";

export default class DiscordBot {
    static instance: any;
    static logger: Logger;

    static init() {
        DiscordBot.logger = new Logger('Discord');

        DiscordBot.instance = new Discord.Client();

        DiscordBot.instance.on('message', DiscordBot.messageHandler);

        DiscordBot.instance.login(Game.config.discord.token);
        DiscordBot.logger.info('bot loaded');
    }

    static messageHandler(msg: Discord.Message) {
        let available_command: CommandModel = CommandManager.commands.filter(c => `!${c.name}` === `${msg.content}`)[0];

        if (available_command) {
            available_command.exec(msg);
        }
    }
}
