import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';

import { DATABASE_CONFIG } from '../queries/config/database.constants';
import { useGetProjectQuery } from '../queries/config/graphql-generated-types';

export const ProjectDetail: FunctionComponent = () => {
  const { projectUuid } = useParams();
  const { data, isLoading } = useGetProjectQuery(
    DATABASE_CONFIG,
    { projectUuid: projectUuid as string },
    { enabled: !!projectUuid },
  );

  if (isLoading) {
    return <>loading...</>;
  }

  return (
    <>
      Company: {data?.projects?.[0]?.company?.name}
      <br />
      Project: {data?.projects?.[0]?.name}
    </>
  );
};
