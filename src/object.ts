import {IGameObject} from "./interfaces/gameobject";

export default class GameObject {
    static objects: IGameObject[] = [
        {
            name: 'dynamite',
            icon: '🧨',
        },
        {
            name: 'bomb',
            icon: '💣',
        },
        {
            name: 'pills',
            icon: '💊',
        },
        {
            name: 'drug',
            icon: '💉',
        },
        {
            name: 'syringe',
            icon: '💉',
        },
        {
            name: 'weapons',
            icon: '🔪',
        },
        {
            name: 'tools',
            icon: '🛠',
        }
    ];

    /**
     *
     * @param id
     * @return IGameObject
     */
    static findById(id: string): IGameObject {
        return GameObject.objects.filter((g: IGameObject) => g.name == id)[0];
    }

    /**
     * @return GameObject[]
     */
    static initPlayerGameObject(): GameObject[] {
        return GameObject.objects.map((g: IGameObject) => ({
            id: g.name,
            quantity: 0
        }));
    }
}
