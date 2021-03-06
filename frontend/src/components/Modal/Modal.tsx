import classnames from 'classnames';
import React, { Fragment, FunctionComponent, MouseEvent, ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { useKeyPress } from '../../hooks/useKeyPress';
import { useSlot } from '../../hooks/useSlot';
import { Button } from '../Button/Button';
import { ButtonToolbar } from '../ButtonToolbar/ButtonToolbar';
import { Toolbar } from '../Toolbar/Toolbar';
import { ToolbarLeft, ToolbarRight } from '../Toolbar/Toolbar.slots';
import { ToolbarItem } from '../Toolbar/ToolbarItem/ToolbarItem';
import { ModalBody, ModalFooterLeft, ModalFooterRight, ModalHeaderRight } from './Modal.slots';
import { ModalBackdrop } from './ModalBackdrop';

import 'react-perfect-scrollbar/dist/css/styles.css';
import './Modal.scss';

export interface ModalProps {
  children: ReactNode;
  className?: string;
  /**
   * false: enables the closing of the modal by clicking the backdrop () grey area around the modal)
   * true: modal will not close when clicking the backdrop
   */
  disableContextClick?: boolean;
  isOpen: boolean;
  onClose?: () => void;
  scrollable?: boolean;
  size?: 'small' | 'medium' | 'large' | 'extra-large' | 'fullscreen' | 'fullwidth' | 'auto';
  title?: string;
}

export const Modal: FunctionComponent<ModalProps> = ({
  children,
  className,
  disableContextClick = false,
  isOpen,
  title,
  size,
  scrollable,
  onClose,
}) => {
  const body = useSlot(ModalBody, children);
  const headerRight = useSlot(ModalHeaderRight, children);
  const footerRight = useSlot(ModalFooterRight, children);
  const footerLeft = useSlot(ModalFooterLeft, children);
  const [mouseDownLocation, setMouseDownLocation] = useState<{ x: number; y: number } | null>(null);

  useKeyPress('Escape', close);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isOpen]);

  function close() {
    onClose && onClose();
  }

  function onContextMouseDown(event: MouseEvent<HTMLElement>) {
    setMouseDownLocation({ x: event.clientX, y: event.clientY });
  }

  function onContextMouseUp(event: MouseEvent<HTMLElement>) {
    if (
      mouseDownLocation &&
      Math.abs(event.clientX - mouseDownLocation.x) < 5 &&
      Math.abs(event.clientY - mouseDownLocation.y) < 5
    ) {
      // user performed a click
      // close the modal when clicking outside the modal
      if (!disableContextClick && event.target === event.currentTarget) {
        close();
      }
    } // else: User performed a drag
    setMouseDownLocation(null);
  }

  const renderModalContent = () => {
    return (
      <>
        {(!!title || !!headerRight || !!onClose) && (
          <div className='c-modal__header c-modal__header__bordered'>
            <Toolbar autoHeight spaced>
              {title && (
                <ToolbarLeft>
                  <ToolbarItem>
                    <h2 className='c-modal__title' dangerouslySetInnerHTML={{ __html: title }} />
                  </ToolbarItem>
                </ToolbarLeft>
              )}
              <ToolbarRight>
                {headerRight && <ToolbarItem>{headerRight}</ToolbarItem>}
                {!!onClose && (
                  <ToolbarItem>
                    <Button ariaLabel='close modal' icon='X' onClick={close} type='borderless' />
                  </ToolbarItem>
                )}
              </ToolbarRight>
            </Toolbar>
          </div>
        )}
        {scrollable && (
          <PerfectScrollbar
            className='c-modal__body'
            options={{
              suppressScrollX: true,
              wheelPropagation: false,
            }}>
            {body}
          </PerfectScrollbar>
        )}
        {!scrollable && <div className='c-modal__body'>{body}</div>}
        {(footerLeft || footerRight) && (
          <div className='c-modal__footer c-modal__footer__bordered'>
            <Toolbar spaced>
              {footerLeft && (
                <ToolbarLeft>
                  <ToolbarItem>
                    <ButtonToolbar>{footerLeft}</ButtonToolbar>
                  </ToolbarItem>
                </ToolbarLeft>
              )}
              {footerRight && (
                <ToolbarRight>
                  <ToolbarItem>
                    <ButtonToolbar>{footerRight}</ButtonToolbar>
                  </ToolbarItem>
                </ToolbarRight>
              )}
            </Toolbar>
          </div>
        )}
      </>
    );
  };

  const classNames = classnames('c-modal', {
    'c-modal__extra-large': size === 'extra-large',
    'c-modal__fullscreen': size === 'fullscreen',
    'c-modal__fullwidth': size === 'fullwidth',
    'c-modal__height-auto': size === 'auto',
    'c-modal__large': size === 'large',
    'c-modal__medium': size === 'medium',
    'c-modal__scrollable': scrollable,
    'c-modal__small': size === 'small',
  });
  return ReactDOM.createPortal(
    <Fragment>
      <div
        className={classnames(className, 'c-modal-context', {
          'c-modal-context__visible': isOpen,
        })}
        onMouseDown={onContextMouseDown}
        onMouseUp={onContextMouseUp}>
        <div className={classNames}>{renderModalContent()}</div>
      </div>
      <ModalBackdrop visible={isOpen} />
    </Fragment>,
    document.body,
  );
};
