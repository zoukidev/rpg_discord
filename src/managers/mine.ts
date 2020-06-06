import GameObject from "../object";
import {IGameObject} from "../interfaces/gameobject";
// @ts-ignore
import * as JustMyLuck from 'just-my-luck';

export default class MineManager {
    static getChance(): any {
        let objects: any[] = GameObject.objects.map((o: IGameObject) => ({
                ...o,
                dropped: JustMyLuck.chance(o.dropRate),
                quantity: JustMyLuck.integer(1, 3)
        }));

        return objects.filter((o: any) => o.dropped);
    }
}
