import CommandModel from "./model";
import { Message } from "discord.js";
import CommandManager from "../managers/command";

export default class HelpCommand extends CommandModel {
    constructor() {
        super('help', 'Display all command');
    }

    exec(msg: Message) {
        msg.channel.send(CommandManager.printCommandList());
    }
}
