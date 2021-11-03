import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';

import { DATABASE_CONFIG } from '../queries/config/database.constants';
import { useGetProjectQuery } from '../queries/config/graphql-generated-types';

export const CompanyDetail: FunctionComponent = () => {
  const { projectUuid } = useParams<{ projectUuid: string }>();
  const { data, isLoading } = useGetProjectQuery(
    DATABASE_CONFIG,
    { projectUuid: projectUuid as string },
    { enabled: !!projectUuid },
  );

  if (isLoading) {
    return <>loading...</>;
  }

  return <>Company: {data?.projects?.[0]?.company?.name}</>;
};
