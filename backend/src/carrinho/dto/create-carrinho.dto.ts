import "reflect-metadata";
import { CreateItemCarrinhoDTO } from "./create-item_carrinho.dto";
import { IsArray, IsNotEmpty, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { IsNotEmptyMessage } from "../../entities/decorators/entity.decorators";
import { ForeignKeyValidator } from "../../infra/database/validation-services/foreign-key.validator";

export class CreateCarrinhoDto {
    id: string;

    @IsNotEmpty(IsNotEmptyMessage)
    @ForeignKeyValidator({referencedEntity: 'usuario', referencedColumn: 'id'})
    usuarioId: string;

    @IsNotEmpty(IsNotEmptyMessage)
    @ValidateNested()
    @IsArray()
    @Type(() => CreateItemCarrinhoDTO)
    itemCarrinho: CreateItemCarrinhoDTO[];

    @IsNotEmpty(IsNotEmptyMessage)
    total: number;  
}
