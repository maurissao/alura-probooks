import { IsNotEmpty } from "class-validator";
import { Livro } from "../../entities/livro/livro.entity";
import { EntityDTO } from "../../infra/database/validation-services/datasource.validator";
import { IsNotEmptyMessage } from "src/entities/decorators/entity.decorators";

@EntityDTO('item_compra')
export class ItemCompraDTO {
    @IsNotEmpty(IsNotEmptyMessage)
    livroId: string;

    @IsNotEmpty(IsNotEmptyMessage)
    quantidade: number;

    @IsNotEmpty(IsNotEmptyMessage)
    preco: number;
}
