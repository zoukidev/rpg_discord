import Logger from './utils/logger';
import DiscordBot from "./discord/bot";
// Managers
import CommandManager from "./managers/command";
// Commands
import HelpCommand from "./commands/help";
import ConfigLoader from "./utils/configloader";
import { IConfig } from "./interfaces/config";

export class Game {
    static config: IConfig;
    static logger: Logger;

    static loadConfig() {
        Game.config = ConfigLoader.load('config.yml');
    }

    static loadCommand() {
        CommandManager.register(new HelpCommand());
    }

    static launch() {
        // Logger
        Game.logger = new Logger('Game');

        // Load
        Game.loadConfig();
        Game.loadCommand();

        // Init
        DiscordBot.init(Game.config.discord.token);
    }
}

(() => {
    Game.launch();
})();
