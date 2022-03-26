import { Modal as ModalProps } from './Modal.types'

import { Icon } from '../Icon'

import './Modal.scss'

export const Modal = ({ open, onClose, head, body, footer, className = '' }: ModalProps) => {
  return (
    <div className={`Modal ${open ? 'Modal--open' : ''} ${className}`}>
      <div className='Modal__main'>
        <div className='Modal__head'>
          <div>{head}</div>
          <Icon icon='close' onClick={onClose} />
        </div>

        <div className='Modal__body'>
          {body}
        </div>
        
        <div className='Modal__footer'>
          {footer}
        </div>
      </div>
    </div>
  )
}