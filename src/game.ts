import Logger from './utils/logger';
import DiscordBot from "./discord/bot";
import ConfigLoader from "./utils/configloader";
import Database from './repositories/database';
import { IConfig } from "./interfaces/config";
// Managers
import CommandManager from "./managers/command";
// Commands
import HelpCommand from "./commands/help";
import MineCommand from './commands/mine';
import PlayerRepository from './repositories/player';

export class Game {
    static config: IConfig;
    static logger: Logger;

    static loadConfig() {
        Game.config = ConfigLoader.load('config.yml');
    }

    static loadCommand() {
        CommandManager.register(new HelpCommand());
        CommandManager.register(new MineCommand());
    }

    static launch() {
        // Logger
        Game.logger = new Logger('Game');

        // Load
        Game.loadConfig();
        Game.loadCommand();

        // Init
        Database.init();
        DiscordBot.init(Game.config.discord.token);
    }
}

(() => {
    Game.launch();
})();
