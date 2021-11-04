import { GetCompaniesAndProjectsQuery, GetLanguagesQuery } from './config/graphql-generated-types';

export type Company = GetCompaniesAndProjectsQuery['companies'][0];
export type Project = GetCompaniesAndProjectsQuery['companies'][0]['projects'][0];
export type Language = GetLanguagesQuery['languages'][0];
