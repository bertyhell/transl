import React, { FunctionComponent, useState } from 'react';

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
import { useAddProjectMutation, useGetCompaniesAndProjectsQuery } from '../../queries/config/graphql-generated-types';
import { Company } from '../../queries/type-aliasses';

interface AddProjectModalProps {
  initialCompany: Company | null;
  isOpen: boolean;
  onClose: () => void;
}

export const AddProjectModal: FunctionComponent<AddProjectModalProps> = ({ isOpen, onClose, initialCompany }) => {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(initialCompany);
  const { data: companiesAndProjects } = useGetCompaniesAndProjectsQuery(DATABASE_CONFIG, { userUuid: USER_UUID });
  const [projectName, setProjectName] = useState<string>('');
  const { mutateAsync: addProject } = useAddProjectMutation(DATABASE_CONFIG);

  const handleAddCompanyButtonClick = async () => {
    if (!selectedCompany) {
      // TODO toast
      return;
    }
    await addProject({ companyId: selectedCompany.id, projectName });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='medium' title={$t('Add project to company')}>
      <ModalBody>
        <Form>
          <FormGroup label={$t('Company')} labelFor='select-company'>
            <Select<Company, false>
              id='select-company'
              onChange={setSelectedCompany}
              options={companiesAndProjects?.companies || []}
              value={selectedCompany}
            />
          </FormGroup>
          <FormGroup label={$t('Project name')} labelFor='project-name'>
            <TextInput id='project-name' onChange={setProjectName} type='text' value={projectName} />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooterRight>
        <Button onClick={handleAddCompanyButtonClick} type='primary'>
          {$t('Add Project')}
        </Button>
      </ModalFooterRight>
    </Modal>
  );
};
