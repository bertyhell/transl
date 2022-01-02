import React, { FunctionComponent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Button } from '../../components/Button/Button';
import { Form } from '../../components/Form/Form';
import { FormGroup } from '../../components/Form/FormGroup/FormGroup';
import { Modal } from '../../components/Modal/Modal';
import { ModalBody, ModalFooterRight } from '../../components/Modal/Modal.slots';
import { TextInput } from '../../components/TextInput/TextInput';
import { $t } from '../../helpers/i18n';
import { DATABASE_CONFIG } from '../../queries/config/database.constants';
import { useAddTermMutation, useGetBranchQuery } from '../../queries/config/graphql-generated-types';

interface AddTermModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddTermModal: FunctionComponent<AddTermModalProps> = ({ isOpen, onClose }) => {
  const { branchUuid } = useParams();
  const [termKey, setTermKey] = useState<string>('');
  const { data: branchInfo } = useGetBranchQuery(
    DATABASE_CONFIG,
    { branchUuid: branchUuid as string },
    { enabled: !!branchUuid },
  );
  const { mutateAsync: addTerm } = useAddTermMutation(DATABASE_CONFIG);

  const inputRef = React.createRef<HTMLInputElement>();
  const branch = branchInfo?.branches[0];

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef]);

  const handleAddTermButtonClick = async () => {
    if (!branch?.project) {
      // todo show error toast
      return;
    }
    await addTerm({ branchId: branch.id, key: termKey });
    handleClose();
  };

  const handleClose = () => {
    setTermKey('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size='small' title={$t('Add term')}>
      <ModalBody>
        <Form>
          <FormGroup label={$t('Term key')} labelFor='term-key'>
            <TextInput id='term-key' onChange={setTermKey} ref={inputRef} type='text' value={termKey} />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooterRight>
        <Button onClick={handleAddTermButtonClick} type='primary'>
          {$t('Add Term')}
        </Button>
      </ModalFooterRight>
    </Modal>
  );
};
