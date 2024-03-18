import { Store } from "./store"

export const StoreProviders = [
    {
        provide: 'StoreProvider',
        useFactory: async () => {
            return Store.Instance;
        }
    }
];