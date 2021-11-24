// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// code above is provided by the project

// factory function to create multiple objects later
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum, // id number
    dna, // an array of dnas

    // mutate a random base in the dna
    mutate () {
      let randomPosition = Math.floor(Math.random() * this.dna.length)
      let newRandomBase
      const originalBase = this.dna[randomPosition]
      do {
        newRandomBase = returnRandBase()
      } while (newRandomBase === dna[randomPosition]) // the mutated base can't be the same as before
      dna[randomPosition] = newRandomBase
      console.log(`The base at position ${randomPosition} has mutated from ${originalBase} to ${newRandomBase}...`)
      return this.dna      
    },

    // compare the current obj's dna with the passed in obj's dna
    // compute how many bases are identical and in the same locatioins
    // do not return anything; print a message the percentage of common dnas // return for mostRelatedObjs()
    compareDNA (obj) {
      let commonCounter = 0
      // iterate through the dna to count the common dnas
      for (i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === obj.dna[i]) {
          commonCounter++
        }
      }
      // percentage of common dnas
      const pct = Math.round(commonCounter / this.dna.length * 100)
      // report the result
      console.log(`specimen ${this.specimenNum} and specimen ${obj.specimenNum} have ${pct}% DNA in common`)
      return pct
    },

    // obj is more likely to survive if its dna is made up at least 60% of C or G bases
    // return a boolean
    willLikelySurvive () {
      let counter = 0
      for (i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          counter++
        }
      }
      console.log(`${Math.round(counter / this.dna.length * 100, 2)}% of this specimen's dna is made of C or G bases`)
      return counter / this.dna.length >= 0.6
    },

    // returns the complementary DNA strand
    // A matches T, C matches G, and vice versa
    complementStrand () {
      let complementDNA = []
      this.dna.forEach(x => {
        switch (x) {
          case 'A':
            complementDNA.push('T')
            break
          case 'T':
            complementDNA.push('A')
            break
          case 'C':
            complementDNA.push('G')
            break
          case 'G':
            complementDNA.push('C')
            break
        }
      })
      return complementDNA
    }
  }
}

// create a batch of 30 for study
batch = []
for (i = 1; i < 31; i++) {
  batch.push(pAequorFactory(i, mockUpStrand()))
}

// checkout the first obj in batch
initialObj = batch[0]
console.log('checkout the first obj in our batch:')
console.log(initialObj)
console.log('\n')

// mutate the first obj
console.log('let\'s mutate our first obj')
console.log(initialObj.mutate())
console.log('\n')

// compare the dna of the first and second obj
console.log('we can compare the DNA components of first and second objs')
console.log('first obj\'s dna:', initialObj.dna)
console.log('second obj\'s dna:', batch[1].dna)
initialObj.compareDNA(batch[1])
console.log('\n')

// see if the first obj is likely to survive
console.log('Will the first obj be likely to survive?')
console.log(initialObj.willLikelySurvive())
console.log('\n')

// get a complementary DNA 
console.log('getting the complementary DNA...')
console.log('initial obj\'s dna', initialObj.dna)
console.log('complementary DNA', initialObj.complementStrand())
console.log('\n')

// find the two most related instances of objs in the batch
const mostRelatedObjs = batch => {
  console.log('Looking for the most related objects in the batch...')
  let maxPct = 0
  let obj1 = undefined 
  let obj2 = undefined
  // for each combination, find the common pct 
  for (i = 0; i < 14; i++) {
    for (j = i + 1; j < 15; j++) {
      let pct = batch[i].compareDNA(batch[j])
      if (pct > maxPct) {
        maxPct = pct
        obj1 = batch[i]
        obj2 = batch[j]
      }
    }
  }
  // report the result
  if (obj1) {
    console.log(`The most related objs have ${maxPct}% DNAs in common:`)
    console.log(`specimen ${obj1.specimenNum}: ${obj1.dna}`)
    console.log(`specimen ${obj2.specimenNum}: ${obj2.dna}`)
  } else {
    console.log('None of the specimen in this batch have any DNA in common. Is that possible?')
  }
}
// call the function
mostRelatedObjs(batch)