import { LocalStorage } from 'node-localstorage';
import { Repository } from '../repository/base.repository';
import { Entity } from '../../entities/types';

export class Store {
  #storageName: string = 'pro-books';
  #storage: LocalStorage;
  private static instance: Store;
  constructor() {
    this.#storage = new LocalStorage(this.#storageName);
  }

  public static get Instance(): Store {
    if (!Store.instance) {
      Store.instance = new Store()
    }
    return Store.instance;
  }

  public getData(key: string): any[] {
    return JSON.parse(this.#storage.getItem(key)) || [];
  }

  public saveData(key: string, data: any): void {
    const state: any[] = this.getData(key);
    state.push(data);
    this.#storage.setItem(key, JSON.stringify(state));
  }

  public getRepository(entity: Entity): Repository<Entity>
  {
    return new Repository<Entity>(entity);
  }

}
