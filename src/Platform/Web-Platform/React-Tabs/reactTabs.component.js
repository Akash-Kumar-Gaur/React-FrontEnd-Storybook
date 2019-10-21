import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import "react-tabs/style/react-tabs.css";
import './reactTabs.scss';

export class ReactTabs extends Component {
    render() {
        const { tabsArray = [], tabsProps = {}, tabListProps = {}, tabProps = {}, tabPanelProps = {} } = this.props;
        return (
            <div className='reactTabs-wrapper'>
                <Tabs {...tabsProps}>
                    <TabList {...tabListProps}>
                        {
                            tabsArray.map((field, key) => {
                                return (
                                    <Tab key={key} {...tabProps}>
                                        {
                                            (typeof field.headerComponent == 'function') ?
                                                field.headerComponent(field)
                                                :
                                                <div className='main-tab'><img className='tab-icon' src={field.icon} alt='' />{field.name}</div>
                                        }
                                    </Tab>
                                )
                            })
                        }
                    </TabList>

                    {
                        tabsArray.map((field, key) => {
                            return (
                                <TabPanel key={key} {...tabPanelProps}>
                                    {
                                        <div className='tab-content'>
                                            {field.component(field.data)}
                                        </div>
                                    }
                                </TabPanel>
                            )
                        })
                    }
                </Tabs>
            </div>
        );
    }
}