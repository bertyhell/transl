import React, { FunctionComponent, useEffect, useState } from 'react';

import { Button } from '../../components/Button/Button';
import { Form } from '../../components/Form/Form';
import { FormGroup } from '../../components/Form/FormGroup/FormGroup';
import { Modal } from '../../components/Modal/Modal';
import { ModalBody, ModalFooterRight } from '../../components/Modal/Modal.slots';
import { TextInput } from '../../components/TextInput/TextInput';
import { $t } from '../../helpers/i18n';
import { DATABASE_CONFIG } from '../../queries/config/database.constants';
import { useAddCompanyMutation } from '../../queries/config/graphql-generated-types';

interface AddCompanyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddCompanyModal: FunctionComponent<AddCompanyModalProps> = ({ isOpen, onClose }) => {
  const [companyName, setCompanyName] = useState<string>('');
  const { mutateAsync: addCompany } = useAddCompanyMutation(DATABASE_CONFIG);

  const inputRef = React.createRef<HTMLInputElement>();

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef]);

  const handleAddCompanyButtonClick = async () => {
    await addCompany({ companyName });
    handleClose();
  };

  const handleClose = () => {
    setCompanyName('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size='small' title={$t('Add company')}>
      <ModalBody>
        <Form>
          <FormGroup label={$t('Company name')} labelFor='company-name'>
            <TextInput id='company-name' onChange={setCompanyName} ref={inputRef} type='text' value={companyName} />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooterRight>
        <Button onClick={handleAddCompanyButtonClick} type='primary'>
          {$t('Add Company')}
        </Button>
      </ModalFooterRight>
    </Modal>
  );
};
