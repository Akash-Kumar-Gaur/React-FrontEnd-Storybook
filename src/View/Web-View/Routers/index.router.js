import React from 'react';

import DemoScene from './../Scenes/Demo-Scene/demo.scene';
import Test from '../Scenes/Demo-Scene-2/demo2.scene';

export default class extends React.Component {
    render() {
        return (
            <div style={{ padding: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'linear-gradient(0deg,#1f2d3d,#121b25)', color: '#fff', height: '100vh' }}>
                <h1>Welcome to Drivezy Web</h1>
                <Test />
                <DemoScene />
            </div>
        )
    }
}