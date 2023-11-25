/* eslint-disable */

import { GraphQLClient } from "graphql-request";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };

function fetcher<TData, TVariables extends { [key: string]: any }>(
  client: GraphQLClient,
  query: string,
  variables?: TVariables,
  requestHeaders?: RequestInit["headers"],
) {
  return async (): Promise<TData> =>
    client.request({
      document: query,
      variables,
      requestHeaders,
    });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  timestamp: { input: any; output: any };
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Int"]["input"]>;
  _gt?: InputMaybe<Scalars["Int"]["input"]>;
  _gte?: InputMaybe<Scalars["Int"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Int"]["input"]>;
  _lte?: InputMaybe<Scalars["Int"]["input"]>;
  _neq?: InputMaybe<Scalars["Int"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["String"]["input"]>;
  _gt?: InputMaybe<Scalars["String"]["input"]>;
  _gte?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]["input"]>;
  _in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]["input"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]["input"]>;
  _lt?: InputMaybe<Scalars["String"]["input"]>;
  _lte?: InputMaybe<Scalars["String"]["input"]>;
  _neq?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]["input"]>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = "ASC",
  /** descending ordering of the cursor */
  Desc = "DESC",
}

/** columns and relationships of "email" */
export type Email = {
  __typename?: "email";
  date?: Maybe<Scalars["timestamp"]["output"]>;
  from?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["Int"]["output"];
  subject?: Maybe<Scalars["String"]["output"]>;
  timezone?: Maybe<Scalars["String"]["output"]>;
  to?: Maybe<Scalars["String"]["output"]>;
};

/** aggregated selection of "email" */
export type Email_Aggregate = {
  __typename?: "email_aggregate";
  aggregate?: Maybe<Email_Aggregate_Fields>;
  nodes: Array<Email>;
};

/** aggregate fields of "email" */
export type Email_Aggregate_Fields = {
  __typename?: "email_aggregate_fields";
  avg?: Maybe<Email_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Email_Max_Fields>;
  min?: Maybe<Email_Min_Fields>;
  stddev?: Maybe<Email_Stddev_Fields>;
  stddev_pop?: Maybe<Email_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Email_Stddev_Samp_Fields>;
  sum?: Maybe<Email_Sum_Fields>;
  var_pop?: Maybe<Email_Var_Pop_Fields>;
  var_samp?: Maybe<Email_Var_Samp_Fields>;
  variance?: Maybe<Email_Variance_Fields>;
};

/** aggregate fields of "email" */
export type Email_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Email_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type Email_Avg_Fields = {
  __typename?: "email_avg_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "email". All fields are combined with a logical 'AND'. */
export type Email_Bool_Exp = {
  _and?: InputMaybe<Array<Email_Bool_Exp>>;
  _not?: InputMaybe<Email_Bool_Exp>;
  _or?: InputMaybe<Array<Email_Bool_Exp>>;
  date?: InputMaybe<Timestamp_Comparison_Exp>;
  from?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  subject?: InputMaybe<String_Comparison_Exp>;
  timezone?: InputMaybe<String_Comparison_Exp>;
  to?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "email" */
export enum Email_Constraint {
  /** unique or primary key constraint on columns "id" */
  EmailPkey = "email_pkey",
}

/** input type for incrementing numeric columns in table "email" */
export type Email_Inc_Input = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "email" */
export type Email_Insert_Input = {
  date?: InputMaybe<Scalars["timestamp"]["input"]>;
  from?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  subject?: InputMaybe<Scalars["String"]["input"]>;
  timezone?: InputMaybe<Scalars["String"]["input"]>;
  to?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Email_Max_Fields = {
  __typename?: "email_max_fields";
  date?: Maybe<Scalars["timestamp"]["output"]>;
  from?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  subject?: Maybe<Scalars["String"]["output"]>;
  timezone?: Maybe<Scalars["String"]["output"]>;
  to?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Email_Min_Fields = {
  __typename?: "email_min_fields";
  date?: Maybe<Scalars["timestamp"]["output"]>;
  from?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  subject?: Maybe<Scalars["String"]["output"]>;
  timezone?: Maybe<Scalars["String"]["output"]>;
  to?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "email" */
export type Email_Mutation_Response = {
  __typename?: "email_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Email>;
};

/** on_conflict condition type for table "email" */
export type Email_On_Conflict = {
  constraint: Email_Constraint;
  update_columns?: Array<Email_Update_Column>;
  where?: InputMaybe<Email_Bool_Exp>;
};

/** Ordering options when selecting data from "email". */
export type Email_Order_By = {
  date?: InputMaybe<Order_By>;
  from?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  subject?: InputMaybe<Order_By>;
  timezone?: InputMaybe<Order_By>;
  to?: InputMaybe<Order_By>;
};

/** primary key columns input for table: email */
export type Email_Pk_Columns_Input = {
  id: Scalars["Int"]["input"];
};

/** select columns of table "email" */
export enum Email_Select_Column {
  /** column name */
  Date = "date",
  /** column name */
  From = "from",
  /** column name */
  Id = "id",
  /** column name */
  Subject = "subject",
  /** column name */
  Timezone = "timezone",
  /** column name */
  To = "to",
}

/** input type for updating data in table "email" */
export type Email_Set_Input = {
  date?: InputMaybe<Scalars["timestamp"]["input"]>;
  from?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  subject?: InputMaybe<Scalars["String"]["input"]>;
  timezone?: InputMaybe<Scalars["String"]["input"]>;
  to?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type Email_Stddev_Fields = {
  __typename?: "email_stddev_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type Email_Stddev_Pop_Fields = {
  __typename?: "email_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type Email_Stddev_Samp_Fields = {
  __typename?: "email_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "email" */
export type Email_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Email_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Email_Stream_Cursor_Value_Input = {
  date?: InputMaybe<Scalars["timestamp"]["input"]>;
  from?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  subject?: InputMaybe<Scalars["String"]["input"]>;
  timezone?: InputMaybe<Scalars["String"]["input"]>;
  to?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type Email_Sum_Fields = {
  __typename?: "email_sum_fields";
  id?: Maybe<Scalars["Int"]["output"]>;
};

/** update columns of table "email" */
export enum Email_Update_Column {
  /** column name */
  Date = "date",
  /** column name */
  From = "from",
  /** column name */
  Id = "id",
  /** column name */
  Subject = "subject",
  /** column name */
  Timezone = "timezone",
  /** column name */
  To = "to",
}

export type Email_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Email_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Email_Set_Input>;
  /** filter the rows which have to be updated */
  where: Email_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Email_Var_Pop_Fields = {
  __typename?: "email_var_pop_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type Email_Var_Samp_Fields = {
  __typename?: "email_var_samp_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type Email_Variance_Fields = {
  __typename?: "email_variance_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "email" */
  delete_email?: Maybe<Email_Mutation_Response>;
  /** delete single row from the table: "email" */
  delete_email_by_pk?: Maybe<Email>;
  /** insert data into the table: "email" */
  insert_email?: Maybe<Email_Mutation_Response>;
  /** insert a single row into the table: "email" */
  insert_email_one?: Maybe<Email>;
  /** update data of the table: "email" */
  update_email?: Maybe<Email_Mutation_Response>;
  /** update single row of the table: "email" */
  update_email_by_pk?: Maybe<Email>;
  /** update multiples rows of table: "email" */
  update_email_many?: Maybe<Array<Maybe<Email_Mutation_Response>>>;
};

/** mutation root */
export type Mutation_RootDelete_EmailArgs = {
  where: Email_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Email_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootInsert_EmailArgs = {
  objects: Array<Email_Insert_Input>;
  on_conflict?: InputMaybe<Email_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Email_OneArgs = {
  object: Email_Insert_Input;
  on_conflict?: InputMaybe<Email_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_EmailArgs = {
  _inc?: InputMaybe<Email_Inc_Input>;
  _set?: InputMaybe<Email_Set_Input>;
  where: Email_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Email_By_PkArgs = {
  _inc?: InputMaybe<Email_Inc_Input>;
  _set?: InputMaybe<Email_Set_Input>;
  pk_columns: Email_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Email_ManyArgs = {
  updates: Array<Email_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = "asc",
  /** in ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in descending order, nulls first */
  Desc = "desc",
  /** in descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "email" */
  email: Array<Email>;
  /** fetch aggregated fields from the table: "email" */
  email_aggregate: Email_Aggregate;
  /** fetch data from the table: "email" using primary key columns */
  email_by_pk?: Maybe<Email>;
};

export type Query_RootEmailArgs = {
  distinct_on?: InputMaybe<Array<Email_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Email_Order_By>>;
  where?: InputMaybe<Email_Bool_Exp>;
};

export type Query_RootEmail_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Email_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Email_Order_By>>;
  where?: InputMaybe<Email_Bool_Exp>;
};

export type Query_RootEmail_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "email" */
  email: Array<Email>;
  /** fetch aggregated fields from the table: "email" */
  email_aggregate: Email_Aggregate;
  /** fetch data from the table: "email" using primary key columns */
  email_by_pk?: Maybe<Email>;
  /** fetch data from the table in a streaming manner: "email" */
  email_stream: Array<Email>;
};

export type Subscription_RootEmailArgs = {
  distinct_on?: InputMaybe<Array<Email_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Email_Order_By>>;
  where?: InputMaybe<Email_Bool_Exp>;
};

export type Subscription_RootEmail_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Email_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Email_Order_By>>;
  where?: InputMaybe<Email_Bool_Exp>;
};

export type Subscription_RootEmail_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Subscription_RootEmail_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Email_Stream_Cursor_Input>>;
  where?: InputMaybe<Email_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["timestamp"]["input"]>;
  _gt?: InputMaybe<Scalars["timestamp"]["input"]>;
  _gte?: InputMaybe<Scalars["timestamp"]["input"]>;
  _in?: InputMaybe<Array<Scalars["timestamp"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["timestamp"]["input"]>;
  _lte?: InputMaybe<Scalars["timestamp"]["input"]>;
  _neq?: InputMaybe<Scalars["timestamp"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["timestamp"]["input"]>>;
};

export type EmailsQueryVariables = Exact<{ [key: string]: never }>;

export type EmailsQuery = {
  __typename?: "query_root";
  email: Array<{
    __typename?: "email";
    id: number;
    subject?: string | null;
    to?: string | null;
    from?: string | null;
    date?: any | null;
    timezone?: string | null;
  }>;
};

export const EmailsDocument = `
  query Emails {
    email {
      id
      subject
      to
      from
      date
      timezone
    }
  }
`;

export const useEmailsQuery = <TData = EmailsQuery, TError = unknown>(
  client: GraphQLClient,
  variables?: EmailsQueryVariables,
  options?: UseQueryOptions<EmailsQuery, TError, TData>,
) => {
  return useQuery<EmailsQuery, TError, TData>({
    queryKey: variables === undefined ? ["Emails"] : ["Emails", variables],
    queryFn: fetcher<EmailsQuery, EmailsQueryVariables>(
      client,
      EmailsDocument,
      variables,
    ),
    ...options,
  });
};
