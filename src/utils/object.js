/**
 *  Deep Freeze Object
 ***********************/
function deepFreeze(obj) {
  Object.freeze(obj)
  if (obj === undefined) {
    return obj
  }

  Object.getOwnPropertyNames(obj).forEach(function (prop) {
    if (
      obj[prop] !== null &&
      (typeof obj[prop] === 'object' || typeof obj[prop] === 'function') &&
      !Object.isFrozen(obj[prop])
    ) {
      deepFreeze(obj[prop])
    }
  })

  return obj
}

/**
 *  Check Object Is Empty
 ***************************/
function isEmpty(obj) {
  return Object.keys(obj).length === 0
}

/**
 *  Check Object
 ***************************/
function isObject(A) {
  return (typeof A === 'object' || typeof A === 'function') && A !== null
}

/**
 *  Convert Object To Array
 ***************************/
function objectToArray(obj) {
  return !isEmpty(obj)
    ? Object.entries(obj).map(([key, value]) => {
        return { [key]: value }
      })
    : []
}

/**
 * Deep Clone Object
 ************************/
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj))
}

/**
 * Create an object composed of the picked object properties
 ************************/
function pick(object, keys) {
  if (isObject(object)) {
    const obj = {}
    keys.forEach((key) => {
      if (key in object) {
        obj[key] = object[key]
      }
    })

    return obj
  } else {
    throw 'please enter object type'
  }
}

module.exports = {
  deepFreeze,
  isEmpty,
  isObject,
  objectToArray,
  deepClone,
  pick
}
