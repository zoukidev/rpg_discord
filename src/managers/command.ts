import CommandModel from "../commands/model";

export default class CommandManager {
    static commands: CommandModel[] = [];

    static register(command: CommandModel) {
        CommandManager.commands.push(command);
    }
}
