import CommandModel from "../commands/model";
import Logger from "../utils/logger";

export default class CommandManager {
    static commands: CommandModel[] = [];
    static logger: Logger;

    static init() {
        CommandManager.logger = new Logger('CommandManager');
    }

    static register(command: CommandModel) {
        CommandManager.commands.push(command);
    }
}
