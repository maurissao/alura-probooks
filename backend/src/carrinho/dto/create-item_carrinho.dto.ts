import "reflect-metadata";
import { IsNotEmpty } from "class-validator";
import { IsNotEmptyMessage } from "../../entities/decorators/entity.decorators";
import { ForeignKeyValidator } from "../../infra/database/validation-services/foreign-key.validator";

export class CreateItemCarrinhoDTO {
    @IsNotEmpty(IsNotEmptyMessage)
    @ForeignKeyValidator({referencedEntity: 'livro', referencedColumn: 'id'})
    livroId: string;

    @IsNotEmpty(IsNotEmptyMessage)
    quantidade: number;

    @IsNotEmpty(IsNotEmptyMessage)
    preco: number;    
}
