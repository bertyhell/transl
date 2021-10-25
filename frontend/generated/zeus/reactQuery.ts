/* eslint-disable */

import { ValueTypes, GraphQLTypes, InputType, Gql, OperationOptions } from './index';
import { useMutation, useQuery } from 'react-query';
import type { UseMutationOptions, UseQueryOptions } from 'react-query';


export function useTypedMutation<TData, TResult = InputType<GraphQLTypes['mutation_root'], TData>>(
  mutationKey: string,
  mutation: TData | ValueTypes['mutation_root'],
  options?: Omit<UseMutationOptions<TResult>, 'mutationKey' | 'mutationFn'>,
  zeusOptions?: OperationOptions,
) {
  return useMutation<TResult>(mutationKey, () => Gql.mutation(mutation, zeusOptions) as Promise<TResult>, options);
}
export function useTypedQuery<TData, TResult = InputType<GraphQLTypes['query_root'], TData>>(
  queryKey: string,
  query: TData | ValueTypes['query_root'],
  options?: Omit<UseQueryOptions<TResult>, 'queryKey' | 'queryFn'>,
  zeusOptions?: OperationOptions,
) {
  return useQuery<TResult>(queryKey, () => Gql.query(query, zeusOptions) as Promise<TResult>, options);
}
