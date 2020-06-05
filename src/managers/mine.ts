import Logger from "../utils/logger";

export default class MineManager {
    static logger: Logger;
    static timer: number = 1;
    static tasks: any[] = [];

    static init() {
        MineManager.logger = new Logger('MineManager');
        MineManager.uptime();
    }

    static uptime() {
        setInterval(() => {
            // Object.keys(MineManager.tasks).map(key => {
            //     let task: any = MineManager.tasks["keys"];
            // });

            MineManager.timer++;
        }, 1000);

        setInterval(() => {
            MineManager.logger.info(`uptime: ${MineManager.timer}`);
        }, ((1000 * 60) * 60) * 10); // 10 minutes
    }
}
