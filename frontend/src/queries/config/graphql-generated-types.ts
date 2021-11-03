import { useQuery, UseQueryOptions } from 'react-query';
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
  CompaniesIdKey = 'companies_id_key',
  /** unique or primary key constraint */
  CompaniesPkey = 'companies_pkey'
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
  CompanyUserLinkIdKey = 'company_user_link_id_key',
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
  project_links: Array<Project_Language_Link>;
  /** An aggregate relationship */
  project_links_aggregate: Project_Language_Link_Aggregate;
  uuid: Scalars['uuid'];
};


/** columns and relationships of "languages" */
export type LanguagesProject_LinksArgs = {
  distinct_on?: Maybe<Array<Project_Language_Link_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Language_Link_Order_By>>;
  where?: Maybe<Project_Language_Link_Bool_Exp>;
};


/** columns and relationships of "languages" */
export type LanguagesProject_Links_AggregateArgs = {
  distinct_on?: Maybe<Array<Project_Language_Link_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Language_Link_Order_By>>;
  where?: Maybe<Project_Language_Link_Bool_Exp>;
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
  project_links?: Maybe<Project_Language_Link_Bool_Exp>;
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
  project_links?: Maybe<Project_Language_Link_Arr_Rel_Insert_Input>;
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
  project_links_aggregate?: Maybe<Project_Language_Link_Aggregate_Order_By>;
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
  /** delete data from the table: "project_language_link" */
  delete_project_language_link?: Maybe<Project_Language_Link_Mutation_Response>;
  /** delete single row from the table: "project_language_link" */
  delete_project_language_link_by_pk?: Maybe<Project_Language_Link>;
  /** delete data from the table: "project_terms" */
  delete_project_terms?: Maybe<Project_Terms_Mutation_Response>;
  /** delete single row from the table: "project_terms" */
  delete_project_terms_by_pk?: Maybe<Project_Terms>;
  /** delete data from the table: "projects" */
  delete_projects?: Maybe<Projects_Mutation_Response>;
  /** delete single row from the table: "projects" */
  delete_projects_by_pk?: Maybe<Projects>;
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
  /** insert data into the table: "project_language_link" */
  insert_project_language_link?: Maybe<Project_Language_Link_Mutation_Response>;
  /** insert a single row into the table: "project_language_link" */
  insert_project_language_link_one?: Maybe<Project_Language_Link>;
  /** insert data into the table: "project_terms" */
  insert_project_terms?: Maybe<Project_Terms_Mutation_Response>;
  /** insert a single row into the table: "project_terms" */
  insert_project_terms_one?: Maybe<Project_Terms>;
  /** insert data into the table: "projects" */
  insert_projects?: Maybe<Projects_Mutation_Response>;
  /** insert a single row into the table: "projects" */
  insert_projects_one?: Maybe<Projects>;
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
  /** update data of the table: "project_language_link" */
  update_project_language_link?: Maybe<Project_Language_Link_Mutation_Response>;
  /** update single row of the table: "project_language_link" */
  update_project_language_link_by_pk?: Maybe<Project_Language_Link>;
  /** update data of the table: "project_terms" */
  update_project_terms?: Maybe<Project_Terms_Mutation_Response>;
  /** update single row of the table: "project_terms" */
  update_project_terms_by_pk?: Maybe<Project_Terms>;
  /** update data of the table: "projects" */
  update_projects?: Maybe<Projects_Mutation_Response>;
  /** update single row of the table: "projects" */
  update_projects_by_pk?: Maybe<Projects>;
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
export type Mutation_RootDelete_Project_Language_LinkArgs = {
  where: Project_Language_Link_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Project_Language_Link_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Project_TermsArgs = {
  where: Project_Terms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Project_Terms_By_PkArgs = {
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
export type Mutation_RootInsert_Project_Language_LinkArgs = {
  objects: Array<Project_Language_Link_Insert_Input>;
  on_conflict?: Maybe<Project_Language_Link_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Project_Language_Link_OneArgs = {
  object: Project_Language_Link_Insert_Input;
  on_conflict?: Maybe<Project_Language_Link_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Project_TermsArgs = {
  objects: Array<Project_Terms_Insert_Input>;
  on_conflict?: Maybe<Project_Terms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Project_Terms_OneArgs = {
  object: Project_Terms_Insert_Input;
  on_conflict?: Maybe<Project_Terms_On_Conflict>;
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
export type Mutation_RootUpdate_Project_Language_LinkArgs = {
  _inc?: Maybe<Project_Language_Link_Inc_Input>;
  _set?: Maybe<Project_Language_Link_Set_Input>;
  where: Project_Language_Link_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Project_Language_Link_By_PkArgs = {
  _inc?: Maybe<Project_Language_Link_Inc_Input>;
  _set?: Maybe<Project_Language_Link_Set_Input>;
  pk_columns: Project_Language_Link_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Project_TermsArgs = {
  _inc?: Maybe<Project_Terms_Inc_Input>;
  _set?: Maybe<Project_Terms_Set_Input>;
  where: Project_Terms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Project_Terms_By_PkArgs = {
  _inc?: Maybe<Project_Terms_Inc_Input>;
  _set?: Maybe<Project_Terms_Set_Input>;
  pk_columns: Project_Terms_Pk_Columns_Input;
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

/** columns and relationships of "project_language_link" */
export type Project_Language_Link = {
  __typename?: 'project_language_link';
  id: Scalars['Int'];
  /** An object relationship */
  language: Languages;
  language_id: Scalars['Int'];
  /** An object relationship */
  project: Projects;
  project_id: Scalars['Int'];
  /** An array relationship */
  translation: Array<Translations>;
  /** An aggregate relationship */
  translation_aggregate: Translations_Aggregate;
  uuid: Scalars['uuid'];
};


/** columns and relationships of "project_language_link" */
export type Project_Language_LinkTranslationArgs = {
  distinct_on?: Maybe<Array<Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Translations_Order_By>>;
  where?: Maybe<Translations_Bool_Exp>;
};


/** columns and relationships of "project_language_link" */
export type Project_Language_LinkTranslation_AggregateArgs = {
  distinct_on?: Maybe<Array<Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Translations_Order_By>>;
  where?: Maybe<Translations_Bool_Exp>;
};

/** aggregated selection of "project_language_link" */
export type Project_Language_Link_Aggregate = {
  __typename?: 'project_language_link_aggregate';
  aggregate?: Maybe<Project_Language_Link_Aggregate_Fields>;
  nodes: Array<Project_Language_Link>;
};

/** aggregate fields of "project_language_link" */
export type Project_Language_Link_Aggregate_Fields = {
  __typename?: 'project_language_link_aggregate_fields';
  avg?: Maybe<Project_Language_Link_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Project_Language_Link_Max_Fields>;
  min?: Maybe<Project_Language_Link_Min_Fields>;
  stddev?: Maybe<Project_Language_Link_Stddev_Fields>;
  stddev_pop?: Maybe<Project_Language_Link_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Project_Language_Link_Stddev_Samp_Fields>;
  sum?: Maybe<Project_Language_Link_Sum_Fields>;
  var_pop?: Maybe<Project_Language_Link_Var_Pop_Fields>;
  var_samp?: Maybe<Project_Language_Link_Var_Samp_Fields>;
  variance?: Maybe<Project_Language_Link_Variance_Fields>;
};


/** aggregate fields of "project_language_link" */
export type Project_Language_Link_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Project_Language_Link_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "project_language_link" */
export type Project_Language_Link_Aggregate_Order_By = {
  avg?: Maybe<Project_Language_Link_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Project_Language_Link_Max_Order_By>;
  min?: Maybe<Project_Language_Link_Min_Order_By>;
  stddev?: Maybe<Project_Language_Link_Stddev_Order_By>;
  stddev_pop?: Maybe<Project_Language_Link_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Project_Language_Link_Stddev_Samp_Order_By>;
  sum?: Maybe<Project_Language_Link_Sum_Order_By>;
  var_pop?: Maybe<Project_Language_Link_Var_Pop_Order_By>;
  var_samp?: Maybe<Project_Language_Link_Var_Samp_Order_By>;
  variance?: Maybe<Project_Language_Link_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "project_language_link" */
export type Project_Language_Link_Arr_Rel_Insert_Input = {
  data: Array<Project_Language_Link_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Project_Language_Link_On_Conflict>;
};

/** aggregate avg on columns */
export type Project_Language_Link_Avg_Fields = {
  __typename?: 'project_language_link_avg_fields';
  id?: Maybe<Scalars['Float']>;
  language_id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "project_language_link" */
export type Project_Language_Link_Avg_Order_By = {
  id?: Maybe<Order_By>;
  language_id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "project_language_link". All fields are combined with a logical 'AND'. */
export type Project_Language_Link_Bool_Exp = {
  _and?: Maybe<Array<Project_Language_Link_Bool_Exp>>;
  _not?: Maybe<Project_Language_Link_Bool_Exp>;
  _or?: Maybe<Array<Project_Language_Link_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  language?: Maybe<Languages_Bool_Exp>;
  language_id?: Maybe<Int_Comparison_Exp>;
  project?: Maybe<Projects_Bool_Exp>;
  project_id?: Maybe<Int_Comparison_Exp>;
  translation?: Maybe<Translations_Bool_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "project_language_link" */
export enum Project_Language_Link_Constraint {
  /** unique or primary key constraint */
  ProjectLanguageIdKey = 'project_language_id_key',
  /** unique or primary key constraint */
  ProjectLanguagePkey = 'project_language_pkey'
}

/** input type for incrementing numeric columns in table "project_language_link" */
export type Project_Language_Link_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  language_id?: Maybe<Scalars['Int']>;
  project_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "project_language_link" */
export type Project_Language_Link_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  language?: Maybe<Languages_Obj_Rel_Insert_Input>;
  language_id?: Maybe<Scalars['Int']>;
  project?: Maybe<Projects_Obj_Rel_Insert_Input>;
  project_id?: Maybe<Scalars['Int']>;
  translation?: Maybe<Translations_Arr_Rel_Insert_Input>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Project_Language_Link_Max_Fields = {
  __typename?: 'project_language_link_max_fields';
  id?: Maybe<Scalars['Int']>;
  language_id?: Maybe<Scalars['Int']>;
  project_id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "project_language_link" */
export type Project_Language_Link_Max_Order_By = {
  id?: Maybe<Order_By>;
  language_id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Project_Language_Link_Min_Fields = {
  __typename?: 'project_language_link_min_fields';
  id?: Maybe<Scalars['Int']>;
  language_id?: Maybe<Scalars['Int']>;
  project_id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "project_language_link" */
export type Project_Language_Link_Min_Order_By = {
  id?: Maybe<Order_By>;
  language_id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** response of any mutation on the table "project_language_link" */
export type Project_Language_Link_Mutation_Response = {
  __typename?: 'project_language_link_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Project_Language_Link>;
};

/** input type for inserting object relation for remote table "project_language_link" */
export type Project_Language_Link_Obj_Rel_Insert_Input = {
  data: Project_Language_Link_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Project_Language_Link_On_Conflict>;
};

/** on conflict condition type for table "project_language_link" */
export type Project_Language_Link_On_Conflict = {
  constraint: Project_Language_Link_Constraint;
  update_columns?: Array<Project_Language_Link_Update_Column>;
  where?: Maybe<Project_Language_Link_Bool_Exp>;
};

/** Ordering options when selecting data from "project_language_link". */
export type Project_Language_Link_Order_By = {
  id?: Maybe<Order_By>;
  language?: Maybe<Languages_Order_By>;
  language_id?: Maybe<Order_By>;
  project?: Maybe<Projects_Order_By>;
  project_id?: Maybe<Order_By>;
  translation_aggregate?: Maybe<Translations_Aggregate_Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: project_language_link */
export type Project_Language_Link_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "project_language_link" */
export enum Project_Language_Link_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LanguageId = 'language_id',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "project_language_link" */
export type Project_Language_Link_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  language_id?: Maybe<Scalars['Int']>;
  project_id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Project_Language_Link_Stddev_Fields = {
  __typename?: 'project_language_link_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  language_id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "project_language_link" */
export type Project_Language_Link_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  language_id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Project_Language_Link_Stddev_Pop_Fields = {
  __typename?: 'project_language_link_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  language_id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "project_language_link" */
export type Project_Language_Link_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  language_id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Project_Language_Link_Stddev_Samp_Fields = {
  __typename?: 'project_language_link_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  language_id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "project_language_link" */
export type Project_Language_Link_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  language_id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Project_Language_Link_Sum_Fields = {
  __typename?: 'project_language_link_sum_fields';
  id?: Maybe<Scalars['Int']>;
  language_id?: Maybe<Scalars['Int']>;
  project_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "project_language_link" */
export type Project_Language_Link_Sum_Order_By = {
  id?: Maybe<Order_By>;
  language_id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** update columns of table "project_language_link" */
export enum Project_Language_Link_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LanguageId = 'language_id',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  Uuid = 'uuid'
}

/** aggregate var_pop on columns */
export type Project_Language_Link_Var_Pop_Fields = {
  __typename?: 'project_language_link_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  language_id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "project_language_link" */
export type Project_Language_Link_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  language_id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Project_Language_Link_Var_Samp_Fields = {
  __typename?: 'project_language_link_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  language_id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "project_language_link" */
export type Project_Language_Link_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  language_id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Project_Language_Link_Variance_Fields = {
  __typename?: 'project_language_link_variance_fields';
  id?: Maybe<Scalars['Float']>;
  language_id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "project_language_link" */
export type Project_Language_Link_Variance_Order_By = {
  id?: Maybe<Order_By>;
  language_id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** columns and relationships of "project_terms" */
export type Project_Terms = {
  __typename?: 'project_terms';
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  key: Scalars['String'];
  /** An object relationship */
  project: Projects;
  project_id: Scalars['Int'];
  /** An array relationship */
  translations: Array<Translations>;
  /** An aggregate relationship */
  translations_aggregate: Translations_Aggregate;
  uuid: Scalars['uuid'];
};


/** columns and relationships of "project_terms" */
export type Project_TermsTranslationsArgs = {
  distinct_on?: Maybe<Array<Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Translations_Order_By>>;
  where?: Maybe<Translations_Bool_Exp>;
};


/** columns and relationships of "project_terms" */
export type Project_TermsTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Translations_Order_By>>;
  where?: Maybe<Translations_Bool_Exp>;
};

/** aggregated selection of "project_terms" */
export type Project_Terms_Aggregate = {
  __typename?: 'project_terms_aggregate';
  aggregate?: Maybe<Project_Terms_Aggregate_Fields>;
  nodes: Array<Project_Terms>;
};

/** aggregate fields of "project_terms" */
export type Project_Terms_Aggregate_Fields = {
  __typename?: 'project_terms_aggregate_fields';
  avg?: Maybe<Project_Terms_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Project_Terms_Max_Fields>;
  min?: Maybe<Project_Terms_Min_Fields>;
  stddev?: Maybe<Project_Terms_Stddev_Fields>;
  stddev_pop?: Maybe<Project_Terms_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Project_Terms_Stddev_Samp_Fields>;
  sum?: Maybe<Project_Terms_Sum_Fields>;
  var_pop?: Maybe<Project_Terms_Var_Pop_Fields>;
  var_samp?: Maybe<Project_Terms_Var_Samp_Fields>;
  variance?: Maybe<Project_Terms_Variance_Fields>;
};


/** aggregate fields of "project_terms" */
export type Project_Terms_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Project_Terms_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "project_terms" */
export type Project_Terms_Aggregate_Order_By = {
  avg?: Maybe<Project_Terms_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Project_Terms_Max_Order_By>;
  min?: Maybe<Project_Terms_Min_Order_By>;
  stddev?: Maybe<Project_Terms_Stddev_Order_By>;
  stddev_pop?: Maybe<Project_Terms_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Project_Terms_Stddev_Samp_Order_By>;
  sum?: Maybe<Project_Terms_Sum_Order_By>;
  var_pop?: Maybe<Project_Terms_Var_Pop_Order_By>;
  var_samp?: Maybe<Project_Terms_Var_Samp_Order_By>;
  variance?: Maybe<Project_Terms_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "project_terms" */
export type Project_Terms_Arr_Rel_Insert_Input = {
  data: Array<Project_Terms_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Project_Terms_On_Conflict>;
};

/** aggregate avg on columns */
export type Project_Terms_Avg_Fields = {
  __typename?: 'project_terms_avg_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "project_terms" */
export type Project_Terms_Avg_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "project_terms". All fields are combined with a logical 'AND'. */
export type Project_Terms_Bool_Exp = {
  _and?: Maybe<Array<Project_Terms_Bool_Exp>>;
  _not?: Maybe<Project_Terms_Bool_Exp>;
  _or?: Maybe<Array<Project_Terms_Bool_Exp>>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  key?: Maybe<String_Comparison_Exp>;
  project?: Maybe<Projects_Bool_Exp>;
  project_id?: Maybe<Int_Comparison_Exp>;
  translations?: Maybe<Translations_Bool_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "project_terms" */
export enum Project_Terms_Constraint {
  /** unique or primary key constraint */
  ProjectTermsIdKey = 'project_terms_id_key',
  /** unique or primary key constraint */
  ProjectTermsPkey = 'project_terms_pkey'
}

/** input type for incrementing numeric columns in table "project_terms" */
export type Project_Terms_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  project_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "project_terms" */
export type Project_Terms_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
  project?: Maybe<Projects_Obj_Rel_Insert_Input>;
  project_id?: Maybe<Scalars['Int']>;
  translations?: Maybe<Translations_Arr_Rel_Insert_Input>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Project_Terms_Max_Fields = {
  __typename?: 'project_terms_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "project_terms" */
export type Project_Terms_Max_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Project_Terms_Min_Fields = {
  __typename?: 'project_terms_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "project_terms" */
export type Project_Terms_Min_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** response of any mutation on the table "project_terms" */
export type Project_Terms_Mutation_Response = {
  __typename?: 'project_terms_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Project_Terms>;
};

/** input type for inserting object relation for remote table "project_terms" */
export type Project_Terms_Obj_Rel_Insert_Input = {
  data: Project_Terms_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Project_Terms_On_Conflict>;
};

/** on conflict condition type for table "project_terms" */
export type Project_Terms_On_Conflict = {
  constraint: Project_Terms_Constraint;
  update_columns?: Array<Project_Terms_Update_Column>;
  where?: Maybe<Project_Terms_Bool_Exp>;
};

/** Ordering options when selecting data from "project_terms". */
export type Project_Terms_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  project?: Maybe<Projects_Order_By>;
  project_id?: Maybe<Order_By>;
  translations_aggregate?: Maybe<Translations_Aggregate_Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: project_terms */
export type Project_Terms_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "project_terms" */
export enum Project_Terms_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "project_terms" */
export type Project_Terms_Set_Input = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Project_Terms_Stddev_Fields = {
  __typename?: 'project_terms_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "project_terms" */
export type Project_Terms_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Project_Terms_Stddev_Pop_Fields = {
  __typename?: 'project_terms_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "project_terms" */
export type Project_Terms_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Project_Terms_Stddev_Samp_Fields = {
  __typename?: 'project_terms_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "project_terms" */
export type Project_Terms_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Project_Terms_Sum_Fields = {
  __typename?: 'project_terms_sum_fields';
  id?: Maybe<Scalars['Int']>;
  project_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "project_terms" */
export type Project_Terms_Sum_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** update columns of table "project_terms" */
export enum Project_Terms_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  Uuid = 'uuid'
}

/** aggregate var_pop on columns */
export type Project_Terms_Var_Pop_Fields = {
  __typename?: 'project_terms_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "project_terms" */
export type Project_Terms_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Project_Terms_Var_Samp_Fields = {
  __typename?: 'project_terms_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "project_terms" */
export type Project_Terms_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Project_Terms_Variance_Fields = {
  __typename?: 'project_terms_variance_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "project_terms" */
export type Project_Terms_Variance_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** columns and relationships of "projects" */
export type Projects = {
  __typename?: 'projects';
  /** An object relationship */
  company: Companies;
  company_id: Scalars['Int'];
  id: Scalars['Int'];
  /** An array relationship */
  language_links: Array<Project_Language_Link>;
  /** An aggregate relationship */
  language_links_aggregate: Project_Language_Link_Aggregate;
  name: Scalars['String'];
  /** An array relationship */
  statuses: Array<Translation_Statuses>;
  /** An aggregate relationship */
  statuses_aggregate: Translation_Statuses_Aggregate;
  /** An array relationship */
  terms: Array<Project_Terms>;
  /** An aggregate relationship */
  terms_aggregate: Project_Terms_Aggregate;
  /** An array relationship */
  user_links: Array<User_Project_Link>;
  /** An aggregate relationship */
  user_links_aggregate: User_Project_Link_Aggregate;
  uuid: Scalars['uuid'];
};


/** columns and relationships of "projects" */
export type ProjectsLanguage_LinksArgs = {
  distinct_on?: Maybe<Array<Project_Language_Link_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Language_Link_Order_By>>;
  where?: Maybe<Project_Language_Link_Bool_Exp>;
};


/** columns and relationships of "projects" */
export type ProjectsLanguage_Links_AggregateArgs = {
  distinct_on?: Maybe<Array<Project_Language_Link_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Language_Link_Order_By>>;
  where?: Maybe<Project_Language_Link_Bool_Exp>;
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
export type ProjectsTermsArgs = {
  distinct_on?: Maybe<Array<Project_Terms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Terms_Order_By>>;
  where?: Maybe<Project_Terms_Bool_Exp>;
};


/** columns and relationships of "projects" */
export type ProjectsTerms_AggregateArgs = {
  distinct_on?: Maybe<Array<Project_Terms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Terms_Order_By>>;
  where?: Maybe<Project_Terms_Bool_Exp>;
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
  company?: Maybe<Companies_Bool_Exp>;
  company_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  language_links?: Maybe<Project_Language_Link_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  statuses?: Maybe<Translation_Statuses_Bool_Exp>;
  terms?: Maybe<Project_Terms_Bool_Exp>;
  user_links?: Maybe<User_Project_Link_Bool_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "projects" */
export enum Projects_Constraint {
  /** unique or primary key constraint */
  ProjectsIdKey = 'projects_id_key',
  /** unique or primary key constraint */
  ProjectsPkey = 'projects_pkey'
}

/** input type for incrementing numeric columns in table "projects" */
export type Projects_Inc_Input = {
  company_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "projects" */
export type Projects_Insert_Input = {
  company?: Maybe<Companies_Obj_Rel_Insert_Input>;
  company_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  language_links?: Maybe<Project_Language_Link_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  statuses?: Maybe<Translation_Statuses_Arr_Rel_Insert_Input>;
  terms?: Maybe<Project_Terms_Arr_Rel_Insert_Input>;
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
  company?: Maybe<Companies_Order_By>;
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  language_links_aggregate?: Maybe<Project_Language_Link_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  statuses_aggregate?: Maybe<Translation_Statuses_Aggregate_Order_By>;
  terms_aggregate?: Maybe<Project_Terms_Aggregate_Order_By>;
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
  /** fetch data from the table: "project_language_link" */
  project_language_link: Array<Project_Language_Link>;
  /** fetch aggregated fields from the table: "project_language_link" */
  project_language_link_aggregate: Project_Language_Link_Aggregate;
  /** fetch data from the table: "project_language_link" using primary key columns */
  project_language_link_by_pk?: Maybe<Project_Language_Link>;
  /** fetch data from the table: "project_terms" */
  project_terms: Array<Project_Terms>;
  /** fetch aggregated fields from the table: "project_terms" */
  project_terms_aggregate: Project_Terms_Aggregate;
  /** fetch data from the table: "project_terms" using primary key columns */
  project_terms_by_pk?: Maybe<Project_Terms>;
  /** An array relationship */
  projects: Array<Projects>;
  /** An aggregate relationship */
  projects_aggregate: Projects_Aggregate;
  /** fetch data from the table: "projects" using primary key columns */
  projects_by_pk?: Maybe<Projects>;
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


export type Query_RootProject_Language_LinkArgs = {
  distinct_on?: Maybe<Array<Project_Language_Link_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Language_Link_Order_By>>;
  where?: Maybe<Project_Language_Link_Bool_Exp>;
};


export type Query_RootProject_Language_Link_AggregateArgs = {
  distinct_on?: Maybe<Array<Project_Language_Link_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Language_Link_Order_By>>;
  where?: Maybe<Project_Language_Link_Bool_Exp>;
};


export type Query_RootProject_Language_Link_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootProject_TermsArgs = {
  distinct_on?: Maybe<Array<Project_Terms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Terms_Order_By>>;
  where?: Maybe<Project_Terms_Bool_Exp>;
};


export type Query_RootProject_Terms_AggregateArgs = {
  distinct_on?: Maybe<Array<Project_Terms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Terms_Order_By>>;
  where?: Maybe<Project_Terms_Bool_Exp>;
};


export type Query_RootProject_Terms_By_PkArgs = {
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
  /** fetch data from the table: "project_language_link" */
  project_language_link: Array<Project_Language_Link>;
  /** fetch aggregated fields from the table: "project_language_link" */
  project_language_link_aggregate: Project_Language_Link_Aggregate;
  /** fetch data from the table: "project_language_link" using primary key columns */
  project_language_link_by_pk?: Maybe<Project_Language_Link>;
  /** fetch data from the table: "project_terms" */
  project_terms: Array<Project_Terms>;
  /** fetch aggregated fields from the table: "project_terms" */
  project_terms_aggregate: Project_Terms_Aggregate;
  /** fetch data from the table: "project_terms" using primary key columns */
  project_terms_by_pk?: Maybe<Project_Terms>;
  /** An array relationship */
  projects: Array<Projects>;
  /** An aggregate relationship */
  projects_aggregate: Projects_Aggregate;
  /** fetch data from the table: "projects" using primary key columns */
  projects_by_pk?: Maybe<Projects>;
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


export type Subscription_RootProject_Language_LinkArgs = {
  distinct_on?: Maybe<Array<Project_Language_Link_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Language_Link_Order_By>>;
  where?: Maybe<Project_Language_Link_Bool_Exp>;
};


export type Subscription_RootProject_Language_Link_AggregateArgs = {
  distinct_on?: Maybe<Array<Project_Language_Link_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Language_Link_Order_By>>;
  where?: Maybe<Project_Language_Link_Bool_Exp>;
};


export type Subscription_RootProject_Language_Link_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootProject_TermsArgs = {
  distinct_on?: Maybe<Array<Project_Terms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Terms_Order_By>>;
  where?: Maybe<Project_Terms_Bool_Exp>;
};


export type Subscription_RootProject_Terms_AggregateArgs = {
  distinct_on?: Maybe<Array<Project_Terms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Terms_Order_By>>;
  where?: Maybe<Project_Terms_Bool_Exp>;
};


export type Subscription_RootProject_Terms_By_PkArgs = {
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
  TranslationStatusesIdKey = 'translation_statuses_id_key',
  /** unique or primary key constraint */
  TranslationStatusesPkey = 'translation_statuses_pkey'
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
  id: Scalars['Int'];
  /** An object relationship */
  project_language_link: Project_Language_Link;
  project_language_link_id: Scalars['Int'];
  /** An object relationship */
  term: Project_Terms;
  term_id: Scalars['Int'];
  /** An object relationship */
  translation_status?: Maybe<Translation_Statuses>;
  translation_status_id?: Maybe<Scalars['Int']>;
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
  id?: Maybe<Scalars['Float']>;
  project_language_link_id?: Maybe<Scalars['Float']>;
  term_id?: Maybe<Scalars['Float']>;
  translation_status_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "translations" */
export type Translations_Avg_Order_By = {
  id?: Maybe<Order_By>;
  project_language_link_id?: Maybe<Order_By>;
  term_id?: Maybe<Order_By>;
  translation_status_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "translations". All fields are combined with a logical 'AND'. */
export type Translations_Bool_Exp = {
  _and?: Maybe<Array<Translations_Bool_Exp>>;
  _not?: Maybe<Translations_Bool_Exp>;
  _or?: Maybe<Array<Translations_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  project_language_link?: Maybe<Project_Language_Link_Bool_Exp>;
  project_language_link_id?: Maybe<Int_Comparison_Exp>;
  term?: Maybe<Project_Terms_Bool_Exp>;
  term_id?: Maybe<Int_Comparison_Exp>;
  translation_status?: Maybe<Translation_Statuses_Bool_Exp>;
  translation_status_id?: Maybe<Int_Comparison_Exp>;
  translation_value?: Maybe<String_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "translations" */
export enum Translations_Constraint {
  /** unique or primary key constraint */
  TranslationsIdKey = 'translations_id_key',
  /** unique or primary key constraint */
  TranslationsPkey = 'translations_pkey'
}

/** input type for incrementing numeric columns in table "translations" */
export type Translations_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  project_language_link_id?: Maybe<Scalars['Int']>;
  term_id?: Maybe<Scalars['Int']>;
  translation_status_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "translations" */
export type Translations_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  project_language_link?: Maybe<Project_Language_Link_Obj_Rel_Insert_Input>;
  project_language_link_id?: Maybe<Scalars['Int']>;
  term?: Maybe<Project_Terms_Obj_Rel_Insert_Input>;
  term_id?: Maybe<Scalars['Int']>;
  translation_status?: Maybe<Translation_Statuses_Obj_Rel_Insert_Input>;
  translation_status_id?: Maybe<Scalars['Int']>;
  translation_value?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Translations_Max_Fields = {
  __typename?: 'translations_max_fields';
  id?: Maybe<Scalars['Int']>;
  project_language_link_id?: Maybe<Scalars['Int']>;
  term_id?: Maybe<Scalars['Int']>;
  translation_status_id?: Maybe<Scalars['Int']>;
  translation_value?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "translations" */
export type Translations_Max_Order_By = {
  id?: Maybe<Order_By>;
  project_language_link_id?: Maybe<Order_By>;
  term_id?: Maybe<Order_By>;
  translation_status_id?: Maybe<Order_By>;
  translation_value?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Translations_Min_Fields = {
  __typename?: 'translations_min_fields';
  id?: Maybe<Scalars['Int']>;
  project_language_link_id?: Maybe<Scalars['Int']>;
  term_id?: Maybe<Scalars['Int']>;
  translation_status_id?: Maybe<Scalars['Int']>;
  translation_value?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "translations" */
export type Translations_Min_Order_By = {
  id?: Maybe<Order_By>;
  project_language_link_id?: Maybe<Order_By>;
  term_id?: Maybe<Order_By>;
  translation_status_id?: Maybe<Order_By>;
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
  id?: Maybe<Order_By>;
  project_language_link?: Maybe<Project_Language_Link_Order_By>;
  project_language_link_id?: Maybe<Order_By>;
  term?: Maybe<Project_Terms_Order_By>;
  term_id?: Maybe<Order_By>;
  translation_status?: Maybe<Translation_Statuses_Order_By>;
  translation_status_id?: Maybe<Order_By>;
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
  Id = 'id',
  /** column name */
  ProjectLanguageLinkId = 'project_language_link_id',
  /** column name */
  TermId = 'term_id',
  /** column name */
  TranslationStatusId = 'translation_status_id',
  /** column name */
  TranslationValue = 'translation_value',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "translations" */
export type Translations_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  project_language_link_id?: Maybe<Scalars['Int']>;
  term_id?: Maybe<Scalars['Int']>;
  translation_status_id?: Maybe<Scalars['Int']>;
  translation_value?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Translations_Stddev_Fields = {
  __typename?: 'translations_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  project_language_link_id?: Maybe<Scalars['Float']>;
  term_id?: Maybe<Scalars['Float']>;
  translation_status_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "translations" */
export type Translations_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  project_language_link_id?: Maybe<Order_By>;
  term_id?: Maybe<Order_By>;
  translation_status_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Translations_Stddev_Pop_Fields = {
  __typename?: 'translations_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  project_language_link_id?: Maybe<Scalars['Float']>;
  term_id?: Maybe<Scalars['Float']>;
  translation_status_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "translations" */
export type Translations_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  project_language_link_id?: Maybe<Order_By>;
  term_id?: Maybe<Order_By>;
  translation_status_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Translations_Stddev_Samp_Fields = {
  __typename?: 'translations_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  project_language_link_id?: Maybe<Scalars['Float']>;
  term_id?: Maybe<Scalars['Float']>;
  translation_status_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "translations" */
export type Translations_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  project_language_link_id?: Maybe<Order_By>;
  term_id?: Maybe<Order_By>;
  translation_status_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Translations_Sum_Fields = {
  __typename?: 'translations_sum_fields';
  id?: Maybe<Scalars['Int']>;
  project_language_link_id?: Maybe<Scalars['Int']>;
  term_id?: Maybe<Scalars['Int']>;
  translation_status_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "translations" */
export type Translations_Sum_Order_By = {
  id?: Maybe<Order_By>;
  project_language_link_id?: Maybe<Order_By>;
  term_id?: Maybe<Order_By>;
  translation_status_id?: Maybe<Order_By>;
};

/** update columns of table "translations" */
export enum Translations_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ProjectLanguageLinkId = 'project_language_link_id',
  /** column name */
  TermId = 'term_id',
  /** column name */
  TranslationStatusId = 'translation_status_id',
  /** column name */
  TranslationValue = 'translation_value',
  /** column name */
  Uuid = 'uuid'
}

/** aggregate var_pop on columns */
export type Translations_Var_Pop_Fields = {
  __typename?: 'translations_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  project_language_link_id?: Maybe<Scalars['Float']>;
  term_id?: Maybe<Scalars['Float']>;
  translation_status_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "translations" */
export type Translations_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  project_language_link_id?: Maybe<Order_By>;
  term_id?: Maybe<Order_By>;
  translation_status_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Translations_Var_Samp_Fields = {
  __typename?: 'translations_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  project_language_link_id?: Maybe<Scalars['Float']>;
  term_id?: Maybe<Scalars['Float']>;
  translation_status_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "translations" */
export type Translations_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  project_language_link_id?: Maybe<Order_By>;
  term_id?: Maybe<Order_By>;
  translation_status_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Translations_Variance_Fields = {
  __typename?: 'translations_variance_fields';
  id?: Maybe<Scalars['Float']>;
  project_language_link_id?: Maybe<Scalars['Float']>;
  term_id?: Maybe<Scalars['Float']>;
  translation_status_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "translations" */
export type Translations_Variance_Order_By = {
  id?: Maybe<Order_By>;
  project_language_link_id?: Maybe<Order_By>;
  term_id?: Maybe<Order_By>;
  translation_status_id?: Maybe<Order_By>;
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
  UserProjectLinkIdKey = 'user_project_link_id_key',
  /** unique or primary key constraint */
  UserProjectLinkPkey = 'user_project_link_pkey'
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
  UsersIdKey = 'users_id_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
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

export type GetCompaniesAndProjectsQueryVariables = Exact<{
  userUuid?: Maybe<Scalars['uuid']>;
}>;


export type GetCompaniesAndProjectsQuery = { __typename?: 'query_root', companies: Array<{ __typename?: 'companies', name: string, uuid: any, projects: Array<{ __typename?: 'projects', name: string, uuid: any, language_links: Array<{ __typename?: 'project_language_link', uuid: any, language: { __typename?: 'languages', iso_code: string, uuid: any } }>, company: { __typename?: 'companies', name: string, uuid: any } }> }> };

export type GetProjectQueryVariables = Exact<{
  projectUuid?: Maybe<Scalars['uuid']>;
}>;


export type GetProjectQuery = { __typename?: 'query_root', projects: Array<{ __typename?: 'projects', name: string, statuses: Array<{ __typename?: 'translation_statuses', uuid: any, name: string }>, language_links: Array<{ __typename?: 'project_language_link', uuid: any, language: { __typename?: 'languages', iso_code: string, name: string, uuid: any } }>, user_links: Array<{ __typename?: 'user_project_link', uuid: any, user: { __typename?: 'users', first_name: string, last_name: string, email: string, uuid: any } }>, company: { __typename?: 'companies', name: string, uuid: any } }> };

export type GetTranslationsQueryVariables = Exact<{
  projectUuid?: Maybe<Scalars['uuid']>;
  languageCodes?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type GetTranslationsQuery = { __typename?: 'query_root', project_terms: Array<{ __typename?: 'project_terms', key: string, description?: string | null | undefined, uuid: any, translations: Array<{ __typename?: 'translations', translation_value?: string | null | undefined, uuid: any, translation_status?: { __typename?: 'translation_statuses', name: string, uuid: any } | null | undefined }> }>, project_terms_aggregate: { __typename?: 'project_terms_aggregate', aggregate?: { __typename?: 'project_terms_aggregate_fields', count: number } | null | undefined } };


export const GetCompaniesAndProjectsDocument = `
    query getCompaniesAndProjects($userUuid: uuid) {
  companies(where: {projects: {user_links: {user: {uuid: {_eq: $userUuid}}}}}) {
    projects {
      name
      uuid
      language_links {
        uuid
        language {
          iso_code
          uuid
        }
      }
      company {
        name
        uuid
      }
    }
    name
    uuid
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
export const GetProjectDocument = `
    query getProject($projectUuid: uuid) {
  projects(where: {uuid: {_eq: $projectUuid}}) {
    name
    statuses {
      uuid
      name
    }
    language_links {
      language {
        iso_code
        name
        uuid
      }
      uuid
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
export const GetTranslationsDocument = `
    query getTranslations($projectUuid: uuid, $languageCodes: [String!], $offset: Int) {
  project_terms(
    where: {project: {uuid: {_eq: $projectUuid}}}
    limit: 100
    offset: $offset
  ) {
    key
    description
    translations(
      where: {project_language_link: {language: {iso_code: {_in: $languageCodes}}}}
    ) {
      translation_value
      translation_status {
        name
        uuid
      }
      uuid
    }
    uuid
  }
  project_terms_aggregate(
    where: {project: {uuid: {_eq: $projectUuid}}}
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