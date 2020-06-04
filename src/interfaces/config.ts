export interface IConfig {
    discord: IConfigDiscord;
    default: IConfigDefault;
}

export interface IConfigDiscord {
    token: string;
}

export interface IConfigDefault {
    ressources: IConfigDefaultRessources;
}

export interface IConfigDefaultRessources {
    wood: number;
    stone: number;
    gold_nugget: number;
    money: number;
}