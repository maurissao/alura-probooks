import { Module } from "@nestjs/common";
import { StoreProviders } from "./store.provider";

@Module({
    providers: [...StoreProviders],
    exports: [...StoreProviders]
})
export class StoreModule {}
