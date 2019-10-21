/**
 * Storage-Utility wrapper uses npm package with same name
 * 
 * Available methods
 * 
 * SetItem - Sets item in localStorage 
 * 
 * PARAMS - key, payload, isNonVolatile = false
 * 
 * By Default all the values are stored in an object against 'volatile' Key
 * Explicitly we can make isNonVolatile true to set value under 'nonVolatile'
 * Benefit of having two keywords is that we can delete all the items attached to particular keyword at once without affecting items under other keyword
 * 
 * Possible use case is when we want to delete all the values on logout event, we can delete all of them under volatile key
 * by invoking RemoveItem({ key: 'volatile'})
 * 
 * 
 * 
 * GetItem - Returns value for the given key
 * 
 * PARAMS - key, isNonVolatile = false
 *  
 * concept is same as above, by default it tries to fetch data from 'volatile' key unless explicity isNonVolatile is true
 * 
 * 
 * 
 * RemoveItem - Deletes whole item stored under 'volatile' or 'nonVolatile'
 * 
 * PARAMS - key {'volatile' | 'nonVolatile'}
 * 
 * 
 * File author  - shubham.kesarwani@drivezy.com
 */


export * from 'storage-utility';