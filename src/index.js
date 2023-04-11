/*
 * Global Scope: The "foodImageLinks" variable has Global Scope since it was not declared within a function or block of code.
 *               The "foodImageLinks" variable can be accessed from anywhere within the index.js file.
 */
const foodImageLinks = [
    "./assets/food/cheeseburger.jpeg",
    "./assets/food/maple-bacon-burger.jpeg",
    "./assets/food/mushroom-burger.webp",
    "./assets/food/avocado-bun-burger.jpeg",
    "./assets/food/ramen-burger.jpeg",
    "./assets/food/french-fries.jpeg",
    "./assets/food/burrito.webp",
    "./assets/food/taco.jpeg",
    "./assets/food/hot-dog.jpeg",
    "./assets/food/onion-rings.jpeg"
]

// let image = document.getElementById('image-1')
// image.src = foodImageLinks[0]
// image = document.getElementById('image-2')
// image.src = foodImageLinks[1]
// image = document.getElementById('image-3')
// image.src = foodImageLinks[2]
// image = document.getElementById('image-4')
// image.src = foodImageLinks[3]
// image = document.getElementById('image-5')
// image.src = foodImageLinks[4]
// image = document.getElementById('image-6')
// image.src = foodImageLinks[5]
// image = document.getElementById('image-7')
// image.src = foodImageLinks[6]
// image = document.getElementById('image-8')
// image.src = foodImageLinks[7]
// image = document.getElementById('image-9')
// image.src = foodImageLinks[8]
// image = document.getElementById('image-10')
// image.src = foodImageLinks[9]

/*
 * Declaring JS functions: This is an example of a function declaration containing the lines of code to be executed when the function is invoked.
 */
function updateFoodImageLink(index){
    const image = document.getElementById(`image-${index + 1}`)
    image.src = foodImageLinks[index]
}
/*
 * Function Scope: The "image" variable declared within the "updateFoodImageLink" function has Function Scope.
 *                 Attempting to access the "image" variable from outside of the "updateFoodImageLink" function where it was declared will result in an uncaught ReferenceError which will state that "image" is not defined.
 */
//console.log(image)

// updateFoodImageLink(1)
// updateFoodImageLink(2)
// updateFoodImageLink(3)
// updateFoodImageLink(4)
// updateFoodImageLink(5)
// updateFoodImageLink(6)
// updateFoodImageLink(7)
// updateFoodImageLink(8)
// updateFoodImageLink(9)
// updateFoodImageLink(10)

for(let index = 0; index < foodImageLinks.length; index++){
    /*
     * Invoking JS functions: This is an example of invoking a function.
     *                        In this example, the "updateFoodImageLink" function is invoked with an argument of "index" (a variable containing an integer value).
     *                        The code inside of the "updateFoodImageLink" function declaration will execute.
     */
    updateFoodImageLink(index)
}
/*
 * Block Scope: The "index" variable declared within the for loop has Block Scope.
 *              Attempting to access the "index" variable from outside of the for loop where it was declared will result in an uncaught ReferenceError which will state that "index" is not defined.
 */
//console.log(index)

/*
 * Callback Functions: "prepareAndCookBurgerMeat" and "addIngredientsToBurger" are callback functions since they are functions that are passed as arguments into the "makeBurger" function.
 *                     "prepareAndCookBurgerMeat" and "addIngredientsToBurger" are then invoked inside of the "makeBurger" function.
 */
function prepareAndCookBurgerMeat(){
    console.log("Step 1: Divide the ground beef.")
    console.log("Step 2: Shape the beef patties.")
    console.log("Step 3: Set the heat of the pan to medium-high.")
    console.log("Step 4: Cook the burgers for 3 to 5 minutes.")
    console.log("Step 5: Flip the burgers and cook another 3 to 5 minutes.")
}

function addIngredientsToBurger(){
    console.log("Step 1: Toast the burger buns.")
    console.log("Step 2: Add the rest of the ingredients to the burger.")
}

/*
 * Higher Order Functions: The "makeBurger" function is a higher-order function since it is a function that accepts 2 functions as arguments, "prepareAndCookBurgerMeat" and "addIngredientsToBurger".
 */
function makeBurger(prepareAndCookBurgerMeat, addIngredientsToBurger){
    prepareAndCookBurgerMeat()
    console.log("Burgers are finished cooking! Now ready to add the rest of the ingredients to the burger!")
    addIngredientsToBurger()
    console.log("Burger is ready to eat! 🍔")
}

makeBurger(prepareAndCookBurgerMeat, addIngredientsToBurger)
