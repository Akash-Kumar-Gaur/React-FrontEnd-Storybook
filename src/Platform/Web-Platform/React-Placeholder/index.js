/**
 * React-placeholder wrapper uses react-placeholder
 * 
 * 
 * to use React-Placeholder import ShimmingEffect as
 * import { ShimmingEffect } from 'Platform/Web-Platform/React-Placeholder';
 * and use
 * <ShimmingEffect />
 * 
 * This accepts following props
 * 
 * children (node/element)(required)
 * ready (boolean))(required)
 * delay (number)
 * firstLaunchOnly (boolean)
 * showLoadingAnimation (boolean)(default = true)
 * type (string)['text', 'media', 'textRow', 'rect', 'round'] (default = 'rect')
 * rows (number)
 * color (string) (default = '#eaeef0')
 * customPlaceholder (node/element)
 * 
 * Example- <ShimmingEffect style={{ width: 300, marginTop: 20 }} rows={5}/>
 * 
 * File author  - akash.gaur@drivezy.com
 */

export * from './reactPlaceholder.component';