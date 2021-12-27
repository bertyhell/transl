import React, { FunctionComponent, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Button } from '../components/Button/Button';
import { $t } from '../helpers/i18n';
import { DATABASE_CONFIG } from '../queries/config/database.constants';
import { useGetBranchQuery } from '../queries/config/graphql-generated-types';
import { ImportLanguageFromJsonModal } from './modals/ImportLanguageFromJsonModal';

export const BranchDetail: FunctionComponent = () => {
  const { branchUuid } = useParams();
  const { data, isLoading } = useGetBranchQuery(DATABASE_CONFIG, { branchUuid: branchUuid as string }, { enabled: !!branchUuid });
  const [isImportJsonModalOpen, setIsImportJsonModalOpen] = useState<boolean>(false);

  if (isLoading) {
    return <>loading...</>;
  }

  return (
    <>
      Company:{data?.branches?.[0]?.project?.company?.name}
      <br />
      Project: {data?.branches?.[0]?.project?.name}
      <br />
      Branch: {data?.branches?.[0]?.name}
      <br />
      <Button label={$t('Import JSON')} onClick={() => setIsImportJsonModalOpen(true)} />
      <ImportLanguageFromJsonModal isOpen={isImportJsonModalOpen} onClose={() => setIsImportJsonModalOpen(false)} />
    </>
  );
};
