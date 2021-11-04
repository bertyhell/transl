import { GetCompaniesAndProjectsQuery, GetLanguagesQuery, GetTranslationsQuery } from './config/graphql-generated-types';

export type Company = GetCompaniesAndProjectsQuery['companies'][0];
export type Project = GetCompaniesAndProjectsQuery['companies'][0]['projects'][0];
export type ProjectLanguageLink = GetCompaniesAndProjectsQuery['companies'][0]['projects'][0]['language_links'][0];
export type Language = GetLanguagesQuery['languages'][0];
export type ProjectTerm = GetTranslationsQuery['project_terms'][0];
