
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

export interface SignInInput {
    email?: Nullable<string>;
    password?: Nullable<string>;
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
    signIn(input?: Nullable<SignInInput>): Nullable<SignInResponse> | Promise<Nullable<SignInResponse>>;
}

export interface SignInResponse {
    user?: Nullable<User>;
    access_token?: Nullable<string>;
}

type Nullable<T> = T | null;
