/*************
 * Exposes Modal component's method available outside the render method
 * Takes reference of modal.component class
 *************/

export class Modal {

    _currentGlobalLoader = null;   //reference variable

    /**
     * getting reference of modal wrapper component
     */
    static registerModal(ref) {
        this._currentGlobalLoader = ref;
    }

    /**
     * @param  {object} {...args}
     * for opening Modal
     * component will be pass just like {component:()=><Test>} format
     */
    static open({ ...args }) {
        if (this._currentGlobalLoader) {
            this._currentGlobalLoader.openModal({ ...args });
        }
    }

    /**
     * for close modal
     */
    static close({ ...args } = {}) {
        if (this._currentGlobalLoader) {
            this._currentGlobalLoader.closeModal({ ...args });
        }
    }
}