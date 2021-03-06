import { Placement } from '@popperjs/core';
import classnames from 'classnames';
import React, { FunctionComponent, ReactNode, useState } from 'react';
import { usePopper } from 'react-popper';

import { useClickOutside } from '../../hooks/useClickOutside';
import { useKeyPress } from '../../hooks/useKeyPress';
import { useSlot } from '../../hooks/useSlot';
import { Button } from '../Button/Button';
import { IconName } from '../icons';
import { Icon } from '../icons/Icon';
import { Menu } from '../Menu/Menu';
import { DropdownButton, DropdownContent } from './Dropdown.slots';

import './Dropdown.scss';

export interface DropdownProps {
  children: ReactNode;
  icon?: IconName;
  isOpen: boolean;
  label?: string;
  menuClassName?: string;
  menuWidth?: 'fit-content' | 'fit-trigger';
  onClose?: () => void;
  onOpen?: () => void;
  placement?: Placement;
  searchMenu?: boolean;
  triggerClassName?: string;
  triggerWidth?: 'fit-content' | 'full-width';
}

/**
 * This component provides a button that can show a flyout with some children inside of it.
 * The PopperJS library is used to provide the positioning logic for the flyout element.
 *
 * The nomenclature within this library is as follows:
 * - The button with down arrow is called the "reference"
 * - The flyout element that contains the children is called the "popper"
 */
export const Dropdown: FunctionComponent<DropdownProps> = ({
  children,
  icon,
  isOpen,
  label = '',
  menuClassName,
  // TODO re-enable this without causing an infinite render loop
  // https://github.com/popperjs/popper-core/issues/794#issuecomment-736727000
  // menuWidth = 'fit-trigger',
  onClose = () => {},
  onOpen = () => {},
  placement = 'bottom-start',
  searchMenu = false,
  triggerClassName,
  triggerWidth = 'fit-content',
}) => {
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);

  const dropdownButtonSlot = useSlot(DropdownButton, children);
  const dropdownContentSlot = useSlot(DropdownContent, children);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
    // modifiers:
    // 	menuWidth === 'fit-trigger'
    // 		? [
    // 				{
    // 					name: 'matchReferenceSize',
    // 					enabled: true,
    // 					effect({ state }) {
    // 						state.elements.popper.style.width = `${
    // 							(state.elements.reference as HTMLElement).offsetWidth
    // 						}px`;
    // 					},
    // 					phase: 'beforeWrite',
    // 					requires: ['computeStyles'],
    // 				},
    // 		  ]
    // 		: [],
  });

  const toggle = (openState = !isOpen) => {
    if (openState !== isOpen) {
      openState ? onOpen() : onClose();
    }
  };

  const toggleClosed = () => toggle(false);

  useKeyPress('Escape', toggleClosed);
  useClickOutside(popperElement as Element, toggleClosed, [referenceElement as Element]);

  return (
    <>
      <div
        className={classnames(triggerClassName, {
          'c-dropdown__trigger': triggerWidth === 'fit-content',
        })}
        onClick={() => toggle()}
        ref={setReferenceElement}>
        {dropdownButtonSlot || (
          <Button block={triggerWidth === 'full-width'} type='secondary'>
            <div className='c-button__content'>
              {icon && <Icon name={icon} />}
              {label && <div className='c-button__label'>{label}</div>}
              {!icon && <Icon name={isOpen ? 'CaretUp' : 'CaretDown'} />}
            </div>
          </Button>
        )}
      </div>

      <div
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
        className={isOpen ? 'c-dropdown__content-open' : 'c-dropdown__content-closed'}>
        <Menu className={classnames(menuClassName, 'c-dropdown__menu')} isOpen={isOpen} search={searchMenu}>
          {dropdownContentSlot || children}
        </Menu>
      </div>
    </>
  );
};
