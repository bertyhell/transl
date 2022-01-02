import {
  GetCompaniesAndProjectsQuery,
  GetLanguagesQuery,
  GetTranslationsByLanguageCodesQuery,
} from './config/graphql-generated-types';

export type Company = GetCompaniesAndProjectsQuery['companies'][0];
export type Project = Company['projects'][0];
export type Branch = Project['branches'][0];
export type BranchLanguage = Branch['branch_languages'][0];
export type Language = GetLanguagesQuery['languages'][0];
export type BranchTerm = GetTranslationsByLanguageCodesQuery['branch_terms'][0];
