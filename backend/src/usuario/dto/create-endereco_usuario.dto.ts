import { IsNotEmpty } from "class-validator";
import { EntityDTO } from "../../infra/database/validation-services/datasource.validator";
import { IsNotEmptyMessage } from "src/entities/decorators/entity.decorators";

@EntityDTO('endereco_usuario')
export class EnderecoUsuarioDTO {
    @IsNotEmpty(IsNotEmptyMessage)
    pais: string;

    @IsNotEmpty(IsNotEmptyMessage)
    estado: string;

    @IsNotEmpty(IsNotEmptyMessage)
    cidade: string;

    @IsNotEmpty(IsNotEmptyMessage)
    bairro: string;

    @IsNotEmpty(IsNotEmptyMessage)
    rua: string;

    @IsNotEmpty(IsNotEmptyMessage)
    numero: string;

    @IsNotEmpty(IsNotEmptyMessage)
    complemento: string;

    @IsNotEmpty(IsNotEmptyMessage)
    cep: string;
}
