
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum UserType {
    EMPLOYEE = "EMPLOYEE",
    EMPLOYER = "EMPLOYER"
}

export interface ExperienceInput {
    id?: Nullable<string>;
    from?: Nullable<string>;
    to?: Nullable<string>;
    title?: Nullable<string>;
    description?: Nullable<string>;
}

export interface SkillInput {
    id?: Nullable<string>;
    name?: Nullable<string>;
}

export interface UserInput {
    name?: Nullable<string>;
    email?: Nullable<string>;
    type?: Nullable<UserType>;
    experiences?: Nullable<Nullable<ExperienceInput>[]>;
    skills?: Nullable<Nullable<SkillInput>[]>;
}

export interface SignInInput {
    email?: Nullable<string>;
    password?: Nullable<string>;
}

export interface IMutation {
    addExperience(input?: Nullable<ExperienceInput>): Nullable<Experience> | Promise<Nullable<Experience>>;
    deleteExperience(id: string): Nullable<Experience> | Promise<Nullable<Experience>>;
    addSkill(input?: Nullable<SkillInput>): Nullable<Skill> | Promise<Nullable<Skill>>;
    deleteSkill(id: string): Nullable<Skill> | Promise<Nullable<Skill>>;
    createUser(input?: Nullable<UserInput>): Nullable<User> | Promise<Nullable<User>>;
    signIn(input?: Nullable<SignInInput>): Nullable<SignInResponse> | Promise<Nullable<SignInResponse>>;
}

export interface Experience {
    id?: Nullable<string>;
    from?: Nullable<string>;
    to?: Nullable<string>;
    title?: Nullable<string>;
    description?: Nullable<string>;
}

export interface Skill {
    id?: Nullable<string>;
    name?: Nullable<string>;
}

export interface User {
    id?: Nullable<string>;
    name?: Nullable<string>;
}

export interface IQuery {
    users(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
}

export interface SignInResponse {
    user?: Nullable<User>;
    access_token?: Nullable<string>;
}

type Nullable<T> = T | null;
