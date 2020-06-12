/*
 */
const menu = {
  _courses : {
    appetizers : [],
    mains : [],
    desserts : []
    },
  get appetizers(){
    return this._courses.appetizers;
  },
  get mains(){
    return this._courses.mains;
  },
  get desserts(){
    return this._courses.desserts;
  },

  set appetizers(appetizer){
    this._courses.appetizers = appetizer
  },
  set mains(mains){
    this._courses.mains = mains
  },
  set desserts(dessert){
    this._courses.desserts = dessert
  },

  get courses(){
    return {
      appetizers: this._courses.appetizer,
      mains: this._courses.mains,
      dessert: this._courses.desserts

      // using getters
      
      // appetizers: this.appetizer(),
      // mains: this.mains(),
      // dessert: this.desserts()
    }
  },
    addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
      name : dishName,
      price : dishPrice
    }
    this._courses[courseName].push(dish);

    // using setters

    // if( courseName === 'appetizers')
    //   this._courses.appetizers.push(dish)

    // else if( courseName === 'mains')
    //   this._courses.mains.push(dish)

    // else if( courseName === 'desserts')
    //   this._courses.desserts.push(dish)
  },
  getRandomDishFromCourse(courseName){
    const dishes = this._courses[courseName];
    const index = Math.floor(Math.random() * dishes.length);
    return dishes[index];
  },
  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');

    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Meals are ${appetizer.name}, ${main.name}, ${dessert.name} \nTotal Price: ${totalPrice}`;
  }
};

menu.addDishToCourse('appetizers', 'a1', 4);
menu.addDishToCourse('appetizers', 'a2', 2);
menu.addDishToCourse('appetizers', 'a3', 5);
menu.addDishToCourse('mains', 'm1', 100);
menu.addDishToCourse('mains', 'm2', 50);
menu.addDishToCourse('mains', 'm3', 80);
menu.addDishToCourse('desserts', 'd1', 10);
menu.addDishToCourse('desserts', 'd2', 20);
menu.addDishToCourse('desserts', 'd3', 15);

const meal = menu.generateRandomMeal();
console.log(meal);
