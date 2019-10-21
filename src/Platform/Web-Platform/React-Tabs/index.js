/**
 * React-Tabs wrapper uses react-tabs
 * 
 * to use React-Tabs import ReactTabs as
 * import { ReactTabs } from 'Platform/Web-Platform/React-Tabs';
 * and use
 * <ReactTabs tabs={ /* your tabs array of object /* }/>
 * 
 * Tabs array should have objects with following keys
 * {
    name: <tabname>, (Required) (Not required if custom tab header component is used)
    icon: <tab-icon>, (Required) (Not required if custom tab header component is used)
    headerComponent: {node/element/component} (optional) <For showing custom tab label>

    component: {node/element/component} (required)
 * }
 * 
 * For other props refer ---> https://github.com/reactjs/react-tabs
 * 
 * To pass props to this wrapper.
 *  for <Tabs> props => pass as tabsProps={{ defaultIndex: 1 }}
 *  same as for <Tab> as tabProps={{}}
 * , <TabList> as tabListProps={{}}
 * , <TabPanel> as tabPanelProps={{}}
 * 
 * example=
 *    <ReactTabs 
 *      tabsArray={infoFields} 
 *      tabsProps={{ defaultIndex: 1 }} 
 *      tabListProps={{ className: 'list_item' }} 
 *      tabProps={{ disabled: true }} 
 *      tabPanelProps={{ selectedClassName: 'panel_selected' }}
 *    />
 * 
 * File author  - akash.gaur@drivezy.com
 */

export * from './reactTabs.component';