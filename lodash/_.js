// create the object
const _ = {
    
    // implement clamp()
    // return the number inside the bound
    clamp (number, lowerBound, upperBound) {
        return Math.min(Math.max(number, lowerBound), upperBound)
    },

    // implement inRange()
    // return a boolean if the number is in range (start inclusive, end exclusive)
    // if start > end, exchange start and finish to support negative values
    // if only 2 arguments are given, let them be num and end; set start = 0
    inRange (num, end, start = 0) {
        if (start > end) {
            const tmp = start
            start = end
            end = tmp
        }
        return num >= start && num < end
    },

    // implement words()
    // split strings by white spaces
    // ignore the "pattern" parameter in the original function
    words (str) {
        return str.split(' ')
    },

    // implement pad()
    // add spaces evenly to both sides of the string to make it to the desired length
    // extra padding is added to the end of the string if odd amount required
    pad (str, length) {
        // base case: don't need padding
        if (str.length >= length) {
            return str
        }
        // needing padding
        const space = ' '
        return space.repeat(Math.floor((length - str.length) / 2)) + str + space.repeat(Math.ceil((length - str.length) / 2))
    },

    // implement has()
    // check if the object contains the key and return a boolean
    has (obj, key) {
        if (obj[key] === undefined) {
            return false 
        } else {
            return true
        }
    },

    // implement invert()
    // swap each key and values
    invert (obj) {
        for (key in obj) {
            if (key !== obj[key]) {
                obj[obj[key]] = key
                delete obj[key]
            }
        }
        return obj
    },
    
    // implement findKey()
    // the predicateFunc is a function that returns a boolean
    // iterates each key/value pair in the obj and call the predicateFunc with the value
    // returns the first key that gets true from predicateFunc
    // or returns undefined if all key/value pairs come back false
    findKey (obj, predicateFunc) {
        for (key in obj) {
            if (predicateFunc(obj[key])) {
                return key
            }
        }
        return undefined
    },

    // implement drop()
    // num: num of items to drop from the beginning of the array
    // returns a new arr with items dropped
    // if num not specified, drop 1 item
    drop (arr, num = 1) {
        return arr.slice(num)
    },

    // implement dropWhile()
    // drop elements from the beginning of the arr until an element causes false from predicateFunc
    // the predicateFunc takes 3 arguments: 
    //// the current element, the current element index, and the whole array    
    dropWhile (arr, predicateFunc) {
        let arrCopy = arr.slice()
        while (predicateFunc(arrCopy[0], 0, arrCopy)) {
            arrCopy.shift()
        }
        return arrCopy
    },
    
    // implement chunk()
    // breaks up arr into the specified size
    // returns an arr containing all the previously-created arr chunks in the order of the original array
    // the last chunk can be smaller than size, if needed
    // default size = 1
    chunk (arr, size = 1) {
        arrChunks = []
        for (let i = 0; i < arr.length; i += size) {
            arrChunks.push(arr.slice(i, i + size))
        }
        return arrChunks
    }
}



// Do not write or modify code below this line.
module.exports = _;