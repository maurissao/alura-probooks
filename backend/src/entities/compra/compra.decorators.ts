import 'reflect-metadata';
import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { FormaPagamento } from '../types';

@ValidatorConstraint()
export class ValidateParcelas implements ValidatorConstraintInterface {
  private _message: string;
  validate(value: any, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
    const entity = validationArguments.object;
    const parcelas = value as number;
    const formaPagamento = entity['formaPagamento'] as FormaPagamento;
    if (formaPagamento) {
      if (formaPagamento === FormaPagamento.DEBITO && parcelas != 1) {
        this._message = 'A parcela deve ser 1 para essa forma de pagamento';
        return false;
      } else {
        if (formaPagamento === FormaPagamento.CREDITO && parcelas > 12) {
          this._message = 'Parcelamento a crédito não pode exceder 12 parcelas';
          return false;
        }
      }
    }
    return true;
  }
  defaultMessage(validationArguments?: ValidationArguments): string {
    return this._message || 'Parcela inválida';
  }
}
