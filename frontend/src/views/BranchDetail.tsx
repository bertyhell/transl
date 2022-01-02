import React, { FunctionComponent, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Button } from '../components/Button/Button';
import { Select } from '../components/Select/Select';
import { $t } from '../helpers/i18n';
import { DATABASE_CONFIG } from '../queries/config/database.constants';
import { GetBranchQuery, useGetBranchQuery } from '../queries/config/graphql-generated-types';
import { useGetMerge } from '../queries/merge-branch';
import { ImportLanguageFromJsonModal } from './modals/ImportLanguageFromJsonModal';

type BranchItem = GetBranchQuery['branches'][0]['project']['branches'][0];

export const BranchDetail: FunctionComponent = () => {
  const { branchUuid } = useParams();
  const { data: branchInfo, isLoading } = useGetBranchQuery(
    DATABASE_CONFIG,
    { branchUuid: branchUuid as string },
    { enabled: !!branchUuid },
  );
  const { mutate: getMergeInfo, isLoading: isMergeInfoLoading } = useGetMerge();
  const [isImportJsonModalOpen, setIsImportJsonModalOpen] = useState<boolean>(false);
  const [selectedMergeBranch, setSelectedMergeBranch] = useState<BranchItem | null>(null);
  const branch = branchInfo?.branches[0];

  if (isLoading) {
    return <>loading...</>;
  }

  const handleMergeBranch = async () => {
    if (!branch) {
      return;
      // todo show toast
    }
    if (!selectedMergeBranch) {
      return;
      // todo show toast
    }
    const mergeInfo = await getMergeInfo({ fromBranchId: branch?.id, intoBranchId: selectedMergeBranch?.id });
    console.log(mergeInfo);
    // await mergeBranch({ fromBranchId: String(branch?.id), intoBranchId: selectedMergeBranch?.id, projectId: branch?.project.id });
    // todo show toast
  };

  const otherBranches = (branchInfo?.branches?.[0]?.project?.branches || []).filter(b => b.uuid !== branchUuid);

  return (
    <>
      Company:{branch?.project?.company?.name}
      <br />
      Project: {branch?.project?.name}
      <br />
      Branch: {branch?.name}
      <br />
      <Button label={$t('Import JSON')} onClick={() => setIsImportJsonModalOpen(true)} />
      <ImportLanguageFromJsonModal isOpen={isImportJsonModalOpen} onClose={() => setIsImportJsonModalOpen(false)} />
      <br />
      Merge branch into:{' '}
      <Select<BranchItem, false> onChange={setSelectedMergeBranch} options={otherBranches} value={selectedMergeBranch} />
      <Button label={$t('Merge')} onClick={() => handleMergeBranch()} />
    </>
  );
};
