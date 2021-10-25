/* eslint-disable */

import { AllTypesProps, ReturnTypes } from './const';
type ZEUS_INTERFACES = never
type ZEUS_UNIONS = never

export type ValueTypes = {
    /** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
["Boolean_comparison_exp"]: {
	_eq?:boolean | null,
	_gt?:boolean | null,
	_gte?:boolean | null,
	_in?:boolean[],
	_is_null?:boolean | null,
	_lt?:boolean | null,
	_lte?:boolean | null,
	_neq?:boolean | null,
	_nin?:boolean[]
};
	/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
["String_comparison_exp"]: {
	_eq?:string | null,
	_gt?:string | null,
	_gte?:string | null,
	/** does the column match the given case-insensitive pattern */
	_ilike?:string | null,
	_in?:string[],
	/** does the column match the given POSIX regular expression, case insensitive */
	_iregex?:string | null,
	_is_null?:boolean | null,
	/** does the column match the given pattern */
	_like?:string | null,
	_lt?:string | null,
	_lte?:string | null,
	_neq?:string | null,
	/** does the column NOT match the given case-insensitive pattern */
	_nilike?:string | null,
	_nin?:string[],
	/** does the column NOT match the given POSIX regular expression, case insensitive */
	_niregex?:string | null,
	/** does the column NOT match the given pattern */
	_nlike?:string | null,
	/** does the column NOT match the given POSIX regular expression, case sensitive */
	_nregex?:string | null,
	/** does the column NOT match the given SQL regular expression */
	_nsimilar?:string | null,
	/** does the column match the given POSIX regular expression, case sensitive */
	_regex?:string | null,
	/** does the column match the given SQL regular expression */
	_similar?:string | null
};
	/** columns and relationships of "companies" */
["companies"]: AliasType<{
	id?:true,
	name?:true,
		__typename?: true
}>;
	/** aggregated selection of "companies" */
["companies_aggregate"]: AliasType<{
	aggregate?:ValueTypes["companies_aggregate_fields"],
	nodes?:ValueTypes["companies"],
		__typename?: true
}>;
	/** aggregate fields of "companies" */
["companies_aggregate_fields"]: AliasType<{
count?: [{	columns?:ValueTypes["companies_select_column"][],	distinct?:boolean | null},true],
	max?:ValueTypes["companies_max_fields"],
	min?:ValueTypes["companies_min_fields"],
		__typename?: true
}>;
	/** Boolean expression to filter rows from the table "companies". All fields are combined with a logical 'AND'. */
["companies_bool_exp"]: {
	_and?:ValueTypes["companies_bool_exp"][],
	_not?:ValueTypes["companies_bool_exp"] | null,
	_or?:ValueTypes["companies_bool_exp"][],
	id?:ValueTypes["uuid_comparison_exp"] | null,
	name?:ValueTypes["String_comparison_exp"] | null
};
	/** unique or primary key constraints on table "companies" */
["companies_constraint"]:companies_constraint;
	/** input type for inserting data into table "companies" */
["companies_insert_input"]: {
	id?:ValueTypes["uuid"] | null,
	name?:string | null
};
	/** aggregate max on columns */
["companies_max_fields"]: AliasType<{
	id?:true,
	name?:true,
		__typename?: true
}>;
	/** aggregate min on columns */
["companies_min_fields"]: AliasType<{
	id?:true,
	name?:true,
		__typename?: true
}>;
	/** response of any mutation on the table "companies" */
["companies_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:true,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["companies"],
		__typename?: true
}>;
	/** on conflict condition type for table "companies" */
["companies_on_conflict"]: {
	constraint:ValueTypes["companies_constraint"],
	update_columns:ValueTypes["companies_update_column"][],
	where?:ValueTypes["companies_bool_exp"] | null
};
	/** Ordering options when selecting data from "companies". */
["companies_order_by"]: {
	id?:ValueTypes["order_by"] | null,
	name?:ValueTypes["order_by"] | null
};
	/** primary key columns input for table: companies */
["companies_pk_columns_input"]: {
	id:ValueTypes["uuid"]
};
	/** select columns of table "companies" */
["companies_select_column"]:companies_select_column;
	/** input type for updating data in table "companies" */
["companies_set_input"]: {
	id?:ValueTypes["uuid"] | null,
	name?:string | null
};
	/** update columns of table "companies" */
["companies_update_column"]:companies_update_column;
	/** columns and relationships of "company_user_link" */
["company_user_link"]: AliasType<{
	company_id?:true,
	id?:true,
	user_id?:true,
		__typename?: true
}>;
	/** aggregated selection of "company_user_link" */
["company_user_link_aggregate"]: AliasType<{
	aggregate?:ValueTypes["company_user_link_aggregate_fields"],
	nodes?:ValueTypes["company_user_link"],
		__typename?: true
}>;
	/** aggregate fields of "company_user_link" */
["company_user_link_aggregate_fields"]: AliasType<{
count?: [{	columns?:ValueTypes["company_user_link_select_column"][],	distinct?:boolean | null},true],
	max?:ValueTypes["company_user_link_max_fields"],
	min?:ValueTypes["company_user_link_min_fields"],
		__typename?: true
}>;
	/** Boolean expression to filter rows from the table "company_user_link". All fields are combined with a logical 'AND'. */
["company_user_link_bool_exp"]: {
	_and?:ValueTypes["company_user_link_bool_exp"][],
	_not?:ValueTypes["company_user_link_bool_exp"] | null,
	_or?:ValueTypes["company_user_link_bool_exp"][],
	company_id?:ValueTypes["uuid_comparison_exp"] | null,
	id?:ValueTypes["uuid_comparison_exp"] | null,
	user_id?:ValueTypes["uuid_comparison_exp"] | null
};
	/** unique or primary key constraints on table "company_user_link" */
["company_user_link_constraint"]:company_user_link_constraint;
	/** input type for inserting data into table "company_user_link" */
["company_user_link_insert_input"]: {
	company_id?:ValueTypes["uuid"] | null,
	id?:ValueTypes["uuid"] | null,
	user_id?:ValueTypes["uuid"] | null
};
	/** aggregate max on columns */
["company_user_link_max_fields"]: AliasType<{
	company_id?:true,
	id?:true,
	user_id?:true,
		__typename?: true
}>;
	/** aggregate min on columns */
["company_user_link_min_fields"]: AliasType<{
	company_id?:true,
	id?:true,
	user_id?:true,
		__typename?: true
}>;
	/** response of any mutation on the table "company_user_link" */
["company_user_link_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:true,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["company_user_link"],
		__typename?: true
}>;
	/** on conflict condition type for table "company_user_link" */
["company_user_link_on_conflict"]: {
	constraint:ValueTypes["company_user_link_constraint"],
	update_columns:ValueTypes["company_user_link_update_column"][],
	where?:ValueTypes["company_user_link_bool_exp"] | null
};
	/** Ordering options when selecting data from "company_user_link". */
["company_user_link_order_by"]: {
	company_id?:ValueTypes["order_by"] | null,
	id?:ValueTypes["order_by"] | null,
	user_id?:ValueTypes["order_by"] | null
};
	/** primary key columns input for table: company_user_link */
["company_user_link_pk_columns_input"]: {
	id:ValueTypes["uuid"]
};
	/** select columns of table "company_user_link" */
["company_user_link_select_column"]:company_user_link_select_column;
	/** input type for updating data in table "company_user_link" */
["company_user_link_set_input"]: {
	company_id?:ValueTypes["uuid"] | null,
	id?:ValueTypes["uuid"] | null,
	user_id?:ValueTypes["uuid"] | null
};
	/** update columns of table "company_user_link" */
["company_user_link_update_column"]:company_user_link_update_column;
	/** columns and relationships of "languages" */
["languages"]: AliasType<{
	id?:true,
	iso_code?:true,
	name?:true,
		__typename?: true
}>;
	/** aggregated selection of "languages" */
["languages_aggregate"]: AliasType<{
	aggregate?:ValueTypes["languages_aggregate_fields"],
	nodes?:ValueTypes["languages"],
		__typename?: true
}>;
	/** aggregate fields of "languages" */
["languages_aggregate_fields"]: AliasType<{
count?: [{	columns?:ValueTypes["languages_select_column"][],	distinct?:boolean | null},true],
	max?:ValueTypes["languages_max_fields"],
	min?:ValueTypes["languages_min_fields"],
		__typename?: true
}>;
	/** Boolean expression to filter rows from the table "languages". All fields are combined with a logical 'AND'. */
["languages_bool_exp"]: {
	_and?:ValueTypes["languages_bool_exp"][],
	_not?:ValueTypes["languages_bool_exp"] | null,
	_or?:ValueTypes["languages_bool_exp"][],
	id?:ValueTypes["uuid_comparison_exp"] | null,
	iso_code?:ValueTypes["String_comparison_exp"] | null,
	name?:ValueTypes["String_comparison_exp"] | null
};
	/** unique or primary key constraints on table "languages" */
["languages_constraint"]:languages_constraint;
	/** input type for inserting data into table "languages" */
["languages_insert_input"]: {
	id?:ValueTypes["uuid"] | null,
	iso_code?:string | null,
	name?:string | null
};
	/** aggregate max on columns */
["languages_max_fields"]: AliasType<{
	id?:true,
	iso_code?:true,
	name?:true,
		__typename?: true
}>;
	/** aggregate min on columns */
["languages_min_fields"]: AliasType<{
	id?:true,
	iso_code?:true,
	name?:true,
		__typename?: true
}>;
	/** response of any mutation on the table "languages" */
["languages_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:true,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["languages"],
		__typename?: true
}>;
	/** on conflict condition type for table "languages" */
["languages_on_conflict"]: {
	constraint:ValueTypes["languages_constraint"],
	update_columns:ValueTypes["languages_update_column"][],
	where?:ValueTypes["languages_bool_exp"] | null
};
	/** Ordering options when selecting data from "languages". */
["languages_order_by"]: {
	id?:ValueTypes["order_by"] | null,
	iso_code?:ValueTypes["order_by"] | null,
	name?:ValueTypes["order_by"] | null
};
	/** primary key columns input for table: languages */
["languages_pk_columns_input"]: {
	id:ValueTypes["uuid"]
};
	/** select columns of table "languages" */
["languages_select_column"]:languages_select_column;
	/** input type for updating data in table "languages" */
["languages_set_input"]: {
	id?:ValueTypes["uuid"] | null,
	iso_code?:string | null,
	name?:string | null
};
	/** update columns of table "languages" */
["languages_update_column"]:languages_update_column;
	/** mutation root */
["mutation_root"]: AliasType<{
delete_companies?: [{	/** filter the rows which have to be deleted */
	where:ValueTypes["companies_bool_exp"]},ValueTypes["companies_mutation_response"]],
delete_companies_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["companies"]],
delete_company_user_link?: [{	/** filter the rows which have to be deleted */
	where:ValueTypes["company_user_link_bool_exp"]},ValueTypes["company_user_link_mutation_response"]],
delete_company_user_link_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["company_user_link"]],
delete_languages?: [{	/** filter the rows which have to be deleted */
	where:ValueTypes["languages_bool_exp"]},ValueTypes["languages_mutation_response"]],
delete_languages_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["languages"]],
delete_project_language?: [{	/** filter the rows which have to be deleted */
	where:ValueTypes["project_language_bool_exp"]},ValueTypes["project_language_mutation_response"]],
delete_project_language_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["project_language"]],
delete_project_terms?: [{	/** filter the rows which have to be deleted */
	where:ValueTypes["project_terms_bool_exp"]},ValueTypes["project_terms_mutation_response"]],
delete_project_terms_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["project_terms"]],
delete_projects?: [{	/** filter the rows which have to be deleted */
	where:ValueTypes["projects_bool_exp"]},ValueTypes["projects_mutation_response"]],
delete_projects_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["projects"]],
delete_translation_statuses?: [{	/** filter the rows which have to be deleted */
	where:ValueTypes["translation_statuses_bool_exp"]},ValueTypes["translation_statuses_mutation_response"]],
delete_translation_statuses_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["translation_statuses"]],
delete_translations?: [{	/** filter the rows which have to be deleted */
	where:ValueTypes["translations_bool_exp"]},ValueTypes["translations_mutation_response"]],
delete_translations_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["translations"]],
delete_user_project_link?: [{	/** filter the rows which have to be deleted */
	where:ValueTypes["user_project_link_bool_exp"]},ValueTypes["user_project_link_mutation_response"]],
delete_user_project_link_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["user_project_link"]],
delete_users?: [{	/** filter the rows which have to be deleted */
	where:ValueTypes["users_bool_exp"]},ValueTypes["users_mutation_response"]],
delete_users_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["users"]],
insert_companies?: [{	/** the rows to be inserted */
	objects:ValueTypes["companies_insert_input"][],	/** on conflict condition */
	on_conflict?:ValueTypes["companies_on_conflict"] | null},ValueTypes["companies_mutation_response"]],
insert_companies_one?: [{	/** the row to be inserted */
	object:ValueTypes["companies_insert_input"],	/** on conflict condition */
	on_conflict?:ValueTypes["companies_on_conflict"] | null},ValueTypes["companies"]],
insert_company_user_link?: [{	/** the rows to be inserted */
	objects:ValueTypes["company_user_link_insert_input"][],	/** on conflict condition */
	on_conflict?:ValueTypes["company_user_link_on_conflict"] | null},ValueTypes["company_user_link_mutation_response"]],
insert_company_user_link_one?: [{	/** the row to be inserted */
	object:ValueTypes["company_user_link_insert_input"],	/** on conflict condition */
	on_conflict?:ValueTypes["company_user_link_on_conflict"] | null},ValueTypes["company_user_link"]],
insert_languages?: [{	/** the rows to be inserted */
	objects:ValueTypes["languages_insert_input"][],	/** on conflict condition */
	on_conflict?:ValueTypes["languages_on_conflict"] | null},ValueTypes["languages_mutation_response"]],
insert_languages_one?: [{	/** the row to be inserted */
	object:ValueTypes["languages_insert_input"],	/** on conflict condition */
	on_conflict?:ValueTypes["languages_on_conflict"] | null},ValueTypes["languages"]],
insert_project_language?: [{	/** the rows to be inserted */
	objects:ValueTypes["project_language_insert_input"][],	/** on conflict condition */
	on_conflict?:ValueTypes["project_language_on_conflict"] | null},ValueTypes["project_language_mutation_response"]],
insert_project_language_one?: [{	/** the row to be inserted */
	object:ValueTypes["project_language_insert_input"],	/** on conflict condition */
	on_conflict?:ValueTypes["project_language_on_conflict"] | null},ValueTypes["project_language"]],
insert_project_terms?: [{	/** the rows to be inserted */
	objects:ValueTypes["project_terms_insert_input"][],	/** on conflict condition */
	on_conflict?:ValueTypes["project_terms_on_conflict"] | null},ValueTypes["project_terms_mutation_response"]],
insert_project_terms_one?: [{	/** the row to be inserted */
	object:ValueTypes["project_terms_insert_input"],	/** on conflict condition */
	on_conflict?:ValueTypes["project_terms_on_conflict"] | null},ValueTypes["project_terms"]],
insert_projects?: [{	/** the rows to be inserted */
	objects:ValueTypes["projects_insert_input"][],	/** on conflict condition */
	on_conflict?:ValueTypes["projects_on_conflict"] | null},ValueTypes["projects_mutation_response"]],
insert_projects_one?: [{	/** the row to be inserted */
	object:ValueTypes["projects_insert_input"],	/** on conflict condition */
	on_conflict?:ValueTypes["projects_on_conflict"] | null},ValueTypes["projects"]],
insert_translation_statuses?: [{	/** the rows to be inserted */
	objects:ValueTypes["translation_statuses_insert_input"][],	/** on conflict condition */
	on_conflict?:ValueTypes["translation_statuses_on_conflict"] | null},ValueTypes["translation_statuses_mutation_response"]],
insert_translation_statuses_one?: [{	/** the row to be inserted */
	object:ValueTypes["translation_statuses_insert_input"],	/** on conflict condition */
	on_conflict?:ValueTypes["translation_statuses_on_conflict"] | null},ValueTypes["translation_statuses"]],
insert_translations?: [{	/** the rows to be inserted */
	objects:ValueTypes["translations_insert_input"][],	/** on conflict condition */
	on_conflict?:ValueTypes["translations_on_conflict"] | null},ValueTypes["translations_mutation_response"]],
insert_translations_one?: [{	/** the row to be inserted */
	object:ValueTypes["translations_insert_input"],	/** on conflict condition */
	on_conflict?:ValueTypes["translations_on_conflict"] | null},ValueTypes["translations"]],
insert_user_project_link?: [{	/** the rows to be inserted */
	objects:ValueTypes["user_project_link_insert_input"][],	/** on conflict condition */
	on_conflict?:ValueTypes["user_project_link_on_conflict"] | null},ValueTypes["user_project_link_mutation_response"]],
insert_user_project_link_one?: [{	/** the row to be inserted */
	object:ValueTypes["user_project_link_insert_input"],	/** on conflict condition */
	on_conflict?:ValueTypes["user_project_link_on_conflict"] | null},ValueTypes["user_project_link"]],
insert_users?: [{	/** the rows to be inserted */
	objects:ValueTypes["users_insert_input"][],	/** on conflict condition */
	on_conflict?:ValueTypes["users_on_conflict"] | null},ValueTypes["users_mutation_response"]],
insert_users_one?: [{	/** the row to be inserted */
	object:ValueTypes["users_insert_input"],	/** on conflict condition */
	on_conflict?:ValueTypes["users_on_conflict"] | null},ValueTypes["users"]],
update_companies?: [{	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["companies_set_input"] | null,	/** filter the rows which have to be updated */
	where:ValueTypes["companies_bool_exp"]},ValueTypes["companies_mutation_response"]],
update_companies_by_pk?: [{	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["companies_set_input"] | null,	pk_columns:ValueTypes["companies_pk_columns_input"]},ValueTypes["companies"]],
update_company_user_link?: [{	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["company_user_link_set_input"] | null,	/** filter the rows which have to be updated */
	where:ValueTypes["company_user_link_bool_exp"]},ValueTypes["company_user_link_mutation_response"]],
update_company_user_link_by_pk?: [{	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["company_user_link_set_input"] | null,	pk_columns:ValueTypes["company_user_link_pk_columns_input"]},ValueTypes["company_user_link"]],
update_languages?: [{	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["languages_set_input"] | null,	/** filter the rows which have to be updated */
	where:ValueTypes["languages_bool_exp"]},ValueTypes["languages_mutation_response"]],
update_languages_by_pk?: [{	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["languages_set_input"] | null,	pk_columns:ValueTypes["languages_pk_columns_input"]},ValueTypes["languages"]],
update_project_language?: [{	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["project_language_set_input"] | null,	/** filter the rows which have to be updated */
	where:ValueTypes["project_language_bool_exp"]},ValueTypes["project_language_mutation_response"]],
update_project_language_by_pk?: [{	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["project_language_set_input"] | null,	pk_columns:ValueTypes["project_language_pk_columns_input"]},ValueTypes["project_language"]],
update_project_terms?: [{	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["project_terms_set_input"] | null,	/** filter the rows which have to be updated */
	where:ValueTypes["project_terms_bool_exp"]},ValueTypes["project_terms_mutation_response"]],
update_project_terms_by_pk?: [{	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["project_terms_set_input"] | null,	pk_columns:ValueTypes["project_terms_pk_columns_input"]},ValueTypes["project_terms"]],
update_projects?: [{	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["projects_set_input"] | null,	/** filter the rows which have to be updated */
	where:ValueTypes["projects_bool_exp"]},ValueTypes["projects_mutation_response"]],
update_projects_by_pk?: [{	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["projects_set_input"] | null,	pk_columns:ValueTypes["projects_pk_columns_input"]},ValueTypes["projects"]],
update_translation_statuses?: [{	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["translation_statuses_set_input"] | null,	/** filter the rows which have to be updated */
	where:ValueTypes["translation_statuses_bool_exp"]},ValueTypes["translation_statuses_mutation_response"]],
update_translation_statuses_by_pk?: [{	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["translation_statuses_set_input"] | null,	pk_columns:ValueTypes["translation_statuses_pk_columns_input"]},ValueTypes["translation_statuses"]],
update_translations?: [{	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["translations_set_input"] | null,	/** filter the rows which have to be updated */
	where:ValueTypes["translations_bool_exp"]},ValueTypes["translations_mutation_response"]],
update_translations_by_pk?: [{	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["translations_set_input"] | null,	pk_columns:ValueTypes["translations_pk_columns_input"]},ValueTypes["translations"]],
update_user_project_link?: [{	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["user_project_link_set_input"] | null,	/** filter the rows which have to be updated */
	where:ValueTypes["user_project_link_bool_exp"]},ValueTypes["user_project_link_mutation_response"]],
update_user_project_link_by_pk?: [{	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["user_project_link_set_input"] | null,	pk_columns:ValueTypes["user_project_link_pk_columns_input"]},ValueTypes["user_project_link"]],
update_users?: [{	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["users_set_input"] | null,	/** filter the rows which have to be updated */
	where:ValueTypes["users_bool_exp"]},ValueTypes["users_mutation_response"]],
update_users_by_pk?: [{	/** sets the columns of the filtered rows to the given values */
	_set?:ValueTypes["users_set_input"] | null,	pk_columns:ValueTypes["users_pk_columns_input"]},ValueTypes["users"]],
		__typename?: true
}>;
	/** column ordering options */
["order_by"]:order_by;
	/** columns and relationships of "project_language" */
["project_language"]: AliasType<{
	id?:true,
	language_id?:true,
	project_id?:true,
		__typename?: true
}>;
	/** aggregated selection of "project_language" */
["project_language_aggregate"]: AliasType<{
	aggregate?:ValueTypes["project_language_aggregate_fields"],
	nodes?:ValueTypes["project_language"],
		__typename?: true
}>;
	/** aggregate fields of "project_language" */
["project_language_aggregate_fields"]: AliasType<{
count?: [{	columns?:ValueTypes["project_language_select_column"][],	distinct?:boolean | null},true],
	max?:ValueTypes["project_language_max_fields"],
	min?:ValueTypes["project_language_min_fields"],
		__typename?: true
}>;
	/** Boolean expression to filter rows from the table "project_language". All fields are combined with a logical 'AND'. */
["project_language_bool_exp"]: {
	_and?:ValueTypes["project_language_bool_exp"][],
	_not?:ValueTypes["project_language_bool_exp"] | null,
	_or?:ValueTypes["project_language_bool_exp"][],
	id?:ValueTypes["uuid_comparison_exp"] | null,
	language_id?:ValueTypes["uuid_comparison_exp"] | null,
	project_id?:ValueTypes["uuid_comparison_exp"] | null
};
	/** unique or primary key constraints on table "project_language" */
["project_language_constraint"]:project_language_constraint;
	/** input type for inserting data into table "project_language" */
["project_language_insert_input"]: {
	id?:ValueTypes["uuid"] | null,
	language_id?:ValueTypes["uuid"] | null,
	project_id?:ValueTypes["uuid"] | null
};
	/** aggregate max on columns */
["project_language_max_fields"]: AliasType<{
	id?:true,
	language_id?:true,
	project_id?:true,
		__typename?: true
}>;
	/** aggregate min on columns */
["project_language_min_fields"]: AliasType<{
	id?:true,
	language_id?:true,
	project_id?:true,
		__typename?: true
}>;
	/** response of any mutation on the table "project_language" */
["project_language_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:true,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["project_language"],
		__typename?: true
}>;
	/** on conflict condition type for table "project_language" */
["project_language_on_conflict"]: {
	constraint:ValueTypes["project_language_constraint"],
	update_columns:ValueTypes["project_language_update_column"][],
	where?:ValueTypes["project_language_bool_exp"] | null
};
	/** Ordering options when selecting data from "project_language". */
["project_language_order_by"]: {
	id?:ValueTypes["order_by"] | null,
	language_id?:ValueTypes["order_by"] | null,
	project_id?:ValueTypes["order_by"] | null
};
	/** primary key columns input for table: project_language */
["project_language_pk_columns_input"]: {
	id:ValueTypes["uuid"]
};
	/** select columns of table "project_language" */
["project_language_select_column"]:project_language_select_column;
	/** input type for updating data in table "project_language" */
["project_language_set_input"]: {
	id?:ValueTypes["uuid"] | null,
	language_id?:ValueTypes["uuid"] | null,
	project_id?:ValueTypes["uuid"] | null
};
	/** update columns of table "project_language" */
["project_language_update_column"]:project_language_update_column;
	/** columns and relationships of "project_terms" */
["project_terms"]: AliasType<{
	description?:true,
	id?:true,
	key?:true,
	project_id?:true,
		__typename?: true
}>;
	/** aggregated selection of "project_terms" */
["project_terms_aggregate"]: AliasType<{
	aggregate?:ValueTypes["project_terms_aggregate_fields"],
	nodes?:ValueTypes["project_terms"],
		__typename?: true
}>;
	/** aggregate fields of "project_terms" */
["project_terms_aggregate_fields"]: AliasType<{
count?: [{	columns?:ValueTypes["project_terms_select_column"][],	distinct?:boolean | null},true],
	max?:ValueTypes["project_terms_max_fields"],
	min?:ValueTypes["project_terms_min_fields"],
		__typename?: true
}>;
	/** Boolean expression to filter rows from the table "project_terms". All fields are combined with a logical 'AND'. */
["project_terms_bool_exp"]: {
	_and?:ValueTypes["project_terms_bool_exp"][],
	_not?:ValueTypes["project_terms_bool_exp"] | null,
	_or?:ValueTypes["project_terms_bool_exp"][],
	description?:ValueTypes["String_comparison_exp"] | null,
	id?:ValueTypes["uuid_comparison_exp"] | null,
	key?:ValueTypes["String_comparison_exp"] | null,
	project_id?:ValueTypes["uuid_comparison_exp"] | null
};
	/** unique or primary key constraints on table "project_terms" */
["project_terms_constraint"]:project_terms_constraint;
	/** input type for inserting data into table "project_terms" */
["project_terms_insert_input"]: {
	description?:string | null,
	id?:ValueTypes["uuid"] | null,
	key?:string | null,
	project_id?:ValueTypes["uuid"] | null
};
	/** aggregate max on columns */
["project_terms_max_fields"]: AliasType<{
	description?:true,
	id?:true,
	key?:true,
	project_id?:true,
		__typename?: true
}>;
	/** aggregate min on columns */
["project_terms_min_fields"]: AliasType<{
	description?:true,
	id?:true,
	key?:true,
	project_id?:true,
		__typename?: true
}>;
	/** response of any mutation on the table "project_terms" */
["project_terms_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:true,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["project_terms"],
		__typename?: true
}>;
	/** on conflict condition type for table "project_terms" */
["project_terms_on_conflict"]: {
	constraint:ValueTypes["project_terms_constraint"],
	update_columns:ValueTypes["project_terms_update_column"][],
	where?:ValueTypes["project_terms_bool_exp"] | null
};
	/** Ordering options when selecting data from "project_terms". */
["project_terms_order_by"]: {
	description?:ValueTypes["order_by"] | null,
	id?:ValueTypes["order_by"] | null,
	key?:ValueTypes["order_by"] | null,
	project_id?:ValueTypes["order_by"] | null
};
	/** primary key columns input for table: project_terms */
["project_terms_pk_columns_input"]: {
	id:ValueTypes["uuid"]
};
	/** select columns of table "project_terms" */
["project_terms_select_column"]:project_terms_select_column;
	/** input type for updating data in table "project_terms" */
["project_terms_set_input"]: {
	description?:string | null,
	id?:ValueTypes["uuid"] | null,
	key?:string | null,
	project_id?:ValueTypes["uuid"] | null
};
	/** update columns of table "project_terms" */
["project_terms_update_column"]:project_terms_update_column;
	/** columns and relationships of "projects" */
["projects"]: AliasType<{
	company_id?:true,
	id?:true,
	name?:true,
user_project_links?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["user_project_link_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["user_project_link_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["user_project_link_bool_exp"] | null},ValueTypes["user_project_link"]],
user_project_links_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["user_project_link_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["user_project_link_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["user_project_link_bool_exp"] | null},ValueTypes["user_project_link_aggregate"]],
		__typename?: true
}>;
	/** aggregated selection of "projects" */
["projects_aggregate"]: AliasType<{
	aggregate?:ValueTypes["projects_aggregate_fields"],
	nodes?:ValueTypes["projects"],
		__typename?: true
}>;
	/** aggregate fields of "projects" */
["projects_aggregate_fields"]: AliasType<{
count?: [{	columns?:ValueTypes["projects_select_column"][],	distinct?:boolean | null},true],
	max?:ValueTypes["projects_max_fields"],
	min?:ValueTypes["projects_min_fields"],
		__typename?: true
}>;
	/** Boolean expression to filter rows from the table "projects". All fields are combined with a logical 'AND'. */
["projects_bool_exp"]: {
	_and?:ValueTypes["projects_bool_exp"][],
	_not?:ValueTypes["projects_bool_exp"] | null,
	_or?:ValueTypes["projects_bool_exp"][],
	company_id?:ValueTypes["uuid_comparison_exp"] | null,
	id?:ValueTypes["uuid_comparison_exp"] | null,
	name?:ValueTypes["String_comparison_exp"] | null,
	user_project_links?:ValueTypes["user_project_link_bool_exp"] | null
};
	/** unique or primary key constraints on table "projects" */
["projects_constraint"]:projects_constraint;
	/** input type for inserting data into table "projects" */
["projects_insert_input"]: {
	company_id?:ValueTypes["uuid"] | null,
	id?:ValueTypes["uuid"] | null,
	name?:string | null,
	user_project_links?:ValueTypes["user_project_link_arr_rel_insert_input"] | null
};
	/** aggregate max on columns */
["projects_max_fields"]: AliasType<{
	company_id?:true,
	id?:true,
	name?:true,
		__typename?: true
}>;
	/** aggregate min on columns */
["projects_min_fields"]: AliasType<{
	company_id?:true,
	id?:true,
	name?:true,
		__typename?: true
}>;
	/** response of any mutation on the table "projects" */
["projects_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:true,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["projects"],
		__typename?: true
}>;
	/** on conflict condition type for table "projects" */
["projects_on_conflict"]: {
	constraint:ValueTypes["projects_constraint"],
	update_columns:ValueTypes["projects_update_column"][],
	where?:ValueTypes["projects_bool_exp"] | null
};
	/** Ordering options when selecting data from "projects". */
["projects_order_by"]: {
	company_id?:ValueTypes["order_by"] | null,
	id?:ValueTypes["order_by"] | null,
	name?:ValueTypes["order_by"] | null,
	user_project_links_aggregate?:ValueTypes["user_project_link_aggregate_order_by"] | null
};
	/** primary key columns input for table: projects */
["projects_pk_columns_input"]: {
	id:ValueTypes["uuid"]
};
	/** select columns of table "projects" */
["projects_select_column"]:projects_select_column;
	/** input type for updating data in table "projects" */
["projects_set_input"]: {
	company_id?:ValueTypes["uuid"] | null,
	id?:ValueTypes["uuid"] | null,
	name?:string | null
};
	/** update columns of table "projects" */
["projects_update_column"]:projects_update_column;
	["query_root"]: AliasType<{
companies?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["companies_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["companies_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["companies_bool_exp"] | null},ValueTypes["companies"]],
companies_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["companies_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["companies_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["companies_bool_exp"] | null},ValueTypes["companies_aggregate"]],
companies_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["companies"]],
company_user_link?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["company_user_link_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["company_user_link_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["company_user_link_bool_exp"] | null},ValueTypes["company_user_link"]],
company_user_link_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["company_user_link_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["company_user_link_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["company_user_link_bool_exp"] | null},ValueTypes["company_user_link_aggregate"]],
company_user_link_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["company_user_link"]],
languages?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["languages_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["languages_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["languages_bool_exp"] | null},ValueTypes["languages"]],
languages_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["languages_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["languages_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["languages_bool_exp"] | null},ValueTypes["languages_aggregate"]],
languages_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["languages"]],
project_language?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["project_language_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["project_language_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["project_language_bool_exp"] | null},ValueTypes["project_language"]],
project_language_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["project_language_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["project_language_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["project_language_bool_exp"] | null},ValueTypes["project_language_aggregate"]],
project_language_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["project_language"]],
project_terms?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["project_terms_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["project_terms_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["project_terms_bool_exp"] | null},ValueTypes["project_terms"]],
project_terms_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["project_terms_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["project_terms_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["project_terms_bool_exp"] | null},ValueTypes["project_terms_aggregate"]],
project_terms_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["project_terms"]],
projects?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["projects_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["projects_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["projects_bool_exp"] | null},ValueTypes["projects"]],
projects_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["projects_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["projects_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["projects_bool_exp"] | null},ValueTypes["projects_aggregate"]],
projects_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["projects"]],
translation_statuses?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["translation_statuses_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["translation_statuses_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["translation_statuses_bool_exp"] | null},ValueTypes["translation_statuses"]],
translation_statuses_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["translation_statuses_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["translation_statuses_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["translation_statuses_bool_exp"] | null},ValueTypes["translation_statuses_aggregate"]],
translation_statuses_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["translation_statuses"]],
translations?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["translations_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["translations_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["translations_bool_exp"] | null},ValueTypes["translations"]],
translations_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["translations_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["translations_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["translations_bool_exp"] | null},ValueTypes["translations_aggregate"]],
translations_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["translations"]],
user_project_link?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["user_project_link_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["user_project_link_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["user_project_link_bool_exp"] | null},ValueTypes["user_project_link"]],
user_project_link_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["user_project_link_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["user_project_link_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["user_project_link_bool_exp"] | null},ValueTypes["user_project_link_aggregate"]],
user_project_link_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["user_project_link"]],
users?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["users_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["users_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["users_bool_exp"] | null},ValueTypes["users"]],
users_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["users_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["users_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["users_bool_exp"] | null},ValueTypes["users_aggregate"]],
users_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["users"]],
		__typename?: true
}>;
	["subscription_root"]: AliasType<{
companies?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["companies_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["companies_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["companies_bool_exp"] | null},ValueTypes["companies"]],
companies_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["companies_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["companies_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["companies_bool_exp"] | null},ValueTypes["companies_aggregate"]],
companies_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["companies"]],
company_user_link?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["company_user_link_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["company_user_link_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["company_user_link_bool_exp"] | null},ValueTypes["company_user_link"]],
company_user_link_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["company_user_link_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["company_user_link_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["company_user_link_bool_exp"] | null},ValueTypes["company_user_link_aggregate"]],
company_user_link_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["company_user_link"]],
languages?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["languages_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["languages_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["languages_bool_exp"] | null},ValueTypes["languages"]],
languages_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["languages_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["languages_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["languages_bool_exp"] | null},ValueTypes["languages_aggregate"]],
languages_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["languages"]],
project_language?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["project_language_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["project_language_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["project_language_bool_exp"] | null},ValueTypes["project_language"]],
project_language_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["project_language_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["project_language_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["project_language_bool_exp"] | null},ValueTypes["project_language_aggregate"]],
project_language_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["project_language"]],
project_terms?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["project_terms_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["project_terms_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["project_terms_bool_exp"] | null},ValueTypes["project_terms"]],
project_terms_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["project_terms_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["project_terms_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["project_terms_bool_exp"] | null},ValueTypes["project_terms_aggregate"]],
project_terms_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["project_terms"]],
projects?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["projects_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["projects_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["projects_bool_exp"] | null},ValueTypes["projects"]],
projects_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["projects_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["projects_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["projects_bool_exp"] | null},ValueTypes["projects_aggregate"]],
projects_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["projects"]],
translation_statuses?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["translation_statuses_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["translation_statuses_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["translation_statuses_bool_exp"] | null},ValueTypes["translation_statuses"]],
translation_statuses_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["translation_statuses_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["translation_statuses_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["translation_statuses_bool_exp"] | null},ValueTypes["translation_statuses_aggregate"]],
translation_statuses_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["translation_statuses"]],
translations?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["translations_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["translations_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["translations_bool_exp"] | null},ValueTypes["translations"]],
translations_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["translations_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["translations_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["translations_bool_exp"] | null},ValueTypes["translations_aggregate"]],
translations_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["translations"]],
user_project_link?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["user_project_link_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["user_project_link_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["user_project_link_bool_exp"] | null},ValueTypes["user_project_link"]],
user_project_link_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["user_project_link_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["user_project_link_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["user_project_link_bool_exp"] | null},ValueTypes["user_project_link_aggregate"]],
user_project_link_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["user_project_link"]],
users?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["users_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["users_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["users_bool_exp"] | null},ValueTypes["users"]],
users_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["users_select_column"][],	/** limit the number of rows returned */
	limit?:number | null,	/** skip the first n rows. Use only with order_by */
	offset?:number | null,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["users_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["users_bool_exp"] | null},ValueTypes["users_aggregate"]],
users_by_pk?: [{	id:ValueTypes["uuid"]},ValueTypes["users"]],
		__typename?: true
}>;
	/** columns and relationships of "translation_statuses" */
["translation_statuses"]: AliasType<{
	id?:true,
	name?:true,
	project_id?:true,
		__typename?: true
}>;
	/** aggregated selection of "translation_statuses" */
["translation_statuses_aggregate"]: AliasType<{
	aggregate?:ValueTypes["translation_statuses_aggregate_fields"],
	nodes?:ValueTypes["translation_statuses"],
		__typename?: true
}>;
	/** aggregate fields of "translation_statuses" */
["translation_statuses_aggregate_fields"]: AliasType<{
count?: [{	columns?:ValueTypes["translation_statuses_select_column"][],	distinct?:boolean | null},true],
	max?:ValueTypes["translation_statuses_max_fields"],
	min?:ValueTypes["translation_statuses_min_fields"],
		__typename?: true
}>;
	/** Boolean expression to filter rows from the table "translation_statuses". All fields are combined with a logical 'AND'. */
["translation_statuses_bool_exp"]: {
	_and?:ValueTypes["translation_statuses_bool_exp"][],
	_not?:ValueTypes["translation_statuses_bool_exp"] | null,
	_or?:ValueTypes["translation_statuses_bool_exp"][],
	id?:ValueTypes["uuid_comparison_exp"] | null,
	name?:ValueTypes["String_comparison_exp"] | null,
	project_id?:ValueTypes["uuid_comparison_exp"] | null
};
	/** unique or primary key constraints on table "translation_statuses" */
["translation_statuses_constraint"]:translation_statuses_constraint;
	/** input type for inserting data into table "translation_statuses" */
["translation_statuses_insert_input"]: {
	id?:ValueTypes["uuid"] | null,
	name?:string | null,
	project_id?:ValueTypes["uuid"] | null
};
	/** aggregate max on columns */
["translation_statuses_max_fields"]: AliasType<{
	id?:true,
	name?:true,
	project_id?:true,
		__typename?: true
}>;
	/** aggregate min on columns */
["translation_statuses_min_fields"]: AliasType<{
	id?:true,
	name?:true,
	project_id?:true,
		__typename?: true
}>;
	/** response of any mutation on the table "translation_statuses" */
["translation_statuses_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:true,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["translation_statuses"],
		__typename?: true
}>;
	/** on conflict condition type for table "translation_statuses" */
["translation_statuses_on_conflict"]: {
	constraint:ValueTypes["translation_statuses_constraint"],
	update_columns:ValueTypes["translation_statuses_update_column"][],
	where?:ValueTypes["translation_statuses_bool_exp"] | null
};
	/** Ordering options when selecting data from "translation_statuses". */
["translation_statuses_order_by"]: {
	id?:ValueTypes["order_by"] | null,
	name?:ValueTypes["order_by"] | null,
	project_id?:ValueTypes["order_by"] | null
};
	/** primary key columns input for table: translation_statuses */
["translation_statuses_pk_columns_input"]: {
	id:ValueTypes["uuid"]
};
	/** select columns of table "translation_statuses" */
["translation_statuses_select_column"]:translation_statuses_select_column;
	/** input type for updating data in table "translation_statuses" */
["translation_statuses_set_input"]: {
	id?:ValueTypes["uuid"] | null,
	name?:string | null,
	project_id?:ValueTypes["uuid"] | null
};
	/** update columns of table "translation_statuses" */
["translation_statuses_update_column"]:translation_statuses_update_column;
	/** columns and relationships of "translations" */
["translations"]: AliasType<{
	fuzzy?:true,
	id?:true,
	key_id?:true,
	translation_value?:true,
		__typename?: true
}>;
	/** aggregated selection of "translations" */
["translations_aggregate"]: AliasType<{
	aggregate?:ValueTypes["translations_aggregate_fields"],
	nodes?:ValueTypes["translations"],
		__typename?: true
}>;
	/** aggregate fields of "translations" */
["translations_aggregate_fields"]: AliasType<{
count?: [{	columns?:ValueTypes["translations_select_column"][],	distinct?:boolean | null},true],
	max?:ValueTypes["translations_max_fields"],
	min?:ValueTypes["translations_min_fields"],
		__typename?: true
}>;
	/** Boolean expression to filter rows from the table "translations". All fields are combined with a logical 'AND'. */
["translations_bool_exp"]: {
	_and?:ValueTypes["translations_bool_exp"][],
	_not?:ValueTypes["translations_bool_exp"] | null,
	_or?:ValueTypes["translations_bool_exp"][],
	fuzzy?:ValueTypes["Boolean_comparison_exp"] | null,
	id?:ValueTypes["uuid_comparison_exp"] | null,
	key_id?:ValueTypes["uuid_comparison_exp"] | null,
	translation_value?:ValueTypes["String_comparison_exp"] | null
};
	/** unique or primary key constraints on table "translations" */
["translations_constraint"]:translations_constraint;
	/** input type for inserting data into table "translations" */
["translations_insert_input"]: {
	fuzzy?:boolean | null,
	id?:ValueTypes["uuid"] | null,
	key_id?:ValueTypes["uuid"] | null,
	translation_value?:string | null
};
	/** aggregate max on columns */
["translations_max_fields"]: AliasType<{
	id?:true,
	key_id?:true,
	translation_value?:true,
		__typename?: true
}>;
	/** aggregate min on columns */
["translations_min_fields"]: AliasType<{
	id?:true,
	key_id?:true,
	translation_value?:true,
		__typename?: true
}>;
	/** response of any mutation on the table "translations" */
["translations_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:true,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["translations"],
		__typename?: true
}>;
	/** on conflict condition type for table "translations" */
["translations_on_conflict"]: {
	constraint:ValueTypes["translations_constraint"],
	update_columns:ValueTypes["translations_update_column"][],
	where?:ValueTypes["translations_bool_exp"] | null
};
	/** Ordering options when selecting data from "translations". */
["translations_order_by"]: {
	fuzzy?:ValueTypes["order_by"] | null,
	id?:ValueTypes["order_by"] | null,
	key_id?:ValueTypes["order_by"] | null,
	translation_value?:ValueTypes["order_by"] | null
};
	/** primary key columns input for table: translations */
["translations_pk_columns_input"]: {
	id:ValueTypes["uuid"]
};
	/** select columns of table "translations" */
["translations_select_column"]:translations_select_column;
	/** input type for updating data in table "translations" */
["translations_set_input"]: {
	fuzzy?:boolean | null,
	id?:ValueTypes["uuid"] | null,
	key_id?:ValueTypes["uuid"] | null,
	translation_value?:string | null
};
	/** update columns of table "translations" */
["translations_update_column"]:translations_update_column;
	/** columns and relationships of "user_project_link" */
["user_project_link"]: AliasType<{
	id?:true,
	project_id?:true,
	user_id?:true,
		__typename?: true
}>;
	/** aggregated selection of "user_project_link" */
["user_project_link_aggregate"]: AliasType<{
	aggregate?:ValueTypes["user_project_link_aggregate_fields"],
	nodes?:ValueTypes["user_project_link"],
		__typename?: true
}>;
	/** aggregate fields of "user_project_link" */
["user_project_link_aggregate_fields"]: AliasType<{
count?: [{	columns?:ValueTypes["user_project_link_select_column"][],	distinct?:boolean | null},true],
	max?:ValueTypes["user_project_link_max_fields"],
	min?:ValueTypes["user_project_link_min_fields"],
		__typename?: true
}>;
	/** order by aggregate values of table "user_project_link" */
["user_project_link_aggregate_order_by"]: {
	count?:ValueTypes["order_by"] | null,
	max?:ValueTypes["user_project_link_max_order_by"] | null,
	min?:ValueTypes["user_project_link_min_order_by"] | null
};
	/** input type for inserting array relation for remote table "user_project_link" */
["user_project_link_arr_rel_insert_input"]: {
	data:ValueTypes["user_project_link_insert_input"][],
	/** on conflict condition */
	on_conflict?:ValueTypes["user_project_link_on_conflict"] | null
};
	/** Boolean expression to filter rows from the table "user_project_link". All fields are combined with a logical 'AND'. */
["user_project_link_bool_exp"]: {
	_and?:ValueTypes["user_project_link_bool_exp"][],
	_not?:ValueTypes["user_project_link_bool_exp"] | null,
	_or?:ValueTypes["user_project_link_bool_exp"][],
	id?:ValueTypes["uuid_comparison_exp"] | null,
	project_id?:ValueTypes["uuid_comparison_exp"] | null,
	user_id?:ValueTypes["uuid_comparison_exp"] | null
};
	/** unique or primary key constraints on table "user_project_link" */
["user_project_link_constraint"]:user_project_link_constraint;
	/** input type for inserting data into table "user_project_link" */
["user_project_link_insert_input"]: {
	id?:ValueTypes["uuid"] | null,
	project_id?:ValueTypes["uuid"] | null,
	user_id?:ValueTypes["uuid"] | null
};
	/** aggregate max on columns */
["user_project_link_max_fields"]: AliasType<{
	id?:true,
	project_id?:true,
	user_id?:true,
		__typename?: true
}>;
	/** order by max() on columns of table "user_project_link" */
["user_project_link_max_order_by"]: {
	id?:ValueTypes["order_by"] | null,
	project_id?:ValueTypes["order_by"] | null,
	user_id?:ValueTypes["order_by"] | null
};
	/** aggregate min on columns */
["user_project_link_min_fields"]: AliasType<{
	id?:true,
	project_id?:true,
	user_id?:true,
		__typename?: true
}>;
	/** order by min() on columns of table "user_project_link" */
["user_project_link_min_order_by"]: {
	id?:ValueTypes["order_by"] | null,
	project_id?:ValueTypes["order_by"] | null,
	user_id?:ValueTypes["order_by"] | null
};
	/** response of any mutation on the table "user_project_link" */
["user_project_link_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:true,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["user_project_link"],
		__typename?: true
}>;
	/** on conflict condition type for table "user_project_link" */
["user_project_link_on_conflict"]: {
	constraint:ValueTypes["user_project_link_constraint"],
	update_columns:ValueTypes["user_project_link_update_column"][],
	where?:ValueTypes["user_project_link_bool_exp"] | null
};
	/** Ordering options when selecting data from "user_project_link". */
["user_project_link_order_by"]: {
	id?:ValueTypes["order_by"] | null,
	project_id?:ValueTypes["order_by"] | null,
	user_id?:ValueTypes["order_by"] | null
};
	/** primary key columns input for table: user_project_link */
["user_project_link_pk_columns_input"]: {
	id:ValueTypes["uuid"]
};
	/** select columns of table "user_project_link" */
["user_project_link_select_column"]:user_project_link_select_column;
	/** input type for updating data in table "user_project_link" */
["user_project_link_set_input"]: {
	id?:ValueTypes["uuid"] | null,
	project_id?:ValueTypes["uuid"] | null,
	user_id?:ValueTypes["uuid"] | null
};
	/** update columns of table "user_project_link" */
["user_project_link_update_column"]:user_project_link_update_column;
	/** columns and relationships of "users" */
["users"]: AliasType<{
	email?:true,
	first_name?:true,
	id?:true,
	last_name?:true,
	password?:true,
		__typename?: true
}>;
	/** aggregated selection of "users" */
["users_aggregate"]: AliasType<{
	aggregate?:ValueTypes["users_aggregate_fields"],
	nodes?:ValueTypes["users"],
		__typename?: true
}>;
	/** aggregate fields of "users" */
["users_aggregate_fields"]: AliasType<{
count?: [{	columns?:ValueTypes["users_select_column"][],	distinct?:boolean | null},true],
	max?:ValueTypes["users_max_fields"],
	min?:ValueTypes["users_min_fields"],
		__typename?: true
}>;
	/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
["users_bool_exp"]: {
	_and?:ValueTypes["users_bool_exp"][],
	_not?:ValueTypes["users_bool_exp"] | null,
	_or?:ValueTypes["users_bool_exp"][],
	email?:ValueTypes["String_comparison_exp"] | null,
	first_name?:ValueTypes["String_comparison_exp"] | null,
	id?:ValueTypes["uuid_comparison_exp"] | null,
	last_name?:ValueTypes["String_comparison_exp"] | null,
	password?:ValueTypes["String_comparison_exp"] | null
};
	/** unique or primary key constraints on table "users" */
["users_constraint"]:users_constraint;
	/** input type for inserting data into table "users" */
["users_insert_input"]: {
	email?:string | null,
	first_name?:string | null,
	id?:ValueTypes["uuid"] | null,
	last_name?:string | null,
	password?:string | null
};
	/** aggregate max on columns */
["users_max_fields"]: AliasType<{
	email?:true,
	first_name?:true,
	id?:true,
	last_name?:true,
	password?:true,
		__typename?: true
}>;
	/** aggregate min on columns */
["users_min_fields"]: AliasType<{
	email?:true,
	first_name?:true,
	id?:true,
	last_name?:true,
	password?:true,
		__typename?: true
}>;
	/** response of any mutation on the table "users" */
["users_mutation_response"]: AliasType<{
	/** number of rows affected by the mutation */
	affected_rows?:true,
	/** data from the rows affected by the mutation */
	returning?:ValueTypes["users"],
		__typename?: true
}>;
	/** on conflict condition type for table "users" */
["users_on_conflict"]: {
	constraint:ValueTypes["users_constraint"],
	update_columns:ValueTypes["users_update_column"][],
	where?:ValueTypes["users_bool_exp"] | null
};
	/** Ordering options when selecting data from "users". */
["users_order_by"]: {
	email?:ValueTypes["order_by"] | null,
	first_name?:ValueTypes["order_by"] | null,
	id?:ValueTypes["order_by"] | null,
	last_name?:ValueTypes["order_by"] | null,
	password?:ValueTypes["order_by"] | null
};
	/** primary key columns input for table: users */
["users_pk_columns_input"]: {
	id:ValueTypes["uuid"]
};
	/** select columns of table "users" */
["users_select_column"]:users_select_column;
	/** input type for updating data in table "users" */
["users_set_input"]: {
	email?:string | null,
	first_name?:string | null,
	id?:ValueTypes["uuid"] | null,
	last_name?:string | null,
	password?:string | null
};
	/** update columns of table "users" */
["users_update_column"]:users_update_column;
	["uuid"]:unknown;
	/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
["uuid_comparison_exp"]: {
	_eq?:ValueTypes["uuid"] | null,
	_gt?:ValueTypes["uuid"] | null,
	_gte?:ValueTypes["uuid"] | null,
	_in?:ValueTypes["uuid"][],
	_is_null?:boolean | null,
	_lt?:ValueTypes["uuid"] | null,
	_lte?:ValueTypes["uuid"] | null,
	_neq?:ValueTypes["uuid"] | null,
	_nin?:ValueTypes["uuid"][]
}
  }

export type ModelTypes = {
    /** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
["Boolean_comparison_exp"]: GraphQLTypes["Boolean_comparison_exp"];
	/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
["String_comparison_exp"]: GraphQLTypes["String_comparison_exp"];
	/** columns and relationships of "companies" */
["companies"]: {
		id:ModelTypes["uuid"],
	name:string
};
	/** aggregated selection of "companies" */
["companies_aggregate"]: {
		aggregate?:ModelTypes["companies_aggregate_fields"],
	nodes:ModelTypes["companies"][]
};
	/** aggregate fields of "companies" */
["companies_aggregate_fields"]: {
		count:number,
	max?:ModelTypes["companies_max_fields"],
	min?:ModelTypes["companies_min_fields"]
};
	/** Boolean expression to filter rows from the table "companies". All fields are combined with a logical 'AND'. */
["companies_bool_exp"]: GraphQLTypes["companies_bool_exp"];
	/** unique or primary key constraints on table "companies" */
["companies_constraint"]: GraphQLTypes["companies_constraint"];
	/** input type for inserting data into table "companies" */
["companies_insert_input"]: GraphQLTypes["companies_insert_input"];
	/** aggregate max on columns */
["companies_max_fields"]: {
		id?:ModelTypes["uuid"],
	name?:string
};
	/** aggregate min on columns */
["companies_min_fields"]: {
		id?:ModelTypes["uuid"],
	name?:string
};
	/** response of any mutation on the table "companies" */
["companies_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:ModelTypes["companies"][]
};
	/** on conflict condition type for table "companies" */
["companies_on_conflict"]: GraphQLTypes["companies_on_conflict"];
	/** Ordering options when selecting data from "companies". */
["companies_order_by"]: GraphQLTypes["companies_order_by"];
	/** primary key columns input for table: companies */
["companies_pk_columns_input"]: GraphQLTypes["companies_pk_columns_input"];
	/** select columns of table "companies" */
["companies_select_column"]: GraphQLTypes["companies_select_column"];
	/** input type for updating data in table "companies" */
["companies_set_input"]: GraphQLTypes["companies_set_input"];
	/** update columns of table "companies" */
["companies_update_column"]: GraphQLTypes["companies_update_column"];
	/** columns and relationships of "company_user_link" */
["company_user_link"]: {
		company_id:ModelTypes["uuid"],
	id:ModelTypes["uuid"],
	user_id:ModelTypes["uuid"]
};
	/** aggregated selection of "company_user_link" */
["company_user_link_aggregate"]: {
		aggregate?:ModelTypes["company_user_link_aggregate_fields"],
	nodes:ModelTypes["company_user_link"][]
};
	/** aggregate fields of "company_user_link" */
["company_user_link_aggregate_fields"]: {
		count:number,
	max?:ModelTypes["company_user_link_max_fields"],
	min?:ModelTypes["company_user_link_min_fields"]
};
	/** Boolean expression to filter rows from the table "company_user_link". All fields are combined with a logical 'AND'. */
["company_user_link_bool_exp"]: GraphQLTypes["company_user_link_bool_exp"];
	/** unique or primary key constraints on table "company_user_link" */
["company_user_link_constraint"]: GraphQLTypes["company_user_link_constraint"];
	/** input type for inserting data into table "company_user_link" */
["company_user_link_insert_input"]: GraphQLTypes["company_user_link_insert_input"];
	/** aggregate max on columns */
["company_user_link_max_fields"]: {
		company_id?:ModelTypes["uuid"],
	id?:ModelTypes["uuid"],
	user_id?:ModelTypes["uuid"]
};
	/** aggregate min on columns */
["company_user_link_min_fields"]: {
		company_id?:ModelTypes["uuid"],
	id?:ModelTypes["uuid"],
	user_id?:ModelTypes["uuid"]
};
	/** response of any mutation on the table "company_user_link" */
["company_user_link_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:ModelTypes["company_user_link"][]
};
	/** on conflict condition type for table "company_user_link" */
["company_user_link_on_conflict"]: GraphQLTypes["company_user_link_on_conflict"];
	/** Ordering options when selecting data from "company_user_link". */
["company_user_link_order_by"]: GraphQLTypes["company_user_link_order_by"];
	/** primary key columns input for table: company_user_link */
["company_user_link_pk_columns_input"]: GraphQLTypes["company_user_link_pk_columns_input"];
	/** select columns of table "company_user_link" */
["company_user_link_select_column"]: GraphQLTypes["company_user_link_select_column"];
	/** input type for updating data in table "company_user_link" */
["company_user_link_set_input"]: GraphQLTypes["company_user_link_set_input"];
	/** update columns of table "company_user_link" */
["company_user_link_update_column"]: GraphQLTypes["company_user_link_update_column"];
	/** columns and relationships of "languages" */
["languages"]: {
		id:ModelTypes["uuid"],
	iso_code:string,
	name:string
};
	/** aggregated selection of "languages" */
["languages_aggregate"]: {
		aggregate?:ModelTypes["languages_aggregate_fields"],
	nodes:ModelTypes["languages"][]
};
	/** aggregate fields of "languages" */
["languages_aggregate_fields"]: {
		count:number,
	max?:ModelTypes["languages_max_fields"],
	min?:ModelTypes["languages_min_fields"]
};
	/** Boolean expression to filter rows from the table "languages". All fields are combined with a logical 'AND'. */
["languages_bool_exp"]: GraphQLTypes["languages_bool_exp"];
	/** unique or primary key constraints on table "languages" */
["languages_constraint"]: GraphQLTypes["languages_constraint"];
	/** input type for inserting data into table "languages" */
["languages_insert_input"]: GraphQLTypes["languages_insert_input"];
	/** aggregate max on columns */
["languages_max_fields"]: {
		id?:ModelTypes["uuid"],
	iso_code?:string,
	name?:string
};
	/** aggregate min on columns */
["languages_min_fields"]: {
		id?:ModelTypes["uuid"],
	iso_code?:string,
	name?:string
};
	/** response of any mutation on the table "languages" */
["languages_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:ModelTypes["languages"][]
};
	/** on conflict condition type for table "languages" */
["languages_on_conflict"]: GraphQLTypes["languages_on_conflict"];
	/** Ordering options when selecting data from "languages". */
["languages_order_by"]: GraphQLTypes["languages_order_by"];
	/** primary key columns input for table: languages */
["languages_pk_columns_input"]: GraphQLTypes["languages_pk_columns_input"];
	/** select columns of table "languages" */
["languages_select_column"]: GraphQLTypes["languages_select_column"];
	/** input type for updating data in table "languages" */
["languages_set_input"]: GraphQLTypes["languages_set_input"];
	/** update columns of table "languages" */
["languages_update_column"]: GraphQLTypes["languages_update_column"];
	/** mutation root */
["mutation_root"]: {
		/** delete data from the table: "companies" */
	delete_companies?:ModelTypes["companies_mutation_response"],
	/** delete single row from the table: "companies" */
	delete_companies_by_pk?:ModelTypes["companies"],
	/** delete data from the table: "company_user_link" */
	delete_company_user_link?:ModelTypes["company_user_link_mutation_response"],
	/** delete single row from the table: "company_user_link" */
	delete_company_user_link_by_pk?:ModelTypes["company_user_link"],
	/** delete data from the table: "languages" */
	delete_languages?:ModelTypes["languages_mutation_response"],
	/** delete single row from the table: "languages" */
	delete_languages_by_pk?:ModelTypes["languages"],
	/** delete data from the table: "project_language" */
	delete_project_language?:ModelTypes["project_language_mutation_response"],
	/** delete single row from the table: "project_language" */
	delete_project_language_by_pk?:ModelTypes["project_language"],
	/** delete data from the table: "project_terms" */
	delete_project_terms?:ModelTypes["project_terms_mutation_response"],
	/** delete single row from the table: "project_terms" */
	delete_project_terms_by_pk?:ModelTypes["project_terms"],
	/** delete data from the table: "projects" */
	delete_projects?:ModelTypes["projects_mutation_response"],
	/** delete single row from the table: "projects" */
	delete_projects_by_pk?:ModelTypes["projects"],
	/** delete data from the table: "translation_statuses" */
	delete_translation_statuses?:ModelTypes["translation_statuses_mutation_response"],
	/** delete single row from the table: "translation_statuses" */
	delete_translation_statuses_by_pk?:ModelTypes["translation_statuses"],
	/** delete data from the table: "translations" */
	delete_translations?:ModelTypes["translations_mutation_response"],
	/** delete single row from the table: "translations" */
	delete_translations_by_pk?:ModelTypes["translations"],
	/** delete data from the table: "user_project_link" */
	delete_user_project_link?:ModelTypes["user_project_link_mutation_response"],
	/** delete single row from the table: "user_project_link" */
	delete_user_project_link_by_pk?:ModelTypes["user_project_link"],
	/** delete data from the table: "users" */
	delete_users?:ModelTypes["users_mutation_response"],
	/** delete single row from the table: "users" */
	delete_users_by_pk?:ModelTypes["users"],
	/** insert data into the table: "companies" */
	insert_companies?:ModelTypes["companies_mutation_response"],
	/** insert a single row into the table: "companies" */
	insert_companies_one?:ModelTypes["companies"],
	/** insert data into the table: "company_user_link" */
	insert_company_user_link?:ModelTypes["company_user_link_mutation_response"],
	/** insert a single row into the table: "company_user_link" */
	insert_company_user_link_one?:ModelTypes["company_user_link"],
	/** insert data into the table: "languages" */
	insert_languages?:ModelTypes["languages_mutation_response"],
	/** insert a single row into the table: "languages" */
	insert_languages_one?:ModelTypes["languages"],
	/** insert data into the table: "project_language" */
	insert_project_language?:ModelTypes["project_language_mutation_response"],
	/** insert a single row into the table: "project_language" */
	insert_project_language_one?:ModelTypes["project_language"],
	/** insert data into the table: "project_terms" */
	insert_project_terms?:ModelTypes["project_terms_mutation_response"],
	/** insert a single row into the table: "project_terms" */
	insert_project_terms_one?:ModelTypes["project_terms"],
	/** insert data into the table: "projects" */
	insert_projects?:ModelTypes["projects_mutation_response"],
	/** insert a single row into the table: "projects" */
	insert_projects_one?:ModelTypes["projects"],
	/** insert data into the table: "translation_statuses" */
	insert_translation_statuses?:ModelTypes["translation_statuses_mutation_response"],
	/** insert a single row into the table: "translation_statuses" */
	insert_translation_statuses_one?:ModelTypes["translation_statuses"],
	/** insert data into the table: "translations" */
	insert_translations?:ModelTypes["translations_mutation_response"],
	/** insert a single row into the table: "translations" */
	insert_translations_one?:ModelTypes["translations"],
	/** insert data into the table: "user_project_link" */
	insert_user_project_link?:ModelTypes["user_project_link_mutation_response"],
	/** insert a single row into the table: "user_project_link" */
	insert_user_project_link_one?:ModelTypes["user_project_link"],
	/** insert data into the table: "users" */
	insert_users?:ModelTypes["users_mutation_response"],
	/** insert a single row into the table: "users" */
	insert_users_one?:ModelTypes["users"],
	/** update data of the table: "companies" */
	update_companies?:ModelTypes["companies_mutation_response"],
	/** update single row of the table: "companies" */
	update_companies_by_pk?:ModelTypes["companies"],
	/** update data of the table: "company_user_link" */
	update_company_user_link?:ModelTypes["company_user_link_mutation_response"],
	/** update single row of the table: "company_user_link" */
	update_company_user_link_by_pk?:ModelTypes["company_user_link"],
	/** update data of the table: "languages" */
	update_languages?:ModelTypes["languages_mutation_response"],
	/** update single row of the table: "languages" */
	update_languages_by_pk?:ModelTypes["languages"],
	/** update data of the table: "project_language" */
	update_project_language?:ModelTypes["project_language_mutation_response"],
	/** update single row of the table: "project_language" */
	update_project_language_by_pk?:ModelTypes["project_language"],
	/** update data of the table: "project_terms" */
	update_project_terms?:ModelTypes["project_terms_mutation_response"],
	/** update single row of the table: "project_terms" */
	update_project_terms_by_pk?:ModelTypes["project_terms"],
	/** update data of the table: "projects" */
	update_projects?:ModelTypes["projects_mutation_response"],
	/** update single row of the table: "projects" */
	update_projects_by_pk?:ModelTypes["projects"],
	/** update data of the table: "translation_statuses" */
	update_translation_statuses?:ModelTypes["translation_statuses_mutation_response"],
	/** update single row of the table: "translation_statuses" */
	update_translation_statuses_by_pk?:ModelTypes["translation_statuses"],
	/** update data of the table: "translations" */
	update_translations?:ModelTypes["translations_mutation_response"],
	/** update single row of the table: "translations" */
	update_translations_by_pk?:ModelTypes["translations"],
	/** update data of the table: "user_project_link" */
	update_user_project_link?:ModelTypes["user_project_link_mutation_response"],
	/** update single row of the table: "user_project_link" */
	update_user_project_link_by_pk?:ModelTypes["user_project_link"],
	/** update data of the table: "users" */
	update_users?:ModelTypes["users_mutation_response"],
	/** update single row of the table: "users" */
	update_users_by_pk?:ModelTypes["users"]
};
	/** column ordering options */
["order_by"]: GraphQLTypes["order_by"];
	/** columns and relationships of "project_language" */
["project_language"]: {
		id:ModelTypes["uuid"],
	language_id:ModelTypes["uuid"],
	project_id:ModelTypes["uuid"]
};
	/** aggregated selection of "project_language" */
["project_language_aggregate"]: {
		aggregate?:ModelTypes["project_language_aggregate_fields"],
	nodes:ModelTypes["project_language"][]
};
	/** aggregate fields of "project_language" */
["project_language_aggregate_fields"]: {
		count:number,
	max?:ModelTypes["project_language_max_fields"],
	min?:ModelTypes["project_language_min_fields"]
};
	/** Boolean expression to filter rows from the table "project_language". All fields are combined with a logical 'AND'. */
["project_language_bool_exp"]: GraphQLTypes["project_language_bool_exp"];
	/** unique or primary key constraints on table "project_language" */
["project_language_constraint"]: GraphQLTypes["project_language_constraint"];
	/** input type for inserting data into table "project_language" */
["project_language_insert_input"]: GraphQLTypes["project_language_insert_input"];
	/** aggregate max on columns */
["project_language_max_fields"]: {
		id?:ModelTypes["uuid"],
	language_id?:ModelTypes["uuid"],
	project_id?:ModelTypes["uuid"]
};
	/** aggregate min on columns */
["project_language_min_fields"]: {
		id?:ModelTypes["uuid"],
	language_id?:ModelTypes["uuid"],
	project_id?:ModelTypes["uuid"]
};
	/** response of any mutation on the table "project_language" */
["project_language_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:ModelTypes["project_language"][]
};
	/** on conflict condition type for table "project_language" */
["project_language_on_conflict"]: GraphQLTypes["project_language_on_conflict"];
	/** Ordering options when selecting data from "project_language". */
["project_language_order_by"]: GraphQLTypes["project_language_order_by"];
	/** primary key columns input for table: project_language */
["project_language_pk_columns_input"]: GraphQLTypes["project_language_pk_columns_input"];
	/** select columns of table "project_language" */
["project_language_select_column"]: GraphQLTypes["project_language_select_column"];
	/** input type for updating data in table "project_language" */
["project_language_set_input"]: GraphQLTypes["project_language_set_input"];
	/** update columns of table "project_language" */
["project_language_update_column"]: GraphQLTypes["project_language_update_column"];
	/** columns and relationships of "project_terms" */
["project_terms"]: {
		description?:string,
	id:ModelTypes["uuid"],
	key:string,
	project_id:ModelTypes["uuid"]
};
	/** aggregated selection of "project_terms" */
["project_terms_aggregate"]: {
		aggregate?:ModelTypes["project_terms_aggregate_fields"],
	nodes:ModelTypes["project_terms"][]
};
	/** aggregate fields of "project_terms" */
["project_terms_aggregate_fields"]: {
		count:number,
	max?:ModelTypes["project_terms_max_fields"],
	min?:ModelTypes["project_terms_min_fields"]
};
	/** Boolean expression to filter rows from the table "project_terms". All fields are combined with a logical 'AND'. */
["project_terms_bool_exp"]: GraphQLTypes["project_terms_bool_exp"];
	/** unique or primary key constraints on table "project_terms" */
["project_terms_constraint"]: GraphQLTypes["project_terms_constraint"];
	/** input type for inserting data into table "project_terms" */
["project_terms_insert_input"]: GraphQLTypes["project_terms_insert_input"];
	/** aggregate max on columns */
["project_terms_max_fields"]: {
		description?:string,
	id?:ModelTypes["uuid"],
	key?:string,
	project_id?:ModelTypes["uuid"]
};
	/** aggregate min on columns */
["project_terms_min_fields"]: {
		description?:string,
	id?:ModelTypes["uuid"],
	key?:string,
	project_id?:ModelTypes["uuid"]
};
	/** response of any mutation on the table "project_terms" */
["project_terms_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:ModelTypes["project_terms"][]
};
	/** on conflict condition type for table "project_terms" */
["project_terms_on_conflict"]: GraphQLTypes["project_terms_on_conflict"];
	/** Ordering options when selecting data from "project_terms". */
["project_terms_order_by"]: GraphQLTypes["project_terms_order_by"];
	/** primary key columns input for table: project_terms */
["project_terms_pk_columns_input"]: GraphQLTypes["project_terms_pk_columns_input"];
	/** select columns of table "project_terms" */
["project_terms_select_column"]: GraphQLTypes["project_terms_select_column"];
	/** input type for updating data in table "project_terms" */
["project_terms_set_input"]: GraphQLTypes["project_terms_set_input"];
	/** update columns of table "project_terms" */
["project_terms_update_column"]: GraphQLTypes["project_terms_update_column"];
	/** columns and relationships of "projects" */
["projects"]: {
		company_id:ModelTypes["uuid"],
	id:ModelTypes["uuid"],
	name:string,
	/** An array relationship */
	user_project_links:ModelTypes["user_project_link"][],
	/** An aggregate relationship */
	user_project_links_aggregate:ModelTypes["user_project_link_aggregate"]
};
	/** aggregated selection of "projects" */
["projects_aggregate"]: {
		aggregate?:ModelTypes["projects_aggregate_fields"],
	nodes:ModelTypes["projects"][]
};
	/** aggregate fields of "projects" */
["projects_aggregate_fields"]: {
		count:number,
	max?:ModelTypes["projects_max_fields"],
	min?:ModelTypes["projects_min_fields"]
};
	/** Boolean expression to filter rows from the table "projects". All fields are combined with a logical 'AND'. */
["projects_bool_exp"]: GraphQLTypes["projects_bool_exp"];
	/** unique or primary key constraints on table "projects" */
["projects_constraint"]: GraphQLTypes["projects_constraint"];
	/** input type for inserting data into table "projects" */
["projects_insert_input"]: GraphQLTypes["projects_insert_input"];
	/** aggregate max on columns */
["projects_max_fields"]: {
		company_id?:ModelTypes["uuid"],
	id?:ModelTypes["uuid"],
	name?:string
};
	/** aggregate min on columns */
["projects_min_fields"]: {
		company_id?:ModelTypes["uuid"],
	id?:ModelTypes["uuid"],
	name?:string
};
	/** response of any mutation on the table "projects" */
["projects_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:ModelTypes["projects"][]
};
	/** on conflict condition type for table "projects" */
["projects_on_conflict"]: GraphQLTypes["projects_on_conflict"];
	/** Ordering options when selecting data from "projects". */
["projects_order_by"]: GraphQLTypes["projects_order_by"];
	/** primary key columns input for table: projects */
["projects_pk_columns_input"]: GraphQLTypes["projects_pk_columns_input"];
	/** select columns of table "projects" */
["projects_select_column"]: GraphQLTypes["projects_select_column"];
	/** input type for updating data in table "projects" */
["projects_set_input"]: GraphQLTypes["projects_set_input"];
	/** update columns of table "projects" */
["projects_update_column"]: GraphQLTypes["projects_update_column"];
	["query_root"]: {
		/** fetch data from the table: "companies" */
	companies:ModelTypes["companies"][],
	/** fetch aggregated fields from the table: "companies" */
	companies_aggregate:ModelTypes["companies_aggregate"],
	/** fetch data from the table: "companies" using primary key columns */
	companies_by_pk?:ModelTypes["companies"],
	/** fetch data from the table: "company_user_link" */
	company_user_link:ModelTypes["company_user_link"][],
	/** fetch aggregated fields from the table: "company_user_link" */
	company_user_link_aggregate:ModelTypes["company_user_link_aggregate"],
	/** fetch data from the table: "company_user_link" using primary key columns */
	company_user_link_by_pk?:ModelTypes["company_user_link"],
	/** fetch data from the table: "languages" */
	languages:ModelTypes["languages"][],
	/** fetch aggregated fields from the table: "languages" */
	languages_aggregate:ModelTypes["languages_aggregate"],
	/** fetch data from the table: "languages" using primary key columns */
	languages_by_pk?:ModelTypes["languages"],
	/** fetch data from the table: "project_language" */
	project_language:ModelTypes["project_language"][],
	/** fetch aggregated fields from the table: "project_language" */
	project_language_aggregate:ModelTypes["project_language_aggregate"],
	/** fetch data from the table: "project_language" using primary key columns */
	project_language_by_pk?:ModelTypes["project_language"],
	/** fetch data from the table: "project_terms" */
	project_terms:ModelTypes["project_terms"][],
	/** fetch aggregated fields from the table: "project_terms" */
	project_terms_aggregate:ModelTypes["project_terms_aggregate"],
	/** fetch data from the table: "project_terms" using primary key columns */
	project_terms_by_pk?:ModelTypes["project_terms"],
	/** fetch data from the table: "projects" */
	projects:ModelTypes["projects"][],
	/** fetch aggregated fields from the table: "projects" */
	projects_aggregate:ModelTypes["projects_aggregate"],
	/** fetch data from the table: "projects" using primary key columns */
	projects_by_pk?:ModelTypes["projects"],
	/** fetch data from the table: "translation_statuses" */
	translation_statuses:ModelTypes["translation_statuses"][],
	/** fetch aggregated fields from the table: "translation_statuses" */
	translation_statuses_aggregate:ModelTypes["translation_statuses_aggregate"],
	/** fetch data from the table: "translation_statuses" using primary key columns */
	translation_statuses_by_pk?:ModelTypes["translation_statuses"],
	/** fetch data from the table: "translations" */
	translations:ModelTypes["translations"][],
	/** fetch aggregated fields from the table: "translations" */
	translations_aggregate:ModelTypes["translations_aggregate"],
	/** fetch data from the table: "translations" using primary key columns */
	translations_by_pk?:ModelTypes["translations"],
	/** fetch data from the table: "user_project_link" */
	user_project_link:ModelTypes["user_project_link"][],
	/** fetch aggregated fields from the table: "user_project_link" */
	user_project_link_aggregate:ModelTypes["user_project_link_aggregate"],
	/** fetch data from the table: "user_project_link" using primary key columns */
	user_project_link_by_pk?:ModelTypes["user_project_link"],
	/** fetch data from the table: "users" */
	users:ModelTypes["users"][],
	/** fetch aggregated fields from the table: "users" */
	users_aggregate:ModelTypes["users_aggregate"],
	/** fetch data from the table: "users" using primary key columns */
	users_by_pk?:ModelTypes["users"]
};
	["subscription_root"]: {
		/** fetch data from the table: "companies" */
	companies:ModelTypes["companies"][],
	/** fetch aggregated fields from the table: "companies" */
	companies_aggregate:ModelTypes["companies_aggregate"],
	/** fetch data from the table: "companies" using primary key columns */
	companies_by_pk?:ModelTypes["companies"],
	/** fetch data from the table: "company_user_link" */
	company_user_link:ModelTypes["company_user_link"][],
	/** fetch aggregated fields from the table: "company_user_link" */
	company_user_link_aggregate:ModelTypes["company_user_link_aggregate"],
	/** fetch data from the table: "company_user_link" using primary key columns */
	company_user_link_by_pk?:ModelTypes["company_user_link"],
	/** fetch data from the table: "languages" */
	languages:ModelTypes["languages"][],
	/** fetch aggregated fields from the table: "languages" */
	languages_aggregate:ModelTypes["languages_aggregate"],
	/** fetch data from the table: "languages" using primary key columns */
	languages_by_pk?:ModelTypes["languages"],
	/** fetch data from the table: "project_language" */
	project_language:ModelTypes["project_language"][],
	/** fetch aggregated fields from the table: "project_language" */
	project_language_aggregate:ModelTypes["project_language_aggregate"],
	/** fetch data from the table: "project_language" using primary key columns */
	project_language_by_pk?:ModelTypes["project_language"],
	/** fetch data from the table: "project_terms" */
	project_terms:ModelTypes["project_terms"][],
	/** fetch aggregated fields from the table: "project_terms" */
	project_terms_aggregate:ModelTypes["project_terms_aggregate"],
	/** fetch data from the table: "project_terms" using primary key columns */
	project_terms_by_pk?:ModelTypes["project_terms"],
	/** fetch data from the table: "projects" */
	projects:ModelTypes["projects"][],
	/** fetch aggregated fields from the table: "projects" */
	projects_aggregate:ModelTypes["projects_aggregate"],
	/** fetch data from the table: "projects" using primary key columns */
	projects_by_pk?:ModelTypes["projects"],
	/** fetch data from the table: "translation_statuses" */
	translation_statuses:ModelTypes["translation_statuses"][],
	/** fetch aggregated fields from the table: "translation_statuses" */
	translation_statuses_aggregate:ModelTypes["translation_statuses_aggregate"],
	/** fetch data from the table: "translation_statuses" using primary key columns */
	translation_statuses_by_pk?:ModelTypes["translation_statuses"],
	/** fetch data from the table: "translations" */
	translations:ModelTypes["translations"][],
	/** fetch aggregated fields from the table: "translations" */
	translations_aggregate:ModelTypes["translations_aggregate"],
	/** fetch data from the table: "translations" using primary key columns */
	translations_by_pk?:ModelTypes["translations"],
	/** fetch data from the table: "user_project_link" */
	user_project_link:ModelTypes["user_project_link"][],
	/** fetch aggregated fields from the table: "user_project_link" */
	user_project_link_aggregate:ModelTypes["user_project_link_aggregate"],
	/** fetch data from the table: "user_project_link" using primary key columns */
	user_project_link_by_pk?:ModelTypes["user_project_link"],
	/** fetch data from the table: "users" */
	users:ModelTypes["users"][],
	/** fetch aggregated fields from the table: "users" */
	users_aggregate:ModelTypes["users_aggregate"],
	/** fetch data from the table: "users" using primary key columns */
	users_by_pk?:ModelTypes["users"]
};
	/** columns and relationships of "translation_statuses" */
["translation_statuses"]: {
		id:ModelTypes["uuid"],
	name:string,
	project_id:ModelTypes["uuid"]
};
	/** aggregated selection of "translation_statuses" */
["translation_statuses_aggregate"]: {
		aggregate?:ModelTypes["translation_statuses_aggregate_fields"],
	nodes:ModelTypes["translation_statuses"][]
};
	/** aggregate fields of "translation_statuses" */
["translation_statuses_aggregate_fields"]: {
		count:number,
	max?:ModelTypes["translation_statuses_max_fields"],
	min?:ModelTypes["translation_statuses_min_fields"]
};
	/** Boolean expression to filter rows from the table "translation_statuses". All fields are combined with a logical 'AND'. */
["translation_statuses_bool_exp"]: GraphQLTypes["translation_statuses_bool_exp"];
	/** unique or primary key constraints on table "translation_statuses" */
["translation_statuses_constraint"]: GraphQLTypes["translation_statuses_constraint"];
	/** input type for inserting data into table "translation_statuses" */
["translation_statuses_insert_input"]: GraphQLTypes["translation_statuses_insert_input"];
	/** aggregate max on columns */
["translation_statuses_max_fields"]: {
		id?:ModelTypes["uuid"],
	name?:string,
	project_id?:ModelTypes["uuid"]
};
	/** aggregate min on columns */
["translation_statuses_min_fields"]: {
		id?:ModelTypes["uuid"],
	name?:string,
	project_id?:ModelTypes["uuid"]
};
	/** response of any mutation on the table "translation_statuses" */
["translation_statuses_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:ModelTypes["translation_statuses"][]
};
	/** on conflict condition type for table "translation_statuses" */
["translation_statuses_on_conflict"]: GraphQLTypes["translation_statuses_on_conflict"];
	/** Ordering options when selecting data from "translation_statuses". */
["translation_statuses_order_by"]: GraphQLTypes["translation_statuses_order_by"];
	/** primary key columns input for table: translation_statuses */
["translation_statuses_pk_columns_input"]: GraphQLTypes["translation_statuses_pk_columns_input"];
	/** select columns of table "translation_statuses" */
["translation_statuses_select_column"]: GraphQLTypes["translation_statuses_select_column"];
	/** input type for updating data in table "translation_statuses" */
["translation_statuses_set_input"]: GraphQLTypes["translation_statuses_set_input"];
	/** update columns of table "translation_statuses" */
["translation_statuses_update_column"]: GraphQLTypes["translation_statuses_update_column"];
	/** columns and relationships of "translations" */
["translations"]: {
		fuzzy:boolean,
	id:ModelTypes["uuid"],
	key_id:ModelTypes["uuid"],
	translation_value?:string
};
	/** aggregated selection of "translations" */
["translations_aggregate"]: {
		aggregate?:ModelTypes["translations_aggregate_fields"],
	nodes:ModelTypes["translations"][]
};
	/** aggregate fields of "translations" */
["translations_aggregate_fields"]: {
		count:number,
	max?:ModelTypes["translations_max_fields"],
	min?:ModelTypes["translations_min_fields"]
};
	/** Boolean expression to filter rows from the table "translations". All fields are combined with a logical 'AND'. */
["translations_bool_exp"]: GraphQLTypes["translations_bool_exp"];
	/** unique or primary key constraints on table "translations" */
["translations_constraint"]: GraphQLTypes["translations_constraint"];
	/** input type for inserting data into table "translations" */
["translations_insert_input"]: GraphQLTypes["translations_insert_input"];
	/** aggregate max on columns */
["translations_max_fields"]: {
		id?:ModelTypes["uuid"],
	key_id?:ModelTypes["uuid"],
	translation_value?:string
};
	/** aggregate min on columns */
["translations_min_fields"]: {
		id?:ModelTypes["uuid"],
	key_id?:ModelTypes["uuid"],
	translation_value?:string
};
	/** response of any mutation on the table "translations" */
["translations_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:ModelTypes["translations"][]
};
	/** on conflict condition type for table "translations" */
["translations_on_conflict"]: GraphQLTypes["translations_on_conflict"];
	/** Ordering options when selecting data from "translations". */
["translations_order_by"]: GraphQLTypes["translations_order_by"];
	/** primary key columns input for table: translations */
["translations_pk_columns_input"]: GraphQLTypes["translations_pk_columns_input"];
	/** select columns of table "translations" */
["translations_select_column"]: GraphQLTypes["translations_select_column"];
	/** input type for updating data in table "translations" */
["translations_set_input"]: GraphQLTypes["translations_set_input"];
	/** update columns of table "translations" */
["translations_update_column"]: GraphQLTypes["translations_update_column"];
	/** columns and relationships of "user_project_link" */
["user_project_link"]: {
		id:ModelTypes["uuid"],
	project_id:ModelTypes["uuid"],
	user_id:ModelTypes["uuid"]
};
	/** aggregated selection of "user_project_link" */
["user_project_link_aggregate"]: {
		aggregate?:ModelTypes["user_project_link_aggregate_fields"],
	nodes:ModelTypes["user_project_link"][]
};
	/** aggregate fields of "user_project_link" */
["user_project_link_aggregate_fields"]: {
		count:number,
	max?:ModelTypes["user_project_link_max_fields"],
	min?:ModelTypes["user_project_link_min_fields"]
};
	/** order by aggregate values of table "user_project_link" */
["user_project_link_aggregate_order_by"]: GraphQLTypes["user_project_link_aggregate_order_by"];
	/** input type for inserting array relation for remote table "user_project_link" */
["user_project_link_arr_rel_insert_input"]: GraphQLTypes["user_project_link_arr_rel_insert_input"];
	/** Boolean expression to filter rows from the table "user_project_link". All fields are combined with a logical 'AND'. */
["user_project_link_bool_exp"]: GraphQLTypes["user_project_link_bool_exp"];
	/** unique or primary key constraints on table "user_project_link" */
["user_project_link_constraint"]: GraphQLTypes["user_project_link_constraint"];
	/** input type for inserting data into table "user_project_link" */
["user_project_link_insert_input"]: GraphQLTypes["user_project_link_insert_input"];
	/** aggregate max on columns */
["user_project_link_max_fields"]: {
		id?:ModelTypes["uuid"],
	project_id?:ModelTypes["uuid"],
	user_id?:ModelTypes["uuid"]
};
	/** order by max() on columns of table "user_project_link" */
["user_project_link_max_order_by"]: GraphQLTypes["user_project_link_max_order_by"];
	/** aggregate min on columns */
["user_project_link_min_fields"]: {
		id?:ModelTypes["uuid"],
	project_id?:ModelTypes["uuid"],
	user_id?:ModelTypes["uuid"]
};
	/** order by min() on columns of table "user_project_link" */
["user_project_link_min_order_by"]: GraphQLTypes["user_project_link_min_order_by"];
	/** response of any mutation on the table "user_project_link" */
["user_project_link_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:ModelTypes["user_project_link"][]
};
	/** on conflict condition type for table "user_project_link" */
["user_project_link_on_conflict"]: GraphQLTypes["user_project_link_on_conflict"];
	/** Ordering options when selecting data from "user_project_link". */
["user_project_link_order_by"]: GraphQLTypes["user_project_link_order_by"];
	/** primary key columns input for table: user_project_link */
["user_project_link_pk_columns_input"]: GraphQLTypes["user_project_link_pk_columns_input"];
	/** select columns of table "user_project_link" */
["user_project_link_select_column"]: GraphQLTypes["user_project_link_select_column"];
	/** input type for updating data in table "user_project_link" */
["user_project_link_set_input"]: GraphQLTypes["user_project_link_set_input"];
	/** update columns of table "user_project_link" */
["user_project_link_update_column"]: GraphQLTypes["user_project_link_update_column"];
	/** columns and relationships of "users" */
["users"]: {
		email:string,
	first_name:string,
	id:ModelTypes["uuid"],
	last_name:string,
	password:string
};
	/** aggregated selection of "users" */
["users_aggregate"]: {
		aggregate?:ModelTypes["users_aggregate_fields"],
	nodes:ModelTypes["users"][]
};
	/** aggregate fields of "users" */
["users_aggregate_fields"]: {
		count:number,
	max?:ModelTypes["users_max_fields"],
	min?:ModelTypes["users_min_fields"]
};
	/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
["users_bool_exp"]: GraphQLTypes["users_bool_exp"];
	/** unique or primary key constraints on table "users" */
["users_constraint"]: GraphQLTypes["users_constraint"];
	/** input type for inserting data into table "users" */
["users_insert_input"]: GraphQLTypes["users_insert_input"];
	/** aggregate max on columns */
["users_max_fields"]: {
		email?:string,
	first_name?:string,
	id?:ModelTypes["uuid"],
	last_name?:string,
	password?:string
};
	/** aggregate min on columns */
["users_min_fields"]: {
		email?:string,
	first_name?:string,
	id?:ModelTypes["uuid"],
	last_name?:string,
	password?:string
};
	/** response of any mutation on the table "users" */
["users_mutation_response"]: {
		/** number of rows affected by the mutation */
	affected_rows:number,
	/** data from the rows affected by the mutation */
	returning:ModelTypes["users"][]
};
	/** on conflict condition type for table "users" */
["users_on_conflict"]: GraphQLTypes["users_on_conflict"];
	/** Ordering options when selecting data from "users". */
["users_order_by"]: GraphQLTypes["users_order_by"];
	/** primary key columns input for table: users */
["users_pk_columns_input"]: GraphQLTypes["users_pk_columns_input"];
	/** select columns of table "users" */
["users_select_column"]: GraphQLTypes["users_select_column"];
	/** input type for updating data in table "users" */
["users_set_input"]: GraphQLTypes["users_set_input"];
	/** update columns of table "users" */
["users_update_column"]: GraphQLTypes["users_update_column"];
	["uuid"]:any;
	/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
["uuid_comparison_exp"]: GraphQLTypes["uuid_comparison_exp"]
    }

export type GraphQLTypes = {
    /** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
["Boolean_comparison_exp"]: {
		_eq?: boolean,
	_gt?: boolean,
	_gte?: boolean,
	_in?: Array<boolean>,
	_is_null?: boolean,
	_lt?: boolean,
	_lte?: boolean,
	_neq?: boolean,
	_nin?: Array<boolean>
};
	/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
["String_comparison_exp"]: {
		_eq?: string,
	_gt?: string,
	_gte?: string,
	/** does the column match the given case-insensitive pattern */
	_ilike?: string,
	_in?: Array<string>,
	/** does the column match the given POSIX regular expression, case insensitive */
	_iregex?: string,
	_is_null?: boolean,
	/** does the column match the given pattern */
	_like?: string,
	_lt?: string,
	_lte?: string,
	_neq?: string,
	/** does the column NOT match the given case-insensitive pattern */
	_nilike?: string,
	_nin?: Array<string>,
	/** does the column NOT match the given POSIX regular expression, case insensitive */
	_niregex?: string,
	/** does the column NOT match the given pattern */
	_nlike?: string,
	/** does the column NOT match the given POSIX regular expression, case sensitive */
	_nregex?: string,
	/** does the column NOT match the given SQL regular expression */
	_nsimilar?: string,
	/** does the column match the given POSIX regular expression, case sensitive */
	_regex?: string,
	/** does the column match the given SQL regular expression */
	_similar?: string
};
	/** columns and relationships of "companies" */
["companies"]: {
	__typename: "companies",
	id: GraphQLTypes["uuid"],
	name: string
};
	/** aggregated selection of "companies" */
["companies_aggregate"]: {
	__typename: "companies_aggregate",
	aggregate?: GraphQLTypes["companies_aggregate_fields"],
	nodes: Array<GraphQLTypes["companies"]>
};
	/** aggregate fields of "companies" */
["companies_aggregate_fields"]: {
	__typename: "companies_aggregate_fields",
	count: number,
	max?: GraphQLTypes["companies_max_fields"],
	min?: GraphQLTypes["companies_min_fields"]
};
	/** Boolean expression to filter rows from the table "companies". All fields are combined with a logical 'AND'. */
["companies_bool_exp"]: {
		_and?: Array<GraphQLTypes["companies_bool_exp"]>,
	_not?: GraphQLTypes["companies_bool_exp"],
	_or?: Array<GraphQLTypes["companies_bool_exp"]>,
	id?: GraphQLTypes["uuid_comparison_exp"],
	name?: GraphQLTypes["String_comparison_exp"]
};
	/** unique or primary key constraints on table "companies" */
["companies_constraint"]: companies_constraint;
	/** input type for inserting data into table "companies" */
["companies_insert_input"]: {
		id?: GraphQLTypes["uuid"],
	name?: string
};
	/** aggregate max on columns */
["companies_max_fields"]: {
	__typename: "companies_max_fields",
	id?: GraphQLTypes["uuid"],
	name?: string
};
	/** aggregate min on columns */
["companies_min_fields"]: {
	__typename: "companies_min_fields",
	id?: GraphQLTypes["uuid"],
	name?: string
};
	/** response of any mutation on the table "companies" */
["companies_mutation_response"]: {
	__typename: "companies_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["companies"]>
};
	/** on conflict condition type for table "companies" */
["companies_on_conflict"]: {
		constraint: GraphQLTypes["companies_constraint"],
	update_columns: Array<GraphQLTypes["companies_update_column"]>,
	where?: GraphQLTypes["companies_bool_exp"]
};
	/** Ordering options when selecting data from "companies". */
["companies_order_by"]: {
		id?: GraphQLTypes["order_by"],
	name?: GraphQLTypes["order_by"]
};
	/** primary key columns input for table: companies */
["companies_pk_columns_input"]: {
		id: GraphQLTypes["uuid"]
};
	/** select columns of table "companies" */
["companies_select_column"]: companies_select_column;
	/** input type for updating data in table "companies" */
["companies_set_input"]: {
		id?: GraphQLTypes["uuid"],
	name?: string
};
	/** update columns of table "companies" */
["companies_update_column"]: companies_update_column;
	/** columns and relationships of "company_user_link" */
["company_user_link"]: {
	__typename: "company_user_link",
	company_id: GraphQLTypes["uuid"],
	id: GraphQLTypes["uuid"],
	user_id: GraphQLTypes["uuid"]
};
	/** aggregated selection of "company_user_link" */
["company_user_link_aggregate"]: {
	__typename: "company_user_link_aggregate",
	aggregate?: GraphQLTypes["company_user_link_aggregate_fields"],
	nodes: Array<GraphQLTypes["company_user_link"]>
};
	/** aggregate fields of "company_user_link" */
["company_user_link_aggregate_fields"]: {
	__typename: "company_user_link_aggregate_fields",
	count: number,
	max?: GraphQLTypes["company_user_link_max_fields"],
	min?: GraphQLTypes["company_user_link_min_fields"]
};
	/** Boolean expression to filter rows from the table "company_user_link". All fields are combined with a logical 'AND'. */
["company_user_link_bool_exp"]: {
		_and?: Array<GraphQLTypes["company_user_link_bool_exp"]>,
	_not?: GraphQLTypes["company_user_link_bool_exp"],
	_or?: Array<GraphQLTypes["company_user_link_bool_exp"]>,
	company_id?: GraphQLTypes["uuid_comparison_exp"],
	id?: GraphQLTypes["uuid_comparison_exp"],
	user_id?: GraphQLTypes["uuid_comparison_exp"]
};
	/** unique or primary key constraints on table "company_user_link" */
["company_user_link_constraint"]: company_user_link_constraint;
	/** input type for inserting data into table "company_user_link" */
["company_user_link_insert_input"]: {
		company_id?: GraphQLTypes["uuid"],
	id?: GraphQLTypes["uuid"],
	user_id?: GraphQLTypes["uuid"]
};
	/** aggregate max on columns */
["company_user_link_max_fields"]: {
	__typename: "company_user_link_max_fields",
	company_id?: GraphQLTypes["uuid"],
	id?: GraphQLTypes["uuid"],
	user_id?: GraphQLTypes["uuid"]
};
	/** aggregate min on columns */
["company_user_link_min_fields"]: {
	__typename: "company_user_link_min_fields",
	company_id?: GraphQLTypes["uuid"],
	id?: GraphQLTypes["uuid"],
	user_id?: GraphQLTypes["uuid"]
};
	/** response of any mutation on the table "company_user_link" */
["company_user_link_mutation_response"]: {
	__typename: "company_user_link_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["company_user_link"]>
};
	/** on conflict condition type for table "company_user_link" */
["company_user_link_on_conflict"]: {
		constraint: GraphQLTypes["company_user_link_constraint"],
	update_columns: Array<GraphQLTypes["company_user_link_update_column"]>,
	where?: GraphQLTypes["company_user_link_bool_exp"]
};
	/** Ordering options when selecting data from "company_user_link". */
["company_user_link_order_by"]: {
		company_id?: GraphQLTypes["order_by"],
	id?: GraphQLTypes["order_by"],
	user_id?: GraphQLTypes["order_by"]
};
	/** primary key columns input for table: company_user_link */
["company_user_link_pk_columns_input"]: {
		id: GraphQLTypes["uuid"]
};
	/** select columns of table "company_user_link" */
["company_user_link_select_column"]: company_user_link_select_column;
	/** input type for updating data in table "company_user_link" */
["company_user_link_set_input"]: {
		company_id?: GraphQLTypes["uuid"],
	id?: GraphQLTypes["uuid"],
	user_id?: GraphQLTypes["uuid"]
};
	/** update columns of table "company_user_link" */
["company_user_link_update_column"]: company_user_link_update_column;
	/** columns and relationships of "languages" */
["languages"]: {
	__typename: "languages",
	id: GraphQLTypes["uuid"],
	iso_code: string,
	name: string
};
	/** aggregated selection of "languages" */
["languages_aggregate"]: {
	__typename: "languages_aggregate",
	aggregate?: GraphQLTypes["languages_aggregate_fields"],
	nodes: Array<GraphQLTypes["languages"]>
};
	/** aggregate fields of "languages" */
["languages_aggregate_fields"]: {
	__typename: "languages_aggregate_fields",
	count: number,
	max?: GraphQLTypes["languages_max_fields"],
	min?: GraphQLTypes["languages_min_fields"]
};
	/** Boolean expression to filter rows from the table "languages". All fields are combined with a logical 'AND'. */
["languages_bool_exp"]: {
		_and?: Array<GraphQLTypes["languages_bool_exp"]>,
	_not?: GraphQLTypes["languages_bool_exp"],
	_or?: Array<GraphQLTypes["languages_bool_exp"]>,
	id?: GraphQLTypes["uuid_comparison_exp"],
	iso_code?: GraphQLTypes["String_comparison_exp"],
	name?: GraphQLTypes["String_comparison_exp"]
};
	/** unique or primary key constraints on table "languages" */
["languages_constraint"]: languages_constraint;
	/** input type for inserting data into table "languages" */
["languages_insert_input"]: {
		id?: GraphQLTypes["uuid"],
	iso_code?: string,
	name?: string
};
	/** aggregate max on columns */
["languages_max_fields"]: {
	__typename: "languages_max_fields",
	id?: GraphQLTypes["uuid"],
	iso_code?: string,
	name?: string
};
	/** aggregate min on columns */
["languages_min_fields"]: {
	__typename: "languages_min_fields",
	id?: GraphQLTypes["uuid"],
	iso_code?: string,
	name?: string
};
	/** response of any mutation on the table "languages" */
["languages_mutation_response"]: {
	__typename: "languages_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["languages"]>
};
	/** on conflict condition type for table "languages" */
["languages_on_conflict"]: {
		constraint: GraphQLTypes["languages_constraint"],
	update_columns: Array<GraphQLTypes["languages_update_column"]>,
	where?: GraphQLTypes["languages_bool_exp"]
};
	/** Ordering options when selecting data from "languages". */
["languages_order_by"]: {
		id?: GraphQLTypes["order_by"],
	iso_code?: GraphQLTypes["order_by"],
	name?: GraphQLTypes["order_by"]
};
	/** primary key columns input for table: languages */
["languages_pk_columns_input"]: {
		id: GraphQLTypes["uuid"]
};
	/** select columns of table "languages" */
["languages_select_column"]: languages_select_column;
	/** input type for updating data in table "languages" */
["languages_set_input"]: {
		id?: GraphQLTypes["uuid"],
	iso_code?: string,
	name?: string
};
	/** update columns of table "languages" */
["languages_update_column"]: languages_update_column;
	/** mutation root */
["mutation_root"]: {
	__typename: "mutation_root",
	/** delete data from the table: "companies" */
	delete_companies?: GraphQLTypes["companies_mutation_response"],
	/** delete single row from the table: "companies" */
	delete_companies_by_pk?: GraphQLTypes["companies"],
	/** delete data from the table: "company_user_link" */
	delete_company_user_link?: GraphQLTypes["company_user_link_mutation_response"],
	/** delete single row from the table: "company_user_link" */
	delete_company_user_link_by_pk?: GraphQLTypes["company_user_link"],
	/** delete data from the table: "languages" */
	delete_languages?: GraphQLTypes["languages_mutation_response"],
	/** delete single row from the table: "languages" */
	delete_languages_by_pk?: GraphQLTypes["languages"],
	/** delete data from the table: "project_language" */
	delete_project_language?: GraphQLTypes["project_language_mutation_response"],
	/** delete single row from the table: "project_language" */
	delete_project_language_by_pk?: GraphQLTypes["project_language"],
	/** delete data from the table: "project_terms" */
	delete_project_terms?: GraphQLTypes["project_terms_mutation_response"],
	/** delete single row from the table: "project_terms" */
	delete_project_terms_by_pk?: GraphQLTypes["project_terms"],
	/** delete data from the table: "projects" */
	delete_projects?: GraphQLTypes["projects_mutation_response"],
	/** delete single row from the table: "projects" */
	delete_projects_by_pk?: GraphQLTypes["projects"],
	/** delete data from the table: "translation_statuses" */
	delete_translation_statuses?: GraphQLTypes["translation_statuses_mutation_response"],
	/** delete single row from the table: "translation_statuses" */
	delete_translation_statuses_by_pk?: GraphQLTypes["translation_statuses"],
	/** delete data from the table: "translations" */
	delete_translations?: GraphQLTypes["translations_mutation_response"],
	/** delete single row from the table: "translations" */
	delete_translations_by_pk?: GraphQLTypes["translations"],
	/** delete data from the table: "user_project_link" */
	delete_user_project_link?: GraphQLTypes["user_project_link_mutation_response"],
	/** delete single row from the table: "user_project_link" */
	delete_user_project_link_by_pk?: GraphQLTypes["user_project_link"],
	/** delete data from the table: "users" */
	delete_users?: GraphQLTypes["users_mutation_response"],
	/** delete single row from the table: "users" */
	delete_users_by_pk?: GraphQLTypes["users"],
	/** insert data into the table: "companies" */
	insert_companies?: GraphQLTypes["companies_mutation_response"],
	/** insert a single row into the table: "companies" */
	insert_companies_one?: GraphQLTypes["companies"],
	/** insert data into the table: "company_user_link" */
	insert_company_user_link?: GraphQLTypes["company_user_link_mutation_response"],
	/** insert a single row into the table: "company_user_link" */
	insert_company_user_link_one?: GraphQLTypes["company_user_link"],
	/** insert data into the table: "languages" */
	insert_languages?: GraphQLTypes["languages_mutation_response"],
	/** insert a single row into the table: "languages" */
	insert_languages_one?: GraphQLTypes["languages"],
	/** insert data into the table: "project_language" */
	insert_project_language?: GraphQLTypes["project_language_mutation_response"],
	/** insert a single row into the table: "project_language" */
	insert_project_language_one?: GraphQLTypes["project_language"],
	/** insert data into the table: "project_terms" */
	insert_project_terms?: GraphQLTypes["project_terms_mutation_response"],
	/** insert a single row into the table: "project_terms" */
	insert_project_terms_one?: GraphQLTypes["project_terms"],
	/** insert data into the table: "projects" */
	insert_projects?: GraphQLTypes["projects_mutation_response"],
	/** insert a single row into the table: "projects" */
	insert_projects_one?: GraphQLTypes["projects"],
	/** insert data into the table: "translation_statuses" */
	insert_translation_statuses?: GraphQLTypes["translation_statuses_mutation_response"],
	/** insert a single row into the table: "translation_statuses" */
	insert_translation_statuses_one?: GraphQLTypes["translation_statuses"],
	/** insert data into the table: "translations" */
	insert_translations?: GraphQLTypes["translations_mutation_response"],
	/** insert a single row into the table: "translations" */
	insert_translations_one?: GraphQLTypes["translations"],
	/** insert data into the table: "user_project_link" */
	insert_user_project_link?: GraphQLTypes["user_project_link_mutation_response"],
	/** insert a single row into the table: "user_project_link" */
	insert_user_project_link_one?: GraphQLTypes["user_project_link"],
	/** insert data into the table: "users" */
	insert_users?: GraphQLTypes["users_mutation_response"],
	/** insert a single row into the table: "users" */
	insert_users_one?: GraphQLTypes["users"],
	/** update data of the table: "companies" */
	update_companies?: GraphQLTypes["companies_mutation_response"],
	/** update single row of the table: "companies" */
	update_companies_by_pk?: GraphQLTypes["companies"],
	/** update data of the table: "company_user_link" */
	update_company_user_link?: GraphQLTypes["company_user_link_mutation_response"],
	/** update single row of the table: "company_user_link" */
	update_company_user_link_by_pk?: GraphQLTypes["company_user_link"],
	/** update data of the table: "languages" */
	update_languages?: GraphQLTypes["languages_mutation_response"],
	/** update single row of the table: "languages" */
	update_languages_by_pk?: GraphQLTypes["languages"],
	/** update data of the table: "project_language" */
	update_project_language?: GraphQLTypes["project_language_mutation_response"],
	/** update single row of the table: "project_language" */
	update_project_language_by_pk?: GraphQLTypes["project_language"],
	/** update data of the table: "project_terms" */
	update_project_terms?: GraphQLTypes["project_terms_mutation_response"],
	/** update single row of the table: "project_terms" */
	update_project_terms_by_pk?: GraphQLTypes["project_terms"],
	/** update data of the table: "projects" */
	update_projects?: GraphQLTypes["projects_mutation_response"],
	/** update single row of the table: "projects" */
	update_projects_by_pk?: GraphQLTypes["projects"],
	/** update data of the table: "translation_statuses" */
	update_translation_statuses?: GraphQLTypes["translation_statuses_mutation_response"],
	/** update single row of the table: "translation_statuses" */
	update_translation_statuses_by_pk?: GraphQLTypes["translation_statuses"],
	/** update data of the table: "translations" */
	update_translations?: GraphQLTypes["translations_mutation_response"],
	/** update single row of the table: "translations" */
	update_translations_by_pk?: GraphQLTypes["translations"],
	/** update data of the table: "user_project_link" */
	update_user_project_link?: GraphQLTypes["user_project_link_mutation_response"],
	/** update single row of the table: "user_project_link" */
	update_user_project_link_by_pk?: GraphQLTypes["user_project_link"],
	/** update data of the table: "users" */
	update_users?: GraphQLTypes["users_mutation_response"],
	/** update single row of the table: "users" */
	update_users_by_pk?: GraphQLTypes["users"]
};
	/** column ordering options */
["order_by"]: order_by;
	/** columns and relationships of "project_language" */
["project_language"]: {
	__typename: "project_language",
	id: GraphQLTypes["uuid"],
	language_id: GraphQLTypes["uuid"],
	project_id: GraphQLTypes["uuid"]
};
	/** aggregated selection of "project_language" */
["project_language_aggregate"]: {
	__typename: "project_language_aggregate",
	aggregate?: GraphQLTypes["project_language_aggregate_fields"],
	nodes: Array<GraphQLTypes["project_language"]>
};
	/** aggregate fields of "project_language" */
["project_language_aggregate_fields"]: {
	__typename: "project_language_aggregate_fields",
	count: number,
	max?: GraphQLTypes["project_language_max_fields"],
	min?: GraphQLTypes["project_language_min_fields"]
};
	/** Boolean expression to filter rows from the table "project_language". All fields are combined with a logical 'AND'. */
["project_language_bool_exp"]: {
		_and?: Array<GraphQLTypes["project_language_bool_exp"]>,
	_not?: GraphQLTypes["project_language_bool_exp"],
	_or?: Array<GraphQLTypes["project_language_bool_exp"]>,
	id?: GraphQLTypes["uuid_comparison_exp"],
	language_id?: GraphQLTypes["uuid_comparison_exp"],
	project_id?: GraphQLTypes["uuid_comparison_exp"]
};
	/** unique or primary key constraints on table "project_language" */
["project_language_constraint"]: project_language_constraint;
	/** input type for inserting data into table "project_language" */
["project_language_insert_input"]: {
		id?: GraphQLTypes["uuid"],
	language_id?: GraphQLTypes["uuid"],
	project_id?: GraphQLTypes["uuid"]
};
	/** aggregate max on columns */
["project_language_max_fields"]: {
	__typename: "project_language_max_fields",
	id?: GraphQLTypes["uuid"],
	language_id?: GraphQLTypes["uuid"],
	project_id?: GraphQLTypes["uuid"]
};
	/** aggregate min on columns */
["project_language_min_fields"]: {
	__typename: "project_language_min_fields",
	id?: GraphQLTypes["uuid"],
	language_id?: GraphQLTypes["uuid"],
	project_id?: GraphQLTypes["uuid"]
};
	/** response of any mutation on the table "project_language" */
["project_language_mutation_response"]: {
	__typename: "project_language_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["project_language"]>
};
	/** on conflict condition type for table "project_language" */
["project_language_on_conflict"]: {
		constraint: GraphQLTypes["project_language_constraint"],
	update_columns: Array<GraphQLTypes["project_language_update_column"]>,
	where?: GraphQLTypes["project_language_bool_exp"]
};
	/** Ordering options when selecting data from "project_language". */
["project_language_order_by"]: {
		id?: GraphQLTypes["order_by"],
	language_id?: GraphQLTypes["order_by"],
	project_id?: GraphQLTypes["order_by"]
};
	/** primary key columns input for table: project_language */
["project_language_pk_columns_input"]: {
		id: GraphQLTypes["uuid"]
};
	/** select columns of table "project_language" */
["project_language_select_column"]: project_language_select_column;
	/** input type for updating data in table "project_language" */
["project_language_set_input"]: {
		id?: GraphQLTypes["uuid"],
	language_id?: GraphQLTypes["uuid"],
	project_id?: GraphQLTypes["uuid"]
};
	/** update columns of table "project_language" */
["project_language_update_column"]: project_language_update_column;
	/** columns and relationships of "project_terms" */
["project_terms"]: {
	__typename: "project_terms",
	description?: string,
	id: GraphQLTypes["uuid"],
	key: string,
	project_id: GraphQLTypes["uuid"]
};
	/** aggregated selection of "project_terms" */
["project_terms_aggregate"]: {
	__typename: "project_terms_aggregate",
	aggregate?: GraphQLTypes["project_terms_aggregate_fields"],
	nodes: Array<GraphQLTypes["project_terms"]>
};
	/** aggregate fields of "project_terms" */
["project_terms_aggregate_fields"]: {
	__typename: "project_terms_aggregate_fields",
	count: number,
	max?: GraphQLTypes["project_terms_max_fields"],
	min?: GraphQLTypes["project_terms_min_fields"]
};
	/** Boolean expression to filter rows from the table "project_terms". All fields are combined with a logical 'AND'. */
["project_terms_bool_exp"]: {
		_and?: Array<GraphQLTypes["project_terms_bool_exp"]>,
	_not?: GraphQLTypes["project_terms_bool_exp"],
	_or?: Array<GraphQLTypes["project_terms_bool_exp"]>,
	description?: GraphQLTypes["String_comparison_exp"],
	id?: GraphQLTypes["uuid_comparison_exp"],
	key?: GraphQLTypes["String_comparison_exp"],
	project_id?: GraphQLTypes["uuid_comparison_exp"]
};
	/** unique or primary key constraints on table "project_terms" */
["project_terms_constraint"]: project_terms_constraint;
	/** input type for inserting data into table "project_terms" */
["project_terms_insert_input"]: {
		description?: string,
	id?: GraphQLTypes["uuid"],
	key?: string,
	project_id?: GraphQLTypes["uuid"]
};
	/** aggregate max on columns */
["project_terms_max_fields"]: {
	__typename: "project_terms_max_fields",
	description?: string,
	id?: GraphQLTypes["uuid"],
	key?: string,
	project_id?: GraphQLTypes["uuid"]
};
	/** aggregate min on columns */
["project_terms_min_fields"]: {
	__typename: "project_terms_min_fields",
	description?: string,
	id?: GraphQLTypes["uuid"],
	key?: string,
	project_id?: GraphQLTypes["uuid"]
};
	/** response of any mutation on the table "project_terms" */
["project_terms_mutation_response"]: {
	__typename: "project_terms_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["project_terms"]>
};
	/** on conflict condition type for table "project_terms" */
["project_terms_on_conflict"]: {
		constraint: GraphQLTypes["project_terms_constraint"],
	update_columns: Array<GraphQLTypes["project_terms_update_column"]>,
	where?: GraphQLTypes["project_terms_bool_exp"]
};
	/** Ordering options when selecting data from "project_terms". */
["project_terms_order_by"]: {
		description?: GraphQLTypes["order_by"],
	id?: GraphQLTypes["order_by"],
	key?: GraphQLTypes["order_by"],
	project_id?: GraphQLTypes["order_by"]
};
	/** primary key columns input for table: project_terms */
["project_terms_pk_columns_input"]: {
		id: GraphQLTypes["uuid"]
};
	/** select columns of table "project_terms" */
["project_terms_select_column"]: project_terms_select_column;
	/** input type for updating data in table "project_terms" */
["project_terms_set_input"]: {
		description?: string,
	id?: GraphQLTypes["uuid"],
	key?: string,
	project_id?: GraphQLTypes["uuid"]
};
	/** update columns of table "project_terms" */
["project_terms_update_column"]: project_terms_update_column;
	/** columns and relationships of "projects" */
["projects"]: {
	__typename: "projects",
	company_id: GraphQLTypes["uuid"],
	id: GraphQLTypes["uuid"],
	name: string,
	/** An array relationship */
	user_project_links: Array<GraphQLTypes["user_project_link"]>,
	/** An aggregate relationship */
	user_project_links_aggregate: GraphQLTypes["user_project_link_aggregate"]
};
	/** aggregated selection of "projects" */
["projects_aggregate"]: {
	__typename: "projects_aggregate",
	aggregate?: GraphQLTypes["projects_aggregate_fields"],
	nodes: Array<GraphQLTypes["projects"]>
};
	/** aggregate fields of "projects" */
["projects_aggregate_fields"]: {
	__typename: "projects_aggregate_fields",
	count: number,
	max?: GraphQLTypes["projects_max_fields"],
	min?: GraphQLTypes["projects_min_fields"]
};
	/** Boolean expression to filter rows from the table "projects". All fields are combined with a logical 'AND'. */
["projects_bool_exp"]: {
		_and?: Array<GraphQLTypes["projects_bool_exp"]>,
	_not?: GraphQLTypes["projects_bool_exp"],
	_or?: Array<GraphQLTypes["projects_bool_exp"]>,
	company_id?: GraphQLTypes["uuid_comparison_exp"],
	id?: GraphQLTypes["uuid_comparison_exp"],
	name?: GraphQLTypes["String_comparison_exp"],
	user_project_links?: GraphQLTypes["user_project_link_bool_exp"]
};
	/** unique or primary key constraints on table "projects" */
["projects_constraint"]: projects_constraint;
	/** input type for inserting data into table "projects" */
["projects_insert_input"]: {
		company_id?: GraphQLTypes["uuid"],
	id?: GraphQLTypes["uuid"],
	name?: string,
	user_project_links?: GraphQLTypes["user_project_link_arr_rel_insert_input"]
};
	/** aggregate max on columns */
["projects_max_fields"]: {
	__typename: "projects_max_fields",
	company_id?: GraphQLTypes["uuid"],
	id?: GraphQLTypes["uuid"],
	name?: string
};
	/** aggregate min on columns */
["projects_min_fields"]: {
	__typename: "projects_min_fields",
	company_id?: GraphQLTypes["uuid"],
	id?: GraphQLTypes["uuid"],
	name?: string
};
	/** response of any mutation on the table "projects" */
["projects_mutation_response"]: {
	__typename: "projects_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["projects"]>
};
	/** on conflict condition type for table "projects" */
["projects_on_conflict"]: {
		constraint: GraphQLTypes["projects_constraint"],
	update_columns: Array<GraphQLTypes["projects_update_column"]>,
	where?: GraphQLTypes["projects_bool_exp"]
};
	/** Ordering options when selecting data from "projects". */
["projects_order_by"]: {
		company_id?: GraphQLTypes["order_by"],
	id?: GraphQLTypes["order_by"],
	name?: GraphQLTypes["order_by"],
	user_project_links_aggregate?: GraphQLTypes["user_project_link_aggregate_order_by"]
};
	/** primary key columns input for table: projects */
["projects_pk_columns_input"]: {
		id: GraphQLTypes["uuid"]
};
	/** select columns of table "projects" */
["projects_select_column"]: projects_select_column;
	/** input type for updating data in table "projects" */
["projects_set_input"]: {
		company_id?: GraphQLTypes["uuid"],
	id?: GraphQLTypes["uuid"],
	name?: string
};
	/** update columns of table "projects" */
["projects_update_column"]: projects_update_column;
	["query_root"]: {
	__typename: "query_root",
	/** fetch data from the table: "companies" */
	companies: Array<GraphQLTypes["companies"]>,
	/** fetch aggregated fields from the table: "companies" */
	companies_aggregate: GraphQLTypes["companies_aggregate"],
	/** fetch data from the table: "companies" using primary key columns */
	companies_by_pk?: GraphQLTypes["companies"],
	/** fetch data from the table: "company_user_link" */
	company_user_link: Array<GraphQLTypes["company_user_link"]>,
	/** fetch aggregated fields from the table: "company_user_link" */
	company_user_link_aggregate: GraphQLTypes["company_user_link_aggregate"],
	/** fetch data from the table: "company_user_link" using primary key columns */
	company_user_link_by_pk?: GraphQLTypes["company_user_link"],
	/** fetch data from the table: "languages" */
	languages: Array<GraphQLTypes["languages"]>,
	/** fetch aggregated fields from the table: "languages" */
	languages_aggregate: GraphQLTypes["languages_aggregate"],
	/** fetch data from the table: "languages" using primary key columns */
	languages_by_pk?: GraphQLTypes["languages"],
	/** fetch data from the table: "project_language" */
	project_language: Array<GraphQLTypes["project_language"]>,
	/** fetch aggregated fields from the table: "project_language" */
	project_language_aggregate: GraphQLTypes["project_language_aggregate"],
	/** fetch data from the table: "project_language" using primary key columns */
	project_language_by_pk?: GraphQLTypes["project_language"],
	/** fetch data from the table: "project_terms" */
	project_terms: Array<GraphQLTypes["project_terms"]>,
	/** fetch aggregated fields from the table: "project_terms" */
	project_terms_aggregate: GraphQLTypes["project_terms_aggregate"],
	/** fetch data from the table: "project_terms" using primary key columns */
	project_terms_by_pk?: GraphQLTypes["project_terms"],
	/** fetch data from the table: "projects" */
	projects: Array<GraphQLTypes["projects"]>,
	/** fetch aggregated fields from the table: "projects" */
	projects_aggregate: GraphQLTypes["projects_aggregate"],
	/** fetch data from the table: "projects" using primary key columns */
	projects_by_pk?: GraphQLTypes["projects"],
	/** fetch data from the table: "translation_statuses" */
	translation_statuses: Array<GraphQLTypes["translation_statuses"]>,
	/** fetch aggregated fields from the table: "translation_statuses" */
	translation_statuses_aggregate: GraphQLTypes["translation_statuses_aggregate"],
	/** fetch data from the table: "translation_statuses" using primary key columns */
	translation_statuses_by_pk?: GraphQLTypes["translation_statuses"],
	/** fetch data from the table: "translations" */
	translations: Array<GraphQLTypes["translations"]>,
	/** fetch aggregated fields from the table: "translations" */
	translations_aggregate: GraphQLTypes["translations_aggregate"],
	/** fetch data from the table: "translations" using primary key columns */
	translations_by_pk?: GraphQLTypes["translations"],
	/** fetch data from the table: "user_project_link" */
	user_project_link: Array<GraphQLTypes["user_project_link"]>,
	/** fetch aggregated fields from the table: "user_project_link" */
	user_project_link_aggregate: GraphQLTypes["user_project_link_aggregate"],
	/** fetch data from the table: "user_project_link" using primary key columns */
	user_project_link_by_pk?: GraphQLTypes["user_project_link"],
	/** fetch data from the table: "users" */
	users: Array<GraphQLTypes["users"]>,
	/** fetch aggregated fields from the table: "users" */
	users_aggregate: GraphQLTypes["users_aggregate"],
	/** fetch data from the table: "users" using primary key columns */
	users_by_pk?: GraphQLTypes["users"]
};
	["subscription_root"]: {
	__typename: "subscription_root",
	/** fetch data from the table: "companies" */
	companies: Array<GraphQLTypes["companies"]>,
	/** fetch aggregated fields from the table: "companies" */
	companies_aggregate: GraphQLTypes["companies_aggregate"],
	/** fetch data from the table: "companies" using primary key columns */
	companies_by_pk?: GraphQLTypes["companies"],
	/** fetch data from the table: "company_user_link" */
	company_user_link: Array<GraphQLTypes["company_user_link"]>,
	/** fetch aggregated fields from the table: "company_user_link" */
	company_user_link_aggregate: GraphQLTypes["company_user_link_aggregate"],
	/** fetch data from the table: "company_user_link" using primary key columns */
	company_user_link_by_pk?: GraphQLTypes["company_user_link"],
	/** fetch data from the table: "languages" */
	languages: Array<GraphQLTypes["languages"]>,
	/** fetch aggregated fields from the table: "languages" */
	languages_aggregate: GraphQLTypes["languages_aggregate"],
	/** fetch data from the table: "languages" using primary key columns */
	languages_by_pk?: GraphQLTypes["languages"],
	/** fetch data from the table: "project_language" */
	project_language: Array<GraphQLTypes["project_language"]>,
	/** fetch aggregated fields from the table: "project_language" */
	project_language_aggregate: GraphQLTypes["project_language_aggregate"],
	/** fetch data from the table: "project_language" using primary key columns */
	project_language_by_pk?: GraphQLTypes["project_language"],
	/** fetch data from the table: "project_terms" */
	project_terms: Array<GraphQLTypes["project_terms"]>,
	/** fetch aggregated fields from the table: "project_terms" */
	project_terms_aggregate: GraphQLTypes["project_terms_aggregate"],
	/** fetch data from the table: "project_terms" using primary key columns */
	project_terms_by_pk?: GraphQLTypes["project_terms"],
	/** fetch data from the table: "projects" */
	projects: Array<GraphQLTypes["projects"]>,
	/** fetch aggregated fields from the table: "projects" */
	projects_aggregate: GraphQLTypes["projects_aggregate"],
	/** fetch data from the table: "projects" using primary key columns */
	projects_by_pk?: GraphQLTypes["projects"],
	/** fetch data from the table: "translation_statuses" */
	translation_statuses: Array<GraphQLTypes["translation_statuses"]>,
	/** fetch aggregated fields from the table: "translation_statuses" */
	translation_statuses_aggregate: GraphQLTypes["translation_statuses_aggregate"],
	/** fetch data from the table: "translation_statuses" using primary key columns */
	translation_statuses_by_pk?: GraphQLTypes["translation_statuses"],
	/** fetch data from the table: "translations" */
	translations: Array<GraphQLTypes["translations"]>,
	/** fetch aggregated fields from the table: "translations" */
	translations_aggregate: GraphQLTypes["translations_aggregate"],
	/** fetch data from the table: "translations" using primary key columns */
	translations_by_pk?: GraphQLTypes["translations"],
	/** fetch data from the table: "user_project_link" */
	user_project_link: Array<GraphQLTypes["user_project_link"]>,
	/** fetch aggregated fields from the table: "user_project_link" */
	user_project_link_aggregate: GraphQLTypes["user_project_link_aggregate"],
	/** fetch data from the table: "user_project_link" using primary key columns */
	user_project_link_by_pk?: GraphQLTypes["user_project_link"],
	/** fetch data from the table: "users" */
	users: Array<GraphQLTypes["users"]>,
	/** fetch aggregated fields from the table: "users" */
	users_aggregate: GraphQLTypes["users_aggregate"],
	/** fetch data from the table: "users" using primary key columns */
	users_by_pk?: GraphQLTypes["users"]
};
	/** columns and relationships of "translation_statuses" */
["translation_statuses"]: {
	__typename: "translation_statuses",
	id: GraphQLTypes["uuid"],
	name: string,
	project_id: GraphQLTypes["uuid"]
};
	/** aggregated selection of "translation_statuses" */
["translation_statuses_aggregate"]: {
	__typename: "translation_statuses_aggregate",
	aggregate?: GraphQLTypes["translation_statuses_aggregate_fields"],
	nodes: Array<GraphQLTypes["translation_statuses"]>
};
	/** aggregate fields of "translation_statuses" */
["translation_statuses_aggregate_fields"]: {
	__typename: "translation_statuses_aggregate_fields",
	count: number,
	max?: GraphQLTypes["translation_statuses_max_fields"],
	min?: GraphQLTypes["translation_statuses_min_fields"]
};
	/** Boolean expression to filter rows from the table "translation_statuses". All fields are combined with a logical 'AND'. */
["translation_statuses_bool_exp"]: {
		_and?: Array<GraphQLTypes["translation_statuses_bool_exp"]>,
	_not?: GraphQLTypes["translation_statuses_bool_exp"],
	_or?: Array<GraphQLTypes["translation_statuses_bool_exp"]>,
	id?: GraphQLTypes["uuid_comparison_exp"],
	name?: GraphQLTypes["String_comparison_exp"],
	project_id?: GraphQLTypes["uuid_comparison_exp"]
};
	/** unique or primary key constraints on table "translation_statuses" */
["translation_statuses_constraint"]: translation_statuses_constraint;
	/** input type for inserting data into table "translation_statuses" */
["translation_statuses_insert_input"]: {
		id?: GraphQLTypes["uuid"],
	name?: string,
	project_id?: GraphQLTypes["uuid"]
};
	/** aggregate max on columns */
["translation_statuses_max_fields"]: {
	__typename: "translation_statuses_max_fields",
	id?: GraphQLTypes["uuid"],
	name?: string,
	project_id?: GraphQLTypes["uuid"]
};
	/** aggregate min on columns */
["translation_statuses_min_fields"]: {
	__typename: "translation_statuses_min_fields",
	id?: GraphQLTypes["uuid"],
	name?: string,
	project_id?: GraphQLTypes["uuid"]
};
	/** response of any mutation on the table "translation_statuses" */
["translation_statuses_mutation_response"]: {
	__typename: "translation_statuses_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["translation_statuses"]>
};
	/** on conflict condition type for table "translation_statuses" */
["translation_statuses_on_conflict"]: {
		constraint: GraphQLTypes["translation_statuses_constraint"],
	update_columns: Array<GraphQLTypes["translation_statuses_update_column"]>,
	where?: GraphQLTypes["translation_statuses_bool_exp"]
};
	/** Ordering options when selecting data from "translation_statuses". */
["translation_statuses_order_by"]: {
		id?: GraphQLTypes["order_by"],
	name?: GraphQLTypes["order_by"],
	project_id?: GraphQLTypes["order_by"]
};
	/** primary key columns input for table: translation_statuses */
["translation_statuses_pk_columns_input"]: {
		id: GraphQLTypes["uuid"]
};
	/** select columns of table "translation_statuses" */
["translation_statuses_select_column"]: translation_statuses_select_column;
	/** input type for updating data in table "translation_statuses" */
["translation_statuses_set_input"]: {
		id?: GraphQLTypes["uuid"],
	name?: string,
	project_id?: GraphQLTypes["uuid"]
};
	/** update columns of table "translation_statuses" */
["translation_statuses_update_column"]: translation_statuses_update_column;
	/** columns and relationships of "translations" */
["translations"]: {
	__typename: "translations",
	fuzzy: boolean,
	id: GraphQLTypes["uuid"],
	key_id: GraphQLTypes["uuid"],
	translation_value?: string
};
	/** aggregated selection of "translations" */
["translations_aggregate"]: {
	__typename: "translations_aggregate",
	aggregate?: GraphQLTypes["translations_aggregate_fields"],
	nodes: Array<GraphQLTypes["translations"]>
};
	/** aggregate fields of "translations" */
["translations_aggregate_fields"]: {
	__typename: "translations_aggregate_fields",
	count: number,
	max?: GraphQLTypes["translations_max_fields"],
	min?: GraphQLTypes["translations_min_fields"]
};
	/** Boolean expression to filter rows from the table "translations". All fields are combined with a logical 'AND'. */
["translations_bool_exp"]: {
		_and?: Array<GraphQLTypes["translations_bool_exp"]>,
	_not?: GraphQLTypes["translations_bool_exp"],
	_or?: Array<GraphQLTypes["translations_bool_exp"]>,
	fuzzy?: GraphQLTypes["Boolean_comparison_exp"],
	id?: GraphQLTypes["uuid_comparison_exp"],
	key_id?: GraphQLTypes["uuid_comparison_exp"],
	translation_value?: GraphQLTypes["String_comparison_exp"]
};
	/** unique or primary key constraints on table "translations" */
["translations_constraint"]: translations_constraint;
	/** input type for inserting data into table "translations" */
["translations_insert_input"]: {
		fuzzy?: boolean,
	id?: GraphQLTypes["uuid"],
	key_id?: GraphQLTypes["uuid"],
	translation_value?: string
};
	/** aggregate max on columns */
["translations_max_fields"]: {
	__typename: "translations_max_fields",
	id?: GraphQLTypes["uuid"],
	key_id?: GraphQLTypes["uuid"],
	translation_value?: string
};
	/** aggregate min on columns */
["translations_min_fields"]: {
	__typename: "translations_min_fields",
	id?: GraphQLTypes["uuid"],
	key_id?: GraphQLTypes["uuid"],
	translation_value?: string
};
	/** response of any mutation on the table "translations" */
["translations_mutation_response"]: {
	__typename: "translations_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["translations"]>
};
	/** on conflict condition type for table "translations" */
["translations_on_conflict"]: {
		constraint: GraphQLTypes["translations_constraint"],
	update_columns: Array<GraphQLTypes["translations_update_column"]>,
	where?: GraphQLTypes["translations_bool_exp"]
};
	/** Ordering options when selecting data from "translations". */
["translations_order_by"]: {
		fuzzy?: GraphQLTypes["order_by"],
	id?: GraphQLTypes["order_by"],
	key_id?: GraphQLTypes["order_by"],
	translation_value?: GraphQLTypes["order_by"]
};
	/** primary key columns input for table: translations */
["translations_pk_columns_input"]: {
		id: GraphQLTypes["uuid"]
};
	/** select columns of table "translations" */
["translations_select_column"]: translations_select_column;
	/** input type for updating data in table "translations" */
["translations_set_input"]: {
		fuzzy?: boolean,
	id?: GraphQLTypes["uuid"],
	key_id?: GraphQLTypes["uuid"],
	translation_value?: string
};
	/** update columns of table "translations" */
["translations_update_column"]: translations_update_column;
	/** columns and relationships of "user_project_link" */
["user_project_link"]: {
	__typename: "user_project_link",
	id: GraphQLTypes["uuid"],
	project_id: GraphQLTypes["uuid"],
	user_id: GraphQLTypes["uuid"]
};
	/** aggregated selection of "user_project_link" */
["user_project_link_aggregate"]: {
	__typename: "user_project_link_aggregate",
	aggregate?: GraphQLTypes["user_project_link_aggregate_fields"],
	nodes: Array<GraphQLTypes["user_project_link"]>
};
	/** aggregate fields of "user_project_link" */
["user_project_link_aggregate_fields"]: {
	__typename: "user_project_link_aggregate_fields",
	count: number,
	max?: GraphQLTypes["user_project_link_max_fields"],
	min?: GraphQLTypes["user_project_link_min_fields"]
};
	/** order by aggregate values of table "user_project_link" */
["user_project_link_aggregate_order_by"]: {
		count?: GraphQLTypes["order_by"],
	max?: GraphQLTypes["user_project_link_max_order_by"],
	min?: GraphQLTypes["user_project_link_min_order_by"]
};
	/** input type for inserting array relation for remote table "user_project_link" */
["user_project_link_arr_rel_insert_input"]: {
		data: Array<GraphQLTypes["user_project_link_insert_input"]>,
	/** on conflict condition */
	on_conflict?: GraphQLTypes["user_project_link_on_conflict"]
};
	/** Boolean expression to filter rows from the table "user_project_link". All fields are combined with a logical 'AND'. */
["user_project_link_bool_exp"]: {
		_and?: Array<GraphQLTypes["user_project_link_bool_exp"]>,
	_not?: GraphQLTypes["user_project_link_bool_exp"],
	_or?: Array<GraphQLTypes["user_project_link_bool_exp"]>,
	id?: GraphQLTypes["uuid_comparison_exp"],
	project_id?: GraphQLTypes["uuid_comparison_exp"],
	user_id?: GraphQLTypes["uuid_comparison_exp"]
};
	/** unique or primary key constraints on table "user_project_link" */
["user_project_link_constraint"]: user_project_link_constraint;
	/** input type for inserting data into table "user_project_link" */
["user_project_link_insert_input"]: {
		id?: GraphQLTypes["uuid"],
	project_id?: GraphQLTypes["uuid"],
	user_id?: GraphQLTypes["uuid"]
};
	/** aggregate max on columns */
["user_project_link_max_fields"]: {
	__typename: "user_project_link_max_fields",
	id?: GraphQLTypes["uuid"],
	project_id?: GraphQLTypes["uuid"],
	user_id?: GraphQLTypes["uuid"]
};
	/** order by max() on columns of table "user_project_link" */
["user_project_link_max_order_by"]: {
		id?: GraphQLTypes["order_by"],
	project_id?: GraphQLTypes["order_by"],
	user_id?: GraphQLTypes["order_by"]
};
	/** aggregate min on columns */
["user_project_link_min_fields"]: {
	__typename: "user_project_link_min_fields",
	id?: GraphQLTypes["uuid"],
	project_id?: GraphQLTypes["uuid"],
	user_id?: GraphQLTypes["uuid"]
};
	/** order by min() on columns of table "user_project_link" */
["user_project_link_min_order_by"]: {
		id?: GraphQLTypes["order_by"],
	project_id?: GraphQLTypes["order_by"],
	user_id?: GraphQLTypes["order_by"]
};
	/** response of any mutation on the table "user_project_link" */
["user_project_link_mutation_response"]: {
	__typename: "user_project_link_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["user_project_link"]>
};
	/** on conflict condition type for table "user_project_link" */
["user_project_link_on_conflict"]: {
		constraint: GraphQLTypes["user_project_link_constraint"],
	update_columns: Array<GraphQLTypes["user_project_link_update_column"]>,
	where?: GraphQLTypes["user_project_link_bool_exp"]
};
	/** Ordering options when selecting data from "user_project_link". */
["user_project_link_order_by"]: {
		id?: GraphQLTypes["order_by"],
	project_id?: GraphQLTypes["order_by"],
	user_id?: GraphQLTypes["order_by"]
};
	/** primary key columns input for table: user_project_link */
["user_project_link_pk_columns_input"]: {
		id: GraphQLTypes["uuid"]
};
	/** select columns of table "user_project_link" */
["user_project_link_select_column"]: user_project_link_select_column;
	/** input type for updating data in table "user_project_link" */
["user_project_link_set_input"]: {
		id?: GraphQLTypes["uuid"],
	project_id?: GraphQLTypes["uuid"],
	user_id?: GraphQLTypes["uuid"]
};
	/** update columns of table "user_project_link" */
["user_project_link_update_column"]: user_project_link_update_column;
	/** columns and relationships of "users" */
["users"]: {
	__typename: "users",
	email: string,
	first_name: string,
	id: GraphQLTypes["uuid"],
	last_name: string,
	password: string
};
	/** aggregated selection of "users" */
["users_aggregate"]: {
	__typename: "users_aggregate",
	aggregate?: GraphQLTypes["users_aggregate_fields"],
	nodes: Array<GraphQLTypes["users"]>
};
	/** aggregate fields of "users" */
["users_aggregate_fields"]: {
	__typename: "users_aggregate_fields",
	count: number,
	max?: GraphQLTypes["users_max_fields"],
	min?: GraphQLTypes["users_min_fields"]
};
	/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
["users_bool_exp"]: {
		_and?: Array<GraphQLTypes["users_bool_exp"]>,
	_not?: GraphQLTypes["users_bool_exp"],
	_or?: Array<GraphQLTypes["users_bool_exp"]>,
	email?: GraphQLTypes["String_comparison_exp"],
	first_name?: GraphQLTypes["String_comparison_exp"],
	id?: GraphQLTypes["uuid_comparison_exp"],
	last_name?: GraphQLTypes["String_comparison_exp"],
	password?: GraphQLTypes["String_comparison_exp"]
};
	/** unique or primary key constraints on table "users" */
["users_constraint"]: users_constraint;
	/** input type for inserting data into table "users" */
["users_insert_input"]: {
		email?: string,
	first_name?: string,
	id?: GraphQLTypes["uuid"],
	last_name?: string,
	password?: string
};
	/** aggregate max on columns */
["users_max_fields"]: {
	__typename: "users_max_fields",
	email?: string,
	first_name?: string,
	id?: GraphQLTypes["uuid"],
	last_name?: string,
	password?: string
};
	/** aggregate min on columns */
["users_min_fields"]: {
	__typename: "users_min_fields",
	email?: string,
	first_name?: string,
	id?: GraphQLTypes["uuid"],
	last_name?: string,
	password?: string
};
	/** response of any mutation on the table "users" */
["users_mutation_response"]: {
	__typename: "users_mutation_response",
	/** number of rows affected by the mutation */
	affected_rows: number,
	/** data from the rows affected by the mutation */
	returning: Array<GraphQLTypes["users"]>
};
	/** on conflict condition type for table "users" */
["users_on_conflict"]: {
		constraint: GraphQLTypes["users_constraint"],
	update_columns: Array<GraphQLTypes["users_update_column"]>,
	where?: GraphQLTypes["users_bool_exp"]
};
	/** Ordering options when selecting data from "users". */
["users_order_by"]: {
		email?: GraphQLTypes["order_by"],
	first_name?: GraphQLTypes["order_by"],
	id?: GraphQLTypes["order_by"],
	last_name?: GraphQLTypes["order_by"],
	password?: GraphQLTypes["order_by"]
};
	/** primary key columns input for table: users */
["users_pk_columns_input"]: {
		id: GraphQLTypes["uuid"]
};
	/** select columns of table "users" */
["users_select_column"]: users_select_column;
	/** input type for updating data in table "users" */
["users_set_input"]: {
		email?: string,
	first_name?: string,
	id?: GraphQLTypes["uuid"],
	last_name?: string,
	password?: string
};
	/** update columns of table "users" */
["users_update_column"]: users_update_column;
	["uuid"]:any;
	/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
["uuid_comparison_exp"]: {
		_eq?: GraphQLTypes["uuid"],
	_gt?: GraphQLTypes["uuid"],
	_gte?: GraphQLTypes["uuid"],
	_in?: Array<GraphQLTypes["uuid"]>,
	_is_null?: boolean,
	_lt?: GraphQLTypes["uuid"],
	_lte?: GraphQLTypes["uuid"],
	_neq?: GraphQLTypes["uuid"],
	_nin?: Array<GraphQLTypes["uuid"]>
}
    }
/** unique or primary key constraints on table "companies" */
export const enum companies_constraint {
	companies_pkey = "companies_pkey"
}
/** select columns of table "companies" */
export const enum companies_select_column {
	id = "id",
	name = "name"
}
/** update columns of table "companies" */
export const enum companies_update_column {
	id = "id",
	name = "name"
}
/** unique or primary key constraints on table "company_user_link" */
export const enum company_user_link_constraint {
	company_user_link_pkey = "company_user_link_pkey"
}
/** select columns of table "company_user_link" */
export const enum company_user_link_select_column {
	company_id = "company_id",
	id = "id",
	user_id = "user_id"
}
/** update columns of table "company_user_link" */
export const enum company_user_link_update_column {
	company_id = "company_id",
	id = "id",
	user_id = "user_id"
}
/** unique or primary key constraints on table "languages" */
export const enum languages_constraint {
	languages_pkey = "languages_pkey"
}
/** select columns of table "languages" */
export const enum languages_select_column {
	id = "id",
	iso_code = "iso_code",
	name = "name"
}
/** update columns of table "languages" */
export const enum languages_update_column {
	id = "id",
	iso_code = "iso_code",
	name = "name"
}
/** column ordering options */
export const enum order_by {
	asc = "asc",
	asc_nulls_first = "asc_nulls_first",
	asc_nulls_last = "asc_nulls_last",
	desc = "desc",
	desc_nulls_first = "desc_nulls_first",
	desc_nulls_last = "desc_nulls_last"
}
/** unique or primary key constraints on table "project_language" */
export const enum project_language_constraint {
	project_language_pkey = "project_language_pkey"
}
/** select columns of table "project_language" */
export const enum project_language_select_column {
	id = "id",
	language_id = "language_id",
	project_id = "project_id"
}
/** update columns of table "project_language" */
export const enum project_language_update_column {
	id = "id",
	language_id = "language_id",
	project_id = "project_id"
}
/** unique or primary key constraints on table "project_terms" */
export const enum project_terms_constraint {
	project_terms_pkey = "project_terms_pkey"
}
/** select columns of table "project_terms" */
export const enum project_terms_select_column {
	description = "description",
	id = "id",
	key = "key",
	project_id = "project_id"
}
/** update columns of table "project_terms" */
export const enum project_terms_update_column {
	description = "description",
	id = "id",
	key = "key",
	project_id = "project_id"
}
/** unique or primary key constraints on table "projects" */
export const enum projects_constraint {
	projects_pkey = "projects_pkey"
}
/** select columns of table "projects" */
export const enum projects_select_column {
	company_id = "company_id",
	id = "id",
	name = "name"
}
/** update columns of table "projects" */
export const enum projects_update_column {
	company_id = "company_id",
	id = "id",
	name = "name"
}
/** unique or primary key constraints on table "translation_statuses" */
export const enum translation_statuses_constraint {
	translation_statuses_pkey = "translation_statuses_pkey"
}
/** select columns of table "translation_statuses" */
export const enum translation_statuses_select_column {
	id = "id",
	name = "name",
	project_id = "project_id"
}
/** update columns of table "translation_statuses" */
export const enum translation_statuses_update_column {
	id = "id",
	name = "name",
	project_id = "project_id"
}
/** unique or primary key constraints on table "translations" */
export const enum translations_constraint {
	translations_pkey = "translations_pkey"
}
/** select columns of table "translations" */
export const enum translations_select_column {
	fuzzy = "fuzzy",
	id = "id",
	key_id = "key_id",
	translation_value = "translation_value"
}
/** update columns of table "translations" */
export const enum translations_update_column {
	fuzzy = "fuzzy",
	id = "id",
	key_id = "key_id",
	translation_value = "translation_value"
}
/** unique or primary key constraints on table "user_project_link" */
export const enum user_project_link_constraint {
	user_project_link_pkey = "user_project_link_pkey"
}
/** select columns of table "user_project_link" */
export const enum user_project_link_select_column {
	id = "id",
	project_id = "project_id",
	user_id = "user_id"
}
/** update columns of table "user_project_link" */
export const enum user_project_link_update_column {
	id = "id",
	project_id = "project_id",
	user_id = "user_id"
}
/** unique or primary key constraints on table "users" */
export const enum users_constraint {
	users_pkey = "users_pkey"
}
/** select columns of table "users" */
export const enum users_select_column {
	email = "email",
	first_name = "first_name",
	id = "id",
	last_name = "last_name",
	password = "password"
}
/** update columns of table "users" */
export const enum users_update_column {
	email = "email",
	first_name = "first_name",
	id = "id",
	last_name = "last_name",
	password = "password"
}
export class GraphQLError extends Error {
    constructor(public response: GraphQLResponse) {
      super("");
      console.error(response);
    }
    toString() {
      return "GraphQL Response Error";
    }
  }


export type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;
export type ZeusState<T extends (...args: any[]) => Promise<any>> = NonNullable<
  UnwrapPromise<ReturnType<T>>
>;
export type ZeusHook<
  T extends (
    ...args: any[]
  ) => Record<string, (...args: any[]) => Promise<any>>,
  N extends keyof ReturnType<T>
> = ZeusState<ReturnType<T>[N]>;

type WithTypeNameValue<T> = T & {
  __typename?: true;
};
type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};
export interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}
type DeepAnify<T> = {
  [P in keyof T]?: any;
};
type IsPayLoad<T> = T extends [any, infer PayLoad] ? PayLoad : T;
type IsArray<T, U> = T extends Array<infer R> ? InputType<R, U>[] : InputType<T, U>;
type FlattenArray<T> = T extends Array<infer R> ? R : T;

type IsInterfaced<SRC extends DeepAnify<DST>, DST> = FlattenArray<SRC> extends ZEUS_INTERFACES | ZEUS_UNIONS
  ? {
      [P in keyof SRC]: SRC[P] extends '__union' & infer R
        ? P extends keyof DST
          ? IsArray<R, '__typename' extends keyof DST ? DST[P] & { __typename: true } : DST[P]>
          : {}
        : never;
    }[keyof DST] &
      {
        [P in keyof Omit<
          Pick<
            SRC,
            {
              [P in keyof DST]: SRC[P] extends '__union' & infer R ? never : P;
            }[keyof DST]
          >,
          '__typename'
        >]: IsPayLoad<DST[P]> extends true ? SRC[P] : IsArray<SRC[P], DST[P]>;
      }
  : {
      [P in keyof Pick<SRC, keyof DST>]: IsPayLoad<DST[P]> extends true ? SRC[P] : IsArray<SRC[P], DST[P]>;
    };

export type MapType<SRC, DST> = SRC extends DeepAnify<DST> ? IsInterfaced<SRC, DST> : never;
export type InputType<SRC, DST> = IsPayLoad<DST> extends { __alias: infer R }
  ? {
      [P in keyof R]: MapType<SRC, R[P]>;
    } &
      MapType<SRC, Omit<IsPayLoad<DST>, '__alias'>>
  : MapType<SRC, IsPayLoad<DST>>;
type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;
export type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;
export type OperationOptions = {
  variables?: Record<string, any>;
  operationName?: string;
};
export type OperationToGraphQL<V, T> = <Z extends V>(o: Z | V, options?: OperationOptions) => Promise<InputType<T, Z>>;
export type SubscriptionToGraphQL<V, T> = <Z extends V>(
  o: Z | V,
  options?: OperationOptions,
) => {
  ws: WebSocket;
  on: (fn: (args: InputType<T, Z>) => void) => void;
  off: (fn: (e: { data?: InputType<T, Z>; code?: number; reason?: string; message?: string }) => void) => void;
  error: (fn: (e: { data?: InputType<T, Z>; errors?:string[] }) => void) => void;
  open: () => void;
};
export type SelectionFunction<V> = <T>(t: T | V) => T;
export type fetchOptions = ArgsType<typeof fetch>;
type websocketOptions = typeof WebSocket extends new (
  ...args: infer R
) => WebSocket
  ? R
  : never;
export type chainOptions =
  | [fetchOptions[0], fetchOptions[1] & {websocket?: websocketOptions}]
  | [fetchOptions[0]];
export type FetchFunction = (
  query: string,
  variables?: Record<string, any>,
) => Promise<any>;
export type SubscriptionFunction = (query: string) => void;
type NotUndefined<T> = T extends undefined ? never : T;
export type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;



export const ZeusSelect = <T>() => ((t: any) => t) as SelectionFunction<T>;

export const ScalarResolver = (scalar: string, value: any) => {
  switch (scalar) {
    case 'String':
      return  `${JSON.stringify(value)}`;
    case 'Int':
      return `${value}`;
    case 'Float':
      return `${value}`;
    case 'Boolean':
      return `${value}`;
    case 'ID':
      return `"${value}"`;
    case 'enum':
      return `${value}`;
    case 'scalar':
      return `${value}`;
    default:
      return false;
  }
};


export const TypesPropsResolver = ({
    value,
    type,
    name,
    key,
    blockArrays
}: {
    value: any;
    type: string;
    name: string;
    key?: string;
    blockArrays?: boolean;
}): string => {
    if (value === null) {
        return `null`;
    }
    let resolvedValue = AllTypesProps[type][name];
    if (key) {
        resolvedValue = resolvedValue[key];
    }
    if (!resolvedValue) {
        throw new Error(`Cannot resolve ${type} ${name}${key ? ` ${key}` : ''}`)
    }
    const typeResolved = resolvedValue.type;
    const isArray = resolvedValue.array;
    const isArrayRequired = resolvedValue.arrayRequired;
    if (typeof value === 'string' && value.startsWith(`ZEUS_VAR$`)) {
        const isRequired = resolvedValue.required ? '!' : '';
        let t = `${typeResolved}`;
        if (isArray) {
          if (isRequired) {
              t = `${t}!`;
          }
          t = `[${t}]`;
          if(isArrayRequired){
            t = `${t}!`;
          }
        }else{
          if (isRequired) {
                t = `${t}!`;
          }
        }
        return `\$${value.split(`ZEUS_VAR$`)[1]}__ZEUS_VAR__${t}`;
    }
    if (isArray && !blockArrays) {
        return `[${value
        .map((v: any) => TypesPropsResolver({ value: v, type, name, key, blockArrays: true }))
        .join(',')}]`;
    }
    const reslovedScalar = ScalarResolver(typeResolved, value);
    if (!reslovedScalar) {
        const resolvedType = AllTypesProps[typeResolved];
        if (typeof resolvedType === 'object') {
        const argsKeys = Object.keys(resolvedType);
        return `{${argsKeys
            .filter((ak) => value[ak] !== undefined)
            .map(
            (ak) => `${ak}:${TypesPropsResolver({ value: value[ak], type: typeResolved, name: ak })}`
            )}}`;
        }
        return ScalarResolver(AllTypesProps[typeResolved], value) as string;
    }
    return reslovedScalar;
};


const isArrayFunction = (
  parent: string[],
  a: any[]
) => {
  const [values, r] = a;
  const [mainKey, key, ...keys] = parent;
  const keyValues = Object.keys(values).filter((k) => typeof values[k] !== 'undefined');

  if (!keys.length) {
      return keyValues.length > 0
        ? `(${keyValues
            .map(
              (v) =>
                `${v}:${TypesPropsResolver({
                  value: values[v],
                  type: mainKey,
                  name: key,
                  key: v
                })}`
            )
            .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
        : traverseToSeekArrays(parent, r);
    }

  const [typeResolverKey] = keys.splice(keys.length - 1, 1);
  let valueToResolve = ReturnTypes[mainKey][key];
  for (const k of keys) {
    valueToResolve = ReturnTypes[valueToResolve][k];
  }

  const argumentString =
    keyValues.length > 0
      ? `(${keyValues
          .map(
            (v) =>
              `${v}:${TypesPropsResolver({
                value: values[v],
                type: valueToResolve,
                name: typeResolverKey,
                key: v
              })}`
          )
          .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
      : traverseToSeekArrays(parent, r);
  return argumentString;
};


const resolveKV = (k: string, v: boolean | string | { [x: string]: boolean | string }) =>
  typeof v === 'boolean' ? k : typeof v === 'object' ? `${k}{${objectToTree(v)}}` : `${k}${v}`;


const objectToTree = (o: { [x: string]: boolean | string }): string =>
  `{${Object.keys(o).map((k) => `${resolveKV(k, o[k])}`).join(' ')}}`;


const traverseToSeekArrays = (parent: string[], a?: any): string => {
  if (!a) return '';
  if (Object.keys(a).length === 0) {
    return '';
  }
  let b: Record<string, any> = {};
  if (Array.isArray(a)) {
    return isArrayFunction([...parent], a);
  } else {
    if (typeof a === 'object') {
      Object.keys(a)
        .filter((k) => typeof a[k] !== 'undefined')
        .forEach((k) => {
        if (k === '__alias') {
          Object.keys(a[k]).forEach((aliasKey) => {
            const aliasOperations = a[k][aliasKey];
            const aliasOperationName = Object.keys(aliasOperations)[0];
            const aliasOperation = aliasOperations[aliasOperationName];
            b[
              `${aliasOperationName}__alias__${aliasKey}: ${aliasOperationName}`
            ] = traverseToSeekArrays([...parent, aliasOperationName], aliasOperation);
          });
        } else {
          b[k] = traverseToSeekArrays([...parent, k], a[k]);
        }
      });
    } else {
      return '';
    }
  }
  return objectToTree(b);
};  


const buildQuery = (type: string, a?: Record<any, any>) => 
  traverseToSeekArrays([type], a);


const inspectVariables = (query: string) => {
  const regex = /\$\b\w*__ZEUS_VAR__\[?[^!^\]^\s^,^\)^\}]*[!]?[\]]?[!]?/g;
  let result;
  const AllVariables: string[] = [];
  while ((result = regex.exec(query))) {
    if (AllVariables.includes(result[0])) {
      continue;
    }
    AllVariables.push(result[0]);
  }
  if (!AllVariables.length) {
    return query;
  }
  let filteredQuery = query;
  AllVariables.forEach((variable) => {
    while (filteredQuery.includes(variable)) {
      filteredQuery = filteredQuery.replace(variable, variable.split('__ZEUS_VAR__')[0]);
    }
  });
  return `(${AllVariables.map((a) => a.split('__ZEUS_VAR__'))
    .map(([variableName, variableType]) => `${variableName}:${variableType}`)
    .join(', ')})${filteredQuery}`;
};


export const queryConstruct = (t: 'query' | 'mutation' | 'subscription', tName: string, operationName?: string) => (o: Record<any, any>) =>
  `${t.toLowerCase()}${operationName ? ' ' + operationName : ''}${inspectVariables(buildQuery(tName, o))}`;
  

const fullChainConstruct = (fn: FetchFunction) => (t: 'query' | 'mutation' | 'subscription', tName: string) => (
  o: Record<any, any>,
  options?: OperationOptions,
) => fn(queryConstruct(t, tName, options?.operationName)(o), options?.variables).then((r:any) => { 
  seekForAliases(r)
  return r
});

export const fullChainConstructor = <F extends FetchFunction, R extends keyof ValueTypes>(
  fn: F,
  operation: 'query' | 'mutation' | 'subscription',
  key: R,
) =>
  ((o, options) => fullChainConstruct(fn)(operation, key)(o as any, options)) as OperationToGraphQL<
    ValueTypes[R],
    GraphQLTypes[R]
  >;


const fullSubscriptionConstruct = (fn: SubscriptionFunction) => (
  t: 'query' | 'mutation' | 'subscription',
  tName: string,
) => (o: Record<any, any>, options?: OperationOptions) =>
  fn(queryConstruct(t, tName, options?.operationName)(o));

export const fullSubscriptionConstructor = <F extends SubscriptionFunction, R extends keyof ValueTypes>(
  fn: F,
  operation: 'query' | 'mutation' | 'subscription',
  key: R,
) =>
  ((o, options) => fullSubscriptionConstruct(fn)(operation, key)(o as any, options)) as SubscriptionToGraphQL<
    ValueTypes[R],
    GraphQLTypes[R]
  >;


const seekForAliases = (response: any) => {
  const traverseAlias = (value: any) => {
    if (Array.isArray(value)) {
      value.forEach(seekForAliases);
    } else {
      if (typeof value === 'object') {
        seekForAliases(value);
      }
    }
  };
  if (typeof response === 'object' && response) {
    const keys = Object.keys(response);
    if (keys.length < 1) {
      return;
    }
    keys.forEach((k) => {
      const value = response[k];
      if (k.indexOf('__alias__') !== -1) {
        const [operation, alias] = k.split('__alias__');
        response[alias] = {
          [operation]: value,
        };
        delete response[k];
      }
      traverseAlias(value);
    });
  }
};


export const $ = (t: TemplateStringsArray): any => `ZEUS_VAR$${t.join('')}`;


export const resolverFor = <
  T extends keyof ValueTypes,
  Z extends keyof ValueTypes[T],
  Y extends (
    args: Required<ValueTypes[T]>[Z] extends [infer Input, any] ? Input : any,
    source: any,
  ) => Z extends keyof ModelTypes[T] ? ModelTypes[T][Z] | Promise<ModelTypes[T][Z]> : any
>(
  type: T,
  field: Z,
  fn: Y,
) => fn as (args?: any,source?: any) => any;


const handleFetchResponse = (
  response: Parameters<Extract<Parameters<ReturnType<typeof fetch>['then']>[0], Function>>[0]
): Promise<GraphQLResponse> => {
  if (!response.ok) {
    return new Promise((_, reject) => {
      response.text().then(text => {
        try { reject(JSON.parse(text)); }
        catch (err) { reject(text); }
      }).catch(reject);
    });
  }
  return response.json();
};

export const apiFetch = (options: fetchOptions) => (query: string, variables: Record<string, any> = {}) => {
    let fetchFunction = fetch;
    let queryString = query;
    let fetchOptions = options[1] || {};
    if (fetchOptions.method && fetchOptions.method === 'GET') {
      queryString = encodeURIComponent(query);
      return fetchFunction(`${options[0]}?query=${queryString}`, fetchOptions)
        .then(handleFetchResponse)
        .then((response: GraphQLResponse) => {
          if (response.errors) {
            throw new GraphQLError(response);
          }
          return response.data;
        });
    }
    return fetchFunction(`${options[0]}`, {
      body: JSON.stringify({ query: queryString, variables }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      ...fetchOptions
    })
      .then(handleFetchResponse)
      .then((response: GraphQLResponse) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        return response.data;
      });
  };
  

export const apiSubscription = (options: chainOptions) => (
    query: string,
  ) => {
    try {
      const queryString = options[0] + '?query=' + encodeURIComponent(query);
      const wsString = queryString.replace('http', 'ws');
      const host = (options.length > 1 && options[1]?.websocket?.[0]) || wsString;
      const webSocketOptions = options[1]?.websocket || [host];
      const ws = new WebSocket(...webSocketOptions);
      return {
        ws,
        on: (e: (args: any) => void) => {
          ws.onmessage = (event:any) => {
            if(event.data){
              const parsed = JSON.parse(event.data)
              const data = parsed.data
              if (data) {
                seekForAliases(data);
              }
              return e(data);
            }
          };
        },
        off: (e: (args: any) => void) => {
          ws.onclose = e;
        },
        error: (e: (args: any) => void) => {
          ws.onerror = e;
        },
        open: (e: () => void) => {
          ws.onopen = e;
        },
      };
    } catch {
      throw new Error('No websockets implemented');
    }
  };


export const Thunder = (fn: FetchFunction, subscriptionFn: SubscriptionFunction) => ({
  query: fullChainConstructor(fn,'query', 'query_root'),
mutation: fullChainConstructor(fn,'mutation', 'mutation_root'),
subscription: fullSubscriptionConstructor(subscriptionFn,'subscription', 'subscription_root')
});

export const Chain = (...options: chainOptions) => ({
  query: fullChainConstructor(apiFetch(options),'query', 'query_root'),
mutation: fullChainConstructor(apiFetch(options),'mutation', 'mutation_root'),
subscription: fullSubscriptionConstructor(apiSubscription(options),'subscription', 'subscription_root')
});
export const Zeus = {
  query: (o:ValueTypes["query_root"], operationName?: string) => queryConstruct('query', 'query_root', operationName)(o),
mutation: (o:ValueTypes["mutation_root"], operationName?: string) => queryConstruct('mutation', 'mutation_root', operationName)(o),
subscription: (o:ValueTypes["subscription_root"], operationName?: string) => queryConstruct('subscription', 'subscription_root', operationName)(o)
};
export const Selectors = {
  query: ZeusSelect<ValueTypes["query_root"]>(),
mutation: ZeusSelect<ValueTypes["mutation_root"]>(),
subscription: ZeusSelect<ValueTypes["subscription_root"]>()
};
  

export const Gql = Chain('http://localhost:8080/v1/graphql')