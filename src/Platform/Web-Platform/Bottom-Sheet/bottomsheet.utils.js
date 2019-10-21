/*************
 * bottom sheet utils method takes component as a props
 *************/

// import ConfirmModal from '../Components/Confirm-Modal/confirmModal.component';
// import GenericInfo from '../Components/Generic-Info/genericInfo';


export class BottomSheet {

    _currentGlobalLoader = null;   //reference variable

    /**
     * getting reference of bottom wrapper component
     */
    static registerBottomsheet(ref) {
        this._currentGlobalLoader = ref;
    }

    /**
     * @param  {object} {...args}
     * for opening bottom sheet component
     * component will be pass just like {component:()=><Test>} format
     */
    static open({ ...args }) {
        if (this._currentGlobalLoader) {
            this._currentGlobalLoader.open({ ...args });
        }
    }

    /**
     * for closing the bottom sheet component
     */
    static close({ ...args }) {
        if (this._currentGlobalLoader) {
            this._currentGlobalLoader.close({ ...args });
        }
    }

    // static info({ description }) {
    //     this.open({
    //         component: () => <GenericInfo description={description} />
    //     })
    // }

    // /**
    //  * @param  {object} {...args}
    //  * for opening  the bottom sheet component for confirm modal 
    //  */
    // static confirm({ ...args }) {
    //     this.open({
    //         component: () => <ConfirmModal headingText={args.title} description={args.description} callback={args.callback} buttonText={args.buttonText} />
    //     })
    // }
}