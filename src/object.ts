import {IGameObject} from "./interfaces/gameobject";

export default class GameObject {
    static objects: IGameObject[] = [
        {
            name: 'dynamite',
            icon: '🧨',
            dropRate: 0.02
        },
        {
            name: 'pills',
            icon: '💊',
            dropRate: 0.1
        },
        {
            name: 'drug',
            icon: '💉',
            dropRate: 0.1
        },
        {
            name: 'weapons',
            icon: '🔪',
            dropRate: 0.05
        },
        {
            name: 'tools',
            icon: '🛠',
            dropRate: 1
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
