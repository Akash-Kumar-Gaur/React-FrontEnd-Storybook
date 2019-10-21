/**
 * Bottomsheet wrapper uses react-swipeable-bottom-sheet 
 * bottomsheet.component is being imported only one time in project to register in dom
 * util class provides open, close, registerBottomsheet methods
 * 
 * To register bottomsheet refer below code, add this snippet in high order component
 * import { BottomSheet, BottomSheetWrapper } from 'Platform/Web-Platform/Bottom-Sheet';
 * <BottomSheetWrapper ref={(elem) => BottomSheet.registerBottomsheet(elem)} />
 * 
 * to use bottomsheet
 * BottomSheet.open({ heading: 'Heading string', component: <Component />, isClose, fullScreen });
 * BottomSheet.close();
 * 
 * File author  - shubham.kesarwani@drivezy.com
 */

export * from './bottomsheet.utils';
export * from './bottomsheet.component';