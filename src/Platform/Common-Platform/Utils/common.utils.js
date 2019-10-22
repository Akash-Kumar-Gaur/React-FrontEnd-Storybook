/*
Implements utility functions to be used across project
*/
// import _ from 'lodash';
import GLOBAL from './../../Constants/global.constants';
import { DATA_TYPES } from '../../Constants/string.constants';
// import { VEHICLE_TRANSMISSION, FUEL_TYPE } from '../Constants/lookupValue.constant';
/**
 * Check for internet connection
 * @todo as of now method returns true, implement method properly
 */
export function CheckInternet() {
    return true;
}

/**
 * returns matched option from array against mentioned attribute value(in case of array of objects)
 * or element(in case of plain array)
 * @param  {array} hayStack - array
 * @param  {} needle - value
 * @param  {string} element - attribute name
 * @param  {int} defaultElement - if element not found, returns element of default index
 */
export function SelectFromOptions(hayStack, needle, element, defaultElement, shouldNotSendDefaultElement) {
    defaultElement = defaultElement || 0;
    const isArray = IsUndefinedOrNull(element);
    for (let i in hayStack) {
        if (isArray) {
            if (hayStack[i] == needle)
                return hayStack[i];
        } else {
            if (hayStack[i][element] == needle)
                return hayStack[i];
        }
    }

    if (!shouldNotSendDefaultElement) {
        const finalElement = hayStack[defaultElement];

        return finalElement || hayStack[0];
    }
    return null;
}

export function IsUndefinedOrNull(value) {
    return !value || value == null || value === '';
}

export function IsUndefined(value) {
    return typeof value == 'undefined';
    // return value === '';
}

export function isMobile() {
    const mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
    return mobile;
}

/**
 * Converts array to object
 * @param  {Array} array
 * @param  {string} key (optional)
 */
// Array.prototype.ArrayToObject = function (key) {
export function ArrayToObject(array, key) {
    // const array = this;
    const obj = {};

    array.forEach((element, index) => {
        if (!key) {
            obj[index] = element;
        } else if ((element && typeof element == 'object' && element[key])) {
            obj[element[key]] = element;
        }
    });
    return obj;
}

export function CopyToClipBoard(text) {
    // @todo remove below code after sometime
    // const temp = document.createElement("textarea");
    // temp.innerHTML = text;
    // // temp.value = str;

    // const isRTL = document.documentElement.getAttribute('dir') == 'rtl';

    // temp.style.fontSize = '12pt';
    // // Reset box model
    // temp.style.border = '0';
    // temp.style.padding = '0';
    // temp.style.margin = '0';
    // // Move element out of screen horizontally
    // temp.style.position = 'absolute';
    // temp.style[ isRTL ? 'right' : 'left' ] = '-9999px';
    // // Move element to the same position vertically
    // let yPosition = window.pageYOffset || document.documentElement.scrollTop;
    // temp.style.top = `${yPosition}px`;

    // temp.setAttribute('readonly', '');
    // // temp.value = text;




    // document.body.appendChild(temp);

    // temp.select();
    // document.execCommand("copy");
    // document.body.removeChild(temp);
    // return text;



    var textArea,
        copy;

    function isOS() {
        return navigator.userAgent.match(/ipad|iphone/i);
    }

    function createTextArea(text) {
        textArea = document.createElement('textArea');
        textArea.value = text;
        document.body.appendChild(textArea);
    }

    function selectText() {
        var range,
            selection;

        if (isOS()) {
            // @todo remove below line after sometime
            // const isRTL = document.documentElement.getAttribute('dir') == 'rtl';
            // textArea.style.fontSize = '12pt';
            // Reset box model
            // textArea.style.border = '0';
            // textArea.style.padding = '0';
            // textArea.style.margin = '0';
            // Move element out of screen horizontally
            // textArea.style.position = 'absolute';
            // textArea.style[isRTL ? 'right' : 'left'] = '-9999px';
            // Move element to the same position vertically
            // let yPosition = window.pageYOffset || document.documentElement.scrollTop;
            // textArea.style.top = `${yPosition}px`;

            textArea.setAttribute('readonly', '');

            range = document.createRange();
            range.selectNodeContents(textArea);
            selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            textArea.setSelectionRange(0, 999999);
        } else {
            textArea.select();
        }
    }

    function copyToClipboard() {
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }

    createTextArea(text);
    selectText();
    copyToClipboard();

    return text;
}

/**
 * Checks if two given objects are same 
 * NOTE: Mainly used in persitance for identifying if two params are same
 * @param  {object} object
 * @param  {object} otherObject
 */
export function IsEqualObject(value, other) {
    // return _.isEqual(object, otherObject);

    // Get the value type
    var type = Object.prototype.toString.call(value);

    // If the two objects are not the same type, return false
    if (type !== Object.prototype.toString.call(other)) return false;

    // If items are not an object or array, return false
    if (['[object Array]', '[object Object]'].indexOf(type) < 0) return false;

    // Compare the length of the length of the two items
    var valueLen = type === '[object Array]' ? value.length : Object.keys(value).length;
    var otherLen = type === '[object Array]' ? other.length : Object.keys(other).length;
    if (valueLen !== otherLen) return false;

    // Compare two items
    var compare = function (item1, item2) {

        // Get the object type
        var itemType = Object.prototype.toString.call(item1);

        // If an object or array, compare recursively
        if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
            if (!IsEqualObject(item1, item2)) return false;
        }

        // Otherwise, do a simple comparison
        else {

            // If the two items are not the same type, return false
            if (itemType !== Object.prototype.toString.call(item2)) return false;

            // Else if it's a function, convert to a string and compare
            // Otherwise, just compare
            if (itemType === '[object Function]') {
                if (item1.toString() !== item2.toString()) return false;
            } else {
                if (item1 !== item2) return false;
            }

        }
    };

    // Compare properties
    if (type === '[object Array]') {
        for (var i = 0; i < valueLen; i++) {
            if (compare(value[i], other[i]) === false) return false;
        }
    } else {
        for (var key in value) {
            if (value.hasOwnProperty(key)) {
                if (compare(value[key], other[key]) === false) return false;
            }
        }
    }

    // If nothing failed, return true
    return true;

};

/**
 * query params in generic utils methods have by default ' and ' prefix
 * this method remove that prefix 
 * Used Before making api call, 
 * @param  {object} options
 */
export function TrimQueryString(options) {
    if (options.query && typeof options.query == 'string') {
        options.query = options.query.replace(/^ and /, '');
    } else {
        delete options.query;
    }
    return options;
}

/**
 * Accepts various params as object and prepare url for get call
 * @param  {string} url
 * @param  {object} params
 */
export function BuildUrlForGetCall(url, params) {
    let newUrl = url + "?";
    for (const i in params) {
        const value = params[i];
        if (value) {
            newUrl += i + "=" + value + "&";
        }
    };
    return newUrl.slice(0, -1);
}

/**
 * Returns true if object is having keys
 * false if object is empty 
 * @param  {Object} obj
 */
export function IsObjectHaveKeys(obj) {
    return obj && typeof obj == 'object' && Object.keys(obj).length;
}

/*
 * find a nested object property inside of an object.
 * @param  {array} path
 * @param  {object} obj
 */
export function AccessNestedObject(obj, path, valueNotFound = undefined) {
    if (!((Array.isArray(path) || (typeof path == DATA_TYPES.STRING)) && obj && typeof obj == 'object')) {
      return valueNotFound;
    }
  
    if (typeof path == DATA_TYPES.STRING) {
      path = path.split('.');
    }
  
    return path.reduce((xs, x) => (xs && xs[x]) ? xs[x] : valueNotFound, obj)
  }


/**
 * Returns formatted number according to various country standard
 * @param  {number} {value
 * @param  {string} zone - for now supports in, us
 * @param  {string} currency} - can be INR, USD
 */
export function NumberFormatter({ value, country, currency }) {

    if (value % 1 != 0) { //checking decimal value is 00 then showing only interger value

        let zone = 'en-IN';
        // switch (country) {
        //     case 'in':
        //         zone = 'en-IN';
        //         break;
        //     default:
        //         zone = 'en-US';
        // }

        // let currencyObj = {};
        // if (currency) {
        //     currencyObj = { style: 'currency', currency };
        // }
        currency = GLOBAL.CURRENCY;
        let currencyObj = { style: 'currency', currency };

        return new Intl.NumberFormat(zone, currencyObj).format(value);
    } else {
        return `${GLOBAL.CURRENCY_SYMBOL} ${parseInt(value, 10)}`
    }
}

/**
 * Returns formatted price 
 * @param  {object} price
 */
export function DisplayPrice(price) {
    return `₹ ${parseFloat(price).toFixed(2)}`;
}

/**
 * Return true if array is not empty
 * false if array is empty
 */
export function IsEmptyArray(emptyArray) {
    return Array.isArray(emptyArray) && emptyArray.length;
}

export function GroupBy(Array, key) {
    return Array.reduce(function (obj, index) {
        (obj[index[key]] = obj[index[key]] || []).push(index);
        return obj;
    }, {});
};

/**
 * Debounce
 * @param {*} func 
 * @param {*} wait 
 * @param {*} immediate 
 */
export function DebounceFun(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

/**
 * Mobile validation
 * return boolen
 * @param {*} value 
 */
export function IsMobileValid(value) {
    let exp = (/^(\-)?([\d]+(?:\.\d{1,3})?)$/);
    return exp.test(value);
}

/**
 * Email validation
 * return boolen
 * @param {*} value 
 */
export function IsEmailValid(value) {
    let exp = (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return exp.test(value);
}

// /**
//  * Getting vehicle details depands of param like name, image
//  * @export
//  * @param {*} vehicle object type
//  * @param {*} param value
//  * @returns
//  */
// export function GetVehicleDetail(vehicle, param) {

//     let value;
//     const vehicleDetails = (vehicle.make ? vehicle.make : vehicle) || {};

//     switch (param) {
//         case "name":
//             value = vehicleDetails.name;
//             break;
//         case "image":
//             value = vehicleDetails.image;
//             break;
//         case "seats":
//             value = vehicleDetails.seats;
//             break;
//         case "abs":
//             value = vehicleDetails.abs;
//             break;
//         case "airBags":
//             value = vehicleDetails.air_bags;
//             break;
//         case "airConditioning":
//             value = vehicleDetails.air_conditioning;
//             break;
//         case "fuelType":
//             const fuelType = vehicleDetails.fuel_type;
//             value = (typeof (fuelType) === 'number') ? FUEL_TYPE[fuelType] : fuelType;
//             break;
//         case "transmission":
//             const transmission = vehicleDetails.transmission;
//             value = (typeof (transmission) === 'number') ? VEHICLE_TRANSMISSION[transmission] : transmission;
//             break;
//         case "model":
//             value = vehicleDetails.model;
//             break;


//         default:
//             value = '';
//     }
//     return value;
// }

export function AerialDistance(lat1, lon1, lat2, lon2, unit) {
    if ((lat1 == lat2) && (lon1 == lon2)) {
        return 0;
    }
    else {
        var radlat1 = Math.PI * lat1 / 180;
        var radlat2 = Math.PI * lat2 / 180;
        var theta = lon1 - lon2;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit == "K") { dist = dist * 1.609344 }
        if (unit == "N") { dist = dist * 0.8684 }
        return dist;
    }
}