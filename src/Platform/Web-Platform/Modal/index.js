/**
 * Modal wrapper uses @atlaskit/modal-dialog 
 * modal.component is being imported only one time in project to register in dom
 * util class provides open, close, registerModal methods
 * 
 * To register modal refer below code, add this snippet in high order component
 * import { Modal, ModalWrapper } from 'Platform/Web-Platform/Bottom-Sheet';
 * <ModalWrapper ref={(elem) => Modal.registerModal(elem)} />
 * 
 * to use modal
 * Modal.open({ heading: 'Heading string', component: <Component />, isClose, fullScreen });
 * Modal.close();
 * 
 * File author  - shubham.kesarwani@drivezy.com
 */

export * from './modal.component';
export * from './modal.utils';
