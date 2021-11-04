import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';

import { DATABASE_CONFIG } from '../queries/config/database.constants';
import { useGetCompanyQuery } from '../queries/config/graphql-generated-types';

export const CompanyDetail: FunctionComponent = () => {
  const { companyUuid } = useParams();
  const { data, isLoading } = useGetCompanyQuery(
    DATABASE_CONFIG,
    { companyUuid: companyUuid as string },
    { enabled: !!companyUuid },
  );

  if (isLoading) {
    return <>loading...</>;
  }

  return <>Company: {data?.companies?.[0]?.name}</>;
};
