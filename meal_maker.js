// create a meun for a restaurant
let menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },

    // show the appetizers
    get appetizers () {
      if (this._courses.appetizers) {
        return this._courses.appetizers
      } else {
        return 'No appetizer available'
      }
    },

    // show the mains
    get mains () {
      if (this._courses.mains) {
        return this._courses.mains
      } else {
        return 'No main available'
      }
    },

    // show the desserts
    get desserts () {
      if (this._courses.desserts) {
        return this._courses.desserts
      } else {
        return 'No dessert available'
      }
    },

    // show the course, which includes the appetizers, mains, and desserts
    get course () {
      return {
        appetizers: this._courses.appetizers,
        mains: this._courses.mains,
        desserts: this._courses.desserts
      }
    },

    // add a dish to a course (appetizers, mains, or desserts)
    addDishToCourse (courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice
      }
      this._courses[courseName].push(dish)
    },

    // get a random dish from a course (appetizers, mains, or desserts)
    getRandomDishFromCourse (courseName) {
      const dishes = this._courses[courseName]
      const randomIndex = Math.floor(Math.random() * dishes.length)
      return dishes[randomIndex]
    },

    // generate a random meal with an appetizer, a main, and a dessert
    // show the individual and total price
    generateRandomMeal () {
      const appetizer = this.getRandomDishFromCourse('appetizers')
      const main = this.getRandomDishFromCourse('mains')
      const dessert = this.getRandomDishFromCourse('desserts')
      const total_price = appetizer.price + main.price + dessert.price
      // show the greetings and the meal
      return `Welcome to my restaurant.\nToday's appetizer is ${appetizer.name} for \$${appetizer.price}.\nMain is ${main.name} for \$${main.price}.\nDessert is ${dessert.name} for \$${dessert.price}\nThe total price is \$${total_price}`
    }
  }


  // add dishes to the menu
  // appetizers
  menu.addDishToCourse('appetizers', 'chicken Wings', 3)
  menu.addDishToCourse('appetizers', 'tacos', 4)
  menu.addDishToCourse('appetizers', 'fries', 2)
  // mains
  menu.addDishToCourse('mains', 'pizza', 12)
  menu.addDishToCourse('mains', 'noodles', 8)
  menu.addDishToCourse('mains', 'sushi', 6)
  //desserts
  menu.addDishToCourse('desserts', 'ice-cream', 3)
  menu.addDishToCourse('desserts', 'smoothie', 4)
  menu.addDishToCourse('desserts', 'cake', 5)

  // generate a random meal
  const meal = menu.generateRandomMeal()
  // show the meal
  console.log(meal)