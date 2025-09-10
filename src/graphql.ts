
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface UserInput {
    name?: Nullable<string>;
    email?: Nullable<string>;
}

export interface User {
    id?: Nullable<string>;
    name?: Nullable<string>;
}

export interface IQuery {
    users(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
}

export interface IMutation {
    createUser(input?: Nullable<UserInput>): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
