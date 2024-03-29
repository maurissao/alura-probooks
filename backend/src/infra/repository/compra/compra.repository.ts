import { Repository } from "../base.repository";
import { Compra } from "../../../entities/compra/compra.entity";

export class CompraRepository extends Repository<Compra> {
    constructor() {
        super(Compra);
        this.BeforInsert = (entity: Compra) => {
            entity.valorPparcelas = entity.total | 0 / entity.parcelas | 1;
        }
    }
}