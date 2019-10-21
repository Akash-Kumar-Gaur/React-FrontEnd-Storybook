const moment = require('moment');

/**
 * calculates min and max allowed time for pickup
 * @param  {Object} slot - contains venue's pickup, drop and fixed time to calculate limit accordingly
 * @param  {number} chilloff - value in millisecond to get earliest pickup time
 * @returns Object containing - min and max time
 */
export function GetPickupLimit({ venuePickupTime, venueDropTime, venueFixedTime, chilloff }) {
    // add chilloff to the current minute to find the minutes left for next 30
    const pickupLimit = {};
    chilloff = chilloff || 0;
    let actualTime = moment().startOf('minute').add(chilloff, 'minutes');
    // let actualTime = moment().add(chilloff, 'minutes');
    let remainder = Math.abs(((moment(actualTime).minute()) % 30) - 30);
    remainder = parseInt(remainder);
    pickupLimit.min = new Date(moment(actualTime).add(remainder, 'minutes'));
    return pickupLimit;
};