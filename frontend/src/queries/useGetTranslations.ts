import { useQuery } from 'react-query';
import { QUERY_KEYS } from '../model/query-keys';
import { Gql } from '../generated/zeus';

function getTranslations() {
	return Gql.query({

	})
}

export function useGetTranslations() {
	return useQuery(QUERY_KEYS.getTranslations, getTranslations)
}
