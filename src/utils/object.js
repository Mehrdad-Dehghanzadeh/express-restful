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
            (typeof obj[prop] === 'object' ||
                typeof obj[prop] === 'function') &&
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

module.exports = {
    deepFreeze,
    isEmpty,
    objectToArray,
    deepClone
}
