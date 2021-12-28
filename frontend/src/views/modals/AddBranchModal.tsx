import React, { FunctionComponent, useEffect, useState } from 'react';

import { Button } from '../../components/Button/Button';
import { Form } from '../../components/Form/Form';
import { FormGroup } from '../../components/Form/FormGroup/FormGroup';
import { Modal } from '../../components/Modal/Modal';
import { ModalBody, ModalFooterRight } from '../../components/Modal/Modal.slots';
import { Select } from '../../components/Select/Select';
import { TextInput } from '../../components/TextInput/TextInput';
import { USER_UUID } from '../../constants/user';
import { $t } from '../../helpers/i18n';
import { DATABASE_CONFIG } from '../../queries/config/database.constants';
import { useAddBranchMutation, useGetCompaniesAndProjectsQuery } from '../../queries/config/graphql-generated-types';
import { Company, Project } from '../../queries/type-aliasses';

interface AddBranchModalProps {
  initialCompany: Company | null;
  initialProject: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const AddBranchModal: FunctionComponent<AddBranchModalProps> = ({ isOpen, onClose, initialCompany, initialProject }) => {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(initialCompany);
  const [selectedProject, setSelectedProject] = useState<Project | null>(initialProject);
  const { data: companiesAndProjects } = useGetCompaniesAndProjectsQuery(DATABASE_CONFIG, { userUuid: USER_UUID });
  const [branchName, setBranchName] = useState<string>('');
  const { mutateAsync: addBranch } = useAddBranchMutation(DATABASE_CONFIG);

  const company = selectedCompany || initialCompany;
  const project = selectedProject || initialProject;

  const inputRef = React.createRef<HTMLInputElement>();

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef]);

  const handleClose = () => {
    setBranchName('');
    onClose();
  };

  const handleAddCompanyButtonClick = async () => {
    if (!project) {
      // TODO toast
      return;
    }
    await addBranch({ branchName, projectId: project.id });
    handleClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size='small' title={$t('Add branch to project')}>
      <ModalBody>
        {!!companiesAndProjects?.companies?.length && (
          <Form>
            <FormGroup label={$t('Company')} labelFor='select-company'>
              <Select<Company, false>
                id='select-company'
                key={`select-company-${initialCompany?.id}`}
                onChange={setSelectedCompany}
                options={companiesAndProjects?.companies || []}
                value={company}
              />
            </FormGroup>
            <FormGroup label={$t('Project')} labelFor='select-project'>
              <Select<Project, false>
                id='select-project'
                key={`select-project-${initialProject?.id}`}
                onChange={setSelectedProject}
                options={company?.projects || []}
                value={project}
              />
            </FormGroup>
            <FormGroup label={$t('Branch name')} labelFor='branch-name'>
              <TextInput id='branch-name' onChange={setBranchName} ref={inputRef} type='text' value={branchName} />
            </FormGroup>
          </Form>
        )}
      </ModalBody>
      <ModalFooterRight>
        <Button onClick={handleAddCompanyButtonClick} type='primary'>
          {$t('Add Branch')}
        </Button>
      </ModalFooterRight>
    </Modal>
  );
};
