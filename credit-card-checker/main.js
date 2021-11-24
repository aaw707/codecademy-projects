// js array practice

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

// return true when an arr contains digits of a valid credit card number
// return false when it's invalid
// do not mutate the value of the original arr
// use Luhn algorithm to find out of a credit card number is valid or not
const validateCred = arr => {
    // use a helper function
    // if the sum % 10 is 0, it's valid
    return validateSumDigits(arr) === 0
}
// helper function created for validateCred and convertIntoValid
// return the module of sum of digits 
const validateSumDigits = arr => {
    let digitSum = 0
    let element
    // starting from the farthest digit to the right, iterate to the left
    for (let i = 1; i <= arr.length; i++) {
        element = arr[arr.length - i]
        // double every other digit
        if (i % 2 === 0) {
            // the sum of each digit after doubling
            if (element * 2 > 9) {
                digitSum += element * 2 - 9
            } else {
                digitSum += element * 2
            }
        } else {
            digitSum += element
        }
        //console.log(digitSum)
    }
    return digitSum % 10
}

// batch is a nested array of credit card numbers
findInvalidCards = batch => {
    console.log('Looking for invalid credit cards...')
    for (let j = 0; j < batch.length; j++) {
        //console.log(batch[j])
        console.log(j, validateCred(batch[j]))
    }
}
// testing
//findInvalidCards(batch)

// batch is a nested array of invalid numbers
// returns an arr of companies
// first digits:
// 3: Amex (American Express)
// 4: Visa
// 5: Mastercard
// 6: Discover
// each company should only be returned once at most
idInvalidCardCompanies = batch => {
    console.log('Here is the list of companies where these invalid credit cards are from')
    let companyList = []
    let company
    for (let i = 0; i < batch.length; i++) {
        switch (batch[i][0]) {
            case 3:
                company = 'Amex (American Express)'
                break
            case 4:
                company = 'Visa'
                break
            case 5:
                company = 'Mastercard'
                break
            case 6:
                company = 'Discover'
                break
        }
        if (!companyList.includes(company)) {
            companyList.push(company)
        }        
    }
    return companyList
}
//testing
const invalidCards = batch.slice(5, 10)
//console.log(idInvalidCardCompanies(invalidCards))

// accept a string and convert it into an array of numbers
const converter = str => str.split('').map(x => Number(x))
// more test cases from https://www.freeformatter.com/credit-card-number-generator-validator.html
// should all be valid according to the algorithm
const newTests = [
    '4539176732965066', 
    '6011899358562485', 
    '30029236647791', 
    '4175005594611774', 
    '5479298017619785', 
    '3536153672379231', 
    '36340315683878', 
    '6382685444266020', 
    '372123676928930', 
    '5574282776682600', 
    '6304391770323452'
]
// put the new test cases into a batch
let newBatch = []
for (let test of newTests) {
    newBatch.push(converter(test))
}
// test the new batch
//findInvalidCards(newBatch)
// all tests pass

// convert the invalid numbers into valid numbers
convertIntoValid = arr => {
    // if the input is already valid
    if (validateCred(arr)) {
        return arr
    }
    // if the input is not valid, get the module of sum of digits
    //console.log('arr', arr)
    console.log('converting invalid credit card number into a valid one...')
    const moduleDigits = validateSumDigits(arr)
    if (moduleDigits <= arr[arr.length - 1]) {
        arr[arr.length - 1] = arr[arr.length - 1] - moduleDigits
        //console.log('edited', arr)
        return arr
    } else { // moduleDigits > arr[arr.length - 1] // if === then arr is already valid
        arr[arr.length - 1] = 10 - moduleDigits + arr[arr.length - 1]
        //console.log('edited', arr)
        return arr
    }

}
//testing
//invalidCards.forEach(card => console.log(validateCred(convertIntoValid(card))))
// all tests pass

    