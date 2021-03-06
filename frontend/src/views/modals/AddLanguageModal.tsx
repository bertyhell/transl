import React, { FunctionComponent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ActionMeta } from 'react-select';
import { OnChangeValue } from 'react-select/dist/declarations/src/types';

import { Button } from '../../components/Button/Button';
import { Form } from '../../components/Form/Form';
import { FormGroup } from '../../components/Form/FormGroup/FormGroup';
import { LanguageMultiSelect } from '../../components/LanguageSelect/LanguageMultiSelect';
import { Modal } from '../../components/Modal/Modal';
import { ModalBody, ModalFooterRight } from '../../components/Modal/Modal.slots';
import { Select } from '../../components/Select/Select';
import { USER_UUID } from '../../constants/user';
import { $t } from '../../helpers/i18n';
import { DATABASE_CONFIG } from '../../queries/config/database.constants';
import {
  Branch_Languages_Insert_Input,
  useAddProjectLanguageLinksMutation,
  useGetCompaniesAndProjectsQuery,
} from '../../queries/config/graphql-generated-types';
import { Branch, Company, Language, Project } from '../../queries/type-aliasses';

interface AddLanguageModalProps {
  initialBranch: Branch | null;
  initialCompany: Company | null;
  initialProject: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const AddLanguageModal: FunctionComponent<AddLanguageModalProps> = ({
  isOpen,
  onClose,
  initialCompany,
  initialProject,
  initialBranch,
}) => {
  const { branchUuid } = useParams();
  const { data: companiesAndProjects } = useGetCompaniesAndProjectsQuery(DATABASE_CONFIG, { userUuid: USER_UUID });
  const { mutateAsync: addBranchLanguages } = useAddProjectLanguageLinksMutation(DATABASE_CONFIG);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
  const [selectedLanguages, setSelectedLanguages] = useState<Language[]>([]);

  const company = selectedCompany || initialCompany;
  const project = selectedProject || initialProject;
  const branch = selectedBranch || initialBranch;

  // Set initially selected project
  useEffect(() => {
    if (!companiesAndProjects) {
      return;
    }
    companiesAndProjects.companies.forEach(company => {
      company.projects.forEach(project => {
        project.branches.forEach(branch => {
          if (branch.uuid === branchUuid) {
            setSelectedCompany(selectedCompanyTemp => {
              if (selectedCompanyTemp) {
                return selectedCompanyTemp;
              }
              return company;
            });

            setSelectedProject(selectedProjectTemp => {
              if (selectedProjectTemp) {
                return selectedProjectTemp; // Don't update selected project if already set
              }
              return project;
            });

            setSelectedBranch(selectedBranchTemp => {
              if (selectedBranchTemp) {
                return selectedBranchTemp; // Don't update selected branch if already set
              }
              return branch;
            });
          }
        });
      });
    });
  }, [companiesAndProjects, branchUuid, setSelectedCompany, setSelectedProject, setSelectedBranch]);

  const handleClose = () => {
    setSelectedLanguages([]);
    onClose();
  };

  const handleAddLanguageButtonClick = async () => {
    const branch = selectedBranch || initialBranch;
    if (!branch) {
      // TODO toast error
      return;
    }
    await addBranchLanguages({
      branchLanguages: (selectedLanguages || []).map((selectedLanguage): Branch_Languages_Insert_Input => {
        return {
          branch_id: branch.id,
          language_id: selectedLanguage.id,
        };
      }),
    });
    handleClose();
  };

  const handleLanguageChanged = (newValue: OnChangeValue<Language, true>, _actionMeta: ActionMeta<Language>) => {
    setSelectedLanguages(newValue as Language[]);
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size='small' title={$t('Add languages to project')}>
      <ModalBody>
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
              options={selectedCompany?.projects || []}
              value={project}
            />
          </FormGroup>
          <FormGroup label={$t('Branch')} labelFor='select-branch'>
            <Select<Branch, false>
              id='select-branch'
              key={`select-branch-${initialBranch?.id}`}
              onChange={setSelectedBranch}
              options={selectedProject?.branches || []}
              value={branch}
            />
          </FormGroup>
          <FormGroup label={$t('Languages')} labelFor='select-languages'>
            <LanguageMultiSelect onChange={handleLanguageChanged} value={selectedLanguages} />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooterRight>
        <Button onClick={handleAddLanguageButtonClick} type='primary'>
          {selectedLanguages.length > 1 ? $t('Add Languages') : $t('Add Language')}
        </Button>
      </ModalFooterRight>
    </Modal>
  );
};
