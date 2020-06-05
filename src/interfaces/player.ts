export interface IPlayer {
    id: string;
    money: number;
    is_mining: boolean;
    actions: IPlayerActions;
    objects: IPlayerGameObject[];
}

export interface IPlayerActions {
    is_mining: boolean;
}


export interface IPlayerGameObject {
    id: string;
    quantity: number;
}
