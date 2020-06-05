import CommandModel from "../commands/model";
import Logger from "../utils/logger";
import {Message} from "discord.js";
import GameRepository from "../repositories/game";

export default class CommandManager {
    static commands: CommandModel[] = [];
    static logger: Logger;

    static init() {
        CommandManager.logger = new Logger('CommandManager');
    }

    static register(command: CommandModel) {
        CommandManager.commands.push(command);
    }

    static processMessage(msg: Message) {
        if (CommandManager.checkChannel(msg)) {
            let available_command: CommandModel = CommandManager.commands.filter(c => `!${c.name}` === `${msg.content}`)[0];

            if (available_command) {
                available_command.exec(msg);
                msg.delete();
            }
        }
    }

    static checkChannel(msg: Message): boolean {
        let defaultChannel = GameRepository.get('channel')

        return msg.channel.id == defaultChannel;
    }

    static printCommandList() {
        let commands: any = '';

        (CommandManager.commands).map((command: CommandModel) => {
            commands += `**!${command.name}** ${command.description}\n`;
        });

        return commands;
    }

}
