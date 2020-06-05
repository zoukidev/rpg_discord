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

    static printCommandList() {
        let commands: any = '';

        (CommandManager.commands).map((command: CommandModel) => {
            commands += `**!${command.name}** ${command.description}\n`;
        });

        return commands;
    }

}
