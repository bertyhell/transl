import React, { FunctionComponent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ActionMeta } from 'react-select';
import { OnChangeValue } from 'react-select/dist/declarations/src/types';

import { Button } from '../../components/Button/Button';
import { Form } from '../../components/Form/Form';
import { FormGroup } from '../../components/Form/FormGroup/FormGroup';
import { Modal } from '../../components/Modal/Modal';
import { ModalBody, ModalFooterRight } from '../../components/Modal/Modal.slots';
import { Select } from '../../components/Select/Select';
import { USER_UUID } from '../../constants/user';
import { $t } from '../../helpers/i18n';
import { DATABASE_CONFIG } from '../../queries/config/database.constants';
import {
  Project_Language_Link_Insert_Input,
  useAddProjectLanguageLinksMutation,
  useGetCompaniesAndProjectsQuery,
  useGetLanguagesQuery,
} from '../../queries/config/graphql-generated-types';
import { Company, Language, Project } from '../../queries/type-aliasses';

interface AddLanguageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddLanguageModal: FunctionComponent<AddLanguageModalProps> = ({ isOpen, onClose }) => {
  const { projectUuid } = useParams();
  const { data: companiesAndProjects } = useGetCompaniesAndProjectsQuery(DATABASE_CONFIG, { userUuid: USER_UUID });
  const { data: languagesResponse } = useGetLanguagesQuery(DATABASE_CONFIG);
  const { mutateAsync: addProjectLanguageLinks } = useAddProjectLanguageLinksMutation(DATABASE_CONFIG);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedLanguages, setSelectedLanguages] = useState<OnChangeValue<Language, true>>([]);

  // Set initially selected project
  useEffect(() => {
    if (!companiesAndProjects) {
      return;
    }
    companiesAndProjects.companies.forEach(company => {
      company.projects.forEach(project => {
        if (project.uuid === projectUuid) {
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
        }
      });
    });
  }, [companiesAndProjects]);

  const handleAddLanguageButtonClick = async () => {
    if (!selectedProject) {
      // TODO toast error
      return;
    }
    await addProjectLanguageLinks({
      projectLanguageLinks: selectedLanguages.map(
        (selectedLanguage): Project_Language_Link_Insert_Input => {
          return {
            language_id: selectedLanguage.id,
            project_id: selectedProject.id,
          };
        },
      ),
    });
    onClose();
  };

  const handleLanguageChanged = (newValue: OnChangeValue<Language, true>, _actionMeta: ActionMeta<Language>) => {
    setSelectedLanguages(newValue);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='medium'>
      <ModalBody>
        <Form>
          <FormGroup label={$t('Company')} labelFor='select-company'>
            <Select<Company, false>
              id='select-company'
              onChange={setSelectedCompany}
              options={companiesAndProjects?.companies || []}
            />
          </FormGroup>
          <FormGroup label={$t('Project')} labelFor='select-project'>
            <Select<Project, false> id='select-project' onChange={setSelectedProject} options={selectedCompany?.projects || []} />
          </FormGroup>
          <FormGroup label={$t('Languages')} labelFor='select-languages'>
            <Select<Language, true>
              id='select-languages'
              isMulti
              onChange={handleLanguageChanged}
              options={languagesResponse?.languages || []}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooterRight>
        <Button onClick={handleAddLanguageButtonClick} type='primary'>
          Add
        </Button>
      </ModalFooterRight>
    </Modal>
  );
};
