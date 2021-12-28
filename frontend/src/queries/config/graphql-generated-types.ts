import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(endpoint: string, requestInit: RequestInit, query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: 'POST',
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  uuid: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "branch_languages" */
export type Branch_Languages = {
  __typename?: 'branch_languages';
  /** An object relationship */
  branch: Branches;
  branch_id: Scalars['Int'];
  id: Scalars['Int'];
  /** An object relationship */
  language: Languages;
  language_id: Scalars['Int'];
  /** An array relationship */
  translations: Array<Translations>;
  /** An aggregate relationship */
  translations_aggregate: Translations_Aggregate;
  uuid: Scalars['uuid'];
};


/** columns and relationships of "branch_languages" */
export type Branch_LanguagesTranslationsArgs = {
  distinct_on?: Maybe<Array<Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Translations_Order_By>>;
  where?: Maybe<Translations_Bool_Exp>;
};


/** columns and relationships of "branch_languages" */
export type Branch_LanguagesTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Translations_Order_By>>;
  where?: Maybe<Translations_Bool_Exp>;
};

/** aggregated selection of "branch_languages" */
export type Branch_Languages_Aggregate = {
  __typename?: 'branch_languages_aggregate';
  aggregate?: Maybe<Branch_Languages_Aggregate_Fields>;
  nodes: Array<Branch_Languages>;
};

/** aggregate fields of "branch_languages" */
export type Branch_Languages_Aggregate_Fields = {
  __typename?: 'branch_languages_aggregate_fields';
  avg?: Maybe<Branch_Languages_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Branch_Languages_Max_Fields>;
  min?: Maybe<Branch_Languages_Min_Fields>;
  stddev?: Maybe<Branch_Languages_Stddev_Fields>;
  stddev_pop?: Maybe<Branch_Languages_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Branch_Languages_Stddev_Samp_Fields>;
  sum?: Maybe<Branch_Languages_Sum_Fields>;
  var_pop?: Maybe<Branch_Languages_Var_Pop_Fields>;
  var_samp?: Maybe<Branch_Languages_Var_Samp_Fields>;
  variance?: Maybe<Branch_Languages_Variance_Fields>;
};


/** aggregate fields of "branch_languages" */
export type Branch_Languages_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Branch_Languages_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "branch_languages" */
export type Branch_Languages_Aggregate_Order_By = {
  avg?: Maybe<Branch_Languages_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Branch_Languages_Max_Order_By>;
  min?: Maybe<Branch_Languages_Min_Order_By>;
  stddev?: Maybe<Branch_Languages_Stddev_Order_By>;
  stddev_pop?: Maybe<Branch_Languages_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Branch_Languages_Stddev_Samp_Order_By>;
  sum?: Maybe<Branch_Languages_Sum_Order_By>;
  var_pop?: Maybe<Branch_Languages_Var_Pop_Order_By>;
  var_samp?: Maybe<Branch_Languages_Var_Samp_Order_By>;
  variance?: Maybe<Branch_Languages_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "branch_languages" */
export type Branch_Languages_Arr_Rel_Insert_Input = {
  data: Array<Branch_Languages_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Branch_Languages_On_Conflict>;
};

/** aggregate avg on columns */
export type Branch_Languages_Avg_Fields = {
  __typename?: 'branch_languages_avg_fields';
  branch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  language_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "branch_languages" */
export type Branch_Languages_Avg_Order_By = {
  branch_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  language_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "branch_languages". All fields are combined with a logical 'AND'. */
export type Branch_Languages_Bool_Exp = {
  _and?: Maybe<Array<Branch_Languages_Bool_Exp>>;
  _not?: Maybe<Branch_Languages_Bool_Exp>;
  _or?: Maybe<Array<Branch_Languages_Bool_Exp>>;
  branch?: Maybe<Branches_Bool_Exp>;
  branch_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  language?: Maybe<Languages_Bool_Exp>;
  language_id?: Maybe<Int_Comparison_Exp>;
  translations?: Maybe<Translations_Bool_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "branch_languages" */
export enum Branch_Languages_Constraint {
  /** unique or primary key constraint */
  ProjectLanguagesPkey = 'project_languages_pkey',
  /** unique or primary key constraint */
  ProjectLanguagesUuidKey = 'project_languages_uuid_key'
}

/** input type for incrementing numeric columns in table "branch_languages" */
export type Branch_Languages_Inc_Input = {
  branch_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  language_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "branch_languages" */
export type Branch_Languages_Insert_Input = {
  branch?: Maybe<Branches_Obj_Rel_Insert_Input>;
  branch_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  language?: Maybe<Languages_Obj_Rel_Insert_Input>;
  language_id?: Maybe<Scalars['Int']>;
  translations?: Maybe<Translations_Arr_Rel_Insert_Input>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Branch_Languages_Max_Fields = {
  __typename?: 'branch_languages_max_fields';
  branch_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  language_id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "branch_languages" */
export type Branch_Languages_Max_Order_By = {
  branch_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  language_id?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Branch_Languages_Min_Fields = {
  __typename?: 'branch_languages_min_fields';
  branch_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  language_id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "branch_languages" */
export type Branch_Languages_Min_Order_By = {
  branch_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  language_id?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** response of any mutation on the table "branch_languages" */
export type Branch_Languages_Mutation_Response = {
  __typename?: 'branch_languages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Branch_Languages>;
};

/** input type for inserting object relation for remote table "branch_languages" */
export type Branch_Languages_Obj_Rel_Insert_Input = {
  data: Branch_Languages_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Branch_Languages_On_Conflict>;
};

/** on conflict condition type for table "branch_languages" */
export type Branch_Languages_On_Conflict = {
  constraint: Branch_Languages_Constraint;
  update_columns?: Array<Branch_Languages_Update_Column>;
  where?: Maybe<Branch_Languages_Bool_Exp>;
};

/** Ordering options when selecting data from "branch_languages". */
export type Branch_Languages_Order_By = {
  branch?: Maybe<Branches_Order_By>;
  branch_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  language?: Maybe<Languages_Order_By>;
  language_id?: Maybe<Order_By>;
  translations_aggregate?: Maybe<Translations_Aggregate_Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: branch_languages */
export type Branch_Languages_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "branch_languages" */
export enum Branch_Languages_Select_Column {
  /** column name */
  BranchId = 'branch_id',
  /** column name */
  Id = 'id',
  /** column name */
  LanguageId = 'language_id',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "branch_languages" */
export type Branch_Languages_Set_Input = {
  branch_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  language_id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Branch_Languages_Stddev_Fields = {
  __typename?: 'branch_languages_stddev_fields';
  branch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  language_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "branch_languages" */
export type Branch_Languages_Stddev_Order_By = {
  branch_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  language_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Branch_Languages_Stddev_Pop_Fields = {
  __typename?: 'branch_languages_stddev_pop_fields';
  branch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  language_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "branch_languages" */
export type Branch_Languages_Stddev_Pop_Order_By = {
  branch_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  language_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Branch_Languages_Stddev_Samp_Fields = {
  __typename?: 'branch_languages_stddev_samp_fields';
  branch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  language_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "branch_languages" */
export type Branch_Languages_Stddev_Samp_Order_By = {
  branch_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  language_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Branch_Languages_Sum_Fields = {
  __typename?: 'branch_languages_sum_fields';
  branch_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  language_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "branch_languages" */
export type Branch_Languages_Sum_Order_By = {
  branch_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  language_id?: Maybe<Order_By>;
};

/** update columns of table "branch_languages" */
export enum Branch_Languages_Update_Column {
  /** column name */
  BranchId = 'branch_id',
  /** column name */
  Id = 'id',
  /** column name */
  LanguageId = 'language_id',
  /** column name */
  Uuid = 'uuid'
}

/** aggregate var_pop on columns */
export type Branch_Languages_Var_Pop_Fields = {
  __typename?: 'branch_languages_var_pop_fields';
  branch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  language_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "branch_languages" */
export type Branch_Languages_Var_Pop_Order_By = {
  branch_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  language_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Branch_Languages_Var_Samp_Fields = {
  __typename?: 'branch_languages_var_samp_fields';
  branch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  language_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "branch_languages" */
export type Branch_Languages_Var_Samp_Order_By = {
  branch_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  language_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Branch_Languages_Variance_Fields = {
  __typename?: 'branch_languages_variance_fields';
  branch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  language_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "branch_languages" */
export type Branch_Languages_Variance_Order_By = {
  branch_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  language_id?: Maybe<Order_By>;
};

/** columns and relationships of "branches" */
export type Branches = {
  __typename?: 'branches';
  /** An array relationship */
  branch_languages: Array<Branch_Languages>;
  /** An aggregate relationship */
  branch_languages_aggregate: Branch_Languages_Aggregate;
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An object relationship */
  project: Projects;
  project_id: Scalars['Int'];
  /** fetch data from the table: "terms" */
  terms: Array<Terms>;
  /** An aggregate relationship */
  terms_aggregate: Terms_Aggregate;
  uuid: Scalars['uuid'];
};


/** columns and relationships of "branches" */
export type BranchesBranch_LanguagesArgs = {
  distinct_on?: Maybe<Array<Branch_Languages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Branch_Languages_Order_By>>;
  where?: Maybe<Branch_Languages_Bool_Exp>;
};


/** columns and relationships of "branches" */
export type BranchesBranch_Languages_AggregateArgs = {
  distinct_on?: Maybe<Array<Branch_Languages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Branch_Languages_Order_By>>;
  where?: Maybe<Branch_Languages_Bool_Exp>;
};


/** columns and relationships of "branches" */
export type BranchesTermsArgs = {
  distinct_on?: Maybe<Array<Terms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Terms_Order_By>>;
  where?: Maybe<Terms_Bool_Exp>;
};


/** columns and relationships of "branches" */
export type BranchesTerms_AggregateArgs = {
  distinct_on?: Maybe<Array<Terms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Terms_Order_By>>;
  where?: Maybe<Terms_Bool_Exp>;
};

/** aggregated selection of "branches" */
export type Branches_Aggregate = {
  __typename?: 'branches_aggregate';
  aggregate?: Maybe<Branches_Aggregate_Fields>;
  nodes: Array<Branches>;
};

/** aggregate fields of "branches" */
export type Branches_Aggregate_Fields = {
  __typename?: 'branches_aggregate_fields';
  avg?: Maybe<Branches_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Branches_Max_Fields>;
  min?: Maybe<Branches_Min_Fields>;
  stddev?: Maybe<Branches_Stddev_Fields>;
  stddev_pop?: Maybe<Branches_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Branches_Stddev_Samp_Fields>;
  sum?: Maybe<Branches_Sum_Fields>;
  var_pop?: Maybe<Branches_Var_Pop_Fields>;
  var_samp?: Maybe<Branches_Var_Samp_Fields>;
  variance?: Maybe<Branches_Variance_Fields>;
};


/** aggregate fields of "branches" */
export type Branches_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Branches_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "branches" */
export type Branches_Aggregate_Order_By = {
  avg?: Maybe<Branches_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Branches_Max_Order_By>;
  min?: Maybe<Branches_Min_Order_By>;
  stddev?: Maybe<Branches_Stddev_Order_By>;
  stddev_pop?: Maybe<Branches_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Branches_Stddev_Samp_Order_By>;
  sum?: Maybe<Branches_Sum_Order_By>;
  var_pop?: Maybe<Branches_Var_Pop_Order_By>;
  var_samp?: Maybe<Branches_Var_Samp_Order_By>;
  variance?: Maybe<Branches_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "branches" */
export type Branches_Arr_Rel_Insert_Input = {
  data: Array<Branches_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Branches_On_Conflict>;
};

/** aggregate avg on columns */
export type Branches_Avg_Fields = {
  __typename?: 'branches_avg_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "branches" */
export type Branches_Avg_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "branches". All fields are combined with a logical 'AND'. */
export type Branches_Bool_Exp = {
  _and?: Maybe<Array<Branches_Bool_Exp>>;
  _not?: Maybe<Branches_Bool_Exp>;
  _or?: Maybe<Array<Branches_Bool_Exp>>;
  branch_languages?: Maybe<Branch_Languages_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  project?: Maybe<Projects_Bool_Exp>;
  project_id?: Maybe<Int_Comparison_Exp>;
  terms?: Maybe<Terms_Bool_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "branches" */
export enum Branches_Constraint {
  /** unique or primary key constraint */
  BranchesPkey = 'branches_pkey',
  /** unique or primary key constraint */
  BranchesUuidKey = 'branches_uuid_key'
}

/** input type for incrementing numeric columns in table "branches" */
export type Branches_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  project_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "branches" */
export type Branches_Insert_Input = {
  branch_languages?: Maybe<Branch_Languages_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  project?: Maybe<Projects_Obj_Rel_Insert_Input>;
  project_id?: Maybe<Scalars['Int']>;
  terms?: Maybe<Terms_Arr_Rel_Insert_Input>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Branches_Max_Fields = {
  __typename?: 'branches_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "branches" */
export type Branches_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Branches_Min_Fields = {
  __typename?: 'branches_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "branches" */
export type Branches_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** response of any mutation on the table "branches" */
export type Branches_Mutation_Response = {
  __typename?: 'branches_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Branches>;
};

/** input type for inserting object relation for remote table "branches" */
export type Branches_Obj_Rel_Insert_Input = {
  data: Branches_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Branches_On_Conflict>;
};

/** on conflict condition type for table "branches" */
export type Branches_On_Conflict = {
  constraint: Branches_Constraint;
  update_columns?: Array<Branches_Update_Column>;
  where?: Maybe<Branches_Bool_Exp>;
};

/** Ordering options when selecting data from "branches". */
export type Branches_Order_By = {
  branch_languages_aggregate?: Maybe<Branch_Languages_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  project?: Maybe<Projects_Order_By>;
  project_id?: Maybe<Order_By>;
  terms_aggregate?: Maybe<Terms_Aggregate_Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: branches */
export type Branches_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "branches" */
export enum Branches_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "branches" */
export type Branches_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Branches_Stddev_Fields = {
  __typename?: 'branches_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "branches" */
export type Branches_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Branches_Stddev_Pop_Fields = {
  __typename?: 'branches_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "branches" */
export type Branches_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Branches_Stddev_Samp_Fields = {
  __typename?: 'branches_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "branches" */
export type Branches_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Branches_Sum_Fields = {
  __typename?: 'branches_sum_fields';
  id?: Maybe<Scalars['Int']>;
  project_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "branches" */
export type Branches_Sum_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** update columns of table "branches" */
export enum Branches_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  Uuid = 'uuid'
}

/** aggregate var_pop on columns */
export type Branches_Var_Pop_Fields = {
  __typename?: 'branches_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "branches" */
export type Branches_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Branches_Var_Samp_Fields = {
  __typename?: 'branches_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "branches" */
export type Branches_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Branches_Variance_Fields = {
  __typename?: 'branches_variance_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "branches" */
export type Branches_Variance_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** columns and relationships of "companies" */
export type Companies = {
  __typename?: 'companies';
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  projects: Array<Projects>;
  /** An aggregate relationship */
  projects_aggregate: Projects_Aggregate;
  /** An array relationship */
  user_links: Array<Company_User_Link>;
  /** An aggregate relationship */
  user_links_aggregate: Company_User_Link_Aggregate;
  uuid: Scalars['uuid'];
};


/** columns and relationships of "companies" */
export type CompaniesProjectsArgs = {
  distinct_on?: Maybe<Array<Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Projects_Order_By>>;
  where?: Maybe<Projects_Bool_Exp>;
};


/** columns and relationships of "companies" */
export type CompaniesProjects_AggregateArgs = {
  distinct_on?: Maybe<Array<Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Projects_Order_By>>;
  where?: Maybe<Projects_Bool_Exp>;
};


/** columns and relationships of "companies" */
export type CompaniesUser_LinksArgs = {
  distinct_on?: Maybe<Array<Company_User_Link_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Company_User_Link_Order_By>>;
  where?: Maybe<Company_User_Link_Bool_Exp>;
};


/** columns and relationships of "companies" */
export type CompaniesUser_Links_AggregateArgs = {
  distinct_on?: Maybe<Array<Company_User_Link_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Company_User_Link_Order_By>>;
  where?: Maybe<Company_User_Link_Bool_Exp>;
};

/** aggregated selection of "companies" */
export type Companies_Aggregate = {
  __typename?: 'companies_aggregate';
  aggregate?: Maybe<Companies_Aggregate_Fields>;
  nodes: Array<Companies>;
};

/** aggregate fields of "companies" */
export type Companies_Aggregate_Fields = {
  __typename?: 'companies_aggregate_fields';
  avg?: Maybe<Companies_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Companies_Max_Fields>;
  min?: Maybe<Companies_Min_Fields>;
  stddev?: Maybe<Companies_Stddev_Fields>;
  stddev_pop?: Maybe<Companies_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Companies_Stddev_Samp_Fields>;
  sum?: Maybe<Companies_Sum_Fields>;
  var_pop?: Maybe<Companies_Var_Pop_Fields>;
  var_samp?: Maybe<Companies_Var_Samp_Fields>;
  variance?: Maybe<Companies_Variance_Fields>;
};


/** aggregate fields of "companies" */
export type Companies_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Companies_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Companies_Avg_Fields = {
  __typename?: 'companies_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "companies". All fields are combined with a logical 'AND'. */
export type Companies_Bool_Exp = {
  _and?: Maybe<Array<Companies_Bool_Exp>>;
  _not?: Maybe<Companies_Bool_Exp>;
  _or?: Maybe<Array<Companies_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  projects?: Maybe<Projects_Bool_Exp>;
  user_links?: Maybe<Company_User_Link_Bool_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "companies" */
export enum Companies_Constraint {
  /** unique or primary key constraint */
  CompaniesPkey = 'companies_pkey',
  /** unique or primary key constraint */
  CompanyUserLinkIdKey = 'company_user_link_id_key'
}

/** input type for incrementing numeric columns in table "companies" */
export type Companies_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "companies" */
export type Companies_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  projects?: Maybe<Projects_Arr_Rel_Insert_Input>;
  user_links?: Maybe<Company_User_Link_Arr_Rel_Insert_Input>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Companies_Max_Fields = {
  __typename?: 'companies_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Companies_Min_Fields = {
  __typename?: 'companies_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "companies" */
export type Companies_Mutation_Response = {
  __typename?: 'companies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Companies>;
};

/** input type for inserting object relation for remote table "companies" */
export type Companies_Obj_Rel_Insert_Input = {
  data: Companies_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Companies_On_Conflict>;
};

/** on conflict condition type for table "companies" */
export type Companies_On_Conflict = {
  constraint: Companies_Constraint;
  update_columns?: Array<Companies_Update_Column>;
  where?: Maybe<Companies_Bool_Exp>;
};

/** Ordering options when selecting data from "companies". */
export type Companies_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  projects_aggregate?: Maybe<Projects_Aggregate_Order_By>;
  user_links_aggregate?: Maybe<Company_User_Link_Aggregate_Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: companies */
export type Companies_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "companies" */
export enum Companies_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "companies" */
export type Companies_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Companies_Stddev_Fields = {
  __typename?: 'companies_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Companies_Stddev_Pop_Fields = {
  __typename?: 'companies_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Companies_Stddev_Samp_Fields = {
  __typename?: 'companies_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Companies_Sum_Fields = {
  __typename?: 'companies_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "companies" */
export enum Companies_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Uuid = 'uuid'
}

/** aggregate var_pop on columns */
export type Companies_Var_Pop_Fields = {
  __typename?: 'companies_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Companies_Var_Samp_Fields = {
  __typename?: 'companies_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Companies_Variance_Fields = {
  __typename?: 'companies_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "company_user_link" */
export type Company_User_Link = {
  __typename?: 'company_user_link';
  /** An object relationship */
  company: Companies;
  company_id: Scalars['Int'];
  id: Scalars['Int'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int'];
  uuid: Scalars['uuid'];
};

/** aggregated selection of "company_user_link" */
export type Company_User_Link_Aggregate = {
  __typename?: 'company_user_link_aggregate';
  aggregate?: Maybe<Company_User_Link_Aggregate_Fields>;
  nodes: Array<Company_User_Link>;
};

/** aggregate fields of "company_user_link" */
export type Company_User_Link_Aggregate_Fields = {
  __typename?: 'company_user_link_aggregate_fields';
  avg?: Maybe<Company_User_Link_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Company_User_Link_Max_Fields>;
  min?: Maybe<Company_User_Link_Min_Fields>;
  stddev?: Maybe<Company_User_Link_Stddev_Fields>;
  stddev_pop?: Maybe<Company_User_Link_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Company_User_Link_Stddev_Samp_Fields>;
  sum?: Maybe<Company_User_Link_Sum_Fields>;
  var_pop?: Maybe<Company_User_Link_Var_Pop_Fields>;
  var_samp?: Maybe<Company_User_Link_Var_Samp_Fields>;
  variance?: Maybe<Company_User_Link_Variance_Fields>;
};


/** aggregate fields of "company_user_link" */
export type Company_User_Link_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Company_User_Link_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "company_user_link" */
export type Company_User_Link_Aggregate_Order_By = {
  avg?: Maybe<Company_User_Link_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Company_User_Link_Max_Order_By>;
  min?: Maybe<Company_User_Link_Min_Order_By>;
  stddev?: Maybe<Company_User_Link_Stddev_Order_By>;
  stddev_pop?: Maybe<Company_User_Link_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Company_User_Link_Stddev_Samp_Order_By>;
  sum?: Maybe<Company_User_Link_Sum_Order_By>;
  var_pop?: Maybe<Company_User_Link_Var_Pop_Order_By>;
  var_samp?: Maybe<Company_User_Link_Var_Samp_Order_By>;
  variance?: Maybe<Company_User_Link_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "company_user_link" */
export type Company_User_Link_Arr_Rel_Insert_Input = {
  data: Array<Company_User_Link_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Company_User_Link_On_Conflict>;
};

/** aggregate avg on columns */
export type Company_User_Link_Avg_Fields = {
  __typename?: 'company_user_link_avg_fields';
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "company_user_link" */
export type Company_User_Link_Avg_Order_By = {
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "company_user_link". All fields are combined with a logical 'AND'. */
export type Company_User_Link_Bool_Exp = {
  _and?: Maybe<Array<Company_User_Link_Bool_Exp>>;
  _not?: Maybe<Company_User_Link_Bool_Exp>;
  _or?: Maybe<Array<Company_User_Link_Bool_Exp>>;
  company?: Maybe<Companies_Bool_Exp>;
  company_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "company_user_link" */
export enum Company_User_Link_Constraint {
  /** unique or primary key constraint */
  CompaniesUuidKey = 'companies_uuid_key',
  /** unique or primary key constraint */
  CompanyUserLinkPkey = 'company_user_link_pkey'
}

/** input type for incrementing numeric columns in table "company_user_link" */
export type Company_User_Link_Inc_Input = {
  company_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "company_user_link" */
export type Company_User_Link_Insert_Input = {
  company?: Maybe<Companies_Obj_Rel_Insert_Input>;
  company_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Company_User_Link_Max_Fields = {
  __typename?: 'company_user_link_max_fields';
  company_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "company_user_link" */
export type Company_User_Link_Max_Order_By = {
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Company_User_Link_Min_Fields = {
  __typename?: 'company_user_link_min_fields';
  company_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "company_user_link" */
export type Company_User_Link_Min_Order_By = {
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** response of any mutation on the table "company_user_link" */
export type Company_User_Link_Mutation_Response = {
  __typename?: 'company_user_link_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Company_User_Link>;
};

/** on conflict condition type for table "company_user_link" */
export type Company_User_Link_On_Conflict = {
  constraint: Company_User_Link_Constraint;
  update_columns?: Array<Company_User_Link_Update_Column>;
  where?: Maybe<Company_User_Link_Bool_Exp>;
};

/** Ordering options when selecting data from "company_user_link". */
export type Company_User_Link_Order_By = {
  company?: Maybe<Companies_Order_By>;
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: company_user_link */
export type Company_User_Link_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "company_user_link" */
export enum Company_User_Link_Select_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "company_user_link" */
export type Company_User_Link_Set_Input = {
  company_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Company_User_Link_Stddev_Fields = {
  __typename?: 'company_user_link_stddev_fields';
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "company_user_link" */
export type Company_User_Link_Stddev_Order_By = {
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Company_User_Link_Stddev_Pop_Fields = {
  __typename?: 'company_user_link_stddev_pop_fields';
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "company_user_link" */
export type Company_User_Link_Stddev_Pop_Order_By = {
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Company_User_Link_Stddev_Samp_Fields = {
  __typename?: 'company_user_link_stddev_samp_fields';
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "company_user_link" */
export type Company_User_Link_Stddev_Samp_Order_By = {
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Company_User_Link_Sum_Fields = {
  __typename?: 'company_user_link_sum_fields';
  company_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "company_user_link" */
export type Company_User_Link_Sum_Order_By = {
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "company_user_link" */
export enum Company_User_Link_Update_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Uuid = 'uuid'
}

/** aggregate var_pop on columns */
export type Company_User_Link_Var_Pop_Fields = {
  __typename?: 'company_user_link_var_pop_fields';
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "company_user_link" */
export type Company_User_Link_Var_Pop_Order_By = {
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Company_User_Link_Var_Samp_Fields = {
  __typename?: 'company_user_link_var_samp_fields';
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "company_user_link" */
export type Company_User_Link_Var_Samp_Order_By = {
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Company_User_Link_Variance_Fields = {
  __typename?: 'company_user_link_variance_fields';
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "company_user_link" */
export type Company_User_Link_Variance_Order_By = {
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** columns and relationships of "languages" */
export type Languages = {
  __typename?: 'languages';
  id: Scalars['Int'];
  iso_code: Scalars['String'];
  name: Scalars['String'];
  /** An array relationship */
  project_languages: Array<Branch_Languages>;
  /** An aggregate relationship */
  project_languages_aggregate: Branch_Languages_Aggregate;
  uuid: Scalars['uuid'];
};


/** columns and relationships of "languages" */
export type LanguagesProject_LanguagesArgs = {
  distinct_on?: Maybe<Array<Branch_Languages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Branch_Languages_Order_By>>;
  where?: Maybe<Branch_Languages_Bool_Exp>;
};


/** columns and relationships of "languages" */
export type LanguagesProject_Languages_AggregateArgs = {
  distinct_on?: Maybe<Array<Branch_Languages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Branch_Languages_Order_By>>;
  where?: Maybe<Branch_Languages_Bool_Exp>;
};

/** aggregated selection of "languages" */
export type Languages_Aggregate = {
  __typename?: 'languages_aggregate';
  aggregate?: Maybe<Languages_Aggregate_Fields>;
  nodes: Array<Languages>;
};

/** aggregate fields of "languages" */
export type Languages_Aggregate_Fields = {
  __typename?: 'languages_aggregate_fields';
  avg?: Maybe<Languages_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Languages_Max_Fields>;
  min?: Maybe<Languages_Min_Fields>;
  stddev?: Maybe<Languages_Stddev_Fields>;
  stddev_pop?: Maybe<Languages_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Languages_Stddev_Samp_Fields>;
  sum?: Maybe<Languages_Sum_Fields>;
  var_pop?: Maybe<Languages_Var_Pop_Fields>;
  var_samp?: Maybe<Languages_Var_Samp_Fields>;
  variance?: Maybe<Languages_Variance_Fields>;
};


/** aggregate fields of "languages" */
export type Languages_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Languages_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Languages_Avg_Fields = {
  __typename?: 'languages_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "languages". All fields are combined with a logical 'AND'. */
export type Languages_Bool_Exp = {
  _and?: Maybe<Array<Languages_Bool_Exp>>;
  _not?: Maybe<Languages_Bool_Exp>;
  _or?: Maybe<Array<Languages_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  iso_code?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  project_languages?: Maybe<Branch_Languages_Bool_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "languages" */
export enum Languages_Constraint {
  /** unique or primary key constraint */
  LanguagesIdKey = 'languages_id_key',
  /** unique or primary key constraint */
  LanguagesPkey = 'languages_pkey'
}

/** input type for incrementing numeric columns in table "languages" */
export type Languages_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "languages" */
export type Languages_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  iso_code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  project_languages?: Maybe<Branch_Languages_Arr_Rel_Insert_Input>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Languages_Max_Fields = {
  __typename?: 'languages_max_fields';
  id?: Maybe<Scalars['Int']>;
  iso_code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Languages_Min_Fields = {
  __typename?: 'languages_min_fields';
  id?: Maybe<Scalars['Int']>;
  iso_code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "languages" */
export type Languages_Mutation_Response = {
  __typename?: 'languages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Languages>;
};

/** input type for inserting object relation for remote table "languages" */
export type Languages_Obj_Rel_Insert_Input = {
  data: Languages_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Languages_On_Conflict>;
};

/** on conflict condition type for table "languages" */
export type Languages_On_Conflict = {
  constraint: Languages_Constraint;
  update_columns?: Array<Languages_Update_Column>;
  where?: Maybe<Languages_Bool_Exp>;
};

/** Ordering options when selecting data from "languages". */
export type Languages_Order_By = {
  id?: Maybe<Order_By>;
  iso_code?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  project_languages_aggregate?: Maybe<Branch_Languages_Aggregate_Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: languages */
export type Languages_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "languages" */
export enum Languages_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IsoCode = 'iso_code',
  /** column name */
  Name = 'name',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "languages" */
export type Languages_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  iso_code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Languages_Stddev_Fields = {
  __typename?: 'languages_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Languages_Stddev_Pop_Fields = {
  __typename?: 'languages_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Languages_Stddev_Samp_Fields = {
  __typename?: 'languages_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Languages_Sum_Fields = {
  __typename?: 'languages_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "languages" */
export enum Languages_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IsoCode = 'iso_code',
  /** column name */
  Name = 'name',
  /** column name */
  Uuid = 'uuid'
}

/** aggregate var_pop on columns */
export type Languages_Var_Pop_Fields = {
  __typename?: 'languages_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Languages_Var_Samp_Fields = {
  __typename?: 'languages_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Languages_Variance_Fields = {
  __typename?: 'languages_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "branch_languages" */
  delete_branch_languages?: Maybe<Branch_Languages_Mutation_Response>;
  /** delete single row from the table: "branch_languages" */
  delete_branch_languages_by_pk?: Maybe<Branch_Languages>;
  /** delete data from the table: "branches" */
  delete_branches?: Maybe<Branches_Mutation_Response>;
  /** delete single row from the table: "branches" */
  delete_branches_by_pk?: Maybe<Branches>;
  /** delete data from the table: "companies" */
  delete_companies?: Maybe<Companies_Mutation_Response>;
  /** delete single row from the table: "companies" */
  delete_companies_by_pk?: Maybe<Companies>;
  /** delete data from the table: "company_user_link" */
  delete_company_user_link?: Maybe<Company_User_Link_Mutation_Response>;
  /** delete single row from the table: "company_user_link" */
  delete_company_user_link_by_pk?: Maybe<Company_User_Link>;
  /** delete data from the table: "languages" */
  delete_languages?: Maybe<Languages_Mutation_Response>;
  /** delete single row from the table: "languages" */
  delete_languages_by_pk?: Maybe<Languages>;
  /** delete data from the table: "projects" */
  delete_projects?: Maybe<Projects_Mutation_Response>;
  /** delete single row from the table: "projects" */
  delete_projects_by_pk?: Maybe<Projects>;
  /** delete data from the table: "terms" */
  delete_terms?: Maybe<Terms_Mutation_Response>;
  /** delete single row from the table: "terms" */
  delete_terms_by_pk?: Maybe<Terms>;
  /** delete data from the table: "translation_statuses" */
  delete_translation_statuses?: Maybe<Translation_Statuses_Mutation_Response>;
  /** delete single row from the table: "translation_statuses" */
  delete_translation_statuses_by_pk?: Maybe<Translation_Statuses>;
  /** delete data from the table: "translations" */
  delete_translations?: Maybe<Translations_Mutation_Response>;
  /** delete single row from the table: "translations" */
  delete_translations_by_pk?: Maybe<Translations>;
  /** delete data from the table: "user_project_link" */
  delete_user_project_link?: Maybe<User_Project_Link_Mutation_Response>;
  /** delete single row from the table: "user_project_link" */
  delete_user_project_link_by_pk?: Maybe<User_Project_Link>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "branch_languages" */
  insert_branch_languages?: Maybe<Branch_Languages_Mutation_Response>;
  /** insert a single row into the table: "branch_languages" */
  insert_branch_languages_one?: Maybe<Branch_Languages>;
  /** insert data into the table: "branches" */
  insert_branches?: Maybe<Branches_Mutation_Response>;
  /** insert a single row into the table: "branches" */
  insert_branches_one?: Maybe<Branches>;
  /** insert data into the table: "companies" */
  insert_companies?: Maybe<Companies_Mutation_Response>;
  /** insert a single row into the table: "companies" */
  insert_companies_one?: Maybe<Companies>;
  /** insert data into the table: "company_user_link" */
  insert_company_user_link?: Maybe<Company_User_Link_Mutation_Response>;
  /** insert a single row into the table: "company_user_link" */
  insert_company_user_link_one?: Maybe<Company_User_Link>;
  /** insert data into the table: "languages" */
  insert_languages?: Maybe<Languages_Mutation_Response>;
  /** insert a single row into the table: "languages" */
  insert_languages_one?: Maybe<Languages>;
  /** insert data into the table: "projects" */
  insert_projects?: Maybe<Projects_Mutation_Response>;
  /** insert a single row into the table: "projects" */
  insert_projects_one?: Maybe<Projects>;
  /** insert data into the table: "terms" */
  insert_terms?: Maybe<Terms_Mutation_Response>;
  /** insert a single row into the table: "terms" */
  insert_terms_one?: Maybe<Terms>;
  /** insert data into the table: "translation_statuses" */
  insert_translation_statuses?: Maybe<Translation_Statuses_Mutation_Response>;
  /** insert a single row into the table: "translation_statuses" */
  insert_translation_statuses_one?: Maybe<Translation_Statuses>;
  /** insert data into the table: "translations" */
  insert_translations?: Maybe<Translations_Mutation_Response>;
  /** insert a single row into the table: "translations" */
  insert_translations_one?: Maybe<Translations>;
  /** insert data into the table: "user_project_link" */
  insert_user_project_link?: Maybe<User_Project_Link_Mutation_Response>;
  /** insert a single row into the table: "user_project_link" */
  insert_user_project_link_one?: Maybe<User_Project_Link>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "branch_languages" */
  update_branch_languages?: Maybe<Branch_Languages_Mutation_Response>;
  /** update single row of the table: "branch_languages" */
  update_branch_languages_by_pk?: Maybe<Branch_Languages>;
  /** update data of the table: "branches" */
  update_branches?: Maybe<Branches_Mutation_Response>;
  /** update single row of the table: "branches" */
  update_branches_by_pk?: Maybe<Branches>;
  /** update data of the table: "companies" */
  update_companies?: Maybe<Companies_Mutation_Response>;
  /** update single row of the table: "companies" */
  update_companies_by_pk?: Maybe<Companies>;
  /** update data of the table: "company_user_link" */
  update_company_user_link?: Maybe<Company_User_Link_Mutation_Response>;
  /** update single row of the table: "company_user_link" */
  update_company_user_link_by_pk?: Maybe<Company_User_Link>;
  /** update data of the table: "languages" */
  update_languages?: Maybe<Languages_Mutation_Response>;
  /** update single row of the table: "languages" */
  update_languages_by_pk?: Maybe<Languages>;
  /** update data of the table: "projects" */
  update_projects?: Maybe<Projects_Mutation_Response>;
  /** update single row of the table: "projects" */
  update_projects_by_pk?: Maybe<Projects>;
  /** update data of the table: "terms" */
  update_terms?: Maybe<Terms_Mutation_Response>;
  /** update single row of the table: "terms" */
  update_terms_by_pk?: Maybe<Terms>;
  /** update data of the table: "translation_statuses" */
  update_translation_statuses?: Maybe<Translation_Statuses_Mutation_Response>;
  /** update single row of the table: "translation_statuses" */
  update_translation_statuses_by_pk?: Maybe<Translation_Statuses>;
  /** update data of the table: "translations" */
  update_translations?: Maybe<Translations_Mutation_Response>;
  /** update single row of the table: "translations" */
  update_translations_by_pk?: Maybe<Translations>;
  /** update data of the table: "user_project_link" */
  update_user_project_link?: Maybe<User_Project_Link_Mutation_Response>;
  /** update single row of the table: "user_project_link" */
  update_user_project_link_by_pk?: Maybe<User_Project_Link>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_Branch_LanguagesArgs = {
  where: Branch_Languages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Branch_Languages_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_BranchesArgs = {
  where: Branches_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Branches_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_CompaniesArgs = {
  where: Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Companies_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Company_User_LinkArgs = {
  where: Company_User_Link_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Company_User_Link_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_LanguagesArgs = {
  where: Languages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Languages_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ProjectsArgs = {
  where: Projects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Projects_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_TermsArgs = {
  where: Terms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Terms_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Translation_StatusesArgs = {
  where: Translation_Statuses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Translation_Statuses_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_TranslationsArgs = {
  where: Translations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Translations_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_User_Project_LinkArgs = {
  where: User_Project_Link_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Project_Link_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_Branch_LanguagesArgs = {
  objects: Array<Branch_Languages_Insert_Input>;
  on_conflict?: Maybe<Branch_Languages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Branch_Languages_OneArgs = {
  object: Branch_Languages_Insert_Input;
  on_conflict?: Maybe<Branch_Languages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BranchesArgs = {
  objects: Array<Branches_Insert_Input>;
  on_conflict?: Maybe<Branches_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Branches_OneArgs = {
  object: Branches_Insert_Input;
  on_conflict?: Maybe<Branches_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CompaniesArgs = {
  objects: Array<Companies_Insert_Input>;
  on_conflict?: Maybe<Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Companies_OneArgs = {
  object: Companies_Insert_Input;
  on_conflict?: Maybe<Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Company_User_LinkArgs = {
  objects: Array<Company_User_Link_Insert_Input>;
  on_conflict?: Maybe<Company_User_Link_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Company_User_Link_OneArgs = {
  object: Company_User_Link_Insert_Input;
  on_conflict?: Maybe<Company_User_Link_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LanguagesArgs = {
  objects: Array<Languages_Insert_Input>;
  on_conflict?: Maybe<Languages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Languages_OneArgs = {
  object: Languages_Insert_Input;
  on_conflict?: Maybe<Languages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProjectsArgs = {
  objects: Array<Projects_Insert_Input>;
  on_conflict?: Maybe<Projects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Projects_OneArgs = {
  object: Projects_Insert_Input;
  on_conflict?: Maybe<Projects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TermsArgs = {
  objects: Array<Terms_Insert_Input>;
  on_conflict?: Maybe<Terms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Terms_OneArgs = {
  object: Terms_Insert_Input;
  on_conflict?: Maybe<Terms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Translation_StatusesArgs = {
  objects: Array<Translation_Statuses_Insert_Input>;
  on_conflict?: Maybe<Translation_Statuses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Translation_Statuses_OneArgs = {
  object: Translation_Statuses_Insert_Input;
  on_conflict?: Maybe<Translation_Statuses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TranslationsArgs = {
  objects: Array<Translations_Insert_Input>;
  on_conflict?: Maybe<Translations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Translations_OneArgs = {
  object: Translations_Insert_Input;
  on_conflict?: Maybe<Translations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Project_LinkArgs = {
  objects: Array<User_Project_Link_Insert_Input>;
  on_conflict?: Maybe<User_Project_Link_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Project_Link_OneArgs = {
  object: User_Project_Link_Insert_Input;
  on_conflict?: Maybe<User_Project_Link_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Branch_LanguagesArgs = {
  _inc?: Maybe<Branch_Languages_Inc_Input>;
  _set?: Maybe<Branch_Languages_Set_Input>;
  where: Branch_Languages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Branch_Languages_By_PkArgs = {
  _inc?: Maybe<Branch_Languages_Inc_Input>;
  _set?: Maybe<Branch_Languages_Set_Input>;
  pk_columns: Branch_Languages_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_BranchesArgs = {
  _inc?: Maybe<Branches_Inc_Input>;
  _set?: Maybe<Branches_Set_Input>;
  where: Branches_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Branches_By_PkArgs = {
  _inc?: Maybe<Branches_Inc_Input>;
  _set?: Maybe<Branches_Set_Input>;
  pk_columns: Branches_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CompaniesArgs = {
  _inc?: Maybe<Companies_Inc_Input>;
  _set?: Maybe<Companies_Set_Input>;
  where: Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Companies_By_PkArgs = {
  _inc?: Maybe<Companies_Inc_Input>;
  _set?: Maybe<Companies_Set_Input>;
  pk_columns: Companies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Company_User_LinkArgs = {
  _inc?: Maybe<Company_User_Link_Inc_Input>;
  _set?: Maybe<Company_User_Link_Set_Input>;
  where: Company_User_Link_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Company_User_Link_By_PkArgs = {
  _inc?: Maybe<Company_User_Link_Inc_Input>;
  _set?: Maybe<Company_User_Link_Set_Input>;
  pk_columns: Company_User_Link_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_LanguagesArgs = {
  _inc?: Maybe<Languages_Inc_Input>;
  _set?: Maybe<Languages_Set_Input>;
  where: Languages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Languages_By_PkArgs = {
  _inc?: Maybe<Languages_Inc_Input>;
  _set?: Maybe<Languages_Set_Input>;
  pk_columns: Languages_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ProjectsArgs = {
  _inc?: Maybe<Projects_Inc_Input>;
  _set?: Maybe<Projects_Set_Input>;
  where: Projects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Projects_By_PkArgs = {
  _inc?: Maybe<Projects_Inc_Input>;
  _set?: Maybe<Projects_Set_Input>;
  pk_columns: Projects_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TermsArgs = {
  _inc?: Maybe<Terms_Inc_Input>;
  _set?: Maybe<Terms_Set_Input>;
  where: Terms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Terms_By_PkArgs = {
  _inc?: Maybe<Terms_Inc_Input>;
  _set?: Maybe<Terms_Set_Input>;
  pk_columns: Terms_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Translation_StatusesArgs = {
  _inc?: Maybe<Translation_Statuses_Inc_Input>;
  _set?: Maybe<Translation_Statuses_Set_Input>;
  where: Translation_Statuses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Translation_Statuses_By_PkArgs = {
  _inc?: Maybe<Translation_Statuses_Inc_Input>;
  _set?: Maybe<Translation_Statuses_Set_Input>;
  pk_columns: Translation_Statuses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TranslationsArgs = {
  _inc?: Maybe<Translations_Inc_Input>;
  _set?: Maybe<Translations_Set_Input>;
  where: Translations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Translations_By_PkArgs = {
  _inc?: Maybe<Translations_Inc_Input>;
  _set?: Maybe<Translations_Set_Input>;
  pk_columns: Translations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Project_LinkArgs = {
  _inc?: Maybe<User_Project_Link_Inc_Input>;
  _set?: Maybe<User_Project_Link_Set_Input>;
  where: User_Project_Link_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Project_Link_By_PkArgs = {
  _inc?: Maybe<User_Project_Link_Inc_Input>;
  _set?: Maybe<User_Project_Link_Set_Input>;
  pk_columns: User_Project_Link_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "projects" */
export type Projects = {
  __typename?: 'projects';
  /** An array relationship */
  branches: Array<Branches>;
  /** An aggregate relationship */
  branches_aggregate: Branches_Aggregate;
  /** An object relationship */
  company: Companies;
  company_id: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  statuses: Array<Translation_Statuses>;
  /** An aggregate relationship */
  statuses_aggregate: Translation_Statuses_Aggregate;
  /** An array relationship */
  user_links: Array<User_Project_Link>;
  /** An aggregate relationship */
  user_links_aggregate: User_Project_Link_Aggregate;
  uuid: Scalars['uuid'];
};


/** columns and relationships of "projects" */
export type ProjectsBranchesArgs = {
  distinct_on?: Maybe<Array<Branches_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Branches_Order_By>>;
  where?: Maybe<Branches_Bool_Exp>;
};


/** columns and relationships of "projects" */
export type ProjectsBranches_AggregateArgs = {
  distinct_on?: Maybe<Array<Branches_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Branches_Order_By>>;
  where?: Maybe<Branches_Bool_Exp>;
};


/** columns and relationships of "projects" */
export type ProjectsStatusesArgs = {
  distinct_on?: Maybe<Array<Translation_Statuses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Translation_Statuses_Order_By>>;
  where?: Maybe<Translation_Statuses_Bool_Exp>;
};


/** columns and relationships of "projects" */
export type ProjectsStatuses_AggregateArgs = {
  distinct_on?: Maybe<Array<Translation_Statuses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Translation_Statuses_Order_By>>;
  where?: Maybe<Translation_Statuses_Bool_Exp>;
};


/** columns and relationships of "projects" */
export type ProjectsUser_LinksArgs = {
  distinct_on?: Maybe<Array<User_Project_Link_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Project_Link_Order_By>>;
  where?: Maybe<User_Project_Link_Bool_Exp>;
};


/** columns and relationships of "projects" */
export type ProjectsUser_Links_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Project_Link_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Project_Link_Order_By>>;
  where?: Maybe<User_Project_Link_Bool_Exp>;
};

/** aggregated selection of "projects" */
export type Projects_Aggregate = {
  __typename?: 'projects_aggregate';
  aggregate?: Maybe<Projects_Aggregate_Fields>;
  nodes: Array<Projects>;
};

/** aggregate fields of "projects" */
export type Projects_Aggregate_Fields = {
  __typename?: 'projects_aggregate_fields';
  avg?: Maybe<Projects_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Projects_Max_Fields>;
  min?: Maybe<Projects_Min_Fields>;
  stddev?: Maybe<Projects_Stddev_Fields>;
  stddev_pop?: Maybe<Projects_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Projects_Stddev_Samp_Fields>;
  sum?: Maybe<Projects_Sum_Fields>;
  var_pop?: Maybe<Projects_Var_Pop_Fields>;
  var_samp?: Maybe<Projects_Var_Samp_Fields>;
  variance?: Maybe<Projects_Variance_Fields>;
};


/** aggregate fields of "projects" */
export type Projects_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Projects_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "projects" */
export type Projects_Aggregate_Order_By = {
  avg?: Maybe<Projects_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Projects_Max_Order_By>;
  min?: Maybe<Projects_Min_Order_By>;
  stddev?: Maybe<Projects_Stddev_Order_By>;
  stddev_pop?: Maybe<Projects_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Projects_Stddev_Samp_Order_By>;
  sum?: Maybe<Projects_Sum_Order_By>;
  var_pop?: Maybe<Projects_Var_Pop_Order_By>;
  var_samp?: Maybe<Projects_Var_Samp_Order_By>;
  variance?: Maybe<Projects_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "projects" */
export type Projects_Arr_Rel_Insert_Input = {
  data: Array<Projects_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Projects_On_Conflict>;
};

/** aggregate avg on columns */
export type Projects_Avg_Fields = {
  __typename?: 'projects_avg_fields';
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "projects" */
export type Projects_Avg_Order_By = {
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "projects". All fields are combined with a logical 'AND'. */
export type Projects_Bool_Exp = {
  _and?: Maybe<Array<Projects_Bool_Exp>>;
  _not?: Maybe<Projects_Bool_Exp>;
  _or?: Maybe<Array<Projects_Bool_Exp>>;
  branches?: Maybe<Branches_Bool_Exp>;
  company?: Maybe<Companies_Bool_Exp>;
  company_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  statuses?: Maybe<Translation_Statuses_Bool_Exp>;
  user_links?: Maybe<User_Project_Link_Bool_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "projects" */
export enum Projects_Constraint {
  /** unique or primary key constraint */
  ProjectsPkey = 'projects_pkey',
  /** unique or primary key constraint */
  ProjectsUuidKey = 'projects_uuid_key'
}

/** input type for incrementing numeric columns in table "projects" */
export type Projects_Inc_Input = {
  company_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "projects" */
export type Projects_Insert_Input = {
  branches?: Maybe<Branches_Arr_Rel_Insert_Input>;
  company?: Maybe<Companies_Obj_Rel_Insert_Input>;
  company_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  statuses?: Maybe<Translation_Statuses_Arr_Rel_Insert_Input>;
  user_links?: Maybe<User_Project_Link_Arr_Rel_Insert_Input>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Projects_Max_Fields = {
  __typename?: 'projects_max_fields';
  company_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "projects" */
export type Projects_Max_Order_By = {
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Projects_Min_Fields = {
  __typename?: 'projects_min_fields';
  company_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "projects" */
export type Projects_Min_Order_By = {
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** response of any mutation on the table "projects" */
export type Projects_Mutation_Response = {
  __typename?: 'projects_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Projects>;
};

/** input type for inserting object relation for remote table "projects" */
export type Projects_Obj_Rel_Insert_Input = {
  data: Projects_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Projects_On_Conflict>;
};

/** on conflict condition type for table "projects" */
export type Projects_On_Conflict = {
  constraint: Projects_Constraint;
  update_columns?: Array<Projects_Update_Column>;
  where?: Maybe<Projects_Bool_Exp>;
};

/** Ordering options when selecting data from "projects". */
export type Projects_Order_By = {
  branches_aggregate?: Maybe<Branches_Aggregate_Order_By>;
  company?: Maybe<Companies_Order_By>;
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  statuses_aggregate?: Maybe<Translation_Statuses_Aggregate_Order_By>;
  user_links_aggregate?: Maybe<User_Project_Link_Aggregate_Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: projects */
export type Projects_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "projects" */
export enum Projects_Select_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "projects" */
export type Projects_Set_Input = {
  company_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Projects_Stddev_Fields = {
  __typename?: 'projects_stddev_fields';
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "projects" */
export type Projects_Stddev_Order_By = {
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Projects_Stddev_Pop_Fields = {
  __typename?: 'projects_stddev_pop_fields';
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "projects" */
export type Projects_Stddev_Pop_Order_By = {
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Projects_Stddev_Samp_Fields = {
  __typename?: 'projects_stddev_samp_fields';
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "projects" */
export type Projects_Stddev_Samp_Order_By = {
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Projects_Sum_Fields = {
  __typename?: 'projects_sum_fields';
  company_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "projects" */
export type Projects_Sum_Order_By = {
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "projects" */
export enum Projects_Update_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Uuid = 'uuid'
}

/** aggregate var_pop on columns */
export type Projects_Var_Pop_Fields = {
  __typename?: 'projects_var_pop_fields';
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "projects" */
export type Projects_Var_Pop_Order_By = {
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Projects_Var_Samp_Fields = {
  __typename?: 'projects_var_samp_fields';
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "projects" */
export type Projects_Var_Samp_Order_By = {
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Projects_Variance_Fields = {
  __typename?: 'projects_variance_fields';
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "projects" */
export type Projects_Variance_Order_By = {
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  branch_languages: Array<Branch_Languages>;
  /** An aggregate relationship */
  branch_languages_aggregate: Branch_Languages_Aggregate;
  /** fetch data from the table: "branch_languages" using primary key columns */
  branch_languages_by_pk?: Maybe<Branch_Languages>;
  /** An array relationship */
  branches: Array<Branches>;
  /** An aggregate relationship */
  branches_aggregate: Branches_Aggregate;
  /** fetch data from the table: "branches" using primary key columns */
  branches_by_pk?: Maybe<Branches>;
  /** fetch data from the table: "companies" */
  companies: Array<Companies>;
  /** fetch aggregated fields from the table: "companies" */
  companies_aggregate: Companies_Aggregate;
  /** fetch data from the table: "companies" using primary key columns */
  companies_by_pk?: Maybe<Companies>;
  /** fetch data from the table: "company_user_link" */
  company_user_link: Array<Company_User_Link>;
  /** fetch aggregated fields from the table: "company_user_link" */
  company_user_link_aggregate: Company_User_Link_Aggregate;
  /** fetch data from the table: "company_user_link" using primary key columns */
  company_user_link_by_pk?: Maybe<Company_User_Link>;
  /** fetch data from the table: "languages" */
  languages: Array<Languages>;
  /** fetch aggregated fields from the table: "languages" */
  languages_aggregate: Languages_Aggregate;
  /** fetch data from the table: "languages" using primary key columns */
  languages_by_pk?: Maybe<Languages>;
  /** An array relationship */
  projects: Array<Projects>;
  /** An aggregate relationship */
  projects_aggregate: Projects_Aggregate;
  /** fetch data from the table: "projects" using primary key columns */
  projects_by_pk?: Maybe<Projects>;
  /** fetch data from the table: "terms" */
  terms: Array<Terms>;
  /** An aggregate relationship */
  terms_aggregate: Terms_Aggregate;
  /** fetch data from the table: "terms" using primary key columns */
  terms_by_pk?: Maybe<Terms>;
  /** fetch data from the table: "translation_statuses" */
  translation_statuses: Array<Translation_Statuses>;
  /** fetch aggregated fields from the table: "translation_statuses" */
  translation_statuses_aggregate: Translation_Statuses_Aggregate;
  /** fetch data from the table: "translation_statuses" using primary key columns */
  translation_statuses_by_pk?: Maybe<Translation_Statuses>;
  /** An array relationship */
  translations: Array<Translations>;
  /** An aggregate relationship */
  translations_aggregate: Translations_Aggregate;
  /** fetch data from the table: "translations" using primary key columns */
  translations_by_pk?: Maybe<Translations>;
  /** fetch data from the table: "user_project_link" */
  user_project_link: Array<User_Project_Link>;
  /** fetch aggregated fields from the table: "user_project_link" */
  user_project_link_aggregate: User_Project_Link_Aggregate;
  /** fetch data from the table: "user_project_link" using primary key columns */
  user_project_link_by_pk?: Maybe<User_Project_Link>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootBranch_LanguagesArgs = {
  distinct_on?: Maybe<Array<Branch_Languages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Branch_Languages_Order_By>>;
  where?: Maybe<Branch_Languages_Bool_Exp>;
};


export type Query_RootBranch_Languages_AggregateArgs = {
  distinct_on?: Maybe<Array<Branch_Languages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Branch_Languages_Order_By>>;
  where?: Maybe<Branch_Languages_Bool_Exp>;
};


export type Query_RootBranch_Languages_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootBranchesArgs = {
  distinct_on?: Maybe<Array<Branches_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Branches_Order_By>>;
  where?: Maybe<Branches_Bool_Exp>;
};


export type Query_RootBranches_AggregateArgs = {
  distinct_on?: Maybe<Array<Branches_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Branches_Order_By>>;
  where?: Maybe<Branches_Bool_Exp>;
};


export type Query_RootBranches_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootCompaniesArgs = {
  distinct_on?: Maybe<Array<Companies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Companies_Order_By>>;
  where?: Maybe<Companies_Bool_Exp>;
};


export type Query_RootCompanies_AggregateArgs = {
  distinct_on?: Maybe<Array<Companies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Companies_Order_By>>;
  where?: Maybe<Companies_Bool_Exp>;
};


export type Query_RootCompanies_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootCompany_User_LinkArgs = {
  distinct_on?: Maybe<Array<Company_User_Link_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Company_User_Link_Order_By>>;
  where?: Maybe<Company_User_Link_Bool_Exp>;
};


export type Query_RootCompany_User_Link_AggregateArgs = {
  distinct_on?: Maybe<Array<Company_User_Link_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Company_User_Link_Order_By>>;
  where?: Maybe<Company_User_Link_Bool_Exp>;
};


export type Query_RootCompany_User_Link_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootLanguagesArgs = {
  distinct_on?: Maybe<Array<Languages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Languages_Order_By>>;
  where?: Maybe<Languages_Bool_Exp>;
};


export type Query_RootLanguages_AggregateArgs = {
  distinct_on?: Maybe<Array<Languages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Languages_Order_By>>;
  where?: Maybe<Languages_Bool_Exp>;
};


export type Query_RootLanguages_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootProjectsArgs = {
  distinct_on?: Maybe<Array<Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Projects_Order_By>>;
  where?: Maybe<Projects_Bool_Exp>;
};


export type Query_RootProjects_AggregateArgs = {
  distinct_on?: Maybe<Array<Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Projects_Order_By>>;
  where?: Maybe<Projects_Bool_Exp>;
};


export type Query_RootProjects_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootTermsArgs = {
  distinct_on?: Maybe<Array<Terms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Terms_Order_By>>;
  where?: Maybe<Terms_Bool_Exp>;
};


export type Query_RootTerms_AggregateArgs = {
  distinct_on?: Maybe<Array<Terms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Terms_Order_By>>;
  where?: Maybe<Terms_Bool_Exp>;
};


export type Query_RootTerms_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootTranslation_StatusesArgs = {
  distinct_on?: Maybe<Array<Translation_Statuses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Translation_Statuses_Order_By>>;
  where?: Maybe<Translation_Statuses_Bool_Exp>;
};


export type Query_RootTranslation_Statuses_AggregateArgs = {
  distinct_on?: Maybe<Array<Translation_Statuses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Translation_Statuses_Order_By>>;
  where?: Maybe<Translation_Statuses_Bool_Exp>;
};


export type Query_RootTranslation_Statuses_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootTranslationsArgs = {
  distinct_on?: Maybe<Array<Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Translations_Order_By>>;
  where?: Maybe<Translations_Bool_Exp>;
};


export type Query_RootTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Translations_Order_By>>;
  where?: Maybe<Translations_Bool_Exp>;
};


export type Query_RootTranslations_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUser_Project_LinkArgs = {
  distinct_on?: Maybe<Array<User_Project_Link_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Project_Link_Order_By>>;
  where?: Maybe<User_Project_Link_Bool_Exp>;
};


export type Query_RootUser_Project_Link_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Project_Link_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Project_Link_Order_By>>;
  where?: Maybe<User_Project_Link_Bool_Exp>;
};


export type Query_RootUser_Project_Link_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  branch_languages: Array<Branch_Languages>;
  /** An aggregate relationship */
  branch_languages_aggregate: Branch_Languages_Aggregate;
  /** fetch data from the table: "branch_languages" using primary key columns */
  branch_languages_by_pk?: Maybe<Branch_Languages>;
  /** An array relationship */
  branches: Array<Branches>;
  /** An aggregate relationship */
  branches_aggregate: Branches_Aggregate;
  /** fetch data from the table: "branches" using primary key columns */
  branches_by_pk?: Maybe<Branches>;
  /** fetch data from the table: "companies" */
  companies: Array<Companies>;
  /** fetch aggregated fields from the table: "companies" */
  companies_aggregate: Companies_Aggregate;
  /** fetch data from the table: "companies" using primary key columns */
  companies_by_pk?: Maybe<Companies>;
  /** fetch data from the table: "company_user_link" */
  company_user_link: Array<Company_User_Link>;
  /** fetch aggregated fields from the table: "company_user_link" */
  company_user_link_aggregate: Company_User_Link_Aggregate;
  /** fetch data from the table: "company_user_link" using primary key columns */
  company_user_link_by_pk?: Maybe<Company_User_Link>;
  /** fetch data from the table: "languages" */
  languages: Array<Languages>;
  /** fetch aggregated fields from the table: "languages" */
  languages_aggregate: Languages_Aggregate;
  /** fetch data from the table: "languages" using primary key columns */
  languages_by_pk?: Maybe<Languages>;
  /** An array relationship */
  projects: Array<Projects>;
  /** An aggregate relationship */
  projects_aggregate: Projects_Aggregate;
  /** fetch data from the table: "projects" using primary key columns */
  projects_by_pk?: Maybe<Projects>;
  /** fetch data from the table: "terms" */
  terms: Array<Terms>;
  /** An aggregate relationship */
  terms_aggregate: Terms_Aggregate;
  /** fetch data from the table: "terms" using primary key columns */
  terms_by_pk?: Maybe<Terms>;
  /** fetch data from the table: "translation_statuses" */
  translation_statuses: Array<Translation_Statuses>;
  /** fetch aggregated fields from the table: "translation_statuses" */
  translation_statuses_aggregate: Translation_Statuses_Aggregate;
  /** fetch data from the table: "translation_statuses" using primary key columns */
  translation_statuses_by_pk?: Maybe<Translation_Statuses>;
  /** An array relationship */
  translations: Array<Translations>;
  /** An aggregate relationship */
  translations_aggregate: Translations_Aggregate;
  /** fetch data from the table: "translations" using primary key columns */
  translations_by_pk?: Maybe<Translations>;
  /** fetch data from the table: "user_project_link" */
  user_project_link: Array<User_Project_Link>;
  /** fetch aggregated fields from the table: "user_project_link" */
  user_project_link_aggregate: User_Project_Link_Aggregate;
  /** fetch data from the table: "user_project_link" using primary key columns */
  user_project_link_by_pk?: Maybe<User_Project_Link>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootBranch_LanguagesArgs = {
  distinct_on?: Maybe<Array<Branch_Languages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Branch_Languages_Order_By>>;
  where?: Maybe<Branch_Languages_Bool_Exp>;
};


export type Subscription_RootBranch_Languages_AggregateArgs = {
  distinct_on?: Maybe<Array<Branch_Languages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Branch_Languages_Order_By>>;
  where?: Maybe<Branch_Languages_Bool_Exp>;
};


export type Subscription_RootBranch_Languages_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootBranchesArgs = {
  distinct_on?: Maybe<Array<Branches_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Branches_Order_By>>;
  where?: Maybe<Branches_Bool_Exp>;
};


export type Subscription_RootBranches_AggregateArgs = {
  distinct_on?: Maybe<Array<Branches_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Branches_Order_By>>;
  where?: Maybe<Branches_Bool_Exp>;
};


export type Subscription_RootBranches_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCompaniesArgs = {
  distinct_on?: Maybe<Array<Companies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Companies_Order_By>>;
  where?: Maybe<Companies_Bool_Exp>;
};


export type Subscription_RootCompanies_AggregateArgs = {
  distinct_on?: Maybe<Array<Companies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Companies_Order_By>>;
  where?: Maybe<Companies_Bool_Exp>;
};


export type Subscription_RootCompanies_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCompany_User_LinkArgs = {
  distinct_on?: Maybe<Array<Company_User_Link_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Company_User_Link_Order_By>>;
  where?: Maybe<Company_User_Link_Bool_Exp>;
};


export type Subscription_RootCompany_User_Link_AggregateArgs = {
  distinct_on?: Maybe<Array<Company_User_Link_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Company_User_Link_Order_By>>;
  where?: Maybe<Company_User_Link_Bool_Exp>;
};


export type Subscription_RootCompany_User_Link_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootLanguagesArgs = {
  distinct_on?: Maybe<Array<Languages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Languages_Order_By>>;
  where?: Maybe<Languages_Bool_Exp>;
};


export type Subscription_RootLanguages_AggregateArgs = {
  distinct_on?: Maybe<Array<Languages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Languages_Order_By>>;
  where?: Maybe<Languages_Bool_Exp>;
};


export type Subscription_RootLanguages_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootProjectsArgs = {
  distinct_on?: Maybe<Array<Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Projects_Order_By>>;
  where?: Maybe<Projects_Bool_Exp>;
};


export type Subscription_RootProjects_AggregateArgs = {
  distinct_on?: Maybe<Array<Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Projects_Order_By>>;
  where?: Maybe<Projects_Bool_Exp>;
};


export type Subscription_RootProjects_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTermsArgs = {
  distinct_on?: Maybe<Array<Terms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Terms_Order_By>>;
  where?: Maybe<Terms_Bool_Exp>;
};


export type Subscription_RootTerms_AggregateArgs = {
  distinct_on?: Maybe<Array<Terms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Terms_Order_By>>;
  where?: Maybe<Terms_Bool_Exp>;
};


export type Subscription_RootTerms_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTranslation_StatusesArgs = {
  distinct_on?: Maybe<Array<Translation_Statuses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Translation_Statuses_Order_By>>;
  where?: Maybe<Translation_Statuses_Bool_Exp>;
};


export type Subscription_RootTranslation_Statuses_AggregateArgs = {
  distinct_on?: Maybe<Array<Translation_Statuses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Translation_Statuses_Order_By>>;
  where?: Maybe<Translation_Statuses_Bool_Exp>;
};


export type Subscription_RootTranslation_Statuses_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTranslationsArgs = {
  distinct_on?: Maybe<Array<Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Translations_Order_By>>;
  where?: Maybe<Translations_Bool_Exp>;
};


export type Subscription_RootTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Translations_Order_By>>;
  where?: Maybe<Translations_Bool_Exp>;
};


export type Subscription_RootTranslations_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUser_Project_LinkArgs = {
  distinct_on?: Maybe<Array<User_Project_Link_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Project_Link_Order_By>>;
  where?: Maybe<User_Project_Link_Bool_Exp>;
};


export type Subscription_RootUser_Project_Link_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Project_Link_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Project_Link_Order_By>>;
  where?: Maybe<User_Project_Link_Bool_Exp>;
};


export type Subscription_RootUser_Project_Link_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "terms" */
export type Terms = {
  __typename?: 'terms';
  /** An object relationship */
  branch: Branches;
  branch_id: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  key: Scalars['String'];
  /** An array relationship */
  translations: Array<Translations>;
  /** An aggregate relationship */
  translations_aggregate: Translations_Aggregate;
  uuid: Scalars['uuid'];
};


/** columns and relationships of "terms" */
export type TermsTranslationsArgs = {
  distinct_on?: Maybe<Array<Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Translations_Order_By>>;
  where?: Maybe<Translations_Bool_Exp>;
};


/** columns and relationships of "terms" */
export type TermsTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Translations_Order_By>>;
  where?: Maybe<Translations_Bool_Exp>;
};

/** aggregated selection of "terms" */
export type Terms_Aggregate = {
  __typename?: 'terms_aggregate';
  aggregate?: Maybe<Terms_Aggregate_Fields>;
  nodes: Array<Terms>;
};

/** aggregate fields of "terms" */
export type Terms_Aggregate_Fields = {
  __typename?: 'terms_aggregate_fields';
  avg?: Maybe<Terms_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Terms_Max_Fields>;
  min?: Maybe<Terms_Min_Fields>;
  stddev?: Maybe<Terms_Stddev_Fields>;
  stddev_pop?: Maybe<Terms_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Terms_Stddev_Samp_Fields>;
  sum?: Maybe<Terms_Sum_Fields>;
  var_pop?: Maybe<Terms_Var_Pop_Fields>;
  var_samp?: Maybe<Terms_Var_Samp_Fields>;
  variance?: Maybe<Terms_Variance_Fields>;
};


/** aggregate fields of "terms" */
export type Terms_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Terms_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "terms" */
export type Terms_Aggregate_Order_By = {
  avg?: Maybe<Terms_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Terms_Max_Order_By>;
  min?: Maybe<Terms_Min_Order_By>;
  stddev?: Maybe<Terms_Stddev_Order_By>;
  stddev_pop?: Maybe<Terms_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Terms_Stddev_Samp_Order_By>;
  sum?: Maybe<Terms_Sum_Order_By>;
  var_pop?: Maybe<Terms_Var_Pop_Order_By>;
  var_samp?: Maybe<Terms_Var_Samp_Order_By>;
  variance?: Maybe<Terms_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "terms" */
export type Terms_Arr_Rel_Insert_Input = {
  data: Array<Terms_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Terms_On_Conflict>;
};

/** aggregate avg on columns */
export type Terms_Avg_Fields = {
  __typename?: 'terms_avg_fields';
  branch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "terms" */
export type Terms_Avg_Order_By = {
  branch_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "terms". All fields are combined with a logical 'AND'. */
export type Terms_Bool_Exp = {
  _and?: Maybe<Array<Terms_Bool_Exp>>;
  _not?: Maybe<Terms_Bool_Exp>;
  _or?: Maybe<Array<Terms_Bool_Exp>>;
  branch?: Maybe<Branches_Bool_Exp>;
  branch_id?: Maybe<Int_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  key?: Maybe<String_Comparison_Exp>;
  translations?: Maybe<Translations_Bool_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "terms" */
export enum Terms_Constraint {
  /** unique or primary key constraint */
  ProjectTermsPkey = 'project_terms_pkey',
  /** unique or primary key constraint */
  ProjectTermsUuidKey = 'project_terms_uuid_key'
}

/** input type for incrementing numeric columns in table "terms" */
export type Terms_Inc_Input = {
  branch_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "terms" */
export type Terms_Insert_Input = {
  branch?: Maybe<Branches_Obj_Rel_Insert_Input>;
  branch_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
  translations?: Maybe<Translations_Arr_Rel_Insert_Input>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Terms_Max_Fields = {
  __typename?: 'terms_max_fields';
  branch_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "terms" */
export type Terms_Max_Order_By = {
  branch_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Terms_Min_Fields = {
  __typename?: 'terms_min_fields';
  branch_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "terms" */
export type Terms_Min_Order_By = {
  branch_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** response of any mutation on the table "terms" */
export type Terms_Mutation_Response = {
  __typename?: 'terms_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Terms>;
};

/** input type for inserting object relation for remote table "terms" */
export type Terms_Obj_Rel_Insert_Input = {
  data: Terms_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Terms_On_Conflict>;
};

/** on conflict condition type for table "terms" */
export type Terms_On_Conflict = {
  constraint: Terms_Constraint;
  update_columns?: Array<Terms_Update_Column>;
  where?: Maybe<Terms_Bool_Exp>;
};

/** Ordering options when selecting data from "terms". */
export type Terms_Order_By = {
  branch?: Maybe<Branches_Order_By>;
  branch_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  translations_aggregate?: Maybe<Translations_Aggregate_Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: terms */
export type Terms_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "terms" */
export enum Terms_Select_Column {
  /** column name */
  BranchId = 'branch_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "terms" */
export type Terms_Set_Input = {
  branch_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Terms_Stddev_Fields = {
  __typename?: 'terms_stddev_fields';
  branch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "terms" */
export type Terms_Stddev_Order_By = {
  branch_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Terms_Stddev_Pop_Fields = {
  __typename?: 'terms_stddev_pop_fields';
  branch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "terms" */
export type Terms_Stddev_Pop_Order_By = {
  branch_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Terms_Stddev_Samp_Fields = {
  __typename?: 'terms_stddev_samp_fields';
  branch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "terms" */
export type Terms_Stddev_Samp_Order_By = {
  branch_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Terms_Sum_Fields = {
  __typename?: 'terms_sum_fields';
  branch_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "terms" */
export type Terms_Sum_Order_By = {
  branch_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "terms" */
export enum Terms_Update_Column {
  /** column name */
  BranchId = 'branch_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Uuid = 'uuid'
}

/** aggregate var_pop on columns */
export type Terms_Var_Pop_Fields = {
  __typename?: 'terms_var_pop_fields';
  branch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "terms" */
export type Terms_Var_Pop_Order_By = {
  branch_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Terms_Var_Samp_Fields = {
  __typename?: 'terms_var_samp_fields';
  branch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "terms" */
export type Terms_Var_Samp_Order_By = {
  branch_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Terms_Variance_Fields = {
  __typename?: 'terms_variance_fields';
  branch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "terms" */
export type Terms_Variance_Order_By = {
  branch_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** columns and relationships of "translation_statuses" */
export type Translation_Statuses = {
  __typename?: 'translation_statuses';
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An object relationship */
  project: Projects;
  project_id: Scalars['Int'];
  /** An array relationship */
  translations: Array<Translations>;
  /** An aggregate relationship */
  translations_aggregate: Translations_Aggregate;
  uuid: Scalars['uuid'];
};


/** columns and relationships of "translation_statuses" */
export type Translation_StatusesTranslationsArgs = {
  distinct_on?: Maybe<Array<Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Translations_Order_By>>;
  where?: Maybe<Translations_Bool_Exp>;
};


/** columns and relationships of "translation_statuses" */
export type Translation_StatusesTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Translations_Order_By>>;
  where?: Maybe<Translations_Bool_Exp>;
};

/** aggregated selection of "translation_statuses" */
export type Translation_Statuses_Aggregate = {
  __typename?: 'translation_statuses_aggregate';
  aggregate?: Maybe<Translation_Statuses_Aggregate_Fields>;
  nodes: Array<Translation_Statuses>;
};

/** aggregate fields of "translation_statuses" */
export type Translation_Statuses_Aggregate_Fields = {
  __typename?: 'translation_statuses_aggregate_fields';
  avg?: Maybe<Translation_Statuses_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Translation_Statuses_Max_Fields>;
  min?: Maybe<Translation_Statuses_Min_Fields>;
  stddev?: Maybe<Translation_Statuses_Stddev_Fields>;
  stddev_pop?: Maybe<Translation_Statuses_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Translation_Statuses_Stddev_Samp_Fields>;
  sum?: Maybe<Translation_Statuses_Sum_Fields>;
  var_pop?: Maybe<Translation_Statuses_Var_Pop_Fields>;
  var_samp?: Maybe<Translation_Statuses_Var_Samp_Fields>;
  variance?: Maybe<Translation_Statuses_Variance_Fields>;
};


/** aggregate fields of "translation_statuses" */
export type Translation_Statuses_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Translation_Statuses_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "translation_statuses" */
export type Translation_Statuses_Aggregate_Order_By = {
  avg?: Maybe<Translation_Statuses_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Translation_Statuses_Max_Order_By>;
  min?: Maybe<Translation_Statuses_Min_Order_By>;
  stddev?: Maybe<Translation_Statuses_Stddev_Order_By>;
  stddev_pop?: Maybe<Translation_Statuses_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Translation_Statuses_Stddev_Samp_Order_By>;
  sum?: Maybe<Translation_Statuses_Sum_Order_By>;
  var_pop?: Maybe<Translation_Statuses_Var_Pop_Order_By>;
  var_samp?: Maybe<Translation_Statuses_Var_Samp_Order_By>;
  variance?: Maybe<Translation_Statuses_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "translation_statuses" */
export type Translation_Statuses_Arr_Rel_Insert_Input = {
  data: Array<Translation_Statuses_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Translation_Statuses_On_Conflict>;
};

/** aggregate avg on columns */
export type Translation_Statuses_Avg_Fields = {
  __typename?: 'translation_statuses_avg_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "translation_statuses" */
export type Translation_Statuses_Avg_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "translation_statuses". All fields are combined with a logical 'AND'. */
export type Translation_Statuses_Bool_Exp = {
  _and?: Maybe<Array<Translation_Statuses_Bool_Exp>>;
  _not?: Maybe<Translation_Statuses_Bool_Exp>;
  _or?: Maybe<Array<Translation_Statuses_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  project?: Maybe<Projects_Bool_Exp>;
  project_id?: Maybe<Int_Comparison_Exp>;
  translations?: Maybe<Translations_Bool_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "translation_statuses" */
export enum Translation_Statuses_Constraint {
  /** unique or primary key constraint */
  TranslationStatusesPkey = 'translation_statuses_pkey',
  /** unique or primary key constraint */
  TranslationStatusesUuidKey = 'translation_statuses_uuid_key'
}

/** input type for incrementing numeric columns in table "translation_statuses" */
export type Translation_Statuses_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  project_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "translation_statuses" */
export type Translation_Statuses_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  project?: Maybe<Projects_Obj_Rel_Insert_Input>;
  project_id?: Maybe<Scalars['Int']>;
  translations?: Maybe<Translations_Arr_Rel_Insert_Input>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Translation_Statuses_Max_Fields = {
  __typename?: 'translation_statuses_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "translation_statuses" */
export type Translation_Statuses_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Translation_Statuses_Min_Fields = {
  __typename?: 'translation_statuses_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "translation_statuses" */
export type Translation_Statuses_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** response of any mutation on the table "translation_statuses" */
export type Translation_Statuses_Mutation_Response = {
  __typename?: 'translation_statuses_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Translation_Statuses>;
};

/** input type for inserting object relation for remote table "translation_statuses" */
export type Translation_Statuses_Obj_Rel_Insert_Input = {
  data: Translation_Statuses_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Translation_Statuses_On_Conflict>;
};

/** on conflict condition type for table "translation_statuses" */
export type Translation_Statuses_On_Conflict = {
  constraint: Translation_Statuses_Constraint;
  update_columns?: Array<Translation_Statuses_Update_Column>;
  where?: Maybe<Translation_Statuses_Bool_Exp>;
};

/** Ordering options when selecting data from "translation_statuses". */
export type Translation_Statuses_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  project?: Maybe<Projects_Order_By>;
  project_id?: Maybe<Order_By>;
  translations_aggregate?: Maybe<Translations_Aggregate_Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: translation_statuses */
export type Translation_Statuses_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "translation_statuses" */
export enum Translation_Statuses_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "translation_statuses" */
export type Translation_Statuses_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Translation_Statuses_Stddev_Fields = {
  __typename?: 'translation_statuses_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "translation_statuses" */
export type Translation_Statuses_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Translation_Statuses_Stddev_Pop_Fields = {
  __typename?: 'translation_statuses_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "translation_statuses" */
export type Translation_Statuses_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Translation_Statuses_Stddev_Samp_Fields = {
  __typename?: 'translation_statuses_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "translation_statuses" */
export type Translation_Statuses_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Translation_Statuses_Sum_Fields = {
  __typename?: 'translation_statuses_sum_fields';
  id?: Maybe<Scalars['Int']>;
  project_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "translation_statuses" */
export type Translation_Statuses_Sum_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** update columns of table "translation_statuses" */
export enum Translation_Statuses_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  Uuid = 'uuid'
}

/** aggregate var_pop on columns */
export type Translation_Statuses_Var_Pop_Fields = {
  __typename?: 'translation_statuses_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "translation_statuses" */
export type Translation_Statuses_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Translation_Statuses_Var_Samp_Fields = {
  __typename?: 'translation_statuses_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "translation_statuses" */
export type Translation_Statuses_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Translation_Statuses_Variance_Fields = {
  __typename?: 'translation_statuses_variance_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "translation_statuses" */
export type Translation_Statuses_Variance_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** columns and relationships of "translations" */
export type Translations = {
  __typename?: 'translations';
  branch_language_id: Scalars['Int'];
  id: Scalars['Int'];
  /** An object relationship */
  project_language: Branch_Languages;
  /** An object relationship */
  status?: Maybe<Translation_Statuses>;
  status_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  term: Terms;
  term_id: Scalars['Int'];
  translation_value?: Maybe<Scalars['String']>;
  uuid: Scalars['uuid'];
};

/** aggregated selection of "translations" */
export type Translations_Aggregate = {
  __typename?: 'translations_aggregate';
  aggregate?: Maybe<Translations_Aggregate_Fields>;
  nodes: Array<Translations>;
};

/** aggregate fields of "translations" */
export type Translations_Aggregate_Fields = {
  __typename?: 'translations_aggregate_fields';
  avg?: Maybe<Translations_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Translations_Max_Fields>;
  min?: Maybe<Translations_Min_Fields>;
  stddev?: Maybe<Translations_Stddev_Fields>;
  stddev_pop?: Maybe<Translations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Translations_Stddev_Samp_Fields>;
  sum?: Maybe<Translations_Sum_Fields>;
  var_pop?: Maybe<Translations_Var_Pop_Fields>;
  var_samp?: Maybe<Translations_Var_Samp_Fields>;
  variance?: Maybe<Translations_Variance_Fields>;
};


/** aggregate fields of "translations" */
export type Translations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Translations_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "translations" */
export type Translations_Aggregate_Order_By = {
  avg?: Maybe<Translations_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Translations_Max_Order_By>;
  min?: Maybe<Translations_Min_Order_By>;
  stddev?: Maybe<Translations_Stddev_Order_By>;
  stddev_pop?: Maybe<Translations_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Translations_Stddev_Samp_Order_By>;
  sum?: Maybe<Translations_Sum_Order_By>;
  var_pop?: Maybe<Translations_Var_Pop_Order_By>;
  var_samp?: Maybe<Translations_Var_Samp_Order_By>;
  variance?: Maybe<Translations_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "translations" */
export type Translations_Arr_Rel_Insert_Input = {
  data: Array<Translations_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Translations_On_Conflict>;
};

/** aggregate avg on columns */
export type Translations_Avg_Fields = {
  __typename?: 'translations_avg_fields';
  branch_language_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  status_id?: Maybe<Scalars['Float']>;
  term_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "translations" */
export type Translations_Avg_Order_By = {
  branch_language_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  status_id?: Maybe<Order_By>;
  term_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "translations". All fields are combined with a logical 'AND'. */
export type Translations_Bool_Exp = {
  _and?: Maybe<Array<Translations_Bool_Exp>>;
  _not?: Maybe<Translations_Bool_Exp>;
  _or?: Maybe<Array<Translations_Bool_Exp>>;
  branch_language_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  project_language?: Maybe<Branch_Languages_Bool_Exp>;
  status?: Maybe<Translation_Statuses_Bool_Exp>;
  status_id?: Maybe<Int_Comparison_Exp>;
  term?: Maybe<Terms_Bool_Exp>;
  term_id?: Maybe<Int_Comparison_Exp>;
  translation_value?: Maybe<String_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "translations" */
export enum Translations_Constraint {
  /** unique or primary key constraint */
  TranslationsPkey = 'translations_pkey',
  /** unique or primary key constraint */
  TranslationsUuidKey = 'translations_uuid_key'
}

/** input type for incrementing numeric columns in table "translations" */
export type Translations_Inc_Input = {
  branch_language_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  status_id?: Maybe<Scalars['Int']>;
  term_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "translations" */
export type Translations_Insert_Input = {
  branch_language_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  project_language?: Maybe<Branch_Languages_Obj_Rel_Insert_Input>;
  status?: Maybe<Translation_Statuses_Obj_Rel_Insert_Input>;
  status_id?: Maybe<Scalars['Int']>;
  term?: Maybe<Terms_Obj_Rel_Insert_Input>;
  term_id?: Maybe<Scalars['Int']>;
  translation_value?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Translations_Max_Fields = {
  __typename?: 'translations_max_fields';
  branch_language_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  status_id?: Maybe<Scalars['Int']>;
  term_id?: Maybe<Scalars['Int']>;
  translation_value?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "translations" */
export type Translations_Max_Order_By = {
  branch_language_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  status_id?: Maybe<Order_By>;
  term_id?: Maybe<Order_By>;
  translation_value?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Translations_Min_Fields = {
  __typename?: 'translations_min_fields';
  branch_language_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  status_id?: Maybe<Scalars['Int']>;
  term_id?: Maybe<Scalars['Int']>;
  translation_value?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "translations" */
export type Translations_Min_Order_By = {
  branch_language_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  status_id?: Maybe<Order_By>;
  term_id?: Maybe<Order_By>;
  translation_value?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** response of any mutation on the table "translations" */
export type Translations_Mutation_Response = {
  __typename?: 'translations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Translations>;
};

/** on conflict condition type for table "translations" */
export type Translations_On_Conflict = {
  constraint: Translations_Constraint;
  update_columns?: Array<Translations_Update_Column>;
  where?: Maybe<Translations_Bool_Exp>;
};

/** Ordering options when selecting data from "translations". */
export type Translations_Order_By = {
  branch_language_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  project_language?: Maybe<Branch_Languages_Order_By>;
  status?: Maybe<Translation_Statuses_Order_By>;
  status_id?: Maybe<Order_By>;
  term?: Maybe<Terms_Order_By>;
  term_id?: Maybe<Order_By>;
  translation_value?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: translations */
export type Translations_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "translations" */
export enum Translations_Select_Column {
  /** column name */
  BranchLanguageId = 'branch_language_id',
  /** column name */
  Id = 'id',
  /** column name */
  StatusId = 'status_id',
  /** column name */
  TermId = 'term_id',
  /** column name */
  TranslationValue = 'translation_value',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "translations" */
export type Translations_Set_Input = {
  branch_language_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  status_id?: Maybe<Scalars['Int']>;
  term_id?: Maybe<Scalars['Int']>;
  translation_value?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Translations_Stddev_Fields = {
  __typename?: 'translations_stddev_fields';
  branch_language_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  status_id?: Maybe<Scalars['Float']>;
  term_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "translations" */
export type Translations_Stddev_Order_By = {
  branch_language_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  status_id?: Maybe<Order_By>;
  term_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Translations_Stddev_Pop_Fields = {
  __typename?: 'translations_stddev_pop_fields';
  branch_language_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  status_id?: Maybe<Scalars['Float']>;
  term_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "translations" */
export type Translations_Stddev_Pop_Order_By = {
  branch_language_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  status_id?: Maybe<Order_By>;
  term_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Translations_Stddev_Samp_Fields = {
  __typename?: 'translations_stddev_samp_fields';
  branch_language_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  status_id?: Maybe<Scalars['Float']>;
  term_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "translations" */
export type Translations_Stddev_Samp_Order_By = {
  branch_language_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  status_id?: Maybe<Order_By>;
  term_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Translations_Sum_Fields = {
  __typename?: 'translations_sum_fields';
  branch_language_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  status_id?: Maybe<Scalars['Int']>;
  term_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "translations" */
export type Translations_Sum_Order_By = {
  branch_language_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  status_id?: Maybe<Order_By>;
  term_id?: Maybe<Order_By>;
};

/** update columns of table "translations" */
export enum Translations_Update_Column {
  /** column name */
  BranchLanguageId = 'branch_language_id',
  /** column name */
  Id = 'id',
  /** column name */
  StatusId = 'status_id',
  /** column name */
  TermId = 'term_id',
  /** column name */
  TranslationValue = 'translation_value',
  /** column name */
  Uuid = 'uuid'
}

/** aggregate var_pop on columns */
export type Translations_Var_Pop_Fields = {
  __typename?: 'translations_var_pop_fields';
  branch_language_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  status_id?: Maybe<Scalars['Float']>;
  term_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "translations" */
export type Translations_Var_Pop_Order_By = {
  branch_language_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  status_id?: Maybe<Order_By>;
  term_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Translations_Var_Samp_Fields = {
  __typename?: 'translations_var_samp_fields';
  branch_language_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  status_id?: Maybe<Scalars['Float']>;
  term_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "translations" */
export type Translations_Var_Samp_Order_By = {
  branch_language_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  status_id?: Maybe<Order_By>;
  term_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Translations_Variance_Fields = {
  __typename?: 'translations_variance_fields';
  branch_language_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  status_id?: Maybe<Scalars['Float']>;
  term_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "translations" */
export type Translations_Variance_Order_By = {
  branch_language_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  status_id?: Maybe<Order_By>;
  term_id?: Maybe<Order_By>;
};

/** columns and relationships of "user_project_link" */
export type User_Project_Link = {
  __typename?: 'user_project_link';
  id: Scalars['Int'];
  /** An object relationship */
  project: Projects;
  project_id: Scalars['Int'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int'];
  uuid: Scalars['uuid'];
};

/** aggregated selection of "user_project_link" */
export type User_Project_Link_Aggregate = {
  __typename?: 'user_project_link_aggregate';
  aggregate?: Maybe<User_Project_Link_Aggregate_Fields>;
  nodes: Array<User_Project_Link>;
};

/** aggregate fields of "user_project_link" */
export type User_Project_Link_Aggregate_Fields = {
  __typename?: 'user_project_link_aggregate_fields';
  avg?: Maybe<User_Project_Link_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Project_Link_Max_Fields>;
  min?: Maybe<User_Project_Link_Min_Fields>;
  stddev?: Maybe<User_Project_Link_Stddev_Fields>;
  stddev_pop?: Maybe<User_Project_Link_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Project_Link_Stddev_Samp_Fields>;
  sum?: Maybe<User_Project_Link_Sum_Fields>;
  var_pop?: Maybe<User_Project_Link_Var_Pop_Fields>;
  var_samp?: Maybe<User_Project_Link_Var_Samp_Fields>;
  variance?: Maybe<User_Project_Link_Variance_Fields>;
};


/** aggregate fields of "user_project_link" */
export type User_Project_Link_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Project_Link_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_project_link" */
export type User_Project_Link_Aggregate_Order_By = {
  avg?: Maybe<User_Project_Link_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Project_Link_Max_Order_By>;
  min?: Maybe<User_Project_Link_Min_Order_By>;
  stddev?: Maybe<User_Project_Link_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Project_Link_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Project_Link_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Project_Link_Sum_Order_By>;
  var_pop?: Maybe<User_Project_Link_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Project_Link_Var_Samp_Order_By>;
  variance?: Maybe<User_Project_Link_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_project_link" */
export type User_Project_Link_Arr_Rel_Insert_Input = {
  data: Array<User_Project_Link_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<User_Project_Link_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Project_Link_Avg_Fields = {
  __typename?: 'user_project_link_avg_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_project_link" */
export type User_Project_Link_Avg_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_project_link". All fields are combined with a logical 'AND'. */
export type User_Project_Link_Bool_Exp = {
  _and?: Maybe<Array<User_Project_Link_Bool_Exp>>;
  _not?: Maybe<User_Project_Link_Bool_Exp>;
  _or?: Maybe<Array<User_Project_Link_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  project?: Maybe<Projects_Bool_Exp>;
  project_id?: Maybe<Int_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_project_link" */
export enum User_Project_Link_Constraint {
  /** unique or primary key constraint */
  UserProjectLinkPkey = 'user_project_link_pkey',
  /** unique or primary key constraint */
  UserProjectLinkUuidKey = 'user_project_link_uuid_key'
}

/** input type for incrementing numeric columns in table "user_project_link" */
export type User_Project_Link_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  project_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_project_link" */
export type User_Project_Link_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  project?: Maybe<Projects_Obj_Rel_Insert_Input>;
  project_id?: Maybe<Scalars['Int']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Project_Link_Max_Fields = {
  __typename?: 'user_project_link_max_fields';
  id?: Maybe<Scalars['Int']>;
  project_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "user_project_link" */
export type User_Project_Link_Max_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Project_Link_Min_Fields = {
  __typename?: 'user_project_link_min_fields';
  id?: Maybe<Scalars['Int']>;
  project_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "user_project_link" */
export type User_Project_Link_Min_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** response of any mutation on the table "user_project_link" */
export type User_Project_Link_Mutation_Response = {
  __typename?: 'user_project_link_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Project_Link>;
};

/** on conflict condition type for table "user_project_link" */
export type User_Project_Link_On_Conflict = {
  constraint: User_Project_Link_Constraint;
  update_columns?: Array<User_Project_Link_Update_Column>;
  where?: Maybe<User_Project_Link_Bool_Exp>;
};

/** Ordering options when selecting data from "user_project_link". */
export type User_Project_Link_Order_By = {
  id?: Maybe<Order_By>;
  project?: Maybe<Projects_Order_By>;
  project_id?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: user_project_link */
export type User_Project_Link_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user_project_link" */
export enum User_Project_Link_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "user_project_link" */
export type User_Project_Link_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  project_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type User_Project_Link_Stddev_Fields = {
  __typename?: 'user_project_link_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_project_link" */
export type User_Project_Link_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Project_Link_Stddev_Pop_Fields = {
  __typename?: 'user_project_link_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_project_link" */
export type User_Project_Link_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Project_Link_Stddev_Samp_Fields = {
  __typename?: 'user_project_link_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_project_link" */
export type User_Project_Link_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Project_Link_Sum_Fields = {
  __typename?: 'user_project_link_sum_fields';
  id?: Maybe<Scalars['Int']>;
  project_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user_project_link" */
export type User_Project_Link_Sum_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "user_project_link" */
export enum User_Project_Link_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Uuid = 'uuid'
}

/** aggregate var_pop on columns */
export type User_Project_Link_Var_Pop_Fields = {
  __typename?: 'user_project_link_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_project_link" */
export type User_Project_Link_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Project_Link_Var_Samp_Fields = {
  __typename?: 'user_project_link_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_project_link" */
export type User_Project_Link_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Project_Link_Variance_Fields = {
  __typename?: 'user_project_link_variance_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_project_link" */
export type User_Project_Link_Variance_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  company_links: Array<Company_User_Link>;
  /** An aggregate relationship */
  company_links_aggregate: Company_User_Link_Aggregate;
  email: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['Int'];
  last_name: Scalars['String'];
  password: Scalars['String'];
  /** An array relationship */
  project_links: Array<User_Project_Link>;
  /** An aggregate relationship */
  project_links_aggregate: User_Project_Link_Aggregate;
  uuid: Scalars['uuid'];
};


/** columns and relationships of "users" */
export type UsersCompany_LinksArgs = {
  distinct_on?: Maybe<Array<Company_User_Link_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Company_User_Link_Order_By>>;
  where?: Maybe<Company_User_Link_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersCompany_Links_AggregateArgs = {
  distinct_on?: Maybe<Array<Company_User_Link_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Company_User_Link_Order_By>>;
  where?: Maybe<Company_User_Link_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersProject_LinksArgs = {
  distinct_on?: Maybe<Array<User_Project_Link_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Project_Link_Order_By>>;
  where?: Maybe<User_Project_Link_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersProject_Links_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Project_Link_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Project_Link_Order_By>>;
  where?: Maybe<User_Project_Link_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Users_Bool_Exp>>;
  company_links?: Maybe<Company_User_Link_Bool_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  first_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  last_name?: Maybe<String_Comparison_Exp>;
  password?: Maybe<String_Comparison_Exp>;
  project_links?: Maybe<User_Project_Link_Bool_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey',
  /** unique or primary key constraint */
  UsersUuidKey = 'users_uuid_key'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  company_links?: Maybe<Company_User_Link_Arr_Rel_Insert_Input>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  project_links?: Maybe<User_Project_Link_Arr_Rel_Insert_Input>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  company_links_aggregate?: Maybe<Company_User_Link_Aggregate_Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  project_links_aggregate?: Maybe<User_Project_Link_Aggregate_Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Password = 'password',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Password = 'password',
  /** column name */
  Uuid = 'uuid'
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type AddCompanyMutationVariables = Exact<{
  companyName?: Maybe<Scalars['String']>;
}>;


export type AddCompanyMutation = { __typename?: 'mutation_root', insert_companies?: { __typename?: 'companies_mutation_response', returning: Array<{ __typename?: 'companies', uuid: any }> } | null | undefined };

export type AddProjectMutationVariables = Exact<{
  projectName?: Maybe<Scalars['String']>;
  companyId?: Maybe<Scalars['Int']>;
}>;


export type AddProjectMutation = { __typename?: 'mutation_root', insert_projects?: { __typename?: 'projects_mutation_response', returning: Array<{ __typename?: 'projects', uuid: any }> } | null | undefined };

export type AddProjectLanguageLinksMutationVariables = Exact<{
  branchLanguages: Array<Branch_Languages_Insert_Input> | Branch_Languages_Insert_Input;
}>;


export type AddProjectLanguageLinksMutation = { __typename?: 'mutation_root', insert_branch_languages?: { __typename?: 'branch_languages_mutation_response', returning: Array<{ __typename?: 'branch_languages', uuid: any }> } | null | undefined };

export type GetBranchQueryVariables = Exact<{
  branchUuid?: Maybe<Scalars['uuid']>;
}>;


export type GetBranchQuery = { __typename?: 'query_root', branches: Array<{ __typename?: 'branches', id: number, uuid: any, name: string, branch_languages: Array<{ __typename?: 'branch_languages', uuid: any, language: { __typename?: 'languages', iso_code: string, name: string, uuid: any } }>, project: { __typename?: 'projects', id: number, uuid: any, name: string, company: { __typename?: 'companies', id: number, uuid: any, name: string } } }> };

export type GetCompaniesAndProjectsQueryVariables = Exact<{
  userUuid?: Maybe<Scalars['uuid']>;
}>;


export type GetCompaniesAndProjectsQuery = { __typename?: 'query_root', companies: Array<{ __typename?: 'companies', name: string, uuid: any, id: number, projects: Array<{ __typename?: 'projects', name: string, uuid: any, id: number, branches: Array<{ __typename?: 'branches', id: number, uuid: any, name: string, branch_languages: Array<{ __typename?: 'branch_languages', uuid: any, language: { __typename?: 'languages', iso_code: string, uuid: any, id: number } }> }> }> }> };

export type GetCompanyQueryVariables = Exact<{
  companyUuid?: Maybe<Scalars['uuid']>;
}>;


export type GetCompanyQuery = { __typename?: 'query_root', companies: Array<{ __typename?: 'companies', name: string, uuid: any, projects: Array<{ __typename?: 'projects', name: string, uuid: any }>, user_links: Array<{ __typename?: 'company_user_link', user: { __typename?: 'users', uuid: any, first_name: string, last_name: string, email: string } }> }> };

export type GetLanguagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLanguagesQuery = { __typename?: 'query_root', languages: Array<{ __typename?: 'languages', name: string, iso_code: string, id: number, uuid: any }> };

export type GetProjectQueryVariables = Exact<{
  projectUuid?: Maybe<Scalars['uuid']>;
}>;


export type GetProjectQuery = { __typename?: 'query_root', projects: Array<{ __typename?: 'projects', name: string, statuses: Array<{ __typename?: 'translation_statuses', uuid: any, name: string }>, branches: Array<{ __typename?: 'branches', id: number, uuid: any, name: string, branch_languages: Array<{ __typename?: 'branch_languages', uuid: any, language: { __typename?: 'languages', iso_code: string, name: string, uuid: any } }> }>, user_links: Array<{ __typename?: 'user_project_link', uuid: any, user: { __typename?: 'users', first_name: string, last_name: string, email: string, uuid: any } }>, company: { __typename?: 'companies', name: string, uuid: any } }> };

export type GetTranslationsQueryVariables = Exact<{
  branchUuid?: Maybe<Scalars['uuid']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type GetTranslationsQuery = { __typename?: 'query_root', terms: Array<{ __typename?: 'terms', key: string, description?: string | null | undefined, uuid: any, id: number, translations: Array<{ __typename?: 'translations', translation_value?: string | null | undefined, uuid: any, id: number, status?: { __typename?: 'translation_statuses', name: string, uuid: any, id: number } | null | undefined, project_language: { __typename?: 'branch_languages', language: { __typename?: 'languages', iso_code: string, id: number, uuid: any } } }> }>, terms_aggregate: { __typename?: 'terms_aggregate', aggregate?: { __typename?: 'terms_aggregate_fields', count: number } | null | undefined } };

export type GetTranslationsByLanguageCodesQueryVariables = Exact<{
  branchUuid?: Maybe<Scalars['uuid']>;
  languageCodes?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type GetTranslationsByLanguageCodesQuery = { __typename?: 'query_root', terms: Array<{ __typename?: 'terms', key: string, description?: string | null | undefined, uuid: any, id: number, translations: Array<{ __typename?: 'translations', translation_value?: string | null | undefined, uuid: any, id: number, status?: { __typename?: 'translation_statuses', name: string, uuid: any, id: number } | null | undefined, project_language: { __typename?: 'branch_languages', language: { __typename?: 'languages', iso_code: string, id: number, uuid: any } } }> }>, terms_aggregate: { __typename?: 'terms_aggregate', aggregate?: { __typename?: 'terms_aggregate_fields', count: number } | null | undefined } };

export type UpdateTranslationValueMutationVariables = Exact<{
  branchUuid?: Maybe<Scalars['uuid']>;
  languageCode?: Maybe<Scalars['String']>;
  translationKey?: Maybe<Scalars['String']>;
  translationValue?: Maybe<Scalars['String']>;
}>;


export type UpdateTranslationValueMutation = { __typename?: 'mutation_root', update_translations?: { __typename?: 'translations_mutation_response', affected_rows: number } | null | undefined };


export const AddCompanyDocument = `
    mutation addCompany($companyName: String) {
  insert_companies(objects: {name: $companyName}) {
    returning {
      uuid
    }
  }
}
    `;
export const useAddCompanyMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<AddCompanyMutation, TError, AddCompanyMutationVariables, TContext>
    ) =>
    useMutation<AddCompanyMutation, TError, AddCompanyMutationVariables, TContext>(
      (variables?: AddCompanyMutationVariables) => fetcher<AddCompanyMutation, AddCompanyMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, AddCompanyDocument, variables)(),
      options
    );
export const AddProjectDocument = `
    mutation addProject($projectName: String, $companyId: Int) {
  insert_projects(objects: {name: $projectName, company_id: $companyId}) {
    returning {
      uuid
    }
  }
}
    `;
export const useAddProjectMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<AddProjectMutation, TError, AddProjectMutationVariables, TContext>
    ) =>
    useMutation<AddProjectMutation, TError, AddProjectMutationVariables, TContext>(
      (variables?: AddProjectMutationVariables) => fetcher<AddProjectMutation, AddProjectMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, AddProjectDocument, variables)(),
      options
    );
export const AddProjectLanguageLinksDocument = `
    mutation addProjectLanguageLinks($branchLanguages: [branch_languages_insert_input!]!) {
  insert_branch_languages(objects: $branchLanguages) {
    returning {
      uuid
    }
  }
}
    `;
export const useAddProjectLanguageLinksMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<AddProjectLanguageLinksMutation, TError, AddProjectLanguageLinksMutationVariables, TContext>
    ) =>
    useMutation<AddProjectLanguageLinksMutation, TError, AddProjectLanguageLinksMutationVariables, TContext>(
      (variables?: AddProjectLanguageLinksMutationVariables) => fetcher<AddProjectLanguageLinksMutation, AddProjectLanguageLinksMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, AddProjectLanguageLinksDocument, variables)(),
      options
    );
export const GetBranchDocument = `
    query getBranch($branchUuid: uuid) {
  branches(where: {uuid: {_eq: $branchUuid}}) {
    id
    uuid
    name
    branch_languages {
      language {
        iso_code
        name
        uuid
      }
      uuid
    }
    project {
      id
      uuid
      name
      company {
        id
        uuid
        name
      }
    }
  }
}
    `;
export const useGetBranchQuery = <
      TData = GetBranchQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables?: GetBranchQueryVariables,
      options?: UseQueryOptions<GetBranchQuery, TError, TData>
    ) =>
    useQuery<GetBranchQuery, TError, TData>(
      variables === undefined ? ['getBranch'] : ['getBranch', variables],
      fetcher<GetBranchQuery, GetBranchQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, GetBranchDocument, variables),
      options
    );
useGetBranchQuery.getKey = (variables?: GetBranchQueryVariables) => variables === undefined ? ['getBranch'] : ['getBranch', variables];

export const GetCompaniesAndProjectsDocument = `
    query getCompaniesAndProjects($userUuid: uuid) {
  companies(where: {projects: {user_links: {user: {uuid: {_eq: $userUuid}}}}}) {
    name
    uuid
    id
    projects {
      name
      uuid
      id
      branches {
        id
        uuid
        name
        branch_languages {
          uuid
          language {
            iso_code
            uuid
            id
          }
        }
      }
      name
      uuid
      id
    }
  }
}
    `;
export const useGetCompaniesAndProjectsQuery = <
      TData = GetCompaniesAndProjectsQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables?: GetCompaniesAndProjectsQueryVariables,
      options?: UseQueryOptions<GetCompaniesAndProjectsQuery, TError, TData>
    ) =>
    useQuery<GetCompaniesAndProjectsQuery, TError, TData>(
      variables === undefined ? ['getCompaniesAndProjects'] : ['getCompaniesAndProjects', variables],
      fetcher<GetCompaniesAndProjectsQuery, GetCompaniesAndProjectsQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, GetCompaniesAndProjectsDocument, variables),
      options
    );
useGetCompaniesAndProjectsQuery.getKey = (variables?: GetCompaniesAndProjectsQueryVariables) => variables === undefined ? ['getCompaniesAndProjects'] : ['getCompaniesAndProjects', variables];

export const GetCompanyDocument = `
    query getCompany($companyUuid: uuid) {
  companies(where: {uuid: {_eq: $companyUuid}}) {
    name
    uuid
    projects {
      name
      uuid
    }
    user_links {
      user {
        uuid
        first_name
        last_name
        email
      }
    }
  }
}
    `;
export const useGetCompanyQuery = <
      TData = GetCompanyQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables?: GetCompanyQueryVariables,
      options?: UseQueryOptions<GetCompanyQuery, TError, TData>
    ) =>
    useQuery<GetCompanyQuery, TError, TData>(
      variables === undefined ? ['getCompany'] : ['getCompany', variables],
      fetcher<GetCompanyQuery, GetCompanyQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, GetCompanyDocument, variables),
      options
    );
useGetCompanyQuery.getKey = (variables?: GetCompanyQueryVariables) => variables === undefined ? ['getCompany'] : ['getCompany', variables];

export const GetLanguagesDocument = `
    query getLanguages {
  languages {
    name
    iso_code
    id
    uuid
  }
}
    `;
export const useGetLanguagesQuery = <
      TData = GetLanguagesQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables?: GetLanguagesQueryVariables,
      options?: UseQueryOptions<GetLanguagesQuery, TError, TData>
    ) =>
    useQuery<GetLanguagesQuery, TError, TData>(
      variables === undefined ? ['getLanguages'] : ['getLanguages', variables],
      fetcher<GetLanguagesQuery, GetLanguagesQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, GetLanguagesDocument, variables),
      options
    );
useGetLanguagesQuery.getKey = (variables?: GetLanguagesQueryVariables) => variables === undefined ? ['getLanguages'] : ['getLanguages', variables];

export const GetProjectDocument = `
    query getProject($projectUuid: uuid) {
  projects(where: {uuid: {_eq: $projectUuid}}) {
    name
    statuses {
      uuid
      name
    }
    branches {
      id
      uuid
      name
      branch_languages {
        language {
          iso_code
          name
          uuid
        }
        uuid
      }
    }
    user_links {
      user {
        first_name
        last_name
        email
        uuid
      }
      uuid
    }
    company {
      name
      uuid
    }
  }
}
    `;
export const useGetProjectQuery = <
      TData = GetProjectQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables?: GetProjectQueryVariables,
      options?: UseQueryOptions<GetProjectQuery, TError, TData>
    ) =>
    useQuery<GetProjectQuery, TError, TData>(
      variables === undefined ? ['getProject'] : ['getProject', variables],
      fetcher<GetProjectQuery, GetProjectQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, GetProjectDocument, variables),
      options
    );
useGetProjectQuery.getKey = (variables?: GetProjectQueryVariables) => variables === undefined ? ['getProject'] : ['getProject', variables];

export const GetTranslationsDocument = `
    query getTranslations($branchUuid: uuid, $offset: Int) {
  terms(where: {branch: {uuid: {_eq: $branchUuid}}}, limit: 100, offset: $offset) {
    key
    description
    translations {
      translation_value
      status {
        name
        uuid
        id
      }
      uuid
      id
      project_language {
        language {
          iso_code
          id
          uuid
        }
      }
    }
    uuid
    id
  }
  terms_aggregate(
    where: {branch: {uuid: {_eq: $branchUuid}}}
    limit: 100
    offset: $offset
  ) {
    aggregate {
      count
    }
  }
}
    `;
export const useGetTranslationsQuery = <
      TData = GetTranslationsQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables?: GetTranslationsQueryVariables,
      options?: UseQueryOptions<GetTranslationsQuery, TError, TData>
    ) =>
    useQuery<GetTranslationsQuery, TError, TData>(
      variables === undefined ? ['getTranslations'] : ['getTranslations', variables],
      fetcher<GetTranslationsQuery, GetTranslationsQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, GetTranslationsDocument, variables),
      options
    );
useGetTranslationsQuery.getKey = (variables?: GetTranslationsQueryVariables) => variables === undefined ? ['getTranslations'] : ['getTranslations', variables];

export const GetTranslationsByLanguageCodesDocument = `
    query getTranslationsByLanguageCodes($branchUuid: uuid, $languageCodes: [String!], $offset: Int) {
  terms(where: {branch: {uuid: {_eq: $branchUuid}}}, limit: 100, offset: $offset) {
    key
    description
    translations(
      where: {project_language: {language: {iso_code: {_in: $languageCodes}}}}
    ) {
      translation_value
      status {
        name
        uuid
        id
      }
      uuid
      id
      project_language {
        language {
          iso_code
          id
          uuid
        }
      }
    }
    uuid
    id
  }
  terms_aggregate(
    where: {branch: {uuid: {_eq: $branchUuid}}}
    limit: 100
    offset: $offset
  ) {
    aggregate {
      count
    }
  }
}
    `;
export const useGetTranslationsByLanguageCodesQuery = <
      TData = GetTranslationsByLanguageCodesQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables?: GetTranslationsByLanguageCodesQueryVariables,
      options?: UseQueryOptions<GetTranslationsByLanguageCodesQuery, TError, TData>
    ) =>
    useQuery<GetTranslationsByLanguageCodesQuery, TError, TData>(
      variables === undefined ? ['getTranslationsByLanguageCodes'] : ['getTranslationsByLanguageCodes', variables],
      fetcher<GetTranslationsByLanguageCodesQuery, GetTranslationsByLanguageCodesQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, GetTranslationsByLanguageCodesDocument, variables),
      options
    );
useGetTranslationsByLanguageCodesQuery.getKey = (variables?: GetTranslationsByLanguageCodesQueryVariables) => variables === undefined ? ['getTranslationsByLanguageCodes'] : ['getTranslationsByLanguageCodes', variables];

export const UpdateTranslationValueDocument = `
    mutation updateTranslationValue($branchUuid: uuid, $languageCode: String, $translationKey: String, $translationValue: String) {
  update_translations(
    where: {project_language: {language: {iso_code: {_eq: $languageCode}}, branch: {uuid: {_eq: $branchUuid}}}, term: {key: {_eq: $translationKey}}}
    _set: {translation_value: $translationValue}
  ) {
    affected_rows
  }
}
    `;
export const useUpdateTranslationValueMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<UpdateTranslationValueMutation, TError, UpdateTranslationValueMutationVariables, TContext>
    ) =>
    useMutation<UpdateTranslationValueMutation, TError, UpdateTranslationValueMutationVariables, TContext>(
      (variables?: UpdateTranslationValueMutationVariables) => fetcher<UpdateTranslationValueMutation, UpdateTranslationValueMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, UpdateTranslationValueDocument, variables)(),
      options
    );