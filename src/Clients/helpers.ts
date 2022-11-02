/**
 * Recursively removes a key from an object
 * @param obj Object to remove key from
 * @param key Key to remove
 */
function recursivelyRemoveKey(obj: any, key: string): any {
  for (var i in obj) {
    if (!obj.hasOwnProperty(i)) continue;
    if (typeof obj[i] == 'object') {
      recursivelyRemoveKey(obj[i], key);
    } else if (i === key) {
      delete obj[i];
    }
  }
  return obj;
}

/**
 * Removes all provided keys from provided object
 * @param obj Object to remove keys from
 * @param keys List of keys to remove from object
 */
export function recursivelyRemoveKeys(obj: any, keys: string[]): any {
  let result = {};
  keys.forEach(key => {
    result = {
      ...result,
      ...recursivelyRemoveKey(obj, key),
    };
  });

  // @ts-ignore
  return result;
}
