import React, { Component } from 'react';
import './checkbox.component.scss';

export class CheckboxPWA extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value
        }
    }
    render() {
        const { label, onChange, key, disabled } = this.props;
        const { value } = this.state;
        return (
            <label className="checkbox-container-pwa" key={key}>
                <span className="heading label">{label}</span>
                <input type="checkbox" checked={value} disabled={disabled} onChange={() => onChange ? onChange(!value) : this.setState({ value: !value })} />
                <span className="checkmark"></span>
            </label>
        );
    }
}

// import React, { Component } from 'react';
// import './checkbox.component.scss';

// export default class CustomCheckBox extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         const { label, onChange, value, key } = this.props;
//         return (
//             <label className="checkbox-container" key={key}>
//                 <span className="heading label">{label}</span>
//                 <input type="checkbox" checked={value} onChange={() => onChange()} />
//                 <span className="checkmark"></span>
//             </label>
//             // <label className="checkbox-container" key={key} style={{ display: 'grid' }}>
//             //     <span>
//             //         {label}
//             //     </span>
//             //     <div className="round">
//             //         <input type="checkbox" id="checkbox" checked={value} onChange={() => onChange()} />
//             //         <label for="checkbox"></label>
//             //     </div>
//             // </label>
//         );
//     }
// }