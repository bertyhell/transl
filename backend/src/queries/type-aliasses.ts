import { GetCompaniesAndProjectsQuery, GetLanguagesQuery, GetTranslationsQuery } from './config/graphql-generated-types';

export type Company = GetCompaniesAndProjectsQuery['companies'][0];
export type Project = GetCompaniesAndProjectsQuery['companies'][0]['projects'][0];
export type Branch = GetCompaniesAndProjectsQuery['companies'][0]['projects'][0]['branches'][0];
export type BranchLanguage = GetCompaniesAndProjectsQuery['companies'][0]['projects'][0]['branches'][0]['branch_languages'][0];
export type Language = GetLanguagesQuery['languages'][0];
export type Term = GetTranslationsQuery['terms'][0];
