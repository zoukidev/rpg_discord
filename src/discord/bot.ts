import * as Discord from 'discord.js';
import CommandManager from "../managers/command";
import {Game} from "../game";
import Logger from "../utils/logger";

export default class DiscordBot {
    static instance: any;
    static logger: Logger;

    static init() {
        DiscordBot.logger = new Logger('Discord');

        DiscordBot.instance = new Discord.Client();

        DiscordBot.instance.on('message', CommandManager.processMessage);

        DiscordBot.instance.login(Game.config.discord.token);
        DiscordBot.logger.info('bot loaded');
    }
}
