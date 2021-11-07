import React, { FunctionComponent, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Button } from '../components/Button/Button';
import { $t } from '../helpers/i18n';
import { DATABASE_CONFIG } from '../queries/config/database.constants';
import { useGetProjectQuery } from '../queries/config/graphql-generated-types';
import { ImportLanguageFromJsonModal } from './modals/ImportLanguageFromJsonModal';

export const ProjectDetail: FunctionComponent = () => {
  const { projectUuid } = useParams();
  const { data, isLoading } = useGetProjectQuery(
    DATABASE_CONFIG,
    { projectUuid: projectUuid as string },
    { enabled: !!projectUuid },
  );
  const [isImportJsonModalOpen, setIsImportJsonModalOpen] = useState<boolean>(false);

  if (isLoading) {
    return <>loading...</>;
  }

  return (
    <>
      Company: {data?.projects?.[0]?.company?.name}
      <br />
      Project: {data?.projects?.[0]?.name}
      <br />
      <Button label={$t('Import JSON')} onClick={() => setIsImportJsonModalOpen(true)} />
      <ImportLanguageFromJsonModal isOpen={isImportJsonModalOpen} onClose={() => setIsImportJsonModalOpen(false)} />
    </>
  );
};
