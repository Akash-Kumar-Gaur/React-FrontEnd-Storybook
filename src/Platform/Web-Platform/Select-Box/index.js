/**
 * SelectBox wrapper uses react-select
 * 
 * 
 * to use SelectBox import SelectBox as
 * import { SelectBox } from 'Platform/Web-Platform/SelectBox';
 * and use
 * <SelectBox />
 * 
 * This accepts following props
 * 
 * isClearable (default = true)
 * onChange (fuction)
 * options={options} (array of object)
 * placeholder="Select"
 * field='label'
 * multi={false}
 * className="select-box"
 * styles={customStyles}
 * 
 * 
 * 
 * Example-     
 * 
 *      const customStyles = {
            control: (base, state) => ({
                ...base,
                height: '50px',
                'minHeight': '55px',
                'borderRadius': '6px !important',
                'background': '#ffffff',
                'border': '1px solid #bdbdbd70 !important',
                'boxShadow': '0 1px 4px 0 rgba(0,0,0,.21)'
            }),
        };

        const options = [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
        ]
        
        <SelectBox
            isClearable={false}
            onChange={this.onSelectOption}
            options={options}
            placeholder="Select venue"
            field='label'
            multi={false}
            className="select-box"
            styles={customStyles}
        />
 * 
 * File author  - akash.gaur@drivezy.com
 */

export * from './selectBox.component';