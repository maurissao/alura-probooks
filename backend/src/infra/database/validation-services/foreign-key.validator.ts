import "reflect-metadata";
import { Inject, Injectable } from '@nestjs/common';
import { registerDecorator, ValidationOptions, ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { DataSource, Repository } from 'typeorm';
import { AppDataSource } from '../database.provider';
import { getMetadataArgsStorage } from 'typeorm';
import { MetadataArgsStorage } from "typeorm/metadata-args/MetadataArgsStorage";

type ReferenceOptions = {
    referencedEntity: any,
    referencedColumn: string;
}

function getMetadataStorage(object: any): MetadataArgsStorage | undefined {
    const metadataArgsStorage = getMetadataArgsStorage();
    // const entityMetadataArgs = metadataArgsStorage.tables.find(entity => entity.target === object);
    return metadataArgsStorage || undefined;
}

export const EntityDTO = function (entity: any) {
    return function (target: Function) {
        Reflect.defineMetadata('entityDTO', entity, target);
    };
};

@ValidatorConstraint()
export class ForeignKeyValidatorConstraint implements ValidatorConstraintInterface {
    private dataSource: DataSource;

    constructor() {
        this.dataSource = AppDataSource;
    }

    validate(value: any, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
        return new Promise<boolean>(async (resolve, reject) => {
            try {
                const entity = Reflect.getMetadata('entityDTO', validationArguments.object.constructor);
                // const metadataArgsStorage = getMetadataStorage(entity);
                // const entityName = metadataArgsStorage.tables.find(t => t.target === entity).name;
                // const relationMetadata = metadataArgsStorage.relations.filter(r => r.target === entity && r.propertyName === validationArguments.property);
                // const type = relationMetadata[0].type.valueOf();
                // const columnMetadata = metadataArgsStorage.columns.filter(c => c.target === entity);
                // const joinMetadata = metadataArgsStorage.joinColumns.find(j => j.target === entity);
                const refOptions: ReferenceOptions = validationArguments.constraints[0] || undefined;
                const sql = `select * from ${refOptions.referencedEntity} where "${refOptions.referencedColumn}" = '${value}'`;
                const data = await this.dataSource.query(sql);
                const result = data.length > 0; 
                resolve(result);
            } catch (e) {
                resolve(false);
            }
        });
    }
    defaultMessage?(validationArguments?: ValidationArguments): string {
        const refOptions: ReferenceOptions = validationArguments.constraints[0] || undefined;
        return `${refOptions.referencedEntity}.${refOptions.referencedColumn} ${validationArguments.value} não existe`
    }
}

@ValidatorConstraint()
export class UniqueKeyValidatorConstraint implements ValidatorConstraintInterface {
    private dataSource: DataSource;
    private entity;
    private metadataArgsStorage;
    private entityName;

    constructor() {
        this.dataSource = AppDataSource;
    }

    validate(value: any, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
        this.entity = Reflect.getMetadata('entityDTO', validationArguments.object.constructor);
        return new Promise<boolean>(async (resolve, reject) => {
            try {
                const sql = `select * from ${this.entity} where "${validationArguments.property}" = '${value}'`;
                const data = await this.dataSource.query(sql);
                const result = data.length <= 0; 
                resolve(result);
            } catch (e) {
                reject(false)
            }
        });
    }

    defaultMessage?(validationArguments?: ValidationArguments): string {
        return `${this.entityName}.${validationArguments.property} ${validationArguments.value} já existe`
    }    
}

export function ForeignKeyValidator(reference?: ReferenceOptions) {
    return function (object: object, propertyName: string) {
        const validationOptions: ValidationOptions = {};
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [reference],
            validator: ForeignKeyValidatorConstraint,
        });
    };
}

export function UniqueKeyValidator() {
    return function (object: object, propertyName: string) {
        const validationOptions: ValidationOptions = {};
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: UniqueKeyValidatorConstraint,
        });
    };
}