let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// above is provided by the project

// split the words in the story into an array
const storyWords = story.split(' ')
// print the number of words
console.log('number of words in the story', storyWords.length)

// filter out the unnecessary words
const betterWords = storyWords.filter(word => !unnecessaryWords.includes(word))
// print the number of better words
console.log('number of words in the story excluding the unnecessary words', betterWords.length)

// find out how many times the story has used the over used words
for (let i = 0; i < overusedWords.length; i++) {
    let counts = storyWords.filter(word => word === overusedWords[i]).length
    console.log(`over used word "${overusedWords[i]}", ${counts} times`)
}

// find out the number of sentences in the story
// all sentences end with a period or an exclamation mark
let sentenceCounts = 0
for (i = 0; i < storyWords.length; i++) {
    if (storyWords[i].slice(-1) === '.' || storyWords[i].slice(-1) === '!') {
        sentenceCounts++
    }
}
console.log('The number of sentences in the story:', sentenceCounts)

// log the better words as a single string
//console.log(betterWords.join(' '))

// for the overused words, remove it every other time it appears
let kindaBetterWords = storyWords.slice()
for (let i = 0; i < unnecessaryWords.length; i++) {
    counter = 0
    for (let j = 0; j < kindaBetterWords.length; j++) {
        if (kindaBetterWords[j] === unnecessaryWords[i]) {
            counter++
            if (counter % 2 == 0) {
                kindaBetterWords.splice(i, 1)
            }
        }
    }
}
// the number of words after removing
console.log('kindaBetterWords', kindaBetterWords.length)

// write a function that finds the word that appears the greatest number of times
const findMostFrequentWord = arr => {
    // base case
    if (arr.length === 0) {
        return null 
    }
    let frequencyMap = {}
    let maxWord = ''
    let maxCount = 1
    
    // for each word in the array
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i]
        // if this word has not been counted
        if (!frequencyMap[word]) {
            // add it to the frequency map with count = 1
            frequencyMap[word] = 1
        // if it has been counted
        } else {
            // add 1 to the count
            frequencyMap[word]++
        }
        // if the count of this word is larger than the current maximum, let it be the maximum
        if (frequencyMap[word] > maxCount) {
            maxCount = frequencyMap[word]
            maxWord = word
        }
    }
    
    return `The word appears the greatest number of times is "${maxWord}", which appears ${maxCount} times.`
}
// test the function
console.log(findMostFrequentWord(storyWords))

// replace overused words with something else
// make a copy
let replacedWords = storyWords.slice()
for (i = 0; i < overusedWords.length; i++) {
    for (j = 0; j < storyWords.length; j++) {
        if (overusedWords[i] === replacedWords[j]) {
            replacedWords[j] = 'definitely'
        }
    }
}
// check the replacement
console.log(replacedWords.join(' '))