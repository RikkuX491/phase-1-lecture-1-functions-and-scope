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

function updateFoodImage(index){
    const image = document.getElementById(`image-${index + 1}`)
    image.src = foodImageLinks[index]
}


for(let index = 0; index < foodImageLinks.length; index++){
    updateFoodImage(index)
}

// const image2 = document.getElementById('image-2')
// image2.src = foodImageLinks[1]

// for(let index = 0; index < foodImageLinks.length; index++){
//     console.log(index)
// }

// function applesauce(banana, strawberry){
//     console.log(banana + strawberry)
// }

// const num1 = 4
// const num2 = 6
// const name2 = "Andrew"

// applesauce(num1, num2)
// for(let number = 1; number < 4; number++){
//     const personName = "Sally"
//     console.log(name2)
//     console.log(personName)
//     for(let number = 1; number < 4; number++){
//         const personName = "Bob"
//         console.log(personName)
//     }
// }
// console.log(personName)
// const mood = "happy"

// function printMood(){
//     console.log(mood)
// }

// printMood()

// function prepareAndCookBurgerMeat(){
//     console.log("Step 1: Divide the ground beef.")
//     console.log("Step 2: Shape the beef patties.")
//     console.log("Step 3: Set the heat of the pan to medium-high.")
//     console.log("Step 4: Cook the burgers for 3 to 5 minutes.")
//     console.log("Step 5: Flip the burgers and cook another 3 to 5 minutes.")
// }

// function addIngredientsToBurger(){
//     console.log("Step 1: Toast the burger buns.")
//     console.log("Step 2: Add the rest of the ingredients to the burger.")
// }

// function makeBurger(taco, pizza){
//     taco()
//     console.log("Burgers are finished cooking! Now ready to add the rest of the ingredients to the burger!")
//     pizza()
//     console.log("Burger is ready to eat! 🍔")
// }

// makeBurger(22, addIngredientsToBurger)