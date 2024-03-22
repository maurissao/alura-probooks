type EntityEvent = any;

export interface IEntity {
    [key: string]: any;
    onChange: EntityEvent;
}

export class Entity implements IEntity {
    constructor() {
        return new Proxy(this, {
            get(target: IEntity, key: string): any {
                return target[key];
            },
            set(target: IEntity, key: string, value: any): boolean {
                if (target['onChange'])
                    target['onChange'](target);
                target[key] = value;
                return true;
            }
        });
    }

    onChange: EntityEvent;
}

export enum FormaPagamento {
    DEBITO = 1,
    CREDITO = 2
}
