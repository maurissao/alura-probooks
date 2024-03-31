import "reflect-metadata";
import { Inject, Injectable } from '@nestjs/common';
import { registerDecorator, ValidationOptions, ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { DataSource, Repository } from 'typeorm';
import { AppDataSource } from '../database.provider';
import { getMetadataArgsStorage } from 'typeorm';
import { MetadataArgsStorage } from "typeorm/metadata-args/MetadataArgsStorage";

function getMetadataStorage(object: any): MetadataArgsStorage | undefined {
    const metadataArgsStorage = getMetadataArgsStorage();
    const entityMetadataArgs = metadataArgsStorage.tables.find(entity => entity.target === object);
    return metadataArgsStorage || undefined;
}

export const EntityDTO = function (entity: any) {
    return function (target: Function) {
        Reflect.defineMetadata('entityDTO', entity, target);
    };
};

@ValidatorConstraint()
export class OneToOneForeignKeyValidatorConstraint implements ValidatorConstraintInterface {
    private dataSource: DataSource;

    constructor() {
        this.dataSource = AppDataSource;
    }

    validate(value: any, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
        return new Promise<boolean>(async (resolve, reject) => {
            try {
                const entity = Reflect.getMetadata('entityDTO', validationArguments.object.constructor);
                const metadataArgsStorage: MetadataArgsStorage = getMetadataStorage(entity);
                // const entityName = metadataArgsStorage.tables.find(t => t.target === entity).name;
                // const relationMetadata = metadataArgsStorage.relations.find(r => r.target === entity && r.propertyName === validationArguments.property);
                // const columnMetadata = metadataArgsStorage.columns.filter(c => c.target === entity);
                // const joinMetadata = metadataArgsStorage.joinColumns.find(j => j.target === entity);
                const refOptions: ReferenceOptions = validationArguments.constraints[0] || undefined;
                const sql = `select * from ${refOptions.referencedEntity} where ${refOptions.referencedColumn} = '${value}'`;
                const data = await this.dataSource.query(sql);
                const result = data.length > 0; 
                resolve(result);
            } catch (e) {
                reject(e);
            }
        });
    }
    defaultMessage?(validationArguments?: ValidationArguments): string {
        return 'bla bla bla'
    }
}

type ReferenceOptions = {
    referencedEntity: any,
    referencedColumn: string;
}

export function OneToOneForeignKeyValidator(reference?: ReferenceOptions) {
    return function (object: object, propertyName: string) {
        const validationOptions: ValidationOptions = {};
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [reference],
            validator: OneToOneForeignKeyValidatorConstraint,
        });
    };
}