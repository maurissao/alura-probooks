import "reflect-metadata";
import { ItemCompra } from "../../entities/compra/item-compra.entity";
import { EntityDTO } from "../../infra/database/validation-services/foreign-key.validator";
import { IsArray, IsNotEmpty, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ItemCompraDTO } from "./create-item_compra.dto";
import { IsNotEmptyMessage } from "../../entities/decorators/entity.decorators";

@EntityDTO('compra')
export class CreateCompraDto {
    usuarioId: string;
  
    // @IsNotEmpty(IsNotEmptyMessage)
    // @ValidateNested()
    @Type(() => ItemCompraDTO)   
    itens: ItemCompra[];
  
    @IsNotEmpty(IsNotEmptyMessage)
    formaPagamento: string;
  
    @IsNotEmpty(IsNotEmptyMessage)
    parcelas: number = 1;
  
    @IsNotEmpty(IsNotEmptyMessage)
    valorParcela: number;
    
    @IsNotEmpty(IsNotEmptyMessage)
    total: number;
}  
