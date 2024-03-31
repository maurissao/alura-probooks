import "reflect-metadata";
import { Inject, Injectable } from '@nestjs/common';
import { registerDecorator, ValidationOptions, ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { DataSource, Repository } from 'typeorm';
import { AppDataSource } from '../database.provider';
import { getMetadataArgsStorage } from 'typeorm';

function getEntityName(object: any): string | undefined {
    const metadataArgsStorage = getMetadataArgsStorage();
    //console.log(object);
    const entityMetadataArgs = metadataArgsStorage.tables.find(entity => entity.target === object);
    if (entityMetadataArgs) {
        return entityMetadataArgs.name;
    }
    return undefined;
}

export const EntityDTO = function (entity: any) {
    return function (target: Function) {
        Reflect.defineMetadata('entityDTO', entity, target);
    };
};


@ValidatorConstraint()
export class ForeignKeyValidator implements ValidatorConstraintInterface {
    private dataSource: DataSource;

    constructor() {
        this.dataSource = AppDataSource;
    }

    validate(value: any, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
        return new Promise<boolean>(async (resolve, reject) => {
            try {
                const entity = Reflect.getMetadata('entityDTO', validationArguments.object.constructor);
                const data = await this.dataSource.query(`select * from ${getEntityName(entity)}`);
                const isValid = data.length > 0; 
                resolve(isValid);
            } catch (error) {
                // Handle errors
                reject(error);
            }
        });
    }
    defaultMessage?(validationArguments?: ValidationArguments): string {
        return 'bla bla bla'
    }
}

